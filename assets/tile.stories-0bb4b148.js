import{x as c}from"./lit-element-266f0592.js";import{o as e}from"./if-defined-21892bb5.js";import"./tile-group-d432cb10.js";import re from"./tile-82d46979.js";import"./with-layer-c4dddb92.js";import{F as k}from"./shared-enums-5977151c.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./link-f0981e2c.js";import"./query-b9d3c2af.js";import"./focus-73f58502.js";import"./16-a57556b1.js";import"./spread-61d77317.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./16-80dd19e9.js";import"./16-d57aeffe.js";import"./radio-group-manager-b52ff8da.js";import"./jsx-runtime-3046aa02.js";import"./index-651d3ade.js";import"./iframe-c15361be.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-966e7ddf.js";import"./storybook-cdn-4cc58f60.js";import"./package-7aeb10bd.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const de={Regular:null,[`Light (${k.LIGHT})`]:k.LIGHT},ne={checkmarkLabel:"",colorScheme:null,name:"selectable-tile",value:"",onInput:"input"},v={colorScheme:{control:"select",description:"Color scheme (color-scheme)",options:de}},te={href:"https://example.com"},le={href:{control:"text",description:"Href for clickable UI (href)"}},ae={checkmarkLabel:{control:"text",description:"Label text for the checkmark icon (checkmark-label)"},...v,name:{control:"text",description:"Name (name)"},value:{control:"text",description:"Value (value)"},onInput:{action:"input",table:{disable:!0}}},se={...ae,selected:{control:"boolean",description:"Selected (selected)"}},oe={colorScheme:null,expanded:!1,disableChange:!1,onBeforeChange:"cds-expandable-tile-beingchanged",onChange:"cds-expandable-tile-changed"},ce={...v,expanded:{control:"boolean",description:"Expanded (expanded)"},disableChange:{control:"boolean",description:"Disable user-initiated change in expanded state (Call event.preventDefault() in cds-expandable-tile-beingchanged event)"},onBeforeChange:{action:"cds-expandable-tile-beingchanged",table:{disable:!0}},onChange:{action:"cds-expandable-tile-changed",table:{disable:!0}}},s={args:te,argTypes:le,render:({href:n})=>c`
    <cds-clickable-tile href="${e(n)}">
      Clickable tile
    </cds-clickable-tile>
  `},i={args:te,argTypes:le,render:({href:n})=>c`
    <sb-template-layers>
      <cds-clickable-tile href="${e(n)}">
        Clickable tile
      </cds-clickable-tile>
    </sb-template-layers>
  `},p={argTypes:v,render:({colorScheme:n})=>c`
    <cds-tile color-scheme="${e(n)}">
      Default tile
      <a href="https://example.com">Link</a>
    </cds-tile>
  `},h={argTypes:v,render:({colorScheme:n})=>c`
    <sb-template-layers>
      <cds-tile color-scheme="${e(n)}">
        Default layer
        <a href="https://example.com">Link</a>
      </cds-tile>
    </sb-template-layers>
  `},m={args:oe,argTypes:ce,render:({colorScheme:n,expanded:t,disableChange:l,onBeforeChange:a,onChange:o})=>{const r=d=>{a(d),l&&d.preventDefault()};return c`
      <cds-expandable-tile
        color-scheme="${e(n)}"
        ?expanded="${t}"
        @cds-expandable-tile-beingchanged=${r}
        @cds-expandable-tile-changed=${o}>
        <cds-tile-above-the-fold-content
          slot="above-the-fold-content"
          style="height: 200px">
          Above the fold content here
        </cds-tile-above-the-fold-content>
        <cds-tile-below-the-fold-content style="height: 300px">
          Below the fold content here
        </cds-tile-below-the-fold-content>
      </cds-expandable-tile>
    `}},b={args:oe,argTypes:ce,render:({colorScheme:n,expanded:t,disableChange:l,onBeforeChange:a,onChange:o})=>{const r=d=>{a(d),l&&d.preventDefault()};return c`
      <cds-expandable-tile
        with-interactive
        color-scheme="${e(n)}"
        ?expanded="${t}"
        @cds-expandable-tile-beingchanged=${r}
        @cds-expandable-tile-changed=${o}>
        <cds-tile-above-the-fold-content
          slot="above-the-fold-content"
          style="height: 200px">
          Above the fold content here
          <div style="padding-top:1rem;">
            <cds-button>Example</cds-button>
          </div>
        </cds-tile-above-the-fold-content>
        <cds-tile-below-the-fold-content style="height: 300px">
          Below the fold content here
          <cds-text-input></cds-text-input>
        </cds-tile-below-the-fold-content>
      </cds-expandable-tile>
    `}},f={render:({colorScheme:n,expanded:t,disableChange:l,onBeforeChange:a,onChange:o})=>{const r=d=>{a(d),l&&d.preventDefault()};return c`
      <sb-template-layers>
        <cds-expandable-tile
          style="width:400px"
          color-scheme="${e(n)}"
          ?expanded="${t}"
          @cds-expandable-tile-beingchanged=${r}
          @cds-expandable-tile-changed=${o}>
          <cds-tile-above-the-fold-content
            slot="above-the-fold-content"
            style="height: 200px">
            Above the fold content here
          </cds-tile-above-the-fold-content>
          <cds-tile-below-the-fold-content style="height: 300px">
            Below the fold content here
          </cds-tile-below-the-fold-content>
        </cds-expandable-tile>
      </sb-template-layers>
    `}},g={args:ne,argTypes:se,render:({checkmarkLabel:n,colorScheme:t,name:l,selected:a,value:o,onInput:r})=>c`
    <cds-tile-group>
      <cds-selectable-tile
        checkmark-label="${e(n)}"
        color-scheme="${e(t)}"
        name="${e(l)}"
        ?selected="${a}"
        value="${e(o)}"
        @input="${r}">
        Option 1
      </cds-selectable-tile>
      <cds-selectable-tile
        checkmark-label="${e(n)}"
        color-scheme="${e(t)}"
        name="${e(l)}"
        ?selected="${a}"
        value="${e(o)}"
        @input="${r}">
        Option 2
      </cds-selectable-tile>
      <cds-selectable-tile
        checkmark-label="${e(n)}"
        color-scheme="${e(t)}"
        name="${e(l)}"
        ?selected="${a}"
        value="${e(o)}"
        @input="${r}">
        Option 3
      </cds-selectable-tile>
    </cds-tile-group>
  `},u={args:ne,argTypes:ae,render:({checkmarkLabel:n,colorScheme:t,name:l,value:a,onInput:o})=>c`
    <cds-tile-group>
      <legend slot="legend">Radio tile group</legend>
      <cds-radio-tile
        checkmark-label="${e(n)}"
        color-scheme="${e(t)}"
        name="${e(l)}"
        value="${e(a)}"
        @input="${o}">
        Option 1
      </cds-radio-tile>
      <cds-radio-tile
        checkmark-label="${e(n)}"
        color-scheme="${e(t)}"
        name="${e(l)}"
        value="${e(a)}"
        @input="${o}">
        Option 2
      </cds-radio-tile>
      <cds-radio-tile
        checkmark-label="${e(n)}"
        color-scheme="${e(t)}"
        name="${e(l)}"
        value="${e(a)}"
        @input="${o}">
        Option 3
      </cds-radio-tile>
    </cds-tile-group>
  `},$={render:()=>c`
    <sb-template-layers>
      <cds-tile-group>
        <legend slot="legend">Radio tile group</legend>
        <cds-radio-tile name="option-1a"> Option 1 </cds-radio-tile>
        <cds-radio-tile name="option-2a"> Option 2 </cds-radio-tile>
      </cds-tile-group>
    </sb-template-layers>
  `},x={render:()=>c` <cds-selectable-tile> Default tile </cds-selectable-tile> `},Ne={title:"Components/Tile",decorators:[n=>c` <div>${n()}</div> `],parameters:{actions:{argTypesRegex:"^on.*"},docs:{page:re}}};var C,y,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: defaultHref,
  argTypes: hrefControl,
  render: ({
    href
  }) => html\`
    <cds-clickable-tile href="\${ifDefined(href)}">
      Clickable tile
    </cds-clickable-tile>
  \`
}`,...(D=(y=s.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var S,L,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: defaultHref,
  argTypes: hrefControl,
  render: ({
    href
  }) => html\`
    <sb-template-layers>
      <cds-clickable-tile href="\${ifDefined(href)}">
        Clickable tile
      </cds-clickable-tile>
    </sb-template-layers>
  \`
}`,...(B=(L=i.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var w,T,O;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  argTypes: colorSchemeControl,
  render: ({
    colorScheme
  }) => html\`
    <cds-tile color-scheme="\${ifDefined(colorScheme)}">
      Default tile
      <a href="https://example.com">Link</a>
    </cds-tile>
  \`
}`,...(O=(T=p.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var E,A,R;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  argTypes: colorSchemeControl,
  render: ({
    colorScheme
  }) => html\`
    <sb-template-layers>
      <cds-tile color-scheme="\${ifDefined(colorScheme)}">
        Default layer
        <a href="https://example.com">Link</a>
      </cds-tile>
    </sb-template-layers>
  \`
}`,...(R=(A=h.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var I,W,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: expandableArgs,
  argTypes: expandableControls,
  render: ({
    colorScheme,
    expanded,
    disableChange,
    onBeforeChange,
    onChange
  }) => {
    const handleBeforeChanged = (event: CustomEvent) => {
      onBeforeChange(event);
      if (disableChange) {
        event.preventDefault();
      }
    };
    return html\`
      <cds-expandable-tile
        color-scheme="\${ifDefined(colorScheme)}"
        ?expanded="\${expanded}"
        @cds-expandable-tile-beingchanged=\${handleBeforeChanged}
        @cds-expandable-tile-changed=\${onChange}>
        <cds-tile-above-the-fold-content
          slot="above-the-fold-content"
          style="height: 200px">
          Above the fold content here
        </cds-tile-above-the-fold-content>
        <cds-tile-below-the-fold-content style="height: 300px">
          Below the fold content here
        </cds-tile-below-the-fold-content>
      </cds-expandable-tile>
    \`;
  }
}`,...(H=(W=m.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var M,_,F;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: expandableArgs,
  argTypes: expandableControls,
  render: ({
    colorScheme,
    expanded,
    disableChange,
    onBeforeChange,
    onChange
  }) => {
    const handleBeforeChanged = (event: CustomEvent) => {
      onBeforeChange(event);
      if (disableChange) {
        event.preventDefault();
      }
    };
    return html\`
      <cds-expandable-tile
        with-interactive
        color-scheme="\${ifDefined(colorScheme)}"
        ?expanded="\${expanded}"
        @cds-expandable-tile-beingchanged=\${handleBeforeChanged}
        @cds-expandable-tile-changed=\${onChange}>
        <cds-tile-above-the-fold-content
          slot="above-the-fold-content"
          style="height: 200px">
          Above the fold content here
          <div style="padding-top:1rem;">
            <cds-button>Example</cds-button>
          </div>
        </cds-tile-above-the-fold-content>
        <cds-tile-below-the-fold-content style="height: 300px">
          Below the fold content here
          <cds-text-input></cds-text-input>
        </cds-tile-below-the-fold-content>
      </cds-expandable-tile>
    \`;
  }
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var G,N,U;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: ({
    colorScheme,
    expanded,
    disableChange,
    onBeforeChange,
    onChange
  }) => {
    const handleBeforeChanged = (event: CustomEvent) => {
      onBeforeChange(event);
      if (disableChange) {
        event.preventDefault();
      }
    };
    return html\`
      <sb-template-layers>
        <cds-expandable-tile
          style="width:400px"
          color-scheme="\${ifDefined(colorScheme)}"
          ?expanded="\${expanded}"
          @cds-expandable-tile-beingchanged=\${handleBeforeChanged}
          @cds-expandable-tile-changed=\${onChange}>
          <cds-tile-above-the-fold-content
            slot="above-the-fold-content"
            style="height: 200px">
            Above the fold content here
          </cds-tile-above-the-fold-content>
          <cds-tile-below-the-fold-content style="height: 300px">
            Below the fold content here
          </cds-tile-below-the-fold-content>
        </cds-expandable-tile>
      </sb-template-layers>
    \`;
  }
}`,...(U=(N=f.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var V,X,j;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: multiSelectableControls,
  render: ({
    checkmarkLabel,
    colorScheme,
    name,
    selected,
    value,
    onInput
  }) => html\`
    <cds-tile-group>
      <cds-selectable-tile
        checkmark-label="\${ifDefined(checkmarkLabel)}"
        color-scheme="\${ifDefined(colorScheme)}"
        name="\${ifDefined(name)}"
        ?selected="\${selected}"
        value="\${ifDefined(value)}"
        @input="\${onInput}">
        Option 1
      </cds-selectable-tile>
      <cds-selectable-tile
        checkmark-label="\${ifDefined(checkmarkLabel)}"
        color-scheme="\${ifDefined(colorScheme)}"
        name="\${ifDefined(name)}"
        ?selected="\${selected}"
        value="\${ifDefined(value)}"
        @input="\${onInput}">
        Option 2
      </cds-selectable-tile>
      <cds-selectable-tile
        checkmark-label="\${ifDefined(checkmarkLabel)}"
        color-scheme="\${ifDefined(colorScheme)}"
        name="\${ifDefined(name)}"
        ?selected="\${selected}"
        value="\${ifDefined(value)}"
        @input="\${onInput}">
        Option 3
      </cds-selectable-tile>
    </cds-tile-group>
  \`
}`,...(j=(X=g.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var q,z,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: radioControls,
  render: ({
    checkmarkLabel,
    colorScheme,
    name,
    value,
    onInput
  }) => html\`
    <cds-tile-group>
      <legend slot="legend">Radio tile group</legend>
      <cds-radio-tile
        checkmark-label="\${ifDefined(checkmarkLabel)}"
        color-scheme="\${ifDefined(colorScheme)}"
        name="\${ifDefined(name)}"
        value="\${ifDefined(value)}"
        @input="\${onInput}">
        Option 1
      </cds-radio-tile>
      <cds-radio-tile
        checkmark-label="\${ifDefined(checkmarkLabel)}"
        color-scheme="\${ifDefined(colorScheme)}"
        name="\${ifDefined(name)}"
        value="\${ifDefined(value)}"
        @input="\${onInput}">
        Option 2
      </cds-radio-tile>
      <cds-radio-tile
        checkmark-label="\${ifDefined(checkmarkLabel)}"
        color-scheme="\${ifDefined(colorScheme)}"
        name="\${ifDefined(name)}"
        value="\${ifDefined(value)}"
        @input="\${onInput}">
        Option 3
      </cds-radio-tile>
    </cds-tile-group>
  \`
}`,...(J=(z=u.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,P,Q;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => html\`
    <sb-template-layers>
      <cds-tile-group>
        <legend slot="legend">Radio tile group</legend>
        <cds-radio-tile name="option-1a"> Option 1 </cds-radio-tile>
        <cds-radio-tile name="option-2a"> Option 2 </cds-radio-tile>
      </cds-tile-group>
    </sb-template-layers>
  \`
}`,...(Q=(P=$.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:"{\n  render: () => html` <cds-selectable-tile> Default tile </cds-selectable-tile> `\n}",...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ue=["clickable","ClickableWithLayer","Default","DefaultWithLayer","expandable","ExpandableWithInteractive","ExpandableWithLayer","MultiSelect","Radio","RadioWithLayer","Selectable"];export{i as ClickableWithLayer,p as Default,h as DefaultWithLayer,b as ExpandableWithInteractive,f as ExpandableWithLayer,g as MultiSelect,u as Radio,$ as RadioWithLayer,x as Selectable,Ue as __namedExportsOrder,s as clickable,Ne as default,m as expandable};
