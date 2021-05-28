// var ConcatSource = require("webpack-core/lib/ConcatSource");

const {
  PrefixSource,
  ConcatSource,
  RawSource,
  CachedSource,
} = require("webpack-sources");
const { Compilation, NormalModule, Dependency } = require("webpack");
const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");

class OmnifocusPlug {
  constructor(entrys) {
    this.entrys = entrys;
  }
  apply(compiler) {
    const PLUGIN_NAME = "xxx";

    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "BannerPlugin",
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        () => {
          //inspired by https://webpack.js.org/plugins/banner-plugin/
          for (const chunk of compilation.chunks) {
            if (!chunk.canBeInitial()) {
              continue;
            }

            for (const file of chunk.files) {
              if (!this.entrys.some((res) => res === file)) {
                continue;
              }

              compilation.updateAsset(file, (res) => {
                //res is  CachedSource
                //res.original() is  ConcatSource, -1 and -3 index is iife wrapper
                //we need to remove the iife wrapper so that omnifocus can use it https://omni-automation.com/
                //the follow  test to be work only when webpack config is
                // {
                // module: true,
                // iife: false,
                // library: {
                //   type: "module",
                // },
                // }
                // when library type is other value ,this workaround may not work!!
                const sourceLength = res.original().getChildren().length;
                const IIFE_Start = -1;
                const IIFE_END = -3;
                const newSources = res
                  .original()
                  .getChildren()
                  .map((res, idx) => {
                    if (idx === sourceLength + IIFE_Start) {
                      return new RawSource("");
                    } else if (idx === sourceLength + IIFE_END) {
                      return new RawSource("");
                    }
                    return res;
                  });
                return new ConcatSource(...newSources);
              });
            }
          }
        }
      );
    });
  }
}

module.exports = OmnifocusPlug;
