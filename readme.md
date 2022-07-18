# react-native-font-link

A Simple npx Script That Automates Linking of Fonts to Your React Native No Extra Dependencies
to install just run the npx command inside your project directory to link your fonts to your react native app

The React Native Font Link Library assumes the default directory to be /assets/fonts if not you can specify your own by providing --fonts


## Usage
**For RN > 0.69**
```bash
npx react-native-font-link

#Specifiying Font Directory
npx react-native-font-link --fonts="/custom_assets/fonts"

```

**For RN < 0.69**
```bash
#Run The Following Command After Completing the Steps Above
npx react-native link

```


## License
[MIT](https://choosealicense.com/licenses/MIT/)