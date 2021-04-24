const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')

const prodConfig = {
	mode: 'production',
	// devtool: 'nosources-source-map',
}

module.exports = merge(commonConfig, prodConfig)
