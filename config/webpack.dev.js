/* eslint-disable*/
const path = require('path')
const webpack = require('webpack')



module.exports = {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map', //生产模式不要eval
	target: 'web',
	devServer: {
		// open: true,
		contentBase: path.resolve(__dirname, 'dist'),
		inline: true,
		hot: true,
		hotOnly: true,
		compress: true, //gzip
		historyApiFallback: true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:3000',
				// pathRewrite: { '^/api': '' },
				changeOrigin: false, // target是域名的话，需要这个参数，
				secure: false, // 设置支持https协议的代理
			},
		},
	},
	plugins: [new webpack.HotModuleReplacementPlugin(),],
}

