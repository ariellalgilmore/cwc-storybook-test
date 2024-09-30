import{x as a}from"./lit-element-266f0592.js";import{o as r}from"./if-defined-21892bb5.js";import{s as S}from"./16-8e39cfac.js";import{L as t}from"./link-f0981e2c.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const D={disabled:!1,href:"https://example.com",inline:!1,size:t.MEDIUM,visited:!1},x={disabled:{control:"boolean",description:"Specify if the control should be disabled, or not"},href:{control:"text",description:"Provide the href attribute for the <a> node"},size:{control:"radio",options:[t.SMALL,t.MEDIUM,t.LARGE],description:"Specify the size of the Link. Currently supports either sm, 'md' (default) or 'lg' as an option."},visited:{control:"boolean",description:"Specify whether you want the link to receive visited styles after the link has been clicked"}},e={render:()=>a` <cds-link href="#"> Link </cds-link> `},i={render:()=>a`
    <cds-link inline href="#"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</cds-link
    >
    <p>
      Ut facilisis semper lorem in aliquet. Aliquam accumsan ante justo, vitae
      fringilla eros vehicula id. Ut at enim quis libero pharetra ullamcorper.
      Maecenas feugiat sodales arcu ut porttitor. In blandit ultricies est.
      Vivamus risus massa, cursus eu tellus sed, sagittis commodo nunc.
      <cds-link inline href="#"
        >Maecenas nunc mauris, consequat quis mauris sit amet,</cds-link
      >
      finibus suscipit nunc. Phasellus ex quam, placerat quis tempus sit amet,
      pretium nec sem. Etiam dictum scelerisque mauris, blandit ultrices erat
      pellentesque id. Quisque venenatis purus sit amet sodales condimentum.
      Duis at tincidunt orci. Ut velit ipsum, lacinia at ex quis, aliquet
      rhoncus purus. Praesent et scelerisque ligula.
    </p>
  `},s={args:D,parameters:{controls:{exclude:/(.*?)/}},render:({disabled:l,href:o,size:c,onClick:u})=>a`
    <cds-link
      ?disabled="${l}"
      href="${r(o)}"
      size="${r(c)}"
      @click="${u}">
      Download ${S({slot:"icon"})}
    </cds-link>
  `},n={argTypes:x,args:D,render:({disabled:l,href:o,inline:c,size:u,visited:y,onClick:z})=>a`
    <cds-link
      ?disabled="${l}"
      href="${r(o)}"
      size="${r(u)}"
      ?inline="${c}"
      ?visited="${y}"
      @click="${z}">
      Link
    </cds-link>
  `},I={title:"Components/Link"};var d,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  render: () => html` <cds-link href="#"> Link </cds-link> `\n}',...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,h,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <cds-link inline href="#"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</cds-link
    >
    <p>
      Ut facilisis semper lorem in aliquet. Aliquam accumsan ante justo, vitae
      fringilla eros vehicula id. Ut at enim quis libero pharetra ullamcorper.
      Maecenas feugiat sodales arcu ut porttitor. In blandit ultricies est.
      Vivamus risus massa, cursus eu tellus sed, sagittis commodo nunc.
      <cds-link inline href="#"
        >Maecenas nunc mauris, consequat quis mauris sit amet,</cds-link
      >
      finibus suscipit nunc. Phasellus ex quam, placerat quis tempus sit amet,
      pretium nec sem. Etiam dictum scelerisque mauris, blandit ultrices erat
      pellentesque id. Quisque venenatis purus sit amet sodales condimentum.
      Duis at tincidunt orci. Ut velit ipsum, lacinia at ex quis, aliquet
      rhoncus purus. Praesent et scelerisque ligula.
    </p>
  \`
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,b,q;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    controls: {
      exclude: /(.*?)/
    }
  },
  render: ({
    disabled,
    href,
    size,
    onClick
  }) => html\`
    <cds-link
      ?disabled="\${disabled}"
      href="\${ifDefined(href)}"
      size="\${ifDefined(size)}"
      @click="\${onClick}">
      Download \${Download16({
    slot: 'icon'
  })}
    </cds-link>
  \`
}`,...(q=(b=s.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var $,v,L;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    disabled,
    href,
    inline,
    size,
    visited,
    onClick
  }) => html\`
    <cds-link
      ?disabled="\${disabled}"
      href="\${ifDefined(href)}"
      size="\${ifDefined(size)}"
      ?inline="\${inline}"
      ?visited="\${visited}"
      @click="\${onClick}">
      Link
    </cds-link>
  \`
}`,...(L=(v=n.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const M=["Default","Inline","PairedWithIcon","Playground"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Inline:i,PairedWithIcon:s,Playground:n,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{E as L};
