import{r as M,x as h}from"./lit-element-266f0592.js";import{e as f}from"./class-map-4a7e6437.js";import{n as _}from"./property-da2637ab.js";import{a as P}from"./query-b9d3c2af.js";import{o as u}from"./if-defined-21892bb5.js";import{p as s,c as D}from"./carbon-element-59fbbccb.js";import{C as H}from"./checkbox-4cbf61d5.js";import{H as R,a as j}from"./host-listener-0f7877ac.js";import"./stack-4f2eefe9.js";/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=(e=>(e.REGULAR="",e.SMALL="sm",e))(p||{});const E=`.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--toggle{display:inline-block;user-select:none}.cds--toggle__label-text{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);display:block;color:var(--cds-text-secondary, #525252);margin-block-end:1rem}.cds--toggle__button{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--toggle__button:focus{outline:none}.cds--toggle__appearance{display:inline-grid;align-items:center;column-gap:.5rem;cursor:pointer;grid-template-columns:max-content max-content}.cds--toggle__switch{position:relative;border-radius:.75rem;background-color:var(--cds-toggle-off, #8d8d8d);block-size:1.5rem;inline-size:3rem;transition:background-color 70ms cubic-bezier(.2,0,1,.9)}.cds--toggle__switch:before{position:absolute;border-radius:50%;background-color:var(--cds-icon-on-color, #ffffff);block-size:1.125rem;content:"";inline-size:1.125rem;inset-block-start:.1875rem;inset-inline-start:.1875rem;transition:transform 70ms cubic-bezier(.2,0,1,.9)}@media screen and (prefers-reduced-motion: reduce){.cds--toggle__switch:before{transition:none}}.cds--toggle__button:focus+.cds--toggle__label .cds--toggle__switch,.cds--toggle:not(.cds--toggle--disabled):active .cds--toggle__switch{box-shadow:0 0 0 1px var(--cds-focus-inset, #ffffff),0 0 0 3px var(--cds-focus, #0f62fe)}.cds--toggle__switch--checked{background-color:var(--cds-support-success, #24a148)}.cds--toggle__switch--checked:before{transform:translate(1.5rem)}.cds--toggle__text{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);color:var(--cds-text-primary, #161616)}.cds--toggle__appearance--sm .cds--toggle__switch{block-size:1rem;inline-size:2rem}.cds--toggle__appearance--sm .cds--toggle__switch:before{block-size:.625rem;inline-size:.625rem}.cds--toggle__appearance--sm .cds--toggle__switch--checked:before{transform:translate(1rem)}.cds--toggle__check{position:absolute;block-size:.3125rem;fill:var(--cds-support-success, #24a148);inline-size:.375rem;inset-block-start:.375rem;inset-inline-end:.3125rem;visibility:hidden}.cds--toggle__switch--checked .cds--toggle__check{visibility:visible}.cds--toggle--disabled .cds--toggle__appearance,:host(cds-toggle[disabled]) .cds--toggle__appearance{cursor:not-allowed}.cds--toggle--disabled .cds--toggle__label-text,:host(cds-toggle[disabled]) .cds--toggle__label-text,.cds--toggle--disabled .cds--toggle__text,:host(cds-toggle[disabled]) .cds--toggle__text{color:var(--cds-text-disabled, rgba(22, 22, 22, .25))}.cds--toggle--disabled .cds--toggle__switch,:host(cds-toggle[disabled]) .cds--toggle__switch{background-color:var(--cds-button-disabled, #c6c6c6)}.cds--toggle--disabled .cds--toggle__switch:before,:host(cds-toggle[disabled]) .cds--toggle__switch:before{background-color:var(--cds-icon-on-color-disabled, #8d8d8d)}.cds--toggle--disabled .cds--toggle__check,:host(cds-toggle[disabled]) .cds--toggle__check{fill:var(--cds-button-disabled, #c6c6c6)}.cds--toggle--readonly .cds--toggle__appearance,:host(cds-toggle[read-only]) .cds--toggle__appearance{cursor:default}.cds--toggle--readonly .cds--toggle__switch,:host(cds-toggle[read-only]) .cds--toggle__switch{border:1px solid var(--cds-icon-disabled, rgba(22, 22, 22, .25));background-color:transparent}.cds--toggle--readonly .cds--toggle__switch:before,:host(cds-toggle[read-only]) .cds--toggle__switch:before{background-color:var(--cds-text-primary, #161616);inset-block-start:.125rem;inset-inline-start:.125rem}.cds--toggle--readonly .cds--toggle__check,:host(cds-toggle[read-only]) .cds--toggle__check{fill:var(--cds-background, #ffffff);inset-block-start:.3125rem;inset-inline-end:.25rem}.cds--toggle--readonly .cds--toggle__text,:host(cds-toggle[read-only]) .cds--toggle__text{cursor:text;user-select:text}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--toggle__switch,.cds--toggle__switch:before{outline:1px solid transparent}}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--toggle__button:focus+.cds--toggle__label .cds--toggle__switch,.cds--toggle:not(.cds--toggle--disabled):active .cds--toggle__switch{color:Highlight;outline:1px solid Highlight}}.cds--toggle--skeleton{display:flex;align-items:center}.cds--toggle--skeleton .cds--toggle__skeleton-circle{position:relative;overflow:hidden;background:var(--cds-skeleton-background, #e8e8e8);border-radius:50%;block-size:1.125rem;inline-size:1.125rem}.cds--toggle--skeleton .cds--toggle__skeleton-circle:before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element, #c6c6c6);block-size:100%;content:"";inline-size:200%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion: reduce){.cds--toggle--skeleton .cds--toggle__skeleton-circle:before{animation:none}}.cds--toggle--skeleton .cds--toggle__skeleton-rectangle{position:relative;padding:0;border:none;background:var(--cds-skeleton-background, #e8e8e8);box-shadow:none;pointer-events:none;block-size:.5rem;inline-size:1.5rem;margin-inline-start:.5rem}.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:hover,.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:focus,.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:active{border:none;cursor:default;outline:none}.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element, #c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion: reduce){.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:before{animation:none}}[dir=rtl] .cds--toggle__switch--checked:before{transform:translate(-1.5rem)}[dir=rtl] .cds--toggle__appearance--sm .cds--toggle__switch--checked:before{transform:translate(-1rem)}:host(cds-toggle){outline:none}:host(cds-toggle[disabled]) .cds--toggle__appearance{cursor:not-allowed}
`,K=M(E);var N=Object.defineProperty,U=Object.getOwnPropertyDescriptor,a=(e,t,l,c)=>{for(var o=c>1?void 0:c?U(t,l):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(c?n(t,l,o):n(o))||o);return c&&o&&N(t,l,o),o};let r=class extends R(H){constructor(){super(...arguments),this._handleKeydown=async e=>{const{key:t}=e;t===" "&&this._handleChange()},this.labelA="",this.hideLabel=!1,this.readOnly=!1,this.size=p.REGULAR,this.labelB=""}_handleChange(){const{checked:e,indeterminate:t}=this._checkboxNode;if(this.disabled||this.readOnly)return;this.checked=!e,this.indeterminate=t;const{eventChange:l}=this.constructor;this.dispatchEvent(new CustomEvent(l,{bubbles:!0,composed:!0,detail:{indeterminate:t}}))}_renderCheckmark(){if(this.size===p.SMALL)return h`
      <svg
        class="${s}--toggle__check"
        width="6px"
        height="5px"
        viewBox="0 0 6 5">
        <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
      </svg>
    `}render(){const{checked:e,disabled:t,labelText:l,hideLabel:c,id:o,name:i,size:n,labelA:m,labelB:O,value:C,_handleChange:A}=this,S=f({[`${s}--toggle__appearance`]:!0,[`${s}--toggle__appearance--${n}`]:n}),B=f({[`${s}--toggle__switch`]:!0,[`${s}--toggle__switch--checked`]:e}),X=e?m:O;return h`
      <button
        class="${s}--toggle__button"
        role="switch"
        type="button"
        aria-checked=${e}
        aria-lable=${l}
        .checked="${e}"
        name="${u(i)}"
        value="${u(C)}"
        ?disabled=${t}
        id="${o}"></button>
      <label for="${o}" class="${s}--toggle__label">
        <span class="${s}--toggle__label-text">${l}</span>
        <div class="${S}">
          <div class="${B}" @click=${A}>
            ${this._renderCheckmark()}
          </div>
          <span
            ?hidden="${c}"
            class="${s}--toggle__text"
            aria-hidden="true"
            >${X}</span
          >
        </div>
      </label>
    `}static get eventChange(){return`${s}-toggle-changed`}};r.styles=K;a([P("button")],r.prototype,"_checkboxNode",2);a([j("keydown")],r.prototype,"_handleKeydown",2);a([_({attribute:"label-a"})],r.prototype,"labelA",2);a([_({reflect:!0,type:Boolean})],r.prototype,"hideLabel",2);a([_({reflect:!0,attribute:"read-only",type:Boolean})],r.prototype,"readOnly",2);a([_({reflect:!0})],r.prototype,"size",2);a([_({attribute:"label-b"})],r.prototype,"labelB",2);r=a([D(`${s}-toggle`)],r);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const W={"Regular size":null,[`Small size (${p.SMALL})`]:p.SMALL},q={labelA:"On",labelB:"Off",checked:!0},F={disabled:{control:"boolean",description:"Whether this control should be disabled"},hideLabel:{control:"boolean",description:"If true, the side labels (props.labelA and props.labelB) will be replaced by props.labelText (if passed), so that the toggle doesn't render a top label."},labelA:{control:"text",description:"The text for the checked state."},labelB:{control:"text",description:"The text for the unchecked state"},labelText:{control:"text",description:"The text that is read for the control"},readonly:{control:"boolean",description:"Whether the toggle should be read-only"},size:{control:"radio",description:"Specify the size of the Toggle. Currently only supports 'sm' or 'md' (default)",options:W},checked:{control:"boolean",description:"Specify whether the control is toggled"}},d={render:()=>h`
    <cds-toggle
      checked
      label-a="On"
      label-b="Off"
      label-text="Toggle element label"></cds-toggle>
  `},g={render:()=>h`
    <cds-toggle
      checked
      label-a="On"
      label-b="Off"
      label-text="Toggle element label"
      size="sm"></cds-toggle>
  `},b={argTypes:F,args:q,render:({disabled:e,hideLabel:t,labelA:l,labelB:c,labelText:o,readonly:i,size:n,checked:m})=>h`
    <cds-toggle
      label-b="${c}"
      label-a="${l}"
      ?disabled="${e}"
      ?hideLabel="${t}"
      label-text="${o}"
      size="${n}"
      ?read-only=${i}
      ?checked="${m}"></cds-toggle>
  `},G={title:"Components/Toggle"};var k,y,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <cds-toggle
      checked
      label-a="On"
      label-b="Off"
      label-text="Toggle element label"></cds-toggle>
  \`
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,w,$;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <cds-toggle
      checked
      label-a="On"
      label-b="Off"
      label-text="Toggle element label"
      size="sm"></cds-toggle>
  \`
}`,...($=(w=g.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var z,T,L;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    disabled,
    hideLabel,
    labelA,
    labelB,
    labelText,
    readonly,
    size,
    checked
  }) => html\`
    <cds-toggle
      label-b="\${labelB}"
      label-a="\${labelA}"
      ?disabled="\${disabled}"
      ?hideLabel="\${hideLabel}"
      label-text="\${labelText}"
      size="\${size}"
      ?read-only=\${readonly}
      ?checked="\${checked}"></cds-toggle>
  \`
}`,...(L=(T=b.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const I=["Default","SmallToggle","Playground"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Playground:b,SmallToggle:g,__namedExportsOrder:I,default:G},Symbol.toStringTag,{value:"Module"}));export{le as T};
