import{x as f}from"./lit-element-266f0592.js";import{o as t}from"./if-defined-21892bb5.js";import x from"./notification-eacf472b.js";import{N as u,k as S}from"./helper-8393bc4c.js";import{p as i}from"./carbon-element-59fbbccb.js";import"./jsx-runtime-c7a019d5.js";import"./index-4bcb7531.js";import"./iframe-7f5a54d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-e2a81c98.js";import"./storybook-cdn-4cc58f60.js";import"./package-7aeb10bd.js";import"./spread-61d77317.js";import"./directive-12249aa5.js";import"./16-9baaa345.js";import"./property-da2637ab.js";import"./focus-73f58502.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const s=()=>{},v={hideCloseButton:!1,kind:u.INFO,lowContrast:!1,role:"status",statusIconDescription:"notification",subtitle:"Subtitle text goes here",title:"Notification title"},O={hideCloseButton:{control:"boolean",description:"Specify the close button should be disabled, or not."},kind:{control:"select",description:"Specify what state the notification represents.",options:S},lowContrast:{control:"boolean",description:"Specify whether you are using the low contrast variant of the InlineNotification."},role:{control:"select",description:'By default, this value is "status". You can also provide an alternate role if it makes sense from the accessibility-side.',options:{alert:"alert",log:"log",status:"status"}},statusIconDescription:{control:"text",description:'Provide a description for "status" icon that can be read by screen readers.'},subtitle:{control:"text",description:"Specify the subtitle."},title:{control:"text",description:"Specify the title."},onBeforeClose:{action:`${i}-notification-beingclosed`},onClose:{action:`${i}-notification-closed`}},e={render:()=>f`
      <cds-inline-notification
        kind="${u.ERROR}"
        title="Notification title"
        subtitle="Subtitle text goes here">
      </cds-inline-notification>
    `},o={args:v,argTypes:O,render:m=>{const{kind:b,title:C,subtitle:h,hideCloseButton:$,lowContrast:g,role:D,statusIconDescription:I,timeout:y,disableClose:B,onBeforeClose:N=s,onClose:k=s}=m??{},w=n=>{N(n),B&&n.preventDefault()};return f`
      <cds-inline-notification
        kind="${t(b)}"
        title="${t(C)}"
        subtitle="${t(h)}"
        ?hide-close-button="${$}"
        ?low-contrast="${g}"
        role="${t(D)}"
        status-icon-description="${t(I)}"
        timeout="${t(y)}"
        @cds-notification-beingclosed="${w}"
        @cds-notification-closed="${k}">
      </cds-inline-notification>
    `}},W={title:"Components/Notifications/Inline",parameters:{docs:{page:x}}};var r,l,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-inline-notification
        kind="\${NOTIFICATION_KIND.ERROR}"
        title="Notification title"
        subtitle="Subtitle text goes here">
      </cds-inline-notification>
    \`;
  }
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args,
  argTypes,
  render: args => {
    const {
      kind,
      title,
      subtitle,
      hideCloseButton,
      lowContrast,
      role,
      statusIconDescription,
      timeout,
      disableClose,
      onBeforeClose = noop,
      onClose = noop
    } = args ?? {};
    const handleBeforeClose = (event: CustomEvent) => {
      onBeforeClose(event);
      if (disableClose) {
        event.preventDefault();
      }
    };
    return html\`
      <cds-inline-notification
        kind="\${ifDefined(kind)}"
        title="\${ifDefined(title)}"
        subtitle="\${ifDefined(subtitle)}"
        ?hide-close-button="\${hideCloseButton}"
        ?low-contrast="\${lowContrast}"
        role="\${ifDefined(role)}"
        status-icon-description="\${ifDefined(statusIconDescription)}"
        timeout="\${ifDefined(timeout)}"
        @cds-notification-beingclosed="\${handleBeforeClose}"
        @cds-notification-closed="\${onClose}">
      </cds-inline-notification>
    \`;
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const Z=["Default","Playground"];export{e as Default,o as Playground,Z as __namedExportsOrder,W as default};
