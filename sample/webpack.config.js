const path = require('path');
const webpack = require('webpack');

const assetsPath = path.join(__dirname, 'dist', 'assets');
const publicDir = 'dist/';

let isOptimizeBuild = false;

switch (process.env.NODE_ENV) {
  case 'prd':
    isOptimizeBuild = true;
    break;

  case 'dev-server':
  case 'dev':
  default:
    break;
}

const commonRules = [
  {
    test: /\.ts$|\.tsx$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          cacheDirectory: './cache',
          plugins: ['@babel/transform-object-assign'] // Object.assign() method is not supported in IE
        }
      },
      {
        loader: 'ts-loader',
      }
    ],
    include: path.join(__dirname, 'src'),
  },
  {
    test: /\.js$|\.jsx$/,
    loaders: [
      'imports-loader?define=>false' // https://github.com/swagger-api/swagger-codegen/issues/3336
    ],
    exclude: /node_modules/,
    include: path.join(__dirname, 'src/codegen'),
  },
  {
    test: /\.js$|\.jsx$/,
    use: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          cacheDirectory: './cache',
          plugins: ['@babel/transform-object-assign'] // Object.assign() method is not supported in IE
        }
      }
    ],
    include: path.join(__dirname, 'node_modules'),
  },
];

const commonPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev'),
    'process.env.BUILD_TIME': JSON.stringify(Date.now()),
    'global.GENTLY': false // https://github.com/felixge/node-formidable/issues/337
  }),
];

module.exports = [
  {
    name: 'browser',
    context: path.join(__dirname, 'src'),
    devtool: isOptimizeBuild ? undefined : 'inline-source-map',
    mode: isOptimizeBuild ? 'production' : 'development',
    optimization: { nodeEnv: false },
    entry: {
      app: ['@babel/polyfill', './client.tsx']
    },
    output: {
      path: assetsPath,
      publicPath: '/assets',
      filename: '[name].browser.js'
    },
    devServer: {
      contentBase: publicDir,
      inline: true
    },
    plugins: commonPlugins,
    module: {
      rules: commonRules
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  },
];
