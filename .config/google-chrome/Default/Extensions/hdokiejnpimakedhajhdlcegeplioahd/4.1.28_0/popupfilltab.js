var g_reference_url=null,g_rowtypes=null,g_rowtypes_initial=null,g_inputtype=null,g_switchedtabs=!1,g_lastinput=null,g_lastactive=null,g_lastchoose=null,g_lastinputid=null,g_lastmoreopen=null,g_lastshownavbar=null,g_initial_searchtext=null;if("undefined"==typeof verbose)var verbose=!1;var g_MAXPWLENID="maxpwlen",g_ctr_dofilter=0,g_ctr_poll=0,g_ctr_pollresponse=0,times={};times.start=LP_gettime();
var g_icon_number_hint=!0,g_creditcard_profile_annotate=!0,g_nomatches_triggers_save=!0,g_selected_never_row=null,g_selected_more_row=null,g_more_submenu_aid=null,g_more_submenu_ffid=null,g_clickable_input_on_password=!0,g_in_lpframe=!0;document.addEventListener("DOMContentLoaded",function(){loadit()});var dotrans=!0;
function loadit(){document&&(document.location&&document.location.href)&&-1==document.location.href.indexOf("popupfilltab.html")||(g_ischrome?(L("IF -> BG : cmd=getpopupfilldata"),chrome_runtime_sendMessage({cmd:"getpopupfilldata"},function(a){L("BG -> IF : response to getpopupfilldata");null==a?"function"==typeof closePopups&&closePopups():(translationInit(a.reg_obj),doInit(a))})):"undefined"!=typeof safari?(safari.self.removeEventListener("message",handleMessage,!1),safari.self.addEventListener("message",
handleMessage,!1),safari.self.tab?safari.self.tab.dispatchMessage("getpopupfilldata",{}):safari.extension.globalPage.contentWindow&&safari.extension.globalPage.contentWindow.message_handler({name:"getpopupfilldata",message:{},target:window})):g_isfirefoxsdk&&(window.addEventListener("message",handleMessage,!1),send_message({messagetype:"getpopupfilldata"})),g_pollid=setInterval(function(){getInputPoll()},100),notifybg_create_ack())}
var KEY_UP=38,KEY_DOWN=40,KEY_ENTER=13,ELEMENT_NODE=1,KEY_ESCAPE=27;function LP_frame_keypress_handler(a){var b=a.keyCode;b==KEY_ESCAPE?closePopups():b==KEY_TAB&&(LP_getEventTarget(a),"undefined"!=typeof g_new_superbar&&g_new_superbar&&"savesite"!=g_currenttab||LP_stopEventPropagation(a));return!1}function neverdomain_handler(){sendRequest({cmd:"neverdomain",url:g_reference_url,neverforall:1,frompopupiframe:1});closePopups()}
function neverpage_handler(){sendRequest({cmd:"neverpage",url:g_reference_url,neverforall:1,frompopupiframe:1});closePopups()}function cr_autofill(a){sendRequest({cmd:"autofillaid",aid:a,from_iframe:!0,no_manualfill_on_saveall:!0,fromiframe:1});closePopups()}function autologin(a){sendRequest({cmd:"autologinaid",aid:a,no_manualfill_on_saveall:!0,fromiframe:1});closePopups()}function cr_fillform(a){sendRequest({cmd:"fillformffid",ffid:a,fromiframe:1,source:"form"});closePopups()}
function cr_copytoclipboard(a){sendRequest({cmd:"copytoclipboard",g_data:a})}function notifybg_create_ack(){sendRequest({cmd:"popupfillscreateack"})}
function sendRequest(a){if(null!=a)if(a.cmd&&"popupfillinputget"!=a.cmd&&"popupfilliconnumber"!=a.cmd&&L("IF -> BG : cmd="+a.cmd),g_ischrome)try{chrome_runtime_sendMessage(a,function(){})}catch(b){}else g_issafari?safari.self.tab?safari.self.tab.dispatchMessage(a.cmd,a):safari.extension&&(safari.extension.globalPage&&safari.extension.globalPage.contentWindow)&&safari.extension.globalPage.contentWindow.message_handler({name:a.cmd,message:a,target:window}):g_isfirefoxsdk?(a.messagetype=a.cmd,send_message(a)):
g_iscasper&&"function"==typeof t_sendmsg&&t_sendmsg(a)}
function handleMessage(a){if(g_isfirefoxsdk){if(a.origin!=window.location.origin)return;a.message=a.data;a.name=a.data.messagetype}"message"==a.name&&"gotpopupfillinput"!=a.message.cmd&&L("BG -> IF : cmd="+a.message.cmd);if("gotpopupfilldata"==a.name||"gotpopupfilldata"==a.message.cmd)translationInit(a.message.reg_obj),doInit(a.message);else if("gotpopupfillinput"==a.name||"gotpopupfillinput"==a.message.cmd)null==g_initial_searchtext&&(g_initial_searchtext=a.message.inputstr),g_ctr_pollresponse++,
(g_switchedtabs||a.message.inputstr!=g_lastinput||g_lastactive!=a.message.active||a.message.inputid!=g_lastinputid||a.message.moreopen!=g_lastmoreopen||a.message.shownavbar!=g_lastshownavbar||a.message.choose!=g_lastchoose)&&dofilter(a.message.inputstr,a.message.inputid,a.message.active,a.message.choose,a.message.moreopen,SEARCH_SITE_AND_USER,a.message.issaveall,a.message.inputtype,a.message.shownavbar),g_lastinput=a.message.inputstr,g_lastinputid=a.message.inputid,g_lastactive=a.message.active,g_lastchoose=
a.message.choose,g_lastmoreopen=a.message.moreopen,g_lastshownavbar=a.message.shownavbar,g_switchedtabs=!1;else if("gotpopupfillgenerateprefs"==a.name||"gotpopupfillgenerateprefs"==a.message.cmd)null==a.message.prefstr||0>=a.message.prefstr.length?verbose_log("unable to get prefs from BG"):handleGotGeneratePrefs(a.message.prefstr,a.message.genpwstr,a.message.genpwpattern);else if("gotpopupfillsave"==a.name||"gotpopupfillsave"==a.message.cmd)null!=a.message.formdata2?populateSave(a.message):null!=
a.message.close?closePopups():(null!=a.message.prompting&&(g_pollSave_max_retry=600),pollSaveSafari());else if(("didpwchallenge"==a.name||"didpwchallenge"==a.message.cmd)&&null!=typeof a.message)master_challenge_response_handler(a.message.result,g_safari_master_challenge_success_callback_fn,g_safari_master_challenge_failure_callback_fn),g_safari_master_challenge_failure_callback_fn=g_safari_master_challenge_success_callback_fn=null}
function pollSaveSafari(){g_pollSaveSafari_ctr<g_pollSave_max_retry?(g_pollSaveSafari_ctr++,setTimeout(function(){sendRequest({cmd:"popupfillsaveget",url:g_reference_url})},g_pollSave_retry_timeout)):verbose_log("failed to get form information from CS")}var g_text_created_popup=!1;
function dofilter(a,b,c,f,g,k,n,d){function h(a){s&&verbose_log(a)}g_ctr_dofilter++;var s=!1;h("dofilter called with SEARCH string "+a);null==a&&(a="");if("savesite"==g_currenttab&&!n)d&&("text"==d||"email"==d||"tel"==d)?document.getElementById("u")&&g_did_populate_save&&(document.getElementById("u").value=a):d&&("password"==d&&g_did_populate_save)&&document.getElementById("p")&&(document.getElementById("p").value=a);else{var l=document.getElementsByTagName("td"),m=[];d=[];g_switchedtabs&&(g_selected_row=
-1,a="");if(0>g_selected_row&&0!=c)if(g_initial_searchtext!=a?(g_inputstr_initial_from_kbdnav="",h("F4")):g_text_created_popup?(g_inputstr_initial_from_kbdnav=a,a="",h("F1")):0!=c?(g_inputstr_initial_from_kbdnav=a,a="",h("F3")):h("F2"),"none"==document.getElementById("lptabpopupformfills").style.display)c=g_selected_row=0,h("F5");else{if("none"==document.getElementById("lptabpopup").style.display){c=g_selected_row=0;a="";for(b=0;b<l.length;b++)0==l[b].id.indexOf("tdpopuprow")&&g_selected_row++;ROW_START=
g_selected_row;h("F6")}}else 0>g_selected_row&&0==c?g_initial_searchtext!=a?(g_inputstr_initial_from_kbdnav="",h("F7")):(g_inputstr_initial_from_kbdnav=a,g_text_created_popup=!0,a="",h("F8")):g_inputstr_freeze?(a="",h("F9")):""!==g_inputstr_initial_from_kbdnav&&(h("F10"),a!==g_inputstr_initial_from_kbdnav?(g_inputstr_initial_from_kbdnav="",h("SEARCH TEXT CHANGED, FILTER initial")):(a="",h("F11")));h("SEARCH string is now "+a);for(var e=b=0;e<l.length;e++)if(l[e].id&&(0==l[e].id.indexOf("tdpopuprow")||
0==l[e].id.indexOf("tdpopupffrow"))){var p="tr"+l[e].id.substr(2),p=document.getElementById(p),q=p.getAttribute("sitename"),r=p.getAttribute("username"),t=p.getAttribute("profilename");null==q&&(q="");null==r&&(r="");null==t&&(t="");0>=a.length?"none"==document.getElementById("lptabpopupformfills").style.display&&0==l[e].id.indexOf("tdpopuprow")||"none"==document.getElementById("lptabpopup").style.display&&0==l[e].id.indexOf("tdpopupffrow")?(d.push(p),unhighlight_row(p),b++):m.push(p):!k&&0==get_innertext(l[e]).trim().toLowerCase().indexOf(a.toLowerCase())||
k&&0<=q.trim().toLowerCase().indexOf(a.toLowerCase())&&"none"==document.getElementById("lptabpopupformfills").style.display||k&&0<=r.trim().toLowerCase().indexOf(a.toLowerCase())&&"none"==document.getElementById("lptabpopupformfills").style.display||k&&0<=get_innertext(l[e]).trim().toLowerCase().indexOf(a.toLowerCase())&&"none"==document.getElementById("lptabpopup").style.display?"none"==document.getElementById("lptabpopupformfills").style.display&&0==l[e].id.indexOf("tdpopuprow")||"none"==document.getElementById("lptabpopup").style.display&&
0==l[e].id.indexOf("tdpopupffrow")?(highlight_row(p,a),d.push(p),b++):m.push(p):m.push(p)}for(var j in m)m[j].style.display="none",g_outline_hover?(a=m[j].children[0],a.className=a.className.replace(/ ?\bshowfocus\b/,"")):m[j].className=m[j].className.replace(/ ?\bshowfocus\b/,""),unhighlight_row(m[j]),g_visual_cue_on_hover&&(0==m[j].id.indexOf("trpopuprow")?(a="expand",a=m[j].id.replace("trpopuprow",a),a=document.getElementById(a),null!=a&&(a.style.display="none")):0==m[j].id.indexOf("trpopupffrow")&&
(a="expandff",a=m[j].id.replace("trpopupffrow",a),a=document.getElementById(a),null!=a&&(a.style.display="none")));for(j in d)d[j].style.display="",g_outline_hover?(a=d[j].children[0],a.className=a.className.replace(/ ?\bshowfocus\b/,"")):d[j].className=d[j].className.replace(/ ?\bshowfocus\b/,"");if(0<=g_selected_row){g_selected_row+=c;g_selected_row>=ROW_START+b?g_selected_row=ROW_START+b-1:g_selected_row<ROW_START&&(g_selected_row=ROW_START);c=ROW_START;for(e=0;e<d.length;e++)if(d[e].id&&"none"!=
d[e].style.display){if(g_selected_row==c){if(f)j=d[e],0==j.id.indexOf("trpopuprow")&&null!=j.getAttribute("aid")?autologin(j.getAttribute("aid")):j.click();else{if(g){j=d[e];g_currenttab="more";doTitleBar(document,g_currenttab);more_popupaction(document,j);return}g_outline_hover?(a=d[e].children[0],a.className+=" showfocus"):d[e].className+=" showfocus";d[e].scrollIntoView(!1);g_visual_cue_on_hover&&(0==d[e].id.indexOf("trpopuprow")?(a="expand",a=d[e].id.replace("trpopuprow",a),a=document.getElementById(a),
null!=a&&(a.style.display="")):0==d[e].id.indexOf("trpopupffrow")&&(a="expandff",a=d[e].id.replace("trpopupffrow",a),a=document.getElementById(a),null!=a&&(a.style.display="")))}if(!g_visual_cue_on_hover)break}else g_visual_cue_on_hover&&(0==d[e].id.indexOf("trpopuprow")?(a="expand",a=d[e].id.replace("trpopuprow",a),a=document.getElementById(a),null!=a&&(a.style.display="none")):0==d[e].id.indexOf("trpopupffrow")&&(a="expandff",a=d[e].id.replace("trpopupffrow",a),a=document.getElementById(a),null!=
a&&(a.style.display="none")));c++}}g_icon_number_hint&&("sites"==g_currenttab?(f=document.getElementById("lptabpopupformfills"),(g=document.getElementById("lptabpopup"))&&(f&&"none"==f.style.display&&"none"==g.style.display)&&(b=0),sendRequest({cmd:"popupfilliconnumber",sitenumber:b,formfillsnumber:-1})):"formfill"==g_currenttab?sendRequest({cmd:"popupfilliconnumber",formfillsnumber:b,sitenumber:-1}):sendRequest({cmd:"popupfilliconnumber",sitenumber:-1,formfillsnumbers:-1}));g_nomatches_triggers_save&&
"sites"==g_currenttab&&("sites"==g_rowtypes&&0==b&&0<countInputRows(document).sites)&&(n||savesite_popupaction_iframe(document,null,null))}}
function getInputPoll(){g_ctr_poll++;g_ischrome?chrome_runtime_sendMessage({cmd:"popupfillinputget"},function(a){g_ctr_pollresponse++;null==a||null==a.inputstr||(null==g_initial_searchtext&&(g_initial_searchtext=a.inputstr),(g_switchedtabs||a.inputstr!=g_lastinput||g_lastactive!=a.active||g_lastmoreopen!=a.moreopen||g_lastshownavbar!=a.shownavbar||a.inputid!=g_lastinputid||a.choose!=g_lastchoose)&&dofilter(a.inputstr,a.inputid,a.active,a.choose,a.moreopen,SEARCH_SITE_AND_USER,a.issaveall,a.inputtype,
a.shownavbar),g_lastinput=a.inputstr,g_lastinputid=a.inputid,g_lastactive=a.active,g_lastchoose=a.choose,g_lastmoreopen=a.moreopen,g_lastshownavbar=a.shownavbar,g_switchedtabs=!1)}):(g_issafari||g_isfirefoxsdk)&&sendRequest({cmd:"popupfillinputget"});return!1}
function getWindowWidth(a){a=a.innerWidth;var b=document.getElementById("_lpinvis");null==b&&(b=document.createElement("div"),b.id="_lpinvis",b.style.left="0px",b.style.right="0px",b.style.top="0px",b.style.height="0px",b.style.visibility="hidden",document.body.appendChild(b));0<b.offsetWidth&&(a=b.offsetWidth);document.body.removeChild(b);return a}function defaultFrameResize(){sendRequest({cmd:"popupfillresize",width:0,height:0})}function verbose_log(a){verbose&&console_log(a)}
function LP_getAbsolutePos(a,b){if(!a||!b||"function"!=typeof b.getBoundingClientRect)return null;try{var c=b.getBoundingClientRect(),f,g;f="undefined"==typeof c.width?c.right-c.left:c.width;g="undefined"==typeof c.height?c.bottom-c.top:c.height;var k=a.body.getBoundingClientRect();return{left:c.left+a.body.scrollLeft-k.left,top:c.top+a.body.scrollTop-k.top,width:f,height:g}}catch(n){return null}}
function handleGotGeneratePrefs(a,b,c){LPIFRAMEVARS.g_myprefs=LPJSON.parse(a);a=LPJSON.parse(b);if(null!=a&&!isEmptyObject(a)){LPIFRAMEVARS.g_genpws=[];for(var f in a)a.hasOwnProperty(f)&&LPIFRAMEVARS.g_genpws.push(a[f])}c=LPJSON.parse(c);LPIFRAMEVARS.g_genpwpattern=c}
function doInit(a){var b=document;set_iframe_title(b,gs("LastPass"));var c={};-1!==a[g_MAXPWLENID]&&(c[g_MAXPWLENID]=a[g_MAXPWLENID]);if(dotrans){LP_decimate_children(b.body);var f=b.createElement("div");f.id="masterdiv";var g=b.createElement("div");g.id="contentdiv";f.appendChild(g);g=b.createElement("div");g.id="transdiv";f.appendChild(g);b.body.appendChild(f);f=b.getElementById("contentdiv");"undefined"!=typeof g_new_superbar&&g_new_superbar&&set_new_superbox_40(b,f);for(var k in c)g=b.createElement("input"),
g.id=k,g.setAttribute("type","hidden"),g.setAttribute("value",c[k]),f.appendChild(g);if(a.formfills)try{LPIFRAMEVARS.g_formfills=LPJSON.parse(a.formfills)}catch(n){}if(a.favicons)try{LPIFRAMEVARS.g_favicons=LPJSON.parse(a.favicons)}catch(d){}if(a.bigicons)try{LPIFRAMEVARS.g_bigicons=LPJSON.parse(a.bigicons)}catch(h){}if(a.sites)try{LPIFRAMEVARS.g_sites=LPJSON.parse(a.sites)}catch(s){}LPIFRAMEVARS.g_do_40fieldicon=!1;c=LPpop.create_popup_obj(b,{sites:a.sites,favicons:a.favicons,formfills:a.formfills,
url:a.url});f.appendChild(c)}doInitCommon(b,a);getGeneratePrefs();sizeTables(window);g_reference_url=a.url;g_can_copy_clipboard=a.can_copy_clipboard;"undefined"!=typeof a.ask_generate&&(g_ask_generate=0==g_ask_generate.length?0:a.ask_generate);"undefined"!=typeof a.ask_save&&(g_ask_save=0==g_ask_save.length?0:a.ask_save);"undefined"!=typeof a.username&&(g_username=a.username);"undefined"!=typeof a.inputtype&&(g_inputtype=a.inputtype);"undefined"!=typeof a.pw_challenge&&(g_has_view_pw_challenge=a.pw_challenge);
"undefined"!=typeof a.site_challenge&&(g_has_view_site_challenge=a.site_challenge);"undefined"!=typeof a.sitepwlen&&0<a.sitepwlen&&(g_sitepwlen_override=a.sitepwlen);"undefined"!=typeof a.ftd&&a.ftd&&(g_ftd_match=a.ftd);"undefined"!=typeof a.enable_exper&&a.enable_exper&&(g_enable_exper=a.enable_exper);"undefined"!=typeof a.do_40fieldicon&&a.do_40fieldicon&&(g_do_40fieldicon=a.do_40fieldicon?!0:!1,f&&(f.style.borderRadius="2px",f.style.boxShadow="0px 1px 2px 0px rgba(0,0,0,0.20)"),g_width_generate=
g_popupfill_widest=330);g_rowtypes=a.rowtype;if(c="undefined"!=typeof a.start_type)a:{c=a.start_type;if(null!=c){k=["sites","formfills","generate","save"];for(f=0;f<k.length;f++)if(k[f]==c){c=!0;break a}}c=!1}c&&(g_rowtypes=g_start_type_state=a.start_type);g_rowtypes_initial=a.rowtype;if(null==g_rowtypes||0>=g_rowtypes.length)g_rowtypes="sites";g_initial_searchtext=null;setTimeout(function(){setup_event_handlers(b,window)},0);"ask_generate"==g_rowtypes||1==g_ask_generate?(setTimeout(function(){askGenerate()},
0),g_currenttab="generate",doSuperBox(b),doTitleBar(b,g_currenttab)):1==g_ask_save?(g_currenttab="savesite",doSuperBox(b),savesite_popupaction_iframe(b),doTitleBar(b,g_currenttab)):"formfills"==g_rowtypes?(g_currenttab="formfill",doSuperBox(b),doTitleBar(b,g_currenttab),formfillprofile_popupaction()):"sites"==g_rowtypes&&(g_currenttab="sites",hideElement(b,"popupcontainerff"),doSuperBox(b),0===countInputRows(b).sites?(null!=a.inputtype&&"password"==a.inputtype?(g_empty_in_super||doTitleBar(b,""),
emptyAskSave(b)):(g_empty_in_super||doTitleBar(b,gs("")),emptyAskFill(b)),g_do_40fieldicon||siteResize(b,EMPTY_RESIZE)):(doTitleBar(b,g_currenttab),siteResize(b)));popup_show_menu_expand_visual_cue&&do_inject_visual_cues(b);setActiveTab(b);g_switchedtabs=!1;document.addEventListener("keydown",function(a){LP_frame_keypress_handler(a)},!1)}
function pollSaveChrome(a){chrome_runtime_sendMessage({cmd:"popupfillsaveget",url:g_reference_url},function(b){null!=b&&(null!=b.formdata2&&""!=b.formdata2?populateSave(b):null!=b.close?closePopups():null!=b.prompting?g_pollSave_max_retry=600:a<g_pollSave_max_retry&&(a++,setTimeout(function(){pollSaveChrome(a)},g_pollSave_retry_timeout)))})}
function do_never_kbd_event(a,b,c){if(null==b||""===b)b=0;0<b&&0===g_selected_never_row&&(g_selected_never_row=1);0>b&&1===g_selected_never_row&&(g_selected_never_row=0);0===g_selected_never_row&&c&&neverpage_handler();1===g_selected_never_row&&c&&neverdomain_handler()}
function do_more_kbd_event(a,b,c,f){a=1;var g=2,k=3,n=4,d=-99,h=-98;g_more_close_on_cancel&&g_more_enable_return?(d=5,n=h=6):g_more_close_on_cancel&&!g_more_enable_return?n=d=5:!g_more_close_on_cancel&&g_more_enable_return&&(n=h=5);if(null!=g_more_submenu_ffid||null!=g_more_submenu_aid&&!g_can_copy_clipboard)a=-97,g=-96,k=-95,n-=3,d-=3,h-=3;if(null==b||""===b)b=0;-1==g_selected_more_row&&f&&(g_selected_more_row=0);g_selected_more_row+=b;0>g_selected_more_row?g_selected_more_row=0:g_selected_more_row>
n&&(g_selected_more_row=n);if(c)switch(g_selected_more_row){case 0:edit_popupaction(g_more_submenu_aid,g_more_submenu_ffid);break;case a:copyusername_popupaction(g_more_submenu_aid);break;case g:copypassword_popupaction(g_more_submenu_aid);break;case k:copyurl_popupaction(g_more_submenu_aid);break;case 4:delete_popupaction(g_more_submenu_aid,g_more_submenu_ffid);break;case h:g_more_enable_return&&(null!=g_more_submenu_aid?sites_popupaction():null!=g_more_submenu_ffid?formfillprofile_popupaction():
closePopups());break;case d:g_more_close_on_cancel&&closePopups()}}
function translationInit(a){try{null!=a&&!isEmptyObject(a)&&("undefined"==typeof translations&&(translations={}),"undefined"==typeof translations["en-US"]&&(translations["en-US"]={}),translations["en-US"].ff_username_regexp=a.ff_username_regexp,translations["en-US"].ff_firstname_regexp=a.ff_firstname_regexp,translations["en-US"].ff_middlename_regexp=a.ff_middlename_regexp,translations["en-US"].ff_lastname_regexp=a.ff_lastname_regexp,translations["en-US"].ff_email_regexp=a.ff_email_regexp,translations["en-US"].ff_zip_regexp=
a.ff_zip_regexp,translations["en-US"].ff_country_regexp=a.ff_country_regexp,translations["en-US"].ff_city_regexp=a.ff_city_regexp,translations["en-US"].ff_currpass_regexp=a.ff_currpass_regexp,translations["en-US"].ff_search_regexp=a.ff_search_regexp,translations["en-US"].ff_bankacctnum_regexp=a.ff_bankacctnum_regexp,translations["en-US"].ff_captcha_regexp=a.ff_captcha_regexp,translations["en-US"].ff_company_regexp=a.ff_company_regexp,translations["en-US"].ff_password_regexp=a.ff_password_regexp,translations["en-US"].ff_question_answer_regexp=
a.ff_question_answer_regexp,translations["en-US"].ff_address1_regexp=a.ff_address1_regexp,translations["en-US"].ff_forgot_regexp=a.ff_forgot_regexp)}catch(b){verbose_log("translationInit: "+b.message)}}
function lpgs(a,b){var c="undefined"==typeof b||null==b?"":b;if("undefined"!=typeof lpgscache[c+a]||"undefined"==typeof lpgslocales[c]&&0==a.indexOf("ff_")&&(ApplyOverrides(c),"undefined"!=typeof lpgscache[c+a]))return lpgscache[c+a];if("undefined"!=typeof translations){if("undefined"!=typeof b&&b&&"undefined"!=typeof translations[b]&&"undefined"!=typeof translations[b][a])return translations[b][a];if("undefined"!=typeof translations["en-US"]&&"undefined"!=typeof translations["en-US"][a])return a=
translations["en-US"][a]}return"undefined"!=typeof lpgscache["en-US"+a]?lpgscache["en-US"+a]:a}function master_challenge_response_handler(a,b,c){if(a){if(g_did_pw_challenge=!0,b)return b()}else if(c)return c()}var g_ctr_master_challenge=0,MASTER_CHALLENGE_DISABLE=999999999999;
function pollChallenge(a,b,c){c||(c=600);g_ctr_master_challenge++;if(g_ctr_master_challenge<c){try{chrome_runtime_sendMessage({cmd:"getpwchallengeresult"},function(c){null!==c&&(master_challenge_response_handler(c,a,b),sendRequest({cmd:"getpwchallengeresult",reset:1}),g_ctr_master_challenge=MASTER_CHALLENGE_DISABLE)})}catch(f){b&&b();sendRequest({cmd:"getpwchallengeresult",reset:1});g_ctr_master_challenge=MASTER_CHALLENGE_DISABLE;return}setTimeout(function(){pollChallenge(a,b,c)},500)}else b&&b(),
sendRequest({cmd:"getpwchallengeresult",reset:1}),g_ctr_master_challenge=MASTER_CHALLENGE_DISABLE}var g_safari_master_challenge_success_callback_fn=null,g_safari_master_challenge_failure_callback_fn=null;
function do_master_pw_challenge(a,b,c){if(g_ischrome){g_ctr_master_challenge=0;try{chrome_runtime_sendMessage({cmd:"dopwchallenge"},function(){})}catch(f){return b?b():!1}pollChallenge(a,b,c)}else if(g_issafari||g_isfirefoxsdk)try{g_safari_master_challenge_success_callback_fn=a,g_safari_master_challenge_failure_callback_fn=b,g_issafari?safari.self.tab?safari.self.tab.dispatchMessage("dopwchallenge",{}):safari.extension.globalPage.contentWindow&&safari.extension.globalPage.contentWindow.message_handler({name:"dopwchallenge",
message:{},target:window}):g_isfirefoxsdk&&send_message({messagetype:"dopwchallenge"})}catch(g){return b()}else return!1}function cr_add_profile(){return sendRequest({cmd:"addprofile",fromiframe:1,source:"form"})}function cr_add_cc(){return sendRequest({cmd:"addcreditcard",fromiframe:1,source:"form"})}function cr_clearforms(){return sendRequest({cmd:"clearforms",fromiframe:1,source:"form"})}function cr_closepopups(){return sendRequest({cmd:"closepopupfills",fromiframe:1})}
function cr_iframe_resize(a,b){return sendRequest({cmd:"popupfillresize",width:a,height:b,fromiframe:1})}function cr_generate(){return sendRequest({cmd:"generate",fromiframe:1})}function cr_delete_formfill_popupaction(a,b){sendRequest({cmd:"deleteformfill",ffid:b,fromiframe:1,source:"form"})}function cr_delete_site_popupaction(a,b){sendRequest({cmd:"deleteaid",aid:b,fromiframe:1})}
function cr_save_password(a,b){sendRequest({cmd:"savePassword",pass:a,url:g_reference_url,fromiframe:1,saveOptions:b})}function cr_copyusername(a){sendRequest({cmd:"copyusername",aid:a,fromiframe:1})}function cr_copypassword(a){sendRequest({cmd:"copypassword",aid:a,fromiframe:1})}function cr_copyurl(a){sendRequest({cmd:"copyurl",aid:a,fromiframe:1})}function cr_edit_site_popupaction(a){sendRequest({cmd:"editaid",aid:a,fromiframe:1})}
function cr_edit_formfill_popupaction(a){sendRequest({cmd:"editprofile",ffid:a,fromiframe:1,source:"form"})}function cr_choose_profilecc(){sendRequest({cmd:"openchooseprofilecc",fromiframe:1,source:"form"})}function cr_replacepasswordchooser(a,b,c){c||lp_gettld_url(g_reference_url);c=lp_gettld_url(c);a=LPJSON.stringify({sitecount:a,newpw:b,tld:c,fromiframe:1});sendRequest({cmd:"changepw",notificationdata:a})}
function cr_replacepassword(a,b){var c=lp_gettld_url(g_reference_url),c=LPJSON.stringify({sitecount:1,newpw:a,singleaid:b,tld:c,fromiframe:1});sendRequest({cmd:"changepw",notificationdata:c})}function cr_set_generate_prefs(a,b){"undefined"!=typeof g_ischrome&&g_ischrome?chrome_runtime_sendMessage({cmd:"popupfillsetgenerateprefs",prefstr:a,genpwstr:b,fromiframe:1},function(){}):sendRequest({cmd:"popupfillsetgenerateprefs",prefstr:a,genpwstr:b,fromiframe:1})}
function lpConfirmYesNo(a){return confirm(a)}function cr_moveIframe(a){a&&("undefined"!=typeof a.delx&&"undefined"!=typeof a.dely)&&sendRequest({cmd:"moveIframe",delx:a.delx,dely:a.dely})}function cr_resizeIframe(a){a&&("undefined"==typeof a.width&&(a.width=0),"undefined"==typeof a.height&&(a.height=0),"undefined"==typeof a.delx&&(a.delx=0),"undefined"==typeof a.dely&&(a.dely=0),sendRequest({cmd:"resizeIframe",width:a.width,height:a.height,delx:a.delx,dely:a.dely}))}
function cr_savesite_dialog_changed(a){sendRequest({cmd:"savesite_dialog_changed",value:a,timestamp:LPPerl.time()})};
