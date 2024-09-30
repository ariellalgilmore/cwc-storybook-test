import{j as t}from"./jsx-runtime-29019649.js";import{u as s}from"./index-081880b6.js";import{ae as r,af as e,ag as c}from"./index-775d7884.js";import{c as a,a as p}from"./storybook-cdn-4cc58f60.js";import{I as m}from"./icon-button.stories-5fcc81da.js";import"./iframe-532ac6a9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./icon-button-e8231e03.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./tooltip-content-1105f219.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./popover-content-d3dfbbea.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./popover-controller-26cce6f0.js";import"./button-4ef875e3.js";import"./if-defined-21892bb5.js";import"./focus-73f58502.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import"./spread-61d77317.js";function i(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:m}),`
`,t.jsx(n.h1,{id:"icon-button",children:"Icon Button"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:[`💡 Check our
`,t.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/icon-button",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/icon-button",rel:"nofollow",children:t.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"icon-button"}),` component is useful when you have a button where the content
is an icon. In this situation, it's important that the button itself is labeled
in a way that can be understandable by mouse, keyboard, and screen readers. As a
result, this component makes it easy to create accessible icon buttons`]}),`
`,t.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/icon-button/index.js';
`})}),`
`,t.jsx(e,{children:`${a({components:["icon-button"]})}`}),`
`,t.jsx(e,{children:`${p()}`}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/icon-button/index.js';
import Edit16 from '@carbon/icons/lib/edit/16';

function App() {
  return html\`<cds-icon-button>
    \${Edit16({ slot: 'icon' })}
    <span slot="tooltip-content"> Tooltip text </span>
  </cds-icon-button>\`;
}
`})}),`
`,t.jsxs(n.h2,{id:"cds-icon-button-attributes-and-properties",children:[t.jsx(n.code,{children:"<cds-icon-button>"})," attributes and properties"]}),`
`,t.jsx(c,{of:"cds-icon-button"})]})}function G(o={}){const{wrapper:n}={...s(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(i,{...o})}):i(o)}export{G as default};
