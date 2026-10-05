import { defineConfig } from 'vite';

// base './' keeps asset paths relative, so the build works on GitHub Pages
// (https://<user>.github.io/<repo>/) as well as any static host.
export default defineConfig({
  base: './',
});
