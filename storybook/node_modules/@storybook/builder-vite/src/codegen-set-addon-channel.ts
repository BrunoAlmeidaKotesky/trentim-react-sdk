import { getFrameworkName } from '@storybook/core-common';

import type { ExtendedOptions } from './types';

export async function generateAddonSetupCode(options: ExtendedOptions) {
  const framework = await getFrameworkName(options);

  return `
    import { createPostMessageChannel, createWebSocketChannel, addons } from '${framework}';

    const channel = createPostMessageChannel({ page: 'preview' });
    addons.setChannel(channel);
    window.__STORYBOOK_ADDONS_CHANNEL__ = channel;

    const { SERVER_CHANNEL_URL } = globalThis;
    if (SERVER_CHANNEL_URL) {
      const serverChannel = createWebSocketChannel({ url: SERVER_CHANNEL_URL });
      addons.setServerChannel(serverChannel);
      window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel;
    }
  `.trim();
}
