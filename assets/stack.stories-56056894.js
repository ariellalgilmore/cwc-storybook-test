import{x as a}from"./lit-element-266f0592.js";import{S as o}from"./stack-4f2eefe9.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const u={Vertical:o.VERTICAL,Horizontal:o.HORIZONTAL},k={gap:"0",orientation:o.VERTICAL},S={gap:{control:"select",description:"gap",options:["0","1","2","3","4","5","6","7","8","9","10"]},orientation:{control:"select",description:"orientation",options:u}},t={render:()=>a` <cds-stack gap="6">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </cds-stack>`},e={render:()=>a` <cds-stack gap="6" orientation="horizontal">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </cds-stack>`},r={args:k,argTypes:S,render:({gap:g,orientation:I})=>a` <cds-stack
    gap="${g}"
    orientation="${I}">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </cds-stack>`},f={title:"Layout/Stack"};var n,i,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\` <cds-stack gap="6">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </cds-stack>\`
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,c,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\` <cds-stack gap="6" orientation="horizontal">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </cds-stack>\`
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var v,p,l;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    gap,
    orientation
  }) => html\` <cds-stack
    gap="\${gap}"
    orientation="\${orientation}">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </cds-stack>\`
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const T=["Default","Horizontal","Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Horizontal:e,Playground:r,__namedExportsOrder:T,default:f},Symbol.toStringTag,{value:"Module"}));export{A as S};
