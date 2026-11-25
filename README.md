# Diksha portfolio

Run `npm install` and `npm run dev`, then open [localhost:3000](http://localhost:3000).

The scroll-driven hero lives in `components/ui/helix-ribbon-hero.tsx`; the homepage uses it through `components/ui/demo.tsx`. It needs only React and browser APIs, not an additional animation library, icon package, or context provider. The homepage uses the portrait at `public/profile_photo.jpg` and the original Blooming Darkness project sheets in `public/blooming_darkness`. Smaller WebP copies in `public/blooming_darkness/previews` keep the animated ribbon lightweight; the full sheets appear in the collection gallery. Add real contact details before publishing. `autoPlay` is enabled for the preview; omit it for a scroll-only portfolio.

This app already uses TypeScript (`tsconfig.json`), Tailwind CSS (`app/globals.css`), and the `@/*` alias. Global styles are in `app/globals.css`, while the hero carries its own scoped CSS. There is no shadcn configuration yet. To use the shadcn CLI for future UI primitives, run `npx shadcn@latest init` from the repository root and set its component alias to `@/components` (with UI components in `components/ui`) and CSS path to `app/globals.css`. Keeping `components/ui` makes the hero and any generated primitives resolve consistently through `@/components/ui/...`; without that directory, the provided demo import would fail.

Check the integration with `npm run lint` and `npm run build`.
