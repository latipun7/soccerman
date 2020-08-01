import { mergeWithCustomize, customizeArray } from 'webpack-merge';
import commonConfig from './configs/webpack.common';
import developmentConfig from './configs/webpack.dev';
import productionConfig from './configs/webpack.prod';

const custom = {
  customizeArray: customizeArray({ plugins: 'prepend' }),
};

const config = (env) => {
  switch (env.mode) {
    case 'development':
      return mergeWithCustomize(custom)(commonConfig, developmentConfig);
    case 'production':
      return mergeWithCustomize(custom)(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};

export default config;
