import{x as l}from"./lit-element-266f0592.js";import{o as e}from"./if-defined-21892bb5.js";import"./textarea-skeleton-5d52d4ee.js";import"./form-item-325d0083.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const W={cols:0,disabled:!1,enableCounter:!0,helperText:"Textarea helper text",hideLabel:!1,invalid:!1,invalidText:"Invalid text",label:"Textarea label",maxCount:500,onInput:"input",placeholder:"",readonly:!1,rows:4,value:"",warn:!1,warnText:"This is a warning message."},j={cols:{control:"number",description:"Number of columns (cols)"},disabled:{control:"boolean",description:"Disabled (disabled)"},enableCounter:{control:"boolean",description:"Enable character counter (enable-counter)"},helperText:{control:"text",description:"Helper text (helper-text)"},hideLabel:{control:"boolean",description:"Hide label (hide-label)"},invalid:{control:"boolean",description:"Invalid (invalid)"},invalidText:{control:"text",description:"Invalid text (invalid-text)"},label:{control:"text",description:"Label (label)"},maxCount:{control:"number",description:"Max character count (max-count)"},onInput:{action:"input",table:{disable:!0}},placeholder:{control:"text",description:"Placeholder text (placeholder)"},readonly:{control:"boolean",description:"Read only (readonly)"},rows:{control:"number",description:"Number of rows (rows)"},value:{control:"text",description:"Value (value)"},warn:{control:"boolean",description:"Warn (warn)"},warnText:{control:"text",description:"Warn text (warn-text)"}},t={render:()=>l`
    <cds-form-item>
      <cds-textarea label="Textarea label" helper-text="Optional helper text">
      </cds-textarea>
    </cds-form-item>
  `},a={parameters:{percy:{skip:!0}},render:()=>l` <cds-textarea-skeleton></cds-textarea-skeleton> `},r={render:()=>l`
    <sb-template-layers>
      <cds-textarea label="Text Area label" helper-text="Optional helper text">
      </cds-textarea>
    </sb-template-layers>
  `},n={args:W,argTypes:j,render:({cols:v,disabled:T,enableCounter:w,helperText:y,hideLabel:g,invalid:D,invalidText:C,label:k,maxCount:I,onInput:L,placeholder:O,readonly:_,rows:S,value:o,warn:A,warnText:P})=>l`
    <cds-form-item>
      <cds-textarea
        ?enable-counter="${w}"
        helper-text="${e(y)}"
        ?hide-label="${g}"
        ?invalid="${D}"
        invalid-text="${e(C)}"
        label="${e(k)}"
        ?readonly="${_}"
        value="${e(o)}"
        ?warn="${A}"
        warn-text="${e(P)}"
        ?disabled="${T}"
        max-count="${e(I)}"
        placeholder="${e(O)}"
        @input="${L}"
        rows="${e(S)}"
        cols="${e(v)}">
        ${o}
      </cds-textarea>
    </cds-form-item>
  `},E={title:"Components/Text Area"};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <cds-form-item>
      <cds-textarea label="Textarea label" helper-text="Optional helper text">
      </cds-textarea>
    </cds-form-item>
  \`
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    percy: {
      skip: true
    }
  },
  render: () => html\` <cds-textarea-skeleton></cds-textarea-skeleton> \`
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var m,u,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <sb-template-layers>
      <cds-textarea label="Text Area label" helper-text="Optional helper text">
      </cds-textarea>
    </sb-template-layers>
  \`
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,h,$;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args,
  argTypes,
  render: ({
    cols,
    disabled,
    enableCounter,
    helperText,
    hideLabel,
    invalid,
    invalidText,
    label,
    maxCount,
    onInput,
    placeholder,
    readonly,
    rows,
    value,
    warn,
    warnText
  }) => html\`
    <cds-form-item>
      <cds-textarea
        ?enable-counter="\${enableCounter}"
        helper-text="\${ifDefined(helperText)}"
        ?hide-label="\${hideLabel}"
        ?invalid="\${invalid}"
        invalid-text="\${ifDefined(invalidText)}"
        label="\${ifDefined(label)}"
        ?readonly="\${readonly}"
        value="\${ifDefined(value)}"
        ?warn="\${warn}"
        warn-text="\${ifDefined(warnText)}"
        ?disabled="\${disabled}"
        max-count="\${ifDefined(maxCount)}"
        placeholder="\${ifDefined(placeholder)}"
        @input="\${onInput}"
        rows="\${ifDefined(rows)}"
        cols="\${ifDefined(cols)}">
        \${value}
      </cds-textarea>
    </cds-form-item>
  \`
}`,...($=(h=n.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};const H=["Default","skeleton","WithLayer","Playground"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Playground:n,WithLayer:r,__namedExportsOrder:H,default:E,skeleton:a},Symbol.toStringTag,{value:"Module"}));export{V as T};
