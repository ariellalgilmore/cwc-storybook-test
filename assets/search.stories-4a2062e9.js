import{s as R,x as a}from"./lit-element-266f0592.js";import{o as t}from"./if-defined-21892bb5.js";import{I as r}from"./text-input-f5b277bd.js";import{n as H}from"./property-da2637ab.js";import{p as x,c as V}from"./carbon-element-59fbbccb.js";import{s as Z}from"./search-c228858a.js";import"./layer-d66987ad.js";import"./with-layer-c4dddb92.js";var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,B=(b,s,n,o)=>{for(var e=o>1?void 0:o?K(s,n):s,l=b.length-1,c;l>=0;l--)(c=b[l])&&(e=(o?c(s,n,e):c(e))||e);return o&&e&&J(s,n,e),e};let y=class extends R{constructor(){super(...arguments),this.size=r.MEDIUM}render(){return a`
      <span class="${x}--label"></span>
      <div class="${x}--search-input"></div>
    `}};y.styles=Z;B([H({reflect:!0})],y.prototype,"size",2);y=B([V(`${x}-search-skeleton`)],y);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const Q={[`Small size (${r.SMALL})`]:r.SMALL,[`Medium size (${r.MEDIUM})`]:r.MEDIUM,[`Large size (${r.LARGE})`]:r.LARGE},X={autoComplete:"off",closeButtonLabelText:"Clear search input",disabled:!1,labelText:"Search",placeholder:"Placeholder text",playgroundWidth:300,role:"searchbox",size:null,type:"text",value:"Default value"},Y={autoComplete:{control:"text",description:'Specify an optional value for the <code>autocomplete</code> property on the underlying <code>&lt;input&gt;</code>, defaults to "off".'},closeButtonLabelText:{control:"text",description:'Specify a label to be read by screen readers on the "close" button.'},disabled:{control:"boolean",description:"Specify whether the <code>&lt;input&gt;</code> should be disabled."},labelText:{control:"text",description:"Provide the label text for the Search icon."},placeholder:{control:"text",description:"Provide an optional placeholder text for the Search. Note: if the label and placeholder differ, VoiceOver on Mac will read both."},playgroundWidth:{control:{type:"range",min:300,max:800,step:50},description:"Playground width"},role:{control:"text",description:"Specify the role for the underlying <code>&lt;input&gt;</code>, defaults to <code>searchbox</code>."},size:{control:"select",description:"Specify the size of the Search.",options:Q},type:{control:"text",description:"Optional prop to specify the type of the <code>&lt;input&gt;</code>."},value:{control:"text",description:"Specify the value of the <code>&lt;input&gt;</code>."}},d={render:()=>a`
      <cds-search
        size="lg"
        close-button-label-text="Clear search input"
        label-text="Search"
        placeholder="Find your items"
        type="text"></cds-search>
    `},i={render:()=>a`
      <cds-search
        size="lg"
        disabled
        close-button-label-text="Clear search input"
        label-text="Search"
        placeholder="Find your items"
        type="text"></cds-search>
    `},p={render:()=>a`
      <cds-search
        size="lg"
        expandable
        close-button-assistive-text="Clear search input"
        label-text="Search"
        placeholder="Find your items"
        type="text"></cds-search>
    `},u={render:()=>a`
      <sb-template-layers>
        <cds-search size="lg" expandable placeholder="Layer two"></cds-search>
      </sb-template-layers>
    `},h={render:()=>a`
      <sb-template-layers>
        <cds-search size="lg" placeholder="Find your items"></cds-search>
      </sb-template-layers>
    `},m={args:X,argTypes:Y,render:b=>{const{autoComplete:s,closeButtonLabelText:n,colorScheme:o,disabled:e,labelText:l,placeholder:c,playgroundWidth:j,size:A,role:U,type:q,value:G,onInput:N}=b??{},f=document.querySelector("#main-content");return f&&(f.style.width=`${j}px`),a`
      <cds-search
        autocomplete="${s}"
        close-button-assistive-text="${t(n)}"
        color-scheme="${t(o)}"
        ?disabled="${e}"
        label-text="${t(l)}"
        placeholder="${t(c)}"
        size="${t(A)}"
        type="${t(q)}"
        role=${U}
        value="${t(G)}"
        @cds-search-input="${N}">
      </cds-search>
    `}},k={title:"Components/Search"};var g,S,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-search
        size="lg"
        close-button-label-text="Clear search input"
        label-text="Search"
        placeholder="Find your items"
        type="text"></cds-search>
    \`;
  }
}`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var $,z,D;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-search
        size="lg"
        disabled
        close-button-label-text="Clear search input"
        label-text="Search"
        placeholder="Find your items"
        type="text"></cds-search>
    \`;
  }
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var L,C,T;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-search
        size="lg"
        expandable
        close-button-assistive-text="Clear search input"
        label-text="Search"
        placeholder="Find your items"
        type="text"></cds-search>
    \`;
  }
}`,...(T=(C=p.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var E,_,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <sb-template-layers>
        <cds-search size="lg" expandable placeholder="Layer two"></cds-search>
      </sb-template-layers>
    \`;
  }
}`,...(M=(_=u.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var P,w,I;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <sb-template-layers>
        <cds-search size="lg" placeholder="Find your items"></cds-search>
      </sb-template-layers>
    \`;
  }
}`,...(I=(w=h.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,W,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      autoComplete,
      closeButtonLabelText,
      colorScheme,
      disabled,
      labelText,
      placeholder,
      playgroundWidth,
      size,
      role,
      type,
      value,
      onInput
    } = args ?? {};
    const mainDiv = document.querySelector('#main-content');
    if (mainDiv) {
      (mainDiv as HTMLElement).style.width = \`\${playgroundWidth}px\`;
    }
    return html\`
      <cds-search
        autocomplete="\${autoComplete}"
        close-button-assistive-text="\${ifDefined(closeButtonLabelText)}"
        color-scheme="\${ifDefined(colorScheme)}"
        ?disabled="\${disabled}"
        label-text="\${ifDefined(labelText)}"
        placeholder="\${ifDefined(placeholder)}"
        size="\${ifDefined(size)}"
        type="\${ifDefined(type)}"
        role=\${role}
        value="\${ifDefined(value)}"
        @cds-search-input="\${onInput}">
      </cds-search>
    \`;
  }
}`,...(F=(W=m.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const ee=["Default","Disabled","Expandable","ExpandableWithLayer","WithLayer","Playground"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Disabled:i,Expandable:p,ExpandableWithLayer:u,Playground:m,WithLayer:h,__namedExportsOrder:ee,default:k},Symbol.toStringTag,{value:"Module"}));export{de as S};
