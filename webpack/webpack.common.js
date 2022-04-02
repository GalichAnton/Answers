const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]__[hash:base64:5]",
              },
            },
          },
          // Compiles Sass to CSS
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets",
          to: "./assets",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new MiniCssExtractPlugin({ filename: "main.css" }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  stats: "errors-only",
};
