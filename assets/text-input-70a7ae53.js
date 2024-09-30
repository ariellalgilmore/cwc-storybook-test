import{j as e}from"./jsx-runtime-29019649.js";import{u as o}from"./index-081880b6.js";import{ae as p,af as i,ag as a}from"./index-775d7884.js";import{c as s,a as c}from"./storybook-cdn-4cc58f60.js";import{T as m}from"./text-input.stories-65a90ef4.js";import"./iframe-532ac6a9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./carbon-element-59fbbccb.js";import"./text-input-f5b277bd.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./16-4249ddd2.js";import"./spread-61d77317.js";import"./16-81e6b9cc.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./text-input-skeleton-2fc7e4c6.js";import"./form-item-325d0083.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:m}),`
`,e.jsx(t.h1,{id:"text-input",children:"Text Input"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/input",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/input",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`Text fields enable the user to interact with and input data. A single line field
is used when the input anticipated by the user is a single line of text as
opposed to a paragraph.`}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/text-input/index.js';
`})}),`
`,e.jsx(i,{children:`${s({components:["text-input"]})}`}),`
`,e.jsx(i,{children:`${c()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-text-input
  label="Text input label"
  helper-text="Optional help text"
  invalid-text="Error message">
</cds-text-input>
`})}),`
`,e.jsx(t.h2,{id:"form-item",children:"Form item"}),`
`,e.jsxs(t.p,{children:[`If the input is part of a form, make sure to import and wrap the input with
`,e.jsx(t.code,{children:"<cds-form-item>"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/form/index.js';
`})}),`
`,e.jsx(i,{children:`${s({components:["form"]})}`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-form-item>
  <cds-text-input
    label="Text input label"
    helper-text="Optional help text"
    invalid-text="Error message">
  </cds-text-input>
</cds-form-item>
`})}),`
`,e.jsxs(t.h2,{id:"cds-text-input-attributes-and-properties",children:[e.jsx(t.code,{children:"<cds-text-input>"})," attributes and properties"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-text-input required>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-text-input>"})," without ",e.jsx(t.code,{children:"required"})," attribute)."]}),`
`,e.jsx(a,{of:"cds-text-input"})]})}function L(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{L as default};
