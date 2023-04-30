import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    sourcemap: true,
  },
});
