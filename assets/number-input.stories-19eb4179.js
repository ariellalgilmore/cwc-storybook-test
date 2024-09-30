import{x as o}from"./lit-element-266f0592.js";import{o as e}from"./if-defined-21892bb5.js";import{I as n}from"./text-input-f5b277bd.js";import"./number-input-skeleton-f5616efb.js";import"./form-item-325d0083.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const N={[`Small size (${n.SMALL})`]:n.SMALL,[`Medium size (${n.MEDIUM})`]:n.MEDIUM,[`Large size (${n.LARGE})`]:n.LARGE},P={allowEmpty:!1,decrementButtonDescription:"decrease number input",incrementButtonDescription:"increase number input",disabled:!1,helperText:"Optional helper text",hideLabel:!1,hideSteppers:!1,invalid:!1,invalidText:"Number is not valid",label:"number-input label",readOnly:!1,value:50,warn:!1,warnText:"Warning text",min:0,max:100,step:1,size:n.MEDIUM},U={allowEmpty:{control:"boolean",description:"<code>true</code> to allow empty string."},decrementButtonDescription:{control:"text",description:"Decrement button assistive description (decrement-button-assistive-text)"},incrementButtonDescription:{control:"text",description:"Increment button assistive description (increment-button-assistive-text)"},disabled:{control:"boolean",description:"Specify if the control should be disabled, or not."},helperText:{control:"text",description:"Provide text that is used alongside the control label for additional help."},hideLabel:{control:"boolean",description:"Specify whether you want the underlying label to be visually hidden."},hideSteppers:{control:"boolean",description:"Specify whether you want the steppers to be hidden."},invalid:{control:"boolean",description:"Specify if the currently value is invalid."},invalidText:{control:"text",description:"Message which is displayed if the value is invalid."},label:{control:"text",description:"Generic <code>label</code> that will be used as the textual representation of what this field is for."},readOnly:{control:"boolean",description:"Specify if the component should be read-only."},value:{control:"number",description:"Specify the value of the input."},warn:{control:"boolean",description:"Specify whether the control is currently in warning state."},warnText:{control:"text",description:"Provide the text that is displayed when the control is in warning state."},min:{control:"number",description:"The minimum value."},max:{control:"number",description:"The maximum value."},step:{control:"number",description:"Specify how much the values should increase/decrease upon clicking on up/down button."},size:{control:"select",description:"Specify the size of the Number Input.",options:N},onInput:{action:"input"}},t={render:()=>o`
      <cds-form-item>
        <cds-number-input
          value="50"
          min="0"
          max="100"
          size="${e(n.MEDIUM)}"
          step="1"
          label="number-input label"
          helper-text="Optional helper text">
        </cds-number-input>
      </cds-form-item>
    `},i={parameters:{percy:{skip:!0}},render:()=>o` <cds-number-input-skeleton></cds-number-input-skeleton> `},r={args:P,argTypes:U,render:h=>{const{allowEmpty:f,decrementButtonDescription:x,incrementButtonDescription:v,disabled:$,helperText:y,hideLabel:w,hideSteppers:D,invalid:S,invalidText:g,label:T,readOnly:I,warn:z,warnText:E,value:M,min:L,max:O,size:B,step:k,onInput:_}=h??{};return o`
      <cds-form-item>
        <cds-number-input
          ?allow-empty="${f}"
          decrement-button-assistive-text="${e(x)}"
          increment-button-assistive-text="${e(v)}"
          helper-text="${e(y)}"
          ?hide-steppers="${D}"
          ?hide-label="${w}"
          ?invalid="${S}"
          invalid-text="${e(g)}"
          label="${e(T)}"
          ?readonly="${I}"
          value="${e(M)}"
          ?warn="${z}"
          warn-text="${e(E)}"
          ?disabled="${$}"
          min="${e(L)}"
          max="${e(O)}"
          size="${e(B)}"
          step="${e(k)}"
          @input="${_}">
        </cds-number-input>
      </cds-form-item>
    `}},A={title:"Components/Number Input"};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-form-item>
        <cds-number-input
          value="50"
          min="0"
          max="100"
          size="\${ifDefined(INPUT_SIZE.MEDIUM)}"
          step="1"
          label="number-input label"
          helper-text="Optional helper text">
        </cds-number-input>
      </cds-form-item>
    \`;
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,p,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    percy: {
      skip: true
    }
  },
  render: () => html\` <cds-number-input-skeleton></cds-number-input-skeleton> \`
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      allowEmpty,
      decrementButtonDescription,
      incrementButtonDescription,
      disabled,
      helperText,
      hideLabel,
      hideSteppers,
      invalid,
      invalidText,
      label,
      readOnly,
      warn,
      warnText,
      value,
      min,
      max,
      size,
      step,
      onInput
    } = args ?? {};
    return html\`
      <cds-form-item>
        <cds-number-input
          ?allow-empty="\${allowEmpty}"
          decrement-button-assistive-text="\${ifDefined(decrementButtonDescription)}"
          increment-button-assistive-text="\${ifDefined(incrementButtonDescription)}"
          helper-text="\${ifDefined(helperText)}"
          ?hide-steppers="\${hideSteppers}"
          ?hide-label="\${hideLabel}"
          ?invalid="\${invalid}"
          invalid-text="\${ifDefined(invalidText)}"
          label="\${ifDefined(label)}"
          ?readonly="\${readOnly}"
          value="\${ifDefined(value)}"
          ?warn="\${warn}"
          warn-text="\${ifDefined(warnText)}"
          ?disabled="\${disabled}"
          min="\${ifDefined(min)}"
          max="\${ifDefined(max)}"
          size="\${ifDefined(size)}"
          step="\${ifDefined(step)}"
          @input="\${onInput}">
        </cds-number-input>
      </cds-form-item>
    \`;
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const G=["Default","Skeleton","Playground"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Playground:r,Skeleton:i,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{q as N};
