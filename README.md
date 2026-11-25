# amazingadelowo.com — portfolio

The portfolio of **Amazing Adelowo**, embedded systems engineer: devices that decide
on-chip — an attendance terminal that photographs proxy clock-ins, an e-voting machine
with live cloud tallies, a fleet of docking robots, and [CryNet](https://github.com/Amazo123/CryNet-TwoNode),
an on-device infant-cry monitor.

Built as a static [Astro](https://astro.build) site — no JS framework, no client-side
hydration; the only scripts are a scroll-reveal observer and a console ticker.

## Local development

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the built dist/
```

## Deploy targets

Nothing in the site hard-codes a URL. `astro.config.mjs` reads two environment
variables, so switching hosts is a rebuild away:

| Target | `SITE_URL` | `SITE_BASE` |
| --- | --- | --- |
| Cloudflare Pages (default) | *(unset)* | *(unset)* |
| GitHub Pages project site | `https://amazo123.github.io` | `/portfolio` |
| Custom domain | `https://amazingadelowo.com` | `/` |

`sitemap.xml` and `robots.txt` are generated at build time from the same values.

## Layout

```
src/
  layouts/Base.astro      shell: meta, OG tags, reveal script
  pages/                  home, work (4 case studies), lab, about
  components/             case cards, short cards, TFT bezel, waveform
  lib/                    projects data, site data, base-path URL helper
public/
  img/                    bench photos, wiring sheets, OG images
  docs/                   CryNet dossier + wiring PDFs
tools/prepare_images.py   image preprocessing
```

## Content rules

Every number on the site traces to a bench log, a serial-console capture or a
measurement script from the underlying builds. The CryNet material follows the
two-node design (see the [dossier](public/docs/crynet-dossier.pdf)).

---

Built with Claude Code (Opus 5.5). 🤖
