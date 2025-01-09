// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CityU CS Navigator',
  tagline: 'Your Compass to CityU CS Success',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://penjc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cityu-cs-navigator',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'penjc', // Usually your GitHub org/user name.
  projectName: 'cityu-cs-navigator', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "fr" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      // 'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './courseSidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://https://github.com/penjc/cityu-cs-navigator/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://https://github.com/penjc/cityu-cs-navigator/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: {
          path: 'src/pages',
          // editUrl:'',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          // remarkPlugins: [require('./my-remark-plugin')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // TODO: social-card
      // image: 'img/social-card.jpg',
      metadata: [
        { name: 'keywords', content: 'CityU, Computer Science, Course Navigator, University, Education' },
        { name: 'description', content: 'CityU CS Navigator: Your ultimate guide to navigate computer science courses at CityU.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CityU CS Navigator' },
        { name: 'twitter:description', content: 'Your ultimate guide to navigate computer science courses at CityU.' },
        // { name: 'twitter:image', content: '/img/cityu-social-card.png' }, // 确保图片路径正确
      ],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light', // 默认亮色模式
        disableSwitch: true, // 是否允许切换深色模式
        respectPrefersColorScheme: true, // 是否尊重用户的操作系统设置
      },
      navbar: {
        title: 'CityU CS Navigator',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'courseSidebar',
            label: '选课指南',
          },
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'second',
          //   label: 'second',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/penjc/cityu-cs-navigator',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Explore',
            items: [
              { label: 'Home', to: '/' },
              { label: 'Get Started', to: '/docs/courses/intro' },
              { label: 'About Us', to: '/about' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'CityU CS Department', href: 'https://www.cityu.edu.hk/cs/' },
              { label: 'CityU CS Programmes', href: 'https://www.cs.cityu.edu.hk/academic-programmes/programmes-overview' },
              { label: 'Course Catalog', href: 'https://www.cityu.edu.hk/catalogue/pg/202425/catalogue/catalogue_TP.htm?page=TP/TP_course_CS.htm' },
            ],
          },
          {
            title: 'Participate',
            items: [
              {
                label: 'Contributing',
                href: '/contributing',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/penjc/cityu-cs-navigator',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CityU CS Navigator.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // TODO search
      //
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'YOUR_APP_ID',
      //
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //
      //   indexName: 'YOUR_INDEX_NAME',
      //
      //   // Optional: see doc section below
      //   contextualSearch: true,
      //
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'external\\.com|domain\\.com',
      //
      //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //   replaceSearchResultPathname: {
      //     from: '/docs/', // or as RegExp: /\/docs\//
      //     to: '/',
      //   },
      //
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
      //
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
      //
      //   // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      //   insights: false,
      //
      //   //... other Algolia params
      // },
    }),
  headTags: [
    // 添加 <link> 标签用于预连接优化
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com', // 示例，预加载 Google Fonts
      },
    },
    // 添加 JSON-LD 结构化数据
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'EducationalOrganization',
        name: 'CityU CS Navigator',
        url: 'https://penjc.github.io/cityu-cs-navigator',
        logo: 'https://penjc.github.io/cityu-cs-navigator/img/logo.png', // 替换为实际 LOGO 路径
        description: 'Your ultimate guide to navigate computer science courses at CityU.',
      }),
    },
  ],

};
export default config;
