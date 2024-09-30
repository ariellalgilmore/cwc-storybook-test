import{j as t}from"./jsx-runtime-5c5465e4.js";import{u as a}from"./index-78b33afb.js";import{af as o,ag as i}from"./index-d6ce44c6.js";import{c,a as r}from"./storybook-cdn-4cc58f60.js";import"./iframe-999c67b6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"notification",children:"Notification"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:[`💡 Check our
`,t.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/notification",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/notification",rel:"nofollow",children:t.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(n.p,{children:"Notifications are messages that communicate information to the user."}),`
`,t.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/notification/index.js';
`})}),`
`,t.jsx(n.h3,{id:"scss-must-include-with-js-import",children:"SCSS (must include with JS import)"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`@use '@carbon/styles/scss/components/notification';
`})}),`
`,t.jsx(o,{children:`${c({components:["notification"]})}`}),`
`,t.jsx(o,{children:`${r()}`}),`
`,t.jsx(n.h3,{id:"html",children:"HTML"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<cds-inline-notification
  style="min-width: 30rem; margin-bottom: .5rem"
  title="Notification title"
  subtitle="Subtitle text goes here.">
</cds-inline-notification>
`})}),`
`,t.jsx(n.h2,{id:"actionable-notification",children:"Actionable notification"}),`
`,t.jsx(n.p,{children:`Actionable notifications allow for interactive elements within a notification
styled like an inline or toast notification. Actionable notifications, since
they require user interaction, take focus when triggered and can be highly
disruptive to screen readers and keyboard users. With actionable notifications,
only one action is allowed per notification. This action frequently takes users
to a flow or page related to the message, where they can resolve the
notification.`}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<cds-actionable-notification
  kind="error"
  title="Notification title"
  subtitle="Subtitle text goes here">
  <cds-actionable-notification-button slot="action"
    >Action</cds-actionable-notification-button
  >
</cds-actionable-notification>
`})}),`
`,t.jsx(n.h2,{id:"inline-notification",children:"Inline notification"}),`
`,t.jsx(n.p,{children:`Inline notifications show up in task flows, to notify users of the status of an
action. They usually appear at the top of the primary content area.`}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<cds-inline-notification
  style="min-width: 30rem; margin-bottom: .5rem"
  title="Notification title"
  subtitle="Subtitle text goes here.">
</cds-inline-notification>
`})}),`
`,t.jsx(n.h2,{id:"toast-notification",children:"Toast notification"}),`
`,t.jsx(n.p,{children:`Toasts are a non-modal, time-based window elements used to display short
messages; they usually appear at the bottom of the screen and disappear after a
few seconds.`}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<cds-toast-notification
  style="min-width: 30rem; margin-bottom: 0.5rem;"
  title="Notification title"
  subtitle="Subtitle text goes here.">
</cds-toast-notification>
`})}),`
`,t.jsxs(n.h2,{id:"cds-actionable-notification-attributes-properties-and-events",children:[t.jsx(n.code,{children:"<cds-actionable-notification>"})," attributes, properties and events"]}),`
`,t.jsxs(n.p,{children:["Note: For ",t.jsx(n.code,{children:"boolean"})," attributes, ",t.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(n.code,{children:"<cds-actionable-notification open>"}),") and ",t.jsx(n.code,{children:"false"}),` means not setting the
attribute (e.g. `,t.jsx(n.code,{children:"<cds-actionable-notification>"})," without ",t.jsx(n.code,{children:"open"})," attribute)."]}),`
`,t.jsx(i,{of:"cds-actionable-notification"}),`
`,t.jsxs(n.h2,{id:"cds-inline-notification-attributes-properties-and-events",children:[t.jsx(n.code,{children:"<cds-inline-notification>"})," attributes, properties and events"]}),`
`,t.jsxs(n.p,{children:["Note: For ",t.jsx(n.code,{children:"boolean"})," attributes, ",t.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(n.code,{children:"<cds-inline-notification open>"}),") and ",t.jsx(n.code,{children:"false"}),` means not setting the attribute
(e.g. `,t.jsx(n.code,{children:"<cds-inline-notification>"})," without ",t.jsx(n.code,{children:"open"})," attribute)."]}),`
`,t.jsx(i,{of:"cds-inline-notification"}),`
`,t.jsxs(n.h2,{id:"cds-toast-notification-attributes-properties-and-events",children:[t.jsx(n.code,{children:"<cds-toast-notification>"})," attributes, properties and events"]}),`
`,t.jsxs(n.p,{children:["Note: For ",t.jsx(n.code,{children:"boolean"})," attributes, ",t.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(n.code,{children:"<cds-toast-notification open>"}),") and ",t.jsx(n.code,{children:"false"}),` means not setting the attribute
(e.g. `,t.jsx(n.code,{children:"<cds-toast-notification>"})," without ",t.jsx(n.code,{children:"open"})," attribute)."]}),`
`,t.jsx(i,{of:"cds-toast-notification"})]})}function w(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s(e)}export{w as default};
