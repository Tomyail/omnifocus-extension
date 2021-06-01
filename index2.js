// https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#typedef-callback-and-param
const { run } = require("@jxa/run");
const fs = require("fs");

const currentUserName = (script) => {
  return run((script) => {
    return eval(script);
  }, script);
};

const example = async () => {
  const script = fs.readFileSync(__dirname + "/dist/test.omnijs", "utf-8");
  const userName = await currentUserName(script);
  return userName;
};

example().then((s) => console.log(JSON.stringify(s, null, 2)));
