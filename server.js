let fs = require('fs')
const express = require('express')
const app = express()
//问号
app.get('/api/getlist', (req, res) => {
	console.log(req.url)

	fs.readFile('./data.json', 'utf-8', (err, data) => {
		if (err) {
			res.write('server error')
		} else {
			// res.header('Access-Control-Allow-Origin', '*')
			res.send(data)
		}
	})
})
app.listen(3000, () => {
	console.log(3000)
})
// http
// 	.createServer((req, res) => {
// 		//data.json为自定义的json文件
// 		fs.readFile('./data.json', (err, data) => {
// 			//必须添加这些头部信息，允许跨域请求
// 			res.writeHead(200, {
// 				'Access-Control-Allow-Origin': '*',
// 				'Access-Control-Allow-Headers': 'X-Requested-With',
// 			})
// 			if (err) {
// 				res.write('server error')
// 			} else {
// 				res.write(data)
// 			}
// 			res.end()
// 		})
// 	})
// 	.listen(3000)
