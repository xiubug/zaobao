// 配置文件的入口文件，也可以是 YML 或 toml。
const readFileList = require("../../scripts/build.js");

module.exports = {
  base: '/zaobao/',
  title: '每日早报',
  description: '每日早报，以前端技术体系为主要分享课题。根据：文章、工具、新闻、视频几大板块作为主要分类。',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  serviceWorker: true,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '最后修改时间',
    nav:[ // 导航栏配置
      {text: 'GitHub', link: 'https://github.com/sosout', target: '_self', rel: ''}
    ],
    sidebar: 'auto', // 侧边栏配置
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}