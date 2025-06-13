import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Porla',
  tagline: 'A high performance BitTorrent client for seedboxes and servers.',
  url: 'https://porla.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  organizationName: 'porla',
  projectName: 'docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/porla/docs',
          routeBasePath: '/'
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Porla',
        logo: {
          alt: 'Porla logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Home',
            activeBaseRegex: '^/$'
          },
          {
            to: 'plugins/getting_started',
            position: 'left',
            label: 'Plugins',
          },
          {
            to: 'api/auth',
            position: 'left',
            label: 'HTTP API',
          },
          {
            href: 'https://github.com/porla/porla',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['lua', 'systemd', 'toml'],
      },
    }),
};

module.exports = config;
