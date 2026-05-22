import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'pnerp Docs',
      description: 'pnerp ERP Database Reference',
      social: [],
      sidebar: [
        {
          label: 'Database Schema',
          autogenerate: { directory: 'database' },
        },
      ],
      customCss: [],
    }),
  ],
});
