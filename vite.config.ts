/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsConfigPath from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), svgr(), tsConfigPath(), checker({ typescript: true })],
  server: { port: 3000 },
  test: {
    setupFiles: './src/vitest.setup.ts',
    environment: 'happy-dom',
    passWithNoTests: true,
    include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    outputFile: { 'vitest-sonar-reporter': 'sonar-report.xml' },
    coverage: {
      reporter: ['text', 'lcov', 'html'],
      include: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      exclude: ['src/**/*.test.{js,ts,jsx,tsx}', 'src/**/*.config.{js,ts,jsx,tsx}'],
      provider: 'istanbul',
      all: true,
      lines: 30,
      functions: 30,
      branches: 50,
      statements: 30
    }
  }
});
