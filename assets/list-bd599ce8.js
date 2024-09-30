import{j as e}from"./jsx-runtime-c7a019d5.js";import{u as d}from"./index-e2a81c98.js";import{af as i,ag as r}from"./index-4bcb7531.js";import{c as l,a as c}from"./storybook-cdn-4cc58f60.js";import"./iframe-7f5a54d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";function n(t){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"list",children:"List"}),`
`,e.jsx(s.p,{children:"Represents a list."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[`💡 Check our
`,e.jsx(s.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/list",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/list",rel:"nofollow",children:e.jsx(s.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(s.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(s.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(s.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/list/index.js';
`})}),`
`,e.jsx(i,{children:`${l({components:["list"]})}`}),`
`,e.jsx(i,{children:`${c()}`}),`
`,e.jsx(s.h3,{id:"html",children:"HTML"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<h3>cds-ordered-list</h3>

<cds-ordered-list>
  <cds-list-item>
    Ordered List level 1
    <cds-ordered-list>
      <cds-list-item>Ordered List level 2</cds-list-item>
      <cds-list-item>
        Ordered List level 2
        <cds-ordered-list>
          <cds-list-item>Ordered List level 2</cds-list-item>
          <cds-list-item>Ordered List level 2</cds-list-item>
        </cds-ordered-list>
      </cds-list-item>
    </cds-ordered-list>
  </cds-list-item>
  <cds-list-item>Ordered List level 1</cds-list-item>
  <cds-list-item>Ordered List level 1</cds-list-item>
</cds-ordered-list>

<h3>cds-unordered-list</h3>

<cds-unordered-list>
  <cds-list-item>
    Unordered List level 1
    <cds-unordered-list>
      <cds-list-item>Unordered List level 2</cds-list-item>
      <cds-list-item>
        Unordered List level 2
        <cds-unordered-list>
          <cds-list-item>Unordered List level 2</cds-list-item>
          <cds-list-item>Unordered List level 2</cds-list-item>
        </cds-unordered-list>
      </cds-list-item>
    </cds-unordered-list>
  </cds-list-item>
  <cds-list-item>Unordered List level 1</cds-list-item>
  <cds-list-item>Unordered List level 1</cds-list-item>
</cds-unordered-list>
`})}),`
`,e.jsxs(s.h2,{id:"cds-list-item-attributes-and-properties",children:[e.jsx(s.code,{children:"<cds-list-item>"})," attributes and properties"]}),`
`,e.jsxs(s.p,{children:["Note: For ",e.jsx(s.code,{children:"boolean"})," attributes, ",e.jsx(s.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(s.code,{children:"<cds-list nested>"}),") and ",e.jsx(s.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(s.code,{children:"<cds-list>"})," without ",e.jsx(s.code,{children:"nested"})," attribute)."]}),`
`,e.jsx(r,{of:"cds-list-item"})]})}function L(t={}){const{wrapper:s}={...d(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{L as default};
