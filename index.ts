// // Your .ts file require @jxa/global-type
// import "@jxa/global-type";

// // your JXA application
// const userName = Application("System Events").currentUser().name();

// console.log(userName)

import "@jxa/global-type";
import { run } from "@jxa/run";
export const currentUserName = () => {
	// This callback function is run as JXA
	return run(() => {
		// Omni Automation script written as a function
		function OmniAutomationScript() {
			// Omni Automation script goes here

			console.log('w')
			return "1"
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
		om.evaluateJavascript("console.log(1)")

		return "";
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
	});
};

// Main code is Node.js
export const example = async () => {
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
