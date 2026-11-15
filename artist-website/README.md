# Ajay Dhandre — Artist Website

Portfolio website for the artist Ajay Dhandre. It shows his work from 2004 to today as a timeline,
with his biography, statement, critics' writing, CV, Studio 9 pottery and contact details.

It is a static site with no build step, so it can be hosted for free on Cloudflare Pages
(see `docs/DEPLOYMENT.md`).

## Structure

```
artist-website/
├── index.html          Page skeleton (sections and layout only, no content)
├── css/style.css       Design. Colours and fonts are variables at the top of the file
├── js/app.js           Builds the page from the two data files
├── data/
│   ├── site.js         All text: bio, statement, timeline chapters, CV, Studio 9, contact
│   └── works.js        One line per artwork
├── images/
│   ├── works/          Artwork photos (max 1300 px on the long side)
│   ├── about/          Portrait and studio
│   └── studio9/        Pottery
└── docs/
    ├── DEPLOYMENT.md       How to put the site live on the artist's domain
    └── image-sources.json  Which original file each web image was made from
```

## How to update the site

**Change the colours.** Edit the variables at the top of `css/style.css`.
`--paper` is the page background, `--accent` is the highlight colour.

**Change any text.** Edit `data/site.js`. Nothing else needs to change.

**Add an artwork.**

1. Save the photo as JPG, about 1300 px on the long side, into `images/works/`.
2. Add one line to `data/works.js`:

   ```js
   {"id": "2027-001", "period": "2021-2026", "year": 2027, "category": "Drawings",
    "medium": "Drawing on paper", "size": "30 × 20 in", "title": "Optional title",
    "src": "images/works/2027-001.jpg", "w": 1300, "h": 900},
   ```

   `period` must match the `id` of a chapter in `data/site.js`. `title`, `series` and `size` are optional.
   `category` decides which filter chip the work appears under; a new category creates a new chip automatically.

**Add a timeline chapter.** Add an entry to `periods` in `data/site.js` with an `id`, `label`, `from`, `to`,
`name` and `intro`. CV entries dated between `from` and `to` appear beside it automatically.

**Add a show to the CV.** Add `[year, "text"]` to the right list under `cv` in `data/site.js`.

## Preview locally

Open `index.html` in a browser. Nothing needs to be installed.

## Open points to confirm with the artist

- Spelling of the surname: the documents say **Dhandre**, the source folder was named "Dhandare".
- MFA college: one document says **CISFA**, another **CISPA**.
- Individual titles, mediums and sizes for most works. Many photos already carry a printed caption;
  where the file name gave a size it is shown, otherwise only medium and year are listed.
- Whether to show phone numbers. Only the email address is published for now.
- Whether the Studio 9 section should stay on this site or get its own page.
