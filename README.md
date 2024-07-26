# React with TypeScript Boilerplate using Vite and PNPM

This is a boilerplate project for React with TypeScript, using Vite as the server and PNPM as the package manager. It includes all the necessary files and dependencies to get started with a React project.

## Installation

To get started with this boilerplate, you'll need to have PNPM and Node.js installed on your computer. Once you have those, follow these steps:

Clone this repository to your computer.

`HTTPS`

```bash
 git clone https://github.com/harkkozz/react-ts-vite-pnpm.git
```

`SSH`

```bash
 git clone git@github.com:harkkozz/react-ts-vite-pnpm.git
```

Navigate to the project directory in your terminal.

```bash
 cd react-ts-vite-pnpm
```

Run `pnpm install` to install the project dependencies.
Run local server

```bash
pnpm start
```

## Usage

To run the development server, simply run `pnpm start` in your terminal. This will start the Vite development server, and your app should be available at http://localhost:3000/.

Replace `.env.example` with `.env`

To build your app for production, run `pnpm run build`. This will build your app and output the files to the dist/ directory.

## PNPM Configuration

This project uses PNPM as the package manager, and includes a peerDependencyRules configuration to ignore missing peer dependencies for certain packages.

## Linting and Formatting

This project includes pre-commit hooks using husky and lint-staged. When you commit your changes, lint-staged will run ESLint and Prettier on your staged files. If there are any errors or warnings, your commit will be blocked.

To manually run the linter or formatter, you can use the following npm scripts:

- `pnpm run lint`: Runs ESLint on your code.
- `pnpm run format`: Formats your code using Prettier.
