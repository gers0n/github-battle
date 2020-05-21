var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

//NODE_ENV to production
//uglify

const config = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(jsx)$/, use: "babel-loader" },
    ],
  },
  /*to fix the reflesh issue*/
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};

// if (process.env.NODE_ENV === "production") {
//   config.optimization = {
//     minimizer: [
//       // we specify a custom UglifyJsPlugin here to get source maps in production
//       new UglifyJsPlugin({
//         cache: true,
//         parallel: true,
//         uglifyOptions: {
//           compress: false,
//           ecma: 6,
//           mangle: true
//         },
//         sourceMap: true
//       })
//     ]
//   }
// } 

module.exports = config;
