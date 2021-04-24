/* eslint-disable*/
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	entry: { main: './src/index.js' }, //使用相对路径时是基于context
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		chunkFilename:'[name].chunk.js'
	},
	resolve: {
		// extensions:['.wasm','.mjs','.js','.json','.vue','.ts']
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	//优化
	optimization: {
		minimizer: [new TerserPlugin({ extractComments: false })], //版权注释不单独提取
		usedExports: true,
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					'postcss-loader',
					'stylus-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				// use: [
				// 	{
				// 		loader: 'url-loader',
				// 		options: { name: 'img/[name].[hash:6].[ext]', limit: 100 * 1024 },
				// 	},
				// ],
				type: 'asset',
				generator: {
					filename: 'img/[name].[hash:6][ext]',
				},
				parser: {
					dataUrlCondition: {
						maxSize: 100 * 1024,
					},
				},
			},
			{
				test: /\.ttf|eot|woff2?$/,
				type: 'asset/resource',
				generator: {
					filename: 'font/[name].[hash:6][ext]',
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'hypocrisy',
			template: './public/index.html',
		}),
		new DefinePlugin({
			// eslint-disable-next-line quotes
			BASE_URL: "'./'",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public',
					noErrorOnMissing: true,
					globOptions: {
						gitignore: true,
						ignore: ['**/.DS_Store', '**/index.html'],
					},
				},
			],
		}),
	],
}
