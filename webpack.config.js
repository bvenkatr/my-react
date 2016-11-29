var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
//	entry: "./index.js" =>> This will generate main.js as the final bundle
	entry: {
		index :'./index.js'// This will generate index.js as the final bundle
	},
	output: {
		filename: 'dist/[name].bundle.js'
	},
	plugins: [
		new ExtractTextPlugin("app.css", {
			allChunks: true
		})
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['react', 'es2015', 'stage-0']
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
