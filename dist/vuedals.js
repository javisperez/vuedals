/*!
 *  Vuedals plugin v1.1.0
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
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Component=exports.Bus=void 0;var _bus=__webpack_require__(1),_bus2=_interopRequireDefault(_bus),_component=__webpack_require__(4),_component2=_interopRequireDefault(_component);exports.default={install:function(Vue){Vue.prototype.$vuedals=new Vue({name:"$vuedals",created:function(){var _this=this;_bus2.default.$on("opened",function(data){_this.$emit("vuedals:opened",data)}),_bus2.default.$on("closed",function(data){_this.$emit("vuedals:closed",data)}),_bus2.default.$on("destroyed",function(data){_this.$emit("vuedals:destroyed",data)}),this.$on("new",function(options){_bus2.default.$emit("new",options)}),this.$on("close",function(index){_bus2.default.$emit("close",index)})},methods:{open:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_bus2.default.$emit("new",options)},close:function(){var index=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_bus2.default.$emit("close",index)}}}),Vue.mixin({created:function(){this.$on("vuedals:new",function(options){_bus2.default.$emit("new",options)}),this.$on("vuedals:close",function(index){_bus2.default.$emit("close",index)})}})}},exports.Bus=_bus2.default,exports.Component=_component2.default},/* 1 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _vue=__webpack_require__(2),_vue2=_interopRequireDefault(_vue);exports.default=new _vue2.default},/* 2 */
/***/
function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */
(function(process,global){/*!
	 * Vue.js v2.1.10
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */
"use strict";/*  */
/**
	 * Convert a value to a string that is actually rendered.
	 */
function _toString(val){return null==val?"":"object"==typeof val?JSON.stringify(val,null,2):String(val)}/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
function toNumber(val){var n=parseFloat(val);return isNaN(n)?val:n}/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
function makeMap(str,expectsLowerCase){for(var map=Object.create(null),list=str.split(","),i=0;i<list.length;i++)map[list[i]]=!0;return expectsLowerCase?function(val){return map[val.toLowerCase()]}:function(val){return map[val]}}/**
	 * Remove an item from an array
	 */
function remove$1(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1)return arr.splice(index,1)}}function hasOwn(obj,key){return hasOwnProperty.call(obj,key)}/**
	 * Check if value is primitive
	 */
function isPrimitive(value){return"string"==typeof value||"number"==typeof value}/**
	 * Create a cached version of a pure function.
	 */
function cached(fn){var cache=Object.create(null);return function(str){var hit=cache[str];return hit||(cache[str]=fn(str))}}/**
	 * Simple bind, faster than native
	 */
function bind$1(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx)}
// record original fn length
return boundFn._length=fn.length,boundFn}/**
	 * Convert an Array-like object to a real Array.
	 */
function toArray(list,start){start=start||0;for(var i=list.length-start,ret=new Array(i);i--;)ret[i]=list[i+start];return ret}/**
	 * Mix properties into target object.
	 */
function extend(to,_from){for(var key in _from)to[key]=_from[key];return to}/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
function isObject(obj){return null!==obj&&"object"==typeof obj}function isPlainObject(obj){return toString.call(obj)===OBJECT_STRING}/**
	 * Merge an Array of Objects into a single Object.
	 */
function toObject(arr){for(var res={},i=0;i<arr.length;i++)arr[i]&&extend(res,arr[i]);return res}/**
	 * Perform no operation.
	 */
function noop(){}/**
	 * Generate a static keys string from compiler modules.
	 */
function genStaticKeys(modules){return modules.reduce(function(keys,m){return keys.concat(m.staticKeys||[])},[]).join(",")}/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
function looseEqual(a,b){var isObjectA=isObject(a),isObjectB=isObject(b);return isObjectA&&isObjectB?JSON.stringify(a)===JSON.stringify(b):!isObjectA&&!isObjectB&&String(a)===String(b)}function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++)if(looseEqual(arr[i],val))return i;return-1}/*  */
/**
	 * Check if a string starts with $ or _
	 */
function isReserved(str){var c=(str+"").charCodeAt(0);return 36===c||95===c}/**
	 * Define a property.
	 */
function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:!0,configurable:!0})}function parsePath(path){if(!bailRE.test(path)){var segments=path.split(".");return function(obj){for(var i=0;i<segments.length;i++){if(!obj)return;obj=obj[segments[i]]}return obj}}}/* istanbul ignore next */
function isNative(Ctor){return/native code/.test(Ctor.toString())}function pushTarget(_target){Dep.target&&targetStack.push(Dep.target),Dep.target=_target}function popTarget(){Dep.target=targetStack.pop()}
// helpers
/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
function protoAugment(target,src){/* eslint-disable no-proto */
target.__proto__=src}/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
/* istanbul ignore next */
function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key])}}/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
function observe(value,asRootData){if(isObject(value)){var ob;return hasOwn(value,"__ob__")&&value.__ob__ instanceof Observer?ob=value.__ob__:observerState.shouldConvert&&!isServerRendering()&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue&&(ob=new Observer(value)),asRootData&&ob&&ob.vmCount++,ob}}/**
	 * Define a reactive property on an Object.
	 */
function defineReactive$$1(obj,key,val,customSetter){var dep=new Dep,property=Object.getOwnPropertyDescriptor(obj,key);if(!property||property.configurable!==!1){
// cater for pre-defined getter/setters
var getter=property&&property.get,setter=property&&property.set,childOb=observe(val);Object.defineProperty(obj,key,{enumerable:!0,configurable:!0,get:function(){var value=getter?getter.call(obj):val;return Dep.target&&(dep.depend(),childOb&&childOb.dep.depend(),Array.isArray(value)&&dependArray(value)),value},set:function(newVal){var value=getter?getter.call(obj):val;/* eslint-disable no-self-compare */
newVal===value||newVal!==newVal&&value!==value||(/* eslint-enable no-self-compare */
"production"!==process.env.NODE_ENV&&customSetter&&customSetter(),setter?setter.call(obj,newVal):val=newVal,childOb=observe(newVal),dep.notify())}})}}/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
function set$1(obj,key,val){if(Array.isArray(obj))return obj.length=Math.max(obj.length,key),obj.splice(key,1,val),val;if(hasOwn(obj,key))return void(obj[key]=val);var ob=obj.__ob__;return obj._isVue||ob&&ob.vmCount?void("production"!==process.env.NODE_ENV&&warn("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.")):ob?(defineReactive$$1(ob.value,key,val),ob.dep.notify(),val):void(obj[key]=val)}/**
	 * Delete a property and trigger change if necessary.
	 */
function del(obj,key){var ob=obj.__ob__;return obj._isVue||ob&&ob.vmCount?void("production"!==process.env.NODE_ENV&&warn("Avoid deleting properties on a Vue instance or its root $data - just set it to null.")):void(hasOwn(obj,key)&&(delete obj[key],ob&&ob.dep.notify()))}/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
function dependArray(value){for(var e=void 0,i=0,l=value.length;i<l;i++)e=value[i],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&dependArray(e)}/**
	 * Helper that recursively merges two data objects together.
	 */
function mergeData(to,from){if(!from)return to;for(var key,toVal,fromVal,keys=Object.keys(from),i=0;i<keys.length;i++)key=keys[i],toVal=to[key],fromVal=from[key],hasOwn(to,key)?isPlainObject(toVal)&&isPlainObject(fromVal)&&mergeData(toVal,fromVal):set$1(to,key,fromVal);return to}/**
	 * Hooks and param attributes are merged as arrays.
	 */
function mergeHook(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal}/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
function mergeAssets(parentVal,childVal){var res=Object.create(parentVal||null);return childVal?extend(res,childVal):res}/**
	 * Validate component names
	 */
function checkComponents(options){for(var key in options.components){var lower=key.toLowerCase();(isBuiltInTag(lower)||config.isReservedTag(lower))&&warn("Do not use built-in or reserved HTML elements as component id: "+key)}}/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
function normalizeProps(options){var props=options.props;if(props){var i,val,name,res={};if(Array.isArray(props))for(i=props.length;i--;)val=props[i],"string"==typeof val?(name=camelize(val),res[name]={type:null}):"production"!==process.env.NODE_ENV&&warn("props must be strings when using array syntax.");else if(isPlainObject(props))for(var key in props)val=props[key],name=camelize(key),res[name]=isPlainObject(val)?val:{type:val};options.props=res}}/**
	 * Normalize raw function directives into object format.
	 */
function normalizeDirectives(options){var dirs=options.directives;if(dirs)for(var key in dirs){var def=dirs[key];"function"==typeof def&&(dirs[key]={bind:def,update:def})}}/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
function mergeOptions(parent,child,vm){function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key)}"production"!==process.env.NODE_ENV&&checkComponents(child),normalizeProps(child),normalizeDirectives(child);var extendsFrom=child.extends;if(extendsFrom&&(parent="function"==typeof extendsFrom?mergeOptions(parent,extendsFrom.options,vm):mergeOptions(parent,extendsFrom,vm)),child.mixins)for(var i=0,l=child.mixins.length;i<l;i++){var mixin=child.mixins[i];mixin.prototype instanceof Vue$3&&(mixin=mixin.options),parent=mergeOptions(parent,mixin,vm)}var key,options={};for(key in parent)mergeField(key);for(key in child)hasOwn(parent,key)||mergeField(key);return options}/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
function resolveAsset(options,type,id,warnMissing){/* istanbul ignore if */
if("string"==typeof id){var assets=options[type];
// check local registration variations first
if(hasOwn(assets,id))return assets[id];var camelizedId=camelize(id);if(hasOwn(assets,camelizedId))return assets[camelizedId];var PascalCaseId=capitalize(camelizedId);if(hasOwn(assets,PascalCaseId))return assets[PascalCaseId];
// fallback to prototype chain
var res=assets[id]||assets[camelizedId]||assets[PascalCaseId];return"production"!==process.env.NODE_ENV&&warnMissing&&!res&&warn("Failed to resolve "+type.slice(0,-1)+": "+id,options),res}}/*  */
function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key],absent=!hasOwn(propsData,key),value=propsData[key];
// check default value
if(
// handle boolean props
isType(Boolean,prop.type)&&(absent&&!hasOwn(prop,"default")?value=!1:isType(String,prop.type)||""!==value&&value!==hyphenate(key)||(value=!0)),void 0===value){value=getPropDefaultValue(vm,prop,key);
// since the default value is a fresh copy,
// make sure to observe it.
var prevShouldConvert=observerState.shouldConvert;observerState.shouldConvert=!0,observe(value),observerState.shouldConvert=prevShouldConvert}return"production"!==process.env.NODE_ENV&&assertProp(prop,key,value,vm,absent),value}/**
	 * Get the default value of a prop.
	 */
function getPropDefaultValue(vm,prop,key){
// no default, return undefined
if(hasOwn(prop,"default")){var def=prop.default;
// the raw prop value was also undefined from previous render,
// return previous default value to avoid unnecessary watcher trigger
// warn against non-factory defaults for Object & Array
// the raw prop value was also undefined from previous render,
// return previous default value to avoid unnecessary watcher trigger
return isObject(def)&&"production"!==process.env.NODE_ENV&&warn('Invalid default value for prop "'+key+'": Props with type Object/Array must use a factory function to return the default value.',vm),vm&&vm.$options.propsData&&void 0===vm.$options.propsData[key]&&void 0!==vm[key]?vm[key]:"function"==typeof def&&prop.type!==Function?def.call(vm):def}}/**
	 * Assert whether a prop is valid.
	 */
function assertProp(prop,name,value,vm,absent){if(prop.required&&absent)return void warn('Missing required prop: "'+name+'"',vm);if(null!=value||prop.required){var type=prop.type,valid=!type||type===!0,expectedTypes=[];if(type){Array.isArray(type)||(type=[type]);for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType||""),valid=assertedType.valid}}if(!valid)return void warn('Invalid prop: type check failed for prop "'+name+'". Expected '+expectedTypes.map(capitalize).join(", ")+", got "+Object.prototype.toString.call(value).slice(8,-1)+".",vm);var validator=prop.validator;validator&&(validator(value)||warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm))}}/**
	 * Assert the type of a value
	 */
function assertType(value,type){var valid,expectedType=getType(type);return valid="String"===expectedType?typeof value==(expectedType="string"):"Number"===expectedType?typeof value==(expectedType="number"):"Boolean"===expectedType?typeof value==(expectedType="boolean"):"Function"===expectedType?typeof value==(expectedType="function"):"Object"===expectedType?isPlainObject(value):"Array"===expectedType?Array.isArray(value):value instanceof type,{valid:valid,expectedType:expectedType}}/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
function getType(fn){var match=fn&&fn.toString().match(/^\s*function (\w+)/);return match&&match[1]}function isType(type,fn){if(!Array.isArray(fn))return getType(fn)===getType(type);for(var i=0,len=fn.length;i<len;i++)if(getType(fn[i])===getType(type))return!0;/* istanbul ignore next */
return!1}function createTextVNode(val){return new VNode(void 0,void 0,void 0,String(val))}
// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode){var cloned=new VNode(vnode.tag,vnode.data,vnode.children,vnode.text,vnode.elm,vnode.context,vnode.componentOptions);return cloned.ns=vnode.ns,cloned.isStatic=vnode.isStatic,cloned.key=vnode.key,cloned.isCloned=!0,cloned}function cloneVNodes(vnodes){for(var res=new Array(vnodes.length),i=0;i<vnodes.length;i++)res[i]=cloneVNode(vnodes[i]);return res}function createComponent(Ctor,data,context,children,tag){if(Ctor){var baseCtor=context.$options._base;if(isObject(Ctor)&&(Ctor=baseCtor.extend(Ctor)),"function"!=typeof Ctor)return void("production"!==process.env.NODE_ENV&&warn("Invalid Component definition: "+String(Ctor),context));
// async component
if(!Ctor.cid)if(Ctor.resolved)Ctor=Ctor.resolved;else if(Ctor=resolveAsyncComponent(Ctor,baseCtor,function(){
// it's ok to queue this on every render because
// $forceUpdate is buffered by the scheduler.
context.$forceUpdate()}),!Ctor)
// return nothing if this is indeed an async component
// wait for the callback to trigger parent update.
return;
// resolve constructor options in case global mixins are applied after
// component constructor creation
resolveConstructorOptions(Ctor),data=data||{};
// extract props
var propsData=extractProps(data,Ctor);
// functional component
if(Ctor.options.functional)return createFunctionalComponent(Ctor,propsData,data,context,children);
// extract listeners, since these needs to be treated as
// child component listeners instead of DOM listeners
var listeners=data.on;
// replace with listeners with .native modifier
data.on=data.nativeOn,Ctor.options.abstract&&(
// abstract components do not keep anything
// other than props & listeners
data={}),
// merge component management hooks onto the placeholder node
mergeHooks(data);
// return a placeholder vnode
var name=Ctor.options.name||tag,vnode=new VNode("vue-component-"+Ctor.cid+(name?"-"+name:""),data,void 0,void 0,void 0,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children});return vnode}}function createFunctionalComponent(Ctor,propsData,data,context,children){var props={},propOptions=Ctor.options.props;if(propOptions)for(var key in propOptions)props[key]=validateProp(key,propOptions,propsData);
// ensure the createElement function in functional components
// gets a unique context - this is necessary for correct named slot check
var _context=Object.create(context),h=function(a,b,c,d){return createElement(_context,a,b,c,d,!0)},vnode=Ctor.options.render.call(null,h,{props:props,data:data,parent:context,children:children,slots:function(){return resolveSlots(children,context)}});return vnode instanceof VNode&&(vnode.functionalContext=context,data.slot&&((vnode.data||(vnode.data={})).slot=data.slot)),vnode}function createComponentInstanceForVnode(vnode,// we know it's MountedComponentVNode but flow doesn't
parent,// activeInstance in lifecycle state
parentElm,refElm){var vnodeComponentOptions=vnode.componentOptions,options={_isComponent:!0,parent:parent,propsData:vnodeComponentOptions.propsData,_componentTag:vnodeComponentOptions.tag,_parentVnode:vnode,_parentListeners:vnodeComponentOptions.listeners,_renderChildren:vnodeComponentOptions.children,_parentElm:parentElm||null,_refElm:refElm||null},inlineTemplate=vnode.data.inlineTemplate;return inlineTemplate&&(options.render=inlineTemplate.render,options.staticRenderFns=inlineTemplate.staticRenderFns),new vnodeComponentOptions.Ctor(options)}function init(vnode,hydrating,parentElm,refElm){if(!vnode.componentInstance||vnode.componentInstance._isDestroyed){var child=vnode.componentInstance=createComponentInstanceForVnode(vnode,activeInstance,parentElm,refElm);child.$mount(hydrating?vnode.elm:void 0,hydrating)}else if(vnode.data.keepAlive){
// kept-alive components, treat as a patch
var mountedNode=vnode;// work around flow
prepatch(mountedNode,mountedNode)}}function prepatch(oldVnode,vnode){var options=vnode.componentOptions,child=vnode.componentInstance=oldVnode.componentInstance;child._updateFromParent(options.propsData,// updated props
options.listeners,// updated listeners
vnode,// new parent vnode
options.children)}function insert(vnode){vnode.componentInstance._isMounted||(vnode.componentInstance._isMounted=!0,callHook(vnode.componentInstance,"mounted")),vnode.data.keepAlive&&(vnode.componentInstance._inactive=!1,callHook(vnode.componentInstance,"activated"))}function destroy$1(vnode){vnode.componentInstance._isDestroyed||(vnode.data.keepAlive?(vnode.componentInstance._inactive=!0,callHook(vnode.componentInstance,"deactivated")):vnode.componentInstance.$destroy())}function resolveAsyncComponent(factory,baseCtor,cb){if(!factory.requested){factory.requested=!0;var cbs=factory.pendingCallbacks=[cb],sync=!0,resolve=function(res){
// invoke callbacks only if this is not a synchronous resolve
// (async resolves are shimmed as synchronous during SSR)
if(isObject(res)&&(res=baseCtor.extend(res)),
// cache resolved
factory.resolved=res,!sync)for(var i=0,l=cbs.length;i<l;i++)cbs[i](res)},reject=function(reason){"production"!==process.env.NODE_ENV&&warn("Failed to resolve async component: "+String(factory)+(reason?"\nReason: "+reason:""))},res=factory(resolve,reject);
// return in case resolved synchronously
// handle promise
return res&&"function"==typeof res.then&&!factory.resolved&&res.then(resolve,reject),sync=!1,factory.resolved}
// pool callbacks
factory.pendingCallbacks.push(cb)}function extractProps(data,Ctor){
// we are only extracting raw values here.
// validation and default values are handled in the child
// component itself.
var propOptions=Ctor.options.props;if(propOptions){var res={},attrs=data.attrs,props=data.props,domProps=data.domProps;if(attrs||props||domProps)for(var key in propOptions){var altKey=hyphenate(key);checkProp(res,props,key,altKey,!0)||checkProp(res,attrs,key,altKey)||checkProp(res,domProps,key,altKey)}return res}}function checkProp(res,hash,key,altKey,preserve){if(hash){if(hasOwn(hash,key))return res[key]=hash[key],preserve||delete hash[key],!0;if(hasOwn(hash,altKey))return res[key]=hash[altKey],preserve||delete hash[altKey],!0}return!1}function mergeHooks(data){data.hook||(data.hook={});for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i],fromParent=data.hook[key],ours=hooks[key];data.hook[key]=fromParent?mergeHook$1(ours,fromParent):ours}}function mergeHook$1(one,two){return function(a,b,c,d){one(a,b,c,d),two(a,b,c,d)}}/*  */
function mergeVNodeHook(def,hookKey,hook,key){key+=hookKey;var injectedHash=def.__injected||(def.__injected={});if(!injectedHash[key]){injectedHash[key]=!0;var oldHook=def[hookKey];oldHook?def[hookKey]=function(){oldHook.apply(this,arguments),hook.apply(this,arguments)}:def[hookKey]=hook}}function createEventHandle(fn){var handle={fn:fn,invoker:function(){var arguments$1=arguments,fn=handle.fn;if(Array.isArray(fn))for(var i=0;i<fn.length;i++)fn[i].apply(null,arguments$1);else fn.apply(null,arguments)}};return handle}function updateListeners(on,oldOn,add,remove$$1,vm){var name,cur,old,event;for(name in on)cur=on[name],old=oldOn[name],event=normalizeEvent(name),cur?old?cur!==old&&(old.fn=cur,on[name]=old):(cur.invoker||(cur=on[name]=createEventHandle(cur)),add(event.name,cur.invoker,event.once,event.capture)):"production"!==process.env.NODE_ENV&&warn('Invalid handler for event "'+event.name+'": got '+String(cur),vm);for(name in oldOn)on[name]||(event=normalizeEvent(name),remove$$1(event.name,oldOn[name].invoker,event.capture))}/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// nomralization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children){for(var i=0;i<children.length;i++)if(Array.isArray(children[i]))return Array.prototype.concat.apply([],children);return children}
// 2. When the children contains constrcuts that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children){return isPrimitive(children)?[createTextVNode(children)]:Array.isArray(children)?normalizeArrayChildren(children):void 0}function normalizeArrayChildren(children,nestedIndex){var i,c,last,res=[];for(i=0;i<children.length;i++)c=children[i],null!=c&&"boolean"!=typeof c&&(last=res[res.length-1],
//  nested
Array.isArray(c)?res.push.apply(res,normalizeArrayChildren(c,(nestedIndex||"")+"_"+i)):isPrimitive(c)?last&&last.text?last.text+=String(c):""!==c&&
// convert primitive to vnode
res.push(createTextVNode(c)):c.text&&last&&last.text?res[res.length-1]=createTextVNode(last.text+c.text):(
// default key for nested array children (likely generated by v-for)
c.tag&&null==c.key&&null!=nestedIndex&&(c.key="__vlist"+nestedIndex+"_"+i+"__"),res.push(c)));return res}/*  */
function getFirstComponentChild(children){return children&&children.filter(function(c){return c&&c.componentOptions})[0]}
// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context,tag,data,children,normalizationType,alwaysNormalize){return(Array.isArray(data)||isPrimitive(data))&&(normalizationType=children,children=data,data=void 0),alwaysNormalize&&(normalizationType=ALWAYS_NORMALIZE),_createElement(context,tag,data,children,normalizationType)}function _createElement(context,tag,data,children,normalizationType){if(data&&data.__ob__)return"production"!==process.env.NODE_ENV&&warn("Avoid using observed data object as vnode data: "+JSON.stringify(data)+"\nAlways create fresh vnode data objects in each render!",context),createEmptyVNode();if(!tag)
// in case of component :is set to falsy value
return createEmptyVNode();
// support single function children as default scoped slot
Array.isArray(children)&&"function"==typeof children[0]&&(data=data||{},data.scopedSlots={default:children[0]},children.length=0),normalizationType===ALWAYS_NORMALIZE?children=normalizeChildren(children):normalizationType===SIMPLE_NORMALIZE&&(children=simpleNormalizeChildren(children));var vnode,ns;if("string"==typeof tag){var Ctor;ns=config.getTagNamespace(tag),
// platform built-in elements
vnode=config.isReservedTag(tag)?new VNode(config.parsePlatformTagName(tag),data,children,void 0,void 0,context):(Ctor=resolveAsset(context.$options,"components",tag))?createComponent(Ctor,data,context,children,tag):new VNode(tag,data,children,void 0,void 0,context)}else
// direct component options / constructor
vnode=createComponent(tag,data,context,children);return vnode?(ns&&applyNS(vnode,ns),vnode):createEmptyVNode()}function applyNS(vnode,ns){if(vnode.ns=ns,"foreignObject"!==vnode.tag&&vnode.children)for(var i=0,l=vnode.children.length;i<l;i++){var child=vnode.children[i];child.tag&&!child.ns&&applyNS(child,ns)}}/*  */
function initRender(vm){vm.$vnode=null,// the placeholder node in parent tree
vm._vnode=null,// the root of the child tree
vm._staticTrees=null;var parentVnode=vm.$options._parentVnode,renderContext=parentVnode&&parentVnode.context;vm.$slots=resolveSlots(vm.$options._renderChildren,renderContext),vm.$scopedSlots={},
// bind the createElement fn to this instance
// so that we get proper render context inside it.
// args order: tag, data, children, normalizationType, alwaysNormalize
// internal version is used by render functions compiled from templates
vm._c=function(a,b,c,d){return createElement(vm,a,b,c,d,!1)},
// normalization is always applied for the public version, used in
// user-written render functions.
vm.$createElement=function(a,b,c,d){return createElement(vm,a,b,c,d,!0)}}function renderMixin(Vue){function markStatic(tree,key,isOnce){if(Array.isArray(tree))for(var i=0;i<tree.length;i++)tree[i]&&"string"!=typeof tree[i]&&markStaticNode(tree[i],key+"_"+i,isOnce);else markStaticNode(tree,key,isOnce)}function markStaticNode(node,key,isOnce){node.isStatic=!0,node.key=key,node.isOnce=isOnce}Vue.prototype.$nextTick=function(fn){return nextTick(fn,this)},Vue.prototype._render=function(){var vm=this,ref=vm.$options,render=ref.render,staticRenderFns=ref.staticRenderFns,_parentVnode=ref._parentVnode;if(vm._isMounted)
// clone slot nodes on re-renders
for(var key in vm.$slots)vm.$slots[key]=cloneVNodes(vm.$slots[key]);_parentVnode&&_parentVnode.data.scopedSlots&&(vm.$scopedSlots=_parentVnode.data.scopedSlots),staticRenderFns&&!vm._staticTrees&&(vm._staticTrees=[]),
// set parent vnode. this allows render functions to have access
// to the data on the placeholder node.
vm.$vnode=_parentVnode;
// render self
var vnode;try{vnode=render.call(vm._renderProxy,vm.$createElement)}catch(e){/* istanbul ignore else */
if(!config.errorHandler)throw"production"!==process.env.NODE_ENV&&warn("Error when rendering "+formatComponentName(vm)+":"),e;config.errorHandler.call(null,e,vm),
// return previous vnode to prevent render error causing blank component
vnode=vm._vnode}
// return empty vnode in case the render function errored out
// set parent
return vnode instanceof VNode||("production"!==process.env.NODE_ENV&&Array.isArray(vnode)&&warn("Multiple root nodes returned from render function. Render function should return a single root node.",vm),vnode=createEmptyVNode()),vnode.parent=_parentVnode,vnode},
// toString for mustaches
Vue.prototype._s=_toString,
// convert text to vnode
Vue.prototype._v=createTextVNode,
// number conversion
Vue.prototype._n=toNumber,
// empty vnode
Vue.prototype._e=createEmptyVNode,
// loose equal
Vue.prototype._q=looseEqual,
// loose indexOf
Vue.prototype._i=looseIndexOf,
// render static tree by index
Vue.prototype._m=function(index,isInFor){var tree=this._staticTrees[index];
// if has already-rendered static tree and not inside v-for,
// we can reuse the same tree by doing a shallow clone.
// if has already-rendered static tree and not inside v-for,
// we can reuse the same tree by doing a shallow clone.
// otherwise, render a fresh tree.
return tree&&!isInFor?Array.isArray(tree)?cloneVNodes(tree):cloneVNode(tree):(tree=this._staticTrees[index]=this.$options.staticRenderFns[index].call(this._renderProxy),markStatic(tree,"__static__"+index,!1),tree)},
// mark node as static (v-once)
Vue.prototype._o=function(tree,index,key){return markStatic(tree,"__once__"+index+(key?"_"+key:""),!0),tree},
// filter resolution helper
Vue.prototype._f=function(id){return resolveAsset(this.$options,"filters",id,!0)||identity},
// render v-for
Vue.prototype._l=function(val,render){var ret,i,l,keys,key;if(Array.isArray(val)||"string"==typeof val)for(ret=new Array(val.length),i=0,l=val.length;i<l;i++)ret[i]=render(val[i],i);else if("number"==typeof val)for(ret=new Array(val),i=0;i<val;i++)ret[i]=render(i+1,i);else if(isObject(val))for(keys=Object.keys(val),ret=new Array(keys.length),i=0,l=keys.length;i<l;i++)key=keys[i],ret[i]=render(val[key],key,i);return ret},
// renderSlot
Vue.prototype._t=function(name,fallback,props,bindObject){var scopedSlotFn=this.$scopedSlots[name];if(scopedSlotFn)// scoped slot
return props=props||{},bindObject&&extend(props,bindObject),scopedSlotFn(props)||fallback;var slotNodes=this.$slots[name];
// warn duplicate slot usage
return slotNodes&&"production"!==process.env.NODE_ENV&&(slotNodes._rendered&&warn('Duplicate presence of slot "'+name+'" found in the same render tree - this will likely cause render errors.',this),slotNodes._rendered=!0),slotNodes||fallback},
// apply v-bind object
Vue.prototype._b=function(data,tag,value,asProp){if(value)if(isObject(value)){Array.isArray(value)&&(value=toObject(value));for(var key in value)if("class"===key||"style"===key)data[key]=value[key];else{var type=data.attrs&&data.attrs.type,hash=asProp||config.mustUseProp(tag,type,key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});hash[key]=value[key]}}else"production"!==process.env.NODE_ENV&&warn("v-bind without argument expects an Object or Array value",this);return data},
// check v-on keyCodes
Vue.prototype._k=function(eventKeyCode,key,builtInAlias){var keyCodes=config.keyCodes[key]||builtInAlias;return Array.isArray(keyCodes)?keyCodes.indexOf(eventKeyCode)===-1:keyCodes!==eventKeyCode}}function resolveSlots(children,context){var slots={};if(!children)return slots;for(var name,child,defaultSlot=[],i=0,l=children.length;i<l;i++)
// named slots should only be respected if the vnode was rendered in the
// same context.
if(child=children[i],(child.context===context||child.functionalContext===context)&&child.data&&(name=child.data.slot)){var slot=slots[name]||(slots[name]=[]);"template"===child.tag?slot.push.apply(slot,child.children):slot.push(child)}else defaultSlot.push(child);
// ignore single whitespace
return defaultSlot.length&&(1!==defaultSlot.length||" "!==defaultSlot[0].text&&!defaultSlot[0].isComment)&&(slots.default=defaultSlot),slots}/*  */
function initEvents(vm){vm._events=Object.create(null),vm._hasHookEvent=!1;
// init parent attached events
var listeners=vm.$options._parentListeners;listeners&&updateComponentListeners(vm,listeners)}function add$1(event,fn,once){once?target.$once(event,fn):target.$on(event,fn)}function remove$2(event,fn){target.$off(event,fn)}function updateComponentListeners(vm,listeners,oldListeners){target=vm,updateListeners(listeners,oldListeners||{},add$1,remove$2,vm)}function eventsMixin(Vue){var hookRE=/^hook:/;Vue.prototype.$on=function(event,fn){var vm=this;
// optimize hook:event cost by using a boolean flag marked at registration
// instead of a hash lookup
return(vm._events[event]||(vm._events[event]=[])).push(fn),hookRE.test(event)&&(vm._hasHookEvent=!0),vm},Vue.prototype.$once=function(event,fn){function on(){vm.$off(event,on),fn.apply(vm,arguments)}var vm=this;return on.fn=fn,vm.$on(event,on),vm},Vue.prototype.$off=function(event,fn){var vm=this;
// all
if(!arguments.length)return vm._events=Object.create(null),vm;
// specific event
var cbs=vm._events[event];if(!cbs)return vm;if(1===arguments.length)return vm._events[event]=null,vm;for(
// specific handler
var cb,i=cbs.length;i--;)if(cb=cbs[i],cb===fn||cb.fn===fn){cbs.splice(i,1);break}return vm},Vue.prototype.$emit=function(event){var vm=this,cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;for(var args=toArray(arguments,1),i=0,l=cbs.length;i<l;i++)cbs[i].apply(vm,args)}return vm}}function initLifecycle(vm){var options=vm.$options,parent=options.parent;if(parent&&!options.abstract){for(;parent.$options.abstract&&parent.$parent;)parent=parent.$parent;parent.$children.push(vm)}vm.$parent=parent,vm.$root=parent?parent.$root:vm,vm.$children=[],vm.$refs={},vm._watcher=null,vm._inactive=!1,vm._isMounted=!1,vm._isDestroyed=!1,vm._isBeingDestroyed=!1}function lifecycleMixin(Vue){Vue.prototype._mount=function(el,hydrating){var vm=this;/* istanbul ignore if */
// manually mounted instance, call mounted on self
// mounted is called for render-created child components in its inserted hook
return vm.$el=el,vm.$options.render||(vm.$options.render=createEmptyVNode,"production"!==process.env.NODE_ENV&&(vm.$options.template&&"#"!==vm.$options.template.charAt(0)?warn("You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",vm):warn("Failed to mount component: template or render function not defined.",vm))),callHook(vm,"beforeMount"),vm._watcher=new Watcher(vm,function(){vm._update(vm._render(),hydrating)},noop),hydrating=!1,null==vm.$vnode&&(vm._isMounted=!0,callHook(vm,"mounted")),vm},Vue.prototype._update=function(vnode,hydrating){var vm=this;vm._isMounted&&callHook(vm,"beforeUpdate");var prevEl=vm.$el,prevVnode=vm._vnode,prevActiveInstance=activeInstance;activeInstance=vm,vm._vnode=vnode,
// Vue.prototype.__patch__ is injected in entry points
// based on the rendering backend used.
prevVnode?
// updates
vm.$el=vm.__patch__(prevVnode,vnode):
// initial render
vm.$el=vm.__patch__(vm.$el,vnode,hydrating,!1,vm.$options._parentElm,vm.$options._refElm),activeInstance=prevActiveInstance,
// update __vue__ reference
prevEl&&(prevEl.__vue__=null),vm.$el&&(vm.$el.__vue__=vm),
// if parent is an HOC, update its $el as well
vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode&&(vm.$parent.$el=vm.$el)},Vue.prototype._updateFromParent=function(propsData,listeners,parentVnode,renderChildren){var vm=this,hasChildren=!(!vm.$options._renderChildren&&!renderChildren);
// update props
if(vm.$options._parentVnode=parentVnode,vm.$vnode=parentVnode,// update vm's placeholder node without re-render
vm._vnode&&(// update child tree's parent
vm._vnode.parent=parentVnode),vm.$options._renderChildren=renderChildren,propsData&&vm.$options.props){observerState.shouldConvert=!1,"production"!==process.env.NODE_ENV&&(observerState.isSettingProps=!0);for(var propKeys=vm.$options._propKeys||[],i=0;i<propKeys.length;i++){var key=propKeys[i];vm[key]=validateProp(key,vm.$options.props,propsData,vm)}observerState.shouldConvert=!0,"production"!==process.env.NODE_ENV&&(observerState.isSettingProps=!1),vm.$options.propsData=propsData}
// update listeners
if(listeners){var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners,updateComponentListeners(vm,listeners,oldListeners)}
// resolve slots + force update if has children
hasChildren&&(vm.$slots=resolveSlots(renderChildren,parentVnode.context),vm.$forceUpdate())},Vue.prototype.$forceUpdate=function(){var vm=this;vm._watcher&&vm._watcher.update()},Vue.prototype.$destroy=function(){var vm=this;if(!vm._isBeingDestroyed){callHook(vm,"beforeDestroy"),vm._isBeingDestroyed=!0;
// remove self from parent
var parent=vm.$parent;!parent||parent._isBeingDestroyed||vm.$options.abstract||remove$1(parent.$children,vm),
// teardown watchers
vm._watcher&&vm._watcher.teardown();for(var i=vm._watchers.length;i--;)vm._watchers[i].teardown();
// remove reference from data ob
// frozen object may not have observer.
vm._data.__ob__&&vm._data.__ob__.vmCount--,
// call the last hook...
vm._isDestroyed=!0,callHook(vm,"destroyed"),
// turn off all instance listeners.
vm.$off(),
// remove __vue__ reference
vm.$el&&(vm.$el.__vue__=null),
// invoke destroy hooks on current rendered tree
vm.__patch__(vm._vnode,null)}}}function callHook(vm,hook){var handlers=vm.$options[hook];if(handlers)for(var i=0,j=handlers.length;i<j;i++)handlers[i].call(vm);vm._hasHookEvent&&vm.$emit("hook:"+hook)}/**
	 * Reset the scheduler's state.
	 */
function resetSchedulerState(){queue.length=0,has$1={},"production"!==process.env.NODE_ENV&&(circular={}),waiting=flushing=!1}/**
	 * Flush both queues and run the watchers.
	 */
function flushSchedulerQueue(){flushing=!0;var watcher,id,vm;
// do not cache length because more watchers might be pushed
// as we run existing watchers
for(
// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child)
// 2. A component's user watchers are run before its render watcher (because
//    user watchers are created before the render watcher)
// 3. If a component is destroyed during a parent component's watcher run,
//    its watchers can be skipped.
queue.sort(function(a,b){return a.id-b.id}),index=0;index<queue.length;index++)
// in dev build, check and stop circular updates.
if(watcher=queue[index],id=watcher.id,has$1[id]=null,watcher.run(),"production"!==process.env.NODE_ENV&&null!=has$1[id]&&(circular[id]=(circular[id]||0)+1,circular[id]>config._maxUpdateCount)){warn("You may have an infinite update loop "+(watcher.user?'in watcher with expression "'+watcher.expression+'"':"in a component render function."),watcher.vm);break}for(
// call updated hooks
index=queue.length;index--;)watcher=queue[index],vm=watcher.vm,vm._watcher===watcher&&vm._isMounted&&callHook(vm,"updated");
// devtool hook
/* istanbul ignore if */
devtools&&config.devtools&&devtools.emit("flush"),resetSchedulerState()}/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
function queueWatcher(watcher){var id=watcher.id;if(null==has$1[id]){if(has$1[id]=!0,flushing){for(
// if already flushing, splice the watcher based on its id
// if already past its id, it will be run next immediately.
var i=queue.length-1;i>=0&&queue[i].id>watcher.id;)i--;queue.splice(Math.max(i,index)+1,0,watcher)}else queue.push(watcher);
// queue the flush
waiting||(waiting=!0,nextTick(flushSchedulerQueue))}}function traverse(val){seenObjects.clear(),_traverse(val,seenObjects)}function _traverse(val,seen){var i,keys,isA=Array.isArray(val);if((isA||isObject(val))&&Object.isExtensible(val)){if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId))return;seen.add(depId)}if(isA)for(i=val.length;i--;)_traverse(val[i],seen);else for(keys=Object.keys(val),i=keys.length;i--;)_traverse(val[keys[i]],seen)}}/*  */
function initState(vm){vm._watchers=[];var opts=vm.$options;opts.props&&initProps(vm,opts.props),opts.methods&&initMethods(vm,opts.methods),opts.data?initData(vm):observe(vm._data={},!0),opts.computed&&initComputed(vm,opts.computed),opts.watch&&initWatch(vm,opts.watch)}function initProps(vm,props){var propsData=vm.$options.propsData||{},keys=vm.$options._propKeys=Object.keys(props),isRoot=!vm.$parent;
// root instance props should be converted
observerState.shouldConvert=isRoot;for(var loop=function(i){var key=keys[i];/* istanbul ignore else */
"production"!==process.env.NODE_ENV?(isReservedProp[key]&&warn('"'+key+'" is a reserved attribute and cannot be used as component prop.',vm),defineReactive$$1(vm,key,validateProp(key,props,propsData,vm),function(){vm.$parent&&!observerState.isSettingProps&&warn("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \""+key+'"',vm)})):defineReactive$$1(vm,key,validateProp(key,props,propsData,vm))},i=0;i<keys.length;i++)loop(i);observerState.shouldConvert=!0}function initData(vm){var data=vm.$options.data;data=vm._data="function"==typeof data?data.call(vm):data||{},isPlainObject(data)||(data={},"production"!==process.env.NODE_ENV&&warn("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",vm));for(
// proxy data on instance
var keys=Object.keys(data),props=vm.$options.props,i=keys.length;i--;)props&&hasOwn(props,keys[i])?"production"!==process.env.NODE_ENV&&warn('The data property "'+keys[i]+'" is already declared as a prop. Use prop default value instead.',vm):proxy(vm,keys[i]);
// observe data
observe(data,!0)}function initComputed(vm,computed){for(var key in computed){/* istanbul ignore if */
"production"!==process.env.NODE_ENV&&key in vm&&warn('existing instance property "'+key+'" will be overwritten by a computed property with the same name.',vm);var userDef=computed[key];"function"==typeof userDef?(computedSharedDefinition.get=makeComputedGetter(userDef,vm),computedSharedDefinition.set=noop):(computedSharedDefinition.get=userDef.get?userDef.cache!==!1?makeComputedGetter(userDef.get,vm):bind$1(userDef.get,vm):noop,computedSharedDefinition.set=userDef.set?bind$1(userDef.set,vm):noop),Object.defineProperty(vm,key,computedSharedDefinition)}}function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,noop,{lazy:!0});return function(){return watcher.dirty&&watcher.evaluate(),Dep.target&&watcher.depend(),watcher.value}}function initMethods(vm,methods){for(var key in methods)vm[key]=null==methods[key]?noop:bind$1(methods[key],vm),"production"!==process.env.NODE_ENV&&null==methods[key]&&warn('method "'+key+'" has an undefined value in the component definition. Did you reference the function correctly?',vm)}function initWatch(vm,watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler))for(var i=0;i<handler.length;i++)createWatcher(vm,key,handler[i]);else createWatcher(vm,key,handler)}}function createWatcher(vm,key,handler){var options;isPlainObject(handler)&&(options=handler,handler=handler.handler),"string"==typeof handler&&(handler=vm[handler]),vm.$watch(key,handler,options)}function stateMixin(Vue){
// flow somehow has problems with directly declared definition object
// when using Object.defineProperty, so we have to procedurally build up
// the object here.
var dataDef={};dataDef.get=function(){return this._data},"production"!==process.env.NODE_ENV&&(dataDef.set=function(newData){warn("Avoid replacing instance root $data. Use nested data properties instead.",this)}),Object.defineProperty(Vue.prototype,"$data",dataDef),Vue.prototype.$set=set$1,Vue.prototype.$delete=del,Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;options=options||{},options.user=!0;var watcher=new Watcher(vm,expOrFn,cb,options);return options.immediate&&cb.call(vm,watcher.value),function(){watcher.teardown()}}}function proxy(vm,key){isReserved(key)||Object.defineProperty(vm,key,{configurable:!0,enumerable:!0,get:function(){return vm._data[key]},set:function(val){vm._data[key]=val}})}function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;
// a uid
vm._uid=uid++,
// a flag to avoid this being observed
vm._isVue=!0,
// merge options
options&&options._isComponent?
// optimize internal component instantiation
// since dynamic options merging is pretty slow, and none of the
// internal component options needs special treatment.
initInternalComponent(vm,options):vm.$options=mergeOptions(resolveConstructorOptions(vm.constructor),options||{},vm),/* istanbul ignore else */
"production"!==process.env.NODE_ENV?initProxy(vm):vm._renderProxy=vm,
// expose real self
vm._self=vm,initLifecycle(vm),initEvents(vm),initRender(vm),callHook(vm,"beforeCreate"),initState(vm),callHook(vm,"created"),vm.$options.el&&vm.$mount(vm.$options.el)}}function initInternalComponent(vm,options){var opts=vm.$options=Object.create(vm.constructor.options);
// doing this because it's faster than dynamic enumeration.
opts.parent=options.parent,opts.propsData=options.propsData,opts._parentVnode=options._parentVnode,opts._parentListeners=options._parentListeners,opts._renderChildren=options._renderChildren,opts._componentTag=options._componentTag,opts._parentElm=options._parentElm,opts._refElm=options._refElm,options.render&&(opts.render=options.render,opts.staticRenderFns=options.staticRenderFns)}function resolveConstructorOptions(Ctor){var options=Ctor.options;if(Ctor.super){var superOptions=Ctor.super.options,cachedSuperOptions=Ctor.superOptions,extendOptions=Ctor.extendOptions;superOptions!==cachedSuperOptions&&(
// super option changed
Ctor.superOptions=superOptions,extendOptions.render=options.render,extendOptions.staticRenderFns=options.staticRenderFns,extendOptions._scopeId=options._scopeId,options=Ctor.options=mergeOptions(superOptions,extendOptions),options.name&&(options.components[options.name]=Ctor))}return options}function Vue$3(options){"production"===process.env.NODE_ENV||this instanceof Vue$3||warn("Vue is a constructor and should be called with the `new` keyword"),this._init(options)}/*  */
function initUse(Vue){Vue.use=function(plugin){/* istanbul ignore if */
if(!plugin.installed){
// additional parameters
var args=toArray(arguments,1);return args.unshift(this),"function"==typeof plugin.install?plugin.install.apply(plugin,args):plugin.apply(null,args),plugin.installed=!0,this}}}/*  */
function initMixin$1(Vue){Vue.mixin=function(mixin){this.options=mergeOptions(this.options,mixin)}}/*  */
function initExtend(Vue){/**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
Vue.cid=0;var cid=1;/**
	   * Class inheritance
	   */
Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this,SuperId=Super.cid,cachedCtors=extendOptions._Ctor||(extendOptions._Ctor={});if(cachedCtors[SuperId])return cachedCtors[SuperId];var name=extendOptions.name||Super.options.name;"production"!==process.env.NODE_ENV&&(/^[a-zA-Z][\w-]*$/.test(name)||warn('Invalid component name: "'+name+'". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.'));var Sub=function(options){this._init(options)};
// allow further extension/mixin/plugin usage
// create asset registers, so extended classes
// can have their private assets too.
// enable recursive self-lookup
// keep a reference to the super options at extension time.
// later at instantiation we can check if Super's options have
// been updated.
// cache constructor
return Sub.prototype=Object.create(Super.prototype),Sub.prototype.constructor=Sub,Sub.cid=cid++,Sub.options=mergeOptions(Super.options,extendOptions),Sub.super=Super,Sub.extend=Super.extend,Sub.mixin=Super.mixin,Sub.use=Super.use,config._assetTypes.forEach(function(type){Sub[type]=Super[type]}),name&&(Sub.options.components[name]=Sub),Sub.superOptions=Super.options,Sub.extendOptions=extendOptions,cachedCtors[SuperId]=Sub,Sub}}/*  */
function initAssetRegisters(Vue){/**
	   * Create asset registration methods.
	   */
config._assetTypes.forEach(function(type){Vue[type]=function(id,definition){/* istanbul ignore if */
return definition?("production"!==process.env.NODE_ENV&&"component"===type&&config.isReservedTag(id)&&warn("Do not use built-in or reserved HTML elements as component id: "+id),"component"===type&&isPlainObject(definition)&&(definition.name=definition.name||id,definition=this.options._base.extend(definition)),"directive"===type&&"function"==typeof definition&&(definition={bind:definition,update:definition}),this.options[type+"s"][id]=definition,definition):this.options[type+"s"][id]}})}function getComponentName(opts){return opts&&(opts.Ctor.options.name||opts.tag)}function matches(pattern,name){return"string"==typeof pattern?pattern.split(",").indexOf(name)>-1:pattern.test(name)}function pruneCache(cache,filter){for(var key in cache){var cachedNode=cache[key];if(cachedNode){var name=getComponentName(cachedNode.componentOptions);name&&!filter(name)&&(pruneCacheEntry(cachedNode),cache[key]=null)}}}function pruneCacheEntry(vnode){vnode&&(vnode.componentInstance._inactive||callHook(vnode.componentInstance,"deactivated"),vnode.componentInstance.$destroy())}/*  */
function initGlobalAPI(Vue){
// config
var configDef={};configDef.get=function(){return config},"production"!==process.env.NODE_ENV&&(configDef.set=function(){warn("Do not replace the Vue.config object, set individual fields instead.")}),Object.defineProperty(Vue,"config",configDef),Vue.util=util,Vue.set=set$1,Vue.delete=del,Vue.nextTick=nextTick,Vue.options=Object.create(null),config._assetTypes.forEach(function(type){Vue.options[type+"s"]=Object.create(null)}),
// this is used to identify the "base" constructor to extend all plain-object
// components with in Weex's multi-instance scenarios.
Vue.options._base=Vue,extend(Vue.options.components,builtInComponents),initUse(Vue),initMixin$1(Vue),initExtend(Vue),initAssetRegisters(Vue)}/*  */
function genClassForVnode(vnode){for(var data=vnode.data,parentNode=vnode,childNode=vnode;childNode.componentInstance;)childNode=childNode.componentInstance._vnode,childNode.data&&(data=mergeClassData(childNode.data,data));for(;parentNode=parentNode.parent;)parentNode.data&&(data=mergeClassData(data,parentNode.data));return genClassFromData(data)}function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:child.class?[child.class,parent.class]:parent.class}}function genClassFromData(data){var dynamicClass=data.class,staticClass=data.staticClass;return staticClass||dynamicClass?concat(staticClass,stringifyClass(dynamicClass)):""}function concat(a,b){return a?b?a+" "+b:a:b||""}function stringifyClass(value){var res="";if(!value)return res;if("string"==typeof value)return value;if(Array.isArray(value)){for(var stringified,i=0,l=value.length;i<l;i++)value[i]&&(stringified=stringifyClass(value[i]))&&(res+=stringified+" ");return res.slice(0,-1)}if(isObject(value)){for(var key in value)value[key]&&(res+=key+" ");return res.slice(0,-1)}/* istanbul ignore next */
return res}function getTagNamespace(tag){
// basic support for MathML
// note it doesn't support other MathML elements being component roots
return isSVG(tag)?"svg":"math"===tag?"math":void 0}function isUnknownElement(tag){/* istanbul ignore if */
if(!inBrowser)return!0;if(isReservedTag(tag))return!1;/* istanbul ignore if */
if(tag=tag.toLowerCase(),null!=unknownElementCache[tag])return unknownElementCache[tag];var el=document.createElement(tag);return tag.indexOf("-")>-1?unknownElementCache[tag]=el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement:unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString())}/*  */
/**
	 * Query an element selector if it's not an element already.
	 */
function query(el){if("string"==typeof el){var selector=el;if(el=document.querySelector(el),!el)return"production"!==process.env.NODE_ENV&&warn("Cannot find element: "+selector),document.createElement("div")}return el}/*  */
function createElement$1(tagName,vnode){var elm=document.createElement(tagName);return"select"!==tagName?elm:(vnode.data&&vnode.data.attrs&&"multiple"in vnode.data.attrs&&elm.setAttribute("multiple","multiple"),elm)}function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName)}function createTextNode(text){return document.createTextNode(text)}function createComment(text){return document.createComment(text)}function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode)}function removeChild(node,child){node.removeChild(child)}function appendChild(node,child){node.appendChild(child)}function parentNode(node){return node.parentNode}function nextSibling(node){return node.nextSibling}function tagName(node){return node.tagName}function setTextContent(node,text){node.textContent=text}function setAttribute(node,key,val){node.setAttribute(key,val)}function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(key){var vm=vnode.context,ref=vnode.componentInstance||vnode.elm,refs=vm.$refs;isRemoval?Array.isArray(refs[key])?remove$1(refs[key],ref):refs[key]===ref&&(refs[key]=void 0):vnode.data.refInFor?Array.isArray(refs[key])&&refs[key].indexOf(ref)<0?refs[key].push(ref):refs[key]=[ref]:refs[key]=ref}}function isUndef(s){return null==s}function isDef(s){return null!=s}function sameVnode(vnode1,vnode2){return vnode1.key===vnode2.key&&vnode1.tag===vnode2.tag&&vnode1.isComment===vnode2.isComment&&!vnode1.data==!vnode2.data}function createKeyToOldIdx(children,beginIdx,endIdx){var i,key,map={};for(i=beginIdx;i<=endIdx;++i)key=children[i].key,isDef(key)&&(map[key]=i);return map}function createPatchFunction(backend){function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],void 0,elm)}function createRmCb(childElm,listeners){function remove$$1(){0===--remove$$1.listeners&&removeNode(childElm)}return remove$$1.listeners=listeners,remove$$1}function removeNode(el){var parent=nodeOps.parentNode(el);
// element may have already been removed due to v-html / v-text
parent&&nodeOps.removeChild(parent,el)}function createElm(vnode,insertedVnodeQueue,parentElm,refElm,nested){// for transition enter check
if(vnode.isRootInsert=!nested,!createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){var data=vnode.data,children=vnode.children,tag=vnode.tag;isDef(tag)?("production"!==process.env.NODE_ENV&&(data&&data.pre&&inPre++,inPre||vnode.ns||config.ignoredElements.length&&config.ignoredElements.indexOf(tag)>-1||!config.isUnknownElement(tag)||warn("Unknown custom element: <"+tag+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',vnode.context)),vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag,vnode),setScope(vnode),createChildren(vnode,children,insertedVnodeQueue),isDef(data)&&invokeCreateHooks(vnode,insertedVnodeQueue),insert(parentElm,vnode.elm,refElm),"production"!==process.env.NODE_ENV&&data&&data.pre&&inPre--):vnode.isComment?(vnode.elm=nodeOps.createComment(vnode.text),insert(parentElm,vnode.elm,refElm)):(vnode.elm=nodeOps.createTextNode(vnode.text),insert(parentElm,vnode.elm,refElm))}}function createComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i=vnode.data;if(isDef(i)){var isReactivated=isDef(vnode.componentInstance)&&i.keepAlive;
// after calling the init hook, if the vnode is a child component
// it should've created a child instance and mounted it. the child
// component also has set the placeholder vnode's elm.
// in that case we can just return the element and be done.
if(isDef(i=i.hook)&&isDef(i=i.init)&&i(vnode,!1,parentElm,refElm),isDef(vnode.componentInstance))return initComponent(vnode,insertedVnodeQueue),isReactivated&&reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm),!0}}function initComponent(vnode,insertedVnodeQueue){vnode.data.pendingInsert&&insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert),vnode.elm=vnode.componentInstance.$el,isPatchable(vnode)?(invokeCreateHooks(vnode,insertedVnodeQueue),setScope(vnode)):(
// empty component root.
// skip all element-related modules except for ref (#3455)
registerRef(vnode),
// make sure to invoke the insert hook
insertedVnodeQueue.push(vnode))}function reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm){for(var i,innerNode=vnode;innerNode.componentInstance;)if(innerNode=innerNode.componentInstance._vnode,isDef(i=innerNode.data)&&isDef(i=i.transition)){for(i=0;i<cbs.activate.length;++i)cbs.activate[i](emptyNode,innerNode);insertedVnodeQueue.push(innerNode);break}
// unlike a newly created component,
// a reactivated keep-alive component doesn't insert itself
insert(parentElm,vnode.elm,refElm)}function insert(parent,elm,ref){parent&&(ref?nodeOps.insertBefore(parent,elm,ref):nodeOps.appendChild(parent,elm))}function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children))for(var i=0;i<children.length;++i)createElm(children[i],insertedVnodeQueue,vnode.elm,null,!0);else isPrimitive(vnode.text)&&nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(vnode.text))}function isPatchable(vnode){for(;vnode.componentInstance;)vnode=vnode.componentInstance._vnode;return isDef(vnode.tag)}function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1)cbs.create[i$1](emptyNode,vnode);i=vnode.data.hook,// Reuse variable
isDef(i)&&(i.create&&i.create(emptyNode,vnode),i.insert&&insertedVnodeQueue.push(vnode))}
// set scope id attribute for scoped CSS.
// this is implemented as a special case to avoid the overhead
// of going through the normal attribute patching process.
function setScope(vnode){var i;isDef(i=vnode.context)&&isDef(i=i.$options._scopeId)&&nodeOps.setAttribute(vnode.elm,i,""),isDef(i=activeInstance)&&i!==vnode.context&&isDef(i=i.$options._scopeId)&&nodeOps.setAttribute(vnode.elm,i,"")}function addVnodes(parentElm,refElm,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx)createElm(vnodes[startIdx],insertedVnodeQueue,parentElm,refElm)}function invokeDestroyHook(vnode){var i,j,data=vnode.data;if(isDef(data))for(isDef(i=data.hook)&&isDef(i=i.destroy)&&i(vnode),i=0;i<cbs.destroy.length;++i)cbs.destroy[i](vnode);if(isDef(i=vnode.children))for(j=0;j<vnode.children.length;++j)invokeDestroyHook(vnode.children[j])}function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];isDef(ch)&&(isDef(ch.tag)?(removeAndInvokeRemoveHook(ch),invokeDestroyHook(ch)):// Text node
removeNode(ch.elm))}}function removeAndInvokeRemoveHook(vnode,rm){if(rm||isDef(vnode.data)){var listeners=cbs.remove.length+1;for(rm?
// we have a recursively passed down rm callback
// increase the listeners count
rm.listeners+=listeners:
// directly removing
rm=createRmCb(vnode.elm,listeners),
// recursively invoke hooks on child component root node
isDef(i=vnode.componentInstance)&&isDef(i=i._vnode)&&isDef(i.data)&&removeAndInvokeRemoveHook(i,rm),i=0;i<cbs.remove.length;++i)cbs.remove[i](vnode,rm);isDef(i=vnode.data.hook)&&isDef(i=i.remove)?i(vnode,rm):rm()}else removeNode(vnode.elm)}function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){for(var oldKeyToIdx,idxInOld,elmToMove,refElm,oldStartIdx=0,newStartIdx=0,oldEndIdx=oldCh.length-1,oldStartVnode=oldCh[0],oldEndVnode=oldCh[oldEndIdx],newEndIdx=newCh.length-1,newStartVnode=newCh[0],newEndVnode=newCh[newEndIdx],canMove=!removeOnly;oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx;)isUndef(oldStartVnode)?oldStartVnode=oldCh[++oldStartIdx]:isUndef(oldEndVnode)?oldEndVnode=oldCh[--oldEndIdx]:sameVnode(oldStartVnode,newStartVnode)?(patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue),oldStartVnode=oldCh[++oldStartIdx],newStartVnode=newCh[++newStartIdx]):sameVnode(oldEndVnode,newEndVnode)?(patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue),oldEndVnode=oldCh[--oldEndIdx],newEndVnode=newCh[--newEndIdx]):sameVnode(oldStartVnode,newEndVnode)?(// Vnode moved right
patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue),canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm)),oldStartVnode=oldCh[++oldStartIdx],newEndVnode=newCh[--newEndIdx]):sameVnode(oldEndVnode,newStartVnode)?(// Vnode moved left
patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue),canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm),oldEndVnode=oldCh[--oldEndIdx],newStartVnode=newCh[++newStartIdx]):(isUndef(oldKeyToIdx)&&(oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx)),idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:null,isUndef(idxInOld)?(// New element
createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm),newStartVnode=newCh[++newStartIdx]):(elmToMove=oldCh[idxInOld],/* istanbul ignore if */
"production"===process.env.NODE_ENV||elmToMove||warn("It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key."),sameVnode(elmToMove,newStartVnode)?(patchVnode(elmToMove,newStartVnode,insertedVnodeQueue),oldCh[idxInOld]=void 0,canMove&&nodeOps.insertBefore(parentElm,newStartVnode.elm,oldStartVnode.elm),newStartVnode=newCh[++newStartIdx]):(
// same key but different element. treat as new element
createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm),newStartVnode=newCh[++newStartIdx])));oldStartIdx>oldEndIdx?(refElm=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm,addVnodes(parentElm,refElm,newCh,newStartIdx,newEndIdx,insertedVnodeQueue)):newStartIdx>newEndIdx&&removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx)}function patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly){if(oldVnode!==vnode){
// reuse element for static trees.
// note we only do this if the vnode is cloned -
// if the new node is not cloned it means the render functions have been
// reset by the hot-reload-api and we need to do a proper re-render.
if(vnode.isStatic&&oldVnode.isStatic&&vnode.key===oldVnode.key&&(vnode.isCloned||vnode.isOnce))return vnode.elm=oldVnode.elm,void(vnode.componentInstance=oldVnode.componentInstance);var i,data=vnode.data,hasData=isDef(data);hasData&&isDef(i=data.hook)&&isDef(i=i.prepatch)&&i(oldVnode,vnode);var elm=vnode.elm=oldVnode.elm,oldCh=oldVnode.children,ch=vnode.children;if(hasData&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i)cbs.update[i](oldVnode,vnode);isDef(i=data.hook)&&isDef(i=i.update)&&i(oldVnode,vnode)}isUndef(vnode.text)?isDef(oldCh)&&isDef(ch)?oldCh!==ch&&updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly):isDef(ch)?(isDef(oldVnode.text)&&nodeOps.setTextContent(elm,""),addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue)):isDef(oldCh)?removeVnodes(elm,oldCh,0,oldCh.length-1):isDef(oldVnode.text)&&nodeOps.setTextContent(elm,""):oldVnode.text!==vnode.text&&nodeOps.setTextContent(elm,vnode.text),hasData&&isDef(i=data.hook)&&isDef(i=i.postpatch)&&i(oldVnode,vnode)}}function invokeInsertHook(vnode,queue,initial){
// delay insert hooks for component root nodes, invoke them after the
// element is really inserted
if(initial&&vnode.parent)vnode.parent.data.pendingInsert=queue;else for(var i=0;i<queue.length;++i)queue[i].data.hook.insert(queue[i])}
// Note: this is a browser-only function so we can assume elms are DOM nodes.
function hydrate(elm,vnode,insertedVnodeQueue){if("production"!==process.env.NODE_ENV&&!assertNodeMatch(elm,vnode))return!1;vnode.elm=elm;var tag=vnode.tag,data=vnode.data,children=vnode.children;if(isDef(data)&&(isDef(i=data.hook)&&isDef(i=i.init)&&i(vnode,!0),isDef(i=vnode.componentInstance)))
// child component. it should have hydrated its own tree.
return initComponent(vnode,insertedVnodeQueue),!0;if(isDef(tag)){if(isDef(children))
// empty element, allow client to pick up and populate children
if(elm.hasChildNodes()){for(var childrenMatch=!0,childNode=elm.firstChild,i$1=0;i$1<children.length;i$1++){if(!childNode||!hydrate(childNode,children[i$1],insertedVnodeQueue)){childrenMatch=!1;break}childNode=childNode.nextSibling}
// if childNode is not null, it means the actual childNodes list is
// longer than the virtual children list.
if(!childrenMatch||childNode)return"production"===process.env.NODE_ENV||"undefined"==typeof console||bailed||(bailed=!0,console.warn("Parent: ",elm),console.warn("Mismatching childNodes vs. VNodes: ",elm.childNodes,children)),!1}else createChildren(vnode,children,insertedVnodeQueue);if(isDef(data))for(var key in data)if(!isRenderedModule(key)){invokeCreateHooks(vnode,insertedVnodeQueue);break}}else elm.data!==vnode.text&&(elm.data=vnode.text);return!0}function assertNodeMatch(node,vnode){return vnode.tag?0===vnode.tag.indexOf("vue-component")||vnode.tag.toLowerCase()===(node.tagName&&node.tagName.toLowerCase()):node.nodeType===(vnode.isComment?8:3)}var i,j,cbs={},modules=backend.modules,nodeOps=backend.nodeOps;for(i=0;i<hooks$1.length;++i)for(cbs[hooks$1[i]]=[],j=0;j<modules.length;++j)void 0!==modules[j][hooks$1[i]]&&cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);var inPre=0,bailed=!1,isRenderedModule=makeMap("attrs,style,class,staticClass,staticStyle,key");return function(oldVnode,vnode,hydrating,removeOnly,parentElm,refElm){if(!vnode)return void(oldVnode&&invokeDestroyHook(oldVnode));var isInitialPatch=!1,insertedVnodeQueue=[];if(oldVnode){var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode))
// patch existing root node
patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly);else{if(isRealElement){if(
// mounting to a real element
// check if this is server-rendered content and if we can perform
// a successful hydration.
1===oldVnode.nodeType&&oldVnode.hasAttribute("server-rendered")&&(oldVnode.removeAttribute("server-rendered"),hydrating=!0),hydrating){if(hydrate(oldVnode,vnode,insertedVnodeQueue))return invokeInsertHook(vnode,insertedVnodeQueue,!0),oldVnode;"production"!==process.env.NODE_ENV&&warn("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")}
// either not server-rendered, or hydration failed.
// create an empty node and replace it
oldVnode=emptyNodeAt(oldVnode)}
// replacing existing element
var oldElm=oldVnode.elm,parentElm$1=nodeOps.parentNode(oldElm);if(createElm(vnode,insertedVnodeQueue,
// extremely rare edge case: do not insert if old element is in a
// leaving transition. Only happens when combining transition +
// keep-alive + HOCs. (#4590)
oldElm._leaveCb?null:parentElm$1,nodeOps.nextSibling(oldElm)),vnode.parent){for(
// component root element replaced.
// update parent placeholder node element, recursively
var ancestor=vnode.parent;ancestor;)ancestor.elm=vnode.elm,ancestor=ancestor.parent;if(isPatchable(vnode))for(var i=0;i<cbs.create.length;++i)cbs.create[i](emptyNode,vnode.parent)}null!==parentElm$1?removeVnodes(parentElm$1,[oldVnode],0,0):isDef(oldVnode.tag)&&invokeDestroyHook(oldVnode)}}else
// empty mount (likely as component), create new root element
isInitialPatch=!0,createElm(vnode,insertedVnodeQueue,parentElm,refElm);return invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch),vnode.elm}}function updateDirectives(oldVnode,vnode){(oldVnode.data.directives||vnode.data.directives)&&_update(oldVnode,vnode)}function _update(oldVnode,vnode){var key,oldDir,dir,isCreate=oldVnode===emptyNode,isDestroy=vnode===emptyNode,oldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context),newDirs=normalizeDirectives$1(vnode.data.directives,vnode.context),dirsWithInsert=[],dirsWithPostpatch=[];for(key in newDirs)oldDir=oldDirs[key],dir=newDirs[key],oldDir?(
// existing directive, update
dir.oldValue=oldDir.value,callHook$1(dir,"update",vnode,oldVnode),dir.def&&dir.def.componentUpdated&&dirsWithPostpatch.push(dir)):(
// new directive, bind
callHook$1(dir,"bind",vnode,oldVnode),dir.def&&dir.def.inserted&&dirsWithInsert.push(dir));if(dirsWithInsert.length){var callInsert=function(){for(var i=0;i<dirsWithInsert.length;i++)callHook$1(dirsWithInsert[i],"inserted",vnode,oldVnode)};isCreate?mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),"insert",callInsert,"dir-insert"):callInsert()}if(dirsWithPostpatch.length&&mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),"postpatch",function(){for(var i=0;i<dirsWithPostpatch.length;i++)callHook$1(dirsWithPostpatch[i],"componentUpdated",vnode,oldVnode)},"dir-postpatch"),!isCreate)for(key in oldDirs)newDirs[key]||
// no longer present, unbind
callHook$1(oldDirs[key],"unbind",oldVnode,oldVnode,isDestroy)}function normalizeDirectives$1(dirs,vm){var res=Object.create(null);if(!dirs)return res;var i,dir;for(i=0;i<dirs.length;i++)dir=dirs[i],dir.modifiers||(dir.modifiers=emptyModifiers),res[getRawDirName(dir)]=dir,dir.def=resolveAsset(vm.$options,"directives",dir.name,!0);return res}function getRawDirName(dir){return dir.rawName||dir.name+"."+Object.keys(dir.modifiers||{}).join(".")}function callHook$1(dir,hook,vnode,oldVnode,isDestroy){var fn=dir.def&&dir.def[hook];fn&&fn(vnode.elm,dir,vnode,oldVnode,isDestroy)}/*  */
function updateAttrs(oldVnode,vnode){if(oldVnode.data.attrs||vnode.data.attrs){var key,cur,old,elm=vnode.elm,oldAttrs=oldVnode.data.attrs||{},attrs=vnode.data.attrs||{};
// clone observed objects, as the user probably wants to mutate it
attrs.__ob__&&(attrs=vnode.data.attrs=extend({},attrs));for(key in attrs)cur=attrs[key],old=oldAttrs[key],old!==cur&&setAttr(elm,key,cur);
// #4391: in IE9, setting type can reset value for input[type=radio]
/* istanbul ignore if */
isIE9&&attrs.value!==oldAttrs.value&&setAttr(elm,"value",attrs.value);for(key in oldAttrs)null==attrs[key]&&(isXlink(key)?elm.removeAttributeNS(xlinkNS,getXlinkProp(key)):isEnumeratedAttr(key)||elm.removeAttribute(key))}}function setAttr(el,key,value){isBooleanAttr(key)?
// set attribute for blank value
// e.g. <option disabled>Select one</option>
isFalsyAttrValue(value)?el.removeAttribute(key):el.setAttribute(key,key):isEnumeratedAttr(key)?el.setAttribute(key,isFalsyAttrValue(value)||"false"===value?"false":"true"):isXlink(key)?isFalsyAttrValue(value)?el.removeAttributeNS(xlinkNS,getXlinkProp(key)):el.setAttributeNS(xlinkNS,key,value):isFalsyAttrValue(value)?el.removeAttribute(key):el.setAttribute(key,value)}/*  */
function updateClass(oldVnode,vnode){var el=vnode.elm,data=vnode.data,oldData=oldVnode.data;if(data.staticClass||data.class||oldData&&(oldData.staticClass||oldData.class)){var cls=genClassForVnode(vnode),transitionClass=el._transitionClasses;transitionClass&&(cls=concat(cls,stringifyClass(transitionClass))),
// set the class
cls!==el._prevClass&&(el.setAttribute("class",cls),el._prevClass=cls)}}function add$2(event,handler,once,capture){if(once){var oldHandler=handler,_target=target$1;// save current target element in closure
handler=function(ev){remove$3(event,handler,capture,_target),1===arguments.length?oldHandler(ev):oldHandler.apply(null,arguments)}}target$1.addEventListener(event,handler,capture)}function remove$3(event,handler,capture,_target){(_target||target$1).removeEventListener(event,handler,capture)}function updateDOMListeners(oldVnode,vnode){if(oldVnode.data.on||vnode.data.on){var on=vnode.data.on||{},oldOn=oldVnode.data.on||{};target$1=vnode.elm,updateListeners(on,oldOn,add$2,remove$3,vnode.context)}}/*  */
function updateDOMProps(oldVnode,vnode){if(oldVnode.data.domProps||vnode.data.domProps){var key,cur,elm=vnode.elm,oldProps=oldVnode.data.domProps||{},props=vnode.data.domProps||{};
// clone observed objects, as the user probably wants to mutate it
props.__ob__&&(props=vnode.data.domProps=extend({},props));for(key in oldProps)null==props[key]&&(elm[key]="");for(key in props)
// ignore children if the node has textContent or innerHTML,
// as these will throw away existing DOM nodes and cause removal errors
// on subsequent patches (#3360)
if(cur=props[key],"textContent"!==key&&"innerHTML"!==key||(vnode.children&&(vnode.children.length=0),cur!==oldProps[key]))if("value"===key){
// store value as _value as well since
// non-string values will be stringified
elm._value=cur;
// avoid resetting cursor position when value is the same
var strCur=null==cur?"":String(cur);shouldUpdateValue(elm,vnode,strCur)&&(elm.value=strCur)}else elm[key]=cur}}
// check platforms/web/util/attrs.js acceptValue
function shouldUpdateValue(elm,vnode,checkVal){return!elm.composing&&("option"===vnode.tag||isDirty(elm,checkVal)||isInputChanged(vnode,checkVal))}function isDirty(elm,checkVal){
// return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
return document.activeElement!==elm&&elm.value!==checkVal}function isInputChanged(vnode,newVal){var value=vnode.elm.value,modifiers=vnode.elm._vModifiers;// injected by v-model runtime
// injected by v-model runtime
return modifiers&&modifiers.number||"number"===vnode.elm.type?toNumber(value)!==toNumber(newVal):modifiers&&modifiers.trim?value.trim()!==newVal.trim():value!==newVal}
// merge static and dynamic style data on the same vnode
function normalizeStyleData(data){var style=normalizeStyleBinding(data.style);
// static style is pre-processed into an object during compilation
// and is always a fresh object, so it's safe to merge into it
return data.staticStyle?extend(data.staticStyle,style):style}
// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle){return Array.isArray(bindingStyle)?toObject(bindingStyle):"string"==typeof bindingStyle?parseStyleText(bindingStyle):bindingStyle}/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
function getStyle(vnode,checkChild){var styleData,res={};if(checkChild)for(var childNode=vnode;childNode.componentInstance;)childNode=childNode.componentInstance._vnode,childNode.data&&(styleData=normalizeStyleData(childNode.data))&&extend(res,styleData);(styleData=normalizeStyleData(vnode.data))&&extend(res,styleData);for(var parentNode=vnode;parentNode=parentNode.parent;)parentNode.data&&(styleData=normalizeStyleData(parentNode.data))&&extend(res,styleData);return res}function updateStyle(oldVnode,vnode){var data=vnode.data,oldData=oldVnode.data;if(data.staticStyle||data.style||oldData.staticStyle||oldData.style){var cur,name,el=vnode.elm,oldStaticStyle=oldVnode.data.staticStyle,oldStyleBinding=oldVnode.data.style||{},oldStyle=oldStaticStyle||oldStyleBinding,style=normalizeStyleBinding(vnode.data.style)||{};vnode.data.style=style.__ob__?extend({},style):style;var newStyle=getStyle(vnode,!0);for(name in oldStyle)null==newStyle[name]&&setProp(el,name,"");for(name in newStyle)cur=newStyle[name],cur!==oldStyle[name]&&
// ie9 setting to null has no effect, must use empty string
setProp(el,name,null==cur?"":cur)}}/*  */
/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
function addClass(el,cls){/* istanbul ignore if */
if(cls&&cls.trim())/* istanbul ignore else */
if(el.classList)cls.indexOf(" ")>-1?cls.split(/\s+/).forEach(function(c){return el.classList.add(c)}):el.classList.add(cls);else{var cur=" "+el.getAttribute("class")+" ";cur.indexOf(" "+cls+" ")<0&&el.setAttribute("class",(cur+cls).trim())}}/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
function removeClass(el,cls){/* istanbul ignore if */
if(cls&&cls.trim())/* istanbul ignore else */
if(el.classList)cls.indexOf(" ")>-1?cls.split(/\s+/).forEach(function(c){return el.classList.remove(c)}):el.classList.remove(cls);else{for(var cur=" "+el.getAttribute("class")+" ",tar=" "+cls+" ";cur.indexOf(tar)>=0;)cur=cur.replace(tar," ");el.setAttribute("class",cur.trim())}}function nextFrame(fn){raf(function(){raf(fn)})}function addTransitionClass(el,cls){(el._transitionClasses||(el._transitionClasses=[])).push(cls),addClass(el,cls)}function removeTransitionClass(el,cls){el._transitionClasses&&remove$1(el._transitionClasses,cls),removeClass(el,cls)}function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType),type=ref.type,timeout=ref.timeout,propCount=ref.propCount;if(!type)return cb();var event=type===TRANSITION?transitionEndEvent:animationEndEvent,ended=0,end=function(){el.removeEventListener(event,onEnd),cb()},onEnd=function(e){e.target===el&&++ended>=propCount&&end()};setTimeout(function(){ended<propCount&&end()},timeout+1),el.addEventListener(event,onEnd)}function getTransitionInfo(el,expectedType){var type,styles=window.getComputedStyle(el),transitioneDelays=styles[transitionProp+"Delay"].split(", "),transitionDurations=styles[transitionProp+"Duration"].split(", "),transitionTimeout=getTimeout(transitioneDelays,transitionDurations),animationDelays=styles[animationProp+"Delay"].split(", "),animationDurations=styles[animationProp+"Duration"].split(", "),animationTimeout=getTimeout(animationDelays,animationDurations),timeout=0,propCount=0;/* istanbul ignore if */
expectedType===TRANSITION?transitionTimeout>0&&(type=TRANSITION,timeout=transitionTimeout,propCount=transitionDurations.length):expectedType===ANIMATION?animationTimeout>0&&(type=ANIMATION,timeout=animationTimeout,propCount=animationDurations.length):(timeout=Math.max(transitionTimeout,animationTimeout),type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null,propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0);var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+"Property"]);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform}}function getTimeout(delays,durations){/* istanbul ignore next */
for(;delays.length<durations.length;)delays=delays.concat(delays);return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i])}))}function toMs(s){return 1e3*Number(s.slice(0,-1))}/*  */
function enter(vnode,toggleDisplay){var el=vnode.elm;
// call leave callback now
el._leaveCb&&(el._leaveCb.cancelled=!0,el._leaveCb());var data=resolveTransition(vnode.data.transition);if(data&&!el._enterCb&&1===el.nodeType)/* istanbul ignore if */
{for(var css=data.css,type=data.type,enterClass=data.enterClass,enterToClass=data.enterToClass,enterActiveClass=data.enterActiveClass,appearClass=data.appearClass,appearToClass=data.appearToClass,appearActiveClass=data.appearActiveClass,beforeEnter=data.beforeEnter,enter=data.enter,afterEnter=data.afterEnter,enterCancelled=data.enterCancelled,beforeAppear=data.beforeAppear,appear=data.appear,afterAppear=data.afterAppear,appearCancelled=data.appearCancelled,context=activeInstance,transitionNode=activeInstance.$vnode;transitionNode&&transitionNode.parent;)transitionNode=transitionNode.parent,context=transitionNode.context;var isAppear=!context._isMounted||!vnode.isRootInsert;if(!isAppear||appear||""===appear){var startClass=isAppear?appearClass:enterClass,activeClass=isAppear?appearActiveClass:enterActiveClass,toClass=isAppear?appearToClass:enterToClass,beforeEnterHook=isAppear?beforeAppear||beforeEnter:beforeEnter,enterHook=isAppear&&"function"==typeof appear?appear:enter,afterEnterHook=isAppear?afterAppear||afterEnter:afterEnter,enterCancelledHook=isAppear?appearCancelled||enterCancelled:enterCancelled,expectsCSS=css!==!1&&!isIE9,userWantsControl=enterHook&&
// enterHook may be a bound method which exposes
// the length of original fn as _length
(enterHook._length||enterHook.length)>1,cb=el._enterCb=once(function(){expectsCSS&&(removeTransitionClass(el,toClass),removeTransitionClass(el,activeClass)),cb.cancelled?(expectsCSS&&removeTransitionClass(el,startClass),enterCancelledHook&&enterCancelledHook(el)):afterEnterHook&&afterEnterHook(el),el._enterCb=null});vnode.data.show||
// remove pending leave element on enter by injecting an insert hook
mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),"insert",function(){var parent=el.parentNode,pendingNode=parent&&parent._pending&&parent._pending[vnode.key];pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb&&pendingNode.elm._leaveCb(),enterHook&&enterHook(el,cb)},"transition-insert"),
// start enter transition
beforeEnterHook&&beforeEnterHook(el),expectsCSS&&(addTransitionClass(el,startClass),addTransitionClass(el,activeClass),nextFrame(function(){addTransitionClass(el,toClass),removeTransitionClass(el,startClass),cb.cancelled||userWantsControl||whenTransitionEnds(el,type,cb)})),vnode.data.show&&(toggleDisplay&&toggleDisplay(),enterHook&&enterHook(el,cb)),expectsCSS||userWantsControl||cb()}}}function leave(vnode,rm){function performLeave(){
// the delayed leave may have already been cancelled
cb.cancelled||(
// record leaving element
vnode.data.show||((el.parentNode._pending||(el.parentNode._pending={}))[vnode.key]=vnode),beforeLeave&&beforeLeave(el),expectsCSS&&(addTransitionClass(el,leaveClass),addTransitionClass(el,leaveActiveClass),nextFrame(function(){addTransitionClass(el,leaveToClass),removeTransitionClass(el,leaveClass),cb.cancelled||userWantsControl||whenTransitionEnds(el,type,cb)})),leave&&leave(el,cb),expectsCSS||userWantsControl||cb())}var el=vnode.elm;
// call enter callback now
el._enterCb&&(el._enterCb.cancelled=!0,el._enterCb());var data=resolveTransition(vnode.data.transition);if(!data)return rm();/* istanbul ignore if */
if(!el._leaveCb&&1===el.nodeType){var css=data.css,type=data.type,leaveClass=data.leaveClass,leaveToClass=data.leaveToClass,leaveActiveClass=data.leaveActiveClass,beforeLeave=data.beforeLeave,leave=data.leave,afterLeave=data.afterLeave,leaveCancelled=data.leaveCancelled,delayLeave=data.delayLeave,expectsCSS=css!==!1&&!isIE9,userWantsControl=leave&&
// leave hook may be a bound method which exposes
// the length of original fn as _length
(leave._length||leave.length)>1,cb=el._leaveCb=once(function(){el.parentNode&&el.parentNode._pending&&(el.parentNode._pending[vnode.key]=null),expectsCSS&&(removeTransitionClass(el,leaveToClass),removeTransitionClass(el,leaveActiveClass)),cb.cancelled?(expectsCSS&&removeTransitionClass(el,leaveClass),leaveCancelled&&leaveCancelled(el)):(rm(),afterLeave&&afterLeave(el)),el._leaveCb=null});delayLeave?delayLeave(performLeave):performLeave()}}function resolveTransition(def$$1){if(def$$1){/* istanbul ignore else */
if("object"==typeof def$$1){var res={};return def$$1.css!==!1&&extend(res,autoCssTransition(def$$1.name||"v")),extend(res,def$$1),res}return"string"==typeof def$$1?autoCssTransition(def$$1):void 0}}function once(fn){var called=!1;return function(){called||(called=!0,fn())}}function _enter(_,vnode){vnode.data.show||enter(vnode)}function setSelected(el,binding,vm){var value=binding.value,isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value))return void("production"!==process.env.NODE_ENV&&warn('<select multiple v-model="'+binding.expression+'"> expects an Array value for its binding, but got '+Object.prototype.toString.call(value).slice(8,-1),vm));for(var selected,option,i=0,l=el.options.length;i<l;i++)if(option=el.options[i],isMultiple)selected=looseIndexOf(value,getValue(option))>-1,option.selected!==selected&&(option.selected=selected);else if(looseEqual(getValue(option),value))return void(el.selectedIndex!==i&&(el.selectedIndex=i));isMultiple||(el.selectedIndex=-1)}function hasNoMatchingOption(value,options){for(var i=0,l=options.length;i<l;i++)if(looseEqual(getValue(options[i]),value))return!1;return!0}function getValue(option){return"_value"in option?option._value:option.value}function onCompositionStart(e){e.target.composing=!0}function onCompositionEnd(e){e.target.composing=!1,trigger(e.target,"input")}function trigger(el,type){var e=document.createEvent("HTMLEvents");e.initEvent(type,!0,!0),el.dispatchEvent(e)}/*  */
// recursively search for possible transition defined inside the component root
function locateNode(vnode){return!vnode.componentInstance||vnode.data&&vnode.data.transition?vnode:locateNode(vnode.componentInstance._vnode)}
// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;return compOptions&&compOptions.Ctor.options.abstract?getRealChild(getFirstComponentChild(compOptions.children)):vnode}function extractTransitionData(comp){var data={},options=comp.$options;
// props
for(var key in options.propsData)data[key]=comp[key];
// events.
// extract listeners and pass them directly to the transition methods
var listeners=options._parentListeners;for(var key$1 in listeners)data[camelize(key$1)]=listeners[key$1].fn;return data}function placeholder(h,rawChild){return/\d-keep-alive$/.test(rawChild.tag)?h("keep-alive"):null}function hasParentTransition(vnode){for(;vnode=vnode.parent;)if(vnode.data.transition)return!0}function isSameChild(child,oldChild){return oldChild.key===child.key&&oldChild.tag===child.tag}function callPendingCbs(c){/* istanbul ignore if */
c.elm._moveCb&&c.elm._moveCb(),/* istanbul ignore if */
c.elm._enterCb&&c.elm._enterCb()}function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect()}function applyTranslation(c){var oldPos=c.data.pos,newPos=c.data.newPos,dx=oldPos.left-newPos.left,dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=!0;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)",s.transitionDuration="0s"}}/*  */
// check whether current browser encodes a char inside attribute values
function shouldDecode(content,encoded){var div=document.createElement("div");return div.innerHTML='<div a="'+content+'">',div.innerHTML.indexOf(encoded)>0}function decode(html){return decoder=decoder||document.createElement("div"),decoder.innerHTML=html,decoder.textContent}function decodeAttr(value,shouldDecodeNewlines){return shouldDecodeNewlines&&(value=value.replace(nlRE,"\n")),value.replace(ltRE,"<").replace(gtRE,">").replace(ampRE,"&").replace(quoteRE,'"')}function parseHTML(html,options){function advance(n){index+=n,html=html.substring(n)}function parseStartTag(){var start=html.match(startTagOpen);if(start){var match={tagName:start[1],attrs:[],start:index};advance(start[0].length);for(var end,attr;!(end=html.match(startTagClose))&&(attr=html.match(attribute));)advance(attr[0].length),match.attrs.push(attr);if(end)return match.unarySlash=end[1],advance(end[0].length),match.end=index,match}}function handleStartTag(match){var tagName=match.tagName,unarySlash=match.unarySlash;expectHTML&&("p"===lastTag&&isNonPhrasingTag(tagName)&&parseEndTag(lastTag),canBeLeftOpenTag(tagName)&&lastTag===tagName&&parseEndTag(tagName));for(var unary=isUnaryTag$$1(tagName)||"html"===tagName&&"head"===lastTag||!!unarySlash,l=match.attrs.length,attrs=new Array(l),i=0;i<l;i++){var args=match.attrs[i];
// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
IS_REGEX_CAPTURING_BROKEN&&args[0].indexOf('""')===-1&&(""===args[3]&&delete args[3],""===args[4]&&delete args[4],""===args[5]&&delete args[5]);var value=args[3]||args[4]||args[5]||"";attrs[i]={name:args[1],value:decodeAttr(value,options.shouldDecodeNewlines)}}unary||(stack.push({tag:tagName,lowerCasedTag:tagName.toLowerCase(),attrs:attrs}),lastTag=tagName,unarySlash=""),options.start&&options.start(tagName,attrs,unary,match.start,match.end)}function parseEndTag(tagName,start,end){var pos,lowerCasedTagName;
// Find the closest opened tag of the same type
if(null==start&&(start=index),null==end&&(end=index),tagName&&(lowerCasedTagName=tagName.toLowerCase()),tagName)for(pos=stack.length-1;pos>=0&&stack[pos].lowerCasedTag!==lowerCasedTagName;pos--);else
// If no tag name is provided, clean shop
pos=0;if(pos>=0){
// Close all the open elements, up the stack
for(var i=stack.length-1;i>=pos;i--)options.end&&options.end(stack[i].tag,start,end);
// Remove the open elements from the stack
stack.length=pos,lastTag=pos&&stack[pos-1].tag}else"br"===lowerCasedTagName?options.start&&options.start(tagName,[],!0,start,end):"p"===lowerCasedTagName&&(options.start&&options.start(tagName,[],!1,start,end),options.end&&options.end(tagName,start,end))}for(var last,lastTag,stack=[],expectHTML=options.expectHTML,isUnaryTag$$1=options.isUnaryTag||no,index=0;html;){
// Make sure we're not in a script or style element
if(last=html,lastTag&&isScriptOrStyle(lastTag)){var stackedTag=lastTag.toLowerCase(),reStackedTag=reCache[stackedTag]||(reCache[stackedTag]=new RegExp("([\\s\\S]*?)(</"+stackedTag+"[^>]*>)","i")),endTagLength=0,rest=html.replace(reStackedTag,function(all,text,endTag){return endTagLength=endTag.length,"script"!==stackedTag&&"style"!==stackedTag&&"noscript"!==stackedTag&&(text=text.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),options.chars&&options.chars(text),""});index+=html.length-rest.length,html=rest,parseEndTag(stackedTag,index-endTagLength,index)}else{var textEnd=html.indexOf("<");if(0===textEnd){
// Comment:
if(comment.test(html)){var commentEnd=html.indexOf("-->");if(commentEnd>=0){advance(commentEnd+3);continue}}
// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
if(conditionalComment.test(html)){var conditionalEnd=html.indexOf("]>");if(conditionalEnd>=0){advance(conditionalEnd+2);continue}}
// Doctype:
var doctypeMatch=html.match(doctype);if(doctypeMatch){advance(doctypeMatch[0].length);continue}
// End tag:
var endTagMatch=html.match(endTag);if(endTagMatch){var curIndex=index;advance(endTagMatch[0].length),parseEndTag(endTagMatch[1],curIndex,index);continue}
// Start tag:
var startTagMatch=parseStartTag();if(startTagMatch){handleStartTag(startTagMatch);continue}}var text=void 0,rest$1=void 0,next=void 0;if(textEnd>0){for(rest$1=html.slice(textEnd);!(endTag.test(rest$1)||startTagOpen.test(rest$1)||comment.test(rest$1)||conditionalComment.test(rest$1)||(
// < in plain text, be forgiving and treat it as text
next=rest$1.indexOf("<",1),next<0));)textEnd+=next,rest$1=html.slice(textEnd);text=html.substring(0,textEnd),advance(textEnd)}textEnd<0&&(text=html,html=""),options.chars&&text&&options.chars(text)}if(html===last&&options.chars){options.chars(html);break}}
// Clean up any remaining tags
parseEndTag()}/*  */
function parseFilters(exp){function pushFilter(){(filters||(filters=[])).push(exp.slice(lastFilterIndex,i).trim()),lastFilterIndex=i+1}var c,prev,i,expression,filters,inSingle=!1,inDouble=!1,inTemplateString=!1,inRegex=!1,curly=0,square=0,paren=0,lastFilterIndex=0;for(i=0;i<exp.length;i++)if(prev=c,c=exp.charCodeAt(i),inSingle)39===c&&92!==prev&&(inSingle=!1);else if(inDouble)34===c&&92!==prev&&(inDouble=!1);else if(inTemplateString)96===c&&92!==prev&&(inTemplateString=!1);else if(inRegex)47===c&&92!==prev&&(inRegex=!1);else if(124!==c||// pipe
124===exp.charCodeAt(i+1)||124===exp.charCodeAt(i-1)||curly||square||paren){switch(c){case 34:inDouble=!0;break;// "
case 39:inSingle=!0;break;// '
case 96:inTemplateString=!0;break;// `
case 40:paren++;break;// (
case 41:paren--;break;// )
case 91:square++;break;// [
case 93:square--;break;// ]
case 123:curly++;break;// {
case 125:curly--}if(47===c){
// find first non-whitespace prev char
for(// /
var j=i-1,p=void 0;j>=0&&(p=exp.charAt(j)," "===p);j--);p&&/[\w$]/.test(p)||(inRegex=!0)}}else void 0===expression?(
// first filter, end of expression
lastFilterIndex=i+1,expression=exp.slice(0,i).trim()):pushFilter();if(void 0===expression?expression=exp.slice(0,i).trim():0!==lastFilterIndex&&pushFilter(),filters)for(i=0;i<filters.length;i++)expression=wrapFilter(expression,filters[i]);return expression}function wrapFilter(exp,filter){var i=filter.indexOf("(");if(i<0)
// _f: resolveFilter
return'_f("'+filter+'")('+exp+")";var name=filter.slice(0,i),args=filter.slice(i+1);return'_f("'+name+'")('+exp+","+args}function parseText(text,delimiters){var tagRE=delimiters?buildRegex(delimiters):defaultTagRE;if(tagRE.test(text)){for(var match,index,tokens=[],lastIndex=tagRE.lastIndex=0;match=tagRE.exec(text);){index=match.index,
// push text token
index>lastIndex&&tokens.push(JSON.stringify(text.slice(lastIndex,index)));
// tag token
var exp=parseFilters(match[1].trim());tokens.push("_s("+exp+")"),lastIndex=index+match[0].length}return lastIndex<text.length&&tokens.push(JSON.stringify(text.slice(lastIndex))),tokens.join("+")}}/*  */
function baseWarn(msg){console.error("[Vue parser]: "+msg)}function pluckModuleFunction(modules,key){return modules?modules.map(function(m){return m[key]}).filter(function(_){return _}):[]}function addProp(el,name,value){(el.props||(el.props=[])).push({name:name,value:value})}function addAttr(el,name,value){(el.attrs||(el.attrs=[])).push({name:name,value:value})}function addDirective(el,name,rawName,value,arg,modifiers){(el.directives||(el.directives=[])).push({name:name,rawName:rawName,value:value,arg:arg,modifiers:modifiers})}function addHandler(el,name,value,modifiers,important){
// check capture modifier
modifiers&&modifiers.capture&&(delete modifiers.capture,name="!"+name),modifiers&&modifiers.once&&(delete modifiers.once,name="~"+name);var events;modifiers&&modifiers.native?(delete modifiers.native,events=el.nativeEvents||(el.nativeEvents={})):events=el.events||(el.events={});var newHandler={value:value,modifiers:modifiers},handlers=events[name];/* istanbul ignore if */
Array.isArray(handlers)?important?handlers.unshift(newHandler):handlers.push(newHandler):handlers?events[name]=important?[newHandler,handlers]:[handlers,newHandler]:events[name]=newHandler}function getBindingAttr(el,name,getStatic){var dynamicValue=getAndRemoveAttr(el,":"+name)||getAndRemoveAttr(el,"v-bind:"+name);if(null!=dynamicValue)return parseFilters(dynamicValue);if(getStatic!==!1){var staticValue=getAndRemoveAttr(el,name);if(null!=staticValue)return JSON.stringify(staticValue)}}function getAndRemoveAttr(el,name){var val;if(null!=(val=el.attrsMap[name]))for(var list=el.attrsList,i=0,l=list.length;i<l;i++)if(list[i].name===name){list.splice(i,1);break}return val}/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */
function parseModel(val){if(str=val,len=str.length,index$1=expressionPos=expressionEndPos=0,val.indexOf("[")<0||val.lastIndexOf("]")<len-1)return{exp:val,idx:null};for(;!eof();)chr=next(),/* istanbul ignore if */
isStringStart(chr)?parseString(chr):91===chr&&parseBracket(chr);return{exp:val.substring(0,expressionPos),idx:val.substring(expressionPos+1,expressionEndPos)}}function next(){return str.charCodeAt(++index$1)}function eof(){return index$1>=len}function isStringStart(chr){return 34===chr||39===chr}function parseBracket(chr){var inBracket=1;for(expressionPos=index$1;!eof();)if(chr=next(),isStringStart(chr))parseString(chr);else if(91===chr&&inBracket++,93===chr&&inBracket--,0===inBracket){expressionEndPos=index$1;break}}function parseString(chr){for(var stringQuote=chr;!eof()&&(chr=next(),chr!==stringQuote););}/**
	 * Convert HTML string to AST.
	 */
function parse(template,options){warn$1=options.warn||baseWarn,platformGetTagNamespace=options.getTagNamespace||no,platformMustUseProp=options.mustUseProp||no,platformIsPreTag=options.isPreTag||no,preTransforms=pluckModuleFunction(options.modules,"preTransformNode"),transforms=pluckModuleFunction(options.modules,"transformNode"),postTransforms=pluckModuleFunction(options.modules,"postTransformNode"),delimiters=options.delimiters;var root,currentParent,stack=[],preserveWhitespace=options.preserveWhitespace!==!1,inVPre=!1,inPre=!1,warned=!1;return parseHTML(template,{expectHTML:options.expectHTML,isUnaryTag:options.isUnaryTag,shouldDecodeNewlines:options.shouldDecodeNewlines,start:function(tag,attrs,unary){function checkRootConstraints(el){"production"===process.env.NODE_ENV||warned||("slot"!==el.tag&&"template"!==el.tag||(warned=!0,warn$1("Cannot use <"+el.tag+"> as component root element because it may contain multiple nodes:\n"+template)),el.attrsMap.hasOwnProperty("v-for")&&(warned=!0,warn$1("Cannot use v-for on stateful component root element because it renders multiple elements:\n"+template)))}
// check namespace.
// inherit parent ns if there is one
var ns=currentParent&&currentParent.ns||platformGetTagNamespace(tag);
// handle IE svg bug
/* istanbul ignore if */
isIE&&"svg"===ns&&(attrs=guardIESVGBug(attrs));var element={type:1,tag:tag,attrsList:attrs,attrsMap:makeAttrsMap(attrs),parent:currentParent,children:[]};ns&&(element.ns=ns),isForbiddenTag(element)&&!isServerRendering()&&(element.forbidden=!0,"production"!==process.env.NODE_ENV&&warn$1("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <"+tag+">, as they will not be parsed."));
// apply pre-transforms
for(var i=0;i<preTransforms.length;i++)preTransforms[i](element,options);if(inVPre||(processPre(element),element.pre&&(inVPre=!0)),platformIsPreTag(element.tag)&&(inPre=!0),inVPre)processRawAttrs(element);else{processFor(element),processIf(element),processOnce(element),processKey(element),
// determine whether this is a plain element after
// removing structural attributes
element.plain=!element.key&&!attrs.length,processRef(element),processSlot(element),processComponent(element);for(var i$1=0;i$1<transforms.length;i$1++)transforms[i$1](element,options);processAttrs(element)}if(
// tree management
root?stack.length||(
// allow root elements with v-if, v-else-if and v-else
root.if&&(element.elseif||element.else)?(checkRootConstraints(element),addIfCondition(root,{exp:element.elseif,block:element})):"production"===process.env.NODE_ENV||warned||(warned=!0,warn$1("Component template should contain exactly one root element:\n\n"+template+"\n\nIf you are using v-if on multiple elements, use v-else-if to chain them instead."))):(root=element,checkRootConstraints(root)),currentParent&&!element.forbidden)if(element.elseif||element.else)processIfConditions(element,currentParent);else if(element.slotScope){// scoped slot
currentParent.plain=!1;var name=element.slotTarget||"default";(currentParent.scopedSlots||(currentParent.scopedSlots={}))[name]=element}else currentParent.children.push(element),element.parent=currentParent;unary||(currentParent=element,stack.push(element));
// apply post-transforms
for(var i$2=0;i$2<postTransforms.length;i$2++)postTransforms[i$2](element,options)},end:function(){
// remove trailing whitespace
var element=stack[stack.length-1],lastNode=element.children[element.children.length-1];lastNode&&3===lastNode.type&&" "===lastNode.text&&element.children.pop(),
// pop stack
stack.length-=1,currentParent=stack[stack.length-1],
// check pre state
element.pre&&(inVPre=!1),platformIsPreTag(element.tag)&&(inPre=!1)},chars:function(text){if(!currentParent)return void("production"===process.env.NODE_ENV||warned||text!==template||(warned=!0,warn$1("Component template requires a root element, rather than just text:\n\n"+template)));
// IE textarea placeholder bug
/* istanbul ignore if */
if(!isIE||"textarea"!==currentParent.tag||currentParent.attrsMap.placeholder!==text){var children=currentParent.children;if(text=inPre||text.trim()?decodeHTMLCached(text):preserveWhitespace&&children.length?" ":""){var expression;!inVPre&&" "!==text&&(expression=parseText(text,delimiters))?children.push({type:2,expression:expression,text:text}):" "===text&&" "===children[children.length-1].text||currentParent.children.push({type:3,text:text})}}}}),root}function processPre(el){null!=getAndRemoveAttr(el,"v-pre")&&(el.pre=!0)}function processRawAttrs(el){var l=el.attrsList.length;if(l)for(var attrs=el.attrs=new Array(l),i=0;i<l;i++)attrs[i]={name:el.attrsList[i].name,value:JSON.stringify(el.attrsList[i].value)};else el.pre||(
// non root node in pre blocks with no attributes
el.plain=!0)}function processKey(el){var exp=getBindingAttr(el,"key");exp&&("production"!==process.env.NODE_ENV&&"template"===el.tag&&warn$1("<template> cannot be keyed. Place the key on real elements instead."),el.key=exp)}function processRef(el){var ref=getBindingAttr(el,"ref");ref&&(el.ref=ref,el.refInFor=checkInFor(el))}function processFor(el){var exp;if(exp=getAndRemoveAttr(el,"v-for")){var inMatch=exp.match(forAliasRE);if(!inMatch)return void("production"!==process.env.NODE_ENV&&warn$1("Invalid v-for expression: "+exp));el.for=inMatch[2].trim();var alias=inMatch[1].trim(),iteratorMatch=alias.match(forIteratorRE);iteratorMatch?(el.alias=iteratorMatch[1].trim(),el.iterator1=iteratorMatch[2].trim(),iteratorMatch[3]&&(el.iterator2=iteratorMatch[3].trim())):el.alias=alias}}function processIf(el){var exp=getAndRemoveAttr(el,"v-if");if(exp)el.if=exp,addIfCondition(el,{exp:exp,block:el});else{null!=getAndRemoveAttr(el,"v-else")&&(el.else=!0);var elseif=getAndRemoveAttr(el,"v-else-if");elseif&&(el.elseif=elseif)}}function processIfConditions(el,parent){var prev=findPrevElement(parent.children);prev&&prev.if?addIfCondition(prev,{exp:el.elseif,block:el}):"production"!==process.env.NODE_ENV&&warn$1("v-"+(el.elseif?'else-if="'+el.elseif+'"':"else")+" used on element <"+el.tag+"> without corresponding v-if.")}function findPrevElement(children){for(var i=children.length;i--;){if(1===children[i].type)return children[i];"production"!==process.env.NODE_ENV&&" "!==children[i].text&&warn$1('text "'+children[i].text.trim()+'" between v-if and v-else(-if) will be ignored.'),children.pop()}}function addIfCondition(el,condition){el.ifConditions||(el.ifConditions=[]),el.ifConditions.push(condition)}function processOnce(el){var once=getAndRemoveAttr(el,"v-once");null!=once&&(el.once=!0)}function processSlot(el){if("slot"===el.tag)el.slotName=getBindingAttr(el,"name"),"production"!==process.env.NODE_ENV&&el.key&&warn$1("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.");else{var slotTarget=getBindingAttr(el,"slot");slotTarget&&(el.slotTarget='""'===slotTarget?'"default"':slotTarget),"template"===el.tag&&(el.slotScope=getAndRemoveAttr(el,"scope"))}}function processComponent(el){var binding;(binding=getBindingAttr(el,"is"))&&(el.component=binding),null!=getAndRemoveAttr(el,"inline-template")&&(el.inlineTemplate=!0)}function processAttrs(el){var i,l,name,rawName,value,arg,modifiers,isProp,list=el.attrsList;for(i=0,l=list.length;i<l;i++)if(name=rawName=list[i].name,value=list[i].value,dirRE.test(name))if(
// mark element as dynamic
el.hasBindings=!0,
// modifiers
modifiers=parseModifiers(name),modifiers&&(name=name.replace(modifierRE,"")),bindRE.test(name))// v-bind
name=name.replace(bindRE,""),value=parseFilters(value),isProp=!1,modifiers&&(modifiers.prop&&(isProp=!0,name=camelize(name),"innerHtml"===name&&(name="innerHTML")),modifiers.camel&&(name=camelize(name))),isProp||platformMustUseProp(el.tag,el.attrsMap.type,name)?addProp(el,name,value):addAttr(el,name,value);else if(onRE.test(name))// v-on
name=name.replace(onRE,""),addHandler(el,name,value,modifiers);else{// normal directives
name=name.replace(dirRE,"");
// parse arg
var argMatch=name.match(argRE);argMatch&&(arg=argMatch[1])&&(name=name.slice(0,-(arg.length+1))),addDirective(el,name,rawName,value,arg,modifiers),"production"!==process.env.NODE_ENV&&"model"===name&&checkForAliasModel(el,value)}else{
// literal attribute
if("production"!==process.env.NODE_ENV){var expression=parseText(value,delimiters);expression&&warn$1(name+'="'+value+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.')}addAttr(el,name,JSON.stringify(value))}}function checkInFor(el){for(var parent=el;parent;){if(void 0!==parent.for)return!0;parent=parent.parent}return!1}function parseModifiers(name){var match=name.match(modifierRE);if(match){var ret={};return match.forEach(function(m){ret[m.slice(1)]=!0}),ret}}function makeAttrsMap(attrs){for(var map={},i=0,l=attrs.length;i<l;i++)"production"!==process.env.NODE_ENV&&map[attrs[i].name]&&!isIE&&warn$1("duplicate attribute: "+attrs[i].name),map[attrs[i].name]=attrs[i].value;return map}function isForbiddenTag(el){return"style"===el.tag||"script"===el.tag&&(!el.attrsMap.type||"text/javascript"===el.attrsMap.type)}/* istanbul ignore next */
function guardIESVGBug(attrs){for(var res=[],i=0;i<attrs.length;i++){var attr=attrs[i];ieNSBug.test(attr.name)||(attr.name=attr.name.replace(ieNSPrefix,""),res.push(attr))}return res}function checkForAliasModel(el,value){for(var _el=el;_el;)_el.for&&_el.alias===value&&warn$1("<"+el.tag+' v-model="'+value+'">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'),_el=_el.parent}/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
function optimize(root,options){root&&(isStaticKey=genStaticKeysCached(options.staticKeys||""),isPlatformReservedTag=options.isReservedTag||no,
// first pass: mark all non-static nodes.
markStatic(root),
// second pass: mark static roots.
markStaticRoots(root,!1))}function genStaticKeys$1(keys){return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(keys?","+keys:""))}function markStatic(node){if(node.static=isStatic(node),1===node.type){
// do not make component slot content static. this avoids
// 1. components not able to mutate slot nodes
// 2. static slot content fails for hot-reloading
if(!isPlatformReservedTag(node.tag)&&"slot"!==node.tag&&null==node.attrsMap["inline-template"])return;for(var i=0,l=node.children.length;i<l;i++){var child=node.children[i];markStatic(child),child.static||(node.static=!1)}}}function markStaticRoots(node,isInFor){if(1===node.type){
// For a node to qualify as a static root, it should have children that
// are not just static text. Otherwise the cost of hoisting out will
// outweigh the benefits and it's better off to just always render it fresh.
if((node.static||node.once)&&(node.staticInFor=isInFor),node.static&&node.children.length&&(1!==node.children.length||3!==node.children[0].type))return void(node.staticRoot=!0);if(node.staticRoot=!1,node.children)for(var i=0,l=node.children.length;i<l;i++)markStaticRoots(node.children[i],isInFor||!!node.for);node.ifConditions&&walkThroughConditionsBlocks(node.ifConditions,isInFor)}}function walkThroughConditionsBlocks(conditionBlocks,isInFor){for(var i=1,len=conditionBlocks.length;i<len;i++)markStaticRoots(conditionBlocks[i].block,isInFor)}function isStatic(node){// not a built-in
return 2!==node.type&&(3===node.type||!(!node.pre&&(node.hasBindings||node.if||node.for||isBuiltInTag(node.tag)||!isPlatformReservedTag(node.tag)||isDirectChildOfTemplateFor(node)||!Object.keys(node).every(isStaticKey))))}function isDirectChildOfTemplateFor(node){for(;node.parent;){if(node=node.parent,"template"!==node.tag)return!1;if(node.for)return!0}return!1}function genHandlers(events,native){var res=native?"nativeOn:{":"on:{";for(var name in events)res+='"'+name+'":'+genHandler(name,events[name])+",";return res.slice(0,-1)+"}"}function genHandler(name,handler){if(handler){if(Array.isArray(handler))return"["+handler.map(function(handler){return genHandler(name,handler)}).join(",")+"]";if(handler.modifiers){var code="",keys=[];for(var key in handler.modifiers)modifierCode[key]?code+=modifierCode[key]:keys.push(key);keys.length&&(code=genKeyFilter(keys)+code);var handlerCode=simplePathRE.test(handler.value)?handler.value+"($event)":handler.value;return"function($event){"+code+handlerCode+"}"}return fnExpRE.test(handler.value)||simplePathRE.test(handler.value)?handler.value:"function($event){"+handler.value+"}"}return"function(){}"}function genKeyFilter(keys){return"if("+keys.map(genFilterCode).join("&&")+")return;"}function genFilterCode(key){var keyVal=parseInt(key,10);if(keyVal)return"$event.keyCode!=="+keyVal;var alias=keyCodes[key];return"_k($event.keyCode,"+JSON.stringify(key)+(alias?","+JSON.stringify(alias):"")+")"}/*  */
function bind$2(el,dir){el.wrapData=function(code){return"_b("+code+",'"+el.tag+"',"+dir.value+(dir.modifiers&&dir.modifiers.prop?",true":"")+")"}}function generate(ast,options){
// save previous staticRenderFns so generate calls can be nested
var prevStaticRenderFns=staticRenderFns,currentStaticRenderFns=staticRenderFns=[],prevOnceCount=onceCount;onceCount=0,currentOptions=options,warn$2=options.warn||baseWarn,transforms$1=pluckModuleFunction(options.modules,"transformCode"),dataGenFns=pluckModuleFunction(options.modules,"genData"),platformDirectives$1=options.directives||{},isPlatformReservedTag$1=options.isReservedTag||no;var code=ast?genElement(ast):'_c("div")';return staticRenderFns=prevStaticRenderFns,onceCount=prevOnceCount,{render:"with(this){return "+code+"}",staticRenderFns:currentStaticRenderFns}}function genElement(el){if(el.staticRoot&&!el.staticProcessed)return genStatic(el);if(el.once&&!el.onceProcessed)return genOnce(el);if(el.for&&!el.forProcessed)return genFor(el);if(el.if&&!el.ifProcessed)return genIf(el);if("template"!==el.tag||el.slotTarget){if("slot"===el.tag)return genSlot(el);
// component or element
var code;if(el.component)code=genComponent(el.component,el);else{var data=el.plain?void 0:genData(el),children=el.inlineTemplate?null:genChildren(el,!0);code="_c('"+el.tag+"'"+(data?","+data:"")+(children?","+children:"")+")"}
// module transforms
for(var i=0;i<transforms$1.length;i++)code=transforms$1[i](el,code);return code}return genChildren(el)||"void 0"}
// hoist static sub-trees out
function genStatic(el){return el.staticProcessed=!0,staticRenderFns.push("with(this){return "+genElement(el)+"}"),"_m("+(staticRenderFns.length-1)+(el.staticInFor?",true":"")+")"}
// v-once
function genOnce(el){if(el.onceProcessed=!0,el.if&&!el.ifProcessed)return genIf(el);if(el.staticInFor){for(var key="",parent=el.parent;parent;){if(parent.for){key=parent.key;break}parent=parent.parent}return key?"_o("+genElement(el)+","+onceCount++ +(key?","+key:"")+")":("production"!==process.env.NODE_ENV&&warn$2("v-once can only be used inside v-for that is keyed. "),genElement(el))}return genStatic(el)}function genIf(el){// avoid recursion
return el.ifProcessed=!0,genIfConditions(el.ifConditions.slice())}function genIfConditions(conditions){
// v-if with v-once should generate code like (a)?_m(0):_m(1)
function genTernaryExp(el){return el.once?genOnce(el):genElement(el)}if(!conditions.length)return"_e()";var condition=conditions.shift();return condition.exp?"("+condition.exp+")?"+genTernaryExp(condition.block)+":"+genIfConditions(conditions):""+genTernaryExp(condition.block)}function genFor(el){var exp=el.for,alias=el.alias,iterator1=el.iterator1?","+el.iterator1:"",iterator2=el.iterator2?","+el.iterator2:"";// avoid recursion
return el.forProcessed=!0,"_l(("+exp+"),function("+alias+iterator1+iterator2+"){return "+genElement(el)+"})"}function genData(el){var data="{",dirs=genDirectives(el);dirs&&(data+=dirs+","),
// key
el.key&&(data+="key:"+el.key+","),
// ref
el.ref&&(data+="ref:"+el.ref+","),el.refInFor&&(data+="refInFor:true,"),
// pre
el.pre&&(data+="pre:true,"),
// record original tag name for components using "is" attribute
el.component&&(data+='tag:"'+el.tag+'",');
// module data generation functions
for(var i=0;i<dataGenFns.length;i++)data+=dataGenFns[i](el);
// inline-template
if(
// attributes
el.attrs&&(data+="attrs:{"+genProps(el.attrs)+"},"),
// DOM props
el.props&&(data+="domProps:{"+genProps(el.props)+"},"),
// event handlers
el.events&&(data+=genHandlers(el.events)+","),el.nativeEvents&&(data+=genHandlers(el.nativeEvents,!0)+","),
// slot target
el.slotTarget&&(data+="slot:"+el.slotTarget+","),
// scoped slots
el.scopedSlots&&(data+=genScopedSlots(el.scopedSlots)+","),el.inlineTemplate){var inlineTemplate=genInlineTemplate(el);inlineTemplate&&(data+=inlineTemplate+",")}
// v-bind data wrap
return data=data.replace(/,$/,"")+"}",el.wrapData&&(data=el.wrapData(data)),data}function genDirectives(el){var dirs=el.directives;if(dirs){var i,l,dir,needRuntime,res="directives:[",hasRuntime=!1;for(i=0,l=dirs.length;i<l;i++){dir=dirs[i],needRuntime=!0;var gen=platformDirectives$1[dir.name]||baseDirectives[dir.name];gen&&(
// compile-time directive that manipulates AST.
// returns true if it also needs a runtime counterpart.
needRuntime=!!gen(el,dir,warn$2)),needRuntime&&(hasRuntime=!0,res+='{name:"'+dir.name+'",rawName:"'+dir.rawName+'"'+(dir.value?",value:("+dir.value+"),expression:"+JSON.stringify(dir.value):"")+(dir.arg?',arg:"'+dir.arg+'"':"")+(dir.modifiers?",modifiers:"+JSON.stringify(dir.modifiers):"")+"},")}return hasRuntime?res.slice(0,-1)+"]":void 0}}function genInlineTemplate(el){var ast=el.children[0];if("production"!==process.env.NODE_ENV&&(el.children.length>1||1!==ast.type)&&warn$2("Inline-template components must have exactly one child element."),1===ast.type){var inlineRenderFns=generate(ast,currentOptions);return"inlineTemplate:{render:function(){"+inlineRenderFns.render+"},staticRenderFns:["+inlineRenderFns.staticRenderFns.map(function(code){return"function(){"+code+"}"}).join(",")+"]}"}}function genScopedSlots(slots){return"scopedSlots:{"+Object.keys(slots).map(function(key){return genScopedSlot(key,slots[key])}).join(",")+"}"}function genScopedSlot(key,el){return key+":function("+String(el.attrsMap.scope)+"){return "+("template"===el.tag?genChildren(el)||"void 0":genElement(el))+"}"}function genChildren(el,checkSkip){var children=el.children;if(children.length){var el$1=children[0];
// optimize single v-for
if(1===children.length&&el$1.for&&"template"!==el$1.tag&&"slot"!==el$1.tag)return genElement(el$1);var normalizationType=getNormalizationType(children);return"["+children.map(genNode).join(",")+"]"+(checkSkip&&normalizationType?","+normalizationType:"")}}
// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children){for(var res=0,i=0;i<children.length;i++){var el=children[i];if(1===el.type){if(needsNormalization(el)||el.ifConditions&&el.ifConditions.some(function(c){return needsNormalization(c.block)})){res=2;break}(maybeComponent(el)||el.ifConditions&&el.ifConditions.some(function(c){return maybeComponent(c.block)}))&&(res=1)}}return res}function needsNormalization(el){return void 0!==el.for||"template"===el.tag||"slot"===el.tag}function maybeComponent(el){return!isPlatformReservedTag$1(el.tag)}function genNode(node){return 1===node.type?genElement(node):genText(node)}function genText(text){return"_v("+(2===text.type?text.expression:transformSpecialNewlines(JSON.stringify(text.text)))+")"}function genSlot(el){var slotName=el.slotName||'"default"',children=genChildren(el),res="_t("+slotName+(children?","+children:""),attrs=el.attrs&&"{"+el.attrs.map(function(a){return camelize(a.name)+":"+a.value}).join(",")+"}",bind$$1=el.attrsMap["v-bind"];return!attrs&&!bind$$1||children||(res+=",null"),attrs&&(res+=","+attrs),bind$$1&&(res+=(attrs?"":",null")+","+bind$$1),res+")"}
// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName,el){var children=el.inlineTemplate?null:genChildren(el,!0);return"_c("+componentName+","+genData(el)+(children?","+children:"")+")"}function genProps(props){for(var res="",i=0;i<props.length;i++){var prop=props[i];res+='"'+prop.name+'":'+transformSpecialNewlines(prop.value)+","}return res.slice(0,-1)}
// #3895, #4268
function transformSpecialNewlines(text){return text.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}/*  */
/**
	 * Compile a template.
	 */
function compile$1(template,options){var ast=parse(template.trim(),options);optimize(ast,options);var code=generate(ast,options);return{ast:ast,render:code.render,staticRenderFns:code.staticRenderFns}}
// detect problematic expressions in a template
function detectErrors(ast){var errors=[];return ast&&checkNode(ast,errors),errors}function checkNode(node,errors){if(1===node.type){for(var name in node.attrsMap)if(dirRE.test(name)){var value=node.attrsMap[name];value&&("v-for"===name?checkFor(node,'v-for="'+value+'"',errors):checkExpression(value,name+'="'+value+'"',errors))}if(node.children)for(var i=0;i<node.children.length;i++)checkNode(node.children[i],errors)}else 2===node.type&&checkExpression(node.expression,node.text,errors)}function checkFor(node,text,errors){checkExpression(node.for||"",text,errors),checkIdentifier(node.alias,"v-for alias",text,errors),checkIdentifier(node.iterator1,"v-for iterator",text,errors),checkIdentifier(node.iterator2,"v-for iterator",text,errors)}function checkIdentifier(ident,type,text,errors){"string"!=typeof ident||identRE.test(ident)||errors.push("- invalid "+type+' "'+ident+'" in expression: '+text)}function checkExpression(exp,text,errors){try{new Function("return "+exp)}catch(e){var keywordMatch=exp.replace(stripStringRE,"").match(prohibitedKeywordRE);keywordMatch?errors.push('- avoid using JavaScript keyword as property name: "'+keywordMatch[0]+'" in expression '+text):errors.push("- invalid expression: "+text)}}/*  */
function transformNode(el,options){var warn=options.warn||baseWarn,staticClass=getAndRemoveAttr(el,"class");if("production"!==process.env.NODE_ENV&&staticClass){var expression=parseText(staticClass,options.delimiters);expression&&warn('class="'+staticClass+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.')}staticClass&&(el.staticClass=JSON.stringify(staticClass));var classBinding=getBindingAttr(el,"class",!1);classBinding&&(el.classBinding=classBinding)}function genData$1(el){var data="";return el.staticClass&&(data+="staticClass:"+el.staticClass+","),el.classBinding&&(data+="class:"+el.classBinding+","),data}/*  */
function transformNode$1(el,options){var warn=options.warn||baseWarn,staticStyle=getAndRemoveAttr(el,"style");if(staticStyle){/* istanbul ignore if */
if("production"!==process.env.NODE_ENV){var expression=parseText(staticStyle,options.delimiters);expression&&warn('style="'+staticStyle+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.')}el.staticStyle=JSON.stringify(parseStyleText(staticStyle))}var styleBinding=getBindingAttr(el,"style",!1);styleBinding&&(el.styleBinding=styleBinding)}function genData$2(el){var data="";return el.staticStyle&&(data+="staticStyle:"+el.staticStyle+","),el.styleBinding&&(data+="style:("+el.styleBinding+"),"),data}function model$1(el,dir,_warn){warn$3=_warn;var value=dir.value,modifiers=dir.modifiers,tag=el.tag,type=el.attrsMap.type;if("production"!==process.env.NODE_ENV){var dynamicType=el.attrsMap["v-bind:type"]||el.attrsMap[":type"];"input"===tag&&dynamicType&&warn$3('<input :type="'+dynamicType+'" v-model="'+value+'">:\nv-model does not support dynamic input types. Use v-if branches instead.')}
// ensure runtime directive metadata
return"select"===tag?genSelect(el,value,modifiers):"input"===tag&&"checkbox"===type?genCheckboxModel(el,value,modifiers):"input"===tag&&"radio"===type?genRadioModel(el,value,modifiers):genDefaultModel(el,value,modifiers),!0}function genCheckboxModel(el,value,modifiers){"production"!==process.env.NODE_ENV&&null!=el.attrsMap.checked&&warn$3("<"+el.tag+' v-model="'+value+"\" checked>:\ninline checked attributes will be ignored when using v-model. Declare initial values in the component's data option instead.");var number=modifiers&&modifiers.number,valueBinding=getBindingAttr(el,"value")||"null",trueValueBinding=getBindingAttr(el,"true-value")||"true",falseValueBinding=getBindingAttr(el,"false-value")||"false";addProp(el,"checked","Array.isArray("+value+")?_i("+value+","+valueBinding+")>-1"+("true"===trueValueBinding?":("+value+")":":_q("+value+","+trueValueBinding+")")),addHandler(el,"click","var $$a="+value+",$$el=$event.target,$$c=$$el.checked?("+trueValueBinding+"):("+falseValueBinding+");if(Array.isArray($$a)){var $$v="+(number?"_n("+valueBinding+")":valueBinding)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+value+"=$$a.concat($$v))}else{$$i>-1&&("+value+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+value+"=$$c}",null,!0)}function genRadioModel(el,value,modifiers){"production"!==process.env.NODE_ENV&&null!=el.attrsMap.checked&&warn$3("<"+el.tag+' v-model="'+value+"\" checked>:\ninline checked attributes will be ignored when using v-model. Declare initial values in the component's data option instead.");var number=modifiers&&modifiers.number,valueBinding=getBindingAttr(el,"value")||"null";valueBinding=number?"_n("+valueBinding+")":valueBinding,addProp(el,"checked","_q("+value+","+valueBinding+")"),addHandler(el,"click",genAssignmentCode(value,valueBinding),null,!0)}function genDefaultModel(el,value,modifiers){"production"!==process.env.NODE_ENV&&("input"===el.tag&&el.attrsMap.value&&warn$3("<"+el.tag+' v-model="'+value+'" value="'+el.attrsMap.value+"\">:\ninline value attributes will be ignored when using v-model. Declare initial values in the component's data option instead."),"textarea"===el.tag&&el.children.length&&warn$3('<textarea v-model="'+value+"\">:\ninline content inside <textarea> will be ignored when using v-model. Declare initial values in the component's data option instead."));var type=el.attrsMap.type,ref=modifiers||{},lazy=ref.lazy,number=ref.number,trim=ref.trim,event=lazy||isIE&&"range"===type?"change":"input",needCompositionGuard=!lazy&&"range"!==type,isNative="input"===el.tag||"textarea"===el.tag,valueExpression=isNative?"$event.target.value"+(trim?".trim()":""):trim?"(typeof $event === 'string' ? $event.trim() : $event)":"$event";valueExpression=number||"number"===type?"_n("+valueExpression+")":valueExpression;var code=genAssignmentCode(value,valueExpression);isNative&&needCompositionGuard&&(code="if($event.target.composing)return;"+code),
// inputs with type="file" are read only and setting the input's
// value will throw an error.
"production"!==process.env.NODE_ENV&&"file"===type&&warn$3("<"+el.tag+' v-model="'+value+'" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'),addProp(el,"value",isNative?"_s("+value+")":"("+value+")"),addHandler(el,event,code,null,!0),(trim||number||"number"===type)&&addHandler(el,"blur","$forceUpdate()")}function genSelect(el,value,modifiers){"production"!==process.env.NODE_ENV&&el.children.some(checkOptionWarning);var number=modifiers&&modifiers.number,assignment='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(number?"_n(val)":"val")+"})"+(null==el.attrsMap.multiple?"[0]":""),code=genAssignmentCode(value,assignment);addHandler(el,"change",code,null,!0)}function checkOptionWarning(option){return 1===option.type&&"option"===option.tag&&null!=option.attrsMap.selected&&(warn$3('<select v-model="'+option.parent.attrsMap["v-model"]+"\">:\ninline selected attributes on <option> will be ignored when using v-model. Declare initial values in the component's data option instead."),!0)}function genAssignmentCode(value,assignment){var modelRs=parseModel(value);return null===modelRs.idx?value+"="+assignment:"var $$exp = "+modelRs.exp+", $$idx = "+modelRs.idx+";if (!Array.isArray($$exp)){"+value+"="+assignment+"}else{$$exp.splice($$idx, 1, "+assignment+")}"}/*  */
function text(el,dir){dir.value&&addProp(el,"textContent","_s("+dir.value+")")}/*  */
function html(el,dir){dir.value&&addProp(el,"innerHTML","_s("+dir.value+")")}function compile$$1(template,options){return options=options?extend(extend({},baseOptions),options):baseOptions,compile$1(template,options)}function compileToFunctions(template,options,vm){var _warn=options&&options.warn||warn;
// detect possible CSP restriction
/* istanbul ignore if */
if("production"!==process.env.NODE_ENV)try{new Function("return 1")}catch(e){e.toString().match(/unsafe-eval|CSP/)&&_warn("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")}var key=options&&options.delimiters?String(options.delimiters)+template:template;if(cache[key])return cache[key];var res={},compiled=compile$$1(template,options);res.render=makeFunction(compiled.render);var l=compiled.staticRenderFns.length;res.staticRenderFns=new Array(l);for(var i=0;i<l;i++)res.staticRenderFns[i]=makeFunction(compiled.staticRenderFns[i]);return"production"!==process.env.NODE_ENV&&(res.render===noop||res.staticRenderFns.some(function(fn){return fn===noop}))&&_warn("failed to compile template:\n\n"+template+"\n\n"+detectErrors(compiled.ast).join("\n")+"\n\n",vm),cache[key]=res}function makeFunction(code){try{return new Function(code)}catch(e){return noop}}/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
function getOuterHTML(el){if(el.outerHTML)return el.outerHTML;var container=document.createElement("div");return container.appendChild(el.cloneNode(!0)),container.innerHTML}/**
	 * Check if a tag is a built-in tag.
	 */
var _isServer,_Set,isBuiltInTag=makeMap("slot,component",!0),hasOwnProperty=Object.prototype.hasOwnProperty,camelizeRE=/-(\w)/g,camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():""})}),capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1)}),hyphenateRE=/([^-])([A-Z])/g,hyphenate=cached(function(str){return str.replace(hyphenateRE,"$1-$2").replace(hyphenateRE,"$1-$2").toLowerCase()}),toString=Object.prototype.toString,OBJECT_STRING="[object Object]",no=function(){return!1},identity=function(_){return _},config={/**
	   * Option merge strategies (used in core/util/options)
	   */
optionMergeStrategies:Object.create(null),/**
	   * Whether to suppress warnings.
	   */
silent:!1,/**
	   * Whether to enable devtools
	   */
devtools:"production"!==process.env.NODE_ENV,/**
	   * Error handler for watcher errors
	   */
errorHandler:null,/**
	   * Ignore certain custom elements
	   */
ignoredElements:[],/**
	   * Custom user key aliases for v-on
	   */
keyCodes:Object.create(null),/**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
isReservedTag:no,/**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
isUnknownElement:no,/**
	   * Get the namespace of an element
	   */
getTagNamespace:noop,/**
	   * Parse the real tag name for the specific platform.
	   */
parsePlatformTagName:identity,/**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
mustUseProp:no,/**
	   * List of asset types that a component can own.
	   */
_assetTypes:["component","directive","filter"],/**
	   * List of lifecycle hooks.
	   */
_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],/**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
_maxUpdateCount:100},bailRE=/[^\w.$]/,hasProto="__proto__"in{},inBrowser="undefined"!=typeof window,UA=inBrowser&&window.navigator.userAgent.toLowerCase(),isIE=UA&&/msie|trident/.test(UA),isIE9=UA&&UA.indexOf("msie 9.0")>0,isEdge=UA&&UA.indexOf("edge/")>0,isAndroid=UA&&UA.indexOf("android")>0,isIOS=UA&&/iphone|ipad|ipod|ios/.test(UA),isServerRendering=function(){/* istanbul ignore if */
return void 0===_isServer&&(_isServer=!inBrowser&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),_isServer},devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,nextTick=function(){function nextTickHandler(){pending=!1;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++)copies[i]()}var timerFunc,callbacks=[],pending=!1;
// the nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore if */
if("undefined"!=typeof Promise&&isNative(Promise)){var p=Promise.resolve(),logError=function(err){console.error(err)};timerFunc=function(){p.then(nextTickHandler).catch(logError),
// in problematic UIWebViews, Promise.then doesn't completely break, but
// it can get stuck in a weird state where callbacks are pushed into the
// microtask queue but the queue isn't being flushed, until the browser
// needs to do some other work, e.g. handle a timer. Therefore we can
// "force" the microtask queue to be flushed by adding an empty timer.
isIOS&&setTimeout(noop)}}else if("undefined"==typeof MutationObserver||!isNative(MutationObserver)&&
// PhantomJS and iOS 7.x
"[object MutationObserverConstructor]"!==MutationObserver.toString())
// fallback to setTimeout
/* istanbul ignore next */
timerFunc=function(){setTimeout(nextTickHandler,0)};else{
// use MutationObserver where native Promise is not available,
// e.g. PhantomJS IE11, iOS7, Android 4.4
var counter=1,observer=new MutationObserver(nextTickHandler),textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:!0}),timerFunc=function(){counter=(counter+1)%2,textNode.data=String(counter)}}return function(cb,ctx){var _resolve;if(callbacks.push(function(){cb&&cb.call(ctx),_resolve&&_resolve(ctx)}),pending||(pending=!0,timerFunc()),!cb&&"undefined"!=typeof Promise)return new Promise(function(resolve){_resolve=resolve})}}();/* istanbul ignore if */
// use native Set when available.
_Set="undefined"!=typeof Set&&isNative(Set)?Set:function(){function Set(){this.set=Object.create(null)}return Set.prototype.has=function(key){return this.set[key]===!0},Set.prototype.add=function(key){this.set[key]=!0},Set.prototype.clear=function(){this.set=Object.create(null)},Set}();var formatComponentName,warn=noop;if("production"!==process.env.NODE_ENV){var hasConsole="undefined"!=typeof console;warn=function(msg,vm){hasConsole&&!config.silent&&console.error("[Vue warn]: "+msg+" "+(vm?formatLocation(formatComponentName(vm)):""))},formatComponentName=function(vm){if(vm.$root===vm)return"root instance";var name=vm._isVue?vm.$options.name||vm.$options._componentTag:vm.name;return(name?"component <"+name+">":"anonymous component")+(vm._isVue&&vm.$options.__file?" at "+vm.$options.__file:"")};var formatLocation=function(str){return"anonymous component"===str&&(str+=' - use the "name" option for better debugging messages.'),"\n(found in "+str+")"}}/*  */
var uid$1=0,Dep=function(){this.id=uid$1++,this.subs=[]};Dep.prototype.addSub=function(sub){this.subs.push(sub)},Dep.prototype.removeSub=function(sub){remove$1(this.subs,sub)},Dep.prototype.depend=function(){Dep.target&&Dep.target.addDep(this)},Dep.prototype.notify=function(){for(var subs=this.subs.slice(),i=0,l=subs.length;i<l;i++)subs[i].update()},
// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target=null;var targetStack=[],arrayProto=Array.prototype,arrayMethods=Object.create(arrayProto);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(method){
// cache original method
var original=arrayProto[method];def(arrayMethods,method,function(){for(var arguments$1=arguments,i=arguments.length,args=new Array(i);i--;)args[i]=arguments$1[i];var inserted,result=original.apply(this,args),ob=this.__ob__;switch(method){case"push":inserted=args;break;case"unshift":inserted=args;break;case"splice":inserted=args.slice(2)}
// notify change
return inserted&&ob.observeArray(inserted),ob.dep.notify(),result})});/*  */
var arrayKeys=Object.getOwnPropertyNames(arrayMethods),observerState={shouldConvert:!0,isSettingProps:!1},Observer=function(value){if(this.value=value,this.dep=new Dep,this.vmCount=0,def(value,"__ob__",this),Array.isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys),this.observeArray(value)}else this.walk(value)};/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
Observer.prototype.walk=function(obj){for(var keys=Object.keys(obj),i=0;i<keys.length;i++)defineReactive$$1(obj,keys[i],obj[keys[i]])},/**
	 * Observe a list of Array items.
	 */
Observer.prototype.observeArray=function(items){for(var i=0,l=items.length;i<l;i++)observe(items[i])};/*  */
/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
var strats=config.optionMergeStrategies;/**
	 * Options with restrictions
	 */
"production"!==process.env.NODE_ENV&&(strats.el=strats.propsData=function(parent,child,vm,key){return vm||warn('option "'+key+'" can only be used during instance creation with the `new` keyword.'),defaultStrat(parent,child)}),/**
	 * Data
	 */
strats.data=function(parentVal,childVal,vm){
// in a Vue.extend merge, both should be functions
return vm?parentVal||childVal?function(){
// instance merge
var instanceData="function"==typeof childVal?childVal.call(vm):childVal,defaultData="function"==typeof parentVal?parentVal.call(vm):void 0;return instanceData?mergeData(instanceData,defaultData):defaultData}:void 0:childVal?"function"!=typeof childVal?("production"!==process.env.NODE_ENV&&warn('The "data" option should be a function that returns a per-instance value in component definitions.',vm),parentVal):parentVal?function(){return mergeData(childVal.call(this),parentVal.call(this))}:childVal:parentVal},config._lifecycleHooks.forEach(function(hook){strats[hook]=mergeHook}),config._assetTypes.forEach(function(type){strats[type+"s"]=mergeAssets}),/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
strats.watch=function(parentVal,childVal){/* istanbul ignore if */
if(!childVal)return parentVal;if(!parentVal)return childVal;var ret={};extend(ret,parentVal);for(var key in childVal){var parent=ret[key],child=childVal[key];parent&&!Array.isArray(parent)&&(parent=[parent]),ret[key]=parent?parent.concat(child):[child]}return ret},/**
	 * Other object hashes.
	 */
strats.props=strats.methods=strats.computed=function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret=Object.create(null);return extend(ret,parentVal),extend(ret,childVal),ret};/**
	 * Default strategy.
	 */
var initProxy,defaultStrat=function(parentVal,childVal){return void 0===childVal?parentVal:childVal},util=Object.freeze({defineReactive:defineReactive$$1,_toString:_toString,toNumber:toNumber,makeMap:makeMap,isBuiltInTag:isBuiltInTag,remove:remove$1,hasOwn:hasOwn,isPrimitive:isPrimitive,cached:cached,camelize:camelize,capitalize:capitalize,hyphenate:hyphenate,bind:bind$1,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,toObject:toObject,noop:noop,no:no,identity:identity,genStaticKeys:genStaticKeys,looseEqual:looseEqual,looseIndexOf:looseIndexOf,isReserved:isReserved,def:def,parsePath:parsePath,hasProto:hasProto,inBrowser:inBrowser,UA:UA,isIE:isIE,isIE9:isIE9,isEdge:isEdge,isAndroid:isAndroid,isIOS:isIOS,isServerRendering:isServerRendering,devtools:devtools,nextTick:nextTick,get _Set(){return _Set},mergeOptions:mergeOptions,resolveAsset:resolveAsset,get warn(){return warn},get formatComponentName(){return formatComponentName},validateProp:validateProp});if("production"!==process.env.NODE_ENV){var allowedGlobals=makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),warnNonPresent=function(target,key){warn('Property or method "'+key+'" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.',target)},hasProxy="undefined"!=typeof Proxy&&Proxy.toString().match(/native code/);if(hasProxy){var isBuiltInModifier=makeMap("stop,prevent,self,ctrl,shift,alt,meta");config.keyCodes=new Proxy(config.keyCodes,{set:function(target,key,value){return isBuiltInModifier(key)?(warn("Avoid overwriting built-in modifier in config.keyCodes: ."+key),!1):(target[key]=value,!0)}})}var hasHandler={has:function has(target,key){var has=key in target,isAllowed=allowedGlobals(key)||"_"===key.charAt(0);return has||isAllowed||warnNonPresent(target,key),has||!isAllowed}},getHandler={get:function(target,key){return"string"!=typeof key||key in target||warnNonPresent(target,key),target[key]}};initProxy=function(vm){if(hasProxy){
// determine which proxy handler to use
var options=vm.$options,handlers=options.render&&options.render._withStripped?getHandler:hasHandler;vm._renderProxy=new Proxy(vm,handlers)}else vm._renderProxy=vm}}/*  */
var VNode=function(tag,data,children,text,elm,context,componentOptions){this.tag=tag,this.data=data,this.children=children,this.text=text,this.elm=elm,this.ns=void 0,this.context=context,this.functionalContext=void 0,this.key=data&&data.key,this.componentOptions=componentOptions,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},prototypeAccessors={child:{}};
// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get=function(){return this.componentInstance},Object.defineProperties(VNode.prototype,prototypeAccessors);var target,createEmptyVNode=function(){var node=new VNode;return node.text="",node.isComment=!0,node},hooks={init:init,prepatch:prepatch,insert:insert,destroy:destroy$1},hooksToMerge=Object.keys(hooks),normalizeEvent=cached(function(name){var once="~"===name.charAt(0);// Prefixed last, checked first
name=once?name.slice(1):name;var capture="!"===name.charAt(0);return name=capture?name.slice(1):name,{name:name,once:once,capture:capture}}),SIMPLE_NORMALIZE=1,ALWAYS_NORMALIZE=2,activeInstance=null,queue=[],has$1={},circular={},waiting=!1,flushing=!1,index=0,uid$2=0,Watcher=function(vm,expOrFn,cb,options){this.vm=vm,vm._watchers.push(this),
// options
options?(this.deep=!!options.deep,this.user=!!options.user,this.lazy=!!options.lazy,this.sync=!!options.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=cb,this.id=++uid$2,// uid for batching
this.active=!0,this.dirty=this.lazy,// for lazy watchers
this.deps=[],this.newDeps=[],this.depIds=new _Set,this.newDepIds=new _Set,this.expression="production"!==process.env.NODE_ENV?expOrFn.toString():"",
// parse expression for getter
"function"==typeof expOrFn?this.getter=expOrFn:(this.getter=parsePath(expOrFn),this.getter||(this.getter=function(){},"production"!==process.env.NODE_ENV&&warn('Failed watching path: "'+expOrFn+'" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',vm))),this.value=this.lazy?void 0:this.get()};/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
Watcher.prototype.get=function(){pushTarget(this);var value=this.getter.call(this.vm,this.vm);
// "touch" every property so they are all tracked as
// dependencies for deep watching
return this.deep&&traverse(value),popTarget(),this.cleanupDeps(),value},/**
	 * Add a dependency to this directive.
	 */
Watcher.prototype.addDep=function(dep){var id=dep.id;this.newDepIds.has(id)||(this.newDepIds.add(id),this.newDeps.push(dep),this.depIds.has(id)||dep.addSub(this))},/**
	 * Clean up for dependency collection.
	 */
Watcher.prototype.cleanupDeps=function(){for(var this$1=this,i=this.deps.length;i--;){var dep=this$1.deps[i];this$1.newDepIds.has(dep.id)||dep.removeSub(this$1)}var tmp=this.depIds;this.depIds=this.newDepIds,this.newDepIds=tmp,this.newDepIds.clear(),tmp=this.deps,this.deps=this.newDeps,this.newDeps=tmp,this.newDeps.length=0},/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
Watcher.prototype.update=function(){/* istanbul ignore else */
this.lazy?this.dirty=!0:this.sync?this.run():queueWatcher(this)},/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
Watcher.prototype.run=function(){if(this.active){var value=this.get();if(value!==this.value||
// Deep watchers and watchers on Object/Arrays should fire even
// when the value is the same, because the value may
// have mutated.
isObject(value)||this.deep){
// set new value
var oldValue=this.value;if(this.value=value,this.user)try{this.cb.call(this.vm,value,oldValue)}catch(e){/* istanbul ignore else */
if(!config.errorHandler)throw"production"!==process.env.NODE_ENV&&warn('Error in watcher "'+this.expression+'"',this.vm),e;config.errorHandler.call(null,e,this.vm)}else this.cb.call(this.vm,value,oldValue)}}},/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
Watcher.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},/**
	 * Depend on all deps collected by this watcher.
	 */
Watcher.prototype.depend=function(){for(var this$1=this,i=this.deps.length;i--;)this$1.deps[i].depend()},/**
	 * Remove self from all dependencies' subscriber list.
	 */
Watcher.prototype.teardown=function(){var this$1=this;if(this.active){
// remove self from vm's watcher list
// this is a somewhat expensive operation so we skip it
// if the vm is being destroyed.
this.vm._isBeingDestroyed||remove$1(this.vm._watchers,this);for(var i=this.deps.length;i--;)this$1.deps[i].removeSub(this$1);this.active=!1}};/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
var seenObjects=new _Set,isReservedProp={key:1,ref:1,slot:1},computedSharedDefinition={enumerable:!0,configurable:!0,get:noop,set:noop},uid=0;initMixin(Vue$3),stateMixin(Vue$3),eventsMixin(Vue$3),lifecycleMixin(Vue$3),renderMixin(Vue$3);/*  */
var patternTypes=[String,RegExp],KeepAlive={name:"keep-alive",abstract:!0,props:{include:patternTypes,exclude:patternTypes},created:function(){this.cache=Object.create(null)},destroyed:function(){var this$1=this;for(var key in this.cache)pruneCacheEntry(this$1.cache[key])},watch:{include:function(val){pruneCache(this.cache,function(name){return matches(val,name)})},exclude:function(val){pruneCache(this.cache,function(name){return!matches(val,name)})}},render:function(){var vnode=getFirstComponentChild(this.$slots.default),componentOptions=vnode&&vnode.componentOptions;if(componentOptions){
// check pattern
var name=getComponentName(componentOptions);if(name&&(this.include&&!matches(this.include,name)||this.exclude&&matches(this.exclude,name)))return vnode;var key=null==vnode.key?componentOptions.Ctor.cid+(componentOptions.tag?"::"+componentOptions.tag:""):vnode.key;this.cache[key]?vnode.componentInstance=this.cache[key].componentInstance:this.cache[key]=vnode,vnode.data.keepAlive=!0}return vnode}},builtInComponents={KeepAlive:KeepAlive};initGlobalAPI(Vue$3),Object.defineProperty(Vue$3.prototype,"$isServer",{get:isServerRendering}),Vue$3.version="2.1.10";/*  */
// attributes that should be using props for binding
var target$1,testEl,acceptValue=makeMap("input,textarea,option,select"),mustUseProp=function(tag,type,attr){return"value"===attr&&acceptValue(tag)&&"button"!==type||"selected"===attr&&"option"===tag||"checked"===attr&&"input"===tag||"muted"===attr&&"video"===tag},isEnumeratedAttr=makeMap("contenteditable,draggable,spellcheck"),isBooleanAttr=makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),xlinkNS="http://www.w3.org/1999/xlink",isXlink=function(name){return":"===name.charAt(5)&&"xlink"===name.slice(0,5)},getXlinkProp=function(name){return isXlink(name)?name.slice(6,name.length):""},isFalsyAttrValue=function(val){return null==val||val===!1},namespaceMap={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},isHTMLTag=makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),isSVG=makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),isPreTag=function(tag){return"pre"===tag},isReservedTag=function(tag){return isHTMLTag(tag)||isSVG(tag)},unknownElementCache=Object.create(null),nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,setAttribute:setAttribute}),ref={create:function(_,vnode){registerRef(vnode)},update:function(oldVnode,vnode){oldVnode.data.ref!==vnode.data.ref&&(registerRef(oldVnode,!0),registerRef(vnode))},destroy:function(vnode){registerRef(vnode,!0)}},emptyNode=new VNode("",{},[]),hooks$1=["create","activate","update","remove","destroy"],directives={create:updateDirectives,update:updateDirectives,destroy:function(vnode){updateDirectives(vnode,emptyNode)}},emptyModifiers=Object.create(null),baseModules=[ref,directives],attrs={create:updateAttrs,update:updateAttrs},klass={create:updateClass,update:updateClass},events={create:updateDOMListeners,update:updateDOMListeners},domProps={create:updateDOMProps,update:updateDOMProps},parseStyleText=cached(function(cssText){var res={},listDelimiter=/;(?![^(]*\))/g,propertyDelimiter=/:(.+)/;return cssText.split(listDelimiter).forEach(function(item){if(item){var tmp=item.split(propertyDelimiter);tmp.length>1&&(res[tmp[0].trim()]=tmp[1].trim())}}),res}),cssVarRE=/^--/,importantRE=/\s*!important$/,setProp=function(el,name,val){/* istanbul ignore if */
cssVarRE.test(name)?el.style.setProperty(name,val):importantRE.test(val)?el.style.setProperty(name,val.replace(importantRE,""),"important"):el.style[normalize(name)]=val},prefixes=["Webkit","Moz","ms"],normalize=cached(function(prop){if(testEl=testEl||document.createElement("div"),prop=camelize(prop),"filter"!==prop&&prop in testEl.style)return prop;for(var upper=prop.charAt(0).toUpperCase()+prop.slice(1),i=0;i<prefixes.length;i++){var prefixed=prefixes[i]+upper;if(prefixed in testEl.style)return prefixed}}),style={create:updateStyle,update:updateStyle},hasTransition=inBrowser&&!isIE9,TRANSITION="transition",ANIMATION="animation",transitionProp="transition",transitionEndEvent="transitionend",animationProp="animation",animationEndEvent="animationend";hasTransition&&(/* istanbul ignore if */
void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(transitionProp="WebkitTransition",transitionEndEvent="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(animationProp="WebkitAnimation",animationEndEvent="webkitAnimationEnd"));
// binding to window is necessary to make hot reload work in IE in strict mode
var raf=inBrowser&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,transformRE=/\b(transform|all)(,|$)/,autoCssTransition=cached(function(name){return{enterClass:name+"-enter",leaveClass:name+"-leave",appearClass:name+"-enter",enterToClass:name+"-enter-to",leaveToClass:name+"-leave-to",appearToClass:name+"-enter-to",enterActiveClass:name+"-enter-active",leaveActiveClass:name+"-leave-active",appearActiveClass:name+"-enter-active"}}),transition=inBrowser?{create:_enter,activate:_enter,remove:function(vnode,rm){/* istanbul ignore else */
vnode.data.show?rm():leave(vnode,rm)}}:{},platformModules=[attrs,klass,events,domProps,style,transition],modules=platformModules.concat(baseModules),patch$1=createPatchFunction({nodeOps:nodeOps,modules:modules}),modelableTagRE=/^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;/* istanbul ignore if */
isIE9&&
// http://www.matts411.com/post/internet-explorer-9-oninput/
document.addEventListener("selectionchange",function(){var el=document.activeElement;el&&el.vmodel&&trigger(el,"input")});var model={inserted:function(el,binding,vnode){if("production"!==process.env.NODE_ENV&&(modelableTagRE.test(vnode.tag)||warn("v-model is not supported on element type: <"+vnode.tag+">. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.",vnode.context)),"select"===vnode.tag){var cb=function(){setSelected(el,binding,vnode.context)};cb(),/* istanbul ignore if */
(isIE||isEdge)&&setTimeout(cb,0)}else"textarea"!==vnode.tag&&"text"!==el.type||(el._vModifiers=binding.modifiers,binding.modifiers.lazy||(isAndroid||(el.addEventListener("compositionstart",onCompositionStart),el.addEventListener("compositionend",onCompositionEnd)),/* istanbul ignore if */
isIE9&&(el.vmodel=!0)))},componentUpdated:function(el,binding,vnode){if("select"===vnode.tag){setSelected(el,binding,vnode.context);
// in case the options rendered by v-for have changed,
// it's possible that the value is out-of-sync with the rendered options.
// detect such cases and filter out values that no longer has a matching
// option in the DOM.
var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,el.options)}):binding.value!==binding.oldValue&&hasNoMatchingOption(binding.value,el.options);needReset&&trigger(el,"change")}}},show={bind:function(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition,originalDisplay=el.__vOriginalDisplay="none"===el.style.display?"":el.style.display;value&&transition&&!isIE9?(vnode.data.show=!0,enter(vnode,function(){el.style.display=originalDisplay})):el.style.display=value?originalDisplay:"none"},update:function(el,ref,vnode){var value=ref.value,oldValue=ref.oldValue;/* istanbul ignore if */
if(value!==oldValue){vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition;transition&&!isIE9?(vnode.data.show=!0,value?enter(vnode,function(){el.style.display=el.__vOriginalDisplay}):leave(vnode,function(){el.style.display="none"})):el.style.display=value?el.__vOriginalDisplay:"none"}},unbind:function(el,binding,vnode,oldVnode,isDestroy){isDestroy||(el.style.display=el.__vOriginalDisplay)}},platformDirectives={model:model,show:show},transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String},Transition={name:"transition",props:transitionProps,abstract:!0,render:function(h){var this$1=this,children=this.$slots.default;if(children&&(
// filter out text nodes (possible whitespaces)
children=children.filter(function(c){return c.tag}),children.length))/* istanbul ignore if */
{
// warn multiple elements
"production"!==process.env.NODE_ENV&&children.length>1&&warn("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent);var mode=this.mode;
// warn invalid mode
"production"!==process.env.NODE_ENV&&mode&&"in-out"!==mode&&"out-in"!==mode&&warn("invalid <transition> mode: "+mode,this.$parent);var rawChild=children[0];
// if this is a component root node and the component's
// parent container node also has transition, skip.
if(hasParentTransition(this.$vnode))return rawChild;
// apply transition data to child
// use getRealChild() to ignore abstract components e.g. keep-alive
var child=getRealChild(rawChild);/* istanbul ignore if */
if(!child)return rawChild;if(this._leaving)return placeholder(h,rawChild);
// ensure a key that is unique to the vnode type and to this transition
// component instance. This key will be used to remove pending leaving nodes
// during entering.
var id="__transition-"+this._uid+"-",key=child.key=null==child.key?id+child.tag:isPrimitive(child.key)?0===String(child.key).indexOf(id)?child.key:id+child.key:child.key,data=(child.data||(child.data={})).transition=extractTransitionData(this),oldRawChild=this._vnode,oldChild=getRealChild(oldRawChild);if(
// mark v-show
// so that the transition module can hand over the control to the directive
child.data.directives&&child.data.directives.some(function(d){return"show"===d.name})&&(child.data.show=!0),oldChild&&oldChild.data&&!isSameChild(child,oldChild)){
// replace old child transition data with fresh one
// important for dynamic transitions!
var oldData=oldChild&&(oldChild.data.transition=extend({},data));
// handle transition mode
if("out-in"===mode)
// return placeholder node and queue update when leave finishes
return this._leaving=!0,mergeVNodeHook(oldData,"afterLeave",function(){this$1._leaving=!1,this$1.$forceUpdate()},key),placeholder(h,rawChild);if("in-out"===mode){var delayedLeave,performLeave=function(){delayedLeave()};mergeVNodeHook(data,"afterEnter",performLeave,key),mergeVNodeHook(data,"enterCancelled",performLeave,key),mergeVNodeHook(oldData,"delayLeave",function(leave){delayedLeave=leave},key)}}return rawChild}}},props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,render:function(h){for(var tag=this.tag||this.$vnode.data.tag||"span",map=Object.create(null),prevChildren=this.prevChildren=this.children,rawChildren=this.$slots.default||[],children=this.children=[],transitionData=extractTransitionData(this),i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))children.push(c),map[c.key]=c,(c.data||(c.data={})).transition=transitionData;else if("production"!==process.env.NODE_ENV){var opts=c.componentOptions,name=opts?opts.Ctor.options.name||opts.tag:c.tag;warn("<transition-group> children must be keyed: <"+name+">")}}if(prevChildren){for(var kept=[],removed=[],i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData,c$1.data.pos=c$1.elm.getBoundingClientRect(),map[c$1.key]?kept.push(c$1):removed.push(c$1)}this.kept=h(tag,null,kept),this.removed=removed}return h(tag,null,children)},beforeUpdate:function(){
// force removing pass
this.__patch__(this._vnode,this.kept,!1,// hydrating
!0),this._vnode=this.kept},updated:function(){var children=this.prevChildren,moveClass=this.moveClass||(this.name||"v")+"-move";if(children.length&&this.hasMove(children[0].elm,moveClass)){
// we divide the work into three loops to avoid mixing DOM reads and writes
// in each iteration - which helps prevent layout thrashing.
children.forEach(callPendingCbs),children.forEach(recordPosition),children.forEach(applyTranslation);
// force reflow to put everything in position
document.body.offsetHeight;// eslint-disable-line
children.forEach(function(c){if(c.data.moved){var el=c.elm,s=el.style;addTransitionClass(el,moveClass),s.transform=s.WebkitTransform=s.transitionDuration="",el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){e&&!/transform$/.test(e.propertyName)||(el.removeEventListener(transitionEndEvent,cb),el._moveCb=null,removeTransitionClass(el,moveClass))})}})}},methods:{hasMove:function(el,moveClass){/* istanbul ignore if */
if(!hasTransition)return!1;if(null!=this._hasMove)return this._hasMove;addTransitionClass(el,moveClass);var info=getTransitionInfo(el);return removeTransitionClass(el,moveClass),this._hasMove=info.hasTransform}}},platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};/*  */
// install platform specific utils
Vue$3.config.isUnknownElement=isUnknownElement,Vue$3.config.isReservedTag=isReservedTag,Vue$3.config.getTagNamespace=getTagNamespace,Vue$3.config.mustUseProp=mustUseProp,
// install platform runtime directives & components
extend(Vue$3.options.directives,platformDirectives),extend(Vue$3.options.components,platformComponents),
// install platform patch function
Vue$3.prototype.__patch__=inBrowser?patch$1:noop,
// wrap mount
Vue$3.prototype.$mount=function(el,hydrating){return el=el&&inBrowser?query(el):void 0,this._mount(el,hydrating)},"production"!==process.env.NODE_ENV&&inBrowser&&"undefined"!=typeof console&&console[console.info?"info":"log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html"),
// devtools global hook
/* istanbul ignore next */
setTimeout(function(){config.devtools&&(devtools?devtools.emit("init",Vue$3):"production"!==process.env.NODE_ENV&&inBrowser&&!isEdge&&/Chrome\/\d+/.test(window.navigator.userAgent)&&console[console.info?"info":"log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools"))},0);
// #3663
// IE encodes newlines inside attribute values while other browsers don't
var decoder,shouldDecodeNewlines=!!inBrowser&&shouldDecode("\n","&#10;"),isUnaryTag=makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),canBeLeftOpenTag=makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),isNonPhrasingTag=makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),singleAttrIdentifier=/([^\s"'<>\/=]+)/,singleAttrAssign=/(?:=)/,singleAttrValues=[
// attr value double quotes
/"([^"]*)"+/.source,
// attr value, single quotes
/'([^']*)'+/.source,
// attr value, no quotes
/([^\s"'=<>`]+)/.source],attribute=new RegExp("^\\s*"+singleAttrIdentifier.source+"(?:\\s*("+singleAttrAssign.source+")\\s*(?:"+singleAttrValues.join("|")+"))?"),ncname="[a-zA-Z_][\\w\\-\\.]*",qnameCapture="((?:"+ncname+"\\:)?"+ncname+")",startTagOpen=new RegExp("^<"+qnameCapture),startTagClose=/^\s*(\/?)>/,endTag=new RegExp("^<\\/"+qnameCapture+"[^>]*>"),doctype=/^<!DOCTYPE [^>]+>/i,comment=/^<!--/,conditionalComment=/^<!\[/,IS_REGEX_CAPTURING_BROKEN=!1;"x".replace(/x(.)?/g,function(m,g){IS_REGEX_CAPTURING_BROKEN=""===g});
// Special Elements (can contain anything)
var len,str,chr,index$1,expressionPos,expressionEndPos,warn$1,platformGetTagNamespace,platformMustUseProp,platformIsPreTag,preTransforms,transforms,postTransforms,delimiters,isStaticKey,isPlatformReservedTag,warn$2,transforms$1,dataGenFns,platformDirectives$1,isPlatformReservedTag$1,staticRenderFns,onceCount,currentOptions,warn$3,isScriptOrStyle=makeMap("script,style",!0),reCache={},ltRE=/&lt;/g,gtRE=/&gt;/g,nlRE=/&#10;/g,ampRE=/&amp;/g,quoteRE=/&quot;/g,defaultTagRE=/\{\{((?:.|\n)+?)\}\}/g,regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g,buildRegex=cached(function(delimiters){var open=delimiters[0].replace(regexEscapeRE,"\\$&"),close=delimiters[1].replace(regexEscapeRE,"\\$&");return new RegExp(open+"((?:.|\\n)+?)"+close,"g")}),dirRE=/^v-|^@|^:/,forAliasRE=/(.*?)\s+(?:in|of)\s+(.*)/,forIteratorRE=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,bindRE=/^:|^v-bind:/,onRE=/^@|^v-on:/,argRE=/:(.*)$/,modifierRE=/\.[^.]+/g,decodeHTMLCached=cached(decode),ieNSBug=/^xmlns:NS\d+/,ieNSPrefix=/^NS\d+:/,genStaticKeysCached=cached(genStaticKeys$1),fnExpRE=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,simplePathRE=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,keyCodes={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},modifierCode={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:"if($event.target !== $event.currentTarget)return;",ctrl:"if(!$event.ctrlKey)return;",shift:"if(!$event.shiftKey)return;",alt:"if(!$event.altKey)return;",meta:"if(!$event.metaKey)return;"},baseDirectives={bind:bind$2,cloak:noop},prohibitedKeywordRE=new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),identRE=/[A-Za-z_$][\w$]*/,stripStringRE=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g,klass$1={staticKeys:["staticClass"],transformNode:transformNode,genData:genData$1},style$1={staticKeys:["staticStyle"],transformNode:transformNode$1,genData:genData$2},modules$1=[klass$1,style$1],directives$1={model:model$1,text:text,html:html},cache=Object.create(null),baseOptions={expectHTML:!0,modules:modules$1,staticKeys:genStaticKeys(modules$1),directives:directives$1,isReservedTag:isReservedTag,isUnaryTag:isUnaryTag,mustUseProp:mustUseProp,getTagNamespace:getTagNamespace,isPreTag:isPreTag},idToTemplate=cached(function(id){var el=query(id);return el&&el.innerHTML}),mount=Vue$3.prototype.$mount;Vue$3.prototype.$mount=function(el,hydrating){/* istanbul ignore if */
if(el=el&&query(el),el===document.body||el===document.documentElement)return"production"!==process.env.NODE_ENV&&warn("Do not mount Vue to <html> or <body> - mount to normal elements instead."),this;var options=this.$options;
// resolve template/el and convert to render function
if(!options.render){var template=options.template;if(template)if("string"==typeof template)"#"===template.charAt(0)&&(template=idToTemplate(template),/* istanbul ignore if */
"production"===process.env.NODE_ENV||template||warn("Template element not found or is empty: "+options.template,this));else{if(!template.nodeType)return"production"!==process.env.NODE_ENV&&warn("invalid template option:"+template,this),this;template=template.innerHTML}else el&&(template=getOuterHTML(el));if(template){var ref=compileToFunctions(template,{warn:warn,shouldDecodeNewlines:shouldDecodeNewlines,delimiters:options.delimiters},this),render=ref.render,staticRenderFns=ref.staticRenderFns;options.render=render,options.staticRenderFns=staticRenderFns}}return mount.call(this,el,hydrating)},Vue$3.compile=compileToFunctions,module.exports=Vue$3}).call(exports,__webpack_require__(3),function(){return this}())},/* 3 */
/***/
function(module,exports){function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(fun){if(cachedSetTimeout===setTimeout)
//normal enviroments in sane situations
return setTimeout(fun,0);
// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(fun,0);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0)}catch(e){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0)}catch(e){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout)
//normal enviroments in sane situations
return clearTimeout(marker);
// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(marker);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker)}catch(e){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker)}catch(e){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker)}}}function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var timeout=runTimeout(cleanUpNextTick);draining=!0;for(var len=queue.length;len;){for(currentQueue=queue,queue=[];++queueIndex<len;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,len=queue.length}currentQueue=null,draining=!1,runClearTimeout(timeout)}}
// v8 likes predictible objects
function Item(fun,array){this.fun=fun,this.array=array}function noop(){}
// shim for using process in browser
var cachedSetTimeout,cachedClearTimeout,process=module.exports={};!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var currentQueue,queue=[],draining=!1,queueIndex=-1;process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)args[i-1]=arguments[i];queue.push(new Item(fun,args)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",// empty string to avoid regexp issues
process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(name){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(dir){throw new Error("process.chdir is not supported")},process.umask=function(){return 0}},/* 4 */
/***/
function(module,exports,__webpack_require__){/* styles */
__webpack_require__(5);var Component=__webpack_require__(9)(/* script */
__webpack_require__(10),/* template */
__webpack_require__(48),/* scopeId */
null,/* cssModules */
null);module.exports=Component.exports},/* 5 */
/***/
function(module,exports,__webpack_require__){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(6);"string"==typeof content&&(content=[[module.id,content,""]]);
// add the styles to the DOM
__webpack_require__(8)(content,{});content.locals&&(module.exports=content.locals)},/* 6 */
/***/
function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(7)(),
// imports
// module
exports.push([module.id,'.vuedals{background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0;right:0;bottom:0;z-index:1050;overflow-x:hidden;overflow-y:auto;perspective:500px;transition:opacity .4s ease}.vuedal{background:#fff;box-shadow:3px 5px 20px #333;padding:20px;margin:30px 0;transition:all .6s ease;position:absolute;left:50%;transform:translateX(-50%);will-change:transform;width:650px}.vuedal.xl{width:1024px}.vuedal.lg{width:850px}.vuedal.sm{width:550px}.vuedal.disabled{opacity:.2}.vuedal.disabled:after{background:transparent;content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:100}.vuedal header{border-bottom:1px solid #eee;min-height:32px;margin-bottom:20px}.vuedal header .title{font-size:21px;font-weight:100}.vuedal header .close{float:right;font-size:26px;font-weight:100;line-height:21px}.vuedal-enter,.vuedal-leave-active{opacity:0}.vuedal-enter .vuedal,.vuedal-leave-active .vuedal{opacity:0;transform:translateX(-50%) translateY(-30px) scale(.95)}',""])},/* 7 */
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
"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},/* 8 */
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
"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},/* 9 */
/***/
function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);
// Vue.extend constructor export interop
var options="function"==typeof scriptExports?scriptExports.options:scriptExports;
// inject cssModules
if(
// render functions
compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),
// scopedId
scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},/* 10 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _assign=__webpack_require__(11),_assign2=_interopRequireDefault(_assign),_bus=__webpack_require__(1),_bus2=_interopRequireDefault(_bus);exports.default={name:"vuedals",created:function(){var _this=this;_bus2.default.$on("new",function(data){var defaults={title:null,dismisable:!0,name:"",size:"md"},options=(0,_assign2.default)(defaults,data);_this.vuedals.push(options),_bus2.default.$emit("opened",{index:_this.vuedals.length-1,data:data})}),_bus2.default.$on("close",function(_){return _this.close()})},data:function(){return{vuedals:[]}},methods:{close:function(){var index=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return index||(index=this.vuedals.length-1),_bus2.default.$emit("closed",{index:index,data:this.vuedals[index]}),0===index&&_bus2.default.$emit("destroyed"),index?void(index!==-1&&this.vuedals.splice(index,1)):void this.vuedals.pop()},getCssClasses:function(index){var vuedal=this.vuedals[index],classNames=vuedal.name+" "+vuedal.size;return index<this.$last&&(classNames+=" disabled"),classNames}},computed:{$last:function(){return this.vuedals.length-1}}}},/* 11 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(12),__esModule:!0}},/* 12 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(13),module.exports=__webpack_require__(16).Object.assign},/* 13 */
/***/
function(module,exports,__webpack_require__){
// 19.1.3.1 Object.assign(target, source)
var $export=__webpack_require__(14);$export($export.S+$export.F,"Object",{assign:__webpack_require__(29)})},/* 14 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(15),core=__webpack_require__(16),ctx=__webpack_require__(17),hide=__webpack_require__(19),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)
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
module.exports=$export},/* 15 */
/***/
function(module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},/* 16 */
/***/
function(module,exports){var core=module.exports={version:"2.4.0"};"number"==typeof __e&&(__e=core)},/* 17 */
/***/
function(module,exports,__webpack_require__){
// optional / simple context binding
var aFunction=__webpack_require__(18);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},/* 18 */
/***/
function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},/* 19 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(20),createDesc=__webpack_require__(28);module.exports=__webpack_require__(24)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},/* 20 */
/***/
function(module,exports,__webpack_require__){var anObject=__webpack_require__(21),IE8_DOM_DEFINE=__webpack_require__(23),toPrimitive=__webpack_require__(27),dP=Object.defineProperty;exports.f=__webpack_require__(24)?Object.defineProperty:function(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},/* 21 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(22);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},/* 22 */
/***/
function(module,exports){module.exports=function(it){return"object"==typeof it?null!==it:"function"==typeof it}},/* 23 */
/***/
function(module,exports,__webpack_require__){module.exports=!__webpack_require__(24)&&!__webpack_require__(25)(function(){return 7!=Object.defineProperty(__webpack_require__(26)("div"),"a",{get:function(){return 7}}).a})},/* 24 */
/***/
function(module,exports,__webpack_require__){
// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(25)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 25 */
/***/
function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},/* 26 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(22),document=__webpack_require__(15).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},/* 27 */
/***/
function(module,exports,__webpack_require__){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(22);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},/* 28 */
/***/
function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},/* 29 */
/***/
function(module,exports,__webpack_require__){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys=__webpack_require__(30),gOPS=__webpack_require__(45),pIE=__webpack_require__(46),toObject=__webpack_require__(47),IObject=__webpack_require__(34),$assign=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
module.exports=!$assign||__webpack_require__(25)(function(){var A={},B={},S=Symbol(),K="abcdefghijklmnopqrst";return A[S]=7,K.split("").forEach(function(k){B[k]=k}),7!=$assign({},A)[S]||Object.keys($assign({},B)).join("")!=K})?function(target,source){for(// eslint-disable-line no-unused-vars
var T=toObject(target),aLen=arguments.length,index=1,getSymbols=gOPS.f,isEnum=pIE.f;aLen>index;)for(var key,S=IObject(arguments[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0;length>j;)isEnum.call(S,key=keys[j++])&&(T[key]=S[key]);return T}:$assign},/* 30 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(31),enumBugKeys=__webpack_require__(44);module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},/* 31 */
/***/
function(module,exports,__webpack_require__){var has=__webpack_require__(32),toIObject=__webpack_require__(33),arrayIndexOf=__webpack_require__(37)(!1),IE_PROTO=__webpack_require__(41)("IE_PROTO");module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key);
// Don't enum bug & hidden keys
for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result}},/* 32 */
/***/
function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},/* 33 */
/***/
function(module,exports,__webpack_require__){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(34),defined=__webpack_require__(36);module.exports=function(it){return IObject(defined(it))}},/* 34 */
/***/
function(module,exports,__webpack_require__){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(35);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},/* 35 */
/***/
function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},/* 36 */
/***/
function(module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},/* 37 */
/***/
function(module,exports,__webpack_require__){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(33),toLength=__webpack_require__(38),toIndex=__webpack_require__(40);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toIndex(fromIndex,length);
// Array#includes uses SameValueZero equality algorithm
if(IS_INCLUDES&&el!=el){for(;length>index;)if(value=O[index++],value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}}},/* 38 */
/***/
function(module,exports,__webpack_require__){
// 7.1.15 ToLength
var toInteger=__webpack_require__(39),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},/* 39 */
/***/
function(module,exports){
// 7.1.4 ToInteger
var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},/* 40 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(39),max=Math.max,min=Math.min;module.exports=function(index,length){return index=toInteger(index),index<0?max(index+length,0):min(index,length)}},/* 41 */
/***/
function(module,exports,__webpack_require__){var shared=__webpack_require__(42)("keys"),uid=__webpack_require__(43);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},/* 42 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(15),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}},/* 43 */
/***/
function(module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},/* 44 */
/***/
function(module,exports){
// IE 8- don't enum bug keys
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 45 */
/***/
function(module,exports){exports.f=Object.getOwnPropertySymbols},/* 46 */
/***/
function(module,exports){exports.f={}.propertyIsEnumerable},/* 47 */
/***/
function(module,exports,__webpack_require__){
// 7.1.13 ToObject(argument)
var defined=__webpack_require__(36);module.exports=function(it){return Object(defined(it))}},/* 48 */
/***/
function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("transition",{attrs:{tag:"div",name:"vuedal"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.vuedals.length,expression:"vuedals.length"}],staticClass:"vuedals"},_vm._l(_vm.vuedals,function(vuedal,index){return _c("div",{key:vuedal,staticClass:"vuedal",class:_vm.getCssClasses(index)},[vuedal.title||vuedal.dismisable?_c("header",[_c("span",{staticClass:"title"},[_vm._v(_vm._s(vuedal.title))]),_vm._v(" "),vuedal.dismisable?_c("span",{staticClass:"close",on:{click:function($event){_vm.close(index)}}},[_vm._v("×")]):_vm._e()]):_vm._e(),_vm._v(" "),_c(vuedal.component,{tag:"component",attrs:{props:vuedal.props}})],1)}))])},staticRenderFns:[]}}])});