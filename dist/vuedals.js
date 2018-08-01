/*!
 *  Vuedals plugin v1.7.0
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
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Component=exports.Bus=void 0;var _bus=__webpack_require__(1),_bus2=_interopRequireDefault(_bus),_component=__webpack_require__(23),_component2=_interopRequireDefault(_component);exports.default={install:function(Vue){Vue.prototype.$vuedals=new Vue({name:"$vuedals",created:function(){var _this=this;_bus2.default.$on("opened",function(data){_this.$emit("vuedals:opened",data)}),_bus2.default.$on("closed",function(data){_this.$emit("vuedals:closed",data)}),_bus2.default.$on("destroyed",function(data){_this.$emit("vuedals:destroyed",data)}),this.$on("new",function(options){_this.open(options)}),this.$on("close",function(data){_this.close(data)}),this.$on("dismiss",function(index){_this.dismiss(index||null)})},methods:{open:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_bus2.default.$emit("new",options)},close:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_bus2.default.$emit("close",data)},dismiss:function(){var index=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_bus2.default.$emit("dismiss",index)}}}),Vue.mixin({created:function(){this.$on("vuedals:new",function(options){_bus2.default.$emit("new",options)}),this.$on("vuedals:close",function(data){_bus2.default.$emit("close",data)}),this.$on("vuedals:dismiss",function(index){_bus2.default.$emit("dismiss",index)})}})}},exports.Bus=_bus2.default,exports.Component=_component2.default},/* 1 */
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
function(module,exports,__webpack_require__){var global=__webpack_require__(8),core=__webpack_require__(9),ctx=__webpack_require__(10),hide=__webpack_require__(12),has=__webpack_require__(22),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)
// contains in native
own=!IS_FORCED&&target&&void 0!==target[key],own&&has(exports,key)||(
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
function(module,exports){var core=module.exports={version:"2.5.7"};"number"==typeof __e&&(__e=core)},/* 10 */
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
function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},/* 23 */
/***/
function(module,exports,__webpack_require__){/* styles */
__webpack_require__(24);var Component=__webpack_require__(29)(/* script */
__webpack_require__(30),/* template */
__webpack_require__(78),/* scopeId */
null,/* cssModules */
null);module.exports=Component.exports},/* 24 */
/***/
function(module,exports,__webpack_require__){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(25);"string"==typeof content&&(content=[[module.id,content,""]]),content.locals&&(module.exports=content.locals);
// add the styles to the DOM
__webpack_require__(27)("e65878ce",content,!0)},/* 25 */
/***/
function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(26)(),
// imports
// module
exports.push([module.id,'body.vuedal-open{overflow:hidden}.vuedals{background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0;right:0;bottom:0;z-index:1050;overflow-x:hidden;overflow-y:auto;perspective:500px;transition:opacity .4s ease}.vuedal{background:#fff;box-shadow:3px 5px 20px #333;padding:20px;margin:30px 0;transition:all .6s ease;position:absolute;left:50%;transform:translateX(-50%);will-change:transform;width:95%;max-width:650px}.vuedal.xl{max-width:1024px}.vuedal.lg{max-width:850px}.vuedal.sm{max-width:550px}.vuedal.xs{max-width:350px}.vuedal.disabled{opacity:.2}.vuedal.disabled:after{background:transparent;content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:100}.vuedal header{border-bottom:1px solid #eee;min-height:32px;margin-bottom:20px}.vuedal header .title{font-size:21px;font-weight:100}.vuedal header .close{float:right;font-size:26px;font-weight:100;line-height:21px}.vuedal-enter,.vuedal-leave-active{opacity:0}.vuedal-enter .vuedal,.vuedal-leave-active .vuedal{opacity:0;transform:translateX(-50%) translateY(-30px) scale(.95)}',""])},/* 26 */
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
"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},/* 27 */
/***/
function(module,exports,__webpack_require__){function addStylesToDom(styles){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j]));domStyle.parts.length>item.parts.length&&(domStyle.parts.length=item.parts.length)}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j]));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function createStyleElement(){var styleElement=document.createElement("style");return styleElement.type="text/css",head.appendChild(styleElement),styleElement}function addStyle(obj){var update,remove,styleElement=document.querySelector('style[data-vue-ssr-id~="'+obj.id+'"]');if(styleElement){if(isProduction)
// has SSR styles and in production mode.
// simply do nothing.
return noop;
// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
styleElement.parentNode.removeChild(styleElement)}if(isOldIE){
// use singleton mode for IE9.
var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement()),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else
// use multi-style-tag mode in all other cases
styleElement=createStyleElement(),update=applyToTag.bind(null,styleElement),remove=function(){styleElement.parentNode.removeChild(styleElement)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media&&styleElement.setAttribute("media",media),sourceMap&&(
// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+="\n/*# sourceURL="+sourceMap.sources[0]+" */",
// http://stackoverflow.com/a/26603875
css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
var hasDocument="undefined"!=typeof document,listToStyles=__webpack_require__(28),stylesInDom={},head=hasDocument&&(document.head||document.getElementsByTagName("head")[0]),singletonElement=null,singletonCounter=0,isProduction=!1,noop=function(){},isOldIE="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction){isProduction=_isProduction;var styles=listToStyles(parentId,list);return addStylesToDom(styles),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}newList?(styles=listToStyles(parentId,newList),addStylesToDom(styles)):styles=[];for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},/* 28 */
/***/
function(module,exports){/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
module.exports=function(parentId,list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={id:parentId+":"+i,css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}},/* 29 */
/***/
function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);
// Vue.extend constructor export interop
var options="function"==typeof scriptExports?scriptExports.options:scriptExports;
// inject cssModules
if(
// render functions
compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),
// scopedId
scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},/* 30 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray2=__webpack_require__(31),_slicedToArray3=_interopRequireDefault(_slicedToArray2),_getIterator2=__webpack_require__(68),_getIterator3=_interopRequireDefault(_getIterator2),_assign=__webpack_require__(72),_assign2=_interopRequireDefault(_assign),_bus=__webpack_require__(1),_bus2=_interopRequireDefault(_bus);exports.default={name:"vuedals",created:function(){var _this=this;_bus2.default.$on("new",function(options){var defaults={title:null,dismissable:!0,name:"",size:"md",escapable:!1,closeOnBackdrop:!0,onClose:function(){},onDismiss:function(){}};options=(0,_assign2.default)(defaults,options),_this.vuedals.push(options),_bus2.default.$emit("opened",{index:_this.$last,options:options}),_this.body.classList.add("vuedal-open"),document.querySelector(".vuedals").scrollTop=0}),_bus2.default.$on("close",function(data){var index=null;if(data&&data.$index&&(index=data.$index),data&&data._isVue){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=(0,_getIterator3.default)(_this.$refs.components.entries());!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var _step$value=(0,_slicedToArray3.default)(_step.value,2),idx=_step$value[0],vuedal=_step$value[1];if(data===vuedal){index=idx;break}}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}null===index&&(index=_this.$last),_this.close(data,index)}),_bus2.default.$on("dismiss",function(index){null===index&&(index=_this.$last),_this.dismiss(index)})},data:function(){return{vuedals:[]}},methods:{splice:function(){var index=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;index!==-1&&this.vuedals.length&&(null===index?this.vuedals.pop():this.vuedals.splice(index,1),this.vuedals.length||(this.body.classList.remove("vuedal-open"),_bus2.default.$emit("destroyed")))},doClose:function(){var index=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,arguments[1]);if(this.vuedals.length&&this.vuedals[index]){this.splice(index);var vuedals=document.querySelector(".vuedals");vuedals&&(vuedals.scrollTop=0)}},close:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,index=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0!==this.vuedals.length){var localIndex=index;index&&"function"==typeof index&&(localIndex=index(data,this.vuedals)),"number"!=typeof localIndex&&(localIndex=this.$last),_bus2.default.$emit("closed",{index:localIndex,instance:this.vuedals[index],data:data}),localIndex!==!1&&this.vuedals[localIndex]&&this.vuedals[localIndex].onClose(data),this.doClose(data,localIndex)}},dismiss:function(){var index=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(0!==this.vuedals.length){var localIndex=index;index&&"function"==typeof index&&(localIndex=index(this.$last)),"number"!=typeof localIndex&&(localIndex=this.$last),this.vuedals[localIndex].onDismiss()!==!1&&(_bus2.default.$emit("dismissed",{index:localIndex,instance:this.vuedals[localIndex]}),this.doClose(null,localIndex))}},getCssClasses:function(index){var vuedal=this.vuedals[index],classNames=vuedal.name+" "+vuedal.size;return index<this.$last&&(classNames+=" disabled"),classNames},handleEscapeKey:function(e){this.vuedals.length&&this.current.escapable&&this.dismiss()},handleBackdropClick:function(){this.vuedals.length&&this.current.closeOnBackdrop===!0&&this.dismiss()}},computed:{current:function(){return this.vuedals[this.$last]},$last:function(){return this.vuedals.length-1},body:function(){if("undefined"!=typeof document)return document.querySelector("body")}}}},/* 31 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _isIterable2=__webpack_require__(32),_isIterable3=_interopRequireDefault(_isIterable2),_getIterator2=__webpack_require__(68),_getIterator3=_interopRequireDefault(_getIterator2);exports.default=function(){function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=(0,_getIterator3.default)(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i.return&&_i.return()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr))return arr;if((0,_isIterable3.default)(Object(arr)))return sliceIterator(arr,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},/* 32 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(33),__esModule:!0}},/* 33 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(34),__webpack_require__(64),module.exports=__webpack_require__(66)},/* 34 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(35);for(var global=__webpack_require__(8),hide=__webpack_require__(12),Iterators=__webpack_require__(38),TO_STRING_TAG=__webpack_require__(61)("toStringTag"),DOMIterables="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<DOMIterables.length;i++){var NAME=DOMIterables[i],Collection=global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&hide(proto,TO_STRING_TAG,NAME),Iterators[NAME]=Iterators.Array}},/* 35 */
/***/
function(module,exports,__webpack_require__){"use strict";var addToUnscopables=__webpack_require__(36),step=__webpack_require__(37),Iterators=__webpack_require__(38),toIObject=__webpack_require__(39);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports=__webpack_require__(43)(Array,"Array",function(iterated,kind){this._t=toIObject(iterated),// target
this._i=0,// next index
this._k=kind},function(){var O=this._t,kind=this._k,index=this._i++;return!O||index>=O.length?(this._t=void 0,step(1)):"keys"==kind?step(0,index):"values"==kind?step(0,O[index]):step(0,[index,O[index]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments=Iterators.Array,addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries")},/* 36 */
/***/
function(module,exports){module.exports=function(){}},/* 37 */
/***/
function(module,exports){module.exports=function(done,value){return{value:value,done:!!done}}},/* 38 */
/***/
function(module,exports){module.exports={}},/* 39 */
/***/
function(module,exports,__webpack_require__){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(40),defined=__webpack_require__(42);module.exports=function(it){return IObject(defined(it))}},/* 40 */
/***/
function(module,exports,__webpack_require__){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(41);
// eslint-disable-next-line no-prototype-builtins
module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},/* 41 */
/***/
function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},/* 42 */
/***/
function(module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},/* 43 */
/***/
function(module,exports,__webpack_require__){"use strict";var LIBRARY=__webpack_require__(44),$export=__webpack_require__(7),redefine=__webpack_require__(45),hide=__webpack_require__(12),Iterators=__webpack_require__(38),$iterCreate=__webpack_require__(46),setToStringTag=__webpack_require__(60),getPrototypeOf=__webpack_require__(62),ITERATOR=__webpack_require__(61)("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var methods,key,IteratorPrototype,getMethod=function(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function(){return new Constructor(this,kind)};case VALUES:return function(){return new Constructor(this,kind)}}return function(){return new Constructor(this,kind)}},TAG=NAME+" Iterator",DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=!1,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?DEF_VALUES?getMethod("entries"):$default:void 0,$anyNative="Array"==NAME?proto.entries||$native:$native;if(
// Fix native
$anyNative&&(IteratorPrototype=getPrototypeOf($anyNative.call(new Base)),IteratorPrototype!==Object.prototype&&IteratorPrototype.next&&(
// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,!0),
// fix for some old engines
LIBRARY||"function"==typeof IteratorPrototype[ITERATOR]||hide(IteratorPrototype,ITERATOR,returnThis))),
// fix Array#{values, @@iterator}.name in V8 / FF
DEF_VALUES&&$native&&$native.name!==VALUES&&(VALUES_BUG=!0,$default=function(){return $native.call(this)}),
// Define iterator
LIBRARY&&!FORCED||!BUGGY&&!VALUES_BUG&&proto[ITERATOR]||hide(proto,ITERATOR,$default),
// Plug for library
Iterators[NAME]=$default,Iterators[TAG]=returnThis,DEFAULT)if(methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries},FORCED)for(key in methods)key in proto||redefine(proto,key,methods[key]);else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);return methods}},/* 44 */
/***/
function(module,exports){module.exports=!0},/* 45 */
/***/
function(module,exports,__webpack_require__){module.exports=__webpack_require__(12)},/* 46 */
/***/
function(module,exports,__webpack_require__){"use strict";var create=__webpack_require__(47),descriptor=__webpack_require__(21),setToStringTag=__webpack_require__(60),IteratorPrototype={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype,__webpack_require__(61)("iterator"),function(){return this}),module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)}),setToStringTag(Constructor,NAME+" Iterator")}},/* 47 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=__webpack_require__(14),dPs=__webpack_require__(48),enumBugKeys=__webpack_require__(58),IE_PROTO=__webpack_require__(55)("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){
// Thrash, waste and sodomy: IE GC bug
var iframeDocument,iframe=__webpack_require__(19)("iframe"),i=enumBugKeys.length,lt="<",gt=">";for(iframe.style.display="none",__webpack_require__(59).appendChild(iframe),iframe.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document,iframeDocument.open(),iframeDocument.write(lt+"script"+gt+"document.F=Object"+lt+"/script"+gt),iframeDocument.close(),createDict=iframeDocument.F;i--;)delete createDict[PROTOTYPE][enumBugKeys[i]];return createDict()};module.exports=Object.create||function(O,Properties){var result;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==O?(Empty[PROTOTYPE]=anObject(O),result=new Empty,Empty[PROTOTYPE]=null,result[IE_PROTO]=O):result=createDict(),void 0===Properties?result:dPs(result,Properties)}},/* 48 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(13),anObject=__webpack_require__(14),getKeys=__webpack_require__(49);module.exports=__webpack_require__(17)?Object.defineProperties:function(O,Properties){anObject(O);for(var P,keys=getKeys(Properties),length=keys.length,i=0;length>i;)dP.f(O,P=keys[i++],Properties[P]);return O}},/* 49 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(50),enumBugKeys=__webpack_require__(58);module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},/* 50 */
/***/
function(module,exports,__webpack_require__){var has=__webpack_require__(22),toIObject=__webpack_require__(39),arrayIndexOf=__webpack_require__(51)(!1),IE_PROTO=__webpack_require__(55)("IE_PROTO");module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key);
// Don't enum bug & hidden keys
for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result}},/* 51 */
/***/
function(module,exports,__webpack_require__){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(39),toLength=__webpack_require__(52),toAbsoluteIndex=__webpack_require__(54);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toAbsoluteIndex(fromIndex,length);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el){for(;length>index;)
// eslint-disable-next-line no-self-compare
if(value=O[index++],value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}}},/* 52 */
/***/
function(module,exports,__webpack_require__){
// 7.1.15 ToLength
var toInteger=__webpack_require__(53),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},/* 53 */
/***/
function(module,exports){
// 7.1.4 ToInteger
var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},/* 54 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(53),max=Math.max,min=Math.min;module.exports=function(index,length){return index=toInteger(index),index<0?max(index+length,0):min(index,length)}},/* 55 */
/***/
function(module,exports,__webpack_require__){var shared=__webpack_require__(56)("keys"),uid=__webpack_require__(57);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},/* 56 */
/***/
function(module,exports,__webpack_require__){var core=__webpack_require__(9),global=__webpack_require__(8),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});(module.exports=function(key,value){return store[key]||(store[key]=void 0!==value?value:{})})("versions",[]).push({version:core.version,mode:__webpack_require__(44)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},/* 57 */
/***/
function(module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},/* 58 */
/***/
function(module,exports){
// IE 8- don't enum bug keys
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 59 */
/***/
function(module,exports,__webpack_require__){var document=__webpack_require__(8).document;module.exports=document&&document.documentElement},/* 60 */
/***/
function(module,exports,__webpack_require__){var def=__webpack_require__(13).f,has=__webpack_require__(22),TAG=__webpack_require__(61)("toStringTag");module.exports=function(it,tag,stat){it&&!has(it=stat?it:it.prototype,TAG)&&def(it,TAG,{configurable:!0,value:tag})}},/* 61 */
/***/
function(module,exports,__webpack_require__){var store=__webpack_require__(56)("wks"),uid=__webpack_require__(57),Symbol=__webpack_require__(8).Symbol,USE_SYMBOL="function"==typeof Symbol,$exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&Symbol[name]||(USE_SYMBOL?Symbol:uid)("Symbol."+name))};$exports.store=store},/* 62 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=__webpack_require__(22),toObject=__webpack_require__(63),IE_PROTO=__webpack_require__(55)("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){return O=toObject(O),has(O,IE_PROTO)?O[IE_PROTO]:"function"==typeof O.constructor&&O instanceof O.constructor?O.constructor.prototype:O instanceof Object?ObjectProto:null}},/* 63 */
/***/
function(module,exports,__webpack_require__){
// 7.1.13 ToObject(argument)
var defined=__webpack_require__(42);module.exports=function(it){return Object(defined(it))}},/* 64 */
/***/
function(module,exports,__webpack_require__){"use strict";var $at=__webpack_require__(65)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(43)(String,"String",function(iterated){this._t=String(iterated),// target
this._i=0},function(){var point,O=this._t,index=this._i;return index>=O.length?{value:void 0,done:!0}:(point=$at(O,index),this._i+=point.length,{value:point,done:!1})})},/* 65 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(53),defined=__webpack_require__(42);
// true  -> String#at
// false -> String#codePointAt
module.exports=function(TO_STRING){return function(that,pos){var a,b,s=String(defined(that)),i=toInteger(pos),l=s.length;return i<0||i>=l?TO_STRING?"":void 0:(a=s.charCodeAt(i),a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536)}}},/* 66 */
/***/
function(module,exports,__webpack_require__){var classof=__webpack_require__(67),ITERATOR=__webpack_require__(61)("iterator"),Iterators=__webpack_require__(38);module.exports=__webpack_require__(9).isIterable=function(it){var O=Object(it);return void 0!==O[ITERATOR]||"@@iterator"in O||Iterators.hasOwnProperty(classof(O))}},/* 67 */
/***/
function(module,exports,__webpack_require__){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=__webpack_require__(41),TAG=__webpack_require__(61)("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(it,key){try{return it[key]}catch(e){}};module.exports=function(it){var O,T,B;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(T=tryGet(O=Object(it),TAG))?T:ARG?cof(O):"Object"==(B=cof(O))&&"function"==typeof O.callee?"Arguments":B}},/* 68 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(69),__esModule:!0}},/* 69 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(34),__webpack_require__(64),module.exports=__webpack_require__(70)},/* 70 */
/***/
function(module,exports,__webpack_require__){var anObject=__webpack_require__(14),get=__webpack_require__(71);module.exports=__webpack_require__(9).getIterator=function(it){var iterFn=get(it);if("function"!=typeof iterFn)throw TypeError(it+" is not iterable!");return anObject(iterFn.call(it))}},/* 71 */
/***/
function(module,exports,__webpack_require__){var classof=__webpack_require__(67),ITERATOR=__webpack_require__(61)("iterator"),Iterators=__webpack_require__(38);module.exports=__webpack_require__(9).getIteratorMethod=function(it){if(void 0!=it)return it[ITERATOR]||it["@@iterator"]||Iterators[classof(it)]}},/* 72 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(73),__esModule:!0}},/* 73 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(74),module.exports=__webpack_require__(9).Object.assign},/* 74 */
/***/
function(module,exports,__webpack_require__){
// 19.1.3.1 Object.assign(target, source)
var $export=__webpack_require__(7);$export($export.S+$export.F,"Object",{assign:__webpack_require__(75)})},/* 75 */
/***/
function(module,exports,__webpack_require__){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys=__webpack_require__(49),gOPS=__webpack_require__(76),pIE=__webpack_require__(77),toObject=__webpack_require__(63),IObject=__webpack_require__(40),$assign=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
module.exports=!$assign||__webpack_require__(18)(function(){var A={},B={},S=Symbol(),K="abcdefghijklmnopqrst";return A[S]=7,K.split("").forEach(function(k){B[k]=k}),7!=$assign({},A)[S]||Object.keys($assign({},B)).join("")!=K})?function(target,source){for(// eslint-disable-line no-unused-vars
var T=toObject(target),aLen=arguments.length,index=1,getSymbols=gOPS.f,isEnum=pIE.f;aLen>index;)for(var key,S=IObject(arguments[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0;length>j;)isEnum.call(S,key=keys[j++])&&(T[key]=S[key]);return T}:$assign},/* 76 */
/***/
function(module,exports){exports.f=Object.getOwnPropertySymbols},/* 77 */
/***/
function(module,exports){exports.f={}.propertyIsEnumerable},/* 78 */
/***/
function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("transition",{attrs:{tag:"div",name:"vuedal"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.vuedals.length,expression:"vuedals.length"}],staticClass:"vuedals",attrs:{tabindex:"0"},on:{keyup:function($event){return"button"in $event||!_vm._k($event.keyCode,"esc",27,$event.key,"Escape")?($event.preventDefault(),void _vm.handleEscapeKey($event)):null},click:function($event){_vm.handleBackdropClick()}}},_vm._l(_vm.vuedals,function(vuedal,index){return _c("div",{key:index,staticClass:"vuedal",class:_vm.getCssClasses(index),on:{click:function($event){$event.stopPropagation()}}},[!vuedal.title&&!vuedal.dismissable||vuedal.header?_vm._e():_c("header",[_c("span",{staticClass:"title"},[_vm._v(_vm._s(vuedal.title))]),_vm._v(" "),vuedal.dismissable?_c("a",{staticClass:"close",attrs:{href:""},on:{click:function($event){$event.preventDefault(),_vm.dismiss()}}},[_vm._v("×")]):_vm._e()]),_vm._v(" "),vuedal.header?_c("header",[_c(vuedal.header.component,_vm._b({tag:"component"},"component",vuedal.header.props,!1))],1):_vm._e(),_vm._v(" "),_c(vuedal.component,_vm._b({ref:"components",refInFor:!0,tag:"component"},"component",vuedal.props,!1))],1)}))])},staticRenderFns:[]}}])});