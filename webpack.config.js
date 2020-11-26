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
			{
				test: /\.(png|jp?g|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: { outputPath: "images", publicPath: "/images" },
					},
				],
			},
			{
				test: /\.(eot|woff|woff2|ttf)$/,
				use: [
					{
						loader: "file-loader",
						options: { outputPath: "fonts", publicPath: "/fonts" },
					},
				],
			},
		],
	},
};
