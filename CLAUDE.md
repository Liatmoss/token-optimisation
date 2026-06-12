# token-optimisation

React + Vite presentation deck on token optimisation.

## Dev server

The system Node (v14) is too old for Vite 8. Use the Node 20 binary directly:

```bash
~/.nvm/versions/node/v20.20.2/bin/node node_modules/.bin/vite
```

Then open http://localhost:5173.

> `npm run dev` will not work because the `prefix` entry in `~/.npmrc` conflicts with nvm, and the fallback system Node is v14.

## Project structure

```
src/
  docs/          # One file per slide — edit these to change slide content
  assets/        # Images and background SVG used by slides
  App.jsx        # Slide renderer — add new layout branches here
  App.css        # All styles
  index.css      # Global background and font
```

## Adding a slide

1. Create `src/docs/slide-NN-name.js` and export a slide object with a `layout` field.
2. Import and add it to the array in `src/docs/index.js`.
3. Add a layout branch in `App.jsx` if the layout is new.
4. Add styles to `App.css`.

## Layouts

| layout | description |
|---|---|
| *(none)* | White card, eyebrow, bullet list |
| `image` | Full-page image (`{ image }`) |
| `question` | Large centred question text (`{ question }`) |
| `heading+image` | Heading with glow + image below (`{ heading, image }`) |
| `dark-list` | Dark full-screen, title with glow, numbered list left / video right (`{ title, points, video? }`) |
| `rule-zero` | Dark hero: dim label, glowing headline, optional cards (`{ title, headline, subtitle?, cards? }`) |
| `content-card` | Dark full-screen, title, subtitle, dark card with arrow bullets (`{ title, subtitle?, card }`) |
| `comparison-cards` | Dark full-screen, title, two side-by-side cards (`{ title, cards }`) |
| `image-list` | Dark full-screen, title, left video/placeholder, right icon-per-bullet list (`{ title, items, video? }`) |
| `key-takeaways` | Dark full-screen, title, subtitle, icon cards, callout box (`{ title, subtitle, cards, callout }`) |

## Available icons

`lightning`, `target`, `sparkle`, `summarise`, `layers`, `pattern`, `tag`, `beaker`, `shield`, `terminal`, `book`, `brain`, `video`, `swap`

## Git workflow

Always work on a feature branch and open a PR — never push directly to `main`.

```bash
git checkout -b feat/your-branch-name
# make changes, commit
git push -u origin feat/your-branch-name
gh pr create ...
```

## Colour scheme (dark slides)

- Background: `#060d1a` + `src/assets/background.svg`
- Headline glow: `#ffffff` with `text-shadow: 0 0 40px rgba(6,214,160,0.6), 0 0 80px rgba(6,214,160,0.3)`
- Accent / borders: `#14b8a6` (teal)
- Card borders: `rgba(139, 92, 246, 0.35)` (purple)
- Icon colour: `#2dd4bf` (light teal)
- Muted text: `rgba(255, 255, 255, 0.6)`
