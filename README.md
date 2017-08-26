### gh-pages
start server `npm start` and open http://localhost:8080 in browser

add below code in .eslintrc with "ecmaVersion": 8 to avoid error on async-await , unexpected token function error 

"parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
          "jsx": true,
          "experimentalObjectRestSpread": true
        },
        "sourceType": "module"
      },
      

//////////////////////////////////////////////////////////////////////
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require("webpack-livereload-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var webpack = require("webpack");
var appExtractTextPlugin = new ExtractTextPlugin({
  filename: "app.css",
  disable: false,
  allChunks: true
});
var vendorExtractTextPlugin = new ExtractTextPlugin({
  filename: "vendor.css",
  disable: false,
  allChunks: true
});

//new UglifyJsPlugin({ sourceMap: false })
var baseConfig = {
  entry: {
    bundle: ["babel-polyfill", "./src/index"],
    load: "./src/load"
  },
  resolve: {
    alias: {
      "@rzr-ui": path.join(__dirname, "src/rzr-ui/src/js/ui/"),
      "@nsisodiya/flux": path.join(__dirname, "src/common/HSReduxAdapter")
    },
    extensions: [".js", ".jsx"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  node: {
    fs: "empty"
  },
  externals: [
    {
      "./cptable": "var cptable"
    }
  ],
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  plugins: [
    appExtractTextPlugin,
    vendorExtractTextPlugin,
    new webpack.LoaderOptionsPlugin({
      options: {
        "if-loader": process.env.NODE_ENV === "production" ? "production" : "dev",
        debug: process.env.NODE_ENV !== "production"
      }
    }),
    new CopyWebpackPlugin([
      {from: "src/index.html"}]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      chunks: ["bundle"],
      minChunks: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      chunks: ["vendor"],
      minChunks: Infinity
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: [/node_modules/, /src\/rzr-ui/],
        enforce: "pre",
        use: {
          loader: "eslint-loader",
          options: {
            failOnWarning: false,
            failOnError: false,
            emitError: true,
            configFile: "./node_modules/@hotelsoft/common/.eslintrc",
            formatter: require("eslint/lib/formatters/stylish")
          }
        }
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              ["latest", { loose: true, modules: false }],
              ["react"],
              ["stage-0"]
            ],
            plugins: []
          }
        }, {
          loader: "if-loader"
        }]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        loader: appExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          publicPath: "/dist"
        })
      },
      {
        test: /\.css$/,
        include: [/node_modules/],
        loader: vendorExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader",
          publicPath: "/dist"
        })
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|ico|gif|png)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: "url-loader?limit=100000"
      }, {
        include: /\.json$/,
        use: {
          loader: "json-loader"
        }
      }
    ]
  }
};
if (process.env.NODE_ENV === "production") {
  baseConfig.cache = false;
//  baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
//    compress: false,
//    sourceMap: false
//  }));
} else {
  baseConfig.plugins.push(new LiveReloadPlugin({
    port: 36000
  }));
  baseConfig.cache = true;
  baseConfig.devtool = "inline-source-map";
}
module.exports = baseConfig;
//////////////////////////////////////////////////////////////////////

import {registerAPI} from "../common/register";

let testGenerators = function () {
  let createQuoteFetcher = async function () {
    return await Promise.resolve("HI venkat");
  };

  return createQuoteFetcher().then(value => value);
};

registerAPI("testGenerators", testGenerators);

