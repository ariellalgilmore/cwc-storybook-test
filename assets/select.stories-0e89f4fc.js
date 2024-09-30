import{x as l}from"./lit-element-266f0592.js";import{o as e}from"./if-defined-21892bb5.js";import{p as j}from"./carbon-element-59fbbccb.js";import{I as t}from"./text-input-f5b277bd.js";import"./select-skeleton-2dec3fba.js";import"./form-item-325d0083.js";import"./layer-d66987ad.js";import"./with-layer-c4dddb92.js";/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const G={[`Small size (${t.SMALL})`]:t.SMALL,[`Medium size (${t.MEDIUM})`]:t.MEDIUM,[`Large size (${t.LARGE})`]:t.LARGE},R={disabled:!1,helperText:"Optional helper text",hideLabel:!1,inline:!1,invalid:!1,invalidText:"Error message",labelText:"Select an option",placeholder:"Choose an option",size:t.MEDIUM,readOnly:!1,warn:!1,warnText:"Warning message",value:""},N={disabled:{control:"boolean",description:"Specify whether the control is disabled."},helperText:{control:"text",description:"Provide text that is used alongside the control label for additional help."},hideLabel:{control:"boolean",description:"Specify whether the label should be hidden, or not."},inline:{control:"boolean",description:"Specify whether you want the inline version of this control."},invalid:{control:"boolean",description:"Specify if the currently value is invalid."},invalidText:{control:"text",description:"Message which is displayed if the value is invalid."},labelText:{control:"text",description:"Provide label text to be read by screen readers when interacting with the control."},placeholder:{control:"text",description:"Placeholder text to be used with the <code>&lt;input&gt;</code>."},size:{control:"select",description:"Specify the size of the Select Input.",options:G},readOnly:{control:"boolean",description:"Whether the select should be read-only."},warn:{control:"boolean",description:"Specify whether the control is currently in warning state."},warnText:{control:"text",description:"Provide the text that is displayed when the control is in warning state."},value:{control:"text",description:"The value of the selected item."},onInput:{action:`${j}-select-selected`}},s={render:()=>l`
      <cds-form-item>
        <cds-select
          helper-text="Optional helper text"
          label-text="Select an option"
          placeholder="Choose an option">
          <cds-select-item-group label="Category 1">
            <cds-select-item value="all">Option 1</cds-select-item>
            <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
          </cds-select-item-group>
          <cds-select-item-group label="Category 2">
            <cds-select-item value="staging">Option 3</cds-select-item>
            <cds-select-item value="dea">Option 4</cds-select-item>
            <cds-select-item value="router">Option 5</cds-select-item>
          </cds-select-item-group>
        </cds-select>
      </cds-form-item>
    `},c={render:()=>l`
      <cds-form-item>
        <cds-select
          inline
          helper-text="Optional helper text"
          label-text="Select an option"
          placeholder="Choose an option">
          <cds-select-item-group label="Category 1">
            <cds-select-item value="all">Option 1</cds-select-item>
            <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
          </cds-select-item-group>
          <cds-select-item-group label="Category 2">
            <cds-select-item value="staging">Option 3</cds-select-item>
            <cds-select-item value="dea">Option 4</cds-select-item>
            <cds-select-item value="router">Option 5</cds-select-item>
          </cds-select-item-group>
        </cds-select>
      </cds-form-item>
    `},n={parameters:{percy:{skip:!0}},render:()=>l` <cds-select-skeleton></cds-select-skeleton> `},i={render:()=>l`
      <sb-template-layers>
        <cds-select
          helper-text="Optional helper text"
          placeholder="Choose an option">
          <cds-select-item-group label="Category 1">
            <cds-select-item value="all">Option 1</cds-select-item>
            <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
          </cds-select-item-group>
          <cds-select-item-group label="Category 2">
            <cds-select-item value="staging">Option 3</cds-select-item>
            <cds-select-item value="dea">Option 4</cds-select-item>
            <cds-select-item value="router">Option 5</cds-select-item>
          </cds-select-item-group>
        </cds-select>
      </sb-template-layers>
    `},o={args:R,argTypes:N,render:r=>{const{disabled:w,helperText:T,hideLabel:C,inline:D,invalid:L,invalidText:z,labelText:I,name:M,placeholder:k,size:E,readOnly:F,warn:P,warnText:_,value:A,children:U=l`
        <cds-select-item-group label="Category 1">
          <cds-select-item value="all">Option 1</cds-select-item>
          <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
        </cds-select-item-group>
        <cds-select-item-group label="Category 2">
          <cds-select-item value="staging">Option 3</cds-select-item>
          <cds-select-item value="dea">Option 4</cds-select-item>
          <cds-select-item value="router">Option 5</cds-select-item>
        </cds-select-item-group>
      `,onInput:W}=r??{};return l`
      <cds-form-item>
        <cds-select
          ?inline="${D}"
          ?disabled="${w}"
          helper-text="${e(T)}"
          ?hide-label="${C}"
          ?invalid="${L}"
          invalid-text="${e(z)}"
          label-text="${e(I)}"
          name="${e(M)}"
          placeholder="${e(k)}"
          size="${e(E)}"
          ?readonly="${F}"
          ?warn="${P}"
          warn-text="${e(_)}"
          value="${e(A)}"
          @cds-select-selected="${e(W)}">
          ${U}
        </cds-select>
      </cds-form-item>
    `}},Z={decorators:[r=>l`<div style="width: 400px">${r()}</div>`],title:"Components/Select"};var a,d,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-form-item>
        <cds-select
          helper-text="Optional helper text"
          label-text="Select an option"
          placeholder="Choose an option">
          <cds-select-item-group label="Category 1">
            <cds-select-item value="all">Option 1</cds-select-item>
            <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
          </cds-select-item-group>
          <cds-select-item-group label="Category 2">
            <cds-select-item value="staging">Option 3</cds-select-item>
            <cds-select-item value="dea">Option 4</cds-select-item>
            <cds-select-item value="router">Option 5</cds-select-item>
          </cds-select-item-group>
        </cds-select>
      </cds-form-item>
    \`;
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-form-item>
        <cds-select
          inline
          helper-text="Optional helper text"
          label-text="Select an option"
          placeholder="Choose an option">
          <cds-select-item-group label="Category 1">
            <cds-select-item value="all">Option 1</cds-select-item>
            <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
          </cds-select-item-group>
          <cds-select-item-group label="Category 2">
            <cds-select-item value="staging">Option 3</cds-select-item>
            <cds-select-item value="dea">Option 4</cds-select-item>
            <cds-select-item value="router">Option 5</cds-select-item>
          </cds-select-item-group>
        </cds-select>
      </cds-form-item>
    \`;
  }
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    percy: {
      skip: true
    }
  },
  render: () => html\` <cds-select-skeleton></cds-select-skeleton> \`
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,y,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <sb-template-layers>
        <cds-select
          helper-text="Optional helper text"
          placeholder="Choose an option">
          <cds-select-item-group label="Category 1">
            <cds-select-item value="all">Option 1</cds-select-item>
            <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
          </cds-select-item-group>
          <cds-select-item-group label="Category 2">
            <cds-select-item value="staging">Option 3</cds-select-item>
            <cds-select-item value="dea">Option 4</cds-select-item>
            <cds-select-item value="router">Option 5</cds-select-item>
          </cds-select-item-group>
        </cds-select>
      </sb-template-layers>
    \`;
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var O,$,S;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      disabled,
      helperText,
      hideLabel,
      inline,
      invalid,
      invalidText,
      labelText,
      name,
      placeholder,
      size,
      readOnly,
      warn,
      warnText,
      value,
      children = html\`
        <cds-select-item-group label="Category 1">
          <cds-select-item value="all">Option 1</cds-select-item>
          <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
        </cds-select-item-group>
        <cds-select-item-group label="Category 2">
          <cds-select-item value="staging">Option 3</cds-select-item>
          <cds-select-item value="dea">Option 4</cds-select-item>
          <cds-select-item value="router">Option 5</cds-select-item>
        </cds-select-item-group>
      \`,
      onInput
    } = args ?? {};
    return html\`
      <cds-form-item>
        <cds-select
          ?inline="\${inline}"
          ?disabled="\${disabled}"
          helper-text="\${ifDefined(helperText)}"
          ?hide-label="\${hideLabel}"
          ?invalid="\${invalid}"
          invalid-text="\${ifDefined(invalidText)}"
          label-text="\${ifDefined(labelText)}"
          name="\${ifDefined(name)}"
          placeholder="\${ifDefined(placeholder)}"
          size="\${ifDefined(size)}"
          ?readonly="\${readOnly}"
          ?warn="\${warn}"
          warn-text="\${ifDefined(warnText)}"
          value="\${ifDefined(value)}"
          @cds-select-selected="\${ifDefined(onInput)}">
          \${children}
        </cds-select>
      </cds-form-item>
    \`;
  }
}`,...(S=($=o.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};const q=["Default","Inline","Skeleton","WithLayer","Playground"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Inline:c,Playground:o,Skeleton:n,WithLayer:i,__namedExportsOrder:q,default:Z},Symbol.toStringTag,{value:"Module"}));export{ee as S};
