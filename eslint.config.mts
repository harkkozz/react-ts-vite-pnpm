import { fixupPluginRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import typescriptEslintParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginNoRelativeImports from 'eslint-plugin-no-relative-import-paths';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('typescript-eslint').Config} */
export default defineConfig([
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    ignores: ['src/services/client/**/*.ts', 'src/services/client/*.ts', 'vite.config.ts'],
  },
  {
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: { project: ['tsconfig.json'], ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
  },
  {
    plugins: {
      pluginJs,
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
      'react-refresh': pluginReactRefresh,
      'react-hooks': fixupPluginRules(pluginReactHooks),
      'no-relative-import-paths': pluginNoRelativeImports,
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-useless-escape': 'off',
      'array-callback-return': 'warn',
      complexity: ['warn', 35],
      eqeqeq: ['warn', 'smart'],
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-duplicate-imports': 0,
      'no-nested-ternary': 'warn',
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true, rootDir: 'src' },
      ],
      'no-unneeded-ternary': 'warn',
      'no-unused-vars': 'off',
      'react-refresh/only-export-components': 'warn',
      'react/display-name': 0,
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: true,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      'require-await': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-uses-react': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'unused-imports/no-unused-imports': 'error',
      curly: ['error', 'all'],
      'lines-around-comment': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  prettierConfig,
]);
