import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    preview: {
      // Aligns with lighthouserc.json and GitHub Actions serve port
      port: 5000,
      strictPort: true,
    },
    build: {
      // Target modern browsers for smallest, fastest output
      target: 'esnext',
      // Inline source maps skipped in production; helpful in dev
      sourcemap: mode === 'development',
      // Skip compressed-size computation for faster CI builds
      reportCompressedSize: false,
      // Split CSS per chunk for better cache granularity
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/motion')) {
              return 'motion-vendor';
            }
            if (id.includes('node_modules/@xyflow')) {
              return 'reactflow-vendor';
            }
            if (
              id.includes('node_modules/class-variance-authority') ||
              id.includes('node_modules/clsx') ||
              id.includes('node_modules/tailwind-merge')
            ) {
              return 'ui-vendor';
            }
          },
        },
      },
    },
  };
});
