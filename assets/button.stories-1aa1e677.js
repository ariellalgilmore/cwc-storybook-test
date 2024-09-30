import{x as u}from"./lit-element-266f0592.js";import{s as W}from"./16-22dc4144.js";import{B as c,a as z,b as A,c as m,d as $}from"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const tt={[`Primary button (${c.PRIMARY})`]:c.PRIMARY,[`Secondary button (${c.SECONDARY})`]:c.SECONDARY,[`Tertiary button (${c.TERTIARY})`]:c.TERTIARY,[`Danger button (${c.DANGER})`]:c.DANGER,[`Danger tertiary button (${c.DANGER_TERTIARY})`]:c.DANGER_TERTIARY,[`Danger ghost button (${c.DANGER_GHOST})`]:c.DANGER_GHOST,[`Ghost button (${c.GHOST})`]:c.GHOST},et={Button:z.BUTTON,Reset:z.RESET,Submit:z.SUBMIT},nt={Start:A.START,Center:A.CENTER,End:A.END},ot={Top:m.TOP,Right:m.RIGHT,Bottom:m.BOTTOM,Left:m.LEFT},st={[`Small size (${$.SMALL})`]:$.SMALL,[`Medium size (${$.MEDIUM})`]:$.MEDIUM,[`Large size (${$.LARGE})`]:$.LARGE,[`XL size (${$.EXTRA_LARGE})`]:$.EXTRA_LARGE,[`2XL size (${$.EXTRA_EXTRA_LARGE})`]:$.EXTRA_EXTRA_LARGE},b={kind:c.PRIMARY,tooltipAlignment:A.CENTER,tooltipPosition:m.TOP},g={buttonClassName:{control:"text",description:"Specify an optional className to be added to your Button"},dangerDescription:{control:"text",description:"Specify the message read by screen readers for the danger button variant"},disabled:{control:"boolean",description:"Specify whether the Button should be disabled, or not"},href:{control:"string",description:"Optionally specify an href for your Button to become an <code><a></code> element"},isExpressive:{control:"boolean",description:"Specify whether the Button is expressive, or not"},isSelected:{control:"boolean",description:"Specify whether the Button is currently selected. Only applies to the Ghost variant."},kind:{control:"select",description:"Specifiy the kind of Button you want to create",options:tt},linkRole:{control:"text",description:"Optional prop to specify the role of the Button"},size:{control:"select",description:"Specify the size of the button, from the following list of sizes:",options:st},tooltipAlignment:{control:"radio",description:"Specify the alignment of the tooltip to the icon-only button. Can be one of: start, center, or end.",options:nt},tooltipPosition:{control:"radio",description:"Specify the direction of the tooltip for icon-only buttons. Can be either top, right, bottom, or left.",options:ot},type:{control:"radio",description:"Optional prop to specify the type of the Button",options:et},onClick:{table:{disable:!0}}},y={argTypes:g,args:b,render:({buttonClassName:t,dangerDescription:e,disabled:n,href:o,isExpressive:s,isSelected:i,kind:r,linkRole:l,size:a,tooltipAlignment:d,tooltipPosition:p,type:x})=>u` <cds-button
      button-class-name="${t}"
      danger-description="${e}"
      ?disabled="${n}"
      href="${o}"
      ?isExpressive="${s}"
      ?isSelected="${i}"
      kind="${r}"
      link-role="${l}"
      size="${a}"
      tooltip-alignment="${d}"
      tooltip-position="${p}"
      type="${x}">
      Button
    </cds-button>`},h={argTypes:g,args:b,render:({buttonClassName:t,dangerDescription:e,disabled:n,href:o,isExpressive:s,isSelected:i,linkRole:r,size:l,tooltipAlignment:a,tooltipPosition:d,type:p})=>u` <cds-button
        button-class-name="${t}"
        danger-description="${e}"
        ?disabled="${n}"
        href="${o}"
        ?isExpressive="${s}"
        ?isSelected="${i}"
        kind="danger"
        link-role="${r}"
        size="${l}"
        tooltip-alignment="${a}"
        tooltip-position="${d}"
        type="${p}">
        Button
      </cds-button>
      <cds-button
        button-class-name="${t}"
        danger-description="${e}"
        ?disabled="${n}"
        href="${o}"
        ?isExpressive="${s}"
        ?isSelected="${i}"
        kind="danger--tertiary"
        link-role="${r}"
        size="${l}"
        tooltip-alignment="${a}"
        tooltip-position="${d}"
        type="${p}">
        Tertiary Danger Button
      </cds-button>
      <cds-button
        button-class-name="${t}"
        danger-description="${e}"
        ?disabled="${n}"
        href="${o}"
        ?isExpressive="${s}"
        ?isSelected="${i}"
        kind="danger--ghost"
        link-role="${r}"
        size="${l}"
        tooltip-alignment="${a}"
        tooltip-position="${d}"
        type="${p}">
        Ghost Danger Button
      </cds-button>`},f={argTypes:g,args:b,render:({buttonClassName:t,dangerDescription:e,disabled:n,href:o,isExpressive:s,isSelected:i,linkRole:r,size:l,tooltipAlignment:a,tooltipPosition:d,type:p})=>u` <cds-button
      button-class-name="${t}"
      danger-description="${e}"
      ?disabled="${n}"
      href="${o}"
      ?isExpressive="${s}"
      ?isSelected="${i}"
      kind="ghost"
      link-role="${r}"
      size="${l}"
      tooltip-alignment="${a}"
      tooltip-position="${d}"
      type="${p}">
      Button
    </cds-button>`},k={argTypes:g,args:b,render:({buttonClassName:t,dangerDescription:e,disabled:n,href:o,isExpressive:s,isSelected:i,kind:r,linkRole:l,size:a,tooltipAlignment:d,tooltipPosition:p,type:x,onClick:V})=>u` <cds-button
      button-class-name="${t}"
      danger-description="${e}"
      ?disabled="${n}"
      href="${o}"
      ?isExpressive="${s}"
      ?isSelected="${i}"
      kind="${r}"
      link-role="${l}"
      size="${a}"
      tooltip-alignment="${d}"
      tooltip-position="${p}"
      tooltip-text="Icon Description"
      type="${x}"
      @click="${V}">
      ${W({slot:"icon"})}
    </cds-button>`},S={argTypes:g,args:b,render:({buttonClassName:t,dangerDescription:e,disabled:n,href:o,isExpressive:s,isSelected:i,linkRole:r,size:l,tooltipAlignment:a,tooltipPosition:d,type:p})=>u` <cds-button
      button-class-name="${t}"
      danger-description="${e}"
      ?disabled="${n}"
      href="${o}"
      ?isExpressive="${s}"
      ?isSelected="${i}"
      kind="secondary"
      link-role="${r}"
      size="${l}"
      tooltip-alignment="${a}"
      tooltip-position="${d}"
      type="${p}">
      Button
    </cds-button>`},E={argTypes:g,args:b,render:({buttonClassName:t,dangerDescription:e,disabled:n,href:o,isExpressive:s,isSelected:i,linkRole:r,size:l,tooltipAlignment:a,tooltipPosition:d,type:p})=>u` <cds-button-set>
      <cds-button
        button-class-name="${t}"
        danger-description="${e}"
        ?disabled="${n}"
        href="${o}"
        ?isExpressive="${s}"
        ?isSelected="${i}"
        kind="secondary"
        link-role="${r}"
        size="${l}"
        tooltip-alignment="${a}"
        tooltip-position="${d}"
        type="${p}">
        Secondary button
      </cds-button>
      <cds-button
        button-class-name="${t}"
        danger-description="${e}"
        ?disabled="${n}"
        href="${o}"
        ?isExpressive="${s}"
        ?isSelected="${i}"
        kind="primary"
        link-role="${r}"
        size="${l}"
        tooltip-alignment="${a}"
        tooltip-position="${d}"
        type="${p}">
        Primary button </cds-button
      ><cds-button-set></cds-button-set
    ></cds-button-set>`},T={render:()=>u` <cds-button-skeleton> </cds-button-skeleton>
      <cds-button-skeleton> </cds-button-skeleton>`},R={argTypes:g,args:b,render:({buttonClassName:t,dangerDescription:e,disabled:n,href:o,isExpressive:s,isSelected:i,linkRole:r,size:l,tooltipAlignment:a,tooltipPosition:d,type:p})=>u` <cds-button
      button-class-name="${t}"
      danger-description="${e}"
      ?disabled="${n}"
      href="${o}"
      ?isExpressive="${s}"
      ?isSelected="${i}"
      kind="tertiary"
      link-role="${r}"
      size="${l}"
      tooltip-alignment="${a}"
      tooltip-position="${d}"
      type="${p}">
      Button
    </cds-button>`},it={title:"Components/Button",parameters:{actions:{argTypesRegex:"^on.*"}}};var v,B,D;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    buttonClassName,
    dangerDescription,
    disabled,
    href,
    isExpressive,
    isSelected,
    kind,
    linkRole,
    size,
    tooltipAlignment,
    tooltipPosition,
    type
  }) => html\` <cds-button
      button-class-name="\${buttonClassName}"
      danger-description="\${dangerDescription}"
      ?disabled="\${disabled}"
      href="\${href}"
      ?isExpressive="\${isExpressive}"
      ?isSelected="\${isSelected}"
      kind="\${kind}"
      link-role="\${linkRole}"
      size="\${size}"
      tooltip-alignment="\${tooltipAlignment}"
      tooltip-position="\${tooltipPosition}"
      type="\${type}">
      Button
    </cds-button>\`
}`,...(D=(B=y.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var N,O,P;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    buttonClassName,
    dangerDescription,
    disabled,
    href,
    isExpressive,
    isSelected,
    linkRole,
    size,
    tooltipAlignment,
    tooltipPosition,
    type
  }) => html\` <cds-button
        button-class-name="\${buttonClassName}"
        danger-description="\${dangerDescription}"
        ?disabled="\${disabled}"
        href="\${href}"
        ?isExpressive="\${isExpressive}"
        ?isSelected="\${isSelected}"
        kind="danger"
        link-role="\${linkRole}"
        size="\${size}"
        tooltip-alignment="\${tooltipAlignment}"
        tooltip-position="\${tooltipPosition}"
        type="\${type}">
        Button
      </cds-button>
      <cds-button
        button-class-name="\${buttonClassName}"
        danger-description="\${dangerDescription}"
        ?disabled="\${disabled}"
        href="\${href}"
        ?isExpressive="\${isExpressive}"
        ?isSelected="\${isSelected}"
        kind="danger--tertiary"
        link-role="\${linkRole}"
        size="\${size}"
        tooltip-alignment="\${tooltipAlignment}"
        tooltip-position="\${tooltipPosition}"
        type="\${type}">
        Tertiary Danger Button
      </cds-button>
      <cds-button
        button-class-name="\${buttonClassName}"
        danger-description="\${dangerDescription}"
        ?disabled="\${disabled}"
        href="\${href}"
        ?isExpressive="\${isExpressive}"
        ?isSelected="\${isSelected}"
        kind="danger--ghost"
        link-role="\${linkRole}"
        size="\${size}"
        tooltip-alignment="\${tooltipAlignment}"
        tooltip-position="\${tooltipPosition}"
        type="\${type}">
        Ghost Danger Button
      </cds-button>\`
}`,...(P=(O=h.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var C,G,I;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    buttonClassName,
    dangerDescription,
    disabled,
    href,
    isExpressive,
    isSelected,
    linkRole,
    size,
    tooltipAlignment,
    tooltipPosition,
    type
  }) => html\` <cds-button
      button-class-name="\${buttonClassName}"
      danger-description="\${dangerDescription}"
      ?disabled="\${disabled}"
      href="\${href}"
      ?isExpressive="\${isExpressive}"
      ?isSelected="\${isSelected}"
      kind="ghost"
      link-role="\${linkRole}"
      size="\${size}"
      tooltip-alignment="\${tooltipAlignment}"
      tooltip-position="\${tooltipPosition}"
      type="\${type}">
      Button
    </cds-button>\`
}`,...(I=(G=f.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var _,L,M;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    buttonClassName,
    dangerDescription,
    disabled,
    href,
    isExpressive,
    isSelected,
    kind,
    linkRole,
    size,
    tooltipAlignment,
    tooltipPosition,
    type,
    onClick
  }) => html\` <cds-button
      button-class-name="\${buttonClassName}"
      danger-description="\${dangerDescription}"
      ?disabled="\${disabled}"
      href="\${href}"
      ?isExpressive="\${isExpressive}"
      ?isSelected="\${isSelected}"
      kind="\${kind}"
      link-role="\${linkRole}"
      size="\${size}"
      tooltip-alignment="\${tooltipAlignment}"
      tooltip-position="\${tooltipPosition}"
      tooltip-text="Icon Description"
      type="\${type}"
      @click="\${onClick}">
      \${Add16({
    slot: 'icon'
  })}
    </cds-button>\`
}`,...(M=(L=k.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var Y,U,X;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    buttonClassName,
    dangerDescription,
    disabled,
    href,
    isExpressive,
    isSelected,
    linkRole,
    size,
    tooltipAlignment,
    tooltipPosition,
    type
  }) => html\` <cds-button
      button-class-name="\${buttonClassName}"
      danger-description="\${dangerDescription}"
      ?disabled="\${disabled}"
      href="\${href}"
      ?isExpressive="\${isExpressive}"
      ?isSelected="\${isSelected}"
      kind="secondary"
      link-role="\${linkRole}"
      size="\${size}"
      tooltip-alignment="\${tooltipAlignment}"
      tooltip-position="\${tooltipPosition}"
      type="\${type}">
      Button
    </cds-button>\`
}`,...(X=(U=S.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var w,H,j;E.parameters={...E.parameters,docs:{...(w=E.parameters)==null?void 0:w.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    buttonClassName,
    dangerDescription,
    disabled,
    href,
    isExpressive,
    isSelected,
    linkRole,
    size,
    tooltipAlignment,
    tooltipPosition,
    type
  }) => html\` <cds-button-set>
      <cds-button
        button-class-name="\${buttonClassName}"
        danger-description="\${dangerDescription}"
        ?disabled="\${disabled}"
        href="\${href}"
        ?isExpressive="\${isExpressive}"
        ?isSelected="\${isSelected}"
        kind="secondary"
        link-role="\${linkRole}"
        size="\${size}"
        tooltip-alignment="\${tooltipAlignment}"
        tooltip-position="\${tooltipPosition}"
        type="\${type}">
        Secondary button
      </cds-button>
      <cds-button
        button-class-name="\${buttonClassName}"
        danger-description="\${dangerDescription}"
        ?disabled="\${disabled}"
        href="\${href}"
        ?isExpressive="\${isExpressive}"
        ?isSelected="\${isSelected}"
        kind="primary"
        link-role="\${linkRole}"
        size="\${size}"
        tooltip-alignment="\${tooltipAlignment}"
        tooltip-position="\${tooltipPosition}"
        type="\${type}">
        Primary button </cds-button
      ><cds-button-set></cds-button-set
    ></cds-button-set>\`
}`,...(j=(H=E.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var F,K,Z;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\` <cds-button-skeleton> </cds-button-skeleton>
      <cds-button-skeleton> </cds-button-skeleton>\`
}`,...(Z=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var q,J,Q;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`{
  argTypes: controls,
  args: defaultArgs,
  render: ({
    buttonClassName,
    dangerDescription,
    disabled,
    href,
    isExpressive,
    isSelected,
    linkRole,
    size,
    tooltipAlignment,
    tooltipPosition,
    type
  }) => html\` <cds-button
      button-class-name="\${buttonClassName}"
      danger-description="\${dangerDescription}"
      ?disabled="\${disabled}"
      href="\${href}"
      ?isExpressive="\${isExpressive}"
      ?isSelected="\${isSelected}"
      kind="tertiary"
      link-role="\${linkRole}"
      size="\${size}"
      tooltip-alignment="\${tooltipAlignment}"
      tooltip-position="\${tooltipPosition}"
      type="\${type}">
      Button
    </cds-button>\`
}`,...(Q=(J=R.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const rt=["Default","Danger","Ghost","IconButton","Secondary","SetOfButtons","Skeleton","Tertiary"],$t=Object.freeze(Object.defineProperty({__proto__:null,Danger:h,Default:y,Ghost:f,IconButton:k,Secondary:S,SetOfButtons:E,Skeleton:T,Tertiary:R,__namedExportsOrder:rt,default:it},Symbol.toStringTag,{value:"Module"}));export{$t as B};
