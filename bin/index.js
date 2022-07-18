#! /usr/bin/env node
const fs = require('fs')
var args = require('minimist')(process.argv.slice(2),{
    string:["fonts"]
});
let font_path = '/assets/fonts';
let fonts = process.cwd()+font_path;
if(args['fonts']!==undefined){
    font_path = args.fonts;
    fonts =  process.cwd()+font_path;
}

try {
  if (!fs.existsSync(fonts)) {
    console.error("Font Directory does not exist.")
    process.exit(1);
  }
} catch(e) {
  console.error("An error occurred.",e);
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

fs.writeFile('react-native.config.js', reactNativeConfigFile, function (err) {
    if (err){
        throw err;
    }
    console.log('react-native.config.js is created.');
  });

  const { exec } = require('child_process');
exec('npx react-native-asset', (err, stdout, stderr) => {
  if (err) {
    console.error("Unable to execute the command execute npx react-native link instead");
    // node couldn't execute the command
    return;
  }

  console.log(`${stdout}`);
  if(stderr!==''){
    console.error(`Error: ${stderr}`);
  }
});


