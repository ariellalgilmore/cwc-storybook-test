import{j as e}from"./jsx-runtime-b0aba563.js";import{u as r}from"./index-e6c45b0c.js";import{ae as i,af as s,ag as l}from"./index-fa03931b.js";import{c as a,a as c}from"./storybook-cdn-4cc58f60.js";import{T as m}from"./toggle.stories-fbe70638.js";import"./iframe-3b9c0475.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./if-defined-21892bb5.js";import"./carbon-element-59fbbccb.js";import"./checkbox-4cbf61d5.js";import"./focus-73f58502.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./spread-61d77317.js";import"./16-81e6b9cc.js";import"./host-listener-0f7877ac.js";import"./stack-4f2eefe9.js";import"./index-d401daa0.js";function n(o){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:m}),`
`,e.jsx(t.h1,{id:"toggle",children:"Toggle"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/toggle",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/toggle",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`Toggle is a control that is used to quickly switch between two possible states.
Toggles are only used for these binary actions that occur immediately after the
user “flips” the toggle switch. They are commonly used for “on/off” switches.`}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"small"}),` property/attribute to make it more compact in size, so they can be
used in use cases such as data tables.`]}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/toggle/index.js';
`})}),`
`,e.jsx(s,{children:`${a({components:["toggle"]})}`}),`
`,e.jsx(s,{children:`${c()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-toggle label-a="On" label-text="Toggle" label-b="Off"></cds-toggle>
`})}),`
`,e.jsx(t.h2,{id:"small-toggle",children:"Small toggle"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-toggle
  size="sm"
  label-a="On"
  label-text="Toggle"
  label-b="Off"></cds-toggle>
`})}),`
`,e.jsxs(t.h2,{id:"cds-toggle-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-toggle>"})," attributes, properties and events"]}),`
`,e.jsx(l,{of:"cds-toggle"})]})}function $(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{$ as default};
