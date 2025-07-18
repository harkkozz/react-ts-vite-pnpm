import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsConfigPath from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), svgr(), tsConfigPath(), tailwindcss()],
  server: { port: 3000 },
});
