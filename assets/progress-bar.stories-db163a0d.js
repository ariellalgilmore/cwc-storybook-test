import{r as q,s as W,x as g}from"./lit-element-266f0592.js";import{o as h}from"./if-defined-21892bb5.js";import{n as u}from"./property-da2637ab.js";import{p as a,c as X}from"./carbon-element-59fbbccb.js";import{e as k}from"./class-map-4a7e6437.js";import{s as G}from"./16-52e9f813.js";import{s as J}from"./16-d57aeffe.js";import"./with-layer-c4dddb92.js";/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=(e=>(e.ACTIVE="active",e.FINISHED="finished",e.ERROR="error",e))(i||{}),y=(e=>(e.SMALL="small",e.BIG="big",e))(y||{}),l=(e=>(e.DEFAULT="default",e.INLINE="inline",e.INDENTED="indented",e))(l||{});const K=`:root{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-one{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-two{--cds-layer: var(--cds-layer-02, #ffffff);--cds-layer-active: var(--cds-layer-active-02, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-02, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-02, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-02, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-02, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-02, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-02, #a8a8a8);--cds-field: var(--cds-field-02, #ffffff);--cds-field-hover: var(--cds-field-hover-02, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-01, #c6c6c6);--cds-border-subtle-selected: var(--cds-border-subtle-selected-02, #c6c6c6);--cds-border-strong: var(--cds-border-strong-02, #8d8d8d);--cds-border-tile: var(--cds-border-tile-02, #a8a8a8)}.cds--layer-three{--cds-layer: var(--cds-layer-03, #f4f4f4);--cds-layer-active: var(--cds-layer-active-03, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-03, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-03, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-03, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-03, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-03, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-03, #a8a8a8);--cds-field: var(--cds-field-03, #f4f4f4);--cds-field-hover: var(--cds-field-hover-03, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-02, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-03, #c6c6c6);--cds-border-strong: var(--cds-border-strong-03, #8d8d8d);--cds-border-tile: var(--cds-border-tile-03, #c6c6c6)}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--layout--size-xs{--cds-layout-size-height-context: var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context: var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min: var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max: var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context: var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context: var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min: var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max: var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context: var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min: var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max: var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context: var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-condensed, .5rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, .5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}.cds--progress-bar{--cds-layout-density-padding-inline-local: clamp(var(--cds-layout-density-padding-inline-min), var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)), var(--cds-layout-density-padding-inline-max))}.cds--progress-bar__label{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);display:flex;justify-content:space-between;color:var(--cds-text-primary, #161616);margin-block-end:.5rem;min-inline-size:3rem}.cds--progress-bar__label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cds--progress-bar__track{position:relative;background-color:var(--cds-layer);block-size:.5rem;inline-size:100%;min-inline-size:3rem}.cds--progress-bar--big .cds--progress-bar__track{block-size:.5rem}.cds--progress-bar--small .cds--progress-bar__track{block-size:.25rem}.cds--progress-bar__bar{display:block;background-color:currentColor;block-size:100%;color:var(--cds-interactive, #0f62fe);inline-size:100%;transform:scaleX(0);transform-origin:0 center;transition:transform .11s cubic-bezier(.2,0,.38,.9)}[dir=rtl] .cds--progress-bar__bar{transform-origin:100% center}.cds--progress-bar--indeterminate .cds--progress-bar__track:after{position:absolute;animation-duration:1.4s;animation-iteration-count:infinite;animation-name:cds--progress-bar-indeterminate;animation-timing-function:linear;background-image:linear-gradient(90deg,var(--cds-interactive, #0f62fe) 12.5%,transparent 12.5%);background-position-x:0%;background-size:200% 100%;content:"";inset:0}[dir=rtl] .cds--progress-bar--indeterminate .cds--progress-bar__track:after{animation-name:cds--progress-bar-indeterminate-rtl}.cds--progress-bar__helper-text{font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px);color:var(--cds-text-secondary, #525252);margin-block-start:.5rem}.cds--progress-bar__status-icon{flex-shrink:0;margin-inline-start:var(--cds-layout-density-padding-inline-local)}.cds--progress-bar--finished .cds--progress-bar__bar,.cds--progress-bar--finished .cds--progress-bar__status-icon{color:var(--cds-support-success, #24a148)}.cds--progress-bar--error .cds--progress-bar__bar,.cds--progress-bar--error .cds--progress-bar__status-icon,.cds--progress-bar--error .cds--progress-bar__helper-text{color:var(--cds-support-error, #da1e28)}.cds--progress-bar--finished .cds--progress-bar__bar,.cds--progress-bar--error .cds--progress-bar__bar{transform:scaleX(1)}.cds--progress-bar--finished.cds--progress-bar--inline .cds--progress-bar__track,.cds--progress-bar--error.cds--progress-bar--inline .cds--progress-bar__track{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--progress-bar--finished.cds--progress-bar--inline .cds--progress-bar__label,.cds--progress-bar--error.cds--progress-bar--inline .cds--progress-bar__label{flex-shrink:1;justify-content:flex-start;margin-inline-end:0}@keyframes cds--progress-bar-indeterminate{0%{background-position-x:25%}80%,to{background-position-x:-105%}}@keyframes cds--progress-bar-indeterminate-rtl{0%{background-position-x:-105%}80%,to{background-position-x:25%}}.cds--progress-bar--inline{display:flex;align-items:center}.cds--progress-bar--inline .cds--progress-bar__label{flex-shrink:0;margin-block-end:0;margin-inline-end:var(--cds-layout-density-padding-inline-local)}.cds--progress-bar--inline .cds--progress-bar__track{flex-basis:0;flex-grow:1}.cds--progress-bar--inline .cds--progress-bar__helper-text{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--progress-bar--indented .cds--progress-bar__label,.cds--progress-bar--indented .cds--progress-bar__helper-text{padding-inline:var(--cds-layout-density-padding-inline-local)}
`,Q=q(K);var Z=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,o=(e,s,t,r)=>{for(var d=r>1?void 0:r?Y(s,t):s,c=e.length-1,p;c>=0;c--)(p=e[c])&&(d=(r?p(s,t,d):p(d))||d);return r&&d&&Z(s,t,d),d};let n=class extends W{constructor(){super(...arguments),this.max=100,this.size=y.BIG,this.status=i.ACTIVE,this.type=l.DEFAULT}get _cappedValue(){const{value:e,max:s,status:t}=this;let r=e;return r>s&&(r=s),r<0&&(r=0),t===i.ERROR?r=0:t===i.FINISHED&&(r=s),r}updated(e){if(e.has("value")||e.has("max")||e.has("status")){const{_cappedValue:s,max:t,status:r}=this,d=s/t,c=this.shadowRoot.querySelector(`.${a}--progress-bar__bar`);r!=i.ERROR&&r!=i.FINISHED?c.style.transform=`scaleX(${d})`:c.style.transform="none"}}render(){const{_cappedValue:e,helperText:s,hideLabel:t,label:r,max:d,size:c,status:p,type:E,value:_}=this,b=p===i.FINISHED,$=p===i.ERROR,I=!b&&!$&&_==null;let D=null;$?D=G({class:`${a}--progress-bar__status-icon`}):b&&(D=J({class:`${a}--progress-bar__status-icon`}));const j=k({[`${a}--progress-bar`]:!0,[`${a}--progress-bar--${c}`]:!0,[`${a}--progress-bar--${E}`]:!0,[`${a}--progress-bar--indeterminate`]:I,[`${a}--progress-bar--finished`]:b,[`${a}--progress-bar--error`]:$}),U=k({[`${a}--progress-bar__label`]:!0,[`${a}--visually-hidden`]:t});return g` <div class="${j}">
      <div class="${U}">
        <span class="${a}--progress-bar__label-text">${r}</span>
        ${D}
      </div>
      <div
        class="${a}--progress-bar__track"
        role="progressbar"
        aria-busy="${!b}"
        aria-invalid="${$}"
        aria-valuemin="${I?null:0}"
        aria-valuemax="${I?null:d}"
        aria-valuenow="${I?null:e}">
        <div class="${a}--progress-bar__bar"></div>
      </div>
      ${s?g`<div class="${a}--progress-bar__helper-text">
            ${s}
            <div class="${a}--visually-hidden" aria-live="polite">
              ${b?"Done":"Loading"}
            </div>
          </div>`:null}
    </div>`}};n.styles=Q;o([u({type:String,attribute:"helper-text",reflect:!0})],n.prototype,"helperText",2);o([u({type:Boolean,attribute:"hide-label",reflect:!0})],n.prototype,"hideLabel",2);o([u({type:String})],n.prototype,"label",2);o([u({type:Number,reflect:!0})],n.prototype,"max",2);o([u({type:String,reflect:!0})],n.prototype,"size",2);o([u({type:String,reflect:!0})],n.prototype,"status",2);o([u({type:String,reflect:!0})],n.prototype,"type",2);o([u({type:Number,reflect:!0})],n.prototype,"value",2);n=o([X(`${a}-progress-bar`)],n);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const ee={[`Small size (${y.SMALL})`]:y.SMALL,[`Big size (${y.BIG})`]:y.BIG},se={[`Active (${i.ACTIVE})`]:i.ACTIVE,[`Finished (${i.FINISHED})`]:i.FINISHED,[`Error (${i.ERROR})`]:i.ERROR},re={[`Default (${l.DEFAULT})`]:l.DEFAULT,[`Inline (${l.INLINE})`]:l.INLINE,[`Indented (${l.INDENTED})`]:l.INDENTED},te={helperText:"Optional helper text",hideLabel:!1,label:"Progress bar label",max:100,size:y.BIG,status:i.ACTIVE,type:l.DEFAULT,value:75},ae={helperText:{control:"text",description:"The current progress as a textual representation."},hideLabel:{control:"boolean",description:"Whether the label should be visually hidden."},label:{control:"text",description:"A label describing the progress bar."},max:{control:"number",description:"The maximum value."},size:{control:"select",description:"Specify the size of the progress bar.",options:ee},status:{control:"select",description:"Specify the status.",options:se},type:{control:"select",description:"Defines the alignment variant of the progress bar.",options:re},value:{control:"number",description:"The current value."}},v={render:()=>g`
      <cds-progress-bar
        label="Progress bar label"
        helper-text="Optional helper text"
        value="75">
      </cds-progress-bar>
    `},m={render:()=>{let s=0;return setTimeout(()=>{const t=document.querySelector("cds-progress-bar"),r=setInterval(()=>{const d=Math.random()*8;s+d<728?(s=s+d,t.setAttribute("value",`${s}`),t.setAttribute("helper-text",`${s.toFixed(1)}MB of 728MB`)):(clearInterval(r),t.setAttribute("value","728"),t.setAttribute("status",`${i.FINISHED}`),t.setAttribute("helper-text","Done"))},50)},3e3),g`
      <cds-progress-bar
        max="${728}"
        label="Export data"
        helper-text="Fetching assets..."
        status="${i.ACTIVE}">
      </cds-progress-bar>
    `}},x={render:()=>g`
      <cds-progress-bar
        label="Progress bar label"
        helper-text="Optional helper text">
      </cds-progress-bar>
    `},f={render:()=>g`
      <sb-template-layers>
        <cds-progress-bar
          label="Progress bar label"
          helper-text="Optional helper text"
          value="42">
        </cds-progress-bar>
      </sb-template-layers>
    `},z={args:te,argTypes:ae,render:e=>{const{helperText:s,hideLabel:t,label:r,max:d,size:c,status:p,type:E,value:_}=e??{};return g`
      <cds-progress-bar
        max="${h(d)}"
        ?hide-label="${t}"
        label="${h(r)}"
        helper-text="${h(s)}"
        size="${h(c)}"
        status="${h(p)}"
        type="${h(E)}"
        value="${_}">
      </cds-progress-bar>
    `}},ie={title:"Components/Progress Bar"};var T,A,L;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-progress-bar
        label="Progress bar label"
        helper-text="Optional helper text"
        value="75">
      </cds-progress-bar>
    \`;
  }
}`,...(L=(A=v.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var S,w,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const size = 728;
    let progress = 0;
    setTimeout(() => {
      const bar = document.querySelector('cds-progress-bar');
      const interval = setInterval(() => {
        const advancement = Math.random() * 8;
        if (progress + advancement < size) {
          progress = progress + advancement;
          bar!.setAttribute('value', \`\${progress}\`);
          bar!.setAttribute('helper-text', \`\${progress.toFixed(1)}MB of \${size}MB\`);
        } else {
          clearInterval(interval);
          bar!.setAttribute('value', \`\${size}\`);
          bar!.setAttribute('status', \`\${PROGRESS_BAR_STATUS.FINISHED}\`);
          bar!.setAttribute('helper-text', 'Done');
        }
      }, 50);
    }, 3000);
    return html\`
      <cds-progress-bar
        max="\${size}"
        label="Export data"
        helper-text="Fetching assets..."
        status="\${PROGRESS_BAR_STATUS.ACTIVE}">
      </cds-progress-bar>
    \`;
  }
}`,...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var F,O,C;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-progress-bar
        label="Progress bar label"
        helper-text="Optional helper text">
      </cds-progress-bar>
    \`;
  }
}`,...(C=(O=x.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var V,R,B;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <sb-template-layers>
        <cds-progress-bar
          label="Progress bar label"
          helper-text="Optional helper text"
          value="42">
        </cds-progress-bar>
      </sb-template-layers>
    \`;
  }
}`,...(B=(R=f.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var P,M,H;z.parameters={...z.parameters,docs:{...(P=z.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      helperText,
      hideLabel,
      label,
      max,
      size,
      status,
      type,
      value
    } = args ?? {};
    return html\`
      <cds-progress-bar
        max="\${ifDefined(max)}"
        ?hide-label="\${hideLabel}"
        label="\${ifDefined(label)}"
        helper-text="\${ifDefined(helperText)}"
        size="\${ifDefined(size)}"
        status="\${ifDefined(status)}"
        type="\${ifDefined(type)}"
        value="\${value}">
      </cds-progress-bar>
    \`;
  }
}`,...(H=(M=z.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const de=["Default","Example","Indeterminate","WithLayer","Playground"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:v,Example:m,Indeterminate:x,Playground:z,WithLayer:f,__namedExportsOrder:de,default:ie},Symbol.toStringTag,{value:"Module"}));export{he as P};
