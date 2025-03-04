import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  experimental: {},
  integrations: [tailwind(), compress(), react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'de'],
  },
});
