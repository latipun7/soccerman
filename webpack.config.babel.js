import purgeCss from '@fullhuman/postcss-purgecss';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import cssnano from 'cssnano';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import TerserPlugin from 'terser-webpack-plugin';

import { buildDir, globalStyleDir, publicDir, srcDir } from './configs/paths';

const dev = {
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true,
    overlay: { errors: true, warnings: true },
    writeToDisk: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

const prod = {
  devtool: 'nosources-source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, sourceMap: true }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      enforceSizeThreshold: 50000,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [srcDir],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: 3.6,
              },
            ],
          ],
        },
      },
    ],
  },
};

const config = (env) => {
  const isDev = env.mode === 'development';

  return {
    ...(isDev ? dev : prod),
    mode: env.mode,
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
        {
          test: /\.s[ac]ss$/,
          include: [globalStyleDir],
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { esModule: true, hmr: isDev },
            },
            {
              loader: 'css-loader',
              options: { sourceMap: isDev, importLoaders: 3 },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDev,
                ident: 'postcss',
                plugins: () => [
                  postcssPresetEnv(),
                  ...(!isDev
                    ? [
                        cssnano({
                          preset: [
                            'default',
                            {
                              discardComments: { removeAll: true },
                              convertValues: { precision: 2 },
                            },
                          ],
                        }),
                        purgeCss({
                          content: [
                            `${srcDir}/**/*.js`,
                            `${publicDir}/**/*.html`,
                          ],
                          defaultExtractor: (content) =>
                            content.match(/[\w-/:]+(?<!:)/g) || [],
                          whitelistPatterns: [
                            /^::-webkit-scrollbar/,
                            /nav-overlay$/,
                          ],
                        }),
                      ]
                    : []),
                ],
              },
            },
            {
              loader: 'resolve-url-loader',
              options: { sourceMap: isDev },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true },
            },
          ],
        },
        ...(!isDev ? prod.module.rules : []),
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
};

export default config;
