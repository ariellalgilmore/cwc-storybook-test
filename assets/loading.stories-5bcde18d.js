import{x as l}from"./lit-element-266f0592.js";import{o as m}from"./if-defined-21892bb5.js";import"./loading-c136bf2d.js";import{L as o}from"./loading-icon-284120b6.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const u={[`Regular (${o.REGULAR})`]:null,[`Small (${o.SMALL})`]:o.SMALL},v={inactive:!1,assistiveText:"Loading",type:null,withOverlay:!1},f={inactive:{control:"boolean",description:"Specify whether the component should be inactive, or not."},assistiveText:{control:"text",description:"Specify a description that would be used to best describe the loading state."},type:{control:"radio",options:u,description:"Specify the spinner type."},withOverlay:{control:"boolean",description:"Specify whether the loading should be an overlay."}},e={render:()=>l` <cds-loading></cds-loading> `},t={args:v,argTypes:f,render:({inactive:d,assistiveText:p,type:g,withOverlay:y})=>l`
      <cds-loading
        ?inactive=${d}
        assistive-text=${p}
        type=${m(g)}
        ?overlay=${y}></cds-loading>
    `},h={title:"Components/Loading"};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{\n  render: () => html` <cds-loading></cds-loading> `\n}",...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var a,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    inactive,
    assistiveText,
    type,
    withOverlay
  }) => html\`
      <cds-loading
        ?inactive=\${inactive}
        assistive-text=\${assistiveText}
        type=\${ifDefined(type)}
        ?overlay=\${withOverlay}></cds-loading>
    \`
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const S=["Default","Playground"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Playground:t,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{O as L};
