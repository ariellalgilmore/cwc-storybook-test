import{x as n}from"./lit-element-266f0592.js";import{o as t}from"./if-defined-21892bb5.js";import{D as u,a as o,b}from"./dropdown-item-7b096599.js";import"./dropdown-skeleton-47db96c2.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const F={Top:u.TOP,Bottom:u.BOTTOM},H={[`Small size (${o.SMALL})`]:o.SMALL,[`Medium size (${o.MEDIUM})`]:o.MEDIUM,[`Large size (${o.LARGE})`]:o.LARGE},J={Default:null,[`Inline (${b.INLINE})`]:b.INLINE},p=[{value:"option-0",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{value:"option-1",text:"Option 1"},{value:"option-2",text:"Option 2"},{value:"option-3",text:"Option 3 - a disabled item",disabled:!0},{value:"option-4",text:"Option 4"},{value:"option-5",text:"Option 5"}],K={direction:u.BOTTOM,disabled:!1,hideLabel:!1,helperText:"This is some helper text",invalid:!1,invalidText:"invalid selection",label:"This is an example label",open:!1,readOnly:!1,size:null,titleText:"This is an example title",type:null,value:"",warn:!1,warnText:"please notice the warning"},Q={ariaLabel:{control:"text",description:"aria-label"},disabled:{control:"boolean",description:"Specify if the dropdown should be disabled, or not."},direction:{control:"select",options:F,description:"Dropdown direction."},hideLabel:{control:"boolean",description:"Specify if the title text should be hidden, or not."},helperText:{control:"text",description:"The helper text for the dropdown."},invalid:{control:"boolean",description:"Specify if the dropdown should display an invalid icon, or not."},invalidText:{control:"text",description:"Message which is displayed if the value is invalid."},label:{control:"text",description:"The default content of the trigger button."},open:{control:"boolean",description:"Specify if the dropdown should be open, or not."},readOnly:{control:"boolean",description:"Specify if the dropdown should be read only, or not."},size:{control:"select",options:H,description:"Dropdown size."},titleText:{control:"text",description:"Text that will be read by a screen reader when visiting this control."},type:{control:"select",options:J,description:"Dropdown size."},value:{control:"text",description:"The value of the selected item."},warn:{control:"boolean",description:"Specify whether the control is currently in warning state."},warnText:{control:"text",description:"Text that is displayed when the control is in warning state."}},d={render:()=>n`
    <cds-dropdown
      helper-text="This is some helper text"
      title-text="Dropdown label"
      label="Dropdown menu options">
      ${p.map(e=>n`
          <cds-dropdown-item ?disabled=${e.disabled} value="${e.value}"
            >${e.text}</cds-dropdown-item
          >
        `)}
    </cds-dropdown>
  `},i={render:()=>n`
    <cds-dropdown
      type="inline"
      title-text="Inline dropdown label"
      label="Dropdown menu options">
      ${p.map(e=>n`
          <cds-dropdown-item ?disabled=${e.disabled} value="${e.value}"
            >${e.text}</cds-dropdown-item
          >
        `)}
    </cds-dropdown>
  `},l={render:()=>n`
    <sb-template-layers>
      <div style="width:400px">
        <cds-dropdown
          type="inline"
          title-text="Inline dropdown label"
          label="Dropdown menu options">
          ${p.map(e=>n`
              <cds-dropdown-item
                ?disabled=${e.disabled}
                value="${e.value}"
                >${e.text}</cds-dropdown-item
              >
            `)}
        </cds-dropdown>
      </div>
    </sb-template-layers>
  `},r={render:()=>n`
    <sb-template-layers>
      <div style="width:400px">
        <cds-dropdown
          title-text="Dropdown label"
          helper-text="This is some helper text"
          label="Dropdown menu options">
          ${p.map(e=>n`
              <cds-dropdown-item
                ?disabled=${e.disabled}
                value="${e.value}"
                >${e.text}</cds-dropdown-item
              >
            `)}
        </cds-dropdown>
      </div>
    </sb-template-layers>
  `},a={argTypes:Q,args:K,render:({ariaLabel:e,open:c,direction:m,disabled:N,helperText:P,hideLabel:W,invalid:A,invalidText:R,titleText:B,readOnly:C,size:j,type:G,value:U,label:Y,warn:Z,warnText:q})=>n`
      <cds-dropdown
        aria-label=${t(e)}
        ?open=${c}
        ?disabled="${N}"
        ?hide-label=${W}
        helper-text=${t(P)}
        ?invalid=${A}
        ?read-only=${C}
        invalid-text=${R}
        direction="${m}"
        title-text=${t(B)}
        size="${t(j)}"
        type="${t(G)}"
        value=${t(U)}
        label=${t(Y)}
        ?warn=${Z}
        warn-text=${q}>
        ${p.map(w=>n`
            <cds-dropdown-item ?disabled=${w.disabled} value="${w.value}"
              >${w.text}</cds-dropdown-item
            >
          `)}
      </cds-dropdown>
    `},s={parameters:{percy:{skip:!0}},render:()=>n` <cds-dropdown-skeleton></cds-dropdown-skeleton> `},V={title:"Components/Dropdown",decorators:[(e,{name:c})=>{const m=c.toLowerCase().includes("layer")?"":"width:400px";return n` <div style="${m}">${e()}</div> `}]};var h,x,$;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <cds-dropdown
      helper-text="This is some helper text"
      title-text="Dropdown label"
      label="Dropdown menu options">
      \${items.map(elem => html\`
          <cds-dropdown-item ?disabled=\${elem.disabled} value="\${elem.value}"
            >\${elem.text}</cds-dropdown-item
          >
        \`)}
    </cds-dropdown>
  \`
}`,...($=(x=d.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var v,y,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <cds-dropdown
      type="inline"
      title-text="Inline dropdown label"
      label="Dropdown menu options">
      \${items.map(elem => html\`
          <cds-dropdown-item ?disabled=\${elem.disabled} value="\${elem.value}"
            >\${elem.text}</cds-dropdown-item
          >
        \`)}
    </cds-dropdown>
  \`
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var T,D,g;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <sb-template-layers>
      <div style="width:400px">
        <cds-dropdown
          type="inline"
          title-text="Inline dropdown label"
          label="Dropdown menu options">
          \${items.map(elem => html\`
              <cds-dropdown-item
                ?disabled=\${elem.disabled}
                value="\${elem.value}"
                >\${elem.text}</cds-dropdown-item
              >
            \`)}
        </cds-dropdown>
      </div>
    </sb-template-layers>
  \`
}`,...(g=(D=l.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var O,L,S;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <sb-template-layers>
      <div style="width:400px">
        <cds-dropdown
          title-text="Dropdown label"
          helper-text="This is some helper text"
          label="Dropdown menu options">
          \${items.map(elem => html\`
              <cds-dropdown-item
                ?disabled=\${elem.disabled}
                value="\${elem.value}"
                >\${elem.text}</cds-dropdown-item
              >
            \`)}
        </cds-dropdown>
      </div>
    </sb-template-layers>
  \`
}`,...(S=(L=r.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var I,z,M;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    ariaLabel,
    open,
    direction,
    disabled,
    helperText,
    hideLabel,
    invalid,
    invalidText,
    titleText,
    readOnly,
    size,
    type,
    value,
    label,
    warn,
    warnText
  }) => html\`
      <cds-dropdown
        aria-label=\${ifDefined(ariaLabel)}
        ?open=\${open}
        ?disabled="\${disabled}"
        ?hide-label=\${hideLabel}
        helper-text=\${ifDefined(helperText)}
        ?invalid=\${invalid}
        ?read-only=\${readOnly}
        invalid-text=\${invalidText}
        direction="\${direction}"
        title-text=\${ifDefined(titleText)}
        size="\${ifDefined(size)}"
        type="\${ifDefined(type)}"
        value=\${ifDefined(value)}
        label=\${ifDefined(label)}
        ?warn=\${warn}
        warn-text=\${warnText}>
        \${items.map(elem => html\`
            <cds-dropdown-item ?disabled=\${elem.disabled} value="\${elem.value}"
              >\${elem.text}</cds-dropdown-item
            >
          \`)}
      </cds-dropdown>
    \`
}`,...(M=(z=a.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var E,_,k;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    percy: {
      skip: true
    }
  },
  render: () => html\` <cds-dropdown-skeleton></cds-dropdown-skeleton> \`
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const X=["Default","Inline","InlineWithLayer","WithLayer","Playground","Skeleton"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Inline:i,InlineWithLayer:l,Playground:a,Skeleton:s,WithLayer:r,__namedExportsOrder:X,default:V},Symbol.toStringTag,{value:"Module"}));export{de as D};
