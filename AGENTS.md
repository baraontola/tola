<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Package manager

Use `bun` — not npm, pnpm, or yarn. Lockfile is `bun.lock`.

```bash
bun install        # install all workspaces
bun add <pkg>      # add dependency
bun run <script>   # run a script
```

## Tasks

All tasks run through Turborepo. Execute from root:

```bash
bun run build       # turbo build
bun run dev         # turbo dev  (persistent, no cache)
bun run lint        # turbo lint
bun run typecheck   # turbo typecheck
bun run format      # turbo format (Prettier)
```

Run for a single workspace:

```bash
bun run --filter=web build
bun run --filter=@workspace/ui typecheck
```

## Monorepo structure

- `apps/web` — Next.js 16 app (entrypoint)
- `packages/ui` — `@workspace/ui` (React component library, shadcn)
- `packages/eslint-config` — `@workspace/eslint-config` (flat config, ESLint 9)
- `packages/typescript-config` — `@workspace/typescript-config`

## shadcn/ui

Components live in **packages/ui**, not in the app.

```bash
bunx shadcn@latest add button -c apps/web
```

- This places the component source in `packages/ui/src/components/`
- Import as `@workspace/ui/components/<name>` (not `@/components/ui/`)
- `utils` alias: `@workspace/ui/lib/utils` (not `@/lib/utils`)
- Style: `radix-luma`, RTL enabled, icon library: `lucide`
- Two `components.json` files: `apps/web/` and `packages/ui/` — both must be consistent

## Imports

```ts
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"  // app-local only
```

The `@/` prefix resolves to `apps/web/`. The `@workspace/ui/*` prefix is configured in tsconfig paths.

## Key toolchain versions & quirks

- **Next.js 16.2.6** — see the warning at the top of this file
- **React 19.2.4**
- **Tailwind CSS v4** — uses `@tailwindcss/postcss`, no `tailwind.config.ts`, CSS-first config
- **TypeScript 5** — strict mode, `moduleResolution: "NodeNext"` (base), `"Bundler"` (Next.js apps)
- **ESLint 9** — flat config (`eslint.config.js`), not `.eslintrc.*`
- **Prettier** — `prettier-plugin-tailwindcss` sorts class order; rules in `.prettierrc`

## Tests

No test framework is configured anywhere in this repo. Do not attempt to run tests.

## Style conventions

- No semicolons (`semi: false`)
- Double quotes
- Trailing commas (ES5)
- Tailwind classes auto-sorted by `prettier-plugin-tailwindcss`

## What's not here

- No CI/CD workflows
- No pre-commit hooks
- No test framework
- No Makefile / task runner scripts beyond `turbo`
