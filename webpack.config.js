const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);
	webpack.useConfig('angular');

	// Learn how to customize:
	// https://docs.nativescript.org/webpack
	webpack.chainWebpack((config, env) => {
		config.module
		.rule("css")
		.test(/css$/i)
		.use(
		  "postcss-loader"
		);

	});

	return webpack.resolveConfig();
};
