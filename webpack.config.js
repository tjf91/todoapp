let path = require ('path');
let nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const moduleObj = {

	rules: [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },


     },]
	},{
		test: /\.css$/,
		use: [
			{
	            loader: MiniCssExtractPlugin.loader,
	            options: {
	              // you can specify a publicPath here
	              // by default it uses publicPath in webpackOptions.output

	              hmr: process.env.NODE_ENV === 'development',
	            },
	          },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: true,

      }
    },

  ],
  		include: /\.module\.css$/


},{
		test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
		loader: 'url-loader',
		options: {
			limit: 10000
		}
	},{
		test: /\.css$/,
		use: ['style-loader',
			  'css-loader'],
		exclude: /\.module.css$/
	}]
}


const client = {
	mode: 'development',
	 watch: true,
	entry: {
		'client':"./src/client/index.js"
	},
	target: 'web',
	output : {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/public')
	},
	module: moduleObj,
	node: {
 		 fs: 'empty',
  		net: 'empty',
},

	plugins: [
   		 new HtmlWebPackPlugin({
   		 		 inject: true,
     			 template: 'src/client/index.html',
    })
  ,
	new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // all options are optional
	      filename: '[name].css',
	      chunkFilename: '[id].css',
	      ignoreOrder: false, // Enable to remove warnings about conflicting order
	    })	
],


};


const server = {
	mode: 'development',
	watch: true,
	entry : {
		'server' :'./src/server/index.js'
	},
	target:'node',
	output : {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: moduleObj,
	externals: [nodeExternals()],
	node: {
  fs: 'empty',
  net: 'empty',
}
}

module.exports = [client,server]
