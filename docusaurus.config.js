// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CityU Navigator',
  tagline: 'Your Compass to CityU Success',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://penjc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cityU-navigator',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'penjc', // Usually your GitHub org/user name.
  projectName: 'cityU-navigator', // Usually your repo name.
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
            'https://github.com/penjc/cityU-navigator/edit/main/',
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
            'https://github.com/penjc/cityU-navigator/edit/main/',
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
        { name: 'keywords', content: 'CityU, Course Navigator, University, Education' },
        { name: 'description', content: 'CityU Navigator: Your ultimate guide to navigate courses at CityU.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CityU Navigator' },
        { name: 'twitter:description', content: 'Your ultimate guide to navigate courses at CityU.' },
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
        title: 'CityU Navigator',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
          className: 'navbar-icon',
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
            href: 'https://github.com/penjc/cityU-navigator',
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
              { label: 'Get Started', to: '/start' },
              { label: 'About Us', to: '/about' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'CityU', href: 'https://www.cityu.edu.hk/' },
              { label: 'CityU Programmes', href: 'https://www.cityu.edu.hk/academic/catalogue' },
              { label: 'AIMS', href: 'https://banweb.cityu.edu.hk/' },
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
            title: 'Find Us',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/penjc/cityU-navigator',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CityU Navigator.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // 其他配置
      announcementBar: {
        id: 'star_support', // 一个唯一的 ID，用于控制显示状态
        content:
            '⭐️ If you like CityU Navigator, give it a star on <a href="https://github.com/penjc/cityU-navigator" target="_blank">GitHub</a>!',
        backgroundColor: '#f5f5f5', // 背景色
        textColor: '#000', // 文字颜色
        isCloseable: true, // 是否允许关闭通知栏
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
        url: 'https://penjc.github.io/cityU-navigator',
        logo: 'https://penjc.github.io/cityU-navigator/img/logo.png', // 替换为实际 LOGO 路径
        description: 'Your ultimate guide to navigate computer science courses at CityU.',
      }),
    },
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-J2CVMJM0PN', // 替换为您的 Google Analytics Tracking ID
        anonymizeIP: true, // 可选：是否匿名化 IP 地址
      },
    ],
  ],
};
export default config;
