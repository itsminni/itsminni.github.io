# Portfolio

Personal portfolio built with React, TypeScript and Vite. A single page presents selected projects, background and contact details in Italian and English.

## Development

Use Node.js 22.12+ (or a compatible newer LTS version).

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

CI runs lint and the production build on pushes and pull requests to `main`.

## Content and design

- `src/content.ts`: Italian and English text, project descriptions, skills and background.
- `src/App.tsx`: sections, mobile navigation, language selection and accessible project dialogs.
- `src/index.css`: graphite and sage palette, layout and responsive styles.
- `index.html`: page title, description and social metadata.
