import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WorkboxPlugin from 'workbox-webpack-plugin';
import { buildDir, publicDir } from './paths';

const common = {
  entry: {
    materialize: './src/materialize.js',
    index: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: false,
          esModule: true,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: publicDir,
          to: buildDir,
          globOptions: {
            ignore: ['index.html'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'head',
      scriptLoading: 'defer',
      cache: false,
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './configs/sw.config.js',
      swDest: 'service-worker.js',
    }),
  ],
};

export default common;
