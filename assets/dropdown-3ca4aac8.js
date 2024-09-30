import{j as e}from"./jsx-runtime-ca9ab4eb.js";import{u as r}from"./index-e87182e5.js";import{ae as i,af as t,ag as d}from"./index-10c5cb00.js";import{c,a as l}from"./storybook-cdn-4cc58f60.js";import{D as a}from"./dropdown.stories-3440b691.js";import"./iframe-be34abd3.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./dropdown-item-7b096599.js";import"./property-da2637ab.js";import"./spread-61d77317.js";import"./directive-12249aa5.js";import"./carbon-element-59fbbccb.js";import"./class-map-4a7e6437.js";import"./state-7d5425f0.js";import"./query-b9d3c2af.js";import"./16-a57556b1.js";import"./16-81e6b9cc.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./focus-73f58502.js";import"./host-listener-0f7877ac.js";import"./validity-01821d7e.js";import"./collection-helpers-3389bc25.js";import"./dropdown-skeleton-47db96c2.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"dropdown",children:"Dropdown"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/dropdown",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/dropdown",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.p,{children:`Dropdown presents a list of options that can be used to filter or sort existing
content.`}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/dropdown/index.js';
`})}),`
`,e.jsx(t,{children:`${c({components:["dropdown"]})}`}),`
`,e.jsx(t,{children:`${l()}`}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-dropdown value="bar">
  <cds-dropdown-item value="foo">Foo</cds-dropdown-item>
  <cds-dropdown-item value="bar">Bar</cds-dropdown-item>
  <cds-dropdown-item value="baz">Baz</cds-dropdown-item>
</cds-dropdown>
`})}),`
`,e.jsx(n.h2,{id:"selection",children:"Selection"}),`
`,e.jsxs(n.p,{children:["When user attempts to select a dropdown item, ",e.jsx(n.code,{children:"cds-dropdown-beingselected"}),` event
fires on `,e.jsx(n.code,{children:"<cds-dropdown>"}),`, which has the following properties in the event
details:`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"item"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"<cds-dropdown-item>"})," being selected."]})]})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"cds-dropdown-beingselected"}),` bubbles and is cancelable. Canceling this event
means canceling change in selection.`]}),`
`,e.jsx(n.h2,{id:"inline-dropdown",children:"Inline dropdown"}),`
`,e.jsxs(n.p,{children:["You can place a ",e.jsx(n.code,{children:"cds-dropdown"}),` inline with other content by using the inline
variant`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-dropdown type="inline">
  <cds-dropdown-item value="foo">Foo</cds-dropdown-item>
  <cds-dropdown-item value="bar">Bar</cds-dropdown-item>
  <cds-dropdown-item value="baz">Baz</cds-dropdown-item>
</cds-dropdown>
`})}),`
`,e.jsx(n.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsxs(n.p,{children:["For the skeleton variation, utilize ",e.jsx(n.code,{children:"<cds-dropdown-skeleton>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-dropdown-skeleton></cds-dropdown-skeleton>
`})}),`
`,e.jsxs(n.h2,{id:"cds-dropdown-attributes-properties-and-events",children:[e.jsx(n.code,{children:"<cds-dropdown>"})," attributes, properties and events"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-dropdown open>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-dropdown>"})," without ",e.jsx(n.code,{children:"open"})," attribute)."]}),`
`,e.jsx(d,{of:"cds-dropdown"}),`
`,e.jsxs(n.h2,{id:"cds-dropdown-item-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-dropdown-item>"})," attributes and properties"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-dropdown-item disabled>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(n.code,{children:"<cds-dropdown-item>"})," without ",e.jsx(n.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(d,{of:"cds-dropdown-item"})]})}function G(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{G as default};
