module.exports = {
	entry: ["./src/assets/js/app.js", "./src/assets/sass/app.scss"],
	output: {
		filename: "main.js",
		path: __dirname + "/src/public",
		publicPath: __dirname + "/src/public",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
