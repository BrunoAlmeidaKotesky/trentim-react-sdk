import { isAbsolute, resolve } from 'path';
import { getRendererName } from '@storybook/core-common';
import { virtualPreviewFile, virtualStoriesFile } from './virtual-file-names';
import { transformAbsPath } from './utils/transform-abs-path';
import type { ExtendedOptions } from './types';

export async function generateIframeScriptCode(options: ExtendedOptions) {
  const { presets } = options;
  const rendererName = await getRendererName(options);
  const previewAnnotations = await presets.apply('previewAnnotations', [], options);
  const resolvedPreviewAnnotations = previewAnnotations.map((entry) =>
    isAbsolute(entry) ? entry : resolve(entry)
  );
  const configEntries = [...resolvedPreviewAnnotations].filter(Boolean);

  const absoluteFilesToImport = (files: string[], name: string) =>
    files
      .map((el, i) => `import ${name ? `* as ${name}_${i} from ` : ''}'${transformAbsPath(el)}'`)
      .join('\n');

  const importArray = (name: string, length: number) =>
    new Array(length).fill(0).map((_, i) => `${name}_${i}`);

  // noinspection UnnecessaryLocalVariableJS
  /** @todo Inline variable and remove `noinspection` */
  // language=JavaScript
  const code = `
    // Ensure that the client API is initialized by the framework before any other iframe code
    // is loaded. That way our client-apis can assume the existence of the API+store
    import { configure } from '${rendererName}';

    import * as clientApi from "@storybook/client-api";
    import { logger } from '@storybook/client-logger';
    ${absoluteFilesToImport(configEntries, 'config')}
    import * as preview from '${virtualPreviewFile}';
    import { configStories } from '${virtualStoriesFile}';

    const {
      addDecorator,
      addParameters,
      addLoader,
      addArgs,
      addArgTypes,
      addStepRunner,
      addArgTypesEnhancer,
      addArgsEnhancer,
      setGlobalRender,
    } = clientApi;

    const configs = [${importArray('config', configEntries.length)
      .concat('preview.default')
      .join(',')}].filter(Boolean)

    configs.forEach(config => {
      Object.keys(config).forEach((key) => {
        const value = config[key];
        switch (key) {
          case 'args': {
            return addArgs(value);
          }
          case 'argTypes': {
            return addArgTypes(value);
          }
          case 'decorators': {
            return value.forEach((decorator) => addDecorator(decorator, false));
          }
          case 'loaders': {
            return value.forEach((loader) => addLoader(loader, false));
          }
          case 'parameters': {
            return addParameters({ ...value }, false);
          }
          case 'argTypesEnhancers': {
            return value.forEach((enhancer) => addArgTypesEnhancer(enhancer));
          }
          case 'argsEnhancers': {
            return value.forEach((enhancer) => addArgsEnhancer(enhancer))
          }
          case 'render': {
            return setGlobalRender(value)
          }
          case 'globals':
          case 'globalTypes': {
            const v = {};
            v[key] = value;
            return addParameters(v, false);
          }
          case 'decorateStory':
          case 'applyDecorators':
          case 'renderToDOM': {
            return null; // This key is not handled directly in v6 mode.
          }
          case 'runStep': {
            return addStepRunner(value);
          }
          default: {
            // eslint-disable-next-line prefer-template
            return console.log(key + ' was not supported :( !');
          }
        }
      });
    })
    
    /* TODO: not quite sure what to do with this, to fix HMR
    if (import.meta.hot) {
        import.meta.hot.accept();    
    }
    */

    configStories(configure);
    `.trim();
  return code;
}
