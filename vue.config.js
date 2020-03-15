const PrerenderSPAPlugin = require('prerender-spa-plugin');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

// 預渲染
module.exports = {
  productionSourceMap: false,
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/', '/about', '/feature', '/faq'],
          renderer: new Renderer({
            headless: false,
            renderAfterTime: 5000,
          }),
        }),
      );
    }
  },
};

module.exports = {
  devServer: {
    watchOptions: {
      poll: true,
    },
  },
};

module.exports = {
  publicPath: './',
};
