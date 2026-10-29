/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { reactCompilerPreset } from '@vitejs/plugin-react';

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()]
    })
  ],
  test: {
    // Включает глобальные методы describe, it, expect в обычных файлах *.test.ts
    globals: true,
    // Быстрое виртуальное DOM-окружение для тестов компонентов (React/Vue)
    environment: 'happy-dom',
    // Обязательно исключаем файлы Storybook, чтобы Vitest их вообще не трогал
    exclude: [
      '**/node_modules/**',
      '**/.storybook/**',
      '**/*.stories.{ts,tsx,js,jsx}',
      '**/*.mdx',
    ],
  }
});
