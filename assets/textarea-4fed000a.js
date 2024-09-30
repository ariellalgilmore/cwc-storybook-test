import{j as e}from"./jsx-runtime-3046aa02.js";import{u as a}from"./index-966e7ddf.js";import{ae as o,af as s,ag as i}from"./index-651d3ade.js";import{c,a as l}from"./storybook-cdn-4cc58f60.js";import{T as p}from"./textarea.stories-c34c278e.js";import"./iframe-c15361be.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./textarea-skeleton-5d52d4ee.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./16-81e6b9cc.js";import"./spread-61d77317.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./carbon-element-59fbbccb.js";import"./if-non-empty-f918a1a3.js";import"./text-input-f5b277bd.js";import"./16-4249ddd2.js";import"./validity-01821d7e.js";import"./form-item-325d0083.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:p}),`
`,e.jsx(t.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/textarea",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/textarea",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`Text inputs enable the user to interact with and input content and data. This
component can be used for long and short form entries.`}),`
`,e.jsx(t.p,{children:"Textarea is a multi-line variant of text input."}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/textarea/index.js';
`})}),`
`,e.jsx(s,{children:`${c({components:["textarea"]})}`}),`
`,e.jsx(s,{children:`${l()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-textarea placeholder="Optional placeholder text" rows="4" cols="50">
  <span slot="label-text">Label text</span>
  <span slot="helper-text">Optional helper text</span>
  <span slot="validity-message">Something isn't right</span>
</cds-textarea>
`})}),`
`,e.jsx(t.h2,{id:"form-item",children:"Form item"}),`
`,e.jsxs(t.p,{children:[`If the textarea is part of a form, make sure to import and wrap the textarea
with `,e.jsx(t.code,{children:"<cds-form-item>"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/form/index.js';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-form-item>
  <cds-textarea placeholder="Optional placeholder text" rows="4" cols="50">
    <span slot="label-text">Label text</span>
    <span slot="helper-text">Optional helper text</span>
    <span slot="validity-message">Something isn't right</span>
  </cds-textarea>
</cds-form-item>
`})}),`
`,e.jsx(t.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsxs(t.p,{children:["For the skeleton variation, utilize ",e.jsx(t.code,{children:"<cds-textarea-skeleton>"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-textarea-skeleton></cds-textarea-skeleton>
`})}),`
`,e.jsxs(t.h2,{id:"cds-textarea-attributes-and-properties",children:[e.jsx(t.code,{children:"<cds-textarea>"})," attributes and properties"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-textarea autofocus>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-textarea>"})," without ",e.jsx(t.code,{children:"autofocus"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-textarea"})]})}function J(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{J as default};
