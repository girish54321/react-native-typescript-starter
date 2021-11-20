//
//  RCTCalendarModule.m
//  Starter
//
//  Created by Girish Parate on 20/11/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

#import <React/RCTLog.h>
#import "RCTReactOneCustomMethod.h"

@implementation RCTReactOneCustomMethod

// To export a module named ReactOneCustomMethod
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getPhoneID:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
//  NSUUID *deviceID = [[UIDevice currentDevice] identifierForVendor];
  NSString *deviceName = [[UIDevice currentDevice] name];
  resolve(deviceName);
}
@end
