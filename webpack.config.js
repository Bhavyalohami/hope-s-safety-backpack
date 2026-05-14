import path from "node:path";
import { fileURLToPath } from "node:url";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env = {}) => {
  const publicPath = env.githubPages ? "/hope-s-safety-backpack/" : process.env.PUBLIC_PATH || "/";
  const basePath = publicPath === "/" ? "" : publicPath.replace(/\/+$/, "");
  const siteUrl = (process.env.SITE_URL || "").replace(/\/+$/, "");

  return {
  entry: path.resolve(__dirname, "src/main.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/[name].[contenthash].js",
    clean: true,
    publicPath,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __BASE_PATH__: JSON.stringify(publicPath),
      __SITE_URL__: JSON.stringify(siteUrl),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      templateParameters: {
        basePath,
        siteUrl,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "assets"),
          to: "assets",
          globOptions: {
            ignore: ["**/*.png"],
          },
        },
        { from: path.resolve(__dirname, "forms"), to: "forms" },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: __dirname,
      publicPath: "/",
    },
    historyApiFallback: true,
    hot: true,
    open: false,
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 8,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
          name: "react-vendor",
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: 10,
        },
      },
    },
  },
  performance: {
    hints: false,
  },
  };
};
