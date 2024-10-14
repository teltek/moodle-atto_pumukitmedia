YUI.add("moodle-atto_pumukitmedia-button",function(i,e){var l="atto_pumukitmedia",s="pumukitmedia_flavor",o={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",FLAVORCONTROL:"flavorcontrol"},t=".flavorcontrol",n='<ul class="root nav nav-tabs" role="tablist">',d='<div class="root tab-content">';n+='<li class="nav-item"><a class="nav-link" href="#{{elementid}}_upload" role="tab" data-toggle="tab">{{button_upload}}</a></li>',d+='<div class="tab-pane" id="{{elementid}}_upload"><iframe class="custom-tab-content" src="{{PUMUKITURL}}/openedx/sso/upload?hash={{HASH}}&username={{USERNAME}}&email={{EMAIL}}&lang=en" allowfullscreen allow="microphone; camera; display-capture; clipboard-write"></iframe></div>',i.namespace("M.atto_pumukitmedia").Button=i.Base.create("button",i.M.editor_atto.EditorPlugin,[],{_receiveMessageBind:null,initializer:function(){var e,t;this.get("disabled")||!this.get("capability")||(this.addButton({icon:"e/insert_edit_video",buttonName:"pumukitmedia",callback:this._displayDialogue,callbackArgs:"iconone"}),e="pumukitmedia_iframe_sso",document.getElementById(e))||((t=document.createElement("iframe")).id=e,t.style.display="none",t.src=this.get("pumukitmediaurl")+"/openedx/sso/manager?hash="+this.get("hash")+"&username="+this.get("username")+"&email="+this.get("email")+"&lang=en",t.allow="microphone; camera; display-capture; clipboard-write",document.getElementsByTagName("body")[0].appendChild(t))},_getFlavorControlName:function(){return this.get("host").get("elementid")+"_"+s},_displayDialogue:function(e,t){var a;e.preventDefault(),this._receiveMessageBind=this._receiveMessage.bind(this),window.addEventListener("message",this._receiveMessageBind),"900px"!==(e=this.getDialogue({headerContent:this.get("dialogtitle"),widht:"70%",focusAfterHide:t})).width&&(e.set("width","900px"),e.set("max-width","550px")),t=this._getFormContent(t),(a=i.Node.create("<div></div>")).append(t),e.set("bodyContent",a),e.show(),this.markUpdated(),(t=document.getElementsByClassName("closebutton"))[0]&&t[0].addEventListener("click",this._closeSharedWindow)},_getFormContent:function(e){var t=n,a=d;return"0"!==this.get("showpr")&&(t+='<li class="nav-item"><a class="nav-link" href="#{{elementid}}_personal_recorder" role="tab" data-toggle="tab">{{button_pr}}</a></li>',a+='<div data-medium-type="personal_recorder" class="tab-pane" id="{{elementid}}_personal_recorder"><iframe class="custom-tab-content" id="pumukitmedia_iframe_recorder" src="{{PUMUKITURL}}/openedx/sso/personal_recorder?hash={{HASH}}&username={{USERNAME}}&email={{EMAIL}}&lang=en" allowfullscreen allow="microphone; camera; display-capture; clipboard-write"></iframe></div>'),t+='<li class="nav-item"><a class="nav-link active" href="#{{elementid}}_manager" role="tab" data-toggle="tab">{{button_myvideos}}</a></li>',a+='<div class="tab-pane active" id="{{elementid}}_manager"><iframe class="custom-tab-content" src="{{PUMUKITURL}}/openedx/sso/manager?hash={{HASH}}&username={{USERNAME}}&email={{EMAIL}}&lang=en" allowfullscreen  allow="microphone; camera; display-capture; clipboard-write"></iframe></div>',"0"!==this.get("showplaylist")&&(t+='<li class="nav-item"><a class="nav-link" href="#{{elementid}}_playlists" role="tab" data-toggle="tab">{{button_playlists}}</a></li>',a+='<div class="tab-pane" id="{{elementid}}_playlists"><iframe class="custom-tab-content" src="{{PUMUKITURL}}/openedx/sso/manager?hash={{HASH}}&username={{USERNAME}}&email={{EMAIL}}&lang=en&playlist=true" allowfullscreen allow="microphone; camera; display-capture; clipboard-write"></iframe></div>'),"0"!==this.get("showsharedvideos")&&(t+='<li class="nav-item"><a class="nav-link" href="#{{elementid}}_public" role="tab" data-toggle="tab">{{button_sharevideos}}</a></li>',a+='<div class="tab-pane" id="{{elementid}}_public"><iframe class="custom-tab-content" src="{{PUMUKITURL}}/openedx/search/public/multimediaobjects" allowfullscreen allow="microphone; camera; display-capture; clipboard-write"></iframe></div>'),a=i.Handlebars.compile(t=t+"</ul>"+(a+='</div><form class="atto_form"><input class="{{CSS.FLAVORCONTROL}}" id="{{elementid}}_{{FLAVORCONTROL}}" name="{{elementid}}_{{FLAVORCONTROL}}" value="{{defaultflavor}}" type="hidden" /></form>')),t=i.Node.create(a({elementid:this.get("host").get("elementid"),CSS:o,FLAVORCONTROL:s,PUMUKITURL:this.get("pumukitmediaurl"),HASH:this.get("hash"),USERNAME:this.get("username"),EMAIL:this.get("email"),CAPABILITY:this.get("capability"),PASSWORD:this.get("password"),DATE:this.get("date"),DEBUG:this.get("enabledebugmode"),component:l,defaultflavor:this.get("defaultflavor"),clickedicon:e,button_upload:M.util.get_string("button_upload",l),button_pr:M.util.get_string("button_pr",l),button_myvideos:M.util.get_string("button_myvideos",l),button_playlists:M.util.get_string("button_playlists",l),button_sharevideos:M.util.get_string("button_sharevideos",l)})),1==this.get("enabledebugmode")&&(console.log("URL: "+this.get("pumukitmediaurl")),console.log("Date: "+this.get("date")),console.log("Hash: "+this.get("hash")),console.log("User: "+this.get("username")),console.log("Email: "+this.get("email")),console.log("Pwd: "+this.get("password"))),this._form=t},_doInsert:function(e){e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();e=this._form.one(t);e.get("value")&&(this.editor.focus(),this.get("host").insertContentAtFocusPoint(e.get("value")),this.markUpdated())},_receiveMessage:function(e){var t;"enableMoodlePRAdd?"===e.data&&e.source.postMessage({moodlepradd:"OK"},"*"),(e.data.mmId||e.data.playlist||e.data.url)&&(e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),this._closeSharedWindow(e),e.data.mmId||e.data.playlist||e.data.url)&&(window.removeEventListener("message",this._receiveMessageBind),this.editor.focus(),t=this.get("pumukitmediaurl")+"/openedx/openedx/embed/"+e.data.mmId,e.data.playlist?t=this.get("pumukitmediaurl")+"/openedx/openedx/playlist/embed/"+e.data.playlist:e.data.url&&(t=e.data.url),
e='<div class="embed-responsive embed-responsive-16by9 tv-iframe"><iframe class="embed-responsive-item tv-iframe-item" src="'+t+'" allowfullscreen allow="microphone; camera; display-capture; clipboard-write"></iframe><span style="display: none;">Video</span></div>',this.get("host").insertContentAtFocusPoint(e),this.markUpdated())},_closeSharedWindow:function(){var e=document.getElementById("pumukitmedia_iframe_recorder");e.parentNode.removeChild(e)}},{ATTRS:{pumukitmediaurl:{value:""},hash:{value:""},username:{value:""},email:{value:""},dialogtitle:{value:""},showpr:{value:""},showplaylist:{value:""},showsharedvideos:{value:""},capability:{value:""},password:{value:""},date:{value:""},enabledebugmode:{value:""}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});