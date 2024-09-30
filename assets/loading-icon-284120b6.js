import{x as i}from"./lit-element-266f0592.js";import{p as o}from"./carbon-element-59fbbccb.js";/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=(r=>(r.REGULAR="regular",r.SMALL="small",r))(c||{});/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const n=({assistiveText:r,type:a})=>{const s=a===c.SMALL?"42":"44";return i`
    <svg class="${o}--loading__svg" viewBox="0 0 100 100">
      ${r?i` <title>${r}</title> `:void 0}
      <circle
        ?hidden="${a!==c.SMALL}"
        class="${o}--loading__background"
        cx="50%"
        cy="50%"
        r="${s}" />
      <circle
        class="${o}--loading__stroke"
        cx="50%"
        cy="50%"
        r="${s}" />
    </svg>
  `};export{c as L,n as g};
