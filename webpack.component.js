const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const glob = require('glob')
const list = {}

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  for (const file of files) {
    const component = file.split(/[/.]/)[1]
    list[component] = `./${file}`
  }
}
makeList('packages', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'zgys-ui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' }
        ]
      }
    ]
  }
}
