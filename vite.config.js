import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; 
import obfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  base: '/NEXTGEN-JSON-PROMPT-GENERATOR/',
  plugins: [
    react(),
    tailwindcss(), 
    obfuscator({
      options: {
        controlFlowFlattening: true,
        deadCodeInjection: true,
        debugProtection: true,
        disableConsoleOutput: false,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        unicodeEscapeSequence: true
      },
    }),
  ],
  build: {
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 2000,
  }
});