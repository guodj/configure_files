var bg=chrome.extension.getBackgroundPage().LPPlatform.getBackgroundInterface();Strings.translateStrings(Strings.Vault);document.addEventListener("DOMContentLoaded",function(){processURLParams()});(function(){var b=function(a,d,c){"openDialog"===a.name&&openDialog.apply(window,a.params);window.tabId=a.tabId;c();chrome.runtime.onMessage.removeListener(b)};chrome.runtime.onMessage.addListener(b)})();