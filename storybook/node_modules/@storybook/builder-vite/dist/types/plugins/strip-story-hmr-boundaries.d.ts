import type { Plugin } from 'vite';
/**
 * This plugin removes HMR `accept` calls in story files.  Stories should not be treated
 * as hmr boundaries, but vite has a bug which causes them to be treated as boundaries
 * (https://github.com/vitejs/vite/issues/9869).
 */
export declare function stripStoryHMRBoundary(): Plugin;
