/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=(e=>(e[e.BACKWARD=-1]="BACKWARD",e[e.FORWARD=1]="FORWARD",e))(c||{});const o=class{constructor(e){this._groups={},this.constructor._instances.set(e,this)}shouldBeFocusable(e){if(e.checked)return!0;const{name:s}=e,t=this._groups[s];return t&&Array.from(t).some(u=>u.checked)?!1:!t||t.size===1||this.getSortedGroup(e)[0]===e}getSortedGroup(e){const s=this._groups[e.name];return s&&Array.from(s).sort((t,r)=>{const n=t.compareDocumentPosition(r);return n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:0})}add(e){const{name:s}=e;if(s){const t=this._groups;t[s]||(t[s]=new Set),t[s].add(e)}return this}delete(e,s=e.name){const t=this._groups[s];return t?t.delete(e):!1}select(e,s){const t=this._groups[e.name];t&&(e.checked=!s||!0,e.tabIndex=0,e.focus(),t.forEach(r=>{e!==r&&(r.checked=s||!1,r.tabIndex=-1)}))}navigate(e,s){const t=this.getSortedGroup(e);let r=t.indexOf(e)+s;return r<0?r=t.length-1:r>=t.length&&(r=0),t[r]}static get(e){return this._instances.get(e)||new o(e)}};let a=o;a._instances=new WeakMap;export{c as N,a as R};
