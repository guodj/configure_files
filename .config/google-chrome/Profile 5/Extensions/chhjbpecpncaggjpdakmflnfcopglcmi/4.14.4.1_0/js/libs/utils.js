/*! 
 * Ebates Button v4.14.4.1 2017-03-15
 * Copyrights 2016 Ebates Inc.
 */
var Utils=Utils||{};Utils.getDomain=function(a){if(a){var b=/(?:https?:\/\/)?(?:\w+:\/)?[^:?#\/\s]*?([^.\s]+\.(?:[a-z]{2,}|co\.uk|org\.uk|ac\.uk|org\.au|com\.au))(?:[:?#\/]|$)/gi.exec(a);return b?b[1].toLowerCase():null}return null},Utils.wc2re=function(a){return new RegExp(a.replace(/\./gi,"\\.").replace(/\?/gi,"\\?").replace(/\*/gi,".+"),"i")},Utils.stat=function(a){_gaq.push(a),Utils.log("GA Event",a.toString())},Utils.substitute=function(a,b){return _.each(b,function(b,c){a=a.replace("%"+c,b)}),a},Utils.getMaxAge=function(a,b){var c=b||18e5,d=a.getResponseHeader("Cache-Control");if(d&&d.indexOf("max-age=")>=0){var e=1e3*parseInt(a.getResponseHeader("Cache-Control").split("max-age=").pop().split(";").shift());e&&(c=e)}return c},Utils.populateURLs=function(a){return _.mapObject(a,function(a){return"string"==typeof a&&"/"===a[0]?substitute(URL.BASE+a):"object"==typeof a&&null!==a?Utils.populateURLs(a):a})},Utils.openOptionsPage=function(){framework.ui.settings.open()},Utils.getCashBackAmount=function(a){return a.match(/\d/)?a.replace(/(?:plus | cash back|\.0+)/gi,""):""},Utils.CopyToClipboard=function(a){var b=document.createElement("input");document.body.appendChild(b),b.value=a,b.select(),document.execCommand("Copy"),document.body.removeChild(b)},Utils.calculateCashBack=function(a,b){if(!b)return null;if("Percentage"===a.display){var c="$",d=0;return a.range?(c="up to $",d=parseFloat(a.range.up)):d=parseFloat(a.amount),d?c+(b*d/100).toFixed(2):null}};var waitForTimers={},waitForTimeouts={},waitForCallbacks={};Utils.waitFor=function(a,b,c){waitForTimers[a]?waitForCallbacks[a].push(b):(waitForTimeouts[a]=c,waitForCallbacks[a]=[],waitForCallbacks[a].push(b),waitForTimers[a]=setInterval(function(){waitForTimeouts[a]-=100;var b=$(a);if(b.length>0||waitForTimeouts[a]<=0){clearInterval(waitForTimers[a]);for(var c=0;c<waitForCallbacks[a].length;c++)waitForCallbacks[a][c](b.length>0?b:null);delete waitForTimeouts[a],delete waitForTimers[a],delete waitForCallbacks[a]}},100))};