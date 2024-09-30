import{j as e}from"./jsx-runtime-ca9ab4eb.js";import{u as s}from"./index-e87182e5.js";import{ae as o,af as r,ag as c}from"./index-10c5cb00.js";import{c as m,a}from"./storybook-cdn-4cc58f60.js";import{N as p}from"./number-input.stories-19eb4179.js";import"./iframe-be34abd3.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./text-input-f5b277bd.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./carbon-element-59fbbccb.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./16-4249ddd2.js";import"./spread-61d77317.js";import"./16-81e6b9cc.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./number-input-skeleton-f5616efb.js";import"./16-22dc4144.js";import"./form-item-325d0083.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:p}),`
`,e.jsx(n.h1,{id:"number-input",children:"Number input"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/number-input",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/number-input",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.p,{children:`Number inputs are similar to text inputs, but contain controls used to increase
or decrease an incremental value.`}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/number-input/index.js';
`})}),`
`,e.jsx(r,{children:`${m({components:["number-input"]})}`}),`
`,e.jsx(r,{children:`${a()}`}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-number-input
  value="0"
  min="0"
  max="100"
  label="Label text"
  helper-text="Optional helper text">
</cds-number-input>
`})}),`
`,e.jsx(n.h2,{id:"form-item",children:"Form item"}),`
`,e.jsxs(n.p,{children:[`If the input is part of a form, make sure to import and wrap the input with
`,e.jsx(n.code,{children:"<cds-form-item>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/form/index.js';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-form-item>
  <cds-number-input
    value="0"
    min="0"
    max="100"
    label="Label text"
    helper-text="Optional helper text">
  </cds-number-input>
</cds-form-item>
`})}),`
`,e.jsx(n.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsxs(n.p,{children:["For the skeleton variation, utilize ",e.jsx(n.code,{children:"<cds-number-input-skeleton>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-number-input-skeleton></cds-number-input-skeleton>
`})}),`
`,e.jsxs(n.h2,{id:"cds-number-input-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-number-input>"})," attributes and properties"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-number-input invalid>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-number-input>"})," without ",e.jsx(n.code,{children:"invalid"})," attribute)."]}),`
`,e.jsx(c,{of:"cds-number-input"})]})}function $(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};
