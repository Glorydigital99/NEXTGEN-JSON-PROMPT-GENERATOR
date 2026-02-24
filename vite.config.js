import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import obfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    obfuscator({
      options: {
        controlFlowFlattening: true, // Bikin alur logika berantakan (pusing dibaca)
        deadCodeInjection: true, // Masukin kode sampah buat pengecoh
        debugProtection: true, // Bakal ngetrigger 'debugger' kalau ada yang coba inspect
        disableConsoleOutput: false, // Biar console lu tetep bisa munculin laporan admin
        stringArray: true,
        stringArrayEncoding: ['base64'], // API Key dan teks lu bakal jadi kode Base64
        unicodeEscapeSequence: true
      },
    }),
  ],
  build: {
    sourcemap: false, // MATIKAN SOURCE MAPS! Biar jejak kode asli lu di Sources hilang total
    minify: 'terser', // Pake kompresi level tinggi
    chunkSizeWarningLimit: 2000,
  }
});