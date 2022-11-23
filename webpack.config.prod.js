const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    bundle: "./src/index.js",
    clientlibs: "./src/clientlibs.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "[name].js"
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
};