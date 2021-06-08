// var ConcatSource = require("webpack-core/lib/ConcatSource");

const {
  PrefixSource,
  ConcatSource,
  RawSource,
  CachedSource,
} = require("webpack-sources");
const { Compilation, NormalModule, Dependency } = require("webpack");

class DebugPlug {
  apply(compiler) {
    const PLUGIN_NAME = "xxx";

    console.log(`compiler 包含的 hooks ${Object.keys(compiler.hooks)}`);
    //https://webpack.js.org/api/normalmodulefactory-hooks/
    //https://webpack.js.org/api/compiler-hooks/#normalmodulefactory
    compiler.hooks["normalModuleFactory"].tap("xx", (normalModuleFactory) => {
      console.log(
        "normalModuleFactory",
        Object.keys(normalModuleFactory.hooks)
      );
      Object.keys(normalModuleFactory.hooks).forEach((key) => {
        if (normalModuleFactory.hooks[key].tap.length) {
          normalModuleFactory.hooks[key].tap("xx", (...arg) => {
            console.log(
              `normalModuleFactory hook tap from ${key},arg length ${arg.length}`
            );

            if (key === "beforeResolve") {
              //这里面只能是 path ,而不是 content
              // console.log(arg[0].request);
            }
          });
        } else {
          console.log(`skip tap for empty normalModuleFactory hook: ${key}`);
          //https://webpack.js.org/api/normalmodulefactory-hooks/#parser

          if (key === "parser") {
            normalModuleFactory.hooks["parser"]
              .for("javascript/auto")
              //https://webpack.js.org/api/parser/
              .tap("xxx", (parser, options) => {
                // process ast??
                // for 指代你源码里面的特征码
                parser.hooks.new
                  .for("PlugIn.Action")
                  .tap("MyPlugin", (expression) => {
                    //这里的 expression 是 ast node
                    // console.log(expression);
                  });

                // parser.hooks.evaluate
                //   .for("NewExpression")
                //   .tap("MyPlugin", (expression) => {
                //     /* ... */
                //     console.log("exp", expression);
                //     return expression;
                //   });
              });
          }
        }
      });
    });

    compiler.hooks["thisCompilation"].tap(
      PLUGIN_NAME,
      (compilation, compilationParams) => {
        compilation.hooks["buildModule"].tap("xx", (module) => {
          console.log("thisCompilation buildModule");
        });
        compilation.hooks["succeedModule"].tap("xx", (module) => {
          console.log("thisCompilation succeedModule");
        });
        // console.log(compilation.getStats().compilation)
        // Object.keys(compilation.hooks).forEach((key) => {
        //   console.log(key, compilation.hooks[key].tap.length);
        //   if ((key, compilation.hooks[key].tap.length > 1)) {
        //     compilation.hooks[key].tap("xx", () => {
        //       console.log(
        //         key,
        //         Object.keys(compilation.getStats().compilation).length
        //       );
        //     });
        //   } else {
        //     console.log("empty", key);
        //   }
        // });
      }
    );
  }
}

module.exports = DebugPlug;
