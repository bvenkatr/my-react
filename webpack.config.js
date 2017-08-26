var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
// const webpack = require('webpack');

module.exports = {
//	entry: "./index.js" =>> This will generate main.js as the final bundle
	entry: {
		index :['./index.js']// This will generate index.js as the final bundle
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: "inline-source-map",
	plugins: [
		new CopyWebpackPlugin([
			{from: "./index.html"}])
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['react', 'es2015', 'stage-0', 'stage-3']
				}
			},
			{
				test: /\.css$/,
				exclude: [/node_modules/],
				loader: ExtractTextPlugin.extract("style",
						"css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
			},
			{
				test: /\.css$/,
				include: [/node_modules/],
				loader: ExtractTextPlugin.extract("style", "css")
			}
		]
	}
};
