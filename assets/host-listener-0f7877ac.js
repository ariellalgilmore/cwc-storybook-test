import{o as f}from"./on-5bd5e89a.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const d=(s,o,n,t)=>{const e=n._hostListeners;if(!e)throw new Error("The method `@HostListener()` is defined on has to be of a class that has `HostListerMixin`.");e[t]||(e[t]={}),e[t][s]={options:o}},w=(s,o,n)=>{const{kind:t,key:e,placement:i}=n;if(!(t==="method"&&i==="prototype"||t==="field"&&i==="own"))throw new Error("`@HostListener()` must be defined on instance methods, but you may have defined it on static, field, etc.");return{...n,finisher(r){d(s,o,r,e)}}},p=(s,o)=>(n,t)=>typeof t<"u"?d(s,o,n.constructor,t):w(s,o,n);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const l=/^((document|window|parentRoot|shadowRoot):)?([\w-]+)$/,m=s=>{class o extends s{constructor(){super(...arguments),this._handles=new Set}connectedCallback(){super.connectedCallback();const t=this.constructor._hostListeners;Object.keys(t).forEach(e=>{Object.keys(t[e]).forEach(i=>{const r=l.exec(i);if(!r)throw new Error(`Could not parse the event name: ${e}`);const[,,h,c]=r,a={document:this.ownerDocument,window:this.ownerDocument.defaultView,parentRoot:this.getRootNode(),shadowRoot:this.shadowRoot}[h]||this,{options:u}=t[e][i];this._handles.add(f(a,this.constructor[c]??c,this[e],u))})})}disconnectedCallback(){this._handles.forEach(t=>{t.release(),this._handles.delete(t)}),super.disconnectedCallback()}}return o._hostListeners={},o};export{m as H,p as a};
