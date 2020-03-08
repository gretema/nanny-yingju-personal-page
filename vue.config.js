var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

// 預渲染
module.exports = {
  // ...
  plugins: [
    new PrerenderSpaPlugin(
      // 編譯後的 html 需要存放的路径
      path.join(__dirname, '../dist'),
      // 列出哪些路由需要預渲染
      ['/', '/about', '/contact']
    )
  ]
}