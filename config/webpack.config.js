const { resolve } = require("path")
/* eslint-disable import/no-extraneous-dependencies */
const {
  HotModuleReplacementPlugin,
  HashedModuleIdsPlugin,
  IgnorePlugin,
  DefinePlugin,
} = require("webpack")

const HtmlWebPackPlugin = require("html-webpack-plugin")
const InterpolateHtmlPlugin = require("interpolate-html-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const devServerConfig = require("./webpack-dev.server")

const DIST = resolve(__dirname, "..", "dist")
const pathHTML = resolve(__dirname, "..", "public/index.html")
const INDEX = resolve(__dirname, "..", "src/index.js")
const publicPath = resolve(__dirname, "..", "public")
const getClientEnvironment = require("./env")

const env = getClientEnvironment("") // Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== "false"

const isProduction = process.env.NODE_ENV === "production"
const INDEX_END_PROD = 4
const INDEX_END_DEV = 3

const config = {
  target: "web",
  context: publicPath,
  devtool: isProduction ? false : "source-map",
  mode: process.env.NODE_ENV,

  entry: ["@babel/polyfill", INDEX],

  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
    path: DIST,
    publicPath: "/",
    pathinfo: true,
  },

  resolve: {
    extensions: [".mjs", ".js"],
    modules: ["node_modules"],
    alias: {
      "@tasky/components": resolve(__dirname, "..", "src/components"),
      "@hooks": resolve(__dirname, "..", "src/hooks"),
      "@features": resolve(__dirname, "..", "src/features"),
      "@lib": resolve(__dirname, "..", "src/lib"),
      "@assets": resolve(__dirname, "..", "assets"),
      ...(!isProduction ? { "react-dom": "@hot-loader/react-dom" } : undefined),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // {
      //   test: /\.(jpg|png|svg)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[path][name]-[hash:8].[ext]",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: "/",
              hmr: process.env.NODE_ENV === "development",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: "url-loader?limit=100000",
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader",
      },
      {
        test: /\.svg$/,
        use: "react-svg-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: pathHTML,
      inject: "body",
      templateParameters: {
        public: publicPath,
      },
    }),
    new HashedModuleIdsPlugin({
      hashFunction: "md4",
      hashDigest: "base64",
      hashDigestLength: 4,
    }),
    new HotModuleReplacementPlugin(),
    new InterpolateHtmlPlugin(env.raw),
    new CopyPlugin([]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    // new BundleAnalyzerPlugin(),
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
    new DefinePlugin(env.stringified),
  ],

  stats: {
    colors: true,
    children: false,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            // we want terser to parse ecma 8 code. However, we don't want it
            // to apply any minfication steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending futher investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true,
          },
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: shouldUseSourceMap,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        // vendor chunk
        vendor: {
          // name of the chunk
          name: "vendor",

          // async + async chunks
          chunks: "all",

          // import file path containing node_modules
          test: /node_modules/,

          // priority
          priority: 20,
        },

        // common chunk
        common: {
          name: "common",
          minChunks: 2,
          chunks: "all",
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  devServer: devServerConfig,
}

module.exports = config
