import{r as L,x as n}from"./lit-element-266f0592.js";import{p as S}from"./carbon-element-59fbbccb.js";import"./layer-d66987ad.js";const h=`.example-layer-test-component{padding:1rem;background:var(--cds-layer);color:var(--cds-text-primary, #161616)}
`,t=L(h);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const _={"First layer":"0","Second layer":"1","Third layer":"2"},C={level:"0"},b={level:{control:"radio",options:_,description:"Specify the layer level."}},e={render:()=>n`
    <cds-layer>
      <div class="example-layer-test-component">Test component</div>
      <cds-layer>
        <div class="example-layer-test-component">Test component</div>
        <cds-layer>
          <div class="example-layer-test-component">Test component</div>
        </cds-layer>
      </cds-layer>
    </cds-layer>
    <style>
      ${t}
    </style>
  `},s={name:"Custom level",render:()=>n`
    <cds-layer level="0">
      <div class="example-layer-test-component">Test component</div>
    </cds-layer>
    <style>
      ${t}
    </style>
  `},r={name:"useLayer",render:()=>(document.addEventListener(`${S}-use-layer`,a=>{const{layer:$,level:f}=a.detail;$.querySelector(".example-layer-test-component.use-layer").innerText=`The current layer level is: ${f+1}`}),n`
      <cds-layer>
        <div class="example-layer-test-component use-layer"></div>
        <cds-layer>
          <div class="example-layer-test-component use-layer"></div>
        </cds-layer>
      </cds-layer>
      <style>
        ${t}
      </style>
    `)},l={args:C,argTypes:b,parameters:{percy:{skip:!0}},render:({level:a})=>n`
    <cds-layer level="${a}">
      <div class="example-layer-test-component">Test component</div>
    </cds-layer>
    <style>
      ${t}
    </style>
  `},k={title:"Components/Layer"};var o,c,y;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <cds-layer>
      <div class="example-layer-test-component">Test component</div>
      <cds-layer>
        <div class="example-layer-test-component">Test component</div>
        <cds-layer>
          <div class="example-layer-test-component">Test component</div>
        </cds-layer>
      </cds-layer>
    </cds-layer>
    <style>
      \${styles}
    </style>
  \`
}`,...(y=(c=e.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Custom level',
  render: () => html\`
    <cds-layer level="0">
      <div class="example-layer-test-component">Test component</div>
    </cds-layer>
    <style>
      \${styles}
    </style>
  \`
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,v,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'useLayer',
  render: () => {
    document.addEventListener(\`\${prefix}-use-layer\`, e => {
      const {
        layer,
        level
      } = (e as any).detail;
      layer.querySelector('.example-layer-test-component.use-layer').innerText = \`The current layer level is: \${level + 1}\`;
    });
    return html\`
      <cds-layer>
        <div class="example-layer-test-component use-layer"></div>
        <cds-layer>
          <div class="example-layer-test-component use-layer"></div>
        </cds-layer>
      </cds-layer>
      <style>
        \${styles}
      </style>
    \`;
  }
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var x,T,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  parameters: {
    percy: {
      skip: true
    }
  },
  render: ({
    level
  }) => html\`
    <cds-layer level="\${level}">
      <div class="example-layer-test-component">Test component</div>
    </cds-layer>
    <style>
      \${styles}
    </style>
  \`
}`,...(g=(T=l.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const E=["Default","CustomLevel","UseLayer","Playground"],q=Object.freeze(Object.defineProperty({__proto__:null,CustomLevel:s,Default:e,Playground:l,UseLayer:r,__namedExportsOrder:E,default:k},Symbol.toStringTag,{value:"Module"}));export{q as L};
