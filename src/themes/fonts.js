const {default: metrics} = require("./metrics");

const size = {
  font6: metrics.screenWidth * 0.04,
  font8: metrics.screenWidth * 0.05,
  font10: metrics.screenWidth * 0.06,
  font12: metrics.screenWidth * 0.07,
  font14: metrics.screenWidth * 0.08,
  font16: metrics.screenWidth * 0.09,
  font20: metrics.screenWidth * 0.12,
};

const weight = {
  bold: "700",
  medium: "500",
  regular: "400",
  light: "300",
};

const family = {
  regular: "SFNSDisplay-Regular",
  medium: "SFNSDisplay-Medium",
  bold: "SFNSDisplay-Bold",
  light: "SFNSDisplay-Light",
};

export {size, weight, family};
