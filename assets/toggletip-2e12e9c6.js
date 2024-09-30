import{j as t}from"./jsx-runtime-29019649.js";import{u as s}from"./index-081880b6.js";import{ae as r,af as n,ag as c}from"./index-775d7884.js";import{c as p,a}from"./storybook-cdn-4cc58f60.js";import{T as l}from"./toggletip.stories-3b7e2646.js";import"./iframe-532ac6a9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./toggletip-4f5ff9ac.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./16-5513bc0c.js";import"./spread-61d77317.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./focus-73f58502.js";import"./defs-4d9ca86b.js";import"./popover-controller-26cce6f0.js";import"./button-4ef875e3.js";import"./if-defined-21892bb5.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";function i(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l}),`
`,t.jsx(e.h1,{id:"toggletip",children:"Toggletip"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/toggletip",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/toggletip",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:`The Toggletip component provides an accessible way to render interactive content
within a popover. If you do not have any interactive content inside of your
Toggletip, consider using Tooltip instead.`}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/toggle-tip/index.js';
import '@carbon/web-components/es/components/link/index.js';
import '@carbon/web-components/es/components/button/index.js';
`})}),`
`,t.jsx(n,{children:`${p({components:["toggle-tip"]})}`}),`
`,t.jsx(n,{children:`${a()}`}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<cds-toggletip>
  Toggletip label

  <p slot="body-text">
    Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
  </p>
  <cds-link slot="actions">Test</cds-link>
  <cds-button slot="actions">Button</cds-button>
</cds-toggletip>
`})}),`
`,t.jsxs(e.h3,{id:"cds-toggletip-attributes-and-properties",children:[t.jsx(e.code,{children:"<cds-toggletip>"})," attributes and properties"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(e.code,{children:"<cds-toggletip open>"}),") and ",t.jsx(e.code,{children:"false"}),` means not setting the attribute (e.g.
`,t.jsx(e.code,{children:"<cds-toggletip>"})," without ",t.jsx(e.code,{children:"open"})," attribute)."]}),`
`,t.jsx(c,{of:"cds-toggletip"})]})}function A(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{A as default};
