import{x as n}from"./lit-element-266f0592.js";import{o as e}from"./if-defined-21892bb5.js";import{p as S}from"./carbon-element-59fbbccb.js";import{I as t}from"./text-input-f5b277bd.js";import"./text-input-skeleton-2fc7e4c6.js";import"./form-item-325d0083.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const q={[`Small size (${t.SMALL})`]:t.SMALL,[`Medium size (${t.MEDIUM})`]:t.MEDIUM,[`Large size (${t.LARGE})`]:t.LARGE},B={disabled:!1,enableCounter:!1,helperText:"Helper text",hideLabel:!1,inline:!1,invalid:!1,invalidText:"Error message goes here",labelText:"Label text",maxCount:"100",placeholder:"Placeholder text",playgroundWidth:300,size:t.MEDIUM,readonly:!1,type:"text",warn:!1,warnText:"Warning message that is really long can wrap to more lines but should not be excessively long.",value:"",onInput:`${S}-select-selected`},F={disabled:{control:"boolean",description:"Disabled (disabled)"},enableCounter:{control:"boolean",description:"Enable counter (enable-counter)"},helperText:{control:"text",description:"Helper text (helper-text)"},hideLabel:{control:"boolean",description:"Hide label (hide-label)"},inline:{control:"boolean",description:"Inline (inline)"},invalid:{control:"boolean",description:"Invalid (invalid)"},invalidText:{control:"text",description:"Invalid text (invalid-text)"},labelText:{control:"text",description:"Label text (label)"},maxCount:{control:"text",description:"Max count (max-count)"},placeholder:{control:"text",description:"Placeholder (placeholder)"},playgroundWidth:{control:"number",description:"Playground width",options:{range:!0,min:300,max:800,step:50}},size:{control:"select",description:"Size (size)",options:q},readonly:{control:"boolean",description:"Read only (readonly)"},type:{control:"text",description:"Type (type)"},warn:{control:"boolean",description:"Warn (warn)"},warnText:{control:"text",description:"Warn text (warn-text)"},value:{control:"text",description:"Value of input (value)"},onInput:{action:`${S}-select-selected`,table:{disable:!0}}},l={render:()=>n`
    <cds-text-input label="Text input label" helper-text="Optional help text">
    </cds-text-input>
  `},r={render:()=>n`
    <cds-text-input
      value="This is read only, you can't type more."
      readonly="true"
      label="Text input label"
      helper-text="Optional help text">
    </cds-text-input>
  `},a={render:()=>n` <cds-text-input-skeleton></cds-text-input-skeleton> `},i={render:()=>n`
    <cds-text-input
      type="password"
      show-password-visibility-toggle
      label="Text input label"
      helper-text="Optional help text">
    </cds-text-input>
  `},o={render:()=>n`
    <sb-template-layers>
      <cds-text-input label="Text input label" helper-text="Optional help text">
      </cds-text-input>
    </sb-template-layers>
  `},s={args:B,argTypes:F,render:({disabled:z,enableCounter:O,helperText:M,hideLabel:C,inline:E,invalid:P,invalidText:W,labelText:_,maxCount:k,placeholder:R,playgroundWidth:A,readonly:U,size:H,type:V,value:j,warn:G,warnText:N,onInput:Z})=>n`
    <div style="width: ${A}px;">
      <cds-text-input
        ?disabled="${z}"
        ?enable-counter="${e(O)}"
        helper-text="${e(M)}"
        ?hide-label="${C}"
        ?inline="${E}"
        ?invalid="${P}"
        invalid-text="${e(W)}"
        label="${e(_)}"
        max-count="${e(k)}"
        placeholder="${e(R)}"
        ?readonly="${e(U)}"
        size="${e(H)}"
        type="${e(V)}"
        value="${e(j)}"
        ?warn="${e(G)}"
        warn-text="${e(N)}"
        @input="${Z}">
      </cds-text-input>
    </div>
  `},J={title:"Components/Text Input",actions:{argTypesRegex:"^on.*"}};var d,p,c;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <cds-text-input label="Text input label" helper-text="Optional help text">
    </cds-text-input>
  \`
}`,...(c=(p=l.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,x,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <cds-text-input
      value="This is read only, you can't type more."
      readonly="true"
      label="Text input label"
      helper-text="Optional help text">
    </cds-text-input>
  \`
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var m,h,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{\n  render: () => html` <cds-text-input-skeleton></cds-text-input-skeleton> `\n}",...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,$,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <cds-text-input
      type="password"
      show-password-visibility-toggle
      label="Text input label"
      helper-text="Optional help text">
    </cds-text-input>
  \`
}`,...(g=($=i.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var T,v,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <sb-template-layers>
      <cds-text-input label="Text input label" helper-text="Optional help text">
      </cds-text-input>
    </sb-template-layers>
  \`
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var D,I,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args,
  argTypes,
  render: ({
    disabled,
    enableCounter,
    helperText,
    hideLabel,
    inline,
    invalid,
    invalidText,
    labelText,
    maxCount,
    placeholder,
    playgroundWidth,
    readonly,
    size,
    type,
    value,
    warn,
    warnText,
    onInput
  }) => html\`
    <div style="width: \${playgroundWidth}px;">
      <cds-text-input
        ?disabled="\${disabled}"
        ?enable-counter="\${ifDefined(enableCounter)}"
        helper-text="\${ifDefined(helperText)}"
        ?hide-label="\${hideLabel}"
        ?inline="\${inline}"
        ?invalid="\${invalid}"
        invalid-text="\${ifDefined(invalidText)}"
        label="\${ifDefined(labelText)}"
        max-count="\${ifDefined(maxCount)}"
        placeholder="\${ifDefined(placeholder)}"
        ?readonly="\${ifDefined(readonly)}"
        size="\${ifDefined(size)}"
        type="\${ifDefined(type)}"
        value="\${ifDefined(value)}"
        ?warn="\${ifDefined(warn)}"
        warn-text="\${ifDefined(warnText)}"
        @input="\${onInput}">
      </cds-text-input>
    </div>
  \`
}`,...(L=(I=s.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const K=["Default","ReadOnly","Skeleton","TogglePasswordVisibility","WithLayer","Playground"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Playground:s,ReadOnly:r,Skeleton:a,TogglePasswordVisibility:i,WithLayer:o,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{le as T};
