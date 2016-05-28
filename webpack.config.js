module.exports = {
//	entry: "./index.js" =>> This will generate main.js as the final bundle
	entry: {
		index :'./index.js'// This will generate index.js as the final bundle
	},
	output: {
		filename: './dist/[name].bundle.js'
	}
};
