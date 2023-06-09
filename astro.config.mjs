import { defineConfig, sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
    inlineStylesheets: 'auto',
  },
  image: {
    service: sharpImageService(),
  },
});
