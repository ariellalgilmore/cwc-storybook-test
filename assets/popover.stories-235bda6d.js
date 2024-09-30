import{x as s}from"./lit-element-266f0592.js";import"./popover-content-d3dfbbea.js";import"./radio-button-skeleton-3df2ffb6.js";import{P as e}from"./defs-4d9ca86b.js";import{p as l}from"./carbon-element-59fbbccb.js";import{s as m}from"./16-80dd19e9.js";import{s as a}from"./16-c489d79b.js";import"./checkbox-4cbf61d5.js";import{s as u}from"./popover-story-1d9aa45e.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const v={align:{control:"select",options:[e.TOP,e.TOP_LEFT,e.TOP_RIGHT,e.BOTTOM,e.BOTTOM_LEFT,e.BOTTOM_RIGHT,e.LEFT,e.LEFT_BOTTOM,e.LEFT_TOP,e.RIGHT,e.RIGHT_BOTTOM,e.RIGHT_TOP],description:"Specify how the popover should align with the trigger element"},caret:{control:"boolean",description:"Specify whether a caret should be rendered"},highContrast:{control:"boolean",description:"Render the component using the high-contrast variant"},dropShadow:{control:"boolean",description:"Specify whether a drop shadow should be rendered on the popover"},open:{control:"boolean",description:"Specify whether the component is currently open or closed"}},c={render:()=>{const o=g=>{const t=document.querySelector(g);(t==null?void 0:t.hasAttribute("open"))?t==null||t.removeAttribute("open"):t==null||t.setAttribute("open","")};return s`
      <style>
        ${u}
      </style>
      <div class="popover-tabtip-story" style="display: 'flex'">
        <cds-popover open tabTip id="popover-one">
          <button
            aria-label="Settings"
            type="button"
            @click="${()=>o("#popover-one")}">
            ${a()}
          </button>
          <cds-popover-content>
            <div class="p-3">
              <cds-form-item>
                <cds-radio-button-group
                  legend-text="Row height"
                  name="radio-button-group"
                  value="small"
                  style="align-items: flex-start; flex-direction: column">
                  <cds-radio-button
                    label-text="Small"
                    value="small"
                    id="radio-small"></cds-radio-button>
                  <cds-radio-button
                    label-text="Large"
                    value="large"
                    id="radio-large"></cds-radio-button>
                </cds-radio-button-group>
              </cds-form-item>
              <hr />
              <fieldset class="${l}--fieldset">
                <legend class="${l}--label">Edit columns</legend>
                <cds-checkbox
                  checked
                  label-text="Name"
                  id="checkbox-label-1"></cds-checkbox>
                <cds-checkbox
                  checked
                  label-text="Type"
                  id="checkbox-label-2"></cds-checkbox>
                <cds-checkbox
                  checked
                  label-text="Location"
                  id="checkbox-label-3"></cds-checkbox>
              </fieldset>
            </div>
          </cds-popover-content>
        </cds-popover>
        <cds-popover tabTip id="popover-two" align="bottom-right">
          <button
            aria-label="Settings"
            type="button"
            @click="${()=>o("#popover-two")}">
            ${a()}
          </button>
          <cds-popover-content>
            <div class="p-3">
              <cds-form-item>
                <cds-radio-button-group
                  legend-text="Row height"
                  name="radio-button-group"
                  value="small"
                  style="align-items: flex-start; flex-direction: column">
                  <cds-radio-button
                    label-text="Small"
                    value="small"
                    id="radio-small"></cds-radio-button>
                  <cds-radio-button
                    label-text="Large"
                    value="large"
                    id="radio-large"></cds-radio-button>
                </cds-radio-button-group>
              </cds-form-item>
              <hr />
              <fieldset class="${l}--fieldset">
                <legend class="${l}--label">Edit columns</legend>
                <cds-checkbox
                  checked
                  label-text="Name"
                  id="checkbox-label-1"></cds-checkbox>
                <cds-checkbox
                  checked
                  label-text="Type"
                  id="checkbox-label-2"></cds-checkbox>
                <cds-checkbox
                  checked
                  label-text="Location"
                  id="checkbox-label-3"></cds-checkbox>
              </fieldset>
            </div>
          </cds-popover-content>
        </cds-popover>
      </div>
    `}},r={argTypes:v,args:{caret:!0,highContrast:!1,align:e.BOTTOM,dropShadow:!0,open:!0},decorators:[o=>s`<div class="mt-10 flex justify-center">${o()}</div>`],render:o=>s`
      <style>
        ${u}
      </style>
      <cds-popover
        ?open=${o.open}
        ?caret=${o.caret}
        ?highContrast=${o.highContrast}
        align=${o.align}
        ?dropShadow=${o.dropShadow}>
        <div class="playground-trigger">${m()}</div>
        <cds-popover-content>
          <div class="p-3">
            <p class="popover-title">Available storage</p>
            <p class="popover-details">
              This server has 150 GB of block storage remaining.
            </p>
          </div>
        </cds-popover-content>
      </cds-popover>
    `},x={title:"Components/Popover"};var d,n,i;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const handleClick = id => {
      const popover = document.querySelector(id);
      const open = popover?.hasAttribute('open');
      open ? popover?.removeAttribute('open') : popover?.setAttribute('open', '');
    };
    return html\`
      <style>
        \${styles}
      </style>
      <div class="popover-tabtip-story" style="display: 'flex'">
        <cds-popover open tabTip id="popover-one">
          <button
            aria-label="Settings"
            type="button"
            @click="\${() => handleClick('#popover-one')}">
            \${Settings16()}
          </button>
          <cds-popover-content>
            <div class="p-3">
              <cds-form-item>
                <cds-radio-button-group
                  legend-text="Row height"
                  name="radio-button-group"
                  value="small"
                  style="align-items: flex-start; flex-direction: column">
                  <cds-radio-button
                    label-text="Small"
                    value="small"
                    id="radio-small"></cds-radio-button>
                  <cds-radio-button
                    label-text="Large"
                    value="large"
                    id="radio-large"></cds-radio-button>
                </cds-radio-button-group>
              </cds-form-item>
              <hr />
              <fieldset class="\${prefix}--fieldset">
                <legend class="\${prefix}--label">Edit columns</legend>
                <cds-checkbox
                  checked
                  label-text="Name"
                  id="checkbox-label-1"></cds-checkbox>
                <cds-checkbox
                  checked
                  label-text="Type"
                  id="checkbox-label-2"></cds-checkbox>
                <cds-checkbox
                  checked
                  label-text="Location"
                  id="checkbox-label-3"></cds-checkbox>
              </fieldset>
            </div>
          </cds-popover-content>
        </cds-popover>
        <cds-popover tabTip id="popover-two" align="bottom-right">
          <button
            aria-label="Settings"
            type="button"
            @click="\${() => handleClick('#popover-two')}">
            \${Settings16()}
          </button>
          <cds-popover-content>
            <div class="p-3">
              <cds-form-item>
                <cds-radio-button-group
                  legend-text="Row height"
                  name="radio-button-group"
                  value="small"
                  style="align-items: flex-start; flex-direction: column">
                  <cds-radio-button
                    label-text="Small"
                    value="small"
                    id="radio-small"></cds-radio-button>
                  <cds-radio-button
                    label-text="Large"
                    value="large"
                    id="radio-large"></cds-radio-button>
                </cds-radio-button-group>
              </cds-form-item>
              <hr />
              <fieldset class="\${prefix}--fieldset">
                <legend class="\${prefix}--label">Edit columns</legend>
                <cds-checkbox
                  checked
                  label-text="Name"
                  id="checkbox-label-1"></cds-checkbox>
                <cds-checkbox
                  checked
                  label-text="Type"
                  id="checkbox-label-2"></cds-checkbox>
                <cds-checkbox
                  checked
                  label-text="Location"
                  id="checkbox-label-3"></cds-checkbox>
              </fieldset>
            </div>
          </cds-popover-content>
        </cds-popover>
      </div>
    \`;
  }
}`,...(i=(n=c.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,b,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: controls,
  args: {
    caret: true,
    highContrast: false,
    align: POPOVER_ALIGNMENT.BOTTOM,
    dropShadow: true,
    open: true
  },
  decorators: [story => html\`<div class="mt-10 flex justify-center">\${story()}</div>\`],
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <cds-popover
        ?open=\${args.open}
        ?caret=\${args.caret}
        ?highContrast=\${args.highContrast}
        align=\${args.align}
        ?dropShadow=\${args.dropShadow}>
        <div class="playground-trigger">\${Checkbox16()}</div>
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
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const k=["TabTip","Playground"],L=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,TabTip:c,__namedExportsOrder:k,default:x},Symbol.toStringTag,{value:"Module"}));export{L as P};
