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