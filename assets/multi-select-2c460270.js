import{j as e}from"./jsx-runtime-508ac468.js";import{u as c}from"./index-957a5a66.js";import{ae as o,af as i,ag as n}from"./index-31737638.js";import{c as r,a as d}from"./storybook-cdn-4cc58f60.js";import{M as a}from"./multi-select.stories-98345ada.js";import"./iframe-7e1ca180.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./multi-select-item-afab8586.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./16-9baaa345.js";import"./spread-61d77317.js";import"./carbon-element-59fbbccb.js";import"./collection-helpers-3389bc25.js";import"./dropdown-item-7b096599.js";import"./state-7d5425f0.js";import"./16-a57556b1.js";import"./16-81e6b9cc.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./focus-73f58502.js";import"./host-listener-0f7877ac.js";import"./validity-01821d7e.js";import"./layer-d66987ad.js";import"./with-layer-c4dddb92.js";function l(s){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(t.h1,{id:"multi-select",children:"Multi select"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/multi-select",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/multi-select",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:"Multi select is used when user needs to select multiple options from a dropdown."}),`
`,e.jsx(t.p,{children:`The label remains persistent within the dropdown. Once the user chooses an
option from the list, a number badge will appear to the left of the label
containing the total number of selected items. Selected options float to the top
of the list in alphanumeric order.`}),`
`,e.jsx(t.p,{children:`To clear all selected items from a list, hover over the number badge and click
the “x” icon next to the value. To help with clarity, a browser tooltip appears
when the user hovers over the “x” (or close) icon to indicate the click action
results.`}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/multi-select/index.js';
`})}),`
`,e.jsx(i,{children:`${r({components:["multi-select"]})}`}),`
`,e.jsx(i,{children:`${d()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-multi-select value="foo,baz">
  <cds-multi-select-item value="foo">Foo</cds-multi-select-item>
  <cds-multi-select-item value="bar">Bar</cds-multi-select-item>
  <cds-multi-select-item value="baz">Baz</cds-multi-select-item>
</cds-multi-select>
`})}),`
`,e.jsx(t.h2,{id:"filter-mode",children:"Filter mode"}),`
`,e.jsxs(t.p,{children:[`If you'd like to have a search bar to filter through the dropdown options, you
can add the `,e.jsx(t.code,{children:"filterable"})," boolean to the ",e.jsx(t.code,{children:"<cds-multi-select>"})," component."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-multi-select value="foo,baz" filterable>
  <cds-multi-select-item value="foo">Foo</cds-multi-select-item>
  <cds-multi-select-item value="bar">Bar</cds-multi-select-item>
  <cds-multi-select-item value="baz">Baz</cds-multi-select-item>
</cds-multi-select>
`})}),`
`,e.jsxs(t.p,{children:[`Often you want to render the multi select items from your data. Below is an
example of `,e.jsx(t.a,{href:"https://lit-html.polymer-project.org",rel:"nofollow",children:e.jsx(t.code,{children:"lit-html"})}),`, but similar
stories apply to React, Angular, Vue, Backbone, Knockout and many others:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`html\`
  <cds-multi-select>
    \${items.map(
      (item) =>
        html\`
          <cds-multi-select-item value="\${item.value}"
            >\${item.title}</cds-multi-select-item
          >
        \`
    )}
  </cds-multi-select>
\`;
`})}),`
`,e.jsx(t.h2,{id:"selection",children:"Selection"}),`
`,e.jsxs(t.p,{children:[`When user attempts to change selection in multi select item,
`,e.jsx(t.code,{children:"cds-multi-select-beingselected"})," event fires on ",e.jsx(t.code,{children:"<cds-multi-select>"}),`, which has
the following properties in the event details:`]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Property"}),e.jsx(t.th,{children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"item"})}),e.jsxs(t.td,{children:["The ",e.jsx(t.code,{children:"<cds-multi-select-item>"})," whose selection is being changed."]})]})})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"cds-multi-select-beingselected"}),` bubbles and is cancelable. Canceling this event
means canceling change in selection.`]}),`
`,e.jsx(t.h2,{id:"note-on-keyboard-navigation",children:"Note on keyboard navigation"}),`
`,e.jsxs(t.p,{children:["Similar to native ",e.jsx(t.code,{children:"<select>"}),", ",e.jsx(t.code,{children:"<cds-multi-select>"}),` keeps focusing on itself even
while the menu is open and user is navigating through arrow keys. Given that,
`,e.jsx(t.code,{children:"<cds-multi-select-item>"}),` does not handle keyboard events by itself.
`,e.jsx(t.code,{children:"<cds-multi-select>"}),` takes care of handling keyboard events for multi select
items and updates `,e.jsx(t.code,{children:"<cds-multi-select-item>"}),"."]}),`
`,e.jsxs(t.h2,{id:"cds-multi-select-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-multi-select>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-multi-select open>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-multi-select>"})," without ",e.jsx(t.code,{children:"open"})," attribute)."]}),`
`,e.jsx(n,{of:"cds-multi-select"}),`
`,e.jsxs(t.h2,{id:"cds-multi-select-item-attributes-and-properties",children:[e.jsx(t.code,{children:"<cds-multi-select-item>"})," attributes and properties"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-multi-select-item disabled>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(t.code,{children:"<cds-multi-select-item>"})," without ",e.jsx(t.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(n,{of:"cds-multi-select-item"})]})}function I(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(l,{...s})}):l(s)}export{I as default};
