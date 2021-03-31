// 内置模块

const os = require('os')

const freemem = os.freemem() // 以整数的形式返回空闲的系统内存量（以字节为单位）
const totalMem = os.totalmem() // 以整数的形式返回系统的内存总量（以字节为单位）

const mem = freemem / totalMem * 100
console.log(`内存占用率${mem.toFixed(2)}%`)