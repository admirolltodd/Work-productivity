# Bamboo Close 🎋

A mobile-first, offline-capable nightly closing checklist for the restaurant.
No accounts, no server, no build step — one `index.html` plus a service
worker. All data lives in your phone's localStorage.

**Before your first night:** open **Settings** and set the real par levels
for Avocados (counted in cases, total for the day) and Rice (counted in
bags — the seeded values are placeholders), plus pars for any sauce
bottles you want low-stock warnings on.

## Features

- **Home screen** — one button each for the Opening checklist, the Closing
  checklist, the Sauce bottle inventory, and the Calendar.
- **Opening checklist** — sake machine, ovens, dish rack, all the morning
  prep (thaw raw shrimp comes before skewering), bar setup, lowboy cooler
  check, last night's prep list pinned right on the view, and chef setup.
- **Closing checklist** — collapsible sections, one-tap check-off, big
  numeric entry for counts (avocados by the case — total for the day —
  and rice by the bag), per-task notes, progress bar, Finish Close
  summary with share/copy.
- **Sauce bottle inventory** — count every sauce bottle (crack, sassy,
  eagle, sashimi, M3, sweet chili ponzu, ponzu, yuzu ponzu, sriracha mayo,
  Sasquatch sauce, bamboo, ginger poké, poké — editable); counts are stored
  per business day and visible on the calendar.
- **Calendar** — look back over stored days (≈6 months of history) and see
  each day's prep list and bottle counts at a tap.
- **Business-day aware** — the "day" runs 5:00am → 4:59am, so a box checked
  at 12:40am still lands on the right night's close, and the morning
  opening shares the same day's record as that evening's close.
- **Prep list** — a standard checklist (tartar, kakesu, bamboo sauce, spicy
  mayo, asparagus, ginger backups, wasabi backups — editable in Settings)
  you add with one tap, plus a free-text field for anything else; counts
  below par auto-add "Prep/order: …" items. Last night's prep list is
  pinned to the top of the next day's opening and closing views.
- **History** — every day with completion %, duration, low-stock flags,
  full detail (opening, closing, and bottles), and 14-day count sparklines.
- **Settings** — edit every task on all three lists (add / rename / reorder
  / archive, section, type, par, unit) without touching code; JSON
  export/import backups; dark/light theme.
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

## License

MIT — see [LICENSE](LICENSE).
