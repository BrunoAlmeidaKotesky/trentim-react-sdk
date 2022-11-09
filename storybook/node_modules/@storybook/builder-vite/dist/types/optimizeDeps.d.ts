import type { InlineConfig as ViteInlineConfig } from 'vite';
import type { ExtendedOptions } from './types';
export declare function getOptimizeDeps(config: ViteInlineConfig, options: ExtendedOptions): Promise<{
    entries: string[];
    include: string[];
}>;
