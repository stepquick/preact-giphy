import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default {
	output : {
		path: path.resolve('./build'),
		publicPath: '/familytree',
		filename: '[name].[hash].js',
		sourceMapFilename: '[name].[hash].map'
	},
	plugins : [
		new webpack.optimize.CommonsChunkPlugin({name: ['app']}),
		new ExtractTextPlugin("[name].[hash].css", {allChunks: true}),
		new HtmlWebpackPlugin({template: 'src/index.html', title: 'ReactJS w/ ES6'}),
		new CleanWebpackPlugin(['build'], {root: process.cwd()})
	],
	devServer : {
		port: process.env.PORT || 8080,
		contentBase: path.resolve('./src')
	}
};
