const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'production',
	// devtool: 'nosources-source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css', // 分离后的文件名
			chunkFilename: 'css/[id].css', //
			ignoreOrder: false,
		}),
	],
}
