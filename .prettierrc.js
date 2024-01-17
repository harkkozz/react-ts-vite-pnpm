const { readdirSync } = require('node:fs');
const { baseUrl } = require('./tsconfig.json').compilerOptions;

const baseUrlSubdirectories = readdirSync(`${__dirname}/${baseUrl}`, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() || entry.isFile())
  .map((entry) => entry.name.replace('.ts', ''));
const baseUrlSubdirectoryRegex = `^(${baseUrlSubdirectories.join('|')})`;

module.exports = {
  endOfLine: 'auto',
  semi: true,
  bracketSpacing: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  importOrder: ['^react$', '<THIRD_PARTY_MODULES>', baseUrlSubdirectoryRegex, '^[./]'],
  importOrderCaseInsensitive: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
