var NoteDialog=function(g){DialogWithGroupInput.call(this,g,{closeButtonEnabled:!0,maximizeButtonEnabled:!0});this.addedAttachments=this.removedAttachments=null;this.showAttachmentContainer=function(g){g?$("#noteDialogExistingAttachments").hide():$("#noteDialogExistingAttachments").show()};this.noteForms={};this.noteTypeIconContainer=this.noteFormElement=null;this.noteTypeOptions=[];this.temporaryNoteTypeOptionValue=null};NoteDialog.prototype=Object.create(DialogWithGroupInput.prototype);
NoteDialog.prototype.constructor=NoteDialog;
(function(g){var k=function(){LPProxy.copyToClipboard(this.getValue())};NoteDialog.prototype.setNoteTypeImage=function(a){this.noteTypeIconContainer.children(".itemIcon").detach();this.noteTypeIconContainer.prepend(this.inputFields.notetype.options[a].icon)};var h=function(a){a=new NoteDisplay(new Note({notetype:a}));var b=a.buildItemIconElement();a.destruct();return b};NoteDialog.prototype.addCustomNote=function(a){var b="Custom_"+a.id;if(!this.noteForms.hasOwnProperty(b)){this.addNoteType({label:a.title,value:b});
for(var c=[],d=0;d<a.fields.length;++d){var f=a.fields[d].text;switch(a.fields[d].type){case "text":c.push(new DialogInput.TextInput(f));break;case "password":c.push(new DialogInput.PasswordInput(f));break;case "textarea":c.push(new DialogInput.TextArea(f));break;case "monthDayYear":c.push(new DialogInput.AlphaDateInput(f));break;case "monthYear":c.push(new DialogInput.AlphaDateInput(f,{includeDay:!1}));break;case "textWithCopy":c.push(new DialogInput.TextInput(f,void 0,{inputButton:Strings.translateString("Copy"),
inputButtonHandler:k}))}}c=new e(c);c.customTemplate=JSON.stringify(a);this.noteForms[b]=c}return b};NoteDialog.prototype.open=function(a){DialogWithGroupInput.prototype.open.call(this,$.extend(a,{title:a&&a.vaultItem?Strings.translateString("Edit Note"):Strings.translateString("Add Note"),sourceFunction:LPProxy.getNoteModel}))};NoteDialog.prototype.defaultFields=function(a){a.defaultData=$.extend({notetype:a.vaultItem?a.vaultItem.getNoteType():Note.prototype.NOTE_TYPES.GENERIC},a.defaultData);DialogWithGroupInput.prototype.defaultFields.apply(this,
arguments)};NoteDialog.prototype.clearFields=function(a){DialogWithGroupInput.prototype.clearFields.apply(this,arguments);for(var b in this.noteForms)this.noteForms[b].inputs.clear()};NoteDialog.prototype.clearErrors=function(){DialogWithGroupInput.prototype.clearErrors.apply(this,arguments);for(var a in this.noteForms)this.noteForms[a].inputs.clearErrors()};NoteDialog.prototype.validate=function(a){var b=DialogWithGroupInput.prototype.validate.apply(this,arguments);""===a.name&&(this.addError("name",
"Name is required."),b=!1);if(45E3<JSON.stringify(a.extra).length){var c=this;dialogs.confirmation.open({title:Strings.translateString("Error"),text:Strings.translateString("The notes field contains too much data. You may store a maximum of 45,000 characters per note. Would you like us to truncate the note for you? You will lose some of your data."),handler:function(){c.inputFields.extra.Notes.setValue(a.extra.Notes.substring(0,45E3))}});b=!1}return b};NoteDialog.prototype.initializeAttachmentContainer=
function(a){this.containers.attachments=new Container(a,{stateChangeCallback:this.showAttachmentContainer});this.containers.attachments.initialize(document.getElementById("attachmentContainer"));this.showAttachmentContainer(this.containers.attachments.isEmpty())};NoteDialog.prototype.setup=function(a,b){var c=b.vaultItem;c?(this.inputFields.notetype.disable(),$("#deleteCustomNoteTemplate").hide()):this.inputFields.notetype.enable();c&&(!this.inputFields.notetype.options.hasOwnProperty(c.getNoteType())&&
c.getTemplate())&&(this.temporaryNoteTypeOptionValue=c.getNoteType(),this.addCustomNote(JSON.parse(c.getTemplate())));if(c&&c.hasAttachments()){for(var c=c.getAttachments(),d=[],f=0,l=c.length;f<l;++f)d.push(c[f].newDisplayObject());this.initializeAttachmentContainer(d)}else this.showAttachmentContainer(!0);this.removedAttachments=[];this.addedAttachments=[];this.vaultItem?(a.find(".history").show(),bg.loglogin(this.vaultItem.getID())):a.find(".history").hide();DialogWithGroupInput.prototype.setup.apply(this,
arguments)};var m=NoteDialog.prototype,n=function(a,b){return a.label<b.label?-1:a.label>b.label?1:0},j=LPTools.createElement("div",{id:"addCustomTemplate"},Strings.translateString("Add Custom Template"));$(j).bind("click",function(){dialogs.customNoteTemplate.open()});m.addNoteType=function(a){var b=LPTools.createElement("li","noteDropdown",a.label);b.insertBefore(h(a.value),b.firstChild);a.element=b;a.icon=h(a.value);this.noteTypeOptions.push(a);this.noteTypeOptions=this.noteTypeOptions.sort(n);
this.inputFields.notetype.setOptions(this.noteTypeOptions);this.inputFields.notetype.dropdownElement.append(j)};NoteDialog.prototype.initialize=function(a){DialogWithGroupInput.prototype.initialize.apply(this,arguments);this.noteFormElement=g.getElementById("noteForm");this.noteTypeIconContainer=$("#noteDialogTypeContainer");this.inputFields.notetype=new DropdownInput(this.inputFields.notetype.getElement()[0]);for(var b in Note.prototype.NOTE_TYPES){var c=Note.prototype.NOTE_TYPES[b];this.addNoteType({label:c,
value:c})}var d=this;b=function(){for(var a=LPProxy.getCustomNoteTemplates(),b=0,c=a.length;b<c;++b)d.addCustomNote(a[b])};b();Topics.get(Topics.REFRESH_DATA).subscribe(b);d.noteTypeIconContainer.bind("mousedown",function(a){d.inputFields.notetype.toggle(a);a.preventDefault();d.inputFields.notetype.focus()});d.inputFields.notetype.getElement().bind("focus",function(){d.noteTypeIconContainer.addClass("focus")});d.inputFields.notetype.getElement().bind("blur",function(){d.noteTypeIconContainer.removeClass("focus")});
b=d.addFavButton();c=LPTools.createElement("a",{"class":"itemButton history",title:Strings.translateString("Note History")});$(c).bind("click",function(){LPRequest.makeRequest(LPProxy.getNoteHistory,{parameters:[d.vaultItem.getID(),d.vaultItem.getShareID()],success:function(a){dialogs.fieldHistory.open({history:a,vaultItem:d.vaultItem,type:Constants.HISTORY_TYPES.NOTE})},requestSuccessOptions:{closeDialog:!1}})});b.appendChild(c);d.inputFields.notetype.onChange(function(a){d.setNoteFields(a);a=d.noteForms[a];
d.hiddenFields.template=a?a.customTemplate:"";a&&a.customTemplate?$("#deleteCustomNoteTemplate").show():$("#deleteCustomNoteTemplate").hide()});Topics.get(Topics.ATTACHMENT_REMOVED).subscribe(function(a){for(var b=0,c=d.addedAttachments.length;b<c;++b)if(d.addedAttachments[b]===a){d.addedAttachments.splice(b,1);return}d.removedAttachments.push(a)});$("#addAttachmentButton").bind("click",function(){LPProxy.addAttachment(function(a){d.addAttachment(a)})});$("#deleteCustomNoteTemplate").bind("click",
function(){dialogs.confirmation.open({title:Strings.translateString("Confirm Deletion"),text:Strings.translateString("Are you sure you want do delete? <br/> Any notes you created using this template will not be deleted."),nextButtonText:Strings.translateString("Continue"),backButtonText:Strings.translateString(Strings.Vault.CANCEL),handler:function(){var a=d.inputFields.notetype.getValue(),b=JSON.parse(d.noteForms[a].customTemplate);LPRequest.makeRequest(LPProxy.deleteCustomNoteTemplate,{params:{id:b.id},
success:function(){d.inputFields.notetype.removeValue(a,Note.prototype.NOTE_TYPES.GENERIC);delete d.noteForms[a]},requestSuccessOptions:{closeDialog:!1}})}})});Topics.get(Topics.SECURENOTE_TEMPLATE_ADDED).subscribe(function(a){a=d.addCustomNote(a);d.inputFields.notetype.setValue(a)});this.noteForms[Note.prototype.NOTE_TYPES.BANK]=new e([new DialogInput.TextInput("Bank Name"),new DialogInput.TextInput("Account Type"),new DialogInput.TextInput("Routing Number"),new DialogInput.TextInput("Account Number"),
new DialogInput.TextInput("SWIFT Code"),new DialogInput.TextInput("IBAN Number"),new DialogInput.TextInput("Pin"),new DialogInput.TextInput("Branch Address"),new DialogInput.TextInput("Branch Phone"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.DATABASE]=new e([new DialogInput.TextInput("Type"),new DialogInput.TextInput("Hostname"),new DialogInput.TextInput("Port"),new DialogInput.TextInput("Database"),new DialogInput.TextInput("Username"),new DialogInput.PasswordInput("Password"),
new DialogInput.TextInput("SID"),new DialogInput.TextInput("Alias"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.DRIVERS_LICENSE]=new e([new DialogInput.TextInput("Number"),new DialogInput.AlphaDateInput("Expiration Date"),new DialogInput.TextInput("License Class"),new DialogInput.TextInput("Name"),new DialogInput.TextInput("Address"),new DialogInput.TextInput("City / Town"),new DialogInput.TextInput("State"),new DialogInput.TextInput("ZIP / Postal Code"),new DialogInput.TextInput("Country"),
new DialogInput.AlphaDateInput("Date of Birth"),new DialogInput.TextInput("Sex"),new DialogInput.TextInput("Height"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.EMAIL]=new e([new DialogInput.TextInput("Username"),new DialogInput.PasswordInput("Password"),new DialogInput.TextInput("Server"),new DialogInput.TextInput("Port"),new DialogInput.TextInput("Type"),new DialogInput.TextInput("SMTP Server"),new DialogInput.TextInput("SMTP Port"),new DialogInput.TextArea("Notes")]);
this.noteForms[Note.prototype.NOTE_TYPES.HEALTH_INSURANCE]=new e([new DialogInput.TextInput("Company"),new DialogInput.TextInput("Company Phone"),new DialogInput.TextInput("Policy Type"),new DialogInput.TextInput("Policy Number"),new DialogInput.TextInput("Group ID"),new DialogInput.TextInput("Member Name"),new DialogInput.TextInput("Member ID"),new DialogInput.TextInput("Physician Name"),new DialogInput.TextInput("Physician Phone"),new DialogInput.TextInput("Physician Address"),new DialogInput.TextInput("Co-pay"),
new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.IM]=new e([new DialogInput.TextInput("Type"),new DialogInput.TextInput("Username"),new DialogInput.PasswordInput("Password"),new DialogInput.TextInput("Server"),new DialogInput.TextInput("Port"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.INSURANCE]=new e([new DialogInput.TextInput("Company"),new DialogInput.TextInput("Policy Type"),new DialogInput.TextInput("Policy Number"),new DialogInput.AlphaDateInput("Expiration"),
new DialogInput.TextInput("Agent Name"),new DialogInput.TextInput("Agent Phone"),new DialogInput.TextInput("URL"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.MEMBERSHIP]=new e([new DialogInput.TextInput("Organization"),new DialogInput.TextInput("Membership Number"),new DialogInput.TextInput("Member Name"),new DialogInput.AlphaDateInput("Start Date"),new DialogInput.AlphaDateInput("Expiration Date"),new DialogInput.TextInput("Website"),new DialogInput.TextInput("Telephone"),
new DialogInput.PasswordInput("Password"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.CREDIT]=new e([new DialogInput.TextInput("Name on Card"),new DialogInput.TextInput("Type"),new DialogInput.TextInput("Number"),new DialogInput.TextInput("Security Code"),new DialogInput.AlphaDateInput("Start Date",{includeDay:!1}),new DialogInput.AlphaDateInput("Expiration Date",{includeDay:!1}),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.SSN]=new e([new DialogInput.TextInput("Name"),
new DialogInput.TextInput("Number"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.SOFTWARE_LICENSE]=new e([new DialogInput.TextInput("License Key"),new DialogInput.TextInput("Licensee"),new DialogInput.TextInput("Version"),new DialogInput.TextInput("Publisher"),new DialogInput.TextInput("Support Email"),new DialogInput.TextInput("Website"),new DialogInput.TextInput("Price"),new DialogInput.AlphaDateInput("Purchase Date"),new DialogInput.TextInput("Order Number"),new DialogInput.TextInput("Number of Licenses"),
new DialogInput.TextInput("Order Total"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.SSH_KEY]=new e([new DialogInput.TextInput("Bit Strength"),new DialogInput.TextInput("Format"),new DialogInput.TextInput("Passphrase"),new DialogInput.TextInput("Private Key",void 0,{inputButton:Strings.translateString("Copy"),inputButtonHandler:function(){this.dialog.vaultItem.copyPrivateKey()}}),new DialogInput.TextInput("Public Key"),new DialogInput.TextInput("Hostname"),new DialogInput.AlphaDateInput("Date"),
new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.WIFI]=new e([new DialogInput.TextInput("SSID"),new DialogInput.PasswordInput("Password"),new DialogInput.TextInput("Connection Type"),new DialogInput.TextInput("Connection Mode"),new DialogInput.TextInput("Authentication"),new DialogInput.TextInput("Encryption"),new DialogInput.TextInput("Use 802.1X"),new DialogInput.TextInput("FIPS Mode"),new DialogInput.TextInput("Key Type"),new DialogInput.TextInput("Protected"),new DialogInput.TextInput("Key Index"),
new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.SERVER]=new e([new DialogInput.TextInput("Hostname"),new DialogInput.TextInput("Username"),new DialogInput.PasswordInput("Password"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.PASSPORT]=new e([new DialogInput.TextInput("Type"),new DialogInput.TextInput("Name"),new DialogInput.TextInput("Country"),new DialogInput.TextInput("Number"),new DialogInput.TextInput("Sex"),new DialogInput.TextInput("Nationality"),
new DialogInput.TextInput("Issuing Authority"),new DialogInput.AlphaDateInput("Date of Birth"),new DialogInput.AlphaDateInput("Issued Date"),new DialogInput.AlphaDateInput("Expiration Date"),new DialogInput.TextArea("Notes")]);this.noteForms[Note.prototype.NOTE_TYPES.GENERIC]=new e([new DialogInput.TextArea("Notes",null)],["noteContent"])};NoteDialog.prototype.addAttachment=function(a){a&&(this.addedAttachments.push(a),a=a.newDisplayObject(),this.containers.attachments?this.containers.attachments.addChild(a):
this.initializeAttachmentContainer([a]))};NoteDialog.prototype.setNoteFields=function(a){a=a||Note.prototype.NOTE_TYPES.GENERIC;LPTools.removeDOMChildren(this.noteFormElement);var b=this.noteForms[a];b&&(null===b.element&&b.initialize(this),this.noteFormElement.appendChild(b.element),this.noteFormElement.scrollTop=0,this.inputFields.extra=b.inputs,this.setNoteTypeImage(a))};NoteDialog.prototype.add=function(a){(new Note).addFromDialog(a,this.getGroup(a),this.data.saveOptions)};NoteDialog.prototype.getData=
function(){var a=DialogWithGroupInput.prototype.getData.apply(this,arguments);if(this.removedAttachments&&0<this.removedAttachments.length||this.addedAttachments&&0<this.addedAttachments.length){a.attacharraychanges={};var b=this.addedAttachments,c=a.attacharraychanges;if(b){for(var d=[],f=0,e=b.length;f<e;++f)d.push(b[f]._data);0<d.length&&(c.add=d)}b=this.removedAttachments;c=a.attacharraychanges;if(b){d=[];f=0;for(e=b.length;f<e;++f)d.push(b[f].getID());0<d.length&&(c.remove=d)}}return a};NoteDialog.prototype.close=
function(a){if(Dialog.prototype.close.apply(this,arguments)&&this.temporaryNoteTypeOptionValue){var b=this.temporaryNoteTypeOptionValue;this.inputFields.notetype.removeValue(this.temporaryNoteTypeOptionValue,Note.prototype.NOTE_TYPES.GENERIC);this.noteTypeOptions=this.noteTypeOptions.filter(function(a){return a.value!==b});delete this.noteForms[b];this.temporaryNoteTypeOptionValue=null}};var e=function(a,b){this.inputs=new DialogInput.NestedFields;this.inputsArray=[];if(a instanceof Array){this.inputsArray=
a;for(var c=0,d=a.length;c<d;++c){var f=a[c];this.inputs[f.field]=f}}this.$_element=this.element=null;this.additionalClasses=b};e.prototype.initialize=function(a){var b=["settings"];this.additionalClasses&&(b=b.concat(this.additionalClasses));this.element=LPTools.createElement("table",b);this.$_element=$(this.element);for(var b=LPTools.createElement("tbody"),c=0,d=this.inputsArray.length;c<d;++c){var f=this.inputsArray[c],e=f.build();e.setAttribute("class","settingsRow");b.appendChild(e);f.dialog=
a}LPTools.addZebraStriping(b);this.element.appendChild(b);Strings.translate(this.element)}})(document);