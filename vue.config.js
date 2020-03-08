const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

// 預渲染
module.exports = {
  productionSourceMap: false,
  configureWebpack(config) {
    if ('production' === process.env.NODE_ENV) {
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/'],
          renderer: new Renderer({
            headless: false,
            renderAfterTime: 5000
          })
        })
      )
    }
  }
}
