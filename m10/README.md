# Module 10 — Notes

## Next.js 16 layout change (applied 2026-04-25)

Every clip in this module (`m10-clip-010` through `m10-clip-110`) was
updated to run on Next.js 16.

Two things changed in each clip:

1. **`package.json`** — `next` bumped from `^15.x` to `^16.2.4`.
2. **Directory layout** — `pages/` was moved into `src/pages/`.

### Why the directory move was needed

These clips use both routers at once:

- `src/app/[[...route_name]]/page.jsx` — App Router catch-all that wraps
  the existing `<App />` component.
- `pages/api/speakers/...` — Pages Router API routes serving `/api/*`.

In Next.js 15 you could have `pages/` at the project root and `app/`
under `src/` simultaneously. Next.js 16 promoted that to a hard error:

```
> `pages` and `app` directories should be under the same folder
```

Moving `pages/` to `src/pages/` puts both routers under the same parent
(`src/`), which Next 16 accepts. The `/api/*` URLs are unchanged — Next
maps `src/pages/api/...` to the same routes as before, so no component
or fetch URL needed editing.

### Verifying a clip still works

```bash
cd m10/m10-clip-NNN
rm -rf node_modules package-lock.json .next
npm install
npm run build
npm run dev
```
