## Pairium Landing

- Static React + TypeScript app built with Bun's HTML entry bundler.
- Tailwind/Shadcn UI styles live in `src/index.css` and `tailwind.config.ts`.
- Deployable as a single-page app on Firebase Hosting (`firebase.json`).

### Setup

- Install dependencies with `bun install`.
- If network access is blocked (like in this workspace sandbox), rerun the install locally before building.

### Development

- `bun run dev` starts the Bun dev server.
- Edits live inside `src/`.

### Build

- `bun run build` outputs to `build/`.
- Static assets live in `src/assets/` so Bun bundles them automatically.

### Deploy

- After `bun run build`, run `firebase deploy`.
- Update `.firebaserc` with your actual project id first.
- To run with a specific account, use `bun run build` and `firebase deploy --only hosting --account <account_email>`.