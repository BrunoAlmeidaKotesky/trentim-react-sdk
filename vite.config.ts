import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic'
        }),
        dts({
            insertTypesEntry: true,
        }),
        visualizer({
            gzipSize: true,
            open: true
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@models': resolve(__dirname, 'src/models'),
            '@helpers': resolve(__dirname, 'src/helpers'),
            '@decorators': resolve(__dirname, 'src/Decorators'),
            '@hooks': resolve(__dirname, 'src/hooks')
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'trentim-react-sdk',
            formats: ['es', 'umd'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                }
            }
        },
    },
});