export default () => {
  var get = require("lodash.get");

  console.log(get({ foo: "bar" }, "foo"));
};

// browserify xx.ts -p [ tsify  ] > a.js 