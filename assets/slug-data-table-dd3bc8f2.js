import{j as e}from"./jsx-runtime-b0aba563.js";import{u as i}from"./index-e6c45b0c.js";import{ae as l,af as t}from"./index-fa03931b.js";import{c,a as d}from"./storybook-cdn-4cc58f60.js";import{S as a}from"./slug-data-table.stories-0d56a5e7.js";import"./iframe-3b9c0475.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./16-4249ddd2.js";import"./spread-61d77317.js";import"./directive-12249aa5.js";import"./16-c244fb0e.js";import"./table-toolbar-search-2366535b.js";import"./property-da2637ab.js";import"./state-7d5425f0.js";import"./carbon-element-59fbbccb.js";import"./collection-helpers-3389bc25.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./class-map-4a7e6437.js";import"./query-b9d3c2af.js";import"./focus-73f58502.js";import"./16-dfb8f0c2.js";import"./checkbox-4cbf61d5.js";import"./if-defined-21892bb5.js";import"./16-d3a54398.js";import"./16-81e6b9cc.js";import"./checkbox-skeleton-f3c1a5c2.js";import"./radio-button-skeleton-3df2ffb6.js";import"./radio-group-manager-b52ff8da.js";import"./text-input-f5b277bd.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./search-c228858a.js";import"./16-9baaa345.js";import"./icon-button-e8231e03.js";import"./tooltip-content-1105f219.js";import"./popover-content-d3dfbbea.js";import"./popover-controller-26cce6f0.js";import"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import"./link-f0981e2c.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(n.h1,{id:"slug-in-datatable",children:"Slug in DataTable"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://codesandbox.io/s/github/carbon-design-system/carbon-for-ibm-dotcom/tree/main/packages/carbon-web-components/examples/codesandbox/basic/components/slug",rel:"nofollow",children:"CodeSandbox"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://codesandbox.io/s/github/carbon-design-system/carbon-for-ibm-dotcom/tree/main/packages/carbon-web-components/examples/codesandbox/basic/components/slug",rel:"nofollow",children:e.jsx(n.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.p,{children:"The DataTable supports placing a slug in both the column header and row."}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Slug"})," itself is a button that acts as a ",e.jsx(n.code,{children:"Toggletip"}),` trigger. To construct
the contents of the `,e.jsx(n.code,{children:"Slug"}),` callout, you can place the desired elements as a
child of `,e.jsx(n.code,{children:"Slug"})," in a div with slot ",e.jsx(n.code,{children:"body-text"}),", like so:"]}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/slug/index.js';
`})}),`
`,e.jsx(t,{children:`${c({components:["slug"]})}`}),`
`,e.jsx(t,{children:`${d()}`}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-slug size="mini" alignment="bottom-left">
  <div slot="body-text">{Content Here}</div>
</cds-slug>
`})}),`
`,e.jsx(n.h3,{id:"html-with-actions",children:"HTML (with actions)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Slug"}),` also supports the rendering of an action bar at the bottom of the
callout. To achieve this, you can add elements with `,e.jsx(n.code,{children:'slot="actions"'}),` inside the
`,e.jsx(n.code,{children:'slot="body-text"'})," element"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-slug size="mini" alignment="bottom-left">
  <div slot="body-text">
    {Content Here} {Optional Slug action bar}
    <cds-icon-button kind="ghost" slot="actions" size="lg">
      \${View16({ slot: 'icon' })}
      <span slot="tooltip-content"> View </span>
    </cds-icon-button>
    <cds-icon-button kind="ghost" slot="actions" size="lg">
      \${FolderOpen16({ slot: 'icon' })}
      <span slot="tooltip-content"> Open folder</span>
    </cds-icon-button>
    <cds-icon-button kind="ghost" slot="actions" size="lg">
      \${Folders16({ slot: 'icon' })}
      <span slot="tooltip-content"> Folders </span>
    </cds-icon-button>
    <cds-slug-action-button>View details</cds-slug-action-button>
  </div>
</cds-slug>
`})}),`
`,e.jsxs(n.h2,{id:"using-slug-in-datatable",children:["Using ",e.jsx(n.code,{children:"slug"})," in ",e.jsx(n.code,{children:"DataTable"})]}),`
`,e.jsx(n.h3,{id:"using-as-a-column-header",children:"Using as a column header"}),`
`,e.jsxs(n.p,{children:["To use a ",e.jsx(n.code,{children:"Slug"})," inside a column header, you'll need to add a ",e.jsx(n.code,{children:"slug"}),` to the
appropriate `,e.jsx(n.code,{children:"cds-table-header-cell"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table-header-cell>
  Attached groups
  <cds-slug alignment="bottom-left">
    <div slot="body-text">{Content Here}</div>
  </cds-slug>
</cds-table-header-cell>
`})}),`
`,e.jsx(n.h3,{id:"using-in-a-row",children:"Using in a row"}),`
`,e.jsxs(n.p,{children:["To use a ",e.jsx(n.code,{children:"Slug"})," inside a ",e.jsx(n.code,{children:"DataTable"})," row, you'll need to pass in your ",e.jsx(n.code,{children:"Slug"}),`
component to `,e.jsx(n.code,{children:"cds-table-row"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table-row>
  <cds-slug alignment="bottom-left">
    <div slot="body-text">{Content Here}</div>
  </cds-slug>
  <cds-table-cell>Load Balancer 1</cds-table-cell>
  <cds-table-cell>HTTP</cds-table-cell>
  ...
</cds-table-row>
`})})]})}function se(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{se as default};
