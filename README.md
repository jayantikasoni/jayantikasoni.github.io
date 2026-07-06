# jayantikasoni.com

Personal site for Dr. Jayantika Soni. Static single page, plain HTML/CSS/vanilla JS, served from GitHub Pages.

## Structure

- `index.html` — single page, all content
- `styles.css` — design system (Fraunces + Inter, editorial minimal)
- `script.js` — scroll fade-ups, stat count-up, nav border (all disabled under `prefers-reduced-motion`)
- `assets/` — self-hosted fonts, portrait, favicon, OG image
- `CNAME` / `.nojekyll` — GitHub Pages custom domain config

## Deploy

GitHub Pages serves the repository root from `main`. No build step.

DNS (Cloudflare): apex A records to 185.199.108.153 / .109 / .110 / .111, `www` CNAME to `jayantikasoni.github.io`, redirect `www` to apex, SSL mode Full (strict).
