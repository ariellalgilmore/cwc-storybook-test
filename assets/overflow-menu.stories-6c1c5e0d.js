import{b as M,x as i}from"./lit-element-266f0592.js";import{o as _}from"./if-defined-21892bb5.js";import{O as e}from"./overflow-menu-body-0fa120a6.js";import"./overflow-menu-item-71e19e1e.js";import{p as d}from"./carbon-element-59fbbccb.js";import{s as b}from"./16-46438ed3.js";import{s as x}from"./spread-61d77317.js";const O=({children:s,...t}={})=>M`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${x(t)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${s}<path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>`;/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const R={[`Small size (${e.SMALL})`]:e.SMALL,[`Medium size (default) (${e.MEDIUM})`]:e.MEDIUM,[`Lg size (${e.LARGE})`]:e.LARGE},D={flipped:!1,iconDescription:"Options",open:!1,index:1,size:e.MEDIUM},S={flipped:{control:"boolean",description:"<code>true</code> if the menu alignment should be flipped."},iconDescription:{control:"text",description:"The icon description."},open:{control:"boolean",description:`<code>true</code> if the menu should be open.
`},index:{control:"number",description:"The index for the item which should be focused in the menu."},size:{control:"select",description:"Specify the size of the OverflowMenu. Currently supports either <code>sm</code>, <code>md</code> (default) or <code></code>lg</code> as an option.",options:R}},o={render:()=>i`
      <cds-overflow-menu>
        ${b({class:`${d}--overflow-menu__icon`,slot:"icon"})}
        <span slot="tooltip-content"> Options </span>
        <cds-overflow-menu-body>
          <cds-overflow-menu-item>Stop app</cds-overflow-menu-item>
          <cds-overflow-menu-item>Restart app</cds-overflow-menu-item>
          <cds-overflow-menu-item>Rename app</cds-overflow-menu-item>
          <cds-overflow-menu-item disabled
            >Clone and move app</cds-overflow-menu-item
          >
          <cds-overflow-menu-item
            >Edit routes and access</cds-overflow-menu-item
          >
          <cds-overflow-menu-item divider danger
            >Delete app</cds-overflow-menu-item
          >
        </cds-overflow-menu-body>
      </cds-overflow-menu>
    `},n={render:()=>i`
      <cds-overflow-menu>
        ${O({class:`${d}--overflow-menu__icon`,slot:"icon"})}
        <span slot="tooltip-content">Options</span>
        <cds-overflow-menu-body>
          <cds-overflow-menu-item>Filter A</cds-overflow-menu-item>
          <cds-overflow-menu-item>Filter B</cds-overflow-menu-item>
        </cds-overflow-menu-body>
      </cds-overflow-menu>
    `},r={args:D,argTypes:S,render:s=>{const{flipped:t,iconDescription:$,open:g,index:h,size:y}=s??{};return i`
      <cds-overflow-menu ?open="${g}" size="${y}" index=${h}>
        ${b({class:`${d}--overflow-menu__icon`,slot:"icon"})}
        <span slot="tooltip-content"> ${$} </span>
        <cds-overflow-menu-body ?flipped="${_(t)}">
          <cds-overflow-menu-item>Stop app</cds-overflow-menu-item>
          <cds-overflow-menu-item>Restart app</cds-overflow-menu-item>
          <cds-overflow-menu-item>Rename app</cds-overflow-menu-item>
          <cds-overflow-menu-item disabled
            >Clone and move app</cds-overflow-menu-item
          >
          <cds-overflow-menu-item
            >Edit routes and access</cds-overflow-menu-item
          >
          <cds-overflow-menu-item divider danger
            >Delete app</cds-overflow-menu-item
          >
        </cds-overflow-menu-body>
      </cds-overflow-menu>
    `}},z={title:"Components/Overflow Menu"};var m,c,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-overflow-menu>
        \${OverflowMenuVertical16({
      class: \`\${prefix}--overflow-menu__icon\`,
      slot: 'icon'
    })}
        <span slot="tooltip-content"> Options </span>
        <cds-overflow-menu-body>
          <cds-overflow-menu-item>Stop app</cds-overflow-menu-item>
          <cds-overflow-menu-item>Restart app</cds-overflow-menu-item>
          <cds-overflow-menu-item>Rename app</cds-overflow-menu-item>
          <cds-overflow-menu-item disabled
            >Clone and move app</cds-overflow-menu-item
          >
          <cds-overflow-menu-item
            >Edit routes and access</cds-overflow-menu-item
          >
          <cds-overflow-menu-item divider danger
            >Delete app</cds-overflow-menu-item
          >
        </cds-overflow-menu-body>
      </cds-overflow-menu>
    \`;
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,a;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-overflow-menu>
        \${Filter16({
      class: \`\${prefix}--overflow-menu__icon\`,
      slot: 'icon'
    })}
        <span slot="tooltip-content">Options</span>
        <cds-overflow-menu-body>
          <cds-overflow-menu-item>Filter A</cds-overflow-menu-item>
          <cds-overflow-menu-item>Filter B</cds-overflow-menu-item>
        </cds-overflow-menu-body>
      </cds-overflow-menu>
    \`;
  }
}`,...(a=(u=n.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};var f,v,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      flipped,
      iconDescription,
      open,
      index,
      size
    } = args ?? {};
    return html\`
      <cds-overflow-menu ?open="\${open}" size="\${size}" index=\${index}>
        \${OverflowMenuVertical16({
      class: \`\${prefix}--overflow-menu__icon\`,
      slot: 'icon'
    })}
        <span slot="tooltip-content"> \${iconDescription} </span>
        <cds-overflow-menu-body ?flipped="\${ifDefined(flipped)}">
          <cds-overflow-menu-item>Stop app</cds-overflow-menu-item>
          <cds-overflow-menu-item>Restart app</cds-overflow-menu-item>
          <cds-overflow-menu-item>Rename app</cds-overflow-menu-item>
          <cds-overflow-menu-item disabled
            >Clone and move app</cds-overflow-menu-item
          >
          <cds-overflow-menu-item
            >Edit routes and access</cds-overflow-menu-item
          >
          <cds-overflow-menu-item divider danger
            >Delete app</cds-overflow-menu-item
          >
        </cds-overflow-menu-body>
      </cds-overflow-menu>
    \`;
  }
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const E=["Default","RenderCustomIcon","Playground"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Playground:r,RenderCustomIcon:n,__namedExportsOrder:E,default:z},Symbol.toStringTag,{value:"Module"}));export{U as O};
