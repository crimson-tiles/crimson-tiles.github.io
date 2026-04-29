# Crimson Tiles

Website for the University of Alabama riichi mahjong club. Built with React, TypeScript, and Vite. Deployed to GitHub Pages on push to `main`.

## What this is

This site is one of the club's hands-on coding projects -- a place to learn and practice software stuff against something you actually care about. No prior experience needed; if you've never opened a code editor before, this is a fine place to start.

Other things the club has built or is building:

- **machine-vision point stick scoring** -- camera watches the table, reads point sticks, tracks the score
- **discord bot** -- handles pickup games, reminders, etc
- **ELO tracker** -- powers the leaderboard on this site
- ...and whatever you want to take on next. talk to an officer if you have an idea

You don't have to be an officer or a regular to contribute. Pick something small, open a PR, ask questions in Discord.

## Prerequisites

You need two things installed:

1. **Node.js** (v18 or newer): https://nodejs.org -- download the LTS version and run the installer.
2. **Git**: https://git-scm.com -- download and install. On Mac you might already have it (try `git --version` in Terminal).

A code editor helps too. [VS Code](https://code.visualstudio.com/) is a good free option.

## Local setup

```bash
# 1. Clone the repo
git clone https://github.com/crimson-tiles/crimson-tiles.github.io.git
cd crimson-tiles.github.io

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open http://localhost:5173 in your browser. The page auto-reloads when you save a file.

## Project structure

```
src/
  main.tsx              -- app entry point, mounts React
  App.tsx               -- router + top-level layout (Nav, routes, Footer)
  App.css               -- all component styles
  index.css             -- global reset, CSS variables (colors, fonts)
  config.ts             -- URLs, schedule data, officers, projects, season config
  pages/
    Home.tsx              -- the long scrolling landing page
    ProjectsPage.tsx      -- /projects, club software projects
    RulesetPage.tsx       -- /ruleset, house rules
    StandingsPage.tsx     -- /standings, season scoring
    LeaderboardPage.tsx   -- /leaderboard, fetches CSV from the tracker
  components/
    Nav.tsx               -- top navigation bar
    Hero.tsx              -- hero banner with the tile fan
    About.tsx             -- "we play riichi mahjong" intro
    Meetups.tsx           -- photo strip from past sessions
    Schedule.tsx          -- weekly meetup schedule
    FirstTime.tsx         -- "your first monday" + officer list
    Footer.tsx            -- footer with social links
    Tile.tsx              -- single mahjong tile (sprites a tile from tiles.png)
    Lightbox.tsx          -- image lightbox used by Meetups
    PlacementBar.tsx      -- 1st/2nd/3rd/4th distribution bar on leaderboard
  lib/
    leaderboard.ts        -- CSV parsing for the leaderboard sheet
    standings.ts          -- CSV parsing + per-game m-league scoring
  styles/
    *.css                 -- per-section styles, all imported by App.css
  assets/
    icons/                 discord.svg, github.svg
    meetups/               meetN.webp -- photos used in the Meetups strip
    tiles/                 tiles.png (sprite atlas), felt.jpg (background)
public/
  404.html                 static fallback for GitHub Pages
  og-image.png             social share preview
```

### Where things live

- **Want to change text content?** Edit `src/config.ts`. Schedule, officers, projects, season config, and most URLs are all there.
- **Want to change how something looks?** Edit the relevant file in `src/styles/` -- one CSS file per section (`nav.css`, `hero.css`, `about.css`, etc.). All of them are pulled in via `App.css`.
- **Want to change page structure?** Edit the component in `src/components/` (one file per page section), or `src/pages/` for whole-page layouts.
- **Add a new route?** Add a `<Route>` in `src/App.tsx` and a file under `src/pages/`. We use `HashRouter` because GitHub Pages doesn't do server-side rewrites.
- **Colors** are CSS variables defined at the top of `src/index.css`. Change them there and they update everywhere.

### Shared styles

`.container`, `.eyebrow`, `.section-alt`, and `.card`-style classes are shared across sections. If you tweak them, scan the page to make sure you didn't break a section you weren't editing.

Section-specific classes like `.nav-*`, `.hero-*`, `.schedule-*`, `.lb-*`, `.footer-*` only affect their own area.

### Tile sprites

`Tile.tsx` slices `src/assets/tiles/tiles.png` -- a sprite atlas from the [autotable](https://github.com/pwmarcz/autotable) project (CC BY-NC-SA). If you change the atlas, the sprite math in `Tile.tsx` needs to match the new layout.

## Making changes

1. Create a branch for your work:
   ```bash
   git checkout -b my-feature
   ```

2. Edit files in `src/`. The browser refreshes automatically.

3. When you're happy, commit and push:
   ```bash
   git add .
   git commit -m "add photo gallery section"
   git push -u origin my-feature
   ```

4. Open a pull request on GitHub. Someone will review it and merge to `main`, which triggers a deploy.

## Build and preview

```bash
npm run build      # compile for production into dist/
npm run preview    # serve the production build locally
```

## Starting your own GitHub Pages site

If you want to create your own site like this from scratch:

1. **Create a GitHub repo** named `<your-username>.github.io` (or `<your-org>.github.io` for an org). This special name tells GitHub to serve it as a Pages site.

2. **Scaffold a Vite project**:
   ```bash
   npm create vite@latest my-site -- --template react-ts
   cd my-site
   npm install
   ```

3. **Add a GitHub Actions workflow** at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

4. **Enable Pages** in your repo: Settings > Pages > Source > GitHub Actions.

5. **Push to `main`** and the workflow will build and deploy your site automatically.

## Contribution ideas

Pick whatever sounds fun.

- yaku reference page with tile images (we already have the sprite atlas)
- in-browser scoring calculator (han/fu -> payouts)
- tournament/bracket page for one-off events
- dark mode
- scroll/page transitions
- improvements to the leaderboard page (charts over time, head-to-head, etc.)
- whatever bug or rough edge bothers you. open an issue first if you want feedback before building

## Useful links

- [React docs](https://react.dev/learn) -- start with "Quick Start"
- [TypeScript for React](https://react.dev/learn/typescript) -- React's own TS guide
- [CSS basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS) -- if CSS is new to you
- [Vite docs](https://vite.dev/guide/) -- the build tool this project uses
- [GitHub Pages docs](https://docs.github.com/en/pages)
