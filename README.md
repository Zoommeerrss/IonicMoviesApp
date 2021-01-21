# IonicMoviesApp
 IonicMoviesApp Example (Android, IOS and Desktop)

# Find the Windows Commands Prompt and open it as Administrator CMD (in the Search bar or Windows Start Menu)

# Follow it if it's necessary in the Ionic Multiplatform framework

https://ionicframework.com/docs/angular/your-first-app

## Main comands for use:

### Install ionic with cordova:

```
npm install -g @ionic/cli native-run cordova-res
```

### Create Angular app:

```
ionic start IonicMoviesApp --type=angular
```

### Go inside the project dir:

```
cd IonicMoviesApp
```

### Add Android and Ios

```
ionic cordova platform add ios
ionic cordova platform add android
```

### Back to project folder and inside him Serve the app in localhost (your own laptop/PC)

```
ionic serve
```

### Back to project folder and inside him Serve the app in localhost for all devices

```
ionic serve --external --lab
```

### Generate an Android apk from Ionic

```
ionic cordova build android --prod --release
```

### Generate the keystore for android apk with a password and some personal information

```
keytool -genkey -v -keystore ionicmoviesapp-key.keystore -alias ionicmoviesapp -keyalg RSA -keysize 2048 -validity 10000
```

### Assign the app

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ionicmoviesapp-key.keystore <YOUR_DRIVE>\IonicMoviesApp\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk ionicmoviesapp
```

### Create and finish the apk to install in the Android devices

```
zipalign -v 4 <YOUR_DRIVE>\IonicMoviesApp\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk IonicMoviesApp.apk
```

# Now you have to permit the app browses the Internet:

### 1. change the network_security_config.xml (..\resources\android\xml\network_security_config.xml) like this: 

```
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true"/>
	<!--
	<domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
	-->
</network-security-config>
```

### 2. change the AndroidManifest.xml (..\platforms\android\app\src\main\AndroidManifest.xml) like this: 

```
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
```