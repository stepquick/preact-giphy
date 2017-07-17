import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
	entry: {
		'app': path.resolve('./src/index.js')
	},
	resolve: {
		extensions: ['.js'],
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: [{
				loader: 'babel-loader'
			}],
			exclude: /(\.test.js$|node_modules)/
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback: "style-loader",
                use: "css-loader",
            }),
		}, {
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: 'url-loader?limit=50000'
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app']
		}),

		new HtmlWebpackPlugin({
			template: 'src/index.html',
			title: 'PreactJS Giphy',
		}),

		new ExtractTextPlugin("[name].[hash].css")
	]
}
