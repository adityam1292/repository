# Ajay Dhandre — Artist Website

Website for the artist Ajay Dhandre. It follows the conventions of professional artist websites
(as set out in Contemporary Art Issue's tutorial "How To Create A Professional Artist Website"):
a plain white page, small serif text, the artist's name as the title, and a short menu.

| Page | What it shows |
| --- | --- |
| Home (click the name) | Installation views, large, with no text |
| Selected Works | One work at a time, oldest to newest, with a caption and thumbnails |
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
│   ├── site.js         All text, plus which works appear on Home and Selected Works
│   └── works.js        One line per artwork (278 works, 2004–2026)
├── images/
│   ├── works/          Artwork photos (max 1300 px on the long side)
│   └── about/          Portrait
└── docs/
    ├── DEPLOYMENT.md       How to put the site live on the artist's domain
    └── image-sources.json  Which original file each web image was made from
```

## How to update the site

**Change the colours or font.** Edit the variables at the top of `css/style.css`.
`--bg` is the page background and `--ink` the text colour.

**Choose which works are shown.** `selectedWorks` in `data/site.js` lists the ids shown on the
Selected Works page, in order. All 278 works stay in `data/works.js`; add or remove ids to change the selection.
`home` lists the installation views on the home page.

**Change any text.** Edit `data/site.js`. Nothing else needs to change.

**Add an artwork.**

1. Save the photo as JPG, about 1300 px on the long side, into `images/works/`.
2. Add one line to `data/works.js`:

   ```js
   {"id": "2027-001", "period": "2021-2026", "year": 2027, "category": "Drawings",
    "medium": "Drawing on paper", "size": "30 × 20 in", "title": "Optional title",
    "src": "images/works/2027-001.jpg", "w": 1300, "h": 900},
   ```

   `period` must match an `id` under `periods` in `data/site.js`. `title`, `series` and `size` are optional.
3. Add the new id to `selectedWorks` in `data/site.js` to show it.

   The caption is written as: *Title*, year. Medium | dimensions.

**Add a show to the CV.** Add `[year, "text"]` to the right list under `cv` in `data/site.js`.

## Preview locally

Open `index.html` in a browser. Nothing needs to be installed.

## Open points to confirm with the artist

- Spelling of the surname: the documents say **Dhandre**, the source folder was named "Dhandare".
- MFA college: one document says **CISFA**, another **CISPA**.
- Individual titles, mediums and sizes for most works. Many photos already carry a printed caption;
  where the file name gave a size it is shown, otherwise only medium and year are listed.
- Whether to show phone numbers. Only the email address is published for now.
- Titles for the works, so captions can read "Title, year. Medium | dimensions".
- Galleries that represent him, to list on the Contact page, and his Instagram handle.
- Studio 9 pottery was removed from this site, since an artist website shows one practice. It could have its own site.
