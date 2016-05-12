// var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWepbackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	name: 'build',
	context: __dirname + '/src',
	entry: [
	'./app/js/main',
	'./sass/main.scss'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'js/main.[hash].js',
		publicPath: '/'
	},
	devtool: 'eval-source-map',
	module: {
		loaders: [
		{ 
			test: /\.js$/, 
			loaders: ['react-hot','babel-loader'], 
			exclude: /node_modules/ 
		},
		{
			test: /\.json$/,
			loader: 'file-loader?name=assets/[name].[ext]'
		},
		{ 
			test: /\.(png|jpg)$/, 
			loader: 'file-loader?name=images/[name].[hash].[ext]' 
		},
		{ 
			test: /\.(woff|eot|svg|ttf|woff2)$/, 
			loader: 'file-loader?name=assets/fonts/[name].[hash].[ext]' 
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract(
				'css-loader?sourceMap!sass-loader?sourceMap'
				)
		}
		]
	},
	plugins: [
	new ExtractTextPlugin('css/[name].[contenthash].css'),
	new CleanWebpackPlugin(['dist'], {
		root: __dirname,
		verbose: true, 
		dry: false
	}),
	new HtmlWepbackPlugin({
		filename: 'index.html',
		template: 'index.html',
	})
	]
};
