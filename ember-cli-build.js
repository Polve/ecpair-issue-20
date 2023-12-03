'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

    // Add options here
  })

  const { Webpack } = require('@embroider/webpack')
  const webpack = require('webpack')

  return require('@embroider/compat').compatBuild(app, Webpack, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    packagerOptions: {
      webpackConfig: {
        // node: {
        //   global: true,
        // },
        // experiments: {
        //   asyncWebAssembly: true,
        // },
        resolve: {
          alias: {
            //'tiny-secp256k1': require.resolve('@bitcoinerlab/secp256k1'),
            //process: 'process/browser',
          },
          fallback: {
            //assert: require.resolve('assert/'),
            //buffer: require.resolve('buffer/'),
            //crypto: require.resolve('crypto-browserify'),
            //events: require.resolve('events/'),
            //process: require.resolve('process/browser'),
            stream: require.resolve('stream-browserify'),
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            //process: 'process/browser',
          }),
        ],
      },
    },
  })
}
