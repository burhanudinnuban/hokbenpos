const {default: metrics} = require("./metrics");

const fontSize = {
  font10: metrics.screenWidth * 0.01,
  font11: metrics.screenWidth * 0.02,
  font12: metrics.screenWidth * 0.04,
  font14: metrics.screenWidth * 0.06,
  font16: metrics.screenWidth * 0.08,
  font20: metrics.screenWidth * 0.10,
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

export {fontSize, weight, family};
