import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';


export default defineConfig({
  plugins: [ dts(),  viteStaticCopy({
    targets: [
      {
        src:  'src', 
        dest: '.', 
      },
    ],
  })],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'umd'],
      name: 't4-utils',
      fileName: (format) => `index.${format}.js`,
    },
 
    rollupOptions: {
    external: [/^src.*/, /^src*/],
    },
    sourcemap: true,
  },

});
