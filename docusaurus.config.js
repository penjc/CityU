// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CityU 手册',
  tagline: '全面的CityU课程、生活与职业发展资源',
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
        gtag: {
          trackingID: 'G-J2CVMJM0PN',
          anonymizeIP: true,
        },
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
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5, // 默认优先级
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);

            // 对特定页面加大权重
            const highPriorityUrls = [
              'https://penjc.github.io/cityU-navigator/',
              'https://penjc.github.io/cityU-navigator/start',
              'https://penjc.github.io/cityU-navigator/docs/welcome/intro',
              'https://penjc.github.io/cityU-navigator/docs/courses/intro',
              'https://penjc.github.io/cityU-navigator/docs/career/intro',
              'https://penjc.github.io/cityU-navigator/docs/faq/intro',
              'https://penjc.github.io/cityU-navigator/about',
            ];

            const updatedItems = items.map(item => {
              // 如果页面是高优先级的页面，并且是精准匹配，而不是子页面，优先级设为 1.0
              if (
                  highPriorityUrls.some(url => item.url === url) // 精准匹配，避免子页面
              ) {
                item.priority = 1.0;
              }
              return item;
            });

            return updatedItems;
          },
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // TODO: social-card
      // image: 'img/social-card.jpg',
      metadata: [
        {name: 'google-site-verification', content: 'AUpZDRdVtmdoR8Q35bcYZ3dn_qAduJvQUQD4pSS5aMQ'},
        {name: 'msvalidate.01', content: '645627EF454E2562A60001314F5C1819'},
        {
          name: 'keywords',
          content: 'CityU, 香港城市大学, CityU 学生手册, CityU 校园指南, CityU 课程信息, CityU 职业发展, CityU 新生指南, 香港城市大学课程选择, CityU 学术支持, CityU 校园生活, CityU 职业规划, 香港城市大学就业资源'
        },
        {
          name: 'description',
          content: 'CityU 手册是一个为香港城市大学学生提供的全面平台，涵盖课程选择、校园生活、职业发展等信息，帮助学生更好地适应大学生活并规划未来职业发展。'
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'CityU 手册'},
        {name: 'twitter:description', content: 'Your ultimate guide to navigate courses at CityU.'},
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
        disableSwitch: false, // 是否允许切换深色模式
        respectPrefersColorScheme: true, // 是否尊重用户的操作系统设置
      },
      // 导航栏
      navbar: {
        title: 'CityU 手册',
        hideOnScroll: true,
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
          className: 'navbar-icon',
          href: 'https://penjc.github.io/cityU-navigator/',
          target: '_self',
        },
        items: [
          {
            to: '/start',
            label: '开始探索',
            position: 'left',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'welcome',
            label: '初见城大',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'course',
            label: '课程指南',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'career',
            label: '职业启航',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'faq',
            label: '常见问题',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          { type: 'search', position: 'right' },
          {
            label: '常用链接',
            position: 'right',
            items: [
              { label: '城大官网', href: 'https://www.cityu.edu.hk/' },
              { label: '校历', href: 'https://www.cityu.edu.hk/zh-cn/calendar/academic/2024-2025' },
              { label: '图书馆', href: 'https://www.cityu.edu.hk/lib/' },
              { label: '城大学术库', href: 'https://scholars.cityu.edu.hk/' },
              { label: 'AIMS', href: 'https://banweb.cityu.edu.hk/' },
              { label: 'Canvas', href: 'https://canvas.cityu.edu.hk/' },
              { label: '城大电子门户', href: 'https://eportal.cityu.edu.hk/' },
              { label: '城大应用', href: 'https://auth.cityu.edu.hk/app/UserHome' },
              { label: '资源预定系统', href: 'https://booking.cityu.edu.hk/app/booking-types' },
              { label: '体育设施预定', href: 'https://sportsbooking.cityu.edu.hk/Facility' },
              { label: '往年考卷', href: 'https://www.cityu.edu.hk/lib/digital/exampaper/index.htm' },
              { label: '打印网站', href: 'https://ccstung1.ad.cityu.edu.hk:9192/app' },
            ],
          },
          {
            href: 'https://github.com/penjc/cityU-navigator',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/contributing',
            label: '加入我们',
            position: 'right',
          },
        ],
      },
      // 页脚
      footer: {
        style: 'dark',
        links: [
          {
            title: '探索',
            items: [
              { label: '首页', to: '/' },
              { label: '快速开始', to: '/start' },
              { label: '关于我们', to: '/about' },
            ],
          },
          {
            title: '参与',
            items: [
              {
                label: '贡献指南',
                href: '/contributing',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '版权',
                href: '/copyright',
              },
              {
                label: '免责声明',
                href: '/disclaimer',
              },
              {
                label: '隐私政策',
                href: '/privacy-policy',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/penjc/cityU-navigator',
              },
            ],
          },
        ],
        logo: {
          alt: 'CityU Navigator Logo',
          src: 'img/cityu-logo.svg',
          href: 'https://www.cityu.edu.hk/',
          style: { width: '157px', height: 'auto' },
        },
        copyright: `Copyright © ${new Date().getFullYear()} CityU 手册.<br/>
        <span id="busuanzi_container_site_pv">
          <img src='/cityU-navigator/img/view.svg' alt="访问量" style="width:16px;height:16px;vertical-align:middle;filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.3));"/>
          本站访问量 <span id="busuanzi_value_site_pv"></span> 次 |
          <img src='/cityU-navigator/img/user.svg' alt="访客量" style="width:16px;height:16px;vertical-align:middle;filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.3));"/>
          本站访客数 <span id="busuanzi_value_site_uv"></span> 人
        </span>
        `,
      },
      // 搜索
      algolia: {
        appId: 'UPYPM5BQ76',
        apiKey: '6cf5858fef7de9367d8ef73f722b371e',
        indexName: 'penjcio',
        contextualSearch: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // 通知栏
      announcementBar: {
        id: 'star_support', // 一个唯一的 ID，用于控制显示状态
        content: `
      <span class="gradient-text">
        ⭐️ 如果本站能帮助到您，欢迎点一个 Star 支持作者
      </span>
      <a href="https://github.com/penjc/cityU-navigator" target="_blank" class="specific-github-link">GitHub</a>
  `,
        backgroundColor: '#fdf8f4', // 背景色
        isCloseable: false, // 是否允许关闭通知栏
      },
    },
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
        '@type': 'Organization',
        name: 'CityU 手册',
        url: 'https://penjc.github.io/cityU-navigator/',
        logo: 'https://penjc.github.io/cityU-navigator/img/logo.png', // 替换为实际 LOGO 路径
        description: 'CityU 手册是一个开源平台，旨在为香港城市大学学生提供详细的课程信息、校园指南和职业发展资源，帮助他们更有效地导航学术和校园生活。CityU Navigator is an open-source platform providing CityU students with detailed course information, campus guides, and career resources.',
        'sameAs': 'https://www.cityu.edu.hk/',
      }),
    },
  ],
  scripts: [
    {
      src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
      async: true,
    },
  ],
};
export default config;
