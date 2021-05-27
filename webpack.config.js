const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const OmniPlug = require("./webpack-plugins/OmniPlug");
module.exports = {
  mode: "production",
  entry: "./om-scripts/yy.js",
  //   output: {
  //     path: __dirname + "/bin",
  //     filename: "[name]",
  //   },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].omnijs",
  },
  plugins: [new OmniPlug()],
};
