var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	name: 'build',
	entry: ['./src/app/js/main',
		'./src/index.html',
		'./src/sass/main.scss'
	],
	output: {
		path: 'dist',
		filename: 'js/main.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				loaders: ['react-hot','babel-loader'], 
				exclude: /node_modules/ 
			},
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			{ 
				test: /\.(png|jpg)$/, 
				loader: 'file-loader?name=images/[name].[ext]' 
			},
			{ 
				test: /\.(woff|eot|svg|ttf|woff2)$/, 
				loader: 'file-loader?name=fonts/[name].[ext]' 
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/main.css')
	]
};
