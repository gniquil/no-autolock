#import "CDVNoAutolock.h"
#import <Cordova/CDV.h>

@implementation CDVNoAutolock

- (void)disableAutolock:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    [UIApplication sharedApplication].idleTimerDisabled = YES;

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)enableAutolock:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    [UIApplication sharedApplication].idleTimerDisabled = NO;
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end