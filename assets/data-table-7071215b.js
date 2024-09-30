import{j as e}from"./jsx-runtime-3046aa02.js";import{u as d}from"./index-966e7ddf.js";import{af as c,ag as l}from"./index-651d3ade.js";import{c as a,a as o}from"./storybook-cdn-4cc58f60.js";import"./iframe-c15361be.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"data-table",children:"Data table"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/data-table",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/data-table",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsxs(n.p,{children:["Data table in ",e.jsx(n.code,{children:"@carbon/web-components"}),` focuses on primitives that constructs
table UI, consisting of the following:`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Tag"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"HTML tag counterpart"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-table>"})}),e.jsx(n.td,{children:"The container"}),e.jsx(n.td,{children:"N/A"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-table>"})}),e.jsx(n.td,{children:"The table"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<table>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-table-head>"})}),e.jsx(n.td,{children:"The header"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<thead>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-table-header-row>"})}),e.jsx(n.td,{children:"The header row"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<tr>"})," in ",e.jsx(n.code,{children:"<thead>"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-table-header-cell>"})}),e.jsx(n.td,{children:"The header cell"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<th>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-table-body>"})}),e.jsx(n.td,{children:"The header body"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<tbody>"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-table-row>"})}),e.jsx(n.td,{children:"The header row"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<tr>"})," in ",e.jsx(n.code,{children:"<tbody>"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<cds-table-cell>"})}),e.jsx(n.td,{children:"The header cell"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<td>"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#getting-started",children:"Getting started"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#sorting",children:"Sorting"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#programmatic-sorting",children:"Programmatic sorting"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#custom-sorting",children:"Custom sorting"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#expansion",children:"Expansion"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#programmatic-expansion",children:"Programmatic expansion"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#selection",children:"Selection"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#programmatic-selection",children:"Programmatic selection"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#filtering",children:"Filtering"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#batch-actions",children:"Batch actions"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#toolbar",children:"Toolbar"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#skeleton",children:"Skeleton"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#attributes-properties-and-events",children:"Attributes, properties, and events"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#feedback",children:"Feedback"})}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/data-table/index.js';
`})}),`
`,e.jsx(c,{children:`${a({components:["data-table"]})}`}),`
`,e.jsx(c,{children:`${o()}`}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.p,{children:`Here is an example of a basic data table with a header row with two columns, and
three regular rows:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table>
  <cds-table-head>
    <cds-table-header-row>
      <cds-table-header-cell>Name</cds-table-header-cell>
      <cds-table-header-cell>Status</cds-table-header-cell>
    </cds-table-header-row>
  </cds-table-head>
  <cds-table-body>
    <cds-table-row>
      <cds-table-cell>Load Balancer 1</cds-table-cell>
      <cds-table-cell>Disabled</cds-table-cell>
    </cds-table-row>
    <cds-table-row>
      <cds-table-cell>Load Balancer 2</cds-table-cell>
      <cds-table-cell>Starting</cds-table-cell>
    </cds-table-row>
    <cds-table-row>
      <cds-table-cell>Load Balancer 3</cds-table-cell>
      <cds-table-cell>Active</cds-table-cell>
    </cds-table-row>
  </cds-table-body>
</cds-table>
`})}),`
`,e.jsxs(n.p,{children:["After rendering a ",e.jsx(n.code,{children:"DataTable"}),` component using the code snippet above, you can
optionally add any number of features including sorting, row expansion,
filtering, row selection, batch actions.`]}),`
`,e.jsxs(n.p,{children:[`For more information, see each usage section below for the functionality that
you're interested in. If you want to see a full list of the arguments passed
into your render prop, visit the
`,e.jsx(n.a,{href:"#attributes-properties-and-events",children:"render props"})," section."]}),`
`,e.jsx(n.h3,{id:"table-header",children:"Table header"}),`
`,e.jsx(n.p,{children:"You can add a header to the table that can contain a title and a description."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table>
  <cds-table-header-title slot="title">DataTable</cds-table-header-title>
  <cds-table-header-description slot="description"
    >Example of a DataTable description.</cds-table-header-description
  >
  <cds-table-head>
    <cds-table-header-row>
      <cds-table-header-cell>Name</cds-table-header-cell>
      <cds-table-header-cell>Status</cds-table-header-cell>
    </cds-table-header-row>
  </cds-table-head>
  <cds-table-body>
    <cds-table-row>
      <cds-table-cell>Load Balancer 1</cds-table-cell>
      <cds-table-cell>Disabled</cds-table-cell>
    </cds-table-row>
    <cds-table-row>
      <cds-table-cell>Load Balancer 2</cds-table-cell>
      <cds-table-cell>Starting</cds-table-cell>
    </cds-table-row>
    <cds-table-row>
      <cds-table-cell>Load Balancer 3</cds-table-cell>
      <cds-table-cell>Active</cds-table-cell>
    </cds-table-row>
  </cds-table-body>
</cds-table>
`})}),`
`,e.jsx(n.h3,{id:"xl-with-two-lines",children:"XL With Two Lines"}),`
`,e.jsxs(n.p,{children:["In case there is extra data that needs to be added within a ",e.jsx(n.code,{children:"<cds-table-cell>"}),`
that would require a second line, you can use the `,e.jsx(n.code,{children:"<cds-table-cell-content>"}),`
component as such:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table size="xl">
  ...
  <cds-table-row>
    <cds-table-cell>
      Load Balancer 1
      <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
    </cds-table-cell>
    <cds-table-cell>Round robin</cds-table-cell>
    <cds-table-cell>Starting</cds-table-cell>
    <cds-table-cell>Test</cds-table-cell>
    <cds-table-cell>22</cds-table-cell>
  </cds-table-row>
  ...
</cds-table>
`})}),`
`,e.jsxs(n.p,{children:["This requires the table to be of ",e.jsx(n.code,{children:'size="xl"'})," to accomodate the content properly."]}),`
`,e.jsx(n.h2,{id:"sorting",children:"Sorting"}),`
`,e.jsxs(n.p,{children:[`In order to sort the rows in your data table, you will need to pass in the
`,e.jsx(n.code,{children:"is-sortable"})," prop to the ",e.jsx(n.code,{children:"<cds-table>"})," component."]}),`
`,e.jsxs(n.p,{children:["Optionally, you can pass in ",e.jsx(n.code,{children:"is-sortable"})," to each ",e.jsx(n.code,{children:"<cds-table-header-cell>"}),` that
you want to be sorted, or not sorted. This is useful if you only want to enable
sorting on some table column headers, but not all.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table is-sortable> ... </cds-table>
`})}),`
`,e.jsx(n.h3,{id:"programmatic-sorting",children:"Programmatic sorting"}),`
`,e.jsxs(n.p,{children:[`You can also change the sort status of the table by querying the specific
`,e.jsx(n.code,{children:"<cds-table-header-cell>"})," you would like to sort."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// sorting the first column
document
  .querySelectorAll('cds-table-header-cell')[0]
  .shadowRoot.querySelector('button')
  .click();
`})}),`
`,e.jsx(n.h3,{id:"custom-sorting",children:"Custom sorting"}),`
`,e.jsxs(n.p,{children:[`If the default sorting logic doesn't match your use-case, you can provide a
custom sort method as a `,e.jsx(n.code,{children:"customSortRow"})," prop to ",e.jsx(n.code,{children:"<cds-table>"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sortRow"}),` is a method that takes in the values of two cells, in addition to some
info, and should return -1, 0, or 1 as a result (mirroring the native sort
behavior in JavaScript).`]}),`
`,e.jsxs(n.p,{children:["The component uses a default ",e.jsx(n.code,{children:"Intl.Collator"}),` object created with the current set
locale to sort the rows. The default sorting row function uses this collator,
and as such it is needed in the custom sorting function.`]}),`
`,e.jsxs(n.p,{children:["As a result, ",e.jsx(n.code,{children:"customSortRow"})," function would take on the following shape:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`  customSortRow(lhs, rhs, collator) {
    if (typeof lhs === 'number' && typeof rhs === 'number') {
      return lhs - rhs;
    }
    return collator.compare(lhs, rhs);
  }

  document.querySelector('cds-table').customSortRow = customSortRow;
`})}),`
`,e.jsxs(n.p,{children:[`If you would like to use a different locale for collator comparisons, you can
change the `,e.jsx(n.code,{children:"locale"}),` property and it will be updated accordingly. In case a
different collator is needed, you can create a new object and pass it in as
such:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`  document.querySelector('cds-table').collator = // new collator here;
`})}),`
`,e.jsx(n.h2,{id:"expansion",children:"Expansion"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<cds-table>"}),` component supports row-level expansion when using the
`,e.jsx(n.code,{children:"expandable"})," prop. Setting the prop will apply the ",e.jsx(n.code,{children:"expandable"}),` prop to every
row. This is useful when every row can be expandable. In order to make a row be
expandable, it is necessary for the row to have a `,e.jsx(n.code,{children:"<cds-table-expanded-row>"}),`
component directly following it.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table expandable>
  <cds-table-head>
    <cds-table-header-row>
      <cds-table-header-cell>Name</cds-table-header-cell>
      <cds-table-header-cell>Status</cds-table-header-cell>
    </cds-table-header-row>
  </cds-table-head>
  <cds-table-body>
    <cds-table-row>
      <cds-table-cell>Load Balancer 1</cds-table-cell>
      <cds-table-cell>Disabled</cds-table-cell>
    </cds-table-row>
    <cds-table-expanded-row>
      <h6>Expandable row content</h6>
      <div>Description here</div>
    </cds-table-expanded-row>
    <cds-table-row>
      <cds-table-cell>Load Balancer 2</cds-table-cell>
      <cds-table-cell>Starting</cds-table-cell>
    </cds-table-row>
    <cds-table-expanded-row>
      <h6>Expandable row content</h6>
      <div>Description here</div>
    </cds-table-expanded-row>
    <cds-table-row>
      <cds-table-cell>Load Balancer 3</cds-table-cell>
      <cds-table-cell>Active</cds-table-cell>
    </cds-table-row>
    <cds-table-expanded-row>
      <h6>Expandable row content</h6>
      <div>Description here</div>
    </cds-table-expanded-row>
  </cds-table-body>
</cds-table>
`})}),`
`,e.jsxs(n.p,{children:[`In case you'd like a button to expand all the rows at once, you can use the
`,e.jsx(n.code,{children:"batch-expansion"})," prop in ",e.jsx(n.code,{children:"<cds-table>"}),"."]}),`
`,e.jsxs(n.p,{children:[`In case you only want to set specific rows to be expandable, be sure to set the
`,e.jsx(n.code,{children:"expandable"})," prop only on that specific ",e.jsx(n.code,{children:"<cds-table-row>"}),` component, and have
its adjacent sibling `,e.jsx(n.code,{children:"<cds-table-expanded-row>"})," directly following it."]}),`
`,e.jsx(n.h3,{id:"programmatic-expansion",children:"Programmatic expansion"}),`
`,e.jsx(n.p,{children:`You can programmatically trigger a row expansion by querying the desired row as
such:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`document
  .querySelectorAll('cds-table-row')[0]
  .shadowRoot.querySelector('.cds--table-expand__button')
  .click();
`})}),`
`,e.jsx(n.h2,{id:"selection",children:"Selection"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<cds-table>"}),` component supports row selection when using the
`,e.jsx(n.code,{children:"is-selectable"}),` prop. Setting the prop will automatically set a numerical
`,e.jsx(n.code,{children:"selection-name"}),` attribute to every row, though this can also be customized with
your own custom name.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table is-selectable> </cds-table>
`})}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"<cds-table-header-row>"}),` component will render with its own
checkbox, used to select all the rows at once. If you would like to disable this
behavior, set the `,e.jsx(n.code,{children:"hide-checkbox"})," prop within the component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table is-selectable>
  ...
  <cds-table-header-row hide-checkbox> ... </cds-table-header-row>
  ...
</cds-table>
`})}),`
`,e.jsx(n.h3,{id:"programmatic-selection",children:"Programmatic selection"}),`
`,e.jsx(n.p,{children:`You can programmatically trigger a row selection by querying the desired row as
such:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`document
  .querySelectorAll('cds-table-row')[0]
  .shadowRoot.querySelector('cds-checkbox')
  .shadowRoot.querySelector('input')
  .click();
`})}),`
`,e.jsx(n.h2,{id:"filtering",children:"Filtering"}),`
`,e.jsxs(n.p,{children:["Filtering in a ",e.jsx(n.code,{children:"<cds-table>"}),` is provided through usage of the
`,e.jsx(n.code,{children:"<cds-table-toolbar>"})," and the ",e.jsx(n.code,{children:"<cds-table-toolbar-search>"}),` component. Any input
entered through `,e.jsx(n.code,{children:"<cds-table-toolbar-search>"}),` will be used in the built-in
filtering function.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table>
  <cds-table-toolbar slot="toolbar">
    <cds-table-toolbar-content>
      <cds-table-toolbar-search
        placeholder="Filter table"></cds-table-toolbar-search>
    </cds-table-toolbar-content>
  </cds-table-toolbar>
  <cds-table-head> ... header </cds-table-head>
  ... body and rows
</cds-table>
`})}),`
`,e.jsx(n.p,{children:`Our built-in filtering function scans the rows' strings and attempts to match to
the current search value input. If there are no matches in a given row, the
current row will be filtered out.`}),`
`,e.jsx(n.p,{children:`In other words, a custom function will be doing its own string comparison per
row, and thus it would have the following structure:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const newFilterRows = (rowText, searchString) => {
  return; // provide custom string comparison return boolean;
};

document.querySelector('cds-table').filterRows = newFilterRows;
`})}),`
`,e.jsx(n.h2,{id:"batch-actions",children:"Batch actions"}),`
`,e.jsxs(n.p,{children:["You can combine batch actions with the ",e.jsx(n.code,{children:"<cds-table>"}),` component to allow the user
to perform a single action on multiple selected rows.`]}),`
`,e.jsxs(n.p,{children:[`This toolbar is highly customizable, as any action can be adhered to a
`,e.jsx(n.code,{children:"<cds-button>"})," and inserted into the toolbar."]}),`
`,e.jsxs(n.p,{children:["In the example below, we have custom ",e.jsx(n.code,{children:"<cds-button>"}),`s that we can customize to
our liking by using the `,e.jsx(n.code,{children:"onclick"})," property and passing it any custom functions."]}),`
`,e.jsxs(n.p,{children:[`The component has a built-in download function, that is called whenever one of
the `,e.jsx(n.code,{children:"<cds-button>"}),"s has a ",e.jsx(n.code,{children:"download"}),` attribute. The component will create a JSON
object containing the currently selected rows, and trigger its download within
the browser.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const alertFunction = () => alert('Alert!');
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table>
  <cds-table-toolbar slot="toolbar">
    <cds-table-batch-actions>
      <cds-button
        >Delete
        <svg
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 32 32"
          slot="icon">
          <path d="M12 12H14V24H12zM18 12H20V24H18z"></path>
          <path
            d="M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"></path>
        </svg>
      </cds-button>
      <cds-button
        tooltip-position="bottom"
        tooltip-text="Save"
        onclick="alertFunction()"
        >Save
        <svg
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          slot="icon">
          <path
            d="M13.9,4.6l-2.5-2.5C11.3,2.1,11.1,2,11,2H3C2.4,2,2,2.4,2,3v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V5	C14,4.9,13.9,4.7,13.9,4.6z M6,3h4v2H6V3z M10,13H6V9h4V13z M11,13V9c0-0.6-0.4-1-1-1H6C5.4,8,5,8.4,5,9v4H3V3h2v2c0,0.6,0.4,1,1,1	h4c0.6,0,1-0.4,1-1V3.2l2,2V13H11z"></path></svg
      ></cds-button>
      <cds-button href="javascript:void 0" download="table-data.json">
        Download
        <svg
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          slot="icon">
          <path
            d="M13 7L12.3 6.3 8.5 10.1 8.5 1 7.5 1 7.5 10.1 3.7 6.3 3 7 8 12zM13 12v2H3v-2H2v2l0 0c0 .6.4 1 1 1h10c.6 0 1-.4 1-1l0 0v-2H13z"></path>
        </svg>
      </cds-button>
    </cds-table-batch-actions>
  </cds-table-toolbar>
  <cds-table-head> ... headers </cds-table-head>
  ... body and rows
</cds-table>
`})}),`
`,e.jsx(n.h2,{id:"toolbar",children:"Toolbar"}),`
`,e.jsxs(n.p,{children:["As mentioned earlier, you can add a ",e.jsx(n.code,{children:"<cds-table-toolbar-search>"}),` component to
the toolbar. You can also add an overflow menu and a button within the toolbar
as such:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table>
  <cds-table-toolbar slot="toolbar">
    <cds-table-toolbar-content>
      <cds-table-toolbar-search
        placeholder="Filter table"></cds-table-toolbar-search>
      <cds-overflow-menu toolbar-action>
        <svg
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          slot="icon">
          <path
            d="M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3	c-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1	C5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4	c0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4	c0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4	c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8	L9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6	C5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z"></path>
          <path
            d="M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8	c0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z"></path>
        </svg>
        <cds-overflow-menu-body>
          <cds-overflow-menu-item>Example 1</cds-overflow-menu-item>
          <cds-overflow-menu-item>Example 2</cds-overflow-menu-item>
        </cds-overflow-menu-body>
      </cds-overflow-menu>
      <cds-button>Example button</cds-button>
    </cds-table-toolbar-content>
  </cds-table-toolbar>
  <cds-table-head> ... header </cds-table-head>
  ... body and rows
</cds-table>
`})}),`
`,e.jsx(n.h3,{id:"overflow-menu",children:"Overflow Menu"}),`
`,e.jsxs(n.p,{children:[`An overflow menu can be added to the toolbar table row. To add an overflow menu,
simply add a `,e.jsx(n.code,{children:"<cds-table-cell>"})," containing the ",e.jsx(n.code,{children:"<cds-overflow-menu>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`...
<cds-table-row>
  <cds-table-cell>Load Balancer 4</cds-table-cell>
  <cds-table-cell>HTTP</cds-table-cell>
  <cds-table-cell>443</cds-table-cell>
  <cds-table-cell>Round robin</cds-table-cell>
  <cds-table-cell>Mel's VM Groups</cds-table-cell>
  <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
  <cds-table-cell>
    <cds-overflow-menu toolbar-action>
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 32 32"
        slot="icon">
        <circle cx="16" cy="8" r="2"></circle>
        <circle cx="16" cy="16" r="2"></circle>
        <circle cx="16" cy="24" r="2"></circle>
      </svg>
      <span slot="tooltip-content"> Options </span>
      <cds-overflow-menu-body>
        <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
        <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
        <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
      </cds-overflow-menu-body>
    </cds-overflow-menu>
  </cds-table-cell>
</cds-table-row>
...
`})}),`
`,e.jsx(n.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(n.p,{children:`The default Skeleton table will render with 5 rows and columns, the header, and
the toolbar.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table-skeleton> </cds-table-skeleton>
`})}),`
`,e.jsxs(n.p,{children:["Specify the number of rows and columns you need with the ",e.jsx(n.code,{children:"row-count"}),` and
`,e.jsx(n.code,{children:"column-count"})," attributes."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table-skeleton row-count="5" column-count="5"> </cds-table-skeleton>
`})}),`
`,e.jsx(n.h3,{id:"custom-headers",children:"Custom headers"}),`
`,e.jsx(n.p,{children:"Optionally, you can specify to have header titles on the Skeleton table."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-table-skeleton> </cds-table-skeleton>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const customHeaders = [
  'Name',
  'Protocol',
  'Port',
  'Rule',
  'Attached groups',
  'Status',
];
document.querySelector('cds-table-skeleton').headers = customHeaders;
`})}),`
`,e.jsx(n.h2,{id:"attributes-properties-and-events",children:"Attributes, properties and events"}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-table is-sortable>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-table>"})," without ",e.jsx(n.code,{children:"is-sortable"})," attribute)."]}),`
`,e.jsx(n.h3,{id:"cds-table",children:e.jsx(n.code,{children:"<cds-table>"})}),`
`,e.jsx(l,{of:"cds-table"}),`
`,e.jsx(n.h3,{id:"cds-table-header-row",children:e.jsx(n.code,{children:"<cds-table-header-row>"})}),`
`,e.jsx(l,{of:"cds-table-header-row"}),`
`,e.jsx(n.h3,{id:"cds-table-header-cell",children:e.jsx(n.code,{children:"<cds-table-header-cell>"})}),`
`,e.jsx(l,{of:"cds-table-header-cell"}),`
`,e.jsx(n.h3,{id:"cds-table-body",children:e.jsx(n.code,{children:"<cds-table-body>"})}),`
`,e.jsx(l,{of:"cds-table-body"}),`
`,e.jsx(n.h3,{id:"cds-table-row",children:e.jsx(n.code,{children:"<cds-table-row>"})}),`
`,e.jsx(l,{of:"cds-table-row"}),`
`,e.jsx(n.h3,{id:"cds-table-expanded-row",children:e.jsx(n.code,{children:"<cds-table-expanded-row>"})}),`
`,e.jsx(l,{of:"cds-table-expanded-row"}),`
`,e.jsx(n.h3,{id:"cds-table-cell",children:e.jsx(n.code,{children:"<cds-table-cell"})}),`
`,e.jsx(l,{of:"cds-table-cell"}),`
`,e.jsx(n.h3,{id:"cds-table-batch-actions",children:e.jsx(n.code,{children:"<cds-table-batch-actions>"})}),`
`,e.jsx(l,{of:"cds-table-batch-actions"}),`
`,e.jsx(n.h3,{id:"cds-table-toolbar",children:e.jsx(n.code,{children:"<cds-table-toolbar>"})}),`
`,e.jsx(l,{of:"cds-table-toolbar"}),`
`,e.jsx(n.h3,{id:"cds-table-toolbar-content",children:e.jsx(n.code,{children:"<cds-table-toolbar-content>"})}),`
`,e.jsx(l,{of:"cds-table-toolbar-content"}),`
`,e.jsx(n.h3,{id:"cds-table-toolbar-search",children:e.jsx(n.code,{children:"<cds-table-toolbar-search>"})}),`
`,e.jsx(l,{of:"cds-table-toolbar-search"}),`
`,e.jsx(n.h3,{id:"cds-table-skeleton",children:e.jsx(n.code,{children:"cds-table-skeleton"})}),`
`,e.jsx(l,{of:"cds-table-skeleton"})]})}function f(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{f as default};
