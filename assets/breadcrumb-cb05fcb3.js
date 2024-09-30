import{j as r}from"./jsx-runtime-29019649.js";import{u as s}from"./index-081880b6.js";import{ae as b,af as d,ag as n}from"./index-775d7884.js";import{c as a,a as i}from"./storybook-cdn-4cc58f60.js";import{B as t}from"./breadcrumb.stories-550d167b.js";import"./iframe-532ac6a9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./link-f0981e2c.js";import"./if-defined-21892bb5.js";import"./query-b9d3c2af.js";import"./focus-73f58502.js";import"./spread-61d77317.js";import"./overflow-menu-body-0fa120a6.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./collection-helpers-3389bc25.js";import"./icon-button-e8231e03.js";import"./tooltip-content-1105f219.js";import"./popover-content-d3dfbbea.js";import"./popover-controller-26cce6f0.js";import"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";function m(c){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...c.components};return r.jsxs(r.Fragment,{children:[r.jsx(b,{of:t}),`
`,r.jsx(e.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:[`💡 Check our
`,r.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/breadcrumb",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,r.jsx(e.p,{children:r.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/breadcrumb",rel:"nofollow",children:r.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,r.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,r.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,r.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/breadcrumb/index.js';
`})}),`
`,r.jsx(d,{children:`${a({components:["breadcrumb"]})}`}),`
`,r.jsx(d,{children:`${i()}`}),`
`,r.jsx(e.h3,{id:"html",children:"HTML"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<cds-breadcrumb>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="#">Breadcrumb 3</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link>Breadcrumb 4</cds-breadcrumb-link>
  </cds-breadcrumb-item>
</cds-breadcrumb>
`})}),`
`,r.jsx(e.h3,{id:"html-with-overflow-menu",children:"HTML (with overflow-menu)"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<cds-breadcrumb>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="/#">Breadcrumb 2</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-overflow-menu>
      <cds-overflow-menu-body>
        <cds-overflow-menu-item>Breadcrumb 3</cds-overflow-menu-item>
        <cds-overflow-menu-item>Breadcrumb 4</cds-overflow-menu-item>
      </cds-overflow-menu-body>
    </cds-breadcrumb-overflow-menu>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="/#">Breadcrumb 5</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link>Breadcrumb 6</cds-breadcrumb-link>
  </cds-breadcrumb-item>
</cds-breadcrumb>
`})}),`
`,r.jsx(e.h3,{id:"html-skeleton",children:"HTML (skeleton)"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<cds-breadcrumb-skeleton> </cds-breadcrumb-skeleton>
`})}),`
`,r.jsx(e.h3,{id:"html-no-trailing-slash",children:"HTML (no-trailing-slash)"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<cds-breadcrumb no-trailing-slash>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="#">Breadcrumb 3</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link>Breadcrumb 4</cds-breadcrumb-link>
  </cds-breadcrumb-item>
</cds-breadcrumb>
`})}),`
`,r.jsx(e.h3,{id:"html-aria-currentpage",children:'HTML (aria-current="page")'}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<cds-breadcrumb no-trailing-slash>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="#">Breadcrumb 3</cds-breadcrumb-link>
  </cds-breadcrumb-item>
  <cds-breadcrumb-item>
    <cds-breadcrumb-link href="/#" aria-current="page"
      >Breadcrumb 4</cds-breadcrumb-link
    >
  </cds-breadcrumb-item>
</cds-breadcrumb>
`})}),`
`,r.jsxs(e.h2,{id:"cds-breadcrumb-attributes-properties-and-events",children:[r.jsx(e.code,{children:"<cds-breadcrumb>"})," attributes, properties and events"]}),`
`,r.jsx(n,{of:"cds-breadcrumb"}),`
`,r.jsxs(e.h2,{id:"cds-breadcrumb-link-attributes-properties-and-events",children:[r.jsx(e.code,{children:"<cds-breadcrumb-link>"})," attributes, properties and events"]}),`
`,r.jsx(n,{of:"cds-breadcrumb-link"})]})}function I(c={}){const{wrapper:e}={...s(),...c.components};return e?r.jsx(e,{...c,children:r.jsx(m,{...c})}):m(c)}export{I as default};
