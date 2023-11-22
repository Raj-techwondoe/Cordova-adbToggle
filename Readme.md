# Get Started Guide

## Note
*Device needs to Rooted for this app to work properly*

## Installation Guide
Installing ionic cordova globally
```bash
npm i -g ionic cordova 
```

Install node modules
```bash
npm i
```

Install Shell exec plugin manuall ( Gives error in normal node install)

```bash
cordova plugin add cordova-plugin-shell-exec
```

Add android platform

```bash
ionic cordova platform add android     
```

Prepare android platform js files

```bash
ionic cordova prepare android  
```

Prepare debug SDK

```bash
ionic cordova build android --prod    
```

You can view the debug changes on chrome inspector on

```
chrome://inspect/#devices
```