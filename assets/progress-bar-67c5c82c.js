import{j as e}from"./jsx-runtime-5c5465e4.js";import{u as o}from"./index-78b33afb.js";import{ae as a,af as t,ag as i}from"./index-d6ce44c6.js";import{c,a as d}from"./storybook-cdn-4cc58f60.js";import{P as p}from"./progress-bar.stories-db163a0d.js";import"./iframe-999c67b6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./16-52e9f813.js";import"./spread-61d77317.js";import"./16-d57aeffe.js";import"./with-layer-c4dddb92.js";function n(s){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:p}),`
`,e.jsx(r.h1,{id:"progress-bar",children:"Progress bar"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[`💡 Check our
`,e.jsx(r.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/progress-bar",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/progress-bar",rel:"nofollow",children:e.jsx(r.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(r.p,{children:`A progress bar indicates that the user’s request has been received and the
application is making progress toward completing the requested action. Progress
bars inform users about the status of ongoing processes, the estimated time of
how long a process will take, or if a request is being executed.`}),`
`,e.jsx(r.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(r.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(r.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/progress-bar/index.js';
`})}),`
`,e.jsx(t,{children:`${c({components:["progress-bar"]})}`}),`
`,e.jsx(t,{children:`${d()}`}),`
`,e.jsx(r.h3,{id:"html",children:"HTML"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<cds-progress-bar
  label="Progress bar label"
  helper-text="Optional helper text"
  value="75">
</cds-progress-bar>
`})}),`
`,e.jsx(r.h2,{id:"indeterminate",children:"Indeterminate"}),`
`,e.jsxs(r.p,{children:[`Indeterminate progress bars are used when the loading progress is unknown or the
amount of wait time can’t be calculated. To use the indeterminate variation,
make sure the `,e.jsx(r.code,{children:"status"})," property is set to ",e.jsx(r.code,{children:"active"})," and there is no ",e.jsx(r.code,{children:"value"}),`
attribute passed in.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<cds-progress-bar
  label="Progress bar label"
  helper-text="Optional helper text"
  status="active">
</cds-progress-bar>
`})}),`
`,e.jsxs(r.h2,{id:"cds-progress-bar-attributes-and-properties",children:[e.jsx(r.code,{children:"<cds-progress-bar>"})," attributes and properties"]}),`
`,e.jsxs(r.p,{children:["Note: For ",e.jsx(r.code,{children:"boolean"})," attributes, ",e.jsx(r.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(r.code,{children:"<cds-progress-bar hide-label>"}),") and ",e.jsx(r.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(r.code,{children:"<cds-progress-bar>"})," without ",e.jsx(r.code,{children:"hide-label"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-progress-bar"})]})}function T(s={}){const{wrapper:r}={...o(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{T as default};
