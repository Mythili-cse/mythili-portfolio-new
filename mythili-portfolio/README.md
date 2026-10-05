# Mythili L — Interactive AI Portfolio

Portfolio of **Mythili L**, an aspiring Software Engineer focused on Generative AI, Prompt Engineering and Full Stack Development.

Features an AI character whose head and eyes follow the cursor (with natural blinking), a cinematic hero scene, glassmorphism sections and an "Ask Mythili AI" console that answers only from verified details.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Customize

Open `index.html` and edit the `CONFIG` object near the bottom of the script:

```js
const CONFIG = { email: "", resume: "" };
```

- `email` activates the contact form (opens a pre-filled email).
- `resume` (a URL) adds a Resume button to the hero.

## Structure

```
index.html                    page markup, styles and interaction scripts
public/assets/hero-portrait.webp   hero character image
vite.config.js                Vite config (relative base for GitHub Pages)
```
