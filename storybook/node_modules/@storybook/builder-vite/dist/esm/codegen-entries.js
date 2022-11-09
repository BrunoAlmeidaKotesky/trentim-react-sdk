import { loadPreviewOrConfigFile } from '@storybook/core-common';
import slash from 'slash';
import { normalizePath } from 'vite';
import { listStories } from './list-stories';

const absoluteFilesToImport = (files, name) => files.map((el, i) => `import ${name ? `* as ${name}_${i} from ` : ''}'/@fs/${normalizePath(el)}'`).join('\n');

export async function generateVirtualStoryEntryCode(options) {
  const storyEntries = await listStories(options);
  const resolveMap = storyEntries.reduce((prev, entry) => Object.assign({}, prev, {
    [entry]: entry.replace(slash(process.cwd()), '.')
  }), {});
  const modules = storyEntries.map((entry, i) => `${JSON.stringify(entry)}: story_${i}`).join(',');
  return `
    ${absoluteFilesToImport(storyEntries, 'story')}

    function loadable(key) {
      return {${modules}}[key];
    }
    
    Object.assign(loadable, {
      keys: () => (${JSON.stringify(Object.keys(resolveMap))}),
      resolve: (key) => (${JSON.stringify(resolveMap)}[key])
    });

    export function configStories(configure) {
      configure(loadable, { hot: import.meta.hot }, false);
    }
  `.trim();
}
export async function generatePreviewEntryCode({
  configDir
}) {
  const previewFile = loadPreviewOrConfigFile({
    configDir
  });
  if (!previewFile) return '';
  return `import * as preview from '${slash(previewFile)}';
  export default preview;`;
}