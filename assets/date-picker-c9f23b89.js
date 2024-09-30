import{j as e}from"./jsx-runtime-ca9ab4eb.js";import{u as c}from"./index-e87182e5.js";import{ae as d,af as i,ag as r}from"./index-10c5cb00.js";import{c as a,a as o}from"./storybook-cdn-4cc58f60.js";import{D as p}from"./date-picker.stories-5694d178.js";import"./iframe-be34abd3.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./carbon-element-59fbbccb.js";import"./text-input-f5b277bd.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./16-4249ddd2.js";import"./spread-61d77317.js";import"./16-81e6b9cc.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./if-non-empty-f918a1a3.js";import"./if-defined-21892bb5.js";import"./validity-01821d7e.js";import"./date-picker-input-skeleton-3ba49b61.js";import"./host-listener-0f7877ac.js";import"./collection-helpers-3389bc25.js";import"./16-441d7cbb.js";import"./16-dfb8f0c2.js";import"./state-7d5425f0.js";import"./focus-73f58502.js";import"./shared-enums-5977151c.js";import"./layer-d66987ad.js";import"./with-layer-c4dddb92.js";function s(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:p}),`
`,e.jsx(t.h1,{id:"date-picker",children:"Date picker"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/date-picker",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/date-picker",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`Date and time pickers allow users to select a single or a range of dates and
times.`}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/date-picker/index.js';
`})}),`
`,e.jsx(i,{children:`${a({components:["date-picker"]})}`}),`
`,e.jsx(i,{children:`${o()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-date-picker>
  <cds-date-picker-input
    label-text="Date Picker label"
    placeholder="mm/dd/yyyy">
  </cds-date-picker-input>
</cds-date-picker>
`})}),`
`,e.jsx(t.h2,{id:"single-date-picker",children:"Single date picker"}),`
`,e.jsx(t.p,{children:"A single Date Picker consists of an input field and a calendar."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-date-picker>
  <cds-date-picker-input
    kind="single"
    label-text="Date Picker label"
    placeholder="mm/dd/yyyy">
  </cds-date-picker-input>
</cds-date-picker>
`})}),`
`,e.jsx(t.h2,{id:"range-date-picker",children:"Range date picker"}),`
`,e.jsx(t.p,{children:"A range Date Picker consists of two input fields and a calendar."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-date-picker>
  <cds-date-picker-input
    kind="from"
    label-text="Date Picker label"
    placeholder="mm/dd/yyyy"
    size="lg">
  </cds-date-picker-input>
  <cds-date-picker-input
    kind="to"
    label-text="Date Picker label"
    placeholder="mm/dd/yyyy"
    size="lg">
  </cds-date-picker-input>
</cds-date-picker>
`})}),`
`,e.jsx(t.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsxs(t.p,{children:["For the skeleton variation, utilize ",e.jsx(t.code,{children:"<cds-date-picker-input-skeleton>"}),"."]}),`
`,e.jsx(t.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-date-picker-input-skeleton kind="simple"></cds-date-picker-input-skeleton>
`})}),`
`,e.jsx(t.h3,{id:"single",children:"Single"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-date-picker-input-skeleton kind="single"></cds-date-picker-input-skeleton>
`})}),`
`,e.jsx(t.h3,{id:"range",children:"Range"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div>
  <cds-date-picker-input-skeleton kind="from"></cds-date-picker-input-skeleton>
  <cds-date-picker-input-skeleton kind="to"></cds-date-picker-input-skeleton>
</div>
`})}),`
`,e.jsxs(t.h2,{id:"cds-date-picker-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-date-picker>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-date-picker open>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-date-picker>"})," without ",e.jsx(t.code,{children:"open"})," attribute)."]}),`
`,e.jsx(r,{of:"cds-date-picker"}),`
`,e.jsxs(t.h2,{id:"cds-date-picker-input-attributes-and-properties",children:[e.jsx(t.code,{children:"<cds-date-picker-input>"})," attributes and properties"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-date-picker-input light>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(t.code,{children:"<cds-date-picker-input>"})," without ",e.jsx(t.code,{children:"light"})," attribute)."]}),`
`,e.jsx(r,{of:"cds-date-picker-input"})]})}function Q(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{Q as default};
