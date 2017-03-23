"undefined"!==typeof LPPlatform&&LPPlatform.addEventListener(document,"keydown",function(a){try{switch(a.keyCode||a.which){case 13:"checkbox"!==a.target.type?Topics.get(Topics.ENTER).publish(a):a.target.checked=!a.target.checked;break;case 27:Topics.get(Topics.ESCAPE).publish(a);break;case 37:Topics.get(Topics.LEFT_ARROW).publish(a);break;case 38:Topics.get(Topics.UP_ARROW).publish(a);break;case 39:Topics.get(Topics.RIGHT_ARROW).publish(a);break;case 40:Topics.get(Topics.DOWN_ARROW).publish(a)}}catch(g){LPPlatform.logException(g)}});
LPTools={};
(function(a){var g=[];a.setDragItems=function(a){g=a};a.getDragItems=function(){return g};a.buildItemButton=function(f){var b=Constants.ACTION_BUTTONS[f];return a.createElement("button",{"class":"itemButton "+b.css,vaultaction:f,title:Strings.Vault[b.title],allowmultiple:!1})};a.setupMiddleEllipsis=function(a){var b=a.find(".textOverflowContainer"),c=Math.ceil(b.get(0).children[0].getBoundingClientRect().width);a=c+Math.ceil(a.find(".textTail").get(0).getBoundingClientRect().width);c=a-c;b.css("max-width",
a);b.css("padding-right",c);b.css("margin-right",-c)};a.requireBinary=function(a){bg.have_binary()?a():LPPlatform.supportsBinary()?dialogs.confirmation.open({title:Strings.translateString("Install Binary Component"),text:Strings.translateString("This feature requires the binary version of this browser extension. Would you like to install it now?"),handler:function(){bg.install_binary()}}):dialogs.alert.open({title:Strings.translateString("Not Supported"),text:Strings.translateString("This feature requires an external binary component, which is currently not supported on this platform.")})};
a.isType=function(a,b){return Object.prototype.toString.call(a)==="[object "+b+"]"};a.getURLParams=function(){var a={},b=document.location.href.split("?");if(2===b.length)for(var b=b[1].split("&"),c=0;c<b.length;++c){var d=b[c].split("=");2===d.length&&(a[d[0]]=d[1])}return a};a.setContent=function(f,b){f.empty();if(b)if("string"===typeof b){for(var c=b.indexOf("<br/>");-1<c;)f.append(document.createTextNode(b.substring(0,c))),f.append(document.createElement("br")),b=b.substring(c+5),c=b.indexOf("<br/>");
f.append(document.createTextNode(b))}else if(a.isType(b,"Array"))for(var c=0,d=b.length;c<d;++c){var l=b[c];"string"===typeof l&&(l=a.createElement("p","dialogText",l));f.append(l)}else f.append(b)};a.hideContextMenu=function(f){null!==f&&(f.removeClass("bottomAligned"),f.hide(),a.removeKeyBoardNavigation())};a.displayContextMenu=function(a,b){var c=$(b);a.clientY>window.innerHeight/2?(c.addClass("bottomAligned"),c.css("bottom",window.innerHeight-a.clientY),c.css("top","")):(c.css("top",a.clientY),
c.css("bottom",""));c.css("left",a.clientX);c.show();return c};a.buildErrorMessage=function(a,b){if(null!==a){for(;a.firstChild;)a.removeChild(a.firstChild);for(var c=0,d=b.length;c<d;++c){var l=document.createElement("p"),e=document.createElement("span");e.textContent="ERROR: ";l.appendChild(e);l.appendChild(document.createTextNode(b[c]));a.appendChild(l)}}};a.buildErrorElement=function(f){var b=$(a.createElement("div","errorContainer")),c=$(a.createElement("div","dialogErrorWrapper")),d=a.createElement("div",
"dialogError");a.getOption(f,"alignTop",!1)?(c.append(d),c.append(a.createElement("div","errorTooltip")),c.addClass("alignTop")):(c.append(a.createElement("div","errorTooltip")),c.append(d));var l=a.getOption(f,"collection",null),e=l.find("input, select").add(l.filter("input, select"));b.insertBefore(l.first());b.append(l);b.append(c);a.getOption(f,"static",!1)?(c.addClass("staticError"),c.show()):(e.bind("focus.error",function(a){c.show();$(a.target).removeClass("errorInput")}),e.bind("blur.error",
function(a){c.hide();$(a.target).addClass("errorInput")}));b=0;for(l=e.length;b<l;++b){var g=$(e.get(b));g.prop("disabled")||g.addClass("errorInput")}e.bind("change.error",function(){f.dialog.performValidate(f.dialog.getData(),{errorsOnly:!0})});return d};a.removeErrorElements=function(a){if(a){var b=a.parentElement;a=b.parentElement;var c=$(a).find("input, select");c.unbind("focus.error");c.unbind("blur.error");c.unbind("change.error");c.removeClass("errorInput");a.removeChild(b);for(b=a.parentElement;a.firstChild;)b.insertBefore(a.firstChild,
a);b.removeChild(a)}};a.getProperties=function(a){var b=[],c;for(c in a)b.push(c);return b};var h=function(f,b,c){return function(){"function"===typeof f&&f();a.openAlerts(b,c)}};a.openAlerts=function(a,b){if(0<a.length){var c=a.shift();$.extend(c,{handler:h(c.handler,a,b),closeHandler:h(c.closeHandler,a,b)});dialogs[c.type].open(c)}else b&&b()};a.buildDialogItemContainer=function(f){for(var b=a.createElement("div","dialogItemContainer noSelect"),c={display:VaultItemBaseDisplay.prototype.DISPLAY_LIST,
allowDrag:!1,additionalItemClasses:"dialogItem noItemButtons"},d=0,e=f.length;d<e;++d){var g=f[d].newDisplayObject();b.appendChild(g.build(c))}return b};a.buildEmptyPlaceholder=function(f,b,c){return"ul"===c.tagName.toLocaleLowerCase()?a.createElement("li","emptyPlaceholder "+b,f):a.createElement("div","emptyPlaceholder "+b,f)};a.get_gmt_timestamp=function(){var a=(new Date).getTime();return parseInt(a/1E3)};a.ContextMenuItem=function(f,b){this.getAction=function(){return f};this.build=function(c,
d,e){var g=void 0!==b&&"undefined"!==typeof b.submenu&&b.submenu,h=null;void 0!==b&&("undefined"!==typeof b.divider&&b.divider)&&(h="divider");g&&(h+=" subMenuOption");h=a.createElement("li",{"class":h,vaultaction:f});h.textContent=void 0===b||"undefined"===typeof b.text?Strings.Vault[Constants.CONTEXT_MENU_ITEMS[f]]:b.text;c.appendChild(h);if(g){h.appendChild(a.createElement("div"));d=a.createElement("ul","subMenu");h.appendChild(d);var g=$(h),j=$(d),k=null,m=!1,p=function(){m&&(j.hide("fast"),a.addKeyBoardNavigation(c.children),
Topics.get(Topics.LEFT_ARROW).unsubscribe(p))},n=function(a){m=!0;e(a);Topics.get(Topics.LEFT_ARROW).subscribe(p)};g.bind("click",n);g.bind("mouseenter",function(a){k=setTimeout(function(){n(a)},200)});g.bind("mouseleave",function(){k&&clearTimeout(k);p()})}else LPPlatform.addEventListener(h,"click",d)}};a.parseUserSpecificMenu=function(f,b){for(var c=f.firstElementChild;c;){var d=c.getAttribute("user");if(null!==d){for(var d=d.split("|"),e=!0,g=0,h=d.length;g<h;++g)if(b===d[g]){e=!1;break}e?$(c).hide():
c.removeAttribute("style")}a.parseUserSpecificMenu(c,b);c=c.nextElementSibling}};a.buildSentShareItems=function(a,b){var c=[];if(b)for(var d=0,e=b.length;d<e;++d){var g=b[d];"1"===g.state?c.push(new AcceptedSentSharedItem(a,g)):"2"===g.state?c.push(new DeclinedSentSharedItem(a,g)):c.push(new PendingSentSharedItem(a,g))}return c};a.openShareDialog=function(f,b){if(f&&1===f.length&&void 0===b)LPRequest.makeDataRequest(LPProxy.getSentShareData,{params:{id:f[0].getID()},requestSuccessOptions:{closeDialog:!1},
success:function(b){a.openShareDialog(f,b)},error:function(){Topics.get(Topics.DIALOG_LOADED).publish()}}),Topics.get(Topics.DIALOG_LOADING).publish();else if(b&&!dialogs.share.loadedJS())dialogs.share.loadJS(function(){a.openShareDialog(f,b)});else{var c=b?a.buildSentShareItems(f[0],b.sent[f[0].getID()]):null;dialogs.share.open(f,c,b?b.friends:null)}};a.objectsToArray=function(){for(var a=[],b=0,c=arguments.length;b<c;++b){var d=arguments[b],e;for(e in d)a.push(d[e])}return a};a.createEventHandler=
function(a){return function(b){a.handleEvent(b)}};a.getAttribute=function(a,b,c){for(var d=b.getAttribute(c);null===d&&b!==a;)if(b=b.parentElement,null!==b)d=b.getAttribute(c);else break;return d};a.removeDOMChildren=function(a){if(a)for(var b=a.childNodes.length;b--;)a.removeChild(a.lastChild)};a.removeDOMChildrenFrom=function(a,b){if(a)for(;b;){var c=b;b=b.nextElementSibling;a.removeChild(c)}};var d=function(a,b,c){c instanceof Array?a.setAttribute(b,c.join(" ")):a.setAttribute(b,c)};a.createElement=
function(a,b,c){a=document.createElement(a);if("string"===typeof b||b instanceof Array)d(a,"class",b);else if("object"===typeof b)for(var e in b){var g=b[e];void 0!==g&&null!==g&&d(a,e,g)}void 0!==c&&(a.textContent=c);return a};a.addClass=function(a,b){if(null!==a){b instanceof Array&&(b=b.join(" "));var c=a.getAttribute("class");c&&(b=c+" "+b);a.setAttribute("class",b)}};a.getOption=function(a,b,c){a&&void 0!==a[b]&&(c=a[b]);return c};var e=null,j=-1,k=null,m=null,p=null,n=null,r=null,q=function(a){return e&&
-1<a&&a<e.length?e[a]:null},s=function(a,b){var c=q(j);c&&c.removeClass("hover");j=a;if(c=q(j))c.addClass("hover"),b&&(r&&r.focusHandler)&&r.focusHandler(c)},t=function(){n=!0;$(document.body).unbind("mousemove",t)};a.disableMouse=function(){n&&(n=!1,$(document.body).bind("mousemove",t))};var u=function(a){n&&(a=$(a.target),s(parseInt(a.closest("[navindex]").attr("navindex"))))},v=function(a){var b=a.offsetParent();b.scrollTop(Math.max(b.scrollTop()+b.height(),b.scrollTop()+a.position().top+a.outerHeight())-
b.height())},w=function(a){var b=a.offsetParent();b.scrollTop(Math.min(b.scrollTop(),b.scrollTop()+a.position().top))},x=function(f){var b=null;j===e.length-1?(b=0,w(e[b])):(b=j+1,v(e[b]));s(b,!0);a.disableMouse();f.preventDefault();f.stopPropagation()},y=function(f){var b=null;1>j?(b=e.length-1,v(e[b])):(b=j-1,w(e[b]));s(b,!0);a.disableMouse();f.preventDefault();f.stopPropagation()},z=function(a){if(a){var b=new Event(k,{bubbles:!0});a.get(0).dispatchEvent(b)}},A=function(){var f=q(j);if(f){if(m){var b=
f.find(m);b.length&&(f=b)}z(f);a.disableMouse()}return!1},B=function(){z(q(j));return!1};a.setNavIndex=function(a){s(a);(a=q())&&a.get(0).scrollIntoView()};a.getNavIndex=function(){return j};a.addKeyBoardNavigation=function(d,b){if(0<d.length){e=[];j=-1;null===n&&(n=!0);k=a.getOption(b,"mouseEvent","click");m=a.getOption(b,"rightArrowSelector",null);p=a.getOption(b,"useRightArrow",!0);r=b;for(var c=0,g=d.length;c<g;++c){var h=$(d[c]);h.attr("navindex",c);h.unbind("mouseenter",u);h.bind("mouseenter",
u);h.hasClass("hover")&&(j=c);e.push(h)}Topics.get(Topics.DOWN_ARROW).subscribe(x);Topics.get(Topics.UP_ARROW).subscribe(y);Topics.get(Topics.ENTER).subscribeFirst(B);p&&Topics.get(Topics.RIGHT_ARROW).subscribe(A);a.getOption(b,"selectFirst",!1)&&a.setNavIndex(0)}else a.removeKeyBoardNavigation()};a.removeKeyBoardNavigation=function(){e=null;Topics.get(Topics.DOWN_ARROW).unsubscribe(x);Topics.get(Topics.UP_ARROW).unsubscribe(y);Topics.get(Topics.RIGHT_ARROW).unsubscribe(A);Topics.get(Topics.ENTER).unsubscribe(B)};
a.addZebraStriping=function(a){a=$(a).find("tr");for(var b=0,c=a.length;b<c;++b)0!==b%2?$(a[b]).addClass("odd"):$(a[b]).removeClass("odd")};var C=function(a){a=a.target.previousElementSibling;a.checked=!a.checked};a.buildCheckbox=function(d,b){var c=b?b.checkboxAttributes:void 0,c=$.extend(c,{"class":"checkbox",type:"checkbox"}),c=a.createElement("input",c),e=a.createElement("label",d,a.getOption(b,"text",void 0));a.getOption(b,"addClickHandler",!0)&&LPPlatform.addEventListener(e,"click",C);var g=
a.createElement("div");g.appendChild(c);g.appendChild(e);return g};a.buildRadioButton=function(d,b,c){d=a.createElement("input",{"class":"radio",type:"radio",name:d});b=a.createElement("label",b,c);LPPlatform.addEventListener(b,"click",C);c=a.createElement("div");c.appendChild(d);c.appendChild(b);return c};a.hasProperties=function(a){if(a)for(var b in a)return!0;return!1};a.createSelectElement=function(d,b){var c=a.createElement("select",b);$(c).addClass("dialogInput selectDropdown");a.setSelectOptions(c,
d);return c};a.setSelectOptions=function(d,b){a.removeDOMChildren(d);for(var c=0,g=b.length;c<g;++c){var e=b[c],h="object"===typeof e?e.value:e;d.appendChild(a.createElement("option",{value:h},"object"===typeof e&&e.label?e.label:h))}};var D=[{value:"-12:00,0",label:"(-12:00) "+Strings.translateString("International Date Line West")},{value:"-11:00,0",label:"(-11:00) "+Strings.translateString("Midway Island, Samoa")},{value:"-10:00,0",label:"(-10:00) "+Strings.translateString("Hawaii")},{value:"-09:00,1",
label:"(-09:00) "+Strings.translateString("Alaska")},{value:"-08:00,1",label:"(-08:00) "+Strings.translateString("Pacific Time (US & Canada)")},{value:"-07:00,0",label:"(-07:00) "+Strings.translateString("Arizona")},{value:"-07:00,1",label:"(-07:00) "+Strings.translateString("Mountain Time (US & Canada)")},{value:"-06:00,0",label:"(-06:00) "+Strings.translateString("Central America, Saskatchewan")},{value:"-06:00,1",label:"(-06:00) "+Strings.translateString("Central Time (US & Canada), Guadalajara, Mexico City")},
{value:"-05:00,0",label:"(-05:00) "+Strings.translateString("Indiana, Bogota, Lima, Quito, Rio Branco")},{value:"-05:00,1",label:"(-05:00) "+Strings.translateString("Eastern Time (US & Canada)")},{value:"-04:30,0",label:"(-04:30) "+Strings.translateString("Caracas")},{value:"-04:00,1",label:"(-04:00) "+Strings.translateString("Atlantic Time (Canada), Manaus, Santiago")},{value:"-04:00,0",label:"(-04:00) "+Strings.translateString("La Paz")},{value:"-03:30,1",label:"(-03:30) "+Strings.translateString("Newfoundland")},
{value:"-03:00,1",label:"(-03:00) "+Strings.translateString("Greenland, Brasilia, Montevideo")},{value:"-03:00,0",label:"(-03:00) "+Strings.translateString("Buenos Aires, Georgetown")},{value:"-02:00,1",label:"(-02:00) "+Strings.translateString("Mid-Atlantic")},{value:"-02:00,0",label:"(-02:00) "+Strings.translateString("South Georgia")},{value:"-01:00,1",label:"(-01:00) "+Strings.translateString("Azores")},{value:"-01:00,0",label:"(-01:00) "+Strings.translateString("Cape Verde Is.")},{value:"00:00,0",
label:"(00:00) "+Strings.translateString("Casablanca, Monrovia, Reykjavik")},{value:"00:00,1",label:"(00:00) "+Strings.translateString("GMT: Dublin, Edinburgh, Lisbon, London")},{value:"+01:00,1",label:"(+01:00) "+Strings.translateString("Amsterdam, Berlin, Rome, Vienna, Prague, Brussels")},{value:"+01:00,0",label:"(+01:00) "+Strings.translateString("West Central Africa")},{value:"+02:00,1",label:"(+02:00) "+Strings.translateString("Amman, Athens, Istanbul, Beirut, Cairo, Jerusalem")},{value:"+02:00,0",
label:"(+02:00) "+Strings.translateString("Harare, Pretoria")},{value:"+03:00,1",label:"(+03:00) "+Strings.translateString("Baghdad")},{value:"+03:00,0",label:"(+03:00) "+Strings.translateString("Kuwait, Riyadh, Nairobi, Moscow, St. Petersburg, Volgograd")},{value:"+03:30,1",label:"(+03:30) "+Strings.translateString("Tehran")},{value:"+04:00,0",label:"(+04:00) "+Strings.translateString("Abu Dhabi, Muscat, Tbilisi, Izhevsk")},{value:"+04:00,1",label:"(+04:00) "+Strings.translateString("Baku, Yerevan")},
{value:"+04:30,0",label:"(+04:30) "+Strings.translateString("Kabul")},{value:"+05:00,1",label:"(+05:00) "+Strings.translateString("GMT+5")},{value:"+05:00,0",label:"(+05:00) "+Strings.translateString("Islamabad, Karachi, Tashkent, Ekaterinburg")},{value:"+05:30,0",label:"(+05:30) "+Strings.translateString("Chennai, Kolkata, Mumbai, New Delhi, Sri Jayawardenepura")},{value:"+05:45,0",label:"(+05:45) "+Strings.translateString("Kathmandu")},{value:"+06:00,0",label:"(+06:00) "+Strings.translateString("Astana, Dhaka, Novosibirsk")},
{value:"+06:00,1",label:"(+06:00) "+Strings.translateString("Almaty")},{value:"+06:30,0",label:"(+06:30) "+Strings.translateString("Yangon (Rangoon)")},{value:"+07:00,1",label:"(+07:00) "+Strings.translateString("GMT+7")},{value:"+07:00,0",label:"(+07:00) "+Strings.translateString("Bangkok, Hanoi, Jakarta, Krasnoyarsk")},{value:"+08:00,0",label:"(+08:00) "+Strings.translateString("Beijing, Hong Kong, Singapore, Taipei, Irkutsk")},{value:"+08:00,1",label:"(+08:00) "+Strings.translateString("Ulaan Bataar, Perth")},
{value:"+09:00,1",label:"(+09:00) "+Strings.translateString("GMT+9")},{value:"+09:00,0",label:"(+09:00) "+Strings.translateString("Seoul, Osaka, Sapporo, Tokyo, Yakutsk")},{value:"+09:30,0",label:"(+09:30) "+Strings.translateString("Darwin")},{value:"+09:30,1",label:"(+09:30) "+Strings.translateString("Adelaide")},{value:"+10:00,0",label:"(+10:00) "+Strings.translateString("Brisbane, Guam, Port Moresby, Vladivostok")},{value:"+10:00,1",label:"(+10:00) "+Strings.translateString("Canberra, Melbourne, Sydney, Hobart")},
{value:"+11:00,0",label:"(+11:00) "+Strings.translateString("Magadan, Solomon Is., New Caledonia")},{value:"+12:00,1",label:"(+12:00) "+Strings.translateString("Auckland, Wellington")},{value:"+12:00,0",label:"(+12:00) "+Strings.translateString("Fiji, Kamchatka, Marshall Is.")},{value:"+13:00,0",label:"(+13:00) "+Strings.translateString("Nuku'alofa")}];a.createTimezoneSelect=function(d){return a.createSelectElement(D,d)}})(LPTools);
Constants={ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU:"openMoveToSubFolderMenu",ACTION_OPEN_MOVE_TO_FOLDER_MENU:"openMoveToFolderMenu",ACTION_MOVE_TO_FOLDER:"moveToFolder",ACTION_SAVE:"save",ACTION_DELETE:"delete",ACTION_SHARE:"share",ACTION_COPY_USERNAME:"copyUsername",ACTION_COPY_PASSWORD:"copyPassword",ACTION_COPY_URL:"copyURL",ACTION_EDIT:"edit",ACTION_LAUNCH:"launch",ACTION_GO_TO_URL:"goToURL",ACTION_TOGGLE_OPEN:"toggleOpen",ACTION_RENAME:"rename",ACTION_ACCEPT:"acceptShare",ACTION_REJECT:"rejectShare",
ACTION_ENABLE:"enable",ACTION_TOGGLE_SELECT:"toggleSelect",ACTION_CREATE_SUB_FOLDER:"createSubFolder",ACTION_OPEN_ALL:"openAll",ACTION_OPEN_MORE_OPTIONS:"openMoreOptions",ACTION_COPY_NOTE:"copyNote",ACTION_FILL:"fillForm",ACTION_OPEN:"open",ACTION_REVOKE:"revoke",ACTION_EMAIL:"email",ACTION_CANCEL:"cancel",ACTION_REMOVE:"remove",ACTION_PURGE:"purge",ACTION_PURGE_SHARED_FOLDER:"purgeSharedFolder",ACTION_RESTORE:"restore",ACTION_RESTORE_SHARED_FOLDER:"restoreSharedFolder",ACTION_UNLINK:"unlink",ACTION_STOP_DOWNLOADING:"stopDownloading",
ACTION_START_DOWNLOADING:"startDownloading",ACTION_FILL_SITE:"fillSite",ACTION_CLONE:"clone",ACTION_ADD:"add",ACTION_MANAGE:"manage",ACTION_ACCESS:"access",ACTION_COPY_KEY:"copyKey",ACTION_DASHBOARD:"dashboard",ACTION_UPGRADE:"upgrade",USER_FREE:"Free User",USER_PREMIUM:"Premium User",USER_ENTERPRISE:"Enterprise User",USER_ENTERPRISE_ADMIN:"Enterprise Admin",EmailAddressRegularExpression:/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g};
(function(a){a.ACTION_BUTTONS={};a.ACTION_BUTTONS[a.ACTION_EDIT]={title:"EDIT",css:a.ACTION_EDIT};a.ACTION_BUTTONS[a.ACTION_SHARE]={title:"SHARE",css:a.ACTION_SHARE};a.ACTION_BUTTONS[a.ACTION_DELETE]={title:"DELETE",css:a.ACTION_DELETE};a.ACTION_BUTTONS[a.ACTION_ACCEPT]={title:"ACCEPT",css:a.ACTION_ACCEPT};a.ACTION_BUTTONS[a.ACTION_REJECT]={title:"REJECT",css:a.ACTION_REJECT};a.ACTION_BUTTONS[a.ACTION_LAUNCH]={title:"LAUNCH",css:null};a.ACTION_BUTTONS[a.ACTION_ENABLE]={title:"ENABLE",css:null};a.ACTION_BUTTONS[a.ACTION_ACCESS]=
{title:"REQUEST_ACCESS",css:null};a.ACTION_BUTTONS[a.ACTION_REVOKE]={title:"REVOKE",css:a.ACTION_REJECT};a.ACTION_BUTTONS[a.ACTION_EMAIL]={title:"RESEND",css:a.ACTION_EMAIL};a.ACTION_BUTTONS[a.ACTION_CANCEL]={title:"CANCEL_INVITE",css:a.ACTION_REJECT};a.ACTION_BUTTONS[a.ACTION_REMOVE]={title:"REMOVE",css:a.ACTION_REJECT};a.ACTION_BUTTONS[a.ACTION_PURGE]={title:"PURGE",css:a.ACTION_DELETE};a.ACTION_BUTTONS[a.ACTION_PURGE_SHARED_FOLDER]={title:"PURGE",css:a.ACTION_DELETE};a.ACTION_BUTTONS[a.ACTION_RESTORE]=
{title:"RESTORE",css:a.ACTION_RESTORE};a.ACTION_BUTTONS[a.ACTION_RESTORE_SHARED_FOLDER]={title:"RESTORE",css:a.ACTION_RESTORE};a.ACTION_BUTTONS[a.ACTION_MANAGE]={title:"MANAGE",css:a.ACTION_EDIT};a.ACTION_BUTTONS[a.ACTION_UNLINK]={title:"UNLINK",css:a.ACTION_DELETE};a.CONTEXT_MENU_ITEMS={};a.CONTEXT_MENU_ITEMS[a.ACTION_EDIT]="EDIT";a.CONTEXT_MENU_ITEMS[a.ACTION_SHARE]="SHARE";a.CONTEXT_MENU_ITEMS[a.ACTION_DELETE]="DELETE";a.CONTEXT_MENU_ITEMS[a.ACTION_GO_TO_URL]="GO_TO_URL";a.CONTEXT_MENU_ITEMS[a.ACTION_COPY_USERNAME]=
"COPY_USERNAME";a.CONTEXT_MENU_ITEMS[a.ACTION_COPY_PASSWORD]="COPY_PASSWORD";a.CONTEXT_MENU_ITEMS[a.ACTION_COPY_URL]="COPY_URL";a.CONTEXT_MENU_ITEMS[a.ACTION_OPEN_MOVE_TO_FOLDER_MENU]="MOVE_TO_FOLDER";a.CONTEXT_MENU_ITEMS[a.ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU]="MOVE_TO_SUB_FOLDER";a.CONTEXT_MENU_ITEMS[a.ACTION_ACCEPT]="ACCEPT";a.CONTEXT_MENU_ITEMS[a.ACTION_REJECT]="REJECT";a.CONTEXT_MENU_ITEMS[a.ACTION_ENABLE]="ENABLE";a.CONTEXT_MENU_ITEMS[a.ACTION_RENAME]="RENAME_FOLDER";a.CONTEXT_MENU_ITEMS[a.ACTION_CREATE_SUB_FOLDER]=
"CREATE_SUB_FOLDER";a.CONTEXT_MENU_ITEMS[a.ACTION_OPEN_ALL]="OPEN_ALL";a.CONTEXT_MENU_ITEMS[a.ACTION_COPY_NOTE]="COPY_NOTE";a.CONTEXT_MENU_ITEMS[a.ACTION_COPY_KEY]="COPY_KEY";a.CONTEXT_MENU_ITEMS[a.ACTION_FILL]="FILL";a.CONTEXT_MENU_ITEMS[a.ACTION_OPEN]="OPEN";a.CONTEXT_MENU_ITEMS[a.ACTION_SAVE]="SAVE";a.CONTEXT_MENU_ITEMS[a.ACTION_REVOKE]="REVOKE";a.CONTEXT_MENU_ITEMS[a.ACTION_EMAIL]="RESEND";a.CONTEXT_MENU_ITEMS[a.ACTION_CANCEL]="CANCEL_INVITE";a.CONTEXT_MENU_ITEMS[a.ACTION_REMOVE]="REMOVE";a.CONTEXT_MENU_ITEMS[a.ACTION_PURGE]=
"PURGE";a.CONTEXT_MENU_ITEMS[a.ACTION_PURGE_SHARED_FOLDER]="PURGE";a.CONTEXT_MENU_ITEMS[a.ACTION_RESTORE]="RESTORE";a.CONTEXT_MENU_ITEMS[a.ACTION_RESTORE_SHARED_FOLDER]="RESTORE";a.CONTEXT_MENU_ITEMS[a.ACTION_UNLINK]="UNLINK_PERSONAL";a.CONTEXT_MENU_ITEMS[a.ACTION_STOP_DOWNLOADING]="STOP_DOWNLOADING";a.CONTEXT_MENU_ITEMS[a.ACTION_START_DOWNLOADING]="START_DOWNLOADING";a.CONTEXT_MENU_ITEMS[a.ACTION_FILL_SITE]="AUTO_FILL";a.CONTEXT_MENU_ITEMS[a.ACTION_CLONE]="CLONE";a.CONTEXT_MENU_ITEMS[a.ACTION_MANAGE]=
"MANAGE_FOLDER";a.CONTEXT_MENU_ITEMS[a.ACTION_ACCESS]="REQUEST_ACCESS";a.CONTEXT_MENU_ITEMS[a.ACTION_DASHBOARD]="OPEN_DASHBOARD";a.CONTEXT_MENU_ITEMS[a.ACTION_UPGRADE]="UPGRADE_PREMIUM";a.HISTORY_TYPES={PASSWORD:0,USERNAME:1,NOTE:2}})(Constants);
(function(a){a.fn.extend({toggleCSSTransition:function(g,h){var d=a(this).toggleClass(g);if(h)d.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend",h)},toggleCSSAnimation:function(g,h){var d=a(this).toggleClass(g);if(h)d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",h)},LP_show:function(){this.removeClass("displaynone")},LP_hide:function(){this.addClass("displaynone")},LP_removeAttr:function(a){for(var h=0,d=this.length;h<d;++h)this.get(h).removeAttribute(a)},
LP_addSearchHandlers:function(g,h){var d=a(LPTools.createElement("div","searchInputContainer"));this.before(d);d.append(this);var e="searchCloseButton";g&&(e+=" "+g);e=a(LPTools.createElement("div",{"class":e,title:Strings.translateString("Clear Search")}));d.append(e);var j,k=this;e.bind("click",function(a){k.val("");a.stopPropagation();a.preventDefault()});this.LP_input("search",function(a){0<a.length?d.addClass("populated"):d.removeClass("populated");clearTimeout(j);j=setTimeout(function(){try{h(a)}catch(d){LPPlatform.logException(d)}},
150)});return this},LP_createToggle:function(){for(var a=0,h=this.length;a<h;++a){var d=this.get(a);if("INPUT"===d.nodeName&&"checkbox"===d.getAttribute("type")&&"LABEL"===d.nextElementSibling.nodeName){var e=LPTools.createElement("div","toggleButton");e.appendChild(LPTools.createElement("div"));d.nextElementSibling.appendChild(e)}}return this},LP_addPasswordEye:function(){var g=function(a,e){a.passwordShown=!1;a.attr("type","password");e.attr("title",Strings.Vault.SHOW_PASSWORD);e.removeClass("selected")},
h=function(a,e){switch(a.attr("type")){case "password":a.passwordShown=!0;a.attr("type","text");e.attr("title",Strings.Vault.HIDE_PASSWORD);e.addClass("selected");break;case "text":g(a,e)}};return function(d){this.addClass("password");var e=a(LPTools.createElement("div","relative"));this.before(e);e.append(this);var j=a(LPTools.createElement("button",{"class":"showPassword iconButton",title:Strings.Vault.SHOW_PASSWORD}));e.append(j);var k=this,m=LPTools.getOption(d,"checkPermissionHandler",null);
j.bind("click",function(){"password"===k.attr("type")&&m?m(function(){h(k,j)}):h(k,j)});k.hidePassword=function(){g(k,j)};LPTools.getOption(d,"includeGenerateButton",!1)&&(k.LP_input("passwordGenerate",function(a){a?e.removeClass("empty"):(k.hidePassword(),e.addClass("empty"))}),d=a(LPTools.createElement("button",{"class":"generatePassword iconButton",title:Strings.Vault.GENERATE_PASSWORD})),e.append(d),d.bind("click",function(){dialogs.generatePassword.open({input:k,fillGenerated:!1,saveOptions:{source:"vault"}})}));
this.val(this.val());return this}}(),LP_input:function(a,h){var d=this;a=a?"."+a:"";d.unbind("keypress"+a);d.unbind("keyup"+a);d.unbind("input"+a);var e=function(a){a=a.which;31<a&&h(d.val()+String.fromCharCode(a))};d.bind("keypress"+a,e);var j=function(a){switch(a.keyCode||a.which){case 8:case 46:h(d.val())}};d.bind("keyup"+a,j);var k=function(){d.unbind("keypress"+a,e);d.unbind("keyup"+a,j);d.unbind("input"+a,k)};d.bind("input"+a,k);d.bind("input"+a,function(){h(d.val())});var m=this.val;d.val=
function(){1===arguments.length&&h(arguments[0]);return m.apply(d,arguments)}}})})(jQuery);NotifyException=function(a){Topics.get(Topics.ERROR).publish(a);this.message=a;this.stack=Error().stack};NotifyException.prototype=Object.create(Error.prototype);NotifyException.prototype.name="InvalidArgumentException";NotifyException.prototype.constructor=NotifyException;AttachmentKeyException=function(){NotifyException.call(this,Strings.translateString("Could not decrypt attachment key."))};
AttachmentKeyException.prototype=Object.create(NotifyException.prototype);AttachmentKeyException.prototype.name="AttachmentKeyException";AttachmentKeyException.prototype.constructor=AttachmentKeyException;