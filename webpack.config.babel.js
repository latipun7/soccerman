import { merge } from 'webpack-merge';
import commonConfig from './configs/webpack.common';
import developmentConfig from './configs/webpack.dev';
import productionConfig from './configs/webpack.prod';

const config = (env) => {
  switch (env.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};

export default config;
