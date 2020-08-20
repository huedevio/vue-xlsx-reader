// vue.config.js
configureWebpack: config => {
  module.exports = {
    module: {
      rules: [
        // ... other rules
        {
          test: /\.xlsx$/,
          use: [
            { loader: 'webpack-xlsx-loader' }
          ]
        }
      ]
    }
  }
}
