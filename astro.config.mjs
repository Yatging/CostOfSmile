import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yatging.github.io',
  base: '/CostOfSmile',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
