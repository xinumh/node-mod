// 自定义模块：代码分割、复用手段

// module.exports.clone = async function clone(repo, desc) {
//   const ora = require('ora');
//   const process = ora(`下载项目 ${repo}`);
//   process.start();
//   const { promisify } = require('util');
//   const download = promisify(require('download-git-repo'));
//   try {
//     await download(repo, desc)
//   } catch (error) {
//     process.fail()
//   }
//   process.succeed()
// }

async function clone(repo, desc) {
  const ora = require('ora');
  const process = ora(`下载项目 ${repo}`);
  process.start();
  const { promisify } = require('util');
  const download = promisify(require('download-git-repo'));
  try {
    await download(repo, desc)
  } catch (error) {
    process.fail()
  }
  process.succeed()
}


module.exports = {
  clone
}