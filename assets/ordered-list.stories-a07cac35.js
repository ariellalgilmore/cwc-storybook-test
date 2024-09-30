import{x as d}from"./lit-element-266f0592.js";import $ from"./list-3b341ae1.js";import"./ordered-list-43bfee69.js";import"./jsx-runtime-508ac468.js";import"./index-31737638.js";import"./iframe-7e1ca180.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-957a5a66.js";import"./storybook-cdn-4cc58f60.js";import"./package-7aeb10bd.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const f={isExpressive:!1,native:!0},h={isExpressive:{control:"boolean",description:"Specify whether this ordered list expressive or not."},native:{control:"boolean",description:"Specify whether this ordered list should use native list styles instead of custom counter."}},e={render:()=>d`<cds-ordered-list native>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
  </cds-ordered-list>`},s={render:()=>d`<cds-ordered-list native>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>
      Ordered List level 1
      <cds-ordered-list native>
        <cds-list-item>Ordered List level 2</cds-list-item>
        <cds-list-item>Ordered List level 2</cds-list-item>
        <cds-list-item>Ordered List level 2</cds-list-item>
        <cds-list-item>Ordered List level 2</cds-list-item>
      </cds-ordered-list>
    </cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
  </cds-ordered-list>`},t={render:()=>d`<cds-ordered-list>
    <cds-list-item>
      Ordered List level 1
      <cds-ordered-list native>
        <cds-list-item>Ordered List level 2</cds-list-item>
        <cds-list-item>
          Ordered List level 2
          <cds-ordered-list native>
            <cds-list-item>Ordered List level 3</cds-list-item>
            <cds-list-item>Ordered List level 3</cds-list-item>
          </cds-ordered-list>
        </cds-list-item>
      </cds-ordered-list>
    </cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
  </cds-ordered-list>`},i={args:f,argTypes:h,render:({isExpressive:l,native:r})=>d`
    <cds-ordered-list ?isExpressive="${l}" ?native="${r}">
      <cds-list-item>
        Ordered List level 1
        <cds-ordered-list ?isExpressive="${l}" ?native="${r}">
          <cds-list-item>Ordered List level 2</cds-list-item>
          <cds-list-item>
            Ordered List level 2
            <cds-ordered-list ?isExpressive="${l}" ?native="${r}">
              <cds-list-item>Ordered List level 2</cds-list-item>
              <cds-list-item>Ordered List level 2</cds-list-item>
            </cds-ordered-list>
          </cds-list-item>
        </cds-ordered-list>
      </cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
    </cds-ordered-list>
  </cds-ordered-list>
  `},B={title:"Components/Ordered list",parameters:{docs:{page:$}}};var c,m,n;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`<cds-ordered-list native>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
  </cds-ordered-list>\`
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var v,o,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`<cds-ordered-list native>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>
      Ordered List level 1
      <cds-ordered-list native>
        <cds-list-item>Ordered List level 2</cds-list-item>
        <cds-list-item>Ordered List level 2</cds-list-item>
        <cds-list-item>Ordered List level 2</cds-list-item>
        <cds-list-item>Ordered List level 2</cds-list-item>
      </cds-ordered-list>
    </cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
  </cds-ordered-list>\`
}`,...(L=(o=s.parameters)==null?void 0:o.docs)==null?void 0:L.source}}};var O,a,p;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`<cds-ordered-list>
    <cds-list-item>
      Ordered List level 1
      <cds-ordered-list native>
        <cds-list-item>Ordered List level 2</cds-list-item>
        <cds-list-item>
          Ordered List level 2
          <cds-ordered-list native>
            <cds-list-item>Ordered List level 3</cds-list-item>
            <cds-list-item>Ordered List level 3</cds-list-item>
          </cds-ordered-list>
        </cds-list-item>
      </cds-ordered-list>
    </cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
    <cds-list-item>Ordered List level 1</cds-list-item>
  </cds-ordered-list>\`
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var u,x,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    isExpressive,
    native
  }) => html\`
    <cds-ordered-list ?isExpressive="\${isExpressive}" ?native="\${native}">
      <cds-list-item>
        Ordered List level 1
        <cds-ordered-list ?isExpressive="\${isExpressive}" ?native="\${native}">
          <cds-list-item>Ordered List level 2</cds-list-item>
          <cds-list-item>
            Ordered List level 2
            <cds-ordered-list ?isExpressive="\${isExpressive}" ?native="\${native}">
              <cds-list-item>Ordered List level 2</cds-list-item>
              <cds-list-item>Ordered List level 2</cds-list-item>
            </cds-ordered-list>
          </cds-list-item>
        </cds-ordered-list>
      </cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
    </cds-ordered-list>
  </cds-ordered-list>
  \`
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const F=["Default","NativeListStyles","Nested","Playground"];export{e as Default,s as NativeListStyles,t as Nested,i as Playground,F as __namedExportsOrder,B as default};
