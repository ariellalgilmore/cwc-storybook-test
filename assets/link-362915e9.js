import{j as n}from"./jsx-runtime-c7a019d5.js";import{u as s}from"./index-e2a81c98.js";import{ae as r,af as i,ag as c}from"./index-4bcb7531.js";import{c as a,a as l}from"./storybook-cdn-4cc58f60.js";import{L as d}from"./link.stories-286d727e.js";import"./iframe-7f5a54d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./16-8e39cfac.js";import"./spread-61d77317.js";import"./directive-12249aa5.js";import"./link-f0981e2c.js";import"./class-map-4a7e6437.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./carbon-element-59fbbccb.js";import"./focus-73f58502.js";function o(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:d}),`
`,n.jsx(e.h1,{id:"link",children:"Link"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`💡 Check our
`,n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/link",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/link",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,n.jsxs(e.p,{children:[`Represents a link. Provided for convenience purpose, you can alternatively use
`,n.jsx(e.code,{children:'<a class="cds--link">'})," with Carbon style in place in light DOM."]}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,n.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,n.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/list/index.js';
`})}),`
`,n.jsx(i,{children:`${a({components:["list"]})}`}),`
`,n.jsx(i,{children:`${l()}`}),`
`,n.jsx(e.h3,{id:"html",children:"HTML"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<cds-link href="https://www.ibm.com"> Link </cds-link>
`})}),`
`,n.jsx(e.h2,{id:"paired-with-icon",children:"Paired with icon"}),`
`,n.jsx(e.p,{children:"Import the desired icon and incorporate with the link text:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import Download16 from '@carbon/icons/lib/download/16';

function App() {
  return html\`<cds-link href="https://www.ibm.com">
    Download \${Download16({ slot: 'icon' })}</cds-link
  >\`;
}
`})}),`
`,n.jsxs(e.h2,{id:"cds-link-attributes-and-properties",children:[n.jsx(e.code,{children:"<cds-link>"})," attributes and properties"]}),`
`,n.jsxs(e.p,{children:["Note: For ",n.jsx(e.code,{children:"boolean"})," attributes, ",n.jsx(e.code,{children:"true"}),` means simply setting the attribute (e.g.
`,n.jsx(e.code,{children:"<cds-link disabled>"}),") and ",n.jsx(e.code,{children:"false"}),` means not setting the attribute (e.g.
`,n.jsx(e.code,{children:"<cds-link>"})," without ",n.jsx(e.code,{children:"disabled"})," attribute)."]}),`
`,n.jsx(c,{of:"cds-link"})]})}function $(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{$ as default};
