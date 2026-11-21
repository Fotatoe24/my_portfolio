# Louis Phillip — Portfolio

A dark, cinematic portfolio built with **React, Vite, Tailwind CSS v4 and React Router**.

- Full-screen hero (optional showreel video background)
- Project grid where each card plays a short clip on hover
- A page per project with walkthrough video, details, stack and a screenshot lightbox
- Services, About with animated stats, Contact
- Film-grain overlay, scroll reveals, pixel-art "LP" mark (respects reduced-motion)

## Run it

Requires Node 20.19+ (or 22.12+).

```bash
npm install
npm run dev        # http://localhost:5173
```

`npm run build` makes the production site in `dist/`; `npm run preview` serves it.

## Edit your content

| What | Where |
|---|---|
| Name, role, intro, bio, services, email, socials | `src/data/site.js` |
| Projects (text, stack, links, media) | `src/data/projects.js` |
| Screenshots and videos | `public/media/<project-slug>/` — see `public/media/README.md` |
| Colours and fonts | `@theme` block in `src/index.css` |

Until you add a poster or clip, each project shows a styled title card, so the site looks finished from day one.

## Project structure

```
src/
  data/        site.js, projects.js       ← your content
  sections/    Hero, Intro, Work, Services, About, Contact
  pages/       Home, Project (/work/:slug), NotFound
  components/  Nav, ProjectCard, ProjectMedia, Lightbox, Reveal, Counter, PixelMark, Footer
  hooks/       useInView
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Fotatoe24/portfolio.git   # create the empty repo on GitHub first
git push -u origin main
```

## Deploy (Vercel)

Import the repo at vercel.com/new — it detects Vite automatically. `vercel.json` already
rewrites all routes to `index.html`, so `/work/...` links work on refresh.

For GitHub Pages instead, set `base` in `vite.config.js` and use a 404.html redirect, or switch to `HashRouter`.
