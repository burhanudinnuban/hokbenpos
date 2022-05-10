import metrics from './metrics';

const size = {
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 16,
};

const image = {
  small: (metrics.screenWidth * 100) / 5,
  medium: (metrics.screenWidth * 100) / 10,
  large: (metrics.screenWidth * 100) / 25,
  xlarge: (metrics.screenWidth * 100) / 50,
};

export {size, image};
