const CopyPlugin = require("copy-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  context: __dirname,
  target: "web",
  devtool: false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  entry: {
    app: ["../src/index.tsx"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "../src/manifest.json" }],
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          { loader: "style-loader" },
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
