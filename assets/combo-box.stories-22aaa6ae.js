import{x as t}from"./lit-element-266f0592.js";import{o}from"./if-defined-21892bb5.js";import"./combo-box-item-62122f9c.js";import{D as c,a}from"./dropdown-item-7b096599.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const b=[{value:"option-0",text:"An example option that is really long to show what should be done to handle long text"},{value:"option-1",text:"Option 1"},{value:"option-2",text:"Option 2"},{value:"option-3",text:"Option 3 - a disabled item",disabled:!0},{value:"option-4",text:"Option 4"},{value:"option-5",text:"Option 5"}],A={Top:c.TOP,Bottom:c.BOTTOM},M={[`Small size (${a.SMALL})`]:a.SMALL,"Regular size":null,[`Large size (${a.LARGE})`]:a.LARGE},P={direction:c.BOTTOM,disabled:!1,hideLabel:!1,helperText:"This is some helper text",invalid:!1,invalidText:"invalid selection",label:"This is an example label",readOnly:!1,size:null,titleText:"This is an example title",value:"",warn:!1,warnText:"please notice the warning"},R={disabled:{control:"boolean",description:"Specify if the dropdown should be disabled, or not."},direction:{control:"select",options:A,description:"Dropdown direction"},hideLabel:{control:"boolean",description:"Specify if the title text should be hidden, or not."},helperText:{control:"text",description:"The helper text for the dropdown."},invalid:{control:"boolean",description:"Specify if the dropdown should display an invalid icon, or not."},invalidText:{control:"text",description:"Message which is displayed if the value is invalid."},label:{control:"text",description:"The default content of the trigger button."},readOnly:{control:"boolean",description:"Specify if the dropdown should be read only, or not."},size:{control:"select",options:M,description:"Dropdown size."},titleText:{control:"text",description:"Text that will be read by a screen reader when visiting this control."},value:{control:"text",description:"The value of the selected item."},warn:{control:"boolean",description:"Specify whether the control is currently in warning state."},warnText:{control:"text",description:"Text that is displayed when the control is in warning state."}},n={render:()=>t`
    <cds-combo-box
      helper-text="Combobox helper text"
      title-text="ComboBox title">
      ${b.map(e=>t`
          <cds-combo-box-item ?disabled=${e.disabled} value="${e.value}"
            >${e.text}</cds-combo-box-item
          >
        `)}
    </cds-combo-box>
  `},i={render:()=>t`
    <sb-template-layers>
      <div style="width:300px">
        <cds-combo-box
          title-text="ComboBox label"
          helper-text="Combobox helper text"
          label="Dropdown menu options">
          ${b.map(e=>t`
              <cds-combo-box-item
                ?disabled=${e.disabled}
                value="${e.value}"
                >${e.text}</cds-combo-box-item
              >
            `)}
        </cds-combo-box>
      </div>
    </sb-template-layers>
  `},l={argTypes:R,args:P,render:({disabled:e,helperText:r,invalid:d,titleText:w,hideLabel:T,direction:g,readOnly:O,warn:D,warnText:S,size:C,label:L,type:z,invalidText:B,value:_})=>t`
    <cds-combo-box
      ?disabled="${e}"
      ?hide-label=${T}
      helper-text=${o(r)}
      ?invalid=${d}
      invalid-text=${B}
      direction="${g}"
      ?read-only=${O}
      title-text=${o(w)}
      size="${o(C)}"
      type="${o(z)}"
      value=${o(_)}
      label=${o(L)}
      ?warn=${D}
      warn-text=${S}>
      ${b.map(s=>t`
          <cds-combo-box-item ?disabled=${s.disabled} value="${s.value}"
            >${s.text}</cds-combo-box-item
          >
        `)}
    </cds-combo-box>
  `},E={title:"Components/Combo box",decorators:[(e,{name:r})=>{const d=r.toLowerCase().includes("layer")?"":"width:300px";return t` <div style="${d}">${e()}</div> `}]};var p,m,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <cds-combo-box
      helper-text="Combobox helper text"
      title-text="ComboBox title">
      \${items.map(elem => html\`
          <cds-combo-box-item ?disabled=\${elem.disabled} value="\${elem.value}"
            >\${elem.text}</cds-combo-box-item
          >
        \`)}
    </cds-combo-box>
  \`
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,u,$;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <sb-template-layers>
      <div style="width:300px">
        <cds-combo-box
          title-text="ComboBox label"
          helper-text="Combobox helper text"
          label="Dropdown menu options">
          \${items.map(elem => html\`
              <cds-combo-box-item
                ?disabled=\${elem.disabled}
                value="\${elem.value}"
                >\${elem.text}</cds-combo-box-item
              >
            \`)}
        </cds-combo-box>
      </div>
    </sb-template-layers>
  \`
}`,...($=(u=i.parameters)==null?void 0:u.docs)==null?void 0:$.source}}};var v,f,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    disabled,
    helperText,
    invalid,
    titleText,
    hideLabel,
    direction,
    readOnly,
    warn,
    warnText,
    size,
    label,
    type,
    invalidText,
    value
  }) => html\`
    <cds-combo-box
      ?disabled="\${disabled}"
      ?hide-label=\${hideLabel}
      helper-text=\${ifDefined(helperText)}
      ?invalid=\${invalid}
      invalid-text=\${invalidText}
      direction="\${direction}"
      ?read-only=\${readOnly}
      title-text=\${ifDefined(titleText)}
      size="\${ifDefined(size)}"
      type="\${ifDefined(type)}"
      value=\${ifDefined(value)}
      label=\${ifDefined(label)}
      ?warn=\${warn}
      warn-text=\${warnText}>
      \${items.map(elem => html\`
          <cds-combo-box-item ?disabled=\${elem.disabled} value="\${elem.value}"
            >\${elem.text}</cds-combo-box-item
          >
        \`)}
    </cds-combo-box>
  \`
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const W=["Default","WithLayer","Playground"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Playground:l,WithLayer:i,__namedExportsOrder:W,default:E},Symbol.toStringTag,{value:"Module"}));export{Z as C};
