import{j as t}from"./jsx-runtime-3046aa02.js";import{u as s}from"./index-966e7ddf.js";import{ae as d,af as n,ag as r}from"./index-651d3ade.js";import{c as a,a as c}from"./storybook-cdn-4cc58f60.js";import{R as l}from"./radio-button.stories-6636726c.js";import"./iframe-c15361be.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./carbon-element-59fbbccb.js";import"./radio-button-skeleton-3df2ffb6.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./focus-73f58502.js";import"./radio-group-manager-b52ff8da.js";import"./16-d3a54398.js";import"./spread-61d77317.js";import"./collection-helpers-3389bc25.js";import"./16-81e6b9cc.js";function i(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:l}),`
`,t.jsx(e.h1,{id:"radio-button",children:"Radio button"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/radio-button",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/radio-button",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:`Radio buttons are used when a list of two or more options are mutually
exclusive, meaning the user must select only one option.`}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/radio-button/index.js';
`})}),`
`,t.jsx(n,{children:`${a({components:["radio-button"]})}`}),`
`,t.jsx(n,{children:`${c()}`}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<cds-radio-button-group
  label-position="right"
  orientation="horizontal"
  name="radio-group">
  <cds-radio-button label-text="Radio button" value="all"></cds-radio-button>
  <cds-radio-button
    label-text="Radio button"
    value="cloudFoundry"></cds-radio-button>
  <cds-radio-button
    label-text="Radio button"
    value="staging"></cds-radio-button>
</cds-radio-button-group>
`})}),`
`,t.jsx(e.h2,{id:"skeleton",children:"Skeleton"}),`
`,t.jsxs(e.p,{children:["For the skeleton variation, utilize ",t.jsx(e.code,{children:"<cds-radio-button-skeleton>"}),"."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<cds-radio-button-skeleton></cds-radio-button-skeleton>
`})}),`
`,t.jsxs(e.h2,{id:"cds-radio-button-group-attributes-properties-and-events",children:[t.jsx(e.code,{children:"<cds-radio-button-group>"})," attributes, properties and events"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(e.code,{children:"<cds-radio-button-group disabled>"}),") and ",t.jsx(e.code,{children:"false"}),` means not setting the attribute
(e.g. `,t.jsx(e.code,{children:"<cds-radio-button-group>"})," without ",t.jsx(e.code,{children:"disabled"})," attribute)."]}),`
`,t.jsx(r,{of:"cds-radio-button-group"}),`
`,t.jsxs(e.h2,{id:"cds-radio-button-group-attributes-properties-and-events-1",children:[t.jsx(e.code,{children:"<cds-radio-button-group>"})," attributes, properties and events"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(e.code,{children:"<cds-radio-button-group disabled>"}),") and ",t.jsx(e.code,{children:"false"}),` means not setting the attribute
(e.g. `,t.jsx(e.code,{children:"<cds-radio-button-group>"})," without ",t.jsx(e.code,{children:"disabled"})," attribute)."]}),`
`,t.jsx(r,{of:"cds-radio-button-group"})]})}function T(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{T as default};
