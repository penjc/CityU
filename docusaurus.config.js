// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const isGitHub = process.env.DEPLOY_ENV === 'github';
const baseUrl = isGitHub ? 'https://penjc.github.io/CityU' : 'https://cityuhk.cn';

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: {
    CHANGE_LOG: process.env.CHANGE_LOG,
  },
  title: 'CityU 手册',
  tagline: '全面的 CityU 课程信息与评价、生活攻略和职业发展资源',
  favicon: `/img/favicon.ico`,

  // Set the production url of your site here
  url: process.env.DEPLOY_ENV === 'github' ? 'https://penjc.github.io' : 'https://cityuhk.cn',
  baseUrl: process.env.DEPLOY_ENV === 'github' ? '/CityU/' : '/',
  // baseUrl: '/CityU/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'penjc', // Usually your GitHub org/user name.
  projectName: 'CityU', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
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
          // trackingID: 'G-J2CVMJM0PN, G-GT9NE9JDDR',
          trackingID: 'G-GT9NE9JDDR',
          anonymizeIP: true,
        },
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: './courseSidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/penjc/CityU/edit/main/',
        },
        blog: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          blogSidebarTitle: '最新文章',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'CityU GuideBook Blog',
            description: 'Keep up to date with upcoming CityU GuideBook releases and articles by following our feed!',
            copyright: `Copyright © ${new Date().getFullYear()} CityU GuideBook`,
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/penjc/CityU/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: 'src/pages',
          editUrl:
              'https://github.com/penjc/CityU/edit/main/',
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
              `${baseUrl}/`,
              `${baseUrl}/start`,
              `${baseUrl}/docs/welcome/intro`,
              `${baseUrl}/docs/courses/intro`,
              `${baseUrl}/docs/career/intro`,
              `${baseUrl}/docs/faq/intro`,
              `${baseUrl}/about`,
              // 'https://penjc.github.io/CityU/',
              // 'https://penjc.github.io/CityU/start',
              // 'https://penjc.github.io/CityU/docs/welcome/intro',
              // 'https://penjc.github.io/CityU/docs/courses/intro',
              // 'https://penjc.github.io/CityU/docs/career/intro',
              // 'https://penjc.github.io/CityU/docs/faq/intro',
              // 'https://penjc.github.io/CityU/about',
              // 'https://cityuhk.cn/',
              // 'https://cityuhk.cn/start',
              // 'https://cityuhk.cn/docs/welcome/intro',
              // 'https://cityuhk.cn/docs/courses/intro',
              // 'https://cityuhk.cn/docs/career/intro',
              // 'https://cityuhk.cn/docs/faq/intro',
              // 'https://cityuhk.cn/about',
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
          content: 'CityU, CityU 手册, Cityu 课程, 香港城市大学, 香港城市大学课程选择, CityU 校园指南, CityU 课程信息, CityU 新生指南, CityU 学术支持, CityU 校园生活, CityU 职业规划, 香港城市大学就业资源, CityU 职业发展,'
        },
        {
          name: 'description',
          content: 'CityU 手册是香港城市大学学生的全方位资源平台，提供详细的课程信息、真实的学生评价、校园生活指南及职业发展资源，助力学生顺利适应大学生活并规划未来职业道路。'
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'icon',
            href: `https://${baseUrl}/img/favicon.ico`,
          }
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'CityU 手册'},
        {name: 'twitter:description', content: 'Your ultimate guide to navigate courses at CityU.'},
        // { name: 'twitter:image', content: '/img/cityu-social-card.png' },
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
          src: `/img/logo.png
          `,
          className: 'navbar-icon',
          href: '/',
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
            to: '/friendLinks',
            label: '友情链接',
            position: 'right',
          },
          {
            to: '/contributing',
            label: '加入我们',
            position: 'right',
          },
          {
            href: 'https://github.com/penjc/CityU',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      // 页脚
      footer: {
        style: 'dark',
        links: [
          {
            title: '快速导航',
            items: [
              { label: '首页', to: '/' },
              { label: '快速开始', to: '/start' },
              { label: '关于我们', to: '/about' },
            ],
          },
          {
            title: '探索更多',
            items: [
              {
                label: '博客',
                href: '/blog',
              },
              {
                label: '贡献指南',
                href: '/contributing',
              },
              {
                label: '更新日志',
                href: '/changeLog',
              },
            ],
          },
          {
            title: '法律信息',
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
                href: 'https://github.com/penjc/CityU',
              },
              {
                label: 'RSS 订阅',
                href: 'https://penjc.github.io/CityU/blog/rss.xml',
              },
              {
                label: 'Atom 订阅',
                href: 'https://penjc.github.io/CityU/blog/atom.xml',
              },
            ],
          },
        ],
        logo: {
          alt: 'CityU Logo',
          src: `${baseUrl}/img/cityu-logo.svg`,
          href: 'https://www.cityu.edu.hk/',
        },
        copyright: `版权所有 © ${new Date().getFullYear()} CityU 手册 <br/>
        <a class="beianlink" href="https://beian.mps.gov.cn/#/query/webSearch?code=31011502403049" rel="noreferrer" target="_blank"><img src="${baseUrl}/img/gawb.webp" alt="备案" class="gabeian-icon"> 沪公网安备31011502403049号</a>
        <a class="beianlink" href="https://beian.miit.gov.cn/" target="_blank"><img src="${baseUrl}/img/icpb.webp" alt="备案" class="beian-icon"/> 沪ICP备2025112622号-1</a>
        `,
      },
      // 搜索
      algolia: isGitHub
          ? {
            appId: 'UPYPM5BQ76',
            apiKey: '6cf5858fef7de9367d8ef73f722b371e',
            indexName: 'penjcio',
            contextualSearch: false,
          }
          // : {
          //   appId: 'LT3Y699LZF',
          //   apiKey: '52e4f9129381dc6aae08b42ad139fd66',
          //   indexName: 'cityuhk',
          //   contextualSearch: false,
          // },
          : {
            appId: 'UPYPM5BQ76',
                apiKey: '6cf5858fef7de9367d8ef73f722b371e',
                indexName: 'penjcio',
                contextualSearch: false,
                replaceSearchResultPathname: {
              from: '/CityU/', // or as RegExp: /\/docs\//
                  to: '/',
            },
          },
      // algolia: {
      //     appId: 'LT3Y699LZF',
      //     apiKey: '52e4f9129381dc6aae08b42ad139fd66',
      //     indexName: 'cityuhk',
      //     contextualSearch: false,
      // },
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
      <a href="https://github.com/penjc/CityU" target="_blank" class="specific-github-link">GitHub</a>
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
        rel: 'icon',
        href: `${baseUrl}/img/favicon.ico`,
      },
    },
    // {
    //   tagName: 'link',
    //   attributes: {
    //     rel: 'preconnect',
    //     href: 'https://fonts.googleapis.com', // 示例，预加载 Google Fonts
    //   },
    // },
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
        url: `${baseUrl}`,
        logo: `${baseUrl}/img/logo.png`,
        description: 'CityU 手册是香港城市大学学生的全方位资源平台，提供详细的课程信息、真实的学生评价、校园生活指南及职业发展资源，助力学生顺利适应大学生活并规划未来职业道路。',
        mainEntity: [
          {
            "@type": "WebPage",
            "name": "开始探索",
            "url": `${baseUrl}/start`,
          },
          {
            "@type": "WebPage",
            "name": "初见城大",
            "url": `${baseUrl}/docs/welcome/intro`
          },
          {
            "@type": "WebPage",
            "name": "课程指南",
            "url": `${baseUrl}/docs/courses/intro`
          },
          {
            "@type": "WebPage",
            "name": "职业启航",
            "url": `${baseUrl}/docs/career/intro`
          },]
      }),
    },
  ],
};
export default config;
