define(["durandal/system","durandal/app","durandal/composition","durandal/activator","durandal/viewEngine","jquery","knockout"],function(t,e,o,s,i,n,a){function r(e){return t.defer(function(o){t.isString(e)?t.acquire(e).then(function(e){o.resolve(t.resolveObject(e))}).fail(function(o){t.error("Failed to load dialog module ("+e+"). Details: "+o.message)}):o.resolve(e)}).promise()}var l,u={},d=a.observable(0),c=function(t,e,o,s,i){this.message=t,this.title=e||c.defaultTitle,this.options=o||c.defaultOptions,this.autoclose=s||!1,this.settings=n.extend({},c.defaultSettings,i)};return c.prototype.selectOption=function(t){l.close(this,t)},c.prototype.getView=function(){return i.processMarkup(c.defaultViewMarkup)},c.setViewUrl=function(t){delete c.prototype.getView,c.prototype.viewUrl=t},c.defaultTitle=e.title||"Application",c.defaultOptions=["Ok"],c.defaultSettings={buttonClass:"btn btn-default",primaryButtonClass:"btn-primary autofocus",secondaryButtonClass:"","class":"modal-content messageBox",style:null},c.setDefaults=function(t){n.extend(c.defaultSettings,t)},c.prototype.getButtonClass=function(t){var e="";return this.settings&&(this.settings.buttonClass&&(e=this.settings.buttonClass),0===t()&&this.settings.primaryButtonClass&&(e.length>0&&(e+=" "),e+=this.settings.primaryButtonClass),t()>0&&this.settings.secondaryButtonClass&&(e.length>0&&(e+=" "),e+=this.settings.secondaryButtonClass)),e},c.prototype.getClass=function(){return this.settings?this.settings["class"]:"messageBox"},c.prototype.getStyle=function(){return this.settings?this.settings.style:null},c.prototype.getButtonText=function(e){var o=n.type(e);return"string"===o?e:"object"===o?"string"===n.type(e.text)?e.text:(t.error("The object for a MessageBox button does not have a text property that is a string."),null):(t.error("Object for a MessageBox button is not a string or object but "+o+"."),null)},c.prototype.getButtonValue=function(e){var o=n.type(e);return"string"===o?e:"object"===o?"undefined"===n.type(e.value)?(t.error("The object for a MessageBox button does not have a value property defined."),null):e.value:(t.error("Object for a MessageBox button is not a string or object but "+o+"."),null)},c.defaultViewMarkup=['<div data-view="plugins/messageBox" data-bind="css: getClass(), style: getStyle()">','<div class="modal-header">','<h3 data-bind="html: title"></h3>',"</div>",'<div class="modal-body">','<p class="message" data-bind="html: message"></p>',"</div>",'<div class="modal-footer">',"<!-- ko foreach: options -->",'<button data-bind="click: function () { $parent.selectOption($parent.getButtonValue($data)); }, text: $parent.getButtonText($data), css: $parent.getButtonClass($index)"></button>',"<!-- /ko -->",'<div style="clear:both;"></div>',"</div>","</div>"].join("\n"),l={MessageBox:c,currentZIndex:1050,getNextZIndex:function(){return++this.currentZIndex},isOpen:a.computed(function(){return d()>0}),getContext:function(t){return u[t||"default"]},addContext:function(t,e){e.name=t,u[t]=e;var o="show"+t.substr(0,1).toUpperCase()+t.substr(1);this[o]=function(e,o){return this.show(e,o,t)}},createCompositionSettings:function(t,e){var o={model:t,activate:!1,transition:!1};return e.binding&&(o.binding=e.binding),e.attached&&(o.attached=e.attached),e.compositionComplete&&(o.compositionComplete=e.compositionComplete),o},getDialog:function(t){if(t)return t.__dialog__},close:function(t){var e=this.getDialog(t);if(e){var o=Array.prototype.slice.call(arguments,1);e.close.apply(e,o)}},show:function(e,i,n){var a=this,l=u[n||"default"];return t.defer(function(t){r(e).then(function(e){var n=s.create();n.activateItem(e,i).then(function(s){if(s){var i=e.__dialog__={owner:e,context:l,activator:n,close:function(){var o=arguments;n.deactivateItem(e,!0).then(function(s){s&&(d(d()-1),l.removeHost(i),delete e.__dialog__,0===o.length?t.resolve():1===o.length?t.resolve(o[0]):t.resolve.apply(t,o))})}};i.settings=a.createCompositionSettings(e,l),l.addHost(i),d(d()+1),o.compose(i.host,i.settings)}else t.resolve(!1)})})}).promise()},showMessage:function(e,o,s,i,n){return t.isString(this.MessageBox)?l.show(this.MessageBox,[e,o||c.defaultTitle,s||c.defaultOptions,i||!1,n||{}]):l.show(new this.MessageBox(e,o,s,i,n))},install:function(t){e.showDialog=function(t,e,o){return l.show(t,e,o)},e.closeDialog=function(){return l.close.apply(l,arguments)},e.showMessage=function(t,e,o,s,i){return l.showMessage(t,e,o,s,i)},t.messageBox&&(l.MessageBox=t.messageBox),t.messageBoxView&&(l.MessageBox.prototype.getView=function(){return i.processMarkup(t.messageBoxView)}),t.messageBoxViewUrl&&l.MessageBox.setViewUrl(t.messageBoxViewUrl)}},l.addContext("default",{blockoutOpacity:.2,removeDelay:200,minYMargin:5,minXMargin:5,addHost:function(t){var e=n("body"),o=n('<div class="modalBlockout"></div>').css({"z-index":l.getNextZIndex(),opacity:this.blockoutOpacity}).appendTo(e),s=n('<div class="modalHost"></div>').css({"z-index":l.getNextZIndex()}).appendTo(e);if(t.host=s.get(0),t.blockout=o.get(0),!l.isOpen()){t.oldBodyMarginRight=e.css("margin-right"),t.oldInlineMarginRight=e.get(0).style.marginRight;var i=n("html"),a=e.outerWidth(!0),r=i.scrollTop();n("html").css("overflow-y","hidden");var u=n("body").outerWidth(!0);e.css("margin-right",u-a+parseInt(t.oldBodyMarginRight,10)+"px"),i.scrollTop(r)}},removeHost:function(t){if(n(t.host).css("opacity",0),n(t.blockout).css("opacity",0),setTimeout(function(){a.removeNode(t.host),a.removeNode(t.blockout)},this.removeDelay),!l.isOpen()){var e=n("html"),o=e.scrollTop();e.css("overflow-y","").scrollTop(o),t.oldInlineMarginRight?n("body").css("margin-right",t.oldBodyMarginRight):n("body").css("margin-right","")}},attached:function(t){n(t).css("visibility","hidden")},compositionComplete:function(t,e,o){var s=l.getDialog(o.model),i=n(t),a=i.find("img").filter(function(){var t=n(this);return!(this.style.width&&this.style.height||t.attr("width")&&t.attr("height"))});i.data("predefinedWidth",i.get(0).style.width);var r=function(t,e){setTimeout(function(){var o=n(t);e.context.reposition(t),n(e.host).css("opacity",1),o.css("visibility","visible"),o.find(".autofocus").first().focus()},1)};r(t,s),a.load(function(){r(t,s)}),(i.hasClass("autoclose")||o.model.autoclose)&&n(s.blockout).click(function(){s.close()})},reposition:function(t){var e=n(t),o=n(window);e.data("predefinedWidth")||e.css({width:""}),e.css({height:""});var s=e.outerWidth(!1),i=e.outerHeight(!1),a=o.height()-2*this.minYMargin,r=o.width()-2*this.minXMargin,l=Math.min(i,a),u=Math.min(s,r);e.css({"margin-top":(-l/2).toString()+"px","margin-left":(-u/2).toString()+"px"}),i>a?e.css("overflow-y","auto").outerHeight(a):e.css({"overflow-y":"",height:""}),s>r?e.css("overflow-x","auto").outerWidth(r):(e.css("overflow-x",""),e.data("predefinedWidth")?e.css("width",e.data("predefinedWidth")):e.outerWidth(u))}}),l});
//# sourceMappingURL=../../maps/durandal/plugins/dialog.js.map
