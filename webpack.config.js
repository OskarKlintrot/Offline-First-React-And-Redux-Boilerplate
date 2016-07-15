const webpack = require('webpack')
const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const buildPath = path.resolve(__dirname, 'build')
const sourcePath = path.resolve(__dirname, 'src')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')
const upupPath = path.resolve(__dirname, sourcePath, 'app/scripts/upup/')
const upupStartPath = path.resolve(__dirname, sourcePath, 'app/scripts/upup/upup.start.js')
const redirectToHTTPSPath = path.resolve(__dirname, sourcePath, 'app/scripts/redirectToHTTPS.js')
const contentBasePath = path.resolve(__dirname, sourcePath, 'www')

const production = process.argv.find((element) => element === '--production') ? true : false

const baseEntry = [
  'babel-polyfill',
  'font-awesome-loader!./src/www/css/font-awesome/font-awesome.config.js',
  'bootstrap-loader/extractStyles',
  sourcePath + '/app/app.jsx',
  sourcePath + '/app/scripts/redirectToHTTPS.js',
]

const entry = production ? baseEntry.concat([
  sourcePath + '/app/scripts/upup/upup.start.js',
  sourcePath + '/app/scripts/upup/upup.min.js',
  sourcePath + '/app/scripts/upup/upup.sw.min.js',
]) : baseEntry

const config = {
  entry: entry,
  devServer:{
    contentBase: contentBasePath,
    devtool: 'source-map',
    hot: true,
    inline: true,
    port: 3000,
  },
  output: {
    path: buildPath,
    filename: 'scripts/boundle.min.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'www'},
    ], sourcePath),
    new webpack.DefinePlugin({
        PRODUCTION: production,
        SOURCE_PATH: sourcePath
    }),
    new HtmlWebpackPlugin({
      template: sourcePath + '/www/index.html.ejs',
      filename: production ? buildPath + '/index.html' : './index.html',
      production: production,
      title: 'Your title here',
      inject: true,
    }),
    new ExtractTextPlugin('public/style.css', {
        allChunks: true
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [path.resolve(__dirname, "src/app")],
        exclude: [nodeModulesPath, upupPath, redirectToHTTPSPath],
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: [nodeModulesPath, upupPath, redirectToHTTPSPath],
        loaders: [
            'react-hot',
            'babel?' + JSON.stringify({
                presets: ["react", "es2015", "stage-1"],
            }),
        ],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /(redirectToHTTPS).js$/,
        loader: "file?name=scripts/[name].[ext]",
      },
      {
        test: /upup.*.js$/,
        exclude: [upupStartPath],
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\upup.start.js$/,
        loader: "file?name=scripts/[name].[ext]",
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
        // loader: "url?limit=10000"
        loader: "url"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      },
    ],
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.jsx'],
    root: __dirname,
  },
  devtool: 'source-map',
  eslint: {
    configFile: '.eslintrc',
  },
}

if (production) {
  process.env.NODE_ENV = 'production'

  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    })
  ].concat(config.plugins)
}

module.exports = config
