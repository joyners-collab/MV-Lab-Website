# MV Lab — website

The MV Lab's website. Built with [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/), deployed as static HTML, designed to be edited by anyone in the lab who can write a Word document.

- **Live site (primary):** _set this once deployed_
- **Squarespace backup:** https://porpoise-horse-n3sy.squarespace.com/

---

## Table of contents

1. [Quick start](#quick-start)
2. [How the site is organized](#how-the-site-is-organized)
3. [Editing content (no coding required)](#editing-content-no-coding-required)
4. [Editing structure (some coding)](#editing-structure-some-coding)
5. [Adding the hero video](#adding-the-hero-video)
6. [Deploying to Cloudflare Pages](#deploying-to-cloudflare-pages)
7. [Custom domain](#custom-domain)
8. [Keeping Squarespace as a backup](#keeping-squarespace-as-a-backup)
9. [Optional: adding a CMS later](#optional-adding-a-cms-later)
10. [Troubleshooting](#troubleshooting)

---

## Quick start

You'll need [Node.js 20+](https://nodejs.org/) installed.

```bash
# clone the repo and enter it
git clone <your-repo-url> mv-lab-site
cd mv-lab-site

# install dependencies (one time)
npm install

# run the local dev server
npm run dev
```

Open <http://localhost:4321> in a browser. The site auto-reloads as you edit files.

To build for production:

```bash
npm run build       # outputs static files to ./dist
npm run preview     # preview the production build locally
```

---

## How the site is organized

```
mv-lab-site/
├── public/                        # static files served as-is
│   ├── favicon.svg
│   ├── robots.txt
│   ├── videos/
│   │   └── hummingbird.mp4        # ← drop your hero video here
│   └── people/                    # ← drop team photos here (optional)
├── src/
│   ├── config.ts                  # ← nav, footer, contact info
│   ├── styles/global.css          # base styles + fonts
│   ├── layouts/
│   │   └── Base.astro             # wraps every page (header + footer)
│   ├── components/                # reusable UI pieces
│   │   ├── Logo.astro             # MV LAB wordmark + ECG trace
│   │   ├── Header.astro           # site navigation
│   │   ├── Footer.astro
│   │   ├── Section.astro
│   │   ├── PersonCard.astro
│   │   └── PublicationItem.astro
│   ├── content/                   # ← THE CONTENT YOU EDIT MOST OFTEN
│   │   ├── config.ts              # schemas (don't touch unless adding fields)
│   │   ├── people/*.md            # one file per lab member
│   │   ├── publications/*.md      # one file per paper
│   │   ├── news/*.md              # one file per news item
│   │   └── research/*.md          # one file per research theme
│   └── pages/                     # one file per URL
│       ├── index.astro            # → /
│       ├── research.astro         # → /research/
│       ├── philosophy.astro       # → /philosophy/
│       ├── team.astro             # → /team/
│       ├── publications.astro     # → /publications/
│       ├── outreach.astro         # → /outreach/
│       ├── contact.astro          # → /contact/
│       ├── 404.astro              # error page
│       └── rss.xml.js             # RSS feed at /rss.xml
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

The two folders you'll touch the most are:

- **`src/content/`** — for adding people, papers, news, research themes
- **`src/config.ts`** — for changing nav links, contact info, affiliations

---

## Editing content (no coding required)

All content lives in markdown files. Each file has a small "frontmatter" header (the part between `---` lines) with structured info, then optional free-text body below.

### Adding a person

Create a new file in `src/content/people/`. Filename can be anything ending in `.md`. Example:

```markdown
---
name: "Dr. Jane Doe"
role: "Postdoctoral Fellow"
order: 11
group: "Postdoc"
email: "jdoe@uw.edu"
photo: "/people/jane-doe.jpg"
scholar: "https://scholar.google.com/citations?user=XXXXXXX"
orcid: "0000-0001-2345-6789"
joined: "2024"
current: true
---

Jane studies how the parasympathetic nervous system modulates pacemaker
function during the dive response. She did her PhD at Stanford with
Prof. Smith.
```

Then drop her photo at `public/people/jane-doe.jpg`. The Team page will pick her up automatically and put her in the right group.

When someone leaves the lab, just change `current: true` to `current: false` and they move to the Alumni list.

### Adding a publication

Create a new file in `src/content/publications/`. The filename is just for organization (`2025-pacemaker-mice.md` is fine). Example:

```markdown
---
title: "Conserved mechanisms of pacemaker function across vertebrate hearts"
authors: "<strong>Doe J</strong>, Smith J, <strong>[PI Last] M</strong>"
venue: "Nature, 2025"
year: 2025
date: 2025-03-15
doi: "10.1038/s41586-025-12345-6"
pdf: "/papers/doe-2025.pdf"
preprint: "https://www.biorxiv.org/content/10.1101/2025.00.000000v1"
highlight: true
tags: ["pacemaker", "comparative"]
---
```

Wrap lab member names in `<strong>...</strong>` to bold them in the author list. Set `highlight: true` to feature on the homepage. The Publications page sorts everything by year automatically.

### Adding a news item

Create a file in `src/content/news/`:

```markdown
---
title: "Lab welcomes new postdoc Jane Doe"
date: 2025-04-15
summary: "Dr. Jane Doe joins us from Stanford to work on parasympathetic pacemaker control."
---

Optional longer body. The summary is what shows on the home page.
```

### Adding a research theme

Files in `src/content/research/` define the boxes on the Research page and the home page preview. Three exist by default — add or edit as needed. The `order:` field controls the order they appear.

---

## Editing structure (some coding)

### Changing the navigation, footer, or contact info

Open `src/config.ts`. Everything is in one place:

- `SITE.email`, `SITE.address`, `SITE.affiliations` — used in footer and contact page
- `NAV` — top navigation items (order matters)
- `FOOTER_LINKS` — footer link columns

### Changing colors or fonts

Open `tailwind.config.mjs`. The brand colors are defined there:

- `pulse` — the red used for the logo, accents, and links (currently `#d8323c`)
- `bone` — the off-white used for body text
- `ink` — the black used for backgrounds

Fonts are loaded in `src/styles/global.css` (currently Cormorant Garamond + Inter + JetBrains Mono).

### Changing a page's layout

Each URL maps to one file in `src/pages/`. Edit those directly. The `<Section>` component handles consistent vertical rhythm.

---

## Adding the hero video

1. Encode your video as MP4 (H.264). See `public/videos/README.txt` for an `ffmpeg` recipe.
2. Save it as `public/videos/hummingbird.mp4`.
3. (Optional) Add a poster frame at `public/hero-poster.jpg` (a JPG screenshot from the video) — this shows while the video loads.

Until you add the file, the homepage hero will show a black box. The page won't break.

---

## Deploying to Cloudflare Pages

(Recommended host. See README section in the original handoff for why.)

### One-time setup

1. **Push this repo to GitHub** (or GitLab / Bitbucket).
2. Go to <https://dash.cloudflare.com/> → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repo.
4. **Build settings:**
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** add an environment variable `NODE_VERSION` = `20`
5. Click **Save and Deploy**. First build takes ~2 minutes.

After that, every `git push` to the main branch auto-deploys. Pull request branches get their own preview URLs.

### Updating `astro.config.mjs`

Once you know your URL, open `astro.config.mjs` and change:

```js
site: 'https://mv-lab.example.com',
```

to your real URL (e.g. `https://mv-lab.pages.dev` or your custom domain). This is used for the sitemap, RSS, and OG tags.

---

## Custom domain

In the Cloudflare Pages project: **Custom domains** → **Set up a custom domain** → enter `mvlab.uw.edu` (or whatever).

You'll likely need to coordinate with UW IT to add a CNAME record pointing your subdomain to your `*.pages.dev` URL. SSL is handled automatically by Cloudflare.

---

## Keeping Squarespace as a backup

The strategy: **Astro = primary, Squarespace = insurance.** Two practical approaches:

### Option A — Mirror only major changes (recommended)

- Make routine updates (papers, news, people) in this repo only.
- Once a quarter or whenever a big change ships (new homepage, new section), mirror the change in Squarespace.
- Squarespace lives as a "frozen" copy that stays roughly current. If anything ever broke catastrophically with the main site, you could repoint DNS to Squarespace within an hour.

### Option B — Mirror everything in real time

- Every time you add a paper or person here, also add it in the Squarespace editor.
- More work, but Squarespace stays perfectly in sync.

Either way, **don't pay extra for advanced Squarespace features** you won't use. The cheapest plan is enough for backup duty.

If you ever want to fully shut down Squarespace, your subscription can be downgraded or cancelled — the Astro site is fully self-contained and depends on nothing from Squarespace.

---

## Optional: adding a CMS later

If lab members want a click-button admin panel instead of editing markdown directly, you can add one without rewriting any code. Two free options:

- **[Decap CMS](https://decapcms.org/)** (formerly Netlify CMS) — open source, runs in the browser, edits the markdown files in this repo via GitHub. Setup is ~30 minutes.
- **[TinaCMS](https://tina.io/)** — fancier UI with live preview. Free tier is generous.

When you're ready, ping whoever maintains this site (or just ask Claude) and one of these can be wired in.

---

## Troubleshooting

**`npm install` fails**
Make sure you're on Node 20 or newer: `node --version`.

**Site builds but the hero video doesn't play**
Check that `public/videos/hummingbird.mp4` exists. Browsers also block autoplay if the video isn't muted — the `muted` attribute is set in `src/pages/index.astro`, don't remove it.

**Photos don't show up on the Team page**
The `photo:` field in a person's markdown file should be a path starting with `/`, e.g. `/people/jane-doe.jpg`. The actual file goes in `public/people/jane-doe.jpg`.

**I edited a file but the site didn't update**
If `npm run dev` is running, save the file again — it should auto-refresh. If not, restart with `Ctrl+C` then `npm run dev`.

**Cloudflare build fails with "Cannot find module"**
Make sure `package-lock.json` is committed to git (it should be, by default). The build host needs it to install exact dependency versions.

---

## Credits

- Hummingbird hero video © [Anand Varma](https://anandvarma.com), used with permission.
- Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).
- Fonts: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [Inter](https://rsms.me/inter/), [JetBrains Mono](https://www.jetbrains.com/lp/mono/).
