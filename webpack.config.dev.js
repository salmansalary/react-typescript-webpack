const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports = {
  mode: "development",
  context: __dirname,
  target: "web",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 3000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "js/[name].[contenthash].bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    }),
    new CaseSensitivePathsPlugin(),
    new Dotenv({
      path: "./local.env",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      base: "/",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/manifest.json" }],
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "styles_[local]_[hash:base64:5]",
                auto: true,
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "file-loader",
        options: {
          name: "assets/images/[name].[ext]",
        },
      },
      {
        test: /\.ico$/,
        loader: "file-loader",
        options: { name: "[name].[ext]" },
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: "file-loader",
        options: {
          prefix: "font",
          limit: "5000",
          name: "assets/fonts/[name].[ext]",
        },
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "file-loader",
        options: {
          prefix: "font",
          limit: "5000",
          name: "assets/fonts/[name].[ext]",
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          limit: "5000",
          mimetype: "application/octet-stream",
          name: "assets/fonts/[name].[ext]",
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "@svgr/webpack",
          },
          {
            loader: "file-loader",
            options: {
              limit: "10000",
              mimetype: "image/svg+xml",
              name: "assets/svgs/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
