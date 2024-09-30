import{x as o}from"./lit-element-266f0592.js";import{T as e}from"./tag-0e6d166e.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const u={[`Medium size (${e.MEDIUM})`]:e.MEDIUM,[`Small size (${e.SMALL})`]:e.SMALL},p=["red","magenta","purple","blue","cyan","teal","green","gray","cool-gray","warm-gray","high-contrast","outline"],T={disabled:!1,filter:!1,title:"Clear filter",size:e.MEDIUM},$={disabled:{control:"boolean",description:"Specify if the Tag is disabled"},filter:{control:"boolean",description:"Determine if Tag is a filter/chip"},size:{control:"select",description:'Specify the size of the Tag. Currently supports either sm or "md" (default) sizes.',options:u},title:{control:"text",description:"Text to show on clear filters"},type:{control:"select",description:"Specify the type of the Tag.",options:p}},t={render:()=>o`${p.map(s=>o`<cds-tag type="${s}">Tag content</cds-tag>`)}`},r={argTypes:$,args:T,render:({filter:s,size:g,type:f,title:m,disabled:y})=>o`
    <cds-tag
      ?filter="${s}"
      size="${g}"
      type="${f}"
      title="${m}"
      ?disabled="${y}">
      Tag content
    </cds-tag>
  `},b={title:"Components/Tag"};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:'{\n  render: () => html`${types.map(e => html`<cds-tag type="${e}">Tag content</cds-tag>`)}`\n}',...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    filter,
    size,
    type,
    title,
    disabled
  }) => html\`
    <cds-tag
      ?filter="\${filter}"
      size="\${size}"
      type="\${type}"
      title="\${title}"
      ?disabled="\${disabled}">
      Tag content
    </cds-tag>
  \`
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["Default","Playground"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Playground:r,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{M as T};
