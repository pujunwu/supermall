// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {//配置别名
//         'assets':'@assets',
//         'common':'@common',
//         'components':'@components',
//         'network':'@network',
//         'views':'@views'
//       }
//     }
//   }
// }

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      // .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('common',resolve('src/common'))
      .set('network',resolve('src/network'))
      .set('views', resolve('src/views'))
  },
}

