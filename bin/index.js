#! /usr/bin/env node
const fs = require("fs");
const args = process.argv.slice(2, process.argv.length);
const args_path = args[0].substring(args[0].indexOf("=") + 1);
let font_path = "/assets/fonts";
let fonts = process.cwd() + font_path;
if (args[0] !== undefined) {
  font_path = args_path;
  fonts = process.cwd() + font_path;
}

console.log(fonts);
try {
  if (!fs.existsSync(fonts)) {
    console.error("Font Directory does not exist.");
    process.exit(1);
  }
} catch (e) {
  console.error("An error occurred.", e);
  process.exit(1);
}

let reactNativeConfigFile = `module.exports = {
    project: {
      ios: {},
      android: {},
    },
    assets: ['.${font_path}'],
  };
  `;

fs.writeFile("react-native.config.js", reactNativeConfigFile, function (err) {
  if (err) {
    throw err;
  }
  console.log("react-native.config.js is created.");
});

const { exec } = require("child_process");
exec("npx react-native-asset", (err, stdout, stderr) => {
  if (err) {
    console.error(
      "Unable to execute the command execute npx react-native link instead"
    );
    // node couldn't execute the command
    return;
  }

  console.log(`${stdout}`);
  if (stderr !== "") {
    console.error(`Error: ${stderr}`);
  }
});
