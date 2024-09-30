import{x as n}from"./lit-element-266f0592.js";import{o as d}from"./if-defined-21892bb5.js";import"./form-group-a7da5ade.js";import"./text-input-f5b277bd.js";import"./text-input-skeleton-2fc7e4c6.js";import"./stack-4f2eefe9.js";import"./radio-button-skeleton-3df2ffb6.js";import"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const g={legendText:"FormGroup Legend",message:!1},m={legendText:{control:"text",description:"Provide the text to be rendered inside of the fieldset."},message:{control:"boolean",description:"Specify whether the message should be displayed in the form group."},messageText:{control:"text",description:"Provide the text for the message in the form group."}},t={render:()=>n`
      <cds-form-group legend-text="FormGroup Legend">
        <cds-stack gap="7">
          <cds-text-input label="First Name"> </cds-text-input>
          <cds-text-input label="Last Name"> </cds-text-input>
          <cds-radio-button-group
            legend-text="Radio button heading"
            name="radio-button-group"
            value="radio-1">
            <cds-radio-button
              label-text="Option 1"
              value="radio-1"
              id="radio-1"></cds-radio-button>
            <cds-radio-button
              label-text="Option 2"
              value="radio-2"
              id="radio-2"></cds-radio-button>
            <cds-radio-button
              label-text="Option 3"
              value="radio-3"
              id="radio-3"></cds-radio-button>
          </cds-radio-button-group>
          <cds-button>Submit</cds-button>
        </cds-stack>
      </cds-form-group>
    `},e={args:g,argTypes:m,render:o=>{const{legendText:l,message:p,messageText:b}=o??{};return n`
      <cds-form-group
        legend-text="${d(l)}"
        ?message="${p}"
        message-text="${d(b)}">
        <cds-stack gap="7">
          <cds-text-input label="First Name"> </cds-text-input>
          <cds-text-input label="Last Name"> </cds-text-input>
          <cds-radio-button-group
            legend-text="Radio button heading"
            name="radio-button-group"
            value="radio-1">
            <cds-radio-button
              label-text="Option 1"
              value="radio-1"
              id="radio-1"></cds-radio-button>
            <cds-radio-button
              label-text="Option 2"
              value="radio-2"
              id="radio-2"></cds-radio-button>
            <cds-radio-button
              label-text="Option 3"
              value="radio-3"
              id="radio-3"></cds-radio-button>
          </cds-radio-button-group>
          <cds-button>Submit</cds-button>
        </cds-stack>
      </cds-form-group>
    `}},x={title:"Components/Form Group",decorators:[o=>n` <div style="max-width:400px">${o()}</div> `]};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-form-group legend-text="FormGroup Legend">
        <cds-stack gap="7">
          <cds-text-input label="First Name"> </cds-text-input>
          <cds-text-input label="Last Name"> </cds-text-input>
          <cds-radio-button-group
            legend-text="Radio button heading"
            name="radio-button-group"
            value="radio-1">
            <cds-radio-button
              label-text="Option 1"
              value="radio-1"
              id="radio-1"></cds-radio-button>
            <cds-radio-button
              label-text="Option 2"
              value="radio-2"
              id="radio-2"></cds-radio-button>
            <cds-radio-button
              label-text="Option 3"
              value="radio-3"
              id="radio-3"></cds-radio-button>
          </cds-radio-button-group>
          <cds-button>Submit</cds-button>
        </cds-stack>
      </cds-form-group>
    \`;
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,u,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      legendText,
      message,
      messageText
    } = args ?? {};
    return html\`
      <cds-form-group
        legend-text="\${ifDefined(legendText)}"
        ?message="\${message}"
        message-text="\${ifDefined(messageText)}">
        <cds-stack gap="7">
          <cds-text-input label="First Name"> </cds-text-input>
          <cds-text-input label="Last Name"> </cds-text-input>
          <cds-radio-button-group
            legend-text="Radio button heading"
            name="radio-button-group"
            value="radio-1">
            <cds-radio-button
              label-text="Option 1"
              value="radio-1"
              id="radio-1"></cds-radio-button>
            <cds-radio-button
              label-text="Option 2"
              value="radio-2"
              id="radio-2"></cds-radio-button>
            <cds-radio-button
              label-text="Option 3"
              value="radio-3"
              id="radio-3"></cds-radio-button>
          </cds-radio-button-group>
          <cds-button>Submit</cds-button>
        </cds-stack>
      </cds-form-group>
    \`;
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const f=["Default","Playground"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Playground:e,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{$ as F};
