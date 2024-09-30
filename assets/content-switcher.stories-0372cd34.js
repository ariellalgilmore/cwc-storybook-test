import{b as d,x as r}from"./lit-element-266f0592.js";import{o as I}from"./if-defined-21892bb5.js";import{C as a}from"./content-switcher-item-2b921bc9.js";import"./tooltip-content-1105f219.js";import{p as l}from"./carbon-element-59fbbccb.js";import{s as h}from"./spread-61d77317.js";import"./layer-d66987ad.js";import"./with-layer-c4dddb92.js";const F=({children:e,...t}={})=>d`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${h(t)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${e}<path d="M4 6H22V8H4zM4 12H22V14H4zM4 18H22V20H4zM4 24H22V26H4zM26 6H28V8H26zM26 12H28V14H26zM26 18H28V20H26zM26 24H28V26H26z"></path></svg>`,x=({children:e,...t}={})=>d`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${h(t)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${e}<path d="M16 17v8H6V17H16m0-2H6a2 2 0 00-2 2v8a2 2 0 002 2H16a2 2 0 002-2V17a2 2 0 00-2-2zM27 6v5H17V6H27m0-2H17a2 2 0 00-2 2v5a2 2 0 002 2H27a2 2 0 002-2V6a2 2 0 00-2-2zM27 17v5H22V17h5m0-2H22a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V17a2 2 0 00-2-2zM11 6v5H6V6h5m0-2H6A2 2 0 004 6v5a2 2 0 002 2h5a2 2 0 002-2V6a2 2 0 00-2-2z"></path></svg>`,B=({children:e,...t}={})=>d`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${h(t)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${e}<path d="M4 26H28V28H4zM4 19H28V21H4zM12 6v6H6V6h6m0-2H6A2 2 0 004 6v6a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2zM26 6v6H20V6h6m0-2H20a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2z"></path></svg>`;/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const u=()=>{},R={"Medium (md - default)":null,[`Small (${a.SMALL})`]:a.SMALL,[`Large (${a.LARGE})`]:a.LARGE},D={value:"",size:null,disableSelection:!1},E={value:{control:"text",description:"The value of the selected item (value)"},size:{control:"select",options:R,description:"Button size (size)"},disableSelection:{control:"boolean",description:`Disable user-initiated selection change (Call event.preventDefault() in ${l}-content-switcher-beingselected event)`},onBeforeSelect:{action:`${l}-content-switcher-beingselected`},onSelect:{action:`${l}-content-switcher-selected`}},n={render:()=>r`
    <cds-content-switcher value="all">
      <cds-content-switcher-item value="all">
        First section
      </cds-content-switcher-item>
      <cds-content-switcher-item value="cloudFoundry">
        Second section
      </cds-content-switcher-item>
      <cds-content-switcher-item value="staging">
        Third section
      </cds-content-switcher-item>
    </cds-content-switcher>
  `},c={render:()=>r`
    <cds-content-switcher value="all">
      <cds-content-switcher-item icon value="all">
        ${F()}
        <span slot="tooltip-content">Table of Contents</span>
      </cds-content-switcher-item>
      <cds-content-switcher-item icon value="cloudFoundry">
        ${x()}
        <span slot="tooltip-content">Workspace Test</span>
      </cds-content-switcher-item>
      <cds-content-switcher-item icon value="staging">
        ${B()}
        <span slot="tooltip-content">View Mode</span>
      </cds-content-switcher-item>
    </cds-content-switcher>
  `},s={render:()=>r`
    <sb-template-layers>
      <cds-content-switcher value="all">
        <cds-content-switcher-item icon value="all">
          ${F()}
          <span slot="tooltip-content">Table of Contents</span>
        </cds-content-switcher-item>
        <cds-content-switcher-item icon value="cloudFoundry">
          ${x()}
          <span slot="tooltip-content">Workspace Test</span>
        </cds-content-switcher-item>
        <cds-content-switcher-item icon value="staging">
          ${B()}
          <span slot="tooltip-content">View Mode</span>
        </cds-content-switcher-item>
      </cds-content-switcher>
    </sb-template-layers>
  `},o={render:()=>r`
    <sb-template-layers>
      <cds-content-switcher value="all">
        <cds-content-switcher-item value="all">
          First section
        </cds-content-switcher-item>
        <cds-content-switcher-item value="cloudFoundry">
          Second section
        </cds-content-switcher-item>
        <cds-content-switcher-item value="staging">
          Third section
        </cds-content-switcher-item>
      </cds-content-switcher>
    </sb-template-layers>
  `},i={args:D,argTypes:E,render:e=>{const{value:t,disableSelection:L,onBeforeSelect:W=u,onSelect:O=u,size:_}=e??{},A=m=>{W(m),L&&m.preventDefault()};return r`
      <cds-content-switcher
        value="${I(t)}"
        @cds-content-switcher-beingselected="${A}"
        @cds-content-switcher-selected="${O}"
        size="${_}">
        <cds-content-switcher-item value="all">
          First section
        </cds-content-switcher-item>
        <cds-content-switcher-item value="cloudFoundry">
          Second section
        </cds-content-switcher-item>
        <cds-content-switcher-item value="staging">
          Third section
        </cds-content-switcher-item>
      </cds-content-switcher>
    `}},k={title:"Components/Content switcher"};var p,w,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <cds-content-switcher value="all">
      <cds-content-switcher-item value="all">
        First section
      </cds-content-switcher-item>
      <cds-content-switcher-item value="cloudFoundry">
        Second section
      </cds-content-switcher-item>
      <cds-content-switcher-item value="staging">
        Third section
      </cds-content-switcher-item>
    </cds-content-switcher>
  \`
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var g,f,H;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <cds-content-switcher value="all">
      <cds-content-switcher-item icon value="all">
        \${TableOfContents16()}
        <span slot="tooltip-content">Table of Contents</span>
      </cds-content-switcher-item>
      <cds-content-switcher-item icon value="cloudFoundry">
        \${Workspace16()}
        <span slot="tooltip-content">Workspace Test</span>
      </cds-content-switcher-item>
      <cds-content-switcher-item icon value="staging">
        \${ViewMode2_16()}
        <span slot="tooltip-content">View Mode</span>
      </cds-content-switcher-item>
    </cds-content-switcher>
  \`
}`,...(H=(f=c.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var S,b,$;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <sb-template-layers>
      <cds-content-switcher value="all">
        <cds-content-switcher-item icon value="all">
          \${TableOfContents16()}
          <span slot="tooltip-content">Table of Contents</span>
        </cds-content-switcher-item>
        <cds-content-switcher-item icon value="cloudFoundry">
          \${Workspace16()}
          <span slot="tooltip-content">Workspace Test</span>
        </cds-content-switcher-item>
        <cds-content-switcher-item icon value="staging">
          \${ViewMode2_16()}
          <span slot="tooltip-content">View Mode</span>
        </cds-content-switcher-item>
      </cds-content-switcher>
    </sb-template-layers>
  \`
}`,...($=(b=s.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var y,M,V;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <sb-template-layers>
      <cds-content-switcher value="all">
        <cds-content-switcher-item value="all">
          First section
        </cds-content-switcher-item>
        <cds-content-switcher-item value="cloudFoundry">
          Second section
        </cds-content-switcher-item>
        <cds-content-switcher-item value="staging">
          Third section
        </cds-content-switcher-item>
      </cds-content-switcher>
    </sb-template-layers>
  \`
}`,...(V=(M=o.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var z,T,C;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      value,
      disableSelection,
      onBeforeSelect = noop,
      onSelect = noop,
      size
    } = args ?? {};
    const handleBeforeSelected = (event: CustomEvent) => {
      onBeforeSelect(event);
      if (disableSelection) {
        event.preventDefault();
      }
    };
    return html\`
      <cds-content-switcher
        value="\${ifDefined(value)}"
        @cds-content-switcher-beingselected="\${handleBeforeSelected}"
        @cds-content-switcher-selected="\${onSelect}"
        size="\${size}">
        <cds-content-switcher-item value="all">
          First section
        </cds-content-switcher-item>
        <cds-content-switcher-item value="cloudFoundry">
          Second section
        </cds-content-switcher-item>
        <cds-content-switcher-item value="staging">
          Third section
        </cds-content-switcher-item>
      </cds-content-switcher>
    \`;
  }
}`,...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const P=["Default","IconOnly","IconOnlyWithLayer","WithLayer","Playground"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,IconOnly:c,IconOnlyWithLayer:s,Playground:i,WithLayer:o,__namedExportsOrder:P,default:k},Symbol.toStringTag,{value:"Module"}));export{Q as C};
