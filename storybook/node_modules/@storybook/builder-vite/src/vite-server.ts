import type { Server } from 'http';
import { createServer } from 'vite';
import { commonConfig } from './vite-config';
import type { ExtendedOptions } from './types';
import { getOptimizeDeps } from './optimizeDeps';

export async function createViteServer(options: ExtendedOptions, devServer: Server) {
  const { presets } = options;

  const commonCfg = await commonConfig(options, 'development');

  const config = {
    ...commonCfg,
    // Set up dev server
    server: {
      middlewareMode: true,
      hmr: {
        port: options.port,
        server: devServer,
      },
      fs: {
        strict: true,
      },
    },
    appType: 'custom' as const,
    optimizeDeps: await getOptimizeDeps(commonCfg, options),
  };

  const finalConfig = await presets.apply('viteFinal', config, options);
  return createServer(finalConfig);
}
