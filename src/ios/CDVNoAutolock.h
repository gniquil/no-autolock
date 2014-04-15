#import <Cordova/CDV.h>

@interface CDVNoAutolock : CDVPlugin

- (void)disableAutolock:(CDVInvokedUrlCommand*)command;

- (void)enableAutolock:(CDVInvokedUrlCommand*)command;

@end