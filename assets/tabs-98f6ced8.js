import{j as e}from"./jsx-runtime-feeeffe0.js";import{u as s}from"./index-ff638d55.js";import{ae as d,af as i,ag as o}from"./index-c9446c32.js";import{c as r,a as l}from"./storybook-cdn-4cc58f60.js";import{T as c}from"./tabs.stories-2cdfb982.js";import"./iframe-f75e0ec2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./property-da2637ab.js";import"./state-7d5425f0.js";import"./query-b9d3c2af.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./carbon-element-59fbbccb.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./collection-helpers-3389bc25.js";import"./16-dfb8f0c2.js";import"./spread-61d77317.js";import"./16-441d7cbb.js";import"./content-switcher-item-2b921bc9.js";import"./focus-73f58502.js";import"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import"./checkbox-4cbf61d5.js";import"./16-d3a54398.js";import"./16-81e6b9cc.js";import"./checkbox-skeleton-f3c1a5c2.js";import"./text-input-f5b277bd.js";import"./16-4249ddd2.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./text-input-skeleton-2fc7e4c6.js";function a(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(t.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/tabs",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/tabs",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:"Tabs are used to quickly navigate between views within the same context."}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/tabs/index.js';
`})}),`
`,e.jsx(t.h3,{id:"scss-must-include-with-js-import",children:"SCSS (must include with JS import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`@use '@carbon/styles/scss/components/tabs';
`})}),`
`,e.jsx(i,{children:`${r({components:["tabs"]})}`}),`
`,e.jsx(i,{children:`${l()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-tabs trigger-content="Select an item" value="staging">
  <cds-tab id="tab-all" target="panel-all" value="all">Option 1</cds-tab>
  <cds-tab
    id="tab-cloudFoundry"
    target="panel-cloudFoundry"
    disabled
    value="cloudFoundry"
    >Option 2</cds-tab
  >
  <cds-tab id="tab-staging" target="panel-staging" value="staging"
    >Option 3</cds-tab
  >
  <cds-tab id="tab-dea" target="panel-dea" value="dea">Option 4</cds-tab>
  <cds-tab id="tab-router" target="panel-router" value="router"
    >Option 5</cds-tab
  >
</cds-tabs>
<div class="cds-ce-demo-devenv--tab-panels">
  <div id="panel-all" role="tabpanel" aria-labelledby="tab-all" hidden>
    <h4>Content for option 1</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
  <div
    id="panel-cloudFoundry"
    role="tabpanel"
    aria-labelledby="tab-cloudFoundry"
    hidden>
    <h4>Content for option 2</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
  <div id="panel-staging" role="tabpanel" aria-labelledby="tab-staging" hidden>
    <h4>Content for option 3</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
  <div id="panel-dea" role="tabpanel" aria-labelledby="tab-dea" hidden>
    <h4>Content for option 4</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
  <div id="panel-router" role="tabpanel" aria-labelledby="tab-router" hidden>
    <h4>Content for option 5</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>
`})}),`
`,e.jsx(t.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsxs(t.p,{children:["For the skeleton variation, utilize ",e.jsx(t.code,{children:"<cds-tabs-skeleton>"}),` and
`,e.jsx(t.code,{children:"<cds-tab-skeleton>"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-tabs-skeleton>
  <cds-tab-skeleton></cds-tab-skeleton>
  <cds-tab-skeleton></cds-tab-skeleton>
  <cds-tab-skeleton></cds-tab-skeleton>
  <cds-tab-skeleton></cds-tab-skeleton>
  <cds-tab-skeleton></cds-tab-skeleton>
</cds-tabs-skeleton>
`})}),`
`,e.jsxs(t.h2,{id:"cds-tabs-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-tabs>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: ",e.jsx(t.code,{children:"cds-content-switcher-*"})," events are not fired from ",e.jsx(t.code,{children:"<cds-tabs>"}),"."]}),`
`,e.jsx(o,{of:"cds-tabs"}),`
`,e.jsxs(t.h2,{id:"cds-tab-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-tab>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-tab disabled>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-tab>"})," without ",e.jsx(t.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(o,{of:"cds-tab"})]})}function W(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{W as default};
