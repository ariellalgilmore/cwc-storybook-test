import{x as l}from"./lit-element-266f0592.js";import"./popover-content-d3dfbbea.js";import"./toggletip-4f5ff9ac.js";import{S as t}from"./slug-action-button-0a957c91.js";import"./icon-button-e8231e03.js";import"./table-toolbar-search-2366535b.js";import{P as e}from"./defs-4d9ca86b.js";import{s as R}from"./16-80dd19e9.js";import{s as _}from"./16-5513bc0c.js";import{s as M}from"./16-4249ddd2.js";import{s as C,a as k}from"./16-c244fb0e.js";import{s as z}from"./popover-story-1d9aa45e.js";import{s as D}from"./slug-story-87db5f07.js";import{s as I}from"./tooltip-story-bea37db3.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const m={top:e.TOP,["top-start"]:e.TOP_START,["top-end"]:e.TOP_END,bottom:e.BOTTOM,["bottom-start"]:e.BOTTOM_START,["bottom-end"]:e.BOTTOM_END,left:e.LEFT,["left-end"]:e.LEFT_END,["left-start"]:e.LEFT_START,right:e.RIGHT,["right-end"]:e.RIGHT_END,["right-start"]:e.RIGHT_START},P={[`Mini size (${t.MINI})`]:t.MINI,[`2XS size (${t.EXTRA_EXTRA_SMALL})`]:t.EXTRA_EXTRA_SMALL,[`XS size (${t.EXTRA_SMALL})`]:t.EXTRA_SMALL,[`Small size (${t.SMALL})`]:t.SMALL,[`Medium size (${t.MEDIUM})`]:t.MEDIUM,[`Large size (${t.LARGE})`]:t.LARGE,[`XL size (${t.EXTRA_LARGE})`]:t.EXTRA_LARGE},w=l`
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
`,G=l`
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${M({slot:"icon"})}
    <span slot="tooltip-content"> View </span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${C({slot:"icon"})}
    <span slot="tooltip-content"> Open folder</span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${k({slot:"icon"})}
    <span slot="tooltip-content"> Folders </span>
  </cds-icon-button>
  <cds-slug-action-button>View details</cds-slug-action-button>
`,p={args:{caret:!0,highContrast:!1,align:m.bottom,dropShadow:!0},argTypes:{caret:{control:"boolean",description:"Caret (caret)"},highContrast:{control:"boolean",description:"High contrast (highContrast)"},align:{control:"select",description:"Align (align)",options:m},dropShadow:{control:"boolean",description:"Drop shadow (dropShadow)"}},render:n=>{const{caret:i,highContrast:s,align:a,dropShadow:r}=n??{},c=b=>{const o=document.querySelector(b);(o==null?void 0:o.hasAttribute("open"))?o==null||o.removeAttribute("open"):o==null||o.setAttribute("open","")};return l`
      <style>
        ${z}
      </style>
      <cds-popover
        autoalign
        id="popover-one"
        open
        ?caret=${i}
        ?highContrast=${s}
        align=${a}
        ?dropShadow=${r}>
        <button
          class="playground-trigger"
          aria-label="Settings"
          type="button"
          @click="${()=>c("#popover-one")}">
          ${R()}
        </button>
        <cds-popover-content>
          <div class="p-3">
            <p class="popover-title">Available storage</p>
            <p class="popover-details">
              This server has 150 GB of block storage remaining.
            </p>
          </div>
        </cds-popover-content>
      </cds-popover>
    `}},d={args:{alignment:e.BOTTOM,bodyText:`Lorem ipsum dolor sit amet, di os consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.`},argTypes:{alignment:{control:"select",description:"Toggletip alignment to trigger button (alignment)",options:m},bodyText:{control:"text",description:"Toggletip content (bodyText)"}},render:n=>{const{alignment:i,bodyText:s}=n??{};return l`
      <cds-toggletip autoalign alignment="${i}">
        Toggletip label

        <p slot="body-text">${s}</p>
        <cds-link slot="actions">Test</cds-link>
        <cds-button slot="actions">Button</cds-button>
      </cds-toggletip>
    `}},g={args:{alignment:e.TOP,defaultOpen:!1,label:"Custom label",enterDelay:100,leaveDelay:300,closeOnActivation:!1},argTypes:{alignment:{control:"select",description:"Tooltip alignment to trigger button (alignment)",options:m},defaultOpen:{control:"boolean",description:"Default open (defaultOpen)"},label:{control:"text",description:"Label (label)"},enterDelay:{control:"number",description:"Enter delay in ms"},leaveDelay:{control:"number",description:"Leave delay in ms"},closeOnActivation:{control:"boolean",description:"Close on activation (closeOnActivation)"}},render:n=>{const{alignment:i,defaultOpen:s,label:a,enterDelay:r,leaveDelay:c,closeOnActivation:b}=n??{};return l`
      <style>
        ${I}
      </style>
      <cds-tooltip
        autoalign
        ?defaultOpen=${s}
        align=${i}
        enter-delay-ms=${r}
        leave-delay-ms=${c}
        ?closeOnActivation=${b}>
        <button
          class="sb-tooltip-trigger"
          role="button"
          aria-labelledby="content">
          ${_()}
        </button>
        <cds-tooltip-content id="content"> ${a} </cds-tooltip-content>
      </cds-tooltip>
    `}},u={args:{alignment:e.BOTTOM,size:t.EXTRA_SMALL,kind:"default",aiTextLabel:"",revertActive:!1},argTypes:{alignment:{control:"select",description:"Slug alignment to trigger button (alignment)",options:m},size:{control:"select",description:"Slug size (size)",options:P},kind:{control:"select",description:"Kind (kind)",options:["default","inline"]},aiTextLabel:{control:"text",description:"Ai text label"},revertActive:{control:"boolean",description:"Revert active"}},render:n=>{const{alignment:i,aiTextLabel:s,size:a,kind:r,revertActive:c}=n??{};return l`
      <style>
        ${D}
      </style>
      <div class="slug-container">
        <cds-slug
          autoalign
          alignment="${i}"
          size="${a}"
          kind="${r}"
          ai-text-label="${s}"
          ?revert-active="${c}">
          ${w} ${G}
        </cds-slug>
      </div>
    `}},N={title:"Experimental/Auto Align"};var v,T,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    caret: true,
    highContrast: false,
    align: popoverAlignments.bottom,
    dropShadow: true
  },
  argTypes: {
    caret: {
      control: 'boolean',
      description: 'Caret (caret)'
    },
    highContrast: {
      control: 'boolean',
      description: 'High contrast (highContrast)'
    },
    align: {
      control: 'select',
      description: 'Align (align)',
      options: popoverAlignments
    },
    dropShadow: {
      control: 'boolean',
      description: 'Drop shadow (dropShadow)'
    }
  },
  render: args => {
    const {
      caret,
      highContrast,
      align,
      dropShadow
    } = args ?? {};
    const handleClick = id => {
      const popover = document.querySelector(id);
      const open = popover?.hasAttribute('open');
      open ? popover?.removeAttribute('open') : popover?.setAttribute('open', '');
    };
    return html\`
      <style>
        \${styles}
      </style>
      <cds-popover
        autoalign
        id="popover-one"
        open
        ?caret=\${caret}
        ?highContrast=\${highContrast}
        align=\${align}
        ?dropShadow=\${dropShadow}>
        <button
          class="playground-trigger"
          aria-label="Settings"
          type="button"
          @click="\${() => handleClick('#popover-one')}">
          \${Checkbox16()}
        </button>
        <cds-popover-content>
          <div class="p-3">
            <p class="popover-title">Available storage</p>
            <p class="popover-details">
              This server has 150 GB of block storage remaining.
            </p>
          </div>
        </cds-popover-content>
      </cds-popover>
    \`;
  }
}`,...(y=(T=p.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var A,$,h;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    alignment: POPOVER_ALIGNMENT.BOTTOM,
    bodyText: \`Lorem ipsum dolor sit amet, di os consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.\`
  },
  argTypes: {
    alignment: {
      control: 'select',
      description: 'Toggletip alignment to trigger button (alignment)',
      options: popoverAlignments
    },
    bodyText: {
      control: 'text',
      description: 'Toggletip content (bodyText)'
    }
  },
  render: args => {
    const {
      alignment,
      bodyText
    } = args ?? {};
    return html\`
      <cds-toggletip autoalign alignment="\${alignment}">
        Toggletip label

        <p slot="body-text">\${bodyText}</p>
        <cds-link slot="actions">Test</cds-link>
        <cds-button slot="actions">Button</cds-button>
      </cds-toggletip>
    \`;
  }
}`,...(h=($=d.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var O,S,f;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    alignment: POPOVER_ALIGNMENT.TOP,
    defaultOpen: false,
    label: 'Custom label',
    enterDelay: 100,
    leaveDelay: 300,
    closeOnActivation: false
  },
  argTypes: {
    alignment: {
      control: 'select',
      description: 'Tooltip alignment to trigger button (alignment)',
      options: popoverAlignments
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Default open (defaultOpen)'
    },
    label: {
      control: 'text',
      description: 'Label (label)'
    },
    enterDelay: {
      control: 'number',
      description: 'Enter delay in ms'
    },
    leaveDelay: {
      control: 'number',
      description: 'Leave delay in ms'
    },
    closeOnActivation: {
      control: 'boolean',
      description: 'Close on activation (closeOnActivation)'
    }
  },
  render: args => {
    const {
      alignment,
      defaultOpen,
      label,
      enterDelay,
      leaveDelay,
      closeOnActivation
    } = args ?? {};
    return html\`
      <style>
        \${tooltipStyles}
      </style>
      <cds-tooltip
        autoalign
        ?defaultOpen=\${defaultOpen}
        align=\${alignment}
        enter-delay-ms=\${enterDelay}
        leave-delay-ms=\${leaveDelay}
        ?closeOnActivation=\${closeOnActivation}>
        <button
          class="sb-tooltip-trigger"
          role="button"
          aria-labelledby="content">
          \${Information16()}
        </button>
        <cds-tooltip-content id="content"> \${label} </cds-tooltip-content>
      </cds-tooltip>
    \`;
  }
}`,...(f=(S=g.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var L,E,x;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    alignment: POPOVER_ALIGNMENT.BOTTOM,
    size: SLUG_SIZE.EXTRA_SMALL,
    kind: 'default',
    aiTextLabel: '',
    revertActive: false
  },
  argTypes: {
    alignment: {
      control: 'select',
      description: 'Slug alignment to trigger button (alignment)',
      options: popoverAlignments
    },
    size: {
      control: 'select',
      description: 'Slug size (size)',
      options: sizes
    },
    kind: {
      control: 'select',
      description: 'Kind (kind)',
      options: ['default', 'inline']
    },
    aiTextLabel: {
      control: 'text',
      description: 'Ai text label'
    },
    revertActive: {
      control: 'boolean',
      description: 'Revert active'
    }
  },
  render: args => {
    const {
      alignment,
      aiTextLabel,
      size,
      kind,
      revertActive
    } = args ?? {};
    return html\`
      <style>
        \${slugStyles}
      </style>
      <div class="slug-container">
        <cds-slug
          autoalign
          alignment="\${alignment}"
          size="\${size}"
          kind="\${kind}"
          ai-text-label="\${aiTextLabel}"
          ?revert-active="\${revertActive}">
          \${content} \${actions}
        </cds-slug>
      </div>
    \`;
  }
}`,...(x=(E=u.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const X=["Popover","Toogletip","Tooltip","Slug"],ot=Object.freeze(Object.defineProperty({__proto__:null,Popover:p,Slug:u,Toogletip:d,Tooltip:g,__namedExportsOrder:X,default:N},Symbol.toStringTag,{value:"Module"}));export{ot as A};
