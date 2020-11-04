const path  = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const htmlWebpackPlugin   = require('html-webpack-plugin');


module.exports = {
    devtool:'eval-source-map',
    entry:'./src/main.js',  //入口
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
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
          filename:'index.html',
          template:'index.html'
        })
    ]
}