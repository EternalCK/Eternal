// @ts-check
const path = require('path')
const beian = '鲁ICP备 2022031533-1号'

const announcementBarContent = ` <a href='https://www.cwkl.love' target='_blank'>本站仅在测试使用，数据仅迁移很少部分！</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '艺',
  titleDelimiter: '-',
  url: 'https://blogs.cwkl.love',
  baseUrl: '/',
  favicon: '/img/logo.png',
  organizationName: '艺',
  projectName: 'docusaurus',
  tagline: '苦逼农民工',
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      announcementBar: {
        id: 'announcementBar-3',
        content: announcementBarContent,
      },
      metadata: [
        {
          name: 'keywords',
          content:'艺'
        },
        {
          name: 'keywords',
          content: 'blog, 艺, kubernetes, docker, javascript, typescript, react, vue, web, 前端, 后端, 云原生,容器',
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: '艺',
        hideOnScroll: true,
        logo: {
          alt: '艺',
          src: '/img/logo.png',
          srcDark: '/img/logo.png',
        },
        items: [
          {
            label: '标签',
            position: 'left',
            to: 'tags',
          },
          {
            label: '归档',
            position: 'left',
            to: 'archive',
          },

          {
            label: 'WiKi',
            position: 'left',
            items: [
              {
                label: '一念',
                to: "/notes"
              },
              {
                label: '知识',
                to: "/docs/intro"
              }
            ]
          },
          {
            label: '收藏',
            position: 'right',
            to: 'website',
          },
          {
            label: '项目',
            position: 'right',
            to: 'project',
          },
          {
            label: '留言',
            position: 'right',
            to: 'todo',
          },
          {
            label: '金榜题名',
            position: 'right',
            to: "sponsor"
          },
          //英化未完成！！！
          // {
          // type: 'localeDropdown',
          // position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '标签',
                to: 'tags',
              },
              {
                label: '归档',
                to: 'archive',
              },
              {
                label: '项目',
                to: 'project',
              },
            ],
          },
          {
            title: '站点',
            items: [
              {
                label: '关于',
                to: '/about',
              },
              {
                label: '日志',
                to: '/site',
              },
              {
                label: '赞助',
                to: '/sponsor',
              },
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EternalCK',
              },
              {
                label: 'Email',
                to: 'mailto:453522371@qq.com',
              },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:25px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
              },
            ],
          },
        ],
        copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a><br>
                      <img src="https://cwkl.love/images/beianico-1.png"><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37098302000970">鲁公网安备 37098302000970号</a></p>
                         <p>Copyright © 2023 – ${new Date().getFullYear()} Mr.Chen All Rights Reserved</p>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['bash', 'docker', 'yaml', 'json','markdown','python', 'javascript', 'typescript', 'php', 'rust'],
        defaultLanguage: 'go',
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {}
      },
      giscus: {
        repo: 'EternalCK/Eternal',
        repoId: 'R_kgDOIAzZRA',
        category: 'General',
        categoryId: 'DIC_kwDOIAzZRM4CVG2C',
        theme: 'light',
        darkTheme: 'dark',
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      socials: {
        github: 'https://github.com/EternalCK',
        telegram: 'https://t.me/EternalCK',
        wx: 'https://pic.cwkl.love/css/weixin.png',
      },
    }),
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '个人博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en','zh'],
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        docsDir: './docs',
        blogDir: './blog',
      },
    ],
  ],
  plugins: [
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
      path: 'blog',
      routeBasePath: '/',
      editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
        `https://github.com/EternalCK/Eternal/edit/master/${blogDirPath}/${blogPath}`,
      editLocalizedFiles: false,
      blogDescription: '个人博客',
      blogSidebarTitle: '近期文章',
      blogSidebarCount: 10,
      postsPerPage: 10,
      showReadingTime: true,
      readingTime: ({ content, frontMatter, defaultReadingTime }) =>
        defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
      feedOptions: {
        type: 'all',
        title: '艺',
        copyright: `Copyright © ${new Date().getFullYear()} Mr.Chen Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
      },
    }
    ],
    [ '@docusaurus/plugin-content-docs', {
      id: 'notes',
      path: 'notes',
      routeBasePath: 'notes',
      editCurrentVersion: false,
      sidebarPath: require.resolve('./sidebars.js'),
      showLastUpdateAuthor: false,
      showLastUpdateTime: false,
      sidebarCollapsed: false,
    },
    ],
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image', {
      disableInDev: false,
    }
    ],
    ['@dipakparmar/docusaurus-plugin-umami', {
      // options
      websiteID: "443801ba-3941-4f76-9996-4896222b772c", // Required
      analyticsDomain: "analytics.umami.is", // Required
      scriptName: "",
      dataHostURL: "",
      dataAutoTrack: true,
      dataDoNoTrack: true,
      dataCache: true,
      dataDomains: "", // comma separated list of domains, *Recommended*
    }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.7.0/lxgwwenkaiscreen.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        htmlLang: 'zh-CN'
      },
    },
  },
}

module.exports = config
