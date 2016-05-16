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
	resolve: {
    	alias: {
        	"TweenLite": __dirname + '/node_modules/gsap/src/uncompressed/TweenLite.js',
            "TweenMax": __dirname + '/node_modules/gsap/src/uncompressed/TweenMax.js',
            "TimelineLite": __dirname + '/node_modules/gsap/src/uncompressed/TimelineLite.js',
            "TimelineMax": __dirname + '/node_modules/gsap/src/uncompressed/TimelineMax.js',
            "scrollmagic": __dirname + '/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
            "animation.gsap": __dirname + '/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
            "debug.addIndicators": __dirname + '/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
	    }
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
