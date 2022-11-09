import { isAbsolute, resolve } from 'path';
import { loadPreviewOrConfigFile, getFrameworkName } from '@storybook/core-common';
import { virtualStoriesFile, virtualAddonSetupFile } from './virtual-file-names';
import { transformAbsPath } from './utils/transform-abs-path';
import type { ExtendedOptions } from './types';

export async function generateModernIframeScriptCode(options: ExtendedOptions) {
  const { presets, configDir } = options;
  const frameworkName = await getFrameworkName(options);

  const previewOrConfigFile = loadPreviewOrConfigFile({ configDir });
  const previewAnnotations = await presets.apply('previewAnnotations', [], options);
  const resolvedPreviewAnnotations = [...previewAnnotations].map((entry) =>
    isAbsolute(entry) ? entry : resolve(entry)
  );
  const relativePreviewAnnotations = [...resolvedPreviewAnnotations, previewOrConfigFile]
    .filter(Boolean)
    .map((configEntry) => transformAbsPath(configEntry as string));

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const generateHMRHandler = (frameworkName: string): string => {
    // Web components are not compatible with HMR, so disable HMR, reload page instead.
    if (frameworkName === '@storybook/web-components-vite') {
      return `
      if (import.meta.hot) {
        import.meta.hot.decline();
      }`.trim();
    }

    return `
    if (import.meta.hot) {
      import.meta.hot.accept('${virtualStoriesFile}', (newModule) => {
      // importFn has changed so we need to patch the new one in
      preview.onStoriesChanged({ importFn: newModule.importFn });
      });

    import.meta.hot.accept(${JSON.stringify(
      relativePreviewAnnotations
    )}, ([...newConfigEntries]) => {
      const newGetProjectAnnotations =  () => composeConfigs(newConfigEntries);

      // getProjectAnnotations has changed so we need to patch the new one in
      preview.onGetProjectAnnotationsChanged({ getProjectAnnotations: newGetProjectAnnotations });
    });
  }`.trim();
  };

  /**
   * This code is largely taken from https://github.com/storybookjs/storybook/blob/d1195cbd0c61687f1720fefdb772e2f490a46584/lib/builder-webpack4/src/preview/virtualModuleModernEntry.js.handlebars
   * Some small tweaks were made to `getProjectAnnotations` (since `import()` needs to be resolved asynchronously)
   * and the HMR implementation has been tweaked to work with Vite.
   * @todo Inline variable and remove `noinspection`
   */
  const code = `
    import { ClientApi, composeConfigs, PreviewWeb } from '${frameworkName}';

    import '${virtualAddonSetupFile}';
    import { importFn } from '${virtualStoriesFile}';

    const getProjectAnnotations = async () => {
      const configs = await Promise.all([${relativePreviewAnnotations
        .map((previewAnnotation) => `import('${previewAnnotation}')`)
        .join(',\n')}])
      return composeConfigs(configs);
    }

    const preview = new PreviewWeb();

    window.__STORYBOOK_PREVIEW__ = preview;
    window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
    window.__STORYBOOK_CLIENT_API__ = new ClientApi({ storyStore: preview.storyStore });

    preview.initialize({ importFn, getProjectAnnotations });
    
    ${generateHMRHandler(frameworkName)};
    `.trim();
  return code;
}
