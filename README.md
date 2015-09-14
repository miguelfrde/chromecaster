# Chromecaster

View your local photos and videos on your TV using Google Chromecast.

## Setting up for development

1. `npm i`
2. `npm start`
3. Open the application in the build directory
4. Reload application (⌘ + R)

Gulpfile based on the [Electron React boilerplate](https://github.com/airtoxin/Electron-React-Boilerplate).

## About the icon and name

I haven't found yet how to automate this part using `Electron`, without
manipulating the `Info.plist` directly or with JavaScript. So, for now make
sure that the following fields are like this:

```
<key>CFBundleDisplayName</key>
<string>Chromecaster</string>
<key>CFBundleExecutable</key>
<string>Electron</string>
<key>CFBundleIconFile</key>
<string>app/images/chromecaster.icns</string>
<key>CFBundleIdentifier</key>
<string>com.miguelfrde.chromecaster</string>
...
<key>CFBundleName</key>
<string>Chromecaster</string>
...
<key>CFBundleVersion</key>
<string>0.0.1</string>
```
