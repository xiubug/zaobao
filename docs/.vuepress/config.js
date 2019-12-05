// 配置文件的入口文件，也可以是 YML 或 toml。

module.exports = {
  base: '/zaobao/',
  title: '每日早报',
  description: '每日早报，以前端技术体系为主要分享课题。根据：文章、工具、新闻、视频几大板块作为主要分类。',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}