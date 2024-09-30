import{x as a}from"./lit-element-266f0592.js";import"./toggletip-4f5ff9ac.js";import"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import{P as t}from"./defs-4d9ca86b.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const g={top:t.TOP,["top-left"]:t.TOP_LEFT,["top-right"]:t.TOP_RIGHT,bottom:t.BOTTOM,["bottom-left"]:t.BOTTOM_LEFT,["bottom-right"]:t.BOTTOM_RIGHT,left:t.LEFT,["left-bottom"]:t.LEFT_BOTTOM,["left-top"]:t.LEFT_TOP,right:t.RIGHT,["right-bottom"]:t.RIGHT_BOTTOM,["right-top"]:t.RIGHT_TOP},m={alignment:"bottom",open:!0},u={alignment:{control:"select",description:"Specify how the toggletip should align with the button",options:g},open:{control:"boolean",description:"Specify if the toggletip should be open"}},o={render:()=>a`
    <div>
      <div style="display: flex; align-items: center">
        <cds-toggletip alignment="bottom">
          Toggletip label

          <p slot="body-text">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <cds-link slot="actions">Test</cds-link>
          <cds-button slot="actions">Button</cds-button>
        </cds-toggletip>
      </div>
      <br />
      <br />
      <div style="display: flex; align-items: center">
        <cds-toggletip alignment="bottom" open>
          Toggletip label -- using <code>open</code> prop

          <p slot="body-text">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <cds-link slot="actions">Test</cds-link>
          <cds-button slot="actions">Button</cds-button>
        </cds-toggletip>
      </div>
    </div>
  `},e={argTypes:u,args:m,render:({alignment:c,open:p})=>a`
    <cds-toggletip alignment="${c}" ?open="${p}">
      Toggletip label -- using <code>open</code> prop

      <p slot="body-text">
        Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
      </p>
      <cds-link slot="actions">Test</cds-link>
      <cds-button slot="actions">Button</cds-button>
    </cds-toggletip>
  `},b={title:"Components/Toggletip"};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <div style="display: flex; align-items: center">
        <cds-toggletip alignment="bottom">
          Toggletip label

          <p slot="body-text">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <cds-link slot="actions">Test</cds-link>
          <cds-button slot="actions">Button</cds-button>
        </cds-toggletip>
      </div>
      <br />
      <br />
      <div style="display: flex; align-items: center">
        <cds-toggletip alignment="bottom" open>
          Toggletip label -- using <code>open</code> prop

          <p slot="body-text">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <cds-link slot="actions">Test</cds-link>
          <cds-button slot="actions">Button</cds-button>
        </cds-toggletip>
      </div>
    </div>
  \`
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,d,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    alignment,
    open
  }) => html\`
    <cds-toggletip alignment="\${alignment}" ?open="\${open}">
      Toggletip label -- using <code>open</code> prop

      <p slot="body-text">
        Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
      </p>
      <cds-link slot="actions">Test</cds-link>
      <cds-button slot="actions">Button</cds-button>
    </cds-toggletip>
  \`
}`,...(r=(d=e.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const T=["Default","Playground"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Playground:e,__namedExportsOrder:T,default:b},Symbol.toStringTag,{value:"Module"}));export{x as T};
