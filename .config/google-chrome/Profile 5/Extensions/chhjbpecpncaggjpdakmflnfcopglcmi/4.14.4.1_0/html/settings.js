/*! 
 * Ebates Button v4.14.4.1 2017-03-15
 * Copyrights 2016 Ebates Inc.
 */
"use strict";!function(a,b){function c(a){framework.extension.fireEvent("GAEvent",{data:{category:a[1],action:a[2],label:a[3]}})}function d(a){framework.extension.fireEvent("InternalLoggingEvent",{data:a})}function e(a,b){return new Promise(function(c){framework.extension.fireEvent("settings",{},function(d){d&&d.blacklist&&(a.blacklist=d.blacklist.join("\n")),a.cancel=function(){b.cancel()},a.save=function(){framework.extension.fireEvent("blacklist-save",{data:_.compact(a.blacklist.split(/[,;\n ]+/))}),b.hide(!0)},c()})})}function f(b,e){return new Promise(function(a){framework.extension.fireEvent("settings",{},function(b){framework.extension.fireEvent("account",{},function(c){a({settings:_.pick(b,["blacklist","serpEnabled","loggingEnabled","blacklistEnabled","ordersDisabled","ordersAvailable","serpReminderType"]),account:_.pick(c,["emailAddress"])})})})}).then(function(f){b.settings=f.settings,b.account=f.account,b.login=function(){c(["_trackEvent","Settings","Not You"]),d({event_type:"settings_click",member_info_field_clicked_on:"btnSwitch"}),framework.extension.fireEvent("login",{})},b.toggle=function(a,d){d&&c(["_trackEvent","Settings",(b.settings[a]?"Enable":"Disable")+" "+d]),framework.extension.fireEvent("settings",{data:b.settings})},b.showBlacklistDlg=function(b){e.show({clickOutsideToClose:!0,parent:a.element(document.body),templateUrl:"blacklist.tmpl.html",targetEvent:b,controller:"DialogCtrl"}),b.stopPropagation()}}).then(function(){b.$apply()})}a.module("Settings",["ngMaterial"]).controller("SettingsCtrl",["$scope","$mdDialog",f]).controller("DialogCtrl",["$scope","$mdDialog",e])}(angular);