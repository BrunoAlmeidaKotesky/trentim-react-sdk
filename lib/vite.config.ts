import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { visualizer } from "rollup-plugin-visualizer";
import fs from 'fs';
import libCss from 'vite-plugin-libcss';

const generateComponentsEntries = () => {
    const components = fs.readdirSync(resolve(__dirname, 'src/components'));
    const entries = {};
    for (const component of components) {
        const name = component.split('.')[0];
        entries[name] = resolve(__dirname, `src/components/${component}`);
    }
    return entries;
}

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic'
        }),
        libCss(),
        dts({
            outputDir: 'dist',
            beforeWriteFile: (path, content) => {
                //console.log(path);
                //Replace by the name of the folder
                const splittedPath = path.split('/').map(p => p);
                const lastItem = splittedPath[splittedPath.length - 1];
                const beforeLastItem = splittedPath[splittedPath.length - 2];
                const component = splittedPath[splittedPath.length - 3];
                if (lastItem === 'index.d.ts') {
                    //Write an copy file, but at one upper level with the name of the beforeLastItem
                    const createContent = (path: string) => `export * from './dist/${path}/index'`;
                    console.log(splittedPath.join('/'));
                    if(beforeLastItem === 'dist' || beforeLastItem === 'styles') return;
                    let newContent = component.toLowerCase() === 'components' ? createContent(`components/${beforeLastItem}`) : createContent(beforeLastItem);
                    fs.writeFileSync(`${__dirname}/${beforeLastItem}.d.ts`, newContent);
                }
                return { path, content };
            },
            afterBuild: () => {
                //Copy every `[file].d.ts` from dist to the root of __dirname and then create a index.d.ts that ///references this files
                const files = fs.readdirSync(resolve(__dirname));
                const dtsFiles = files.filter(f => f.endsWith('.d.ts'));
                const packageJson = require(resolve(__dirname, 'package.json'));
                packageJson.files = ['dist'];
                packageJson.exports = {};
                for (const file of dtsFiles) {
                    const destPath = resolve(__dirname, `${file}`);
                    fs.copyFileSync(resolve(__dirname, file), destPath);
                    //Then update package.json `files` to include all this files
                    packageJson.files = [...packageJson.files, file];
                    //update all package.json `exports` to include the keys with the file name with import and require
                    const exports = packageJson.exports;
                    exports[`./${file.replace('.d.ts', '')}`] = {
                        import: `./dist/${file.replace('.d.ts', '.es.js')}`,
                        require: `./dist/${file.replace('.d.ts', '.cjs.js')}`
                    }
                    fs.writeFileSync(resolve(__dirname, 'package.json'), JSON.stringify(packageJson, null, 2));
                }
                let indexContent = '';
                for (const file of dtsFiles) {
                    if (file !== 'index.d.ts')
                        indexContent += `/// <reference path="${file}" />\n`; // 
                }
                fs.writeFileSync(resolve(__dirname, 'index.d.ts'), indexContent);

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
                index: resolve(__dirname,'src/index.ts'),
            },
            name: 'trentim-react-sdk',
            formats: ['es', 'cjs'],
            fileName: (format) => { return `[name].${format}.js` },
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        },
    },
});