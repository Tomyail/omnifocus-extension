// // Your .ts file require @jxa/global-type
// import "@jxa/global-type";

// // your JXA application
// const userName = Application("System Events").currentUser().name();

// console.log(userName)

import "@jxa/global-type";
import { run } from "@jxa/run";
// import hello from "./om-scripts/hello";
import hello from "./om-scripts/bundle";
import fs from "fs";
import a from './om-scripts/a'

export const currentUserName = () => {
  console.log(a)
  const x = fs.readFileSync("./om-scripts/a.js", "utf-8");
  // This callback function is run as JXA
  return run((foo) => {
    // Omni Automation script written as a function
    function OmniAutomationScript() {
      // Omni Automation script goes here

      console.log("w");
      return "1";
    }

    // JavaScript encoding routine
    function encodeForOmniAutomation(OmniAppName, scriptCode) {
      const appName = OmniAppName.toLowerCase();
      const urlOpening = appName + "://localhost/omnijs-run?script=";
      var encodedScript = encodeURIComponent(scriptCode);
      encodedScript = encodedScript.split("'").join("%27");
      encodedScript = encodedScript.split("(").join("%28");
      encodedScript = encodedScript.split(")").join("%29");
      encodedScript = encodedScript.split("!").join("%21");
      encodedScript = encodedScript.split("~").join("%7E");
      encodedScript = encodedScript.split(".").join("%2E");
      return urlOpening + encodedScript;
    }

    const om = Application("Omnifocus");
    if (!om.running()) {
      om.launch();
    }
    om.includeStandardAdditions = true;

    // JXA execution code
    // app = Application.currentApplication()
    // app.includeStandardAdditions = true
    var scriptAsString =
      OmniAutomationScript.toString() + "\n" + "OmniAutomationScript()";
    var OmniAutomationURL = encodeForOmniAutomation(
      "Omnifocus",
      scriptAsString
    );
    // om.openLocation(OmniAutomationURL);

    // https://omni-automation.com/jxa-applescript.html
    //applescript 里面叫 evaluate javascript , 转成 jxa 就是驼峰式的命名转换
    // hello.toString()(this)
    // return om.evaluateJavascript("flattenedTasks[0].name")
    // return om.evaluateJavascript(`window = this;var foo = ${foo};foo(this)`);
    return om.evaluateJavascript(`${foo}`);

    // var doc = om.defaultDocument;
    // var matchingProjects = doc.tagsMatching;
    // matchingProjects("");
    // return matchingProjects.length;
    // // om.defaultDocument.tagsMatching('')[0].name
    // delay(0.5);
    // // om.evaluate({ "javascript": "1+1" });
    // return om.running();
    // const sys = Application("System Events");
    // return sys.currentUser().name();
  }, x);
};

// Main code is Node.js
export const example = async () => {
  console.log("xxx", hello.toString());
  const userName = await currentUserName();
  return `User: ${userName}`;
  // const om = Application("Omnifocus");
  // om.includeStandardAdditions = true;
  // var doc = om.defaultDocument;
  // var matchingProjects = doc.tagsMatching;
  // matchingProjects("");
  // return matchingProjects.length;
};

example().then((s) => console.log(s));
