//browserify hello.ts -p [ tsify  ] > bundle.js
// export default (x) => {
//   //@ts-ignore
//   window=globalthis
//   const _ = require("lodash");
//   //@ts-ignore
//   //   return x.tags.beginning === x.tags[0]
//   console.log(x.tags[0].name);
//   return _.get(x.tags, "name");
//   // return x.tags[0].name;
// };

module.exports = (x) => {
  //@ts-ignore
  const _ = require("lodash");
  //@ts-ignore
  //   return x.tags.beginning === x.tags[0]
  console.log(x.tags[0].name);
  return _.get(x.tags, "name");
  // return x.tags[0].name;
};
