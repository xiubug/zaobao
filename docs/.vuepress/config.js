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
    sidebar: [
      ["/", "1. 介绍"],
      {
        title: "2019年12月",
        collapsable: false,
        children: readFileList("2019", "12"),
      },
      {
        title: "2019年11月",
        collapsable: false,
        children: readFileList("2019", "11"),
      },
      {
        title: "2019年10月",
        collapsable: false,
        children: readFileList("2019", "10"),
      },
      {
        title: "2019年09月",
        collapsable: false,
        children: readFileList("2019", "09"),
      },
      {
        title: "2019年08月",
        collapsable: true,
        children: readFileList("2019", "08"),
      },
      {
        title: "2019年07月",
        collapsable: true,
        children: readFileList("2019", "07"),
      },
      {
        title: "2019年06月",
        collapsable: true,
        children: readFileList("2019", "06"),
      },
      {
        title: "2019年05月",
        collapsable: true,
        children: readFileList("2019", "05"),
      },
      {
        title: "2019年04月",
        collapsable: true,
        children: readFileList("2019", "04"),
      },
      {
        title: "2019年03月",
        collapsable: true,
        children: readFileList("2019", "03"),
      },
      {
        title: "2019年02月",
        collapsable: true,
        children: readFileList("2019", "02"),
      },
      {
        title: "2019年01月",
        collapsable: true,
        children: readFileList("2019", "01"),
      },
      {
        title: "2018年12月",
        collapsable: true,
        children: readFileList("2018", "12"),
      },
      {
        title: "2018年11月",
        collapsable: true,
        children: readFileList("2018", "11"),
      },
      {
        title: "2018年10月",
        collapsable: true,
        children: readFileList("2018", "10"),
      },
      {
        title: "2018年09月",
        collapsable: true,
        children: readFileList("2018", "09"),
      },
      {
        title: "2018年08月",
        collapsable: true,
        children: readFileList("2018", "08"),
      },
    ],
    algolia: {
      apiKey: "45ccc89b4b1e0e9463c80a66f168ae6d",
      indexName: "sosout_tqt",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}