# jayantikasoni.github.io

Personal site for Dr. Jayantika Soni. Static single page, plain HTML/CSS/vanilla JS, served from GitHub Pages.

## Structure

- `index.html` — single page, all content
- `styles.css` — design system (Fraunces + Inter, editorial minimal)
- `script.js` — scroll fade-ups, stat count-up, nav border (all disabled under `prefers-reduced-motion`)
- `assets/` — self-hosted fonts, portrait, favicon, OG image
- `.nojekyll` — GitHub Pages config

## Deploy

GitHub Pages serves the repository root from `main`. No build step. Live at https://jayantikasoni.github.io/.

## Custom domain (later)

When jayantikasoni.com is registered: add a `CNAME` file containing `jayantikasoni.com`, set the custom domain in Pages settings, then on Cloudflare point apex A records to 185.199.108.153 / .109 / .110 / .111, `www` CNAME to `jayantikasoni.github.io`, redirect `www` to apex, SSL mode Full (strict). Update the canonical and Open Graph URLs in `index.html` to the new domain.
