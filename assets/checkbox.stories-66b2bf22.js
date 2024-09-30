import{x as t}from"./lit-element-266f0592.js";import{p as L}from"./carbon-element-59fbbccb.js";import"./checkbox-4cbf61d5.js";import"./checkbox-skeleton-f3c1a5c2.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const e="Checkbox label",P={disabled:!1,helperText:"Helper text goes here",invalid:!1,invalidText:"Invalid message goes here",legendText:"Group label",readonly:!1,warn:!1,warnText:"Warn message goes here"},_={disabled:{control:"boolean",description:"Specify whether the checkbox should be disabled."},helperText:{control:"textNullable",description:"Provide text for the form group for additional help."},invalid:{control:"boolean",description:"Specify whether the form group is currently invalid."},invalidText:{control:"textNullable",description:"Provide the text that is displayed when the form group is in an invalid state."},legendText:{control:"textNullable",description:"Provide the text to be rendered inside of the fieldset."},readonly:{control:"boolean",description:"Specify whether the checkbox group is read-only."},warn:{control:"boolean",description:"Specify whether the form group is currently in warning state."},warnText:{control:"textNullable",description:"Provide the text that is displayed when the form group is in warning state."}},c={render:()=>t`
    <cds-checkbox-group legend-text="Group label">
      <cds-checkbox>${e}</cds-checkbox>
      <cds-checkbox>${e}</cds-checkbox>
    </cds-checkbox-group>
  `},o={render:()=>t`
    <fieldset class="${L}--fieldset">
      <cds-checkbox-skeleton>${e}</cds-checkbox-skeleton>
    </fieldset>
  `},r={render:()=>t`
    <cds-checkbox helper-text="Helper text goes here"
      >${e}</cds-checkbox
    >
    <br /><br />
    <cds-checkbox invalid invalid-text="Invalid test goes here"
      >${e}</cds-checkbox
    >
    <br /><br />
    <cds-checkbox warn warn-text="Warning test goes here"
      >${e}</cds-checkbox
    >
    <br /><br />
    <cds-checkbox readonly>${e}</cds-checkbox>
  `},n={args:P,argTypes:_,render:({disabled:$,readonly:f,onChange:s,helperText:v,invalid:w,invalidText:y,legendText:T,warn:S,warnText:C})=>t`
      <cds-checkbox-group
        helper-text="${v}"
        ?disabled="${$}"
        ?invalid="${w}"
        invalid-text="${y}"
        legend-text="${T}"
        ?readonly="${f}"
        ?warn="${S}"
        warn-text="${C}">
        <cds-checkbox checked @cds-checkbox-changed="${s}"
          >Checkbox label</cds-checkbox
        >
        <cds-checkbox @cds-checkbox-changed="${s}"
          >Checkbox label</cds-checkbox
        >
        <cds-checkbox disabled @cds-checkbox-changed="${s}"
          >Checkbox label</cds-checkbox
        >
      </cds-checkbox-group>
    `},N={title:"Components/Checkbox",parameters:{actions:{argTypesRegex:"^on.*"}}};var d,a,l;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <cds-checkbox-group legend-text="Group label">
      <cds-checkbox>\${checkboxLabel}</cds-checkbox>
      <cds-checkbox>\${checkboxLabel}</cds-checkbox>
    </cds-checkbox-group>
  \`
}`,...(l=(a=c.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var h,b,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <fieldset class="\${prefix}--fieldset">
      <cds-checkbox-skeleton>\${checkboxLabel}</cds-checkbox-skeleton>
    </fieldset>
  \`
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var i,k,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <cds-checkbox helper-text="Helper text goes here"
      >\${checkboxLabel}</cds-checkbox
    >
    <br /><br />
    <cds-checkbox invalid invalid-text="Invalid test goes here"
      >\${checkboxLabel}</cds-checkbox
    >
    <br /><br />
    <cds-checkbox warn warn-text="Warning test goes here"
      >\${checkboxLabel}</cds-checkbox
    >
    <br /><br />
    <cds-checkbox readonly>\${checkboxLabel}</cds-checkbox>
  \`
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var g,u,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    disabled,
    readonly,
    onChange,
    helperText,
    invalid,
    invalidText,
    legendText,
    warn,
    warnText
  }) => html\`
      <cds-checkbox-group
        helper-text="\${helperText}"
        ?disabled="\${disabled}"
        ?invalid="\${invalid}"
        invalid-text="\${invalidText}"
        legend-text="\${legendText}"
        ?readonly="\${readonly}"
        ?warn="\${warn}"
        warn-text="\${warnText}">
        <cds-checkbox checked @cds-checkbox-changed="\${onChange}"
          >Checkbox label</cds-checkbox
        >
        <cds-checkbox @cds-checkbox-changed="\${onChange}"
          >Checkbox label</cds-checkbox
        >
        <cds-checkbox disabled @cds-checkbox-changed="\${onChange}"
          >Checkbox label</cds-checkbox
        >
      </cds-checkbox-group>
    \`
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const G=["Default","Skeleton","Single","Playground"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Playground:n,Single:r,Skeleton:o,__namedExportsOrder:G,default:N},Symbol.toStringTag,{value:"Module"}));export{j as C};
