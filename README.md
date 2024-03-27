# Nuxt 3 + Feature-Sliced Design | Pure Template

[It was taken as a basis](https://github.com/SbokyZahodi/FSD-Nuxt3-template) thanks [@SbokyZahodi](https://github.com/SbokyZahodi)

## Folders description

| Folder   | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| app      | App FSD Layer                                                         |
| pages    | Pages FSD Layer                                                       |
| widgets  | Widgets FSD Layer                                                     |
| features | Features FSD Layer                                                    |
| entities | Entities FSD Layer                                                    |
| shared   | Shared FSD Layer                                                      |
|          |                                                                       |
| layouts  | Nuxt Layouts                                                          |
| public   | Public files                                                          |
| routes   | the **equivalent of _pages_** in native Nuxt **(see nuxt.config.ts)** |
| server   | Nuxt Server Routes                                                    |


## Remove junk README.md files

### UNIX
```bash
rm -rf app/README.md entities/README.md features/README.md pages/README.md shared/README.md widgets/README.md
```

### WINDOWS
```bash
del .\app\README.md 
del .\entities\README.md 
del .\features\README.md 
del .\pages\README.md 
del .\shared\README.md 
del .\widgets\README.md
```


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
