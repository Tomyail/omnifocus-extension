/*{
"type": "action",
}*/

import getClass from "../om-shared/get-class";
//@ts-ignore
new PlugIn.Action((selection, sender) => {
  // your code here
  console.log("hello");
  console.log(globalThis, globalThis.tags[0].name);
  getClass(globalThis, selection, sender);
});

