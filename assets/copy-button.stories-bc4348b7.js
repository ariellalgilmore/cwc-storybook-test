import{x as l}from"./lit-element-266f0592.js";import{o as t}from"./if-defined-21892bb5.js";import"./copy-button-503253a0.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const b={feedback:"Copied!",feedbackTimeout:2e3,iconDescription:"Copy to clipboard"},f={feedback:{control:"text",description:"Provide a description for the icon representing the copy action that can be read by screen readers"},feedbackTimeout:{control:{type:"number",min:1,step:1},description:"Specify the time it takes for the feedback message to timeout"},iconDescription:{control:"text",description:"Provide a description for the icon representing the copy action that can be read by screen readers"}},y={title:"Components/Copy button",render:({feedbackText:p,feedbackTimeout:d,onClick:m,iconDescription:u})=>l`
    <cds-copy-button
      feedback="${t(p)}"
      feedback-timeout="${t(d)}"
      @click="${m}">
      ${u}
    </cds-copy-button>
  `,args:b},e={parameters:{controls:{exclude:/(.*?)/}}},o={argTypes:f};var r,c,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: /(.*?)/
    }
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: controls
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const g=["Default","Playground"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Playground:o,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{C};
