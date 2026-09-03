# Χριστίνα Ποτουρίδου — Website

Personal website for Χριστίνα Ποτουρίδου, ψυχολόγος για παιδιά, εφήβους και ενήλικες. Greek-only, built with React + Vite.

## Stack

- Vite + React 19 + TypeScript (strict)
- React Router
- Tailwind CSS v4
- Vitest + React Testing Library
- ESLint (flat config) + Prettier
- Husky + lint-staged pre-commit hook

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command                           | Description                          |
| --------------------------------- | ------------------------------------ |
| `npm run dev`                     | Start the dev server                 |
| `npm run build`                   | Type-check and build for production  |
| `npm run preview`                 | Preview the production build locally |
| `npm run typecheck`               | Type-check without emitting          |
| `npm run lint`                    | Run ESLint                           |
| `npm run format` / `format:check` | Run/check Prettier formatting        |
| `npm run test`                    | Run Vitest                           |

Or via `make check` to run typecheck, lint, test, and build in sequence.

## Deployment

Deployed on Netlify (`netlify.toml`: build command `npm run build`, publish dir `dist`, with a SPA redirect for React Router).
