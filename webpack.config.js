const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  let replaceEnv = require('./env.development');
  if (env['run-prod']) {
    replaceEnv = require('./env.production');
  }
  return {
    entry: {
      generate: './src/tools/generateUrl.js',
      expandPush: './src/expandPush/expandPush.js',
      zAgrandado: './src/zAgrandado/zAgrandado.js',
      zMovil: './src/zMovil/zMovil.js',
      tomaCanal: './src/TomaCanal/TomaCanal.js',
      zInferiorExpandible: './src/zInferiorExpandible/zInferiorExpandible.js',
      zInferior: './src/zInferior/zInferior.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    mode: env['run-prod'] ? 'production' : 'development',
    watch: !env['run-prod'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.js$/,
          loader: 'string-replace-loader',
          options: {
            multiple: replaceEnv,
          },
        },
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader', options: {attrs: {class: 'gec_appnexus'}}},
            {
              loader: 'css-loader', options: {
                modules: true,
                localIdentName: env['run-prod']
                  ? '[hash:base64]'
                  : '[local]--[hash:base64:5]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true),
        VERSION: JSON.stringify('5fa3b9'),
      }),
    ],
  };
};
