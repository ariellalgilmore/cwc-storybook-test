import{x as c}from"./lit-element-266f0592.js";import{s as L}from"./16-4249ddd2.js";import{s as S,a as E}from"./16-c244fb0e.js";import{o as _}from"./if-defined-21892bb5.js";import{S as n}from"./slug-action-button-0a957c91.js";import"./icon-button-e8231e03.js";import{s as m}from"./slug-story-87db5f07.js";import{P as s}from"./defs-4d9ca86b.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const g={top:s.TOP,["top-left"]:s.TOP_LEFT,["top-right"]:s.TOP_RIGHT,bottom:s.BOTTOM,["bottom-left"]:s.BOTTOM_LEFT,["bottom-right"]:s.BOTTOM_RIGHT,left:s.LEFT,["left-bottom"]:s.LEFT_BOTTOM,["left-top"]:s.LEFT_TOP,right:s.RIGHT,["right-bottom"]:s.RIGHT_BOTTOM,["right-top"]:s.RIGHT_TOP},M={[`Mini size (${n.MINI})`]:n.MINI,[`2XS size (${n.EXTRA_EXTRA_SMALL})`]:n.EXTRA_EXTRA_SMALL,[`XS size (${n.EXTRA_SMALL})`]:n.EXTRA_SMALL,[`Small size (${n.SMALL})`]:n.SMALL,[`Medium size (${n.MEDIUM})`]:n.MEDIUM,[`Large size (${n.LARGE})`]:n.LARGE,[`XL size (${n.EXTRA_LARGE})`]:n.EXTRA_LARGE},t=c`
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h1>84%</h1>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr />
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>
`,e=c`
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${L({slot:"icon"})}
    <span slot="tooltip-content"> View </span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${S({slot:"icon"})}
    <span slot="tooltip-content"> Open folder</span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${E({slot:"icon"})}
    <span slot="tooltip-content"> Folders </span>
  </cds-icon-button>
  <cds-slug-action-button>View details</cds-slug-action-button>
`,R={aiTextLabel:"",alignment:s.BOTTOM,kind:"inline",revertActive:!1,size:n.EXTRA_SMALL},w={aiTextLabel:{control:"text",description:"Specify additional text to be rendered next to the AI label in the inline variant."},alignment:{control:"select",description:"Specify how the popover should align with the button.",options:g},kind:{control:"radio",description:"Specify the type of Slug, from the following list of types: <code>default</code>, <code>hollow</code>, or <code>inline</code>.",options:["default","inline"]},size:{control:"select",description:"Specify the size of the button, from the following list of sizes: <code>mini</code>, <code>2xs</code>, <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.",options:M},revertActive:{control:"boolean",description:"Specify whether the revert button should be visible."}},o={render:()=>c`
      <style>
        ${m}
      </style>
      <div class="slug-container">
        <cds-slug size="mini" alignment="bottom-left">
          ${t}${e}
        </cds-slug>
        <cds-slug size="2xs" alignment="bottom-left">
          ${t}${e}
        </cds-slug>
        <cds-slug size="xs" alignment="bottom-left">
          ${t}${e}
        </cds-slug>
        <cds-slug size="sm" alignment="bottom-left">
          ${t}${e}
        </cds-slug>
        <cds-slug size="md" alignment="bottom-left" open>
          ${t} ${e}</cds-slug
        >
        <cds-slug size="lg" alignment="bottom-left">
          ${t} ${e}</cds-slug
        >
        <cds-slug size="xl" alignment="bottom-left">
          ${t} ${e}</cds-slug
        >
      </div>
      <div class="slug-container">
        <cds-slug size="sm" kind="inline" alignment="bottom-left">
          ${t}${e}
        </cds-slug>
        <cds-slug size="md" kind="inline" alignment="bottom-left">
          ${t}${e}
        </cds-slug>
        <cds-slug size="lg" kind="inline" alignment="bottom-left">
          ${t}${e}
        </cds-slug>
      </div>
      <div class="slug-container">
        <cds-slug
          size="sm"
          kind="inline"
          ai-text-label="Text goes here"
          alignment="bottom-left">
          ${t}${e}
        </cds-slug>
        <cds-slug
          size="md"
          kind="inline"
          ai-text-label="Text goes here"
          alignment="bottom-left">
          ${t}${e}
        </cds-slug>
        <cds-slug
          size="lg"
          kind="inline"
          ai-text-label="Text goes here"
          alignment="bottom-left">
          ${t}${e}
        </cds-slug>
      </div>
    `},i={args:R,argTypes:w,render:a=>{const{alignment:d,aiTextLabel:r,kind:A,revertActive:y,size:x}=a??{};return c`
      <style>
        ${m}
      </style>
      <div class="slug-container">
        <cds-slug
          alignment="${_(d)}"
          size="${x}"
          kind="${A}"
          ai-text-label="${r}"
          ?revert-active="${y}">
          ${t} ${e}
        </cds-slug>
      </div>
    `}},l={args:{alignment:g.bottom,showActions:!1},argTypes:{alignment:{control:"select",description:"Specify how the popover should align with the button.",options:g},showActions:{control:"boolean",description:"Specify whether to show action items in slug callout"}},render:a=>{const{alignment:d,showActions:r}=a??{};return c`
      <style>
        ${m}
      </style>
      <div class="slug-container-example slug-container centered">
        <cds-slug open alignment="${d}" size="${n.EXTRA_SMALL}">
          ${t} ${r?e:""}
        </cds-slug>
      </div>
    `}},O={title:"Experimental/Slug"};var u,p,$;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="slug-container">
        <cds-slug size="mini" alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
        <cds-slug size="2xs" alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
        <cds-slug size="xs" alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
        <cds-slug size="sm" alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
        <cds-slug size="md" alignment="bottom-left" open>
          \${content} \${actions}</cds-slug
        >
        <cds-slug size="lg" alignment="bottom-left">
          \${content} \${actions}</cds-slug
        >
        <cds-slug size="xl" alignment="bottom-left">
          \${content} \${actions}</cds-slug
        >
      </div>
      <div class="slug-container">
        <cds-slug size="sm" kind="inline" alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
        <cds-slug size="md" kind="inline" alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
        <cds-slug size="lg" kind="inline" alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
      </div>
      <div class="slug-container">
        <cds-slug
          size="sm"
          kind="inline"
          ai-text-label="Text goes here"
          alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
        <cds-slug
          size="md"
          kind="inline"
          ai-text-label="Text goes here"
          alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
        <cds-slug
          size="lg"
          kind="inline"
          ai-text-label="Text goes here"
          alignment="bottom-left">
          \${content}\${actions}
        </cds-slug>
      </div>
    \`;
  }
}`,...($=(p=o.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};var b,f,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      alignment,
      aiTextLabel,
      kind,
      revertActive,
      size
    } = args ?? {};
    return html\`
      <style>
        \${styles}
      </style>
      <div class="slug-container">
        <cds-slug
          alignment="\${ifDefined(alignment)}"
          size="\${size}"
          kind="\${kind}"
          ai-text-label="\${aiTextLabel}"
          ?revert-active="\${revertActive}">
          \${content} \${actions}
        </cds-slug>
      </div>
    \`;
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,z,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    alignment: tooltipAlignments.bottom,
    showActions: false
  },
  argTypes: {
    alignment: {
      control: 'select',
      description: 'Specify how the popover should align with the button.',
      options: tooltipAlignments
    },
    showActions: {
      control: 'boolean',
      description: 'Specify whether to show action items in slug callout'
    }
  },
  render: args => {
    const {
      alignment,
      showActions
    } = args ?? {};
    return html\`
      <style>
        \${styles}
      </style>
      <div class="slug-container-example slug-container centered">
        <cds-slug open alignment="\${alignment}" size="\${SLUG_SIZE.EXTRA_SMALL}">
          \${content} \${showActions ? actions : ''}
        </cds-slug>
      </div>
    \`;
  }
}`,...(v=(z=l.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const k=["Default","Playground","Callout"],H=Object.freeze(Object.defineProperty({__proto__:null,Callout:l,Default:o,Playground:i,__namedExportsOrder:k,default:O},Symbol.toStringTag,{value:"Module"}));export{H as S};
