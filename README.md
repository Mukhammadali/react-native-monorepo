# React Native [Web] + Monorepo

### THIS REPOSITORY IS BUILT ON TOP OF [react-native-web-monorepo](https://github.com/brunolemos/react-native-web-monorepo). Huge thanks to Brunolemos! 
 
What is different?

- Added absolute path resolving
- Upgraded Typscript and React native version
- Fixed VsCode Intellisense and Auto-import
- A bit different structure     
  - apps live under **/apps**   
  - other utility packages live under **/packages**

## 100% code sharing between Web, iOS and Android

This is the source code from [this tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej).

![article-cover](https://user-images.githubusercontent.com/619186/64933790-1fc27680-d81d-11e9-8077-64a1066b7c17.png)


### How to run

_Requirements: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native) (last tested on react-native@0.61)_

  - `$ git clone https/github.com/Mukhammadali/react-native-monorepo.git`
  - `$ cd react-native-monorepo`
  - `$ yarn`
  - `$ cd apps/mobile/ios`
  - `$ pod install`
  - `$ cd -`
  - `$ yarn ios`
  - `$ yarn web`
  - Run the project
    - [iOS] Via Xcode
      - `yarn xcode` (open the project on Xcode)
      - Press the Run button
    - [Android] Via Android Studio
      - `yarn studio` (open the project on Android Studio)
      - Press the Run button
    - Via CLI
      - _You may need to launch your device emulator before the next command_
      - `$ yarn android` or  `$ yarn ios`

### Author

Follow me on Twitter: [@_mukhammadali](https://twitter.com/_mukhammadali)<br/>

<a href="https://twitter.com/mukhammadali" target="_blank"><img src="https://github.com/Mukhammadali.png?size=100" height="100" /></a>

