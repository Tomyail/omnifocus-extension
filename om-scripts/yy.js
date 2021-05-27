new PlugIn.Action(function (selection, sender) {
  console.log(globalThis, globalThis.tags[0].name);
  const get = require("lodash.get");

  console.log(get({ foo: "bar" }, "foo"));
});

// plugin format
/*{
"type": "action",
}*/
(() => {
  return PlugIn.Action((selection, sender) => {
    // your code here
  });
})();



