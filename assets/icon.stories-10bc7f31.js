import{b as e,x as l}from"./lit-element-266f0592.js";import{s as n}from"./16-22dc4144.js";import{s as h}from"./spread-61d77317.js";const o=({children:t,...a}={})=>e`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${h(a)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path></svg>`,c=({children:t,...a}={})=>e`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${h(a)}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${t}<path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path></svg>`,m=({children:t,...a}={})=>e`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${h(a)}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${t}<path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path></svg>`;/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const s={render:()=>l` ${n()} ${o()} ${c()} ${m()} `},d={name:"With custom class",render:()=>l`
    <style>
      .test-class {
        fill: #0062ff;
      }
    </style>
    ${n({class:"test-class"})} ${o({class:"test-class"})}
    ${c({class:"test-class"})} ${m({class:"test-class"})}
  `},i={name:"With aria label",render:()=>l`
    ${n({"aria-label":"add"})} ${o({"aria-label":"add"})}
    ${c({"aria-label":"add"})} ${m({"aria-label":"add"})}
  `},r={name:"With title",render:()=>l`
    ${n({"aria-describedby":"id-title-1",children:e`<title id="id-title-1">add</title>`})}
    ${o({"aria-describedby":"id-title-2",children:e`<title id="id-title-2">add</title>`})}
    ${c({"aria-describedby":"id-title-3",children:e`<title id="id-title-3">add</title>`})}
    ${m({"aria-describedby":"id-title-4",children:e`<title id="id-title-4">add</title>`})}
  `},M={title:"Components/Icon"};var $,p,b;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:"{\n  render: () => html` ${Add16()} ${Add20()} ${Add24()} ${Add32()} `\n}",...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,g,v;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'With custom class',
  render: () => html\`
    <style>
      .test-class {
        fill: #0062ff;
      }
    </style>
    \${Add16({
    class: 'test-class'
  })} \${Add20({
    class: 'test-class'
  })}
    \${Add24({
    class: 'test-class'
  })} \${Add32({
    class: 'test-class'
  })}
  \`
}`,...(v=(g=d.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var w,f,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With aria label',
  render: () => html\`
    \${Add16({
    'aria-label': 'add'
  })} \${Add20({
    'aria-label': 'add'
  })}
    \${Add24({
    'aria-label': 'add'
  })} \${Add32({
    'aria-label': 'add'
  })}
  \`
}`,...(A=(f=i.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var y,x,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'With title',
  render: () => html\`
    \${Add16({
    'aria-describedby': 'id-title-1',
    // @ts-ignore
    children: svg\`<title id="id-title-1">add</title>\`
  })}
    \${Add20({
    'aria-describedby': 'id-title-2',
    // @ts-ignore
    children: svg\`<title id="id-title-2">add</title>\`
  })}
    \${Add24({
    'aria-describedby': 'id-title-3',
    // @ts-ignore
    children: svg\`<title id="id-title-3">add</title>\`
  })}
    \${Add32({
    'aria-describedby': 'id-title-4',
    // @ts-ignore
    children: svg\`<title id="id-title-4">add</title>\`
  })}
  \`
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const I=["Default","withCustomClass","withAriaLabel","withTitle"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:I,default:M,withAriaLabel:i,withCustomClass:d,withTitle:r},Symbol.toStringTag,{value:"Module"}));export{_ as I};
