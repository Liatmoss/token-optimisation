# token-optimisation

React + Vite presentation deck on token optimisation.

## Dev server

The system Node (v14) is too old for Vite 8. Use the Node 20 binary directly:

```bash
~/.nvm/versions/node/v20.20.2/bin/node node_modules/.bin/vite
```

Then open http://localhost:5173.

> `npm run dev` will not work because the `prefix` entry in `~/.npmrc` conflicts with nvm, and the fallback system Node is v14.

To kill the dev server:

```bash
lsof -ti :5173 | xargs kill -9
```

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
| `content-card` | Dark full-screen, title, dark card with arrow bullets. Add `video` for a split layout: card left, video right (`{ title, subtitle?, card, video? }`) — `card.secondaryHeading` / `card.secondaryPoints` are optional |
| `comparison-cards` | Dark full-screen, title, two side-by-side cards (`{ title, cards[] }`) — each card: `{ icon, heading, points[] }`, each point: `{ label, text }` |
| `image-list` | Dark full-screen, title, left video/placeholder, right icon-per-bullet list (`{ title, items, video? }`) |
| `key-takeaways` | Dark full-screen, title, subtitle, icon cards, callout box (`{ title, subtitle, cards, callout }`) |
| `agenda` | Dark full-screen, glowing title, 2×2 grid of numbered cards (`{ title, items[] }`) — each item: `{ number, heading, text }` |

## Adding videos

Import the video file at the top of the slide JS file and pass it as the `video` field:

```js
import video from '../assets/my-video.mov'

const slide = { layout: 'content-card', video, ... }
```

MOV files work fine in the browser via Vite. Videos auto-play muted and loop when the slide is active.

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

## Style notes

When adding a new layout, base card styles on the existing dark card pattern — do not use white/light backgrounds:

```css
background: rgba(0, 0, 0, 0.25);
border: 1px solid rgba(139, 92, 246, 0.4);
border-radius: 12px;
backdrop-filter: blur(6px);
```

Videos use `border-radius: 20px` (larger than card radius to appear visually equivalent at video scale). Always add `overflow: hidden` alongside `border-radius` on video elements to ensure corners clip correctly.

When a layout is large (full slide), set `grid-row: 1 / 3` on the wrapper so it spans both the header and content grid rows of `.deck`.

## Colour scheme (dark slides)

- Background: `#060d1a` + `src/assets/background.svg`
- Headline glow: `#ffffff` with `text-shadow: 0 0 40px rgba(6,214,160,0.6), 0 0 80px rgba(6,214,160,0.3)`
- Accent / borders: `#14b8a6` (teal)
- Card borders: `rgba(139, 92, 246, 0.35)` (purple)
- Icon colour / numbers: `#2dd4bf` (light teal)
- Card sub-headings (h2 inside cards): `#2dd4bf` (light teal)
- Muted text: `rgba(255, 255, 255, 0.65)`
