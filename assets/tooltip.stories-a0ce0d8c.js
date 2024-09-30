import{x as s}from"./lit-element-266f0592.js";import"./tooltip-content-1105f219.js";import{P as t}from"./defs-4d9ca86b.js";import{s as D}from"./tooltip-story-bea37db3.js";import{s as i}from"./16-5513bc0c.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const w={top:t.TOP,["top-left"]:t.TOP_LEFT,["top-right"]:t.TOP_RIGHT,bottom:t.BOTTOM,["bottom-left"]:t.BOTTOM_LEFT,["bottom-right"]:t.BOTTOM_RIGHT,left:t.LEFT,["left-bottom"]:t.LEFT_BOTTOM,["left-top"]:t.LEFT_TOP,right:t.RIGHT,["right-bottom"]:t.RIGHT_BOTTOM,["right-top"]:t.RIGHT_TOP},A={align:t.BOTTOM,closeOnActivation:!1,defaultOpen:!0,enterDelayMs:100,label:"Custom label",leaveDelayMs:300},P={align:{control:"select",description:"Specify how the trigger should align with the tooltip",options:w},closeOnActivation:{control:"boolean",description:"Determines wether the tooltip should close when inner content is activated (click, Enter or Space)"},defaultOpen:{control:"boolean",description:"Specify whether the tooltip should be open when it first renders"},enterDelayMs:{control:"number",description:"Specify the duration in milliseconds to delay before displaying the tooltip"},label:{control:"text",description:"Provide the label to be rendered inside of the Tooltip."},leaveDelayMs:{control:"number",description:"Specify the duration in milliseconds to delay before hiding the tooltip"}},o={render:()=>s`
    <cds-tooltip align="bottom">
      <button
        class="sb-tooltip-trigger"
        role="button"
        aria-labelledby="content">
        ${i()}
      </button>
      <cds-tooltip-content id="content">
        Occassionally, services are updated in a specified time window to ensure
        no down time for customers.
      </cds-tooltip-content>
    </cds-tooltip>
  `},e={render:()=>s`
    <cds-tooltip align="bottom-left">
      <button
        class="sb-tooltip-trigger"
        role="button"
        aria-labelledby="content">
        ${i()}
      </button>
      <cds-tooltip-content id="content">
        Tooltip alignment
      </cds-tooltip-content>
    </cds-tooltip>
  `},n={render:()=>s`
    <cds-tooltip enter-delay-ms=${0} leave-delay-ms=${300}>
      <button
        class="sb-tooltip-trigger"
        role="button"
        aria-labelledby="content">
        ${i()}
      </button>
      <cds-tooltip-content id="content"> Label one </cds-tooltip-content>
    </cds-tooltip>
  `},l={argTypes:P,args:A,render:({align:r,closeOnActivation:h,defaultOpen:$,enterDelayMs:v,label:M,leaveDelayMs:_})=>s`
    <cds-tooltip
      ?defaultOpen=${$}
      align=${r}
      enter-delay-ms=${v}
      leave-delay-ms=${_}
      ?closeOnActivation=${h}>
      <button
        class="sb-tooltip-trigger"
        role="button"
        aria-labelledby="content">
        ${i()}
      </button>
      <cds-tooltip-content id="content"> ${M} </cds-tooltip-content>
    </cds-tooltip>
  `},I={title:"Components/Tooltip",decorators:[r=>s`<div class="sb-tooltip-story">
      <style>
        ${D}</style
      >${r()}
    </div>`]};var a,c,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <cds-tooltip align="bottom">
      <button
        class="sb-tooltip-trigger"
        role="button"
        aria-labelledby="content">
        \${Information16()}
      </button>
      <cds-tooltip-content id="content">
        Occassionally, services are updated in a specified time window to ensure
        no down time for customers.
      </cds-tooltip-content>
    </cds-tooltip>
  \`
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,b,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <cds-tooltip align="bottom-left">
      <button
        class="sb-tooltip-trigger"
        role="button"
        aria-labelledby="content">
        \${Information16()}
      </button>
      <cds-tooltip-content id="content">
        Tooltip alignment
      </cds-tooltip-content>
    </cds-tooltip>
  \`
}`,...(m=(b=e.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var u,g,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <cds-tooltip enter-delay-ms=\${0} leave-delay-ms=\${300}>
      <button
        class="sb-tooltip-trigger"
        role="button"
        aria-labelledby="content">
        \${Information16()}
      </button>
      <cds-tooltip-content id="content"> Label one </cds-tooltip-content>
    </cds-tooltip>
  \`
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,T,O;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    align,
    closeOnActivation,
    defaultOpen,
    enterDelayMs,
    label,
    leaveDelayMs
  }) => html\`
    <cds-tooltip
      ?defaultOpen=\${defaultOpen}
      align=\${align}
      enter-delay-ms=\${enterDelayMs}
      leave-delay-ms=\${leaveDelayMs}
      ?closeOnActivation=\${closeOnActivation}>
      <button
        class="sb-tooltip-trigger"
        role="button"
        aria-labelledby="content">
        \${Information16()}
      </button>
      <cds-tooltip-content id="content"> \${label} </cds-tooltip-content>
    </cds-tooltip>
  \`
}`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const S=["Default","Alignment","Duration","Playground"],F=Object.freeze(Object.defineProperty({__proto__:null,Alignment:e,Default:o,Duration:n,Playground:l,__namedExportsOrder:S,default:I},Symbol.toStringTag,{value:"Module"}));export{F as T};
