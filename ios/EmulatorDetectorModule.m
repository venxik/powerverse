//
//  EmulatorDetectorModule.m
//  powerverse
//
//  Created by Kevin on 03/05/24.
//

#import <Foundation/Foundation.h>
#import "EmulatorDetectorModule.h"
#import <React/RCTLog.h>

@implementation EmulatorDetectorModule

RCT_EXPORT_MODULE(EmulatorDetector);

RCT_EXPORT_METHOD(isEmulator:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    BOOL isSimulator = NO;
#if TARGET_IPHONE_SIMULATOR
    isSimulator = YES;
#endif
    resolve(@(isSimulator));
}

@end
