import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://profi-nova.github.io',
  base: '/docs',
  integrations: [
    starlight({
      title: 'pnerp Docs',
      description: 'pnerp ERP Database Reference — MariaDB Schema',
      sidebar: [
        {
          label: 'Database Schema',
          items: [
            { label: '📋 Pregled svih tabela', link: '/database/' },
            { label: 'Tabele', autogenerate: { directory: 'database', collapsed: false } },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
