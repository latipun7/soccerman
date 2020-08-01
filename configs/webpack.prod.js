import purgeCss from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import TerserPlugin from 'terser-webpack-plugin';
import { buildDir, globalStyleDir, publicDir, srcDir } from './paths';

const prod = {
  mode: 'production',
  devtool: 'nosources-source-map',
  output: {
    path: buildDir,
    filename: 'scripts/[name]-[contenthash:8].js',
  },
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
      {
        test: /\.s[ac]ss$/,
        include: [globalStyleDir],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: true, hmr: false },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: false, importLoaders: 3 },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv(),
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
                    `${srcDir}/**/*.html`,
                    `${publicDir}/**/*.html`,
                  ],
                  defaultExtractor: (content) =>
                    content.match(/[\w-/:]+(?<!:)/g) || [],
                  whitelistPatterns: [
                    /^::-webkit-scrollbar/,
                    /nav-overlay$/,
                    /toast/,
                    /modal/,
                  ],
                }),
              ],
            },
          },
          {
            loader: 'resolve-url-loader',
            options: { sourceMap: false },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name]-[contenthash:8].css',
    }),
  ],
};

export default prod;
