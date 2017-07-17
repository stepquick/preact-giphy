import path from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import common from './webpack.common.babel'

export default webpackMerge(common, {
    output: {
        path: path.resolve('./build'),
        publicPath: '/',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map'
    },
    devServer: {
		port: process.env.PORT || 8080,
		contentBase: path.resolve('./src')
	}
})
