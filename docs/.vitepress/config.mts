import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Fish",
  description: "我的网站",
  srcDir: 'packages',
  // 路由重写 简洁url
  //rewrites: {
   // 'home/src/index.md': "/index.md",
   // '测试动态路由/src/测试.md': '/测试.md',
  //  '服务器/src/静态网页和阿里云绑定.md': '服务器/静态网页和阿里云绑定.md',
 //   'Linux/src/常见Linux命令.md': 'Linux/常见Linux命令.md'
 // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/home/src/index' },
      { text: '导航', link: '/测试动态路由/src/测试' },
    ],

    sidebar: [
      {
        items: [
          { text: '测试动态路由', link: '/测试动态路由/src/测试' },
          {
            text: "Linux", collapsed: true, items: [
              { text: '常见Linux命令', link: '/Linux/src/常见Linux命令' }
            ]
          },
          {
            text: "服务器", collapsed: true, items: [
              { text: '静态网页和阿里云绑定', link: '/服务器/src/静态网页和阿里云绑定' }
            ]
          },

        ]
      }
    ],
    outline: {
      label: "页面导航",
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    //开启时间文档更新的时间戳
    lastUpdated: {
      text: '最后的更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  },

  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
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
