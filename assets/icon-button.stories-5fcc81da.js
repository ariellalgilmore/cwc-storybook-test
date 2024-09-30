import{b as D,x as s}from"./lit-element-266f0592.js";import"./icon-button-e8231e03.js";import{B as t}from"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import{s as M}from"./spread-61d77317.js";/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=(e=>(e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e))(r||{}),o=(e=>(e.TOP="top",e.TOP_LEFT="top-left",e.TOP_RIGHT="top-right",e.BOTTOM="bottom",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_RIGHT="bottom-right",e.LEFT="left",e.RIGHT="right",e))(o||{});const b=({children:e,...l}={})=>D`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${M(l)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${e}<path d="M2 26H30V28H2zM25.4 9c.8-.8.8-2 0-2.8 0 0 0 0 0 0l-3.6-3.6c-.8-.8-2-.8-2.8 0 0 0 0 0 0 0l-15 15V24h6.4L25.4 9zM20.4 4L24 7.6l-3 3L17.4 7 20.4 4zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"></path></svg>`;/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const w={[`Primary button (${t.PRIMARY})`]:t.PRIMARY,[`Secondary button (${t.SECONDARY})`]:t.SECONDARY,[`Tertiary button (${t.TERTIARY})`]:t.TERTIARY,[`Danger button (${t.DANGER})`]:t.DANGER,[`Danger tertiary button (${t.DANGER_TERTIARY})`]:t.DANGER_TERTIARY,[`Danger ghost button (${t.DANGER_GHOST})`]:t.DANGER_GHOST,[`Ghost button (${t.GHOST})`]:t.GHOST},E={top:o.TOP,["top-left"]:o.TOP_LEFT,["top-right"]:o.TOP_RIGHT,bottom:o.BOTTOM,["bottom-left"]:o.BOTTOM_LEFT,["bottom-right"]:o.BOTTOM_RIGHT,left:o.LEFT,right:o.RIGHT},A={align:o.BOTTOM,defaultOpen:!0,disabled:!1,isSelected:!1,kind:t.PRIMARY,label:"Custom label",size:r.MEDIUM},T={align:{control:"select",description:"Specify how the trigger should align with the tooltip.",options:E},closeOnActivation:{control:"boolean",description:"Determines whether the tooltip should close when inner content is activated (click, Enter or Space)."},defaultOpen:{control:"boolean",description:"Specify whether the tooltip should be open when it first renders."},disabled:{control:"boolean",description:"Specify whether the Button should be disabled, or not."},enterDelayMs:{control:"number",description:"Specify the duration in milliseconds to delay before displaying the tooltip."},isSelected:{control:"boolean",description:"Specify whether the Icon Button is currently selected."},kind:{control:"select",description:"Specify the type of button to be used as the base for the Icon Button.",options:w},label:{control:"text",description:"Provide the label to be rendered inside of the Tooltip. The label will use <code>aria-labelledby</code> and will fully describe the child node that is provided. This means that if you have text in the child node it will not be announced to the screen reader."},leaveDelayMs:{control:"number",description:"Specify the duration in milliseconds to delay before hiding the tooltip."},size:{control:"select",description:"Specify the size of the Button. Defaults to <code>md</code>.",options:r}},n={render:()=>s`
      <cds-icon-button>
        ${b({slot:"icon"})}
        <span slot="tooltip-content">label</span>
      </cds-icon-button>
    `},i={args:A,argTypes:T,render:({align:e,closeOnActivation:l,defaultOpen:m,disabled:f,enterDelayMs:g,isSelected:y,kind:$,label:R,leaveDelayMs:v,size:S})=>s`
      <cds-icon-button
        align=${e}
        ?close-on-activation=${l}
        ?defaultOpen=${m}
        ?disabled=${f}
        enter-delay-ms=${g}
        ?isSelected=${y}
        kind=${$}
        leave-delay-ms=${v}
        size=${S}>
        ${b({slot:"icon"})}
        <span slot="tooltip-content">${R}</span>
      </cds-icon-button>
    `},H={decorators:[e=>s`<div style="padding: 3rem">${e()}</div>`],title:"Components/Icon Button"};var a,c,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-icon-button>
        \${Edit16({
      slot: 'icon'
    })}
        <span slot="tooltip-content">label</span>
      </cds-icon-button>
    \`;
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args,
  argTypes,
  render: ({
    align,
    closeOnActivation,
    defaultOpen,
    disabled,
    enterDelayMs,
    isSelected,
    kind,
    label,
    leaveDelayMs,
    size
  }) => {
    return html\`
      <cds-icon-button
        align=\${align}
        ?close-on-activation=\${closeOnActivation}
        ?defaultOpen=\${defaultOpen}
        ?disabled=\${disabled}
        enter-delay-ms=\${enterDelayMs}
        ?isSelected=\${isSelected}
        kind=\${kind}
        leave-delay-ms=\${leaveDelayMs}
        size=\${size}>
        \${Edit16({
      slot: 'icon'
    })}
        <span slot="tooltip-content">\${label}</span>
      </cds-icon-button>
    \`;
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const z=["Default","Playground"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Playground:i,__namedExportsOrder:z,default:H},Symbol.toStringTag,{value:"Module"}));export{P as I};
