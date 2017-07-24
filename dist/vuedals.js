/*!
 *  Vuedals plugin v1.3.1
 * 
 *  Multiple event based modal windows, with a single component
 * 
 *  This is a plugin to open any number of modal windows without having to attach them to the DOM
 *  @author Javis Perez <javisperez@gmail.com>
 *  https://github.com/javisperez/vuedals
 *  Released under the MIT License.
 */
!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("Vuedals",[],factory):"object"==typeof exports?exports.Vuedals=factory():root.Vuedals=factory()}(this,function(){/******/
return function(modules){/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
exports:{},/******/
id:moduleId,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([/* 0 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Component=exports.Bus=void 0;var _bus=__webpack_require__(1),_bus2=_interopRequireDefault(_bus),_component=__webpack_require__(22),_component2=_interopRequireDefault(_component);exports.default={install:function(Vue){Vue.prototype.$vuedals=new Vue({name:"$vuedals",created:function(){var _this=this;_bus2.default.$on("opened",function(data){_this.$emit("vuedals:opened",data)}),_bus2.default.$on("closed",function(data){_this.$emit("vuedals:closed",data)}),_bus2.default.$on("destroyed",function(data){_this.$emit("vuedals:destroyed",data)}),this.$on("new",function(options){_this.open(options)}),this.$on("close",function(data){_this.close(data)})},methods:{open:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_bus2.default.$emit("new",options)},close:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_bus2.default.$emit("close",data)}}}),Vue.mixin({created:function(){this.$on("vuedals:new",function(options){_bus2.default.$emit("new",options)}),this.$on("vuedals:close",function(data){_bus2.default.$emit("close",data)})}})}},exports.Bus=_bus2.default,exports.Component=_component2.default},/* 1 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__(2),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(3),_createClass3=_interopRequireDefault(_createClass2),instance=null,EventBus=function(){function EventBus(){return(0,_classCallCheck3.default)(this,EventBus),instance||(this.events={},instance=this),instance}return(0,_createClass3.default)(EventBus,[{key:"$emit",value:function(event,message){if(this.events[event])for(var callbacks=this.events[event],i=0,l=callbacks.length;i<l;i++){var callback=callbacks[i];callback.call(this,message)}}},{key:"$on",value:function(event,callback){this.events[event]||(this.events[event]=[]),this.events[event].push(callback)}}]),EventBus}();exports.default=new EventBus},/* 2 */
/***/
function(module,exports){"use strict";exports.__esModule=!0,exports.default=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}},/* 3 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _defineProperty=__webpack_require__(4),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),(0,_defineProperty2.default)(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}()},/* 4 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(5),__esModule:!0}},/* 5 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(6);var $Object=__webpack_require__(9).Object;module.exports=function(it,key,desc){return $Object.defineProperty(it,key,desc)}},/* 6 */
/***/
function(module,exports,__webpack_require__){var $export=__webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!__webpack_require__(17),"Object",{defineProperty:__webpack_require__(13).f})},/* 7 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(8),core=__webpack_require__(9),ctx=__webpack_require__(10),hide=__webpack_require__(12),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)
// contains in native
own=!IS_FORCED&&target&&void 0!==target[key],own&&key in exports||(
// export native or passed
out=own?target[key]:source[key],
// prevent global pollution for namespaces
exports[key]=IS_GLOBAL&&"function"!=typeof target[key]?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C;case 1:return new C(a);case 2:return new C(a,b)}return new C(a,b,c)}return C.apply(this,arguments)};return F[PROTOTYPE]=C[PROTOTYPE],F}(out):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
IS_PROTO&&((exports.virtual||(exports.virtual={}))[key]=out,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
type&$export.R&&expProto&&!expProto[key]&&hide(expProto,key,out)))};
// type bitmap
$export.F=1,// forced
$export.G=2,// global
$export.S=4,// static
$export.P=8,// proto
$export.B=16,// bind
$export.W=32,// wrap
$export.U=64,// safe
$export.R=128,// real proto method for `library` 
module.exports=$export},/* 8 */
/***/
function(module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},/* 9 */
/***/
function(module,exports){var core=module.exports={version:"2.4.0"};"number"==typeof __e&&(__e=core)},/* 10 */
/***/
function(module,exports,__webpack_require__){
// optional / simple context binding
var aFunction=__webpack_require__(11);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},/* 11 */
/***/
function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},/* 12 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(13),createDesc=__webpack_require__(21);module.exports=__webpack_require__(17)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},/* 13 */
/***/
function(module,exports,__webpack_require__){var anObject=__webpack_require__(14),IE8_DOM_DEFINE=__webpack_require__(16),toPrimitive=__webpack_require__(20),dP=Object.defineProperty;exports.f=__webpack_require__(17)?Object.defineProperty:function(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},/* 14 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(15);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},/* 15 */
/***/
function(module,exports){module.exports=function(it){return"object"==typeof it?null!==it:"function"==typeof it}},/* 16 */
/***/
function(module,exports,__webpack_require__){module.exports=!__webpack_require__(17)&&!__webpack_require__(18)(function(){return 7!=Object.defineProperty(__webpack_require__(19)("div"),"a",{get:function(){return 7}}).a})},/* 17 */
/***/
function(module,exports,__webpack_require__){
// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 18 */
/***/
function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},/* 19 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(15),document=__webpack_require__(8).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},/* 20 */
/***/
function(module,exports,__webpack_require__){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(15);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},/* 21 */
/***/
function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},/* 22 */
/***/
function(module,exports,__webpack_require__){/* styles */
__webpack_require__(23);var Component=__webpack_require__(27)(/* script */
__webpack_require__(28),/* template */
__webpack_require__(51),/* scopeId */
null,/* cssModules */
null);module.exports=Component.exports},/* 23 */
/***/
function(module,exports,__webpack_require__){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(24);"string"==typeof content&&(content=[[module.id,content,""]]);
// add the styles to the DOM
__webpack_require__(26)(content,{});content.locals&&(module.exports=content.locals)},/* 24 */
/***/
function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(25)(),
// imports
// module
exports.push([module.id,'.vuedals{background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0;right:0;bottom:0;z-index:1050;overflow-x:hidden;overflow-y:auto;perspective:500px;transition:opacity .4s ease}.vuedal{background:#fff;box-shadow:3px 5px 20px #333;padding:20px;margin:30px 0;transition:all .6s ease;position:absolute;left:50%;transform:translateX(-50%);will-change:transform;width:650px}.vuedal.xl{width:1024px}.vuedal.lg{width:850px}.vuedal.sm{width:550px}.vuedal.xs{width:350px}.vuedal.disabled{opacity:.2}.vuedal.disabled:after{background:transparent;content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:100}.vuedal header{border-bottom:1px solid #eee;min-height:32px;margin-bottom:20px}.vuedal header .title{font-size:21px;font-weight:100}.vuedal header .close{float:right;font-size:26px;font-weight:100;line-height:21px;cursor:pointer}.vuedal-enter,.vuedal-leave-active{opacity:0}.vuedal-enter .vuedal,.vuedal-leave-active .vuedal{opacity:0;transform:translateX(-50%) translateY(-30px) scale(.95)}',""])},/* 25 */
/***/
function(module,exports){/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
// css base code, injected by the css-loader
module.exports=function(){var list=[];
// return the list of modules as css string
// import a list of modules into the list
return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},/* 26 */
/***/
function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media&&styleElement.setAttribute("media",media),sourceMap&&(
// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+="\n/*# sourceURL="+sourceMap.sources[0]+" */",
// http://stackoverflow.com/a/26603875
css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},
// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),
// By default, add <style> tags to the bottom of <head>.
"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},/* 27 */
/***/
function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);
// Vue.extend constructor export interop
var options="function"==typeof scriptExports?scriptExports.options:scriptExports;
// inject cssModules
if(
// render functions
compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),
// scopedId
scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},/* 28 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _assign=__webpack_require__(29),_assign2=_interopRequireDefault(_assign),_bus=__webpack_require__(1),_bus2=_interopRequireDefault(_bus);exports.default={name:"vuedals",created:function(){var _this=this;_bus2.default.$on("new",function(options){var defaults={title:null,dismisable:!0,name:"",size:"md",onClose:function(){},onDismiss:function(){}};options=(0,_assign2.default)(defaults,options),_this.vuedals.push(options),_bus2.default.$emit("opened",{index:_this.vuedals.length-1,options:options}),document.querySelector(".vuedals").scrollTop=0}),_bus2.default.$on("close",function(data){return _this.close(data)}),_bus2.default.$on("dismiss",function(_){return _this.dismiss()})},data:function(){return{vuedals:[]}},methods:{splice:function(index){return 0===index&&_bus2.default.$emit("destroyed"),index?void(index!==-1&&this.vuedals.splice(index,1)):void this.vuedals.pop()},close:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,index=this.vuedals.length-1;_bus2.default.$emit("closed",{index:index,instance:this.vuedals[index],data:data}),this.vuedals[index].onClose(data),this.splice(index),document.querySelector(".vuedals").scrollTop=0},dismiss:function(){var index=this.vuedals.length-1;_bus2.default.$emit("dismissed",{index:index,instance:this.vuedals[index]}),this.vuedals[index].onDismiss(),this.splice(index),document.querySelector(".vuedals").scrollTop=0},getCssClasses:function(index){var vuedal=this.vuedals[index],classNames=vuedal.name+" "+vuedal.size;return index<this.$last&&(classNames+=" disabled"),classNames}},computed:{$last:function(){return this.vuedals.length-1}}}},/* 29 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(30),__esModule:!0}},/* 30 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(31),module.exports=__webpack_require__(9).Object.assign},/* 31 */
/***/
function(module,exports,__webpack_require__){
// 19.1.3.1 Object.assign(target, source)
var $export=__webpack_require__(7);$export($export.S+$export.F,"Object",{assign:__webpack_require__(32)})},/* 32 */
/***/
function(module,exports,__webpack_require__){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys=__webpack_require__(33),gOPS=__webpack_require__(48),pIE=__webpack_require__(49),toObject=__webpack_require__(50),IObject=__webpack_require__(37),$assign=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
module.exports=!$assign||__webpack_require__(18)(function(){var A={},B={},S=Symbol(),K="abcdefghijklmnopqrst";return A[S]=7,K.split("").forEach(function(k){B[k]=k}),7!=$assign({},A)[S]||Object.keys($assign({},B)).join("")!=K})?function(target,source){for(// eslint-disable-line no-unused-vars
var T=toObject(target),aLen=arguments.length,index=1,getSymbols=gOPS.f,isEnum=pIE.f;aLen>index;)for(var key,S=IObject(arguments[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0;length>j;)isEnum.call(S,key=keys[j++])&&(T[key]=S[key]);return T}:$assign},/* 33 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(34),enumBugKeys=__webpack_require__(47);module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},/* 34 */
/***/
function(module,exports,__webpack_require__){var has=__webpack_require__(35),toIObject=__webpack_require__(36),arrayIndexOf=__webpack_require__(40)(!1),IE_PROTO=__webpack_require__(44)("IE_PROTO");module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key);
// Don't enum bug & hidden keys
for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result}},/* 35 */
/***/
function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},/* 36 */
/***/
function(module,exports,__webpack_require__){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(37),defined=__webpack_require__(39);module.exports=function(it){return IObject(defined(it))}},/* 37 */
/***/
function(module,exports,__webpack_require__){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(38);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},/* 38 */
/***/
function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},/* 39 */
/***/
function(module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},/* 40 */
/***/
function(module,exports,__webpack_require__){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(36),toLength=__webpack_require__(41),toIndex=__webpack_require__(43);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toIndex(fromIndex,length);
// Array#includes uses SameValueZero equality algorithm
if(IS_INCLUDES&&el!=el){for(;length>index;)if(value=O[index++],value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}}},/* 41 */
/***/
function(module,exports,__webpack_require__){
// 7.1.15 ToLength
var toInteger=__webpack_require__(42),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},/* 42 */
/***/
function(module,exports){
// 7.1.4 ToInteger
var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},/* 43 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(42),max=Math.max,min=Math.min;module.exports=function(index,length){return index=toInteger(index),index<0?max(index+length,0):min(index,length)}},/* 44 */
/***/
function(module,exports,__webpack_require__){var shared=__webpack_require__(45)("keys"),uid=__webpack_require__(46);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},/* 45 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(8),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}},/* 46 */
/***/
function(module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},/* 47 */
/***/
function(module,exports){
// IE 8- don't enum bug keys
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 48 */
/***/
function(module,exports){exports.f=Object.getOwnPropertySymbols},/* 49 */
/***/
function(module,exports){exports.f={}.propertyIsEnumerable},/* 50 */
/***/
function(module,exports,__webpack_require__){
// 7.1.13 ToObject(argument)
var defined=__webpack_require__(39);module.exports=function(it){return Object(defined(it))}},/* 51 */
/***/
function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("transition",{attrs:{tag:"div",name:"vuedal"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.vuedals.length,expression:"vuedals.length"}],staticClass:"vuedals"},_vm._l(_vm.vuedals,function(vuedal,index){return _c("div",{key:index,staticClass:"vuedal",class:_vm.getCssClasses(index)},[!vuedal.title&&!vuedal.dismisable||vuedal.header?_vm._e():_c("header",[_c("span",{staticClass:"title"},[_vm._v(_vm._s(vuedal.title))]),_vm._v(" "),vuedal.dismisable?_c("span",{staticClass:"close",on:{click:function($event){_vm.dismiss()}}},[_vm._v("×")]):_vm._e()]),_vm._v(" "),vuedal.header?_c("header",[_c(vuedal.header.component,_vm._b({tag:"component"},"component",vuedal.header.props))],1):_vm._e(),_vm._v(" "),_c(vuedal.component,_vm._b({tag:"component"},"component",vuedal.props))],1)}))])},staticRenderFns:[]}}])});