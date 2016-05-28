module.exports = {
//	entry: "./index.js" =>> This will generate main.js as the final bundle
	entry: {
		index :'./index.js'// This will generate index.js as the final bundle
	},
	output: {
		filename: './dist/[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	}
};
