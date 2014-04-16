
# org.apache.cordova.no-autolock

This plugin allows ios apps/games to disable autolock. This is especially useful
for games that use the accelerometer as the game mechanism (users generally interact
with the game via tilting the phone rather than tap/swipe).

[Disclaimer] Not sure if the bundle id should be under `org.apache.cordova`. Let me know.

## Installation

    cordova plugin add https://github.com/gniquil/no-autolock.git


## Supported Platforms

- iOS

## Methods

- noAutolock.disableAutolock
- noAutolock.enableAutolock


## noAutolock.disableAutolock

Disable the iOS idle timer. 

```javascript
navigator.noAutolock.disableAutolock();
```

This is really just a simple wrapper for

```objective-c
[UIApplication sharedApplication].idleTimerDisabled = YES;
```

## noAutolock.disableAutolock

Disable the iOS idle timer. 

```javascript
navigator.noAutolock.enableAutolock();
```

Similarly this is just

```objective-c
[UIApplication sharedApplication].idleTimerDisabled = NO;
```