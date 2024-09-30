import{j as e}from"./jsx-runtime-c7a019d5.js";import{u as c}from"./index-e2a81c98.js";import{ae as r,af as n,ag as i}from"./index-4bcb7531.js";import{c as d,a as m}from"./storybook-cdn-4cc58f60.js";import{C as l}from"./combo-box.stories-22aaa6ae.js";import"./iframe-7f5a54d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./combo-box-item-62122f9c.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./16-9baaa345.js";import"./spread-61d77317.js";import"./carbon-element-59fbbccb.js";import"./collection-helpers-3389bc25.js";import"./dropdown-item-7b096599.js";import"./state-7d5425f0.js";import"./16-a57556b1.js";import"./16-81e6b9cc.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./focus-73f58502.js";import"./host-listener-0f7877ac.js";import"./validity-01821d7e.js";import"./if-non-empty-f918a1a3.js";function s(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(o.h1,{id:"combo-box",children:"Combo box"}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[`💡 Check our
`,e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/combo-box",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/combo-box",rel:"nofollow",children:e.jsx(o.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(o.p,{children:`A combobox allows the user to make a selection from a predefined list of options
and is typically used when there are a large amount of options to choose from.`}),`
`,e.jsx(o.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(o.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(o.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/combo-box/index.js';
`})}),`
`,e.jsx(n,{children:`${d({components:["combo-box"]})}`}),`
`,e.jsx(n,{children:`${m()}`}),`
`,e.jsx(o.h3,{id:"html",children:"HTML"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<cds-combo-box
  helper-text="This is some helper text"
  title-text="Combo box title"
  label="Filter...">
  <cds-combo-box-item value="all">Option 1</cds-combo-box-item>
  <cds-combo-box-item value="cloudFoundry">Option 2</cds-combo-box-item>
  <cds-combo-box-item value="staging">Option 3</cds-combo-box-item>
  <cds-combo-box-item value="dea">Option 4</cds-combo-box-item>
  <cds-combo-box-item value="router">Option 5</cds-combo-box-item>
  <cds-combo-box-item value="support">Option 6</cds-combo-box-item>
  <cds-combo-box-item value="services">Option 7</cds-combo-box-item>
  <cds-combo-box-item value="products">Option 8</cds-combo-box-item>
</cds-combo-box>
`})}),`
`,e.jsx(o.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o.p,{children:`A disabled combobox is available but should not be used as the sole means of
conveying information. For example, if the user must complete a previous form
input before moving on to the combobox, make sure to make that clear to the user
via an error state on the previous form element in addition to disabling the
next element.`}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<cds-combo-box
  helper-text="This is some helper text"
  title-text="Combo box title"
  label="Filter..."
  disabled>
  <cds-combo-box-item value="all">Option 1</cds-combo-box-item>
  <cds-combo-box-item value="cloudFoundry">Option 2</cds-combo-box-item>
  <cds-combo-box-item value="staging">Option 3</cds-combo-box-item>
  <cds-combo-box-item value="dea">Option 4</cds-combo-box-item>
  <cds-combo-box-item value="router">Option 5</cds-combo-box-item>
  <cds-combo-box-item value="support">Option 6</cds-combo-box-item>
  <cds-combo-box-item value="services">Option 7</cds-combo-box-item>
  <cds-combo-box-item value="products">Option 8</cds-combo-box-item>
</cds-combo-box>
`})}),`
`,e.jsx(o.h2,{id:"labels-and-helper-texts",children:"Labels and Helper Texts"}),`
`,e.jsx(o.p,{children:`The label is not a replacement for a helper or title text under any
circumstances including space restraints. A label should be used to provide
additive information regarding the format of the input. In all cases a helper
text is required in addition to a placeholder.`}),`
`,e.jsx(o.h2,{id:"selection",children:"Selection"}),`
`,e.jsxs(o.p,{children:["When user attempts to select a combo box item, ",e.jsx(o.code,{children:"cds-combo-box-beingselected"}),`
event fires on `,e.jsx(o.code,{children:"<cds-combo-box>"}),`, which has the following properties in the
event details:`]}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Property"}),e.jsx(o.th,{children:"Description"})]})}),e.jsx(o.tbody,{children:e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"item"})}),e.jsxs(o.td,{children:["The ",e.jsx(o.code,{children:"<cds-combo-box-item>"})," being selected."]})]})})]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"cds-combo-box-beingselected"}),` bubbles and is cancelable. Canceling this event
means canceling change in selection.`]}),`
`,e.jsxs(o.h2,{id:"cds-combo-box-attributes-properties-and-events",children:[e.jsx(o.code,{children:"<cds-combo-box>"})," attributes, properties and events"]}),`
`,e.jsxs(o.p,{children:["Note: For ",e.jsx(o.code,{children:"boolean"})," attributes, ",e.jsx(o.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(o.code,{children:"<cds-combo-box open>"}),") and ",e.jsx(o.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(o.code,{children:"<cds-combo-box>"})," without ",e.jsx(o.code,{children:"open"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-combo-box"}),`
`,e.jsxs(o.h2,{id:"cds-combo-box-item-attributes-and-properties",children:[e.jsx(o.code,{children:"<cds-combo-box-item>"})," attributes and properties"]}),`
`,e.jsxs(o.p,{children:["Note: For ",e.jsx(o.code,{children:"boolean"})," attributes, ",e.jsx(o.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(o.code,{children:"<cds-combo-box-item disabled>"}),") and ",e.jsx(o.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(o.code,{children:"<cds-combo-box-item>"})," without ",e.jsx(o.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-combo-box-item"})]})}function I(t={}){const{wrapper:o}={...c(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{I as default};
