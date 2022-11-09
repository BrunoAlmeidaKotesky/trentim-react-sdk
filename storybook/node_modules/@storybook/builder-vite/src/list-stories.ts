import * as path from 'path';
import { promise as glob } from 'glob-promise';
import { normalizeStories } from '@storybook/core-common';

import type { Options } from '@storybook/types';

export async function listStories(options: Options) {
  return (
    await Promise.all(
      normalizeStories(await options.presets.apply('stories', [], options), {
        configDir: options.configDir,
        workingDir: options.configDir,
      }).map(({ directory, files }) => {
        const pattern = path.join(directory, files);

        return glob(path.isAbsolute(pattern) ? pattern : path.join(options.configDir, pattern), {
          follow: true,
        });
      })
    )
  ).reduce((carry, stories) => carry.concat(stories), []);
}
