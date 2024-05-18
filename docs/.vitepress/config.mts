import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Fish",
  description: "我的网站",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {
            text: "服务器", collapsed: true, items: [
              { text: '静态网页和阿里云绑定', link: '/服务器/静态网页和阿里云绑定' }
            ]
          },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: {
      label: "页面导航",
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  // 给md文档配置图片点击放大
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  },

  // 给md文档配置图片点击放大
  head: [
    [
      "link",
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
  ]
})
