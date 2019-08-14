const path = require('path')

function addStyleResource (rule) {
    rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/theme.styl'),
        ],
    })
}
module.exports = {
    publicPath: '/',
    chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    },
}