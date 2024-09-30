import{j as e}from"./jsx-runtime-b0aba563.js";import{u as o}from"./index-e6c45b0c.js";import{ae as r,af as i,ag as n}from"./index-fa03931b.js";import{c as l,a as d}from"./storybook-cdn-4cc58f60.js";import{S as a}from"./select.stories-0e89f4fc.js";import"./iframe-3b9c0475.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./carbon-element-59fbbccb.js";import"./text-input-f5b277bd.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./16-4249ddd2.js";import"./spread-61d77317.js";import"./16-81e6b9cc.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./select-skeleton-2dec3fba.js";import"./16-a57556b1.js";import"./collection-helpers-3389bc25.js";import"./form-item-325d0083.js";import"./layer-d66987ad.js";import"./with-layer-c4dddb92.js";function c(s){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(t.h1,{id:"select",children:"Select"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/select",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/select",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`The select component allows users to choose one option from a list. It is used
in forms for users to submit data.`}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/select/index.js';
`})}),`
`,e.jsx(i,{children:`${l({components:["select"]})}`}),`
`,e.jsx(i,{children:`${d()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-select
  helper-text="Optional helper text"
  label-text="Select"
  placeholder="Optional placeholder text">
  <cds-select-item-group label="Category 1">
    <cds-select-item value="all">Option 1</cds-select-item>
    <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
  </cds-select-item-group>
  <cds-select-item-group label="Category 2">
    <cds-select-item value="staging">Option 3</cds-select-item>
    <cds-select-item value="dea">Option 4</cds-select-item>
    <cds-select-item value="router">Option 5</cds-select-item>
  </cds-select-item-group>
</cds-select>
`})}),`
`,e.jsxs(t.h2,{id:"cds-select-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-select>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-select autofocus>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-select>"})," without ",e.jsx(t.code,{children:"autofocus"})," attribute)."]}),`
`,e.jsx(n,{of:"cds-select"}),`
`,e.jsxs(t.h2,{id:"cds-select-item-group-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-select-item-group>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-select-item-group disabled>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(t.code,{children:"<cds-select-item-group>"})," without ",e.jsx(t.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(n,{of:"cds-select-item-group"}),`
`,e.jsxs(t.h2,{id:"cds-select-item-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-select-item>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-select-item disabled>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-select-item>"})," without ",e.jsx(t.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(n,{of:"cds-select-item"})]})}function R(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(c,{...s})}):c(s)}export{R as default};
