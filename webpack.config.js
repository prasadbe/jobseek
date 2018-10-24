require('dotenv').config({
  path: process.env.DOTENV || '.env'
});

const
  webpack = require('webpack'),
  path = require('path'),
  ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  WebpackAssetsManifest = require('webpack-assets-manifest'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
  UglifyJSPlugin= require('uglifyjs-webpack-plugin'),
  PATH = {
    build: path.resolve(__dirname, 'build')
  },
  isDevelopment = (process.env.NODE_ENV === 'local')

var enableHMR = true
enableHMR = isDevelopment ? enableHMR : false //HMR always false for non local env
console.log('NODE_ENV:', process.env.NODE_ENV);

const rules = [
  {
    test: /\.js$/,
    exclude: [/node_modules/],
    use: 'babel-loader'
  },
  {
    test: /\.(less|css)$/,
    use: ExtractTextWebpackPlugin.extract({
      fallback: 'style-loader',
      publicPath: '../',
      use: [
        //minimize css in build to avoid bundling newline chars in js chunk
        { loader: 'css-loader', options: { sourceMap: isDevelopment, minimize: !isDevelopment } },
        { loader: 'postcss-loader', options: { sourceMap: isDevelopment } },
        { loader: 'less-loader', options: { sourceMap: isDevelopment } }
      ]
    })
  },
  {
    test: /\.(jpe?g|png|gif|webp|mp3|ogg|woff|woff2|ttf|svg|eot)$/,
    exclude: [/node_modules/],
    use: 'file-loader?name=[path][name].[hash:8].[ext]'
  },
  { //can't use [path] for images inside node_modules, so copy them to build
    test: /\.(jpe?g|png|gif|webp)$/,
    include: [/node_modules/],
    use: 'file-loader?name=img/[name].[hash:8].[ext]'
  },
  { //can't use [path] for fonts inside node_modules, so copy them to build
    test: /\.(woff|woff2|ttf|svg|eot)$/,
    include: [/node_modules/],
    use: 'file-loader?name=font/[name].[hash:8].[ext]'
  }
]
console.log(`process.env.APP_URL:${process.env.APP_URL}`)
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'local'),
    'process.env.APP_URL': JSON.stringify(process.env.APP_URL || 'https://sia-moments-dev.dev.kacdn.net')
  }),
  new ExtractTextWebpackPlugin({
    filename: 'style/[hash:20].css',
    disable: enableHMR
  }),
  // To prevent longterm cache of vendor chunks
  // extract a 'manifest' chunk, then include it to the app
  
  //automatically load the modules
  //when the key is identified in a file
  new webpack.ProvidePlugin({
    React: 'react'
  }),
  // create manifest json to refer assets in php file
  new WebpackAssetsManifest({
    output: 'webpack-manifest.json',
    publicPath: '/',
    writeToDisk: true //php needs this to read file from disk
  })
]

const devPlugins = enableHMR ? [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
] : new Array()


const buildPlugins = [
  new CleanWebpackPlugin(PATH.build),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
  //new BundleAnalyzerPlugin()
]

const getEntryFiles = function () {
  var entry = new Object();
  entry.fo = [path.resolve(__dirname, 'public/src/fo/index.js')]
  entry.vendor = [
    'react', 'lodash.curryright', 'redux', 'react-redux', 'react-dom', 'react-router', 'react-router-redux', 'redux-thunk'
  ]
  isDevelopment && entry.fo.push('react-hot-loader/patch')
  return entry
}

//add buildPlugins in non local env
!isDevelopment && plugins.push.apply(plugins, buildPlugins);

module.exports = {

  devtool: isDevelopment ? 'source-map' : false,
  mode : (isDevelopment) ? 'development' : 'production',
  entry: getEntryFiles(),

  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          beautify: false,
          compress: true,
          comments: false,
          mangle: false,
          toplevel: false,
          keep_classnames: true, // <-- doesn't exist, I guess. It's in harmony branch
          keep_fnames: true //
        }
      })
    ],
    splitChunks: {
        cacheGroups: {
        vendor: {
            chunks: "initial",
            test: "vendor",
            name: "vendor",
            enforce: true
        },
        manifest: {
            chunks: "initial",
            test: "manifest",
            name: "manifest",
            enforce: true
        }
        }
    }
    },

  output: {
    path: PATH.build,
    publicPath: '/',
    filename: enableHMR ? 'js/[name].[hash:20].js' : 'js/[name].[chunkhash:20].js',
    chunkFilename: 'js/[chunkhash].js'
  },

  devServer: {
    host: '0.0.0.0',
    port: 8000,
    disableHostCheck: true,
    inline: true,
    hot: enableHMR,
    compress: true,
    proxy: {
      '*': {
        target: 'http://localhost: '
      }
    }
  },

  plugins: isDevelopment ? [].concat(plugins, devPlugins) : [].concat(plugins, buildPlugins),

  module: {
    rules: rules
  },

  resolve: {
    modules: ['node_modules'],
    alias: {
      assets: path.resolve(__dirname, 'public/assets/')
    },
    extensions: ['.js', '.less'],
    descriptionFiles: ['package.json', '.bower.json']
  },

  watchOptions: {
    ignored: /(node_modules)/
  }

}
