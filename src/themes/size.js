import metrics from "./metrics";

const size = {
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 16,
};

const image = {
  small: (metrics.screenWidth) / 14,
  medium: (metrics.screenWidth) / 8,
  large: (metrics.screenWidth) / 4,
  xlarge: (metrics.screenWidth) / 2,
};

export {size, image};
