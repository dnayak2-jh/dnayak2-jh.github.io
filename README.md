# dnayak2-jh.github.io

Personal website of Dibyajyoti Nayak, served at https://dnayak2-jh.github.io/.

Every push to `main` rebuilds the site and publishes it automatically (see `.github/workflows/deploy.yml`). It takes about a minute.

## Changing content

All text lives in small YAML files under `src/_data/`. Edit a file on GitHub (pencil icon), commit, and the site updates.

| To change | Edit |
| --- | --- |
| Name, headline, bio, email, links, color palette | `src/_data/site.yml` |
| Selected work cards | `src/_data/research.yml` |
| Publications | `src/_data/publications.yml` |
| Industry experience | `src/_data/experience.yml` |
| Degrees | `src/_data/education.yml` |
| Talks | `src/_data/talks.yml` |
| Teaching | `src/_data/teaching.yml` |
| Honors | `src/_data/honors.yml` |

To add an item, copy an existing block in the file, paste it where it should appear, and edit the values. Keep the indentation the same as the block you copied.

## Changing files

| File | Location |
| --- | --- |
| CV | replace `src/assets/pdf/Dibya_CV.pdf` (keep the same name) |
| Portrait | replace `src/assets/img/portrait.jpg` |
| Research figures | `src/assets/img/research/`, referenced from `research.yml` |

## Changing the look

- **Palette:** set `palette:` in `src/_data/site.yml` to `blue`, `forest`, `burgundy` or `dark`.
- **Colors, fonts, page width, corner radius:** the first block of `src/assets/css/site.css`. Each color is one named variable.
- **Layout of a section:** `src/index.njk` holds the page structure, one `<section>` per part of the page, in the order they appear. Reorder or remove a section by moving or deleting its block.

## Previewing on your computer (optional)

Requires Node.js 18 or newer.

```bash
npm install
npm run serve
```

Then open http://localhost:8080/.
