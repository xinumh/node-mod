// 如何让异步任务串行化

const repo = 'github:su37josephxia/vue-template'
const filename = '../test'

clone(repo,filename)

async function clone (repo, filename) {
  const { promisify } = require('util')
  const download = promisify(require('download-git-repo'));

  const ora = require('ora')
  const process = ora('下载项目......')
  process.start()

  try{
    await download(repo, filename)
  }catch(err) {
    process.fail()
  }
  process.succeed()
}