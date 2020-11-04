const path  = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    devtool:'source-map',
    entry:'./main.js',  //入口
    output:{
       filename:'bundle.js',
       path:path.resolve(__dirname,'dist')
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}