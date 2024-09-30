import{s as w,x as h}from"./lit-element-266f0592.js";import{n as l}from"./property-da2637ab.js";import{p as k,c as $}from"./carbon-element-59fbbccb.js";import{s as C}from"./ai-skeleton-9e8816cd.js";import"./skeleton-text-084071b9.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(s,t,n,r)=>{for(var e=r>1?void 0:r?b(t,n):t,c=s.length-1,d;c>=0;c--)(d=s[c])&&(e=(r?d(t,n,e):d(e))||e);return r&&e&&_(t,n,e),e};let a=class extends w{constructor(){super(...arguments),this.heading=!1,this.width="100%",this.paragraph=!1,this.lineCount=3}render(){const{heading:s,width:t,lineCount:n,paragraph:r}=this;return h`<cds-skeleton-text
      type="${s?"heading":""}"
      width="${t}"
      linecount="${n}"
      ?paragraph="${r}"
      optional-classes="${k}--skeleton__text--ai"></cds-skeleton-text>`}};a.styles=C;o([l({type:Boolean,reflect:!0})],a.prototype,"heading",2);o([l({reflect:!0})],a.prototype,"width",2);o([l({type:Boolean,reflect:!0})],a.prototype,"paragraph",2);o([l({type:Number,reflect:!0})],a.prototype,"lineCount",2);a=o([$(`${k}-ai-skeleton-text`)],a);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const P={heading:!1,paragraph:!1,width:"100%",lineCount:3},T={heading:{control:"boolean",description:"Heading (heading)"},paragraph:{control:"boolean",description:"Paragraph (paragraph)"},width:{control:"text",description:"Width (width)"},lineCount:{control:"number",description:"Line count (linecount)"}},p={args:{},argTypes:{},parameters:{percy:{skip:!0}},render:()=>h`<cds-ai-skeleton-text></cds-ai-skeleton-text>`},i={args:P,argTypes:T,parameters:{percy:{skip:!0}},render:s=>{const{heading:t,paragraph:n,width:r,lineCount:e}=s??{};return h`<cds-ai-skeleton-text
      ?heading="${t}"
      width="${r}"
      ?paragraph="${n}"
      linecount="${e}"></cds-ai-skeleton-text>`}},j={title:"Experimental/AISkeleton/AISkeletonText"};var u,g,m;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  // This story doesn't accept any args.
  args: {},
  argTypes: {},
  parameters: {
    percy: {
      skip: true
    }
  },
  render: () => {
    return html\`<cds-ai-skeleton-text></cds-ai-skeleton-text>\`;
  }
}`,...(m=(g=p.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var y,f,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args,
  argTypes,
  parameters: {
    percy: {
      skip: true
    }
  },
  render: args => {
    const {
      heading,
      paragraph,
      width,
      lineCount
    } = args ?? {};
    return html\`<cds-ai-skeleton-text
      ?heading="\${heading}"
      width="\${width}"
      ?paragraph="\${paragraph}"
      linecount="\${lineCount}"></cds-ai-skeleton-text>\`;
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const B=["Default","Playground"];export{p as Default,i as Playground,B as __namedExportsOrder,j as default};
