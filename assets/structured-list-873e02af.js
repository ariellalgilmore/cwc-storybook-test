import{j as t}from"./jsx-runtime-29019649.js";import{u as l}from"./index-081880b6.js";import{ae as i,af as r,ag as c}from"./index-775d7884.js";import{c as n,a as u}from"./storybook-cdn-4cc58f60.js";import{S as o}from"./structured-list.stories-da32a439.js";import"./iframe-532ac6a9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./structured-list-row-af858098.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./collection-helpers-3389bc25.js";import"./focus-73f58502.js";import"./query-b9d3c2af.js";import"./16-d57aeffe.js";import"./spread-61d77317.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./radio-group-manager-b52ff8da.js";function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...l(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:o}),`
`,t.jsx(s.h1,{id:"structured-list",children:"Structured list"}),`
`,t.jsxs(s.blockquote,{children:[`
`,t.jsxs(s.p,{children:[`💡 Check our
`,t.jsx(s.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/structured-list",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(s.p,{children:t.jsx(s.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/structured-list",rel:"nofollow",children:t.jsx(s.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(s.p,{children:`Structured Lists group content that is similar or related, such as terms or
definitions.`}),`
`,t.jsx(s.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(s.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(s.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(s.pre,{children:t.jsx(s.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/structured-list/index.js';
`})}),`
`,t.jsx(r,{children:`${n({components:["structured-list"]})}`}),`
`,t.jsx(r,{children:`${u()}`}),`
`,t.jsx(s.h3,{id:"html",children:"HTML"}),`
`,t.jsx(s.pre,{children:t.jsx(s.code,{className:"language-html",children:`<cds-structured-list>
  <cds-structured-list-head>
    <cds-structured-list-header-row>
      <cds-structured-list-header-cell>ColumnA</cds-structured-list-header-cell>
      <cds-structured-list-header-cell>ColumnB</cds-structured-list-header-cell>
      <cds-structured-list-header-cell>ColumnC</cds-structured-list-header-cell>
    </cds-structured-list-header-row>
  </cds-structured-list-head>
  <cds-structured-list-body>
    <cds-structured-list-row>
      <cds-structured-list-cell>Row 1</cds-structured-list-cell>
      <cds-structured-list-cell>Row 1</cds-structured-list-cell>
      <cds-structured-list-cell
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
        magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem
        vel euismod dignissim.</cds-structured-list-cell
      >
    </cds-structured-list-row>
    <cds-structured-list-row>
      <cds-structured-list-cell>Row 2</cds-structured-list-cell>
      <cds-structured-list-cell>Row 2</cds-structured-list-cell>
      <cds-structured-list-cell
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
        magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem
        vel euismod dignissim.</cds-structured-list-cell
      >
    </cds-structured-list-row>
    <cds-structured-list-row>
      <cds-structured-list-cell>Row 3</cds-structured-list-cell>
      <cds-structured-list-cell>Row 3</cds-structured-list-cell>
      <cds-structured-list-cell
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
        magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem
        vel euismod dignissim.</cds-structured-list-cell
      >
    </cds-structured-list-row>
  </cds-structured-list-body>
</cds-structured-list>
`})}),`
`,t.jsx(s.h2,{id:"skeleton",children:"Skeleton"}),`
`,t.jsxs(s.p,{children:[`For the skeleton variation, utilize
`,t.jsx(s.code,{children:"<cds-structured-list-header-cell-skeleton>"}),"."]}),`
`,t.jsx(s.pre,{children:t.jsx(s.code,{className:"language-html",children:`<cds-structured-list>
  <cds-structured-list-head>
    <cds-structured-list-header-row>
      <cds-structured-list-header-cell-skeleton></cds-structured-list-header-cell-skeleton>
      <cds-structured-list-header-cell-skeleton></cds-structured-list-header-cell-skeleton>
      <cds-structured-list-header-cell-skeleton></cds-structured-list-header-cell-skeleton>
    </cds-structured-list-header-row>
  </cds-structured-list-head>
  <cds-structured-list-body>
    <cds-structured-list-row>
      <cds-structured-list-cell></cds-structured-list-cell>
      <cds-structured-list-cell></cds-structured-list-cell>
      <cds-structured-list-cell></cds-structured-list-cell>
    </cds-structured-list-row>
    <cds-structured-list-row>
      <cds-structured-list-cell></cds-structured-list-cell>
      <cds-structured-list-cell></cds-structured-list-cell>
      <cds-structured-list-cell></cds-structured-list-cell>
    </cds-structured-list-row>
    <cds-structured-list-row>
      <cds-structured-list-cell></cds-structured-list-cell>
      <cds-structured-list-cell></cds-structured-list-cell>
      <cds-structured-list-cell></cds-structured-list-cell>
    </cds-structured-list-row>
  </cds-structured-list-body>
</cds-structured-list>
`})}),`
`,t.jsxs(s.h2,{id:"cds-structured-list-attributes-and-properties",children:[t.jsx(s.code,{children:"<cds-structured-list>"})," attributes and properties"]}),`
`,t.jsxs(s.p,{children:["Note: For ",t.jsx(s.code,{children:"boolean"})," attributes, ",t.jsx(s.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(s.code,{children:"<cds-structured-list has-selection>"}),") and ",t.jsx(s.code,{children:"false"}),` means not setting the
attribute (e.g. `,t.jsx(s.code,{children:"<cds-structured-list>"})," without ",t.jsx(s.code,{children:"has-selection"})," attribute)."]}),`
`,t.jsx(c,{of:"cds-structured-list"}),`
`,t.jsxs(s.h2,{id:"cds-structured-list-row-attributes-and-properties",children:[t.jsx(s.code,{children:"<cds-structured-list-row>"})," attributes and properties"]}),`
`,t.jsxs(s.p,{children:["Note: For ",t.jsx(s.code,{children:"boolean"})," attributes, ",t.jsx(s.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(s.code,{children:"<cds-structured-list-row selected>"}),") and ",t.jsx(s.code,{children:"false"}),` means not setting the
attribute (e.g. `,t.jsx(s.code,{children:"<cds-structured-list-row>"})," without ",t.jsx(s.code,{children:"selected"})," attribute)."]}),`
`,t.jsx(c,{of:"cds-structured-list-row"})]})}function H(e={}){const{wrapper:s}={...l(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(d,{...e})}):d(e)}export{H as default};
