var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var BUILD = process.env.NODE_ENV === 'build';

var plugins = [new ExtractTextPlugin('style.css')], scssLoader = undefined;

if(BUILD){
  plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

//runs on port 8080 dude
module.exports = {

	context: __dirname + "/app",

	entry: {
		typescript: "./app.tsx",
		html: "./index.html",
	},

	// Enable sourcemaps for debugging webpack's output
	devtool: "source-map",

	output: {
    	filename: "app.min.js",
    	path: __dirname + "/dist",
  	},

    // Add '.ts' and '.tsx' as resolvable extensions.
    resolve: {
    	extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
	plugins: plugins,
	module: {
		//not really sure if this one is needed.
		//source: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
        preLoaders: [
        	{
        		test: /\.js$/,
        		loader: "source-map-loader"
        	},
            {
                test: /\.tsx$/,
                loader: "tslint"
            }
        ],
        //Load the index file and all the TypeScript files
  		loaders: [
  			{
  				test: /\.js$/,
  				exclude: /node_modules/,
  				loader: "babel-loader"
  			},
    		{
  				test: /\.html$/,
  				loader: "file?name=[name].[ext]",
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      }
  		]
	},
	tslint: {
		emitErrors: true,
		failOnHint: false
	},
  postcss: function () {
      return [autoprefixer];
  }
}
