LPFeatures=function(){var e=$(document.body),a=function(b){b=bg.get("g_prefoverrides")[b];return void 0===b||"1"===b};return{updateFeatures:function(b){for(var a in b){var f=b[a],c;c=a;var d=void 0;switch(c){case "showcredmon":d=bg.get("g_showcredmon");break;default:d=bg.get("g_prefoverrides")[c]}"boolean"===typeof d&&(d=d?"1":"0");c=d;e.removeClass("no-feature-"+a);e.removeClass("feature-"+a);f&&"0"===c?e.addClass("no-feature-"+a):!f&&"1"===c&&e.addClass("feature-"+a)}bg.get("g_one_minute_signup_menu_enabled")&&
$("#oneMinuteSignUpMenuItem").addClass("visible")},allowIndividualSharing:function(){return this.allowShare()&&!this.allowShareOnlyFolders()},allowSharedFolders:function(){return this.allowShare()},allowClipboardCopy:function(){return bg.can_copy_to_clipboard()},allowImport:function(){return a("import")},allowShare:function(){return a("share")},allowShareOutsideEnterprise:function(){return a("shareout")},allowShareOnlyFolders:function(){return"1"===bg.get("g_prefoverrides").share_onlyfolders},allowShareDomain:function(){return!0},
allowPasswordRevert:function(){return a("revert")},allowNotes:function(){return a("show_notes")},allowFingerprint:function(){return a("show_fingerprint")},allowBookmarklets:function(){return a("bookmarklets")},allowHint:function(){return a("hint")},allowGift:function(){var a=new Date;return 10===a.getMonth()&&25<=a.getDate()||11===a.getMonth()&&25>=a.getDate()?!0:!1},allowLaunchApplication:function(){return bg.canLaunchApplication()},canBackgroundOpenPopover:function(){return LPPlatform.canBackgroundOpenPopover()}}}();
