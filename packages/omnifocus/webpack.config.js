const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const { OmniPlug } = require("@tomyail-workflow/webpack-plugins");
const {
  omnifocus: { plugDir },
} = require("./package.json");

const klawSync = require("klaw-sync");

const createEntry = () => {
  const files = klawSync(path.join(__dirname, plugDir), { nodir: true });
  const res = files.reduce((acc, cur) => {
    const fileName = path.basename(cur.path, path.extname(cur.path));
    acc[fileName] = cur.path;
    return acc;
  }, {});

  return res;
};

const entry = createEntry();

module.exports = {
  mode: "production",
  entry: entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].omnijs",
    module: true,
    iife: false,
    library: {
      type: "module",
    },
  },
  plugins: [new OmniPlug(Object.keys(entry).map((f) => `${f}.omnijs`))],
  experiments: {
    outputModule: true,
  },
};
