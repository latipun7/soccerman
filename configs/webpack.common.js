import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildDir, publicDir } from './paths';

const common = {
  entry: {
    materialize: './src/materialize.js',
    index: './src/index.js',
  },
  output: {
    path: buildDir,
    filename: 'scripts/[name].js',
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
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
};

export default common;
