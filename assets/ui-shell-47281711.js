import{j as e}from"./jsx-runtime-feeeffe0.js";import{u as c}from"./index-ff638d55.js";import{ae as a,af as s,ag as i}from"./index-c9446c32.js";import{c as r,a as m}from"./storybook-cdn-4cc58f60.js";import{U as o}from"./ui-shell.stories-59c42f83.js";import"./iframe-f75e0ec2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./spread-61d77317.js";import"./directive-12249aa5.js";import"./carbon-element-59fbbccb.js";import"./property-da2637ab.js";import"./class-map-4a7e6437.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./collection-helpers-3389bc25.js";import"./query-b9d3c2af.js";import"./button-4ef875e3.js";import"./if-defined-21892bb5.js";import"./focus-73f58502.js";import"./16-a57556b1.js";import"./20-6cfa9697.js";import"./skip-to-content-8e1e9b95.js";import"./modal-c7d1de3b.js";function t(d){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o}),`
`,e.jsx(n.h1,{id:"ui-shell",children:"UI Shell"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/ui-shell",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/ui-shell",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.p,{children:"UI Shell in Carbon Design System consists of several component groups."}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/ui-shell/index.js';
`})}),`
`,e.jsx(s,{children:`${r({components:["ui-shell"]})}`}),`
`,e.jsx(s,{children:`${m()}`}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-header aria-label="IBM Platform Name">
  <cds-header-menu-button
    button-label-active="Close menu"
    button-label-inactive="Open menu"></cds-header-menu-button>
  <cds-header-name href="javascript:void 0" prefix="IBM"
    >[Platform]</cds-header-name
  >
  <cds-header-nav menu-bar-label="IBM [Platform]">
    <cds-header-nav-item href="javascript:void 0">Link 1</cds-header-nav-item>
    <cds-header-nav-item href="javascript:void 0">Link 2</cds-header-nav-item>
    <cds-header-nav-item href="javascript:void 0">Link 3</cds-header-nav-item>
    <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
      <cds-header-menu-item href="javascript:void 0"
        >Sub-link 1</cds-header-menu-item
      >
      <cds-header-menu-item href="javascript:void 0"
        >Sub-link 2</cds-header-menu-item
      >
      <cds-header-menu-item href="javascript:void 0"
        >Sub-link 3</cds-header-menu-item
      >
    </cds-header-menu>
  </cds-header-nav>
</cds-header>
<cds-side-nav aria-label="Side navigation" expanded>
  <cds-side-nav-items>
    <cds-side-nav-menu title="L0 menu">
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
    </cds-side-nav-menu>
    <cds-side-nav-menu title="L0 menu">
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item active aria-current="page" href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
    </cds-side-nav-menu>
    <cds-side-nav-menu title="L0 menu">
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
    </cds-side-nav-menu>
    <cds-side-nav-divider></cds-side-nav-divider>
    <cds-side-nav-link href="javascript:void(0)">L0 link</cds-side-nav-link>
    <cds-side-nav-link href="javascript:void(0)">L0 link</cds-side-nav-link>
  </cds-side-nav-items>
</cds-side-nav>
`})}),`
`,e.jsx(n.h2,{id:"side-nav",children:"Side nav"}),`
`,e.jsx(n.p,{children:"Side nav in UI Shell consists of the following components:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Tag"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<side-nav>"})}),e.jsx(n.td,{children:"The top-level container"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<side-nav-item>"})}),e.jsx(n.td,{children:"The container of the nav items"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<side-nav-link>"})}),e.jsx(n.td,{children:"Nav item, working as a link"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<side-nav-menu>"})}),e.jsx(n.td,{children:"Nav item, working as a container of sub-items"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<side-nav-menu-item>"})}),e.jsx(n.td,{children:"Nav item, working as as a sub-item and as a link"})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-side-nav aria-label="Side navigation" expanded>
  <cds-side-nav-items>
    <cds-side-nav-menu title="L0 menu">
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
    </cds-side-nav-menu>
    <cds-side-nav-menu title="L0 menu">
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item active aria-current="page" href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
    </cds-side-nav-menu>
    <cds-side-nav-menu title="L0 menu">
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="www.ibm.com">
        L0 menu item
      </cds-side-nav-menu-item>
    </cds-side-nav-menu>
    <cds-side-nav-divider></cds-side-nav-divider>
    <cds-side-nav-link href="javascript:void(0)">L0 link</cds-side-nav-link>
    <cds-side-nav-link href="javascript:void(0)">L0 link</cds-side-nav-link>
  </cds-side-nav-items>
</cds-side-nav>
`})}),`
`,e.jsx(n.h3,{id:"expandingcollapsing",children:"Expanding/collapsing"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<cds-side-nav>"})," has ",e.jsx(n.code,{children:"expanded"}),` attribute to make it expanded. In its collapsed
state, hovering over the side nav expands it temporarily.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<cds-side-nav>"})," can be made non-collapsible, by setting ",e.jsx(n.code,{children:"fixed"})," attribute."]}),`
`,e.jsx(n.h3,{id:"selecting-a-nav-item",children:"Selecting a nav item"}),`
`,e.jsxs(n.p,{children:["Unlike ",e.jsx(n.code,{children:"<cds-dropdown>"}),`, etc., user gesture of side nav item won't update the
selection by itself. The assumption is that following the link in
`,e.jsx(n.code,{children:"<side-nav-link>"}),"/",e.jsx(n.code,{children:"<side-nav-menu-item>"}),` triggers routing in application, and
application chooses which `,e.jsx(n.code,{children:"<side-nav-link>"}),"/",e.jsx(n.code,{children:"<side-nav-menu-item>"}),` to set
`,e.jsx(n.code,{children:"active"})," attribute to, with the new URL."]}),`
`,e.jsx(n.h3,{id:"using-with-header-nav",children:"Using with header nav"}),`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"<cds-side-nav>"})," is used along with header (",e.jsx(n.code,{children:"<cds-header>"}),`), the side nav
should be pushed down. To do that, add below style to your application:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`cds-header ~ cds-side-nav {
  margin-top: 3rem;
  height: calc(100% - 3rem);
}
`})}),`
`,e.jsxs(n.h3,{id:"cds-side-nav-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-side-nav>"})," attributes and properties"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-side-nav expanded>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-side-nav>"})," without ",e.jsx(n.code,{children:"expanded"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-side-nav"}),`
`,e.jsxs(n.h3,{id:"cds-side-nav-link-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-side-nav-link>"})," attributes and properties"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-side-nav-link active>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-side-nav-link>"})," without ",e.jsx(n.code,{children:"active"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-side-nav-link"}),`
`,e.jsxs(n.h3,{id:"cds-side-nav-menu-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-side-nav-menu>"})," attributes and properties"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-side-nav-menu active>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-side-nav-menu>"})," without ",e.jsx(n.code,{children:"active"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-side-nav-menu"}),`
`,e.jsxs(n.h3,{id:"cds-side-nav-menu-item-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-side-nav-menu-item>"})," attributes and properties"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-side-nav-menu-item active>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(n.code,{children:"<cds-side-nav-menu-item>"})," without ",e.jsx(n.code,{children:"active"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-side-nav-menu-item"}),`
`,e.jsx(n.h2,{id:"header-nav",children:"Header nav"}),`
`,e.jsx(n.p,{children:"Header nav in UI Shell consists of the following components:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Tag"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-header>"})}),e.jsx(n.td,{children:"The top-level container"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-header-nav>"})}),e.jsx(n.td,{children:"The nav bar"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-header-nav-item>"})}),e.jsx(n.td,{children:"Nav item"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-header-menu>"})}),e.jsx(n.td,{children:"Nav item, working as a container of sub-items"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-header-menu-item>"})}),e.jsx(n.td,{children:"Nav item, working as as a sub-item"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-header-menu-button>"})}),e.jsx(n.td,{children:"The expando button for side nav"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-header-name>"})}),e.jsx(n.td,{children:"The UI to show product name"})]})]})]}),`
`,e.jsxs(n.h3,{id:"cds-header-nav-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-header-nav>"})," attributes and properties"]}),`
`,e.jsx(i,{of:"cds-header-nav"}),`
`,e.jsxs(n.h3,{id:"cds-header-nav-item-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-header-nav-item>"})," attributes and properties"]}),`
`,e.jsx(i,{of:"cds-header-nav-item"}),`
`,e.jsxs(n.h3,{id:"cds-header-menu-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-header-menu>"})," attributes and properties"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-header-menu expanded>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-header-menu>"})," without ",e.jsx(n.code,{children:"expanded"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-header-menu"}),`
`,e.jsxs(n.h3,{id:"cds-header-menu-button-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-header-menu-button>"})," attributes and properties"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-header-menu-button active>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(n.code,{children:"<cds-header-menu-button>"})," without ",e.jsx(n.code,{children:"active"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-header-menu-button"}),`
`,e.jsxs(n.h3,{id:"cds-header-menu-item-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-header-menu-item>"})," attributes and properties"]}),`
`,e.jsx(i,{of:"cds-header-menu-item"}),`
`,e.jsxs(n.h3,{id:"cds-header-name-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-header-name>"})," attributes and properties"]}),`
`,e.jsx(i,{of:"cds-header-name"})]})}function P(d={}){const{wrapper:n}={...c(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(t,{...d})}):t(d)}export{P as default};
