import{x as l}from"./lit-element-266f0592.js";import{o as h}from"./if-defined-21892bb5.js";import{S as r}from"./skeleton-text-084071b9.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const x={Regular:null,[`Heading (${r.HEADING})`]:r.HEADING},y={type:null,paragraph:!0,lineCount:3,width:"100%"},f={type:{control:"select",description:"Indicate the type of skeleton text, heading or regular.",options:x},paragraph:{control:"boolean",description:"Set this to true to generate multiple lines of text."},lineCount:{control:"number",description:"The number of lines shown if paragraph is true."},width:{control:"text",description:"Width (in px or %) of single line of text or max-width of paragraph lines."}},e={parameters:{percy:{skip:!0}},render:()=>l`<cds-skeleton-text></cds-skeleton-text>`},t={args:y,argTypes:f,render:c=>{const{type:d,paragraph:u,lineCount:g,width:m}=c??{};return l`
      <cds-skeleton-text
        type="${h(d)}"
        ?paragraph="${u}"
        lineCount="${g}"
        width="${m}">
      </cds-skeleton-text>
    `}},k={title:"Components/Skeleton/Skeleton Text",parameters:{percy:{skip:!0}}};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    percy: {
      skip: true
    }
  },
  render: () => html\`<cds-skeleton-text></cds-skeleton-text>\`
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var s,p,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      type,
      paragraph,
      lineCount,
      width
    } = args ?? {};
    return html\`
      <cds-skeleton-text
        type="\${ifDefined(type)}"
        ?paragraph="\${paragraph}"
        lineCount="\${lineCount}"
        width="\${width}">
      </cds-skeleton-text>
    \`;
  }
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const S=["Default","Playground"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Playground:t,__namedExportsOrder:S,default:k},Symbol.toStringTag,{value:"Module"}));export{C as S};
