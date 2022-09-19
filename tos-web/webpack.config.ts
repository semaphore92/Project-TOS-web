import path from 'path'
import webpack, { Configuration as webpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration, WebpackConfiguration } from 'webpack-dev-server'

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
    name: 'tos-web',
    mode: 'production',
    devtool: 'hidden-source-map',
    resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
    alias: {
      '@apis': path.resolve(__dirname, 'apis'),
      '@components': path.resolve(__dirname, 'components'),
      '@containers': path.resolve(__dirname, 'containers'),
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@layoutWrapper': path.resolve(__dirname, 'layoutWrapper'),
      '@libs': path.resolve(__dirname, 'libs'),
      '@locales': path.resolve(__dirname, 'locales'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@public': path.resolve(__dirname, 'public'),
      '@redux': path.resolve(__dirname, 'redux'),
      '@resources': path.resolve(__dirname, 'resources'),
      '@styles': path.resolve(__dirname, 'styles'),
      '@crypto': path.resolve(__dirname, 'node_modules/crypto-browserify'),
      '@stream': path.resolve(__dirname, 'node_modules/stream-browserify'),
    },
    fallback: {
      crypto: false,
    },
  },
  entry: {
    // app: './server',
    app: path.join(__dirname, 'pages', 'index.js'),
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['IE 10'] },
                // debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          // env: {
          //   development: {
          //     plugins: [['@emotion/babel-plugin', { sourceMap: true }], require.resolve('react-refresh/babel')],
          //   },
          //   production: {
          //     plugins: ['@emotion/babel-plugin'],
          //   },
          // },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.ts?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['IE 10'] },
                // debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          // env: {
          //   development: {
          //     plugins: [['@emotion/babel-plugin', { sourceMap: true }], require.resolve('react-refresh/babel')],
          //   },
          //   production: {
          //     plugins: ['@emotion/babel-plugin'],
          //   },
          // },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'resources/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.svg?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'resources/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.ttf?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'resources/[name].[ext]?[hash]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new ForkTsCheckerWebpackPlugin({
    //   async: false,
    //   eslint: {
    //     files: "./src/**/*",
    //   },
    // }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },

  // devServer: {
  //   historyApiFallback: true,
  //   port: 3090,
  //   devMiddleware: { publicPath: '/dist/' },
  //   static: { directory: path.resolve(__dirname) },
  //   proxy: {
  //     '/api/': {
  //       target: 'http://localhost:3095',
  //       changeOrigin: true,
  //       ws: true,
  //     },
  //   },
  // },
}

// if (isDevelopment && config.plugins) {
//   config.plugins.push(new webpack.HotModuleReplacementPlugin())
//   config.plugins.push(
//     new ReactRefreshWebpackPlugin({
//       overlay: {
//         useURLPolyfill: true,
//       },
//     }),
//   )
//   config.plugins.push(
//     new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }),
//   )
// }
// if (config.plugins) {
//   config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }))
//   config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }))
// }

export default config
