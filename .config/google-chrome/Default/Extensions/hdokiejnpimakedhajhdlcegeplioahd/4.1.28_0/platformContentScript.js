LPPlatform=function(){var a;return{requestFrameworkInitializer:function(b){a=chrome.runtime.connect("",{name:"requestPort"});a.onMessage.addListener(b);return function(b){a.postMessage(b)}}}}();
