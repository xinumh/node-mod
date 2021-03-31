// stream - 是用于与node中流数据交互的接口

const fs = require('fs')
const http = require('http')

// 创建输入输出流
const rs = fs.createReadStream('./conf.js')
const ws = fs.createWriteStream('./conf2.js')
rs.pipe(ws)

//二进制友好，图片操作

const rs2 = fs.createReadStream('./abc0.jpg')
const ws2 = fs.createWriteStream('./abc02.jpg')
rs2.pipe(ws2);

const server = http.createServer((request, response) => {
  const { url, method } = request
  if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        response.writeHead(500, {  'Content-Type': 'text/plain;charset=utf-8' })
        response.end('500，服务器错误')
        return
      }

      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  } 
  else if ((url === '/users' && method === 'GET')) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify([{name:'tom',age:20}]))
  }
  else if ((request.headers.accept.indexOf('image/*') !== -1 && method === 'GET')) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    fs.createReadStream('.'+url).pipe(response)
  }
  else {
    response.statusCode = 404

    response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.end('404', '页面没有找到')
  }
})

server.listen(3000);

// Accept代表发送端（客户端）希望接受的数据类型。 比如：Accept：text/xml; 代表客户端希望接受的数据类型是xml类型。
// Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。 比如：Content-Type： text/html; 代表发送端发送的数据格式是html。
// 二者合起来， Accept:text/xml； Content-Type:text/html ，即代表希望接受的数据类型是xml格式，本次请求发送的数据的数据格式是html。