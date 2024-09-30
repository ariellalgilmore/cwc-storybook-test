/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const l=t=>{class e extends t{_getValidityMessage(i){return{[""]:"",required:this.requiredValidityMessage}[i]}_testValidity(){const{required:i,value:s}=this;return i&&!s?"required":""}checkValidity(){const i=this._testValidity();return i!==""?(this.dispatchEvent(new CustomEvent("invalid",{bubbles:!1,cancelable:!0,composed:!1}))&&(this.invalid=!0,this.validityMessage=this._getValidityMessage(i)),!1):(this.invalid=!1,this.validityMessage="",!0)}setCustomValidity(i){this.invalid=!!i,this.validityMessage=i}}return e};export{l as V};
