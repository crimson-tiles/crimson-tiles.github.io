# Crimson Tiles

Website for the University of Alabama riichi mahjong club. Built with React, TypeScript, and Vite. Deployed to GitHub Pages on push to `main`.

This site doubles as a sandbox for club members to practice frontend development. You don't need any prior experience to contribute.

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
  App.tsx               -- composes all the page sections
  App.css               -- all component styles
  index.css             -- global reset, CSS variables (colors, fonts)
  config.ts             -- URLs, schedule data, card content
  components/
    Nav.tsx              -- top navigation bar
    Hero.tsx             -- big hero banner at the top
    About.tsx            -- "What We're About" card section
    Schedule.tsx         -- weekly meetup schedule
    Learn.tsx            -- learning resources card section
    Footer.tsx           -- footer with social links
  assets/
    icons/
      discord.svg        -- Discord logo
      github.svg         -- GitHub logo
public/
  favicon.svg            -- browser tab icon
```

### Where things live

- **Want to change text content?** Edit `src/config.ts`. Schedule times, card text, and URLs are all there.
- **Want to change how something looks?** Edit `src/App.css`. Styles are organized by section with comments like `/* ---- NAV ---- */`.
- **Want to change page structure?** Edit the component in `src/components/`. Each file is one section of the page.
- **Colors** are CSS variables defined at the top of `src/index.css`. Change them there and they update everywhere.

### Shared styles

The classes `.card-grid`, `.card`, and `.section-alt` are shared across multiple sections (About and Learn both use them). If you change these, check both sections.

Section-specific classes like `.nav-*`, `.hero-*`, `.schedule-*`, `.footer-*` only affect their own section.

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

Here are some things you could build. Pick whatever sounds fun.

- Fill in the About and Learn sections with real content
- Add a photo gallery section
- Build an events/tournament calendar
- Create a yaku reference page with tile images
- Add dark mode
- Build a scoring calculator
- Add page transitions or scroll animations

## Useful links

- [React docs](https://react.dev/learn) -- start with "Quick Start"
- [TypeScript for React](https://react.dev/learn/typescript) -- React's own TS guide
- [CSS basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS) -- if CSS is new to you
- [Vite docs](https://vite.dev/guide/) -- the build tool this project uses
- [GitHub Pages docs](https://docs.github.com/en/pages)
