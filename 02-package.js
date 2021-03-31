/**
 * 第三方模块
 */

 // 导入模块
const download = require('download-git-repo')
const ora = require('ora')

const process = ora(`下载.....项目`)
process.start()

download('github:su37josephxia/vue-template', '文件名', err => {
  if (err) {
    process.fail()
  } else {
    process.succeed()
  }
})