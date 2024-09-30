import{j as e}from"./jsx-runtime-5c5465e4.js";import{u as t}from"./index-78b33afb.js";import{ae as r,af as o,ag as i}from"./index-d6ce44c6.js";import{c as d,a as h}from"./storybook-cdn-4cc58f60.js";import{C as a}from"./checkbox.stories-66b2bf22.js";import"./iframe-999c67b6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./carbon-element-59fbbccb.js";import"./checkbox-4cbf61d5.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./if-defined-21892bb5.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./focus-73f58502.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./spread-61d77317.js";import"./16-81e6b9cc.js";import"./checkbox-skeleton-f3c1a5c2.js";function s(n){const c={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(c.h1,{id:"check-box",children:"Check box"}),`
`,e.jsxs(c.blockquote,{children:[`
`,e.jsxs(c.p,{children:[`💡 Check our
`,e.jsx(c.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/checkbox",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(c.p,{children:e.jsx(c.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/checkbox",rel:"nofollow",children:e.jsx(c.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsxs(c.p,{children:["Check box in ",e.jsx(c.code,{children:"carbon-web-components"}),` represents a combination of a check box and
its label.`]}),`
`,e.jsx(c.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(c.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(c.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/checkbox/index.js';
`})}),`
`,e.jsx(o,{children:`${d({components:["checkbox"]})}`}),`
`,e.jsx(o,{children:`${h()}`}),`
`,e.jsx(c.h3,{id:"html",children:"HTML"}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-html",children:`<cds-checkbox>Lorem Ipsum</cds-checkbox>
`})}),`
`,e.jsxs(c.p,{children:["Use ",e.jsx(c.code,{children:"cds-checkbox-group"})," when handling multiple checkboxes"]}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-html",children:`<cds-checkbox-group legend-text="Group label">
  <cds-checkbox>Lorem Ipsum 0</cds-checkbox>
  <cds-checkbox>Lorem Ipsum 1</cds-checkbox>
</cds-checkbox-group>
`})}),`
`,e.jsxs(c.h2,{id:"cds-checkbox-attributes-properties-and-events",children:[e.jsx(c.code,{children:"<cds-checkbox>"})," attributes, properties and events"]}),`
`,e.jsxs(c.p,{children:["Unlike regular checkbox, ",e.jsx(c.code,{children:"<cds-checkbox>"})," does ",e.jsx(c.em,{children:"not"})," fire ",e.jsx(c.code,{children:"change"}),` event. Please
use `,e.jsx(c.code,{children:"cds-checkbox-changed"})," event instead."]}),`
`,e.jsxs(c.p,{children:["Note: For ",e.jsx(c.code,{children:"boolean"})," attributes, ",e.jsx(c.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(c.code,{children:"<cds-checkbox checked>"}),") and ",e.jsx(c.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(c.code,{children:"<cds-checkbox>"})," without ",e.jsx(c.code,{children:"checked"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-checkbox"})]})}function G(n={}){const{wrapper:c}={...t(),...n.components};return c?e.jsx(c,{...n,children:e.jsx(s,{...n})}):s(n)}export{G as default};
