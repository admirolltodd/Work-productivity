# Bamboo Close 🎋

A mobile-first, offline-capable nightly closing checklist for the restaurant.
No accounts, no server, no build step — one `index.html` plus a service
worker. All data lives in your phone's localStorage.

**Before your first night:** open **Settings** and set the real par levels
for Avocado and Rice (the seeded values `10` and `4` are placeholders) and
the rice unit (containers / lbs / batches — it ships as "containers").

## Features

- **Tonight view** — collapsible sections, one-tap check-off, big numeric
  entry for counts, per-task notes, progress bar, Finish Close summary with
  share/copy.
- **Business-day aware** — the "day" runs 5:00am → 4:59am, so a box checked
  at 12:40am still lands on the right night's close.
- **Prep list** — a standard checklist (tartar, kakasu, bamboo sauce, spicy
  mayo, asparagus, ginger backups, wasabi backups — editable in Settings)
  you add with one tap, plus a free-text field for anything else; counts
  below par auto-add "Prep/order: …" items. Last night's prep list is
  pinned to the top of the next night's view.
- **History** — every close with completion %, duration, low-stock flags,
  full detail, and 14-day count sparklines.
- **Settings** — edit every task (add / rename / reorder / archive, section,
  type, par, unit) without touching code; JSON export/import backups;
  dark/light theme.
- **PWA** — installable to the home screen, works fully offline after the
  first load.

## Deploy to GitHub Pages in 5 steps

1. **Create a GitHub repository** (public or private) and push these files
   to the default branch — `index.html`, `manifest.webmanifest`, `sw.js`,
   `icon.svg`, `icon-maskable.svg`, `README.md` must all sit at the repo
   root.
2. On GitHub, open the repo's **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   pick your default branch and the **/ (root)** folder, then **Save**.
4. Wait a minute, then open the URL GitHub shows at the top of the Pages
   settings (it looks like `https://<username>.github.io/<repo>/`). Load it
   once on your phone while online so the service worker can cache the app.
5. In Chrome on Android, tap the **⋮ menu → Add to Home screen → Install**.
   From then on it launches full-screen from your home screen and works with
   no signal at all.

**Updating:** push changes, bump `CACHE_VERSION` in `sw.js` (e.g.
`bamboo-close-v2`) so phones fetch the new version, and reopen the app twice
(once to download, once to run it).

## Backups

Data never leaves the phone, so the phone is the single point of failure.
Use **Settings → Export backup** every few weeks (the app reminds you about
once a month). Import restores everything exactly as exported.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app — markup, styles, and logic inline |
| `sw.js` | Service worker (cache-first app shell → offline support) |
| `manifest.webmanifest` | PWA install metadata |
| `icon.svg`, `icon-maskable.svg` | App icons |
