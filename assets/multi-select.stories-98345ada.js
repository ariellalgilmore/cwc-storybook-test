import{x as t}from"./lit-element-266f0592.js";import{o as e}from"./if-defined-21892bb5.js";import{S as i}from"./multi-select-item-afab8586.js";import"./layer-d66987ad.js";import"./with-layer-c4dddb92.js";import{a as s,D as r,b as u}from"./dropdown-item-7b096599.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const Z={[`Small size (${s.SMALL})`]:s.SMALL,[`Medium size (${s.MEDIUM})`]:s.MEDIUM,[`Large size (${s.LARGE})`]:s.LARGE},q={Top:r.TOP,Bottom:r.BOTTOM},H={Default:null,[`Inline (${u.INLINE})`]:u.INLINE},J={[`Top (${i.TOP})`]:i.TOP,[`Fixed (${i.FIXED})`]:i.FIXED,[`Top-after-reopen (${i.TOP_AFTER_REOPEN})`]:i.TOP_AFTER_REOPEN},Q={clearSelectionDescription:"Total items selected: ",clearSelectionText:"To clear selection, press Delete or Backspace.",disabled:!1,direction:r.BOTTOM,helperText:"Optional helper text",hideLabel:!1,locale:"en",invalid:!1,invalidText:"whoopsie!",titleText:"This is a MultiSelect Title",label:"This is a label",size:s.MEDIUM,selectionFeedback:i.TOP_AFTER_REOPEN,readOnly:!1,type:null,warn:!1,warnText:"whoopsie!"},V={clearSelectionDescription:{control:"text",description:"Specify the text that should be read for screen readers that describes total items selected."},clearSelectionText:{control:"text",description:"Specify the text that should be read for screen readers to clear selection."},disabled:{control:"boolean",description:"Disable the control."},direction:{control:"select",description:"Specify the direction of the multiselect dropdown. Can be either top or bottom.",options:q},helperText:{control:"text",description:"Provide helper text that is used alongside the control label for additional help."},hideLabel:{control:"boolean",description:"Specify whether the title text should be hidden or not."},locale:{control:"text",description:"Specify the locale of the control. Used for the default <code>compareItems</code> used for sorting the list of items in the control."},invalid:{control:"boolean",description:"Is the current selection invalid?"},invalidText:{control:"text",description:"If invalid, what is the error?"},titleText:{control:"text",description:"Provide text to be used in a <code>&lt;label&gt;</code> element that is tied to the multiselect via ARIA attributes."},label:{control:"text",description:"Generic <code>label</code> that will be used as the textual representation of what this field is for."},size:{control:"select",description:"Specify the size of the ListBox. Currently supports either <code>sm</code>, <code>md</code> or <code>lg</code> as an option.",options:Z},selectionFeedback:{control:"select",description:"Specify feedback (mode) of the selection. <code>top</code>: selected item jumps to top <code>fixed</code>: selected item stays at it's position <code>top-after-reopen</code>: selected item jump to top after reopen dropdown.",options:J},readOnly:{control:"boolean",description:"Whether or not the Dropdown is readonly."},type:{control:"select",description:"Specify 'inline' to create an inline multi-select.",options:H},warn:{control:"boolean",description:"Specify whether the control is currently in warning state."},warnText:{control:"text",description:"Provide the text that is displayed when the control is in warning state."}},c={decorators:[l=>t` <div style="width:300px">${l()}</div> `],render:()=>t`
      <cds-multi-select
        title-text="Multiselect title"
        label="Multiselect label"
        helper-text="This is helper text">
        <cds-multi-select-item value="example"
          >An example option that is really long to show what should be done to
          handle long text</cds-multi-select-item
        >
        <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
        <cds-multi-select-item value="cloudFoundry"
          >Option 2</cds-multi-select-item
        >
        <cds-multi-select-item disabled value="staging"
          >Option 3 - a disabled item</cds-multi-select-item
        >
        <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
        <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
      </cds-multi-select>
    `},n={decorators:[l=>t` <div style="width:300px">${l()}</div> `],render:()=>t`
      <cds-multi-select
        filterable="true"
        title-text="Multiselect title"
        helper-text="This is helper text">
        <cds-multi-select-item value="example"
          >An example option that is really long to show what should be done to
          handle long text</cds-multi-select-item
        >
        <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
        <cds-multi-select-item value="cloudFoundry"
          >Option 2</cds-multi-select-item
        >
        <cds-multi-select-item disabled value="staging"
          >Option 3 - a disabled item</cds-multi-select-item
        >
        <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
        <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
      </cds-multi-select>
    `},o={render:()=>t`
      <sb-template-layers>
        <div style="width:300px">
          <cds-multi-select
            filterable="true"
            title-text="Multiselect title"
            helper-text="This is helper text">
            <cds-multi-select-item value="example"
              >An example option that is really long to show what should be done
              to handle long text</cds-multi-select-item
            >
            <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
            <cds-multi-select-item value="cloudFoundry"
              >Option 2</cds-multi-select-item
            >
            <cds-multi-select-item disabled value="staging"
              >Option 3 - a disabled item</cds-multi-select-item
            >
            <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
            <cds-multi-select-item value="router"
              >Option 5</cds-multi-select-item
            >
          </cds-multi-select>
        </div>
      </sb-template-layers>
    `},d={decorators:[l=>t` <div style="width:300px">${l()}</div> `],render:()=>t`
      <cds-multi-select
        title-text="Multiselect title"
        label="Multiselect label"
        helper-text="This is helper text">
        <cds-multi-select-item value="example"
          >An example option that is really long to show what should be done to
          handle long text</cds-multi-select-item
        >
        <cds-multi-select-item selected value="all"
          >Option 1</cds-multi-select-item
        >
        <cds-multi-select-item selected value="cloudFoundry"
          >Option 2</cds-multi-select-item
        >
        <cds-multi-select-item disabled value="staging"
          >Option 3 - a disabled item</cds-multi-select-item
        >
        <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
        <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
      </cds-multi-select>
    `},a={render:()=>t`
      <sb-template-layers>
        <div style="width:300px">
          <cds-multi-select
            title-text="Multiselect title"
            label="Multiselect label"
            helper-text="This is helper text">
            <cds-multi-select-item value="example"
              >An example option that is really long to show what should be done
              to handle long text</cds-multi-select-item
            >
            <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
            <cds-multi-select-item value="cloudFoundry"
              >Option 2</cds-multi-select-item
            >
            <cds-multi-select-item disabled value="staging"
              >Option 3 - a disabled item</cds-multi-select-item
            >
            <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
            <cds-multi-select-item value="router"
              >Option 5</cds-multi-select-item
            >
          </cds-multi-select>
        </div>
      </sb-template-layers>
    `},m={args:Q,argTypes:V,decorators:[l=>t` <div style="width:300px">${l()}</div> `],render:l=>{const{clearSelectionLabel:L,direction:A,disabled:P,helperText:_,hideLabel:z,locale:N,invalid:R,invalidText:k,readOnly:W,titleText:B,selectionFeedback:C,size:j,label:U,type:G,value:X,warn:K,warnText:Y}=l??{};return t`
      <cds-multi-select
        direction=${e(A)}
        ?disabled=${P}
        ?invalid=${R}
        invalid-text=${e(k)}
        clear-selection-label=${e(L)}
        helper-text=${e(_)}
        ?hide-label=${z}
        locale=${e(N)}
        ?read-only=${W}
        title-text=${e(B)}
        selection-feedback=${e(C)}
        size=${e(j)}
        ?warn=${K}
        warn-text=${e(Y)}
        label=${e(U)}
        type=${e(G)}
        value="${e(X)}">
        <cds-multi-select-item value="example"
          >An example option that is really long to show what should be done to
          handle long text</cds-multi-select-item
        >
        <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
        <cds-multi-select-item value="cloudFoundry"
          >Option 2</cds-multi-select-item
        >
        <cds-multi-select-item disabled value="staging"
          >Option 3 - a disabled item</cds-multi-select-item
        >
        <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
        <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
      </cds-multi-select>
    `}},ee={title:"Components/Multi Select"};var p,h,x;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [story => html\` <div style="width:300px">\${story()}</div> \`],
  render: () => {
    return html\`
      <cds-multi-select
        title-text="Multiselect title"
        label="Multiselect label"
        helper-text="This is helper text">
        <cds-multi-select-item value="example"
          >An example option that is really long to show what should be done to
          handle long text</cds-multi-select-item
        >
        <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
        <cds-multi-select-item value="cloudFoundry"
          >Option 2</cds-multi-select-item
        >
        <cds-multi-select-item disabled value="staging"
          >Option 3 - a disabled item</cds-multi-select-item
        >
        <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
        <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
      </cds-multi-select>
    \`;
  }
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,v,O;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [story => html\` <div style="width:300px">\${story()}</div> \`],
  render: () => {
    return html\`
      <cds-multi-select
        filterable="true"
        title-text="Multiselect title"
        helper-text="This is helper text">
        <cds-multi-select-item value="example"
          >An example option that is really long to show what should be done to
          handle long text</cds-multi-select-item
        >
        <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
        <cds-multi-select-item value="cloudFoundry"
          >Option 2</cds-multi-select-item
        >
        <cds-multi-select-item disabled value="staging"
          >Option 3 - a disabled item</cds-multi-select-item
        >
        <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
        <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
      </cds-multi-select>
    \`;
  }
}`,...(O=(v=n.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var y,f,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <sb-template-layers>
        <div style="width:300px">
          <cds-multi-select
            filterable="true"
            title-text="Multiselect title"
            helper-text="This is helper text">
            <cds-multi-select-item value="example"
              >An example option that is really long to show what should be done
              to handle long text</cds-multi-select-item
            >
            <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
            <cds-multi-select-item value="cloudFoundry"
              >Option 2</cds-multi-select-item
            >
            <cds-multi-select-item disabled value="staging"
              >Option 3 - a disabled item</cds-multi-select-item
            >
            <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
            <cds-multi-select-item value="router"
              >Option 5</cds-multi-select-item
            >
          </cds-multi-select>
        </div>
      </sb-template-layers>
    \`;
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,T,$;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [story => html\` <div style="width:300px">\${story()}</div> \`],
  render: () => {
    return html\`
      <cds-multi-select
        title-text="Multiselect title"
        label="Multiselect label"
        helper-text="This is helper text">
        <cds-multi-select-item value="example"
          >An example option that is really long to show what should be done to
          handle long text</cds-multi-select-item
        >
        <cds-multi-select-item selected value="all"
          >Option 1</cds-multi-select-item
        >
        <cds-multi-select-item selected value="cloudFoundry"
          >Option 2</cds-multi-select-item
        >
        <cds-multi-select-item disabled value="staging"
          >Option 3 - a disabled item</cds-multi-select-item
        >
        <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
        <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
      </cds-multi-select>
    \`;
  }
}`,...($=(T=d.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var S,D,M;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <sb-template-layers>
        <div style="width:300px">
          <cds-multi-select
            title-text="Multiselect title"
            label="Multiselect label"
            helper-text="This is helper text">
            <cds-multi-select-item value="example"
              >An example option that is really long to show what should be done
              to handle long text</cds-multi-select-item
            >
            <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
            <cds-multi-select-item value="cloudFoundry"
              >Option 2</cds-multi-select-item
            >
            <cds-multi-select-item disabled value="staging"
              >Option 3 - a disabled item</cds-multi-select-item
            >
            <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
            <cds-multi-select-item value="router"
              >Option 5</cds-multi-select-item
            >
          </cds-multi-select>
        </div>
      </sb-template-layers>
    \`;
  }
}`,...(M=(D=a.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var F,E,I;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args,
  argTypes,
  decorators: [story => html\` <div style="width:300px">\${story()}</div> \`],
  render: args => {
    const {
      clearSelectionLabel,
      direction,
      disabled,
      helperText,
      hideLabel,
      locale,
      invalid,
      invalidText,
      readOnly,
      titleText,
      selectionFeedback,
      size,
      label,
      type,
      value,
      warn,
      warnText
    } = args ?? {};
    return html\`
      <cds-multi-select
        direction=\${ifDefined(direction)}
        ?disabled=\${disabled}
        ?invalid=\${invalid}
        invalid-text=\${ifDefined(invalidText)}
        clear-selection-label=\${ifDefined(clearSelectionLabel)}
        helper-text=\${ifDefined(helperText)}
        ?hide-label=\${hideLabel}
        locale=\${ifDefined(locale)}
        ?read-only=\${readOnly}
        title-text=\${ifDefined(titleText)}
        selection-feedback=\${ifDefined(selectionFeedback)}
        size=\${ifDefined(size)}
        ?warn=\${warn}
        warn-text=\${ifDefined(warnText)}
        label=\${ifDefined(label)}
        type=\${ifDefined(type)}
        value="\${ifDefined(value)}">
        <cds-multi-select-item value="example"
          >An example option that is really long to show what should be done to
          handle long text</cds-multi-select-item
        >
        <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
        <cds-multi-select-item value="cloudFoundry"
          >Option 2</cds-multi-select-item
        >
        <cds-multi-select-item disabled value="staging"
          >Option 3 - a disabled item</cds-multi-select-item
        >
        <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
        <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
      </cds-multi-select>
    \`;
  }
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const te=["Default","Filterable","FilterableWithLayer","WithInitialSelectedItems","WithLayer","Playground"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Filterable:n,FilterableWithLayer:o,Playground:m,WithInitialSelectedItems:d,WithLayer:a,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{de as M};
