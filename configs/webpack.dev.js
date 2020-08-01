import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import { buildDir, globalStyleDir } from './paths';

const dev = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: buildDir,
    filename: 'scripts/[name].js',
  },
  devServer: {
    open: true,
    hot: true,
    overlay: { errors: true, warnings: true },
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        include: [globalStyleDir],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: true, hmr: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 3 },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: () => [postcssPresetEnv()],
            },
          },
          {
            loader: 'resolve-url-loader',
            options: { sourceMap: true },
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
      filename: 'styles/[name].css',
    }),
  ],
};

export default dev;
