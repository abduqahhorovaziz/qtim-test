# Landing for QTIM

## Technologies
- **TypeScript**: Write safer and more maintainable code with TypeScript.
- **ESLint & Prettier**: Maintain code quality and consistency with ESLint and Prettier.
- **Tailwind CSS**: Rapidly build custom user interfaces with Tailwind CSS.
- **Pinia**: Best store for vue & nuxt
- **Custom Composables**: Simplify API handling and metadata management with custom composable utilities like `useApi` and `useMeta`.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher but LTS v20.11 recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/) package manager (pnpm recommended)


## Installation
1. Clone this repository to your local machine using the following command:
```bash
git clone https://github.com/manuchekhr32/nuxt-starter
```

2. Navigate to the cloned directory:
```bash
cd qtim-test
```

3. Install the project dependencies using NPM:
```bash
pnpm i
```

## Configuration
1. In the root directory of the project, you will find a file named `.env.example`.
2. Make a copy of this file and rename it to `.env`:
```bash
cp .env.example .env
```

3. Open the newly created `.env` file in a text editor and update the necessary configuration values according to your project.
- __ESLint & Prettier__: Configuration files for ESLint and Prettier can be found in the project root.
- __Tailwind CSS__: Customize Tailwind CSS settings in the tailwind.config.js file.

## Usage

To start the development server, run the following command:
```
pnpm dev
```

This command will compile the project and launch a local development server. Access `http://localhost:3000` in your browser to view the application.

## Building for Production
To build the project for production, use the following command:

```
pnpm build
```
The optimized and minified code will be generated in the `dist` directory.
