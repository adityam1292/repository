# Artist Portfolio Website

A portfolio website for a painter based in India whose work is collected across Europe.
It is a single static page with no build step, so it can be hosted for free on Cloudflare Pages.

## Status

Draft. The layout and sections are done. The artist's name, bio, painting photos,
exhibition history and contact details are still placeholders.

## Structure

```
artist-website/
├── index.html        The website (one page: works, collections, about, exhibitions, contact)
├── images/           Painting photos and the studio portrait
└── docs/
    └── DEPLOYMENT.md Step-by-step guide to putting the site live on the artist's domain
```

## Sections on the page

| Section | What it shows |
| --- | --- |
| Hero | Name, one-line description, key numbers, featured painting |
| Works | Filterable gallery (Landscapes, Figures, Abstract, Available); each painting opens a detail view |
| Collections | European cities where his paintings are held |
| About | Bio, portrait, a quote in his own words |
| Exhibitions | Exhibition history, newest first |
| Contact | Email with copy button and an enquiry form |

## Still to do

- [ ] Replace placeholders with the artist's real name, city and bio
- [ ] Add 8–15 painting photos to `images/` with title, year, medium, size and sale status
- [ ] Replace the generated placeholder paintings with the real photos
- [ ] Add real exhibition history and contact details
- [ ] Connect the enquiry form to email, or remove it
- [ ] Deploy to Cloudflare Pages and connect the domain (see `docs/DEPLOYMENT.md`)

## Preview locally

Open `index.html` in any browser. Nothing needs to be installed.
