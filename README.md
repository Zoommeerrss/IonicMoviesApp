# IonicMoviesApp
 IonicMoviesApp Example

## To Internet permission for the app:

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