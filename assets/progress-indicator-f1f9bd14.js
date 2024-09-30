import{j as e}from"./jsx-runtime-508ac468.js";import{u as i}from"./index-957a5a66.js";import{ae as c,af as r,ag as n}from"./index-31737638.js";import{c as a,a as d}from"./storybook-cdn-4cc58f60.js";import{P as p}from"./progress-indicator.stories-df16dfbe.js";import"./iframe-7e1ca180.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./collection-helpers-3389bc25.js";import"./spread-61d77317.js";import"./directive-12249aa5.js";import"./focus-73f58502.js";import"./skeleton-text-084071b9.js";import"./class-map-4a7e6437.js";import"./if-non-empty-f918a1a3.js";function o(t){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:p}),`
`,e.jsx(s.h1,{id:"progress-indicator",children:"Progress indicator"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[`💡 Check our
`,e.jsx(s.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/progress-indicator",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/progress-indicator",rel:"nofollow",children:e.jsx(s.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(s.p,{children:`Progress indicator is a visual representation of a users progress through a set
of steps. They guide the user through a number of steps in order to complete a
specified process.`}),`
`,e.jsx(s.p,{children:`Use progress indicators to keep the user on track when completing a specific
task. By dividing the end goal into smaller, sub-tasks, it increases the
percentage of completeness as each task is completed.`}),`
`,e.jsx(s.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(s.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(s.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/progress-indicator/index.js';
`})}),`
`,e.jsx(r,{children:`${a({components:["progress-indicator"]})}`}),`
`,e.jsx(r,{children:`${d()}`}),`
`,e.jsx(s.h3,{id:"html",children:"HTML"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<cds-progress-indicator>
  <cds-progress-step
    label-text="Label"
    secondary-label-text="Secondary label"
    state="invalid"></cds-progress-step>
  <cds-progress-step
    label-text="Label"
    secondary-label-text="Secondary label"
    state="complete"></cds-progress-step>
  <cds-progress-step
    label-text="Label"
    secondary-label-text="Secondary label"
    state="current"></cds-progress-step>
  <cds-progress-step
    disabled
    label-text="Label"
    secondary-label-text="Secondary label"></cds-progress-step>
  <cds-progress-step
    label-text="Label"
    secondary-label-text="Secondary label"></cds-progress-step>
</cds-progress-indicator>
`})}),`
`,e.jsx(s.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsxs(s.p,{children:["For the skeleton variation, utilize ",e.jsx(s.code,{children:"<cds-progress-indicator-skeleton>"}),` and
`,e.jsx(s.code,{children:"<cds-progress-step-skeleton>"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<cds-progress-indicator-skeleton>
  <cds-progress-step-skeleton></cds-progress-step-skeleton>
  <cds-progress-step-skeleton></cds-progress-step-skeleton>
  <cds-progress-step-skeleton></cds-progress-step-skeleton>
</cds-progress-indicator-skeleton>
`})}),`
`,e.jsxs(s.h2,{id:"cds-progress-indicator-attributes-and-properties",children:[e.jsx(s.code,{children:"<cds-progress-indicator>"})," attributes and properties"]}),`
`,e.jsxs(s.p,{children:["Note: For ",e.jsx(s.code,{children:"boolean"})," attributes, ",e.jsx(s.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(s.code,{children:"<cds-progress-indicator vertical>"}),") and ",e.jsx(s.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(s.code,{children:"<cds-progress-indicator>"})," without ",e.jsx(s.code,{children:"vertical"})," attribute)."]}),`
`,e.jsx(n,{of:"cds-progress-indicator"}),`
`,e.jsxs(s.h2,{id:"cds-progress-step-attributes-and-properties",children:[e.jsx(s.code,{children:"<cds-progress-step>"})," attributes and properties"]}),`
`,e.jsxs(s.p,{children:["Note: For ",e.jsx(s.code,{children:"boolean"})," attributes, ",e.jsx(s.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(s.code,{children:"<cds-progress-step disabled>"}),") and ",e.jsx(s.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(s.code,{children:"<cds-progress-step>"})," without ",e.jsx(s.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(n,{of:"cds-progress-step"})]})}function D(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(o,{...t})}):o(t)}export{D as default};
