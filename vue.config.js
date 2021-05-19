module.exports = {
    configureWebpack: {
		devtool: "source-map",
		output: {
			filename: "./js/sandbox.js"
		}
	},

    chainWebpack: config => {
		config.optimization.delete("splitChunks");
	},

    css: {
		extract: {
			filename: "./css/sandbox.css"
		},
	  loaderOptions: {
		scss: {
			additionalData: `
			@import "@/assets/scss/_variables.scss";
			@import "@/assets/scss/_mixins.scss";
		  `
		}
	  }
	},

    publicPath: './',
};
