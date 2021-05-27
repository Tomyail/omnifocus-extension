// var ConcatSource = require("webpack-core/lib/ConcatSource");

const { PrefixSource, ConcatSource } = require("webpack-sources");
function JxaPlugin() {}

JxaPlugin.prototype.apply = function (compiler) {
  var banner = this.banner;
  var footer = this.footer;

  //   compiler.hooks.compilation.tap("xxx", (compilation) => {
  //     compilation.hooks.processAssets.tap(
  //       {
  //         name: "MyPlugin",
  //         stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS, // see below for more stages
  //       },
  //       (assets) => {
  //         console.log("List of assets and their sizes:");
  //         Object.entries(assets).forEach(([pathname, source]) => {
  //           console.log(`— ${pathname}: ${source.size()} bytes`);
  //         });
  //       }
  //     );
  //   });

  compiler.hooks.compilation.tap("xxx", (compilation) => {
    compilation.hooks.processAssets.tap(
      {
        name: "MyPlugin",
        stage: "PROCESS_ASSETS_STAGE_ADDITIONS", // see below for more stages
      },
      (assets) => {
        console.log("List of assets and their sizes:", assets);
        Object.entries(assets).forEach(([pathname, source, ...other]) => {
          // https://github.com/webpack/webpack-sources

          new PrefixSource('/*{"type": "action"}*/', source.original());
          console.log(
            `— ${pathname}: ${source.size()} bytes ${source.original()}`
          );
        });
        // chunks.forEach((chunk) => {
        //   chunk.files.forEach((file) => {
        //     console.log(compilation.assets[file]);
        //     // compilation.assets[file] = new ConcatSource(
        //     //   "/**Sweet Banner**/",
        //     //   "\n",
        //     //   compilation.assets[file]
        //     // );
        //   });
        // });

        // callback();
      }
    );
  });
  //   compiler.plugin("compilation", function (compilation) {
  //     compilation.plugin("optimize-chunk-assets", function (chunks, callback) {
  //       chunks.forEach(function (chunk) {
  //         chunk.files.forEach(function (file, i) {
  //           console.log(file, compilation.assets[file]);
  //           //   compilation.assets[file] = new ConcatSource(
  //           //     banner,
  //           //     "\n\n",
  //           //     compilation.assets[file],
  //           //     "\n\n",
  //           //     footer
  //           //   );
  //         });
  //       });
  //       callback();
  //     });
  //   });
};

module.exports = JxaPlugin;
