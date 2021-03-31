const repo = 'github:su37josephxia/vue-template'
const filename = '../test'

// 引用自定义模块
const {clone} = require('./04-custom-module')

clone(repo, filename)