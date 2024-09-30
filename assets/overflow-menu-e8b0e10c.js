import{j as e}from"./jsx-runtime-508ac468.js";import{u as s}from"./index-957a5a66.js";import{ae as c,af as r,ag as t}from"./index-31737638.js";import{c as m,a as d}from"./storybook-cdn-4cc58f60.js";import{O as l}from"./overflow-menu.stories-6c1c5e0d.js";import"./iframe-7e1ca180.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./overflow-menu-body-0fa120a6.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./focus-73f58502.js";import"./collection-helpers-3389bc25.js";import"./icon-button-e8231e03.js";import"./tooltip-content-1105f219.js";import"./popover-content-d3dfbbea.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./popover-controller-26cce6f0.js";import"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import"./overflow-menu-item-71e19e1e.js";import"./16-46438ed3.js";import"./spread-61d77317.js";function i(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(o.h1,{id:"overflow-menu",children:"Overflow menu"}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[`💡 Check our
`,e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/overflow-menu",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/overflow-menu",rel:"nofollow",children:e.jsx(o.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(o.p,{children:`Overflow menu is used when additional options are available to the user and
there is a space constraint. Create overflow menu item components for each
option on the menu.`}),`
`,e.jsx(o.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(o.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(o.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/overflow-menu/index.js';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
`})}),`
`,e.jsx(r,{children:`${m({components:["overflow-menu"]})}`}),`
`,e.jsx(r,{children:`${d()}`}),`
`,e.jsx(o.h3,{id:"html",children:"HTML"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<cds-overflow-menu>
  \${OverflowMenuVertical16({ class: \`\${prefix}--overflow-menu__icon\`, slot:
  'icon', })}
  <span slot="tooltip-content"> Options </span>
  <cds-overflow-menu-body>
    <cds-overflow-menu-item>Option 1</cds-overflow-menu-item>
    <cds-overflow-menu-item>Option 2</cds-overflow-menu-item>
    <cds-overflow-menu-item>Option 3</cds-overflow-menu-item>
    <cds-overflow-menu-item>Option 4</cds-overflow-menu-item>
    <cds-overflow-menu-item>Option 5</cds-overflow-menu-item>
  </cds-overflow-menu-body>
</cds-overflow-menu>
`})}),`
`,e.jsxs(o.h2,{id:"cds-overflow-menu-attributes-and-properties",children:[e.jsx(o.code,{children:"<cds-overflow-menu>"})," attributes and properties"]}),`
`,e.jsxs(o.p,{children:["Note: For ",e.jsx(o.code,{children:"boolean"})," attributes, ",e.jsx(o.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(o.code,{children:"<cds-overflow-menu open>"}),") and ",e.jsx(o.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(o.code,{children:"<cds-overflow-menu>"})," without ",e.jsx(o.code,{children:"open"})," attribute)."]}),`
`,e.jsx(t,{of:"cds-overflow-menu"}),`
`,e.jsxs(o.h2,{id:"cds-overflow-menu-body-attributes-and-properties",children:[e.jsx(o.code,{children:"<cds-overflow-menu-body>"})," attributes and properties"]}),`
`,e.jsx(t,{of:"cds-overflow-menu-body"}),`
`,e.jsxs(o.h2,{id:"cds-overflow-menu-item-attributes-and-properties",children:[e.jsx(o.code,{children:"<cds-overflow-menu-item>"})," attributes and properties"]}),`
`,e.jsxs(o.p,{children:["Note: For ",e.jsx(o.code,{children:"boolean"})," attributes, ",e.jsx(o.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(o.code,{children:"<cds-overflow-menu-item disabled>"}),") and ",e.jsx(o.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(o.code,{children:"<cds-overflow-menu-item>"})," without ",e.jsx(o.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(t,{of:"cds-overflow-menu-item"})]})}function B(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{B as default};
