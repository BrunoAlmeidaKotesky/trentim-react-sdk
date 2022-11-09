import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

const libPath = __dirname.replace('/storybook', '/lib');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(libPath, 'src'),
      '@components': resolve(libPath, 'src/components'),
      '@models': resolve(libPath, 'src/models'),
      '@helpers': resolve(libPath, 'src/helpers'),
      '@decorators': resolve(libPath, 'src/decorators'),
      '@hooks': resolve(libPath, 'src/hooks')
    }
  },
})
