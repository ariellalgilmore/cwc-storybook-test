import{x as i}from"./lit-element-266f0592.js";import u from"./list-bd599ce8.js";import"./ordered-list-43bfee69.js";import"./jsx-runtime-c7a019d5.js";import"./index-4bcb7531.js";import"./iframe-7f5a54d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-e2a81c98.js";import"./storybook-cdn-4cc58f60.js";import"./package-7aeb10bd.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const U={isExpressive:!1},L={isExpressive:{control:"boolean",description:"Specify whether this ordered list expressive or not."}},e={render:()=>i`<cds-unordered-list>
    <cds-list-item>Unordered List level 1</cds-list-item>
    <cds-list-item>Unordered List level 1</cds-list-item>
    <cds-list-item>Unordered List level 1</cds-list-item>
  </cds-unordered-list>`},s={render:()=>i`<cds-unordered-list>
    <cds-list-item>
      Unordered List level 1
      <cds-unordered-list>
        <cds-list-item>Unordered List level 2</cds-list-item>
        <cds-list-item>
          Unordered List level 2
          <cds-unordered-list>
            <cds-list-item>Unordered List level 3</cds-list-item>
            <cds-list-item>Unordered List level 3</cds-list-item>
          </cds-unordered-list>
        </cds-list-item>
      </cds-unordered-list>
    </cds-list-item>
    <cds-list-item>Unordered List level 1</cds-list-item>
    <cds-list-item>Unordered List level 1</cds-list-item>
  </cds-unordered-list>`},t={args:U,argTypes:L,render:({isExpressive:d})=>i`
    <cds-unordered-list ?isExpressive="${d}">
      <cds-list-item>
        Unordered List level 1
        <cds-unordered-list ?isExpressive="${d}">
          <cds-list-item>Unordered List level 2</cds-list-item>
          <cds-list-item>
            Unordered List level 2
            <cds-unordered-list ?isExpressive="${d}">
              <cds-list-item>Unordered List level 2</cds-list-item>
              <cds-list-item>Unordered List level 2</cds-list-item>
            </cds-unordered-list>
          </cds-list-item>
        </cds-unordered-list>
      </cds-list-item>
      <cds-list-item>Unordered List level 1</cds-list-item>
      <cds-list-item>Unordered List level 1</cds-list-item>
    </cds-unordered-list>
  `},O={title:"Components/Unordered list",parameters:{docs:{page:u}}};var r,l,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`<cds-unordered-list>
    <cds-list-item>Unordered List level 1</cds-list-item>
    <cds-list-item>Unordered List level 1</cds-list-item>
    <cds-list-item>Unordered List level 1</cds-list-item>
  </cds-unordered-list>\`
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var o,c,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`<cds-unordered-list>
    <cds-list-item>
      Unordered List level 1
      <cds-unordered-list>
        <cds-list-item>Unordered List level 2</cds-list-item>
        <cds-list-item>
          Unordered List level 2
          <cds-unordered-list>
            <cds-list-item>Unordered List level 3</cds-list-item>
            <cds-list-item>Unordered List level 3</cds-list-item>
          </cds-unordered-list>
        </cds-list-item>
      </cds-unordered-list>
    </cds-list-item>
    <cds-list-item>Unordered List level 1</cds-list-item>
    <cds-list-item>Unordered List level 1</cds-list-item>
  </cds-unordered-list>\`
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,a,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    isExpressive
  }) => html\`
    <cds-unordered-list ?isExpressive="\${isExpressive}">
      <cds-list-item>
        Unordered List level 1
        <cds-unordered-list ?isExpressive="\${isExpressive}">
          <cds-list-item>Unordered List level 2</cds-list-item>
          <cds-list-item>
            Unordered List level 2
            <cds-unordered-list ?isExpressive="\${isExpressive}">
              <cds-list-item>Unordered List level 2</cds-list-item>
              <cds-list-item>Unordered List level 2</cds-list-item>
            </cds-unordered-list>
          </cds-list-item>
        </cds-unordered-list>
      </cds-list-item>
      <cds-list-item>Unordered List level 1</cds-list-item>
      <cds-list-item>Unordered List level 1</cds-list-item>
    </cds-unordered-list>
  \`
}`,...(v=(a=t.parameters)==null?void 0:a.docs)==null?void 0:v.source}}};const X=["Default","Nested","Playground"];export{e as Default,s as Nested,t as Playground,X as __namedExportsOrder,O as default};
