const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
	mode: 'production',
	// devtool: 'nosources-source-map',
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					compress: {
						warnings: false,
						drop_console: true,
						drop_debugger: true,
						pure_funcs: ['console.log'], //移除console
					},
				},
			}),
			new CssMinimizerPlugin(),
		],
		usedExports: true,
		splitChunks: {
			chunks: 'all',
		},
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css', // 分离后的文件名
			chunkFilename: 'css/[id].css', //
			ignoreOrder: false,
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new CompressionPlugin({
			test: /\.(css|js)$/,
			algorithm: 'gzip',
		}),
	],
}
