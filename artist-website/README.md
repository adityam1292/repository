# Ajay Dhandre — Artist Website

Website for the artist Ajay Dhandre. It combines the professional artist-site conventions
(from Contemporary Art Issue's tutorial "How To Create A Professional Artist Website") with
the light beige, year-by-year presentation of the first draft: the artist's name as the title,
a short menu, small serif text, and the works browsed in year chapters.

| Page | What it shows |
| --- | --- |
| Home (click the name) | Installation views, large, with no text |
| Works | Year chapters from 2004 to 2025, each with a short introduction and a grid of works; click any work to view it full screen |
| About | Short biography and the résumé as a factual list |
| Texts | The artist's statement and writing on the work |
| Contact | Email address, newsletter link, location |

There is no footer, no contact form, no animation and no prices.

It is a static site with no build step, so it can be hosted for free on Cloudflare Pages
(see `docs/DEPLOYMENT.md`).

## Structure

```
artist-website/
├── index.html          Page skeleton (the five pages, switched by the menu)
├── css/style.css       Design. Colours, font and sizes are variables at the top of the file
├── js/app.js           Builds the pages from the two data files
├── data/
│   ├── site.js         All text: chapters, biography, résumé, texts, contact
│   └── works.js        One line per artwork (222 works, 2004–2025)
├── images/
│   ├── works/          Artwork photos (max 1300 px on the long side)
│   └── about/          Portrait
└── docs/
    ├── DEPLOYMENT.md       How to put the site live on the artist's domain
    └── image-sources.json  Which original file each web image was made from
```

## How to update the site

**Change the colours or font.** Edit the variables at the top of `css/style.css`.
`--bg` is the page background (currently light beige; `#FFFFFF` for plain white) and `--ink` the text colour.

**Change any text.** Edit `data/site.js`. Nothing else needs to change.

**Add an artwork.**

1. Save the photo as JPG, about 1300 px on the long side, into `images/works/`.
2. Add one line to `data/works.js`:

   ```js
   {"id": "2021-2025-008", "period": "2021-2025", "year": 2025, "category": "Oil on canvas",
    "medium": "Oil on canvas", "size": "72 × 60 in", "title": "Optional title",
    "src": "images/works/2021-2025-008.jpg", "w": 1300, "h": 900},
   ```

   `period` must match an `id` under `periods` in `data/site.js`. `title`, `series` and `size` are optional.
   The caption is written as: *Title*, year. Medium | dimensions.

**Add a chapter.** Add an entry to `periods` in `data/site.js` with an `id`, `label`, `name` and `intro`,
then give new works that `period`.

**Add a show to the résumé.** Add `[year, "text"]` to the right list under `cv` in `data/site.js`.

## Preview locally

Open `index.html` in a browser. Nothing needs to be installed.

## Open points to confirm with the artist

- Spelling of the surname: the documents say **Dhandre**, the source folder was named "Dhandare".
- MFA college: one document says **CISFA**, another **CISPA**.
- Titles, mediums and sizes for individual works. Many photos already carry a printed caption;
  where the file name gave a size it is shown, otherwise only medium and year are listed.
- Whether to show phone numbers. Only the email address is published for now.
- Galleries that represent him, to list on the Contact page, and his Instagram handle.
- The 2024–2026 drawings (the "panting" folder) and the Studio 9 pottery are not on the site,
  per the current direction. Both can be added back from the source folder at any time.
