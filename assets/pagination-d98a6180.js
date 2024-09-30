import{j as e}from"./jsx-runtime-b0aba563.js";import{u as a}from"./index-e6c45b0c.js";import{ae as r,af as i,ag as s}from"./index-fa03931b.js";import{c,a as p}from"./storybook-cdn-4cc58f60.js";import{P as m}from"./pagination.stories-b5e53520.js";import"./iframe-3b9c0475.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./select-skeleton-2dec3fba.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./query-b9d3c2af.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./16-a57556b1.js";import"./spread-61d77317.js";import"./16-81e6b9cc.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./if-defined-21892bb5.js";import"./collection-helpers-3389bc25.js";import"./text-input-f5b277bd.js";import"./16-4249ddd2.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./focus-73f58502.js";import"./host-listener-0f7877ac.js";import"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";function o(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:m}),`
`,e.jsx(t.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/pagination",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/pagination",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`The pagination component is used to switch through multiple pages of items, when
only a maximum number of items can be displayed per page. Can be used in
combination with other components like data table.`}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/pagination/index.js';
`})}),`
`,e.jsx(i,{children:`${c({components:["pagination"]})}`}),`
`,e.jsx(i,{children:`${p()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-pagination page-size="10" total-items="100">
  <cds-select-item value="10">10</cds-select-item>
  <cds-select-item value="20">20</cds-select-item>
  <cds-select-item value="30">30</cds-select-item>
  <cds-select-item value="40">40</cds-select-item>
  <cds-select-item value="50">50</cds-select-item>
</cds-pagination>
`})}),`
`,e.jsxs(t.h2,{id:"cds-pagination-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-pagination>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-pagination at-last-page>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(t.code,{children:"<cds-pagination>"})," without ",e.jsx(t.code,{children:"at-last-page"})," attribute)."]}),`
`,e.jsx(s,{of:"cds-pagination"}),`
`,e.jsxs(t.h2,{id:"cds-pages-select-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-pages-select>"})," attributes, properties and events"]}),`
`,e.jsx(s,{of:"cds-pages-select"}),`
`,e.jsxs(t.h2,{id:"cds-page-sizes-select-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-page-sizes-select>"})," attributes, properties and events"]}),`
`,e.jsx(s,{of:"cds-page-sizes-select"})]})}function K(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{K as default};
