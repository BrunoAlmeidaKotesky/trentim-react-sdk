import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { visualizer } from "rollup-plugin-visualizer";
import fs from 'fs';

const generateComponentsEntries = () => {
    const components = fs.readdirSync(resolve(__dirname, 'src/components'));
    const entries = {};
    for (const component of components) {
        const name = component.split('.')[0];
        entries[name] = resolve(__dirname, `src/components/${component}`);
    }
    console.log(entries);
    return entries;
}

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic'
        }),
        dts({
            outputDir: 'dist',
            beforeWriteFile: (path, content) => {
                //console.log(path);
                //const folderReg = /(\/models|\/helpers|\/hooks|\/decorators|\/components)/g;
                //let filePath = path.replace('/src/', '/').replace(folderReg, '');
                //console.log(filePath);
                //return {filePath, content};
            }
        }),
        visualizer({
            gzipSize: true,
            open: false
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@models': resolve(__dirname, 'src/models'),
            '@helpers': resolve(__dirname, 'src/helpers'),
            '@decorators': resolve(__dirname, 'src/decorators'),
            '@hooks': resolve(__dirname, 'src/hooks')
        }
    },
    build: {
        lib: {
            entry: {
                ...generateComponentsEntries(),
                helpers: resolve(__dirname, 'src/helpers/index.ts'),
                decorators: resolve(__dirname, 'src/decorators/index.ts'),
                hooks: resolve(__dirname, 'src/hooks/index.ts'),
                models: resolve(__dirname, 'src/models/index.ts'),
            },
            name: 'trentim-react-sdk',
            formats: ['es', 'cjs'],
            fileName: (format) => `[name].${format}.js`,
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