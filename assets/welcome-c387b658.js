import{j as e}from"./jsx-runtime-a132e2bc.js";import{u as t}from"./index-84c96c65.js";import{ae as i}from"./index-8ad226c6.js";import"./iframe-4eabc064.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction/Welcome"}),`
`,e.jsx(n.p,{children:"A Carbon Design System variant that's as easy to use as native HTML elements, with no framework tax, no framework silo."}),`
`,e.jsx("p",{align:"center",children:e.jsx("a",{href:"https://www.carbondesignsystem.com",children:e.jsx("img",{alt:"Carbon Design System",src:"https://user-images.githubusercontent.com/3901764/57545698-ce5f2380-7320-11e9-8682-903df232d7b0.png",width:"100%"})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Carbon is an open-source design system built by IBM. With the IBM Design
Language as its foundation, the system consists of working code, design tools
and resources, human interface guidelines, and a vibrant community of
contributors.`}),`
`]}),`
`,e.jsx("p",{align:"center",children:e.jsx("a",{href:"https://github.com/carbon-design-system/carbon-for-ibm-dotcom/blob/main/packages/carbon-web-components/LICENSE",children:e.jsx("img",{src:"https://img.shields.io/badge/license-Apache--2.0-blue.svg",alt:"Carbon is released under the Apache-2.0 license"})})}),`
`,e.jsx(n.h1,{id:"carbonweb-components",children:e.jsx(n.code,{children:"@carbon/web-components"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@carbon/web-components"})," is a variant of Carbon Design System with Custom Elements v1 and Shadow DOM v1 specs."]}),`
`,e.jsxs(n.p,{children:["The effort stems from ",e.jsx(n.a,{href:"https://github.com/carbon-design-system/issue-tracking/issues/121",rel:"nofollow",children:"https://github.com/carbon-design-system/issue-tracking/issues/121"}),". If you are interested in this project, adding 👍 to the description of that GH issue, or even contributing, will be greatly appreciated!"]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsxs(n.p,{children:["To install ",e.jsx(n.code,{children:"@carbon/web-components"}),` in your project, you will need to run the
following command using `,e.jsx(n.a,{href:"https://www.npmjs.com/",rel:"nofollow",children:"npm"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install --save @carbon/web-components
`})}),`
`,e.jsxs(n.p,{children:["If you prefer ",e.jsx(n.a,{href:"https://yarnpkg.com/en/",rel:"nofollow",children:"Yarn"}),`, use the following command
instead:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @carbon/web-components
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsxs(n.p,{children:["Our example at ",e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon-for-ibm-dotcom/tree/main/packages/carbon-web-components/examples/codesandbox/basic",rel:"nofollow",children:"Stackblitz"})," shows the most basic usage:"]}),`
`,e.jsxs(n.p,{children:["The first thing you need is ",e.jsx(n.strong,{children:"setting up a module bundler"})," to resolve ECMAScript ",e.jsx(n.code,{children:"import"}),"s. The above example uses ",e.jsx(n.a,{href:"https://webpack.js.org",rel:"nofollow",children:"Webpack"}),", but you can use other bundlers like ",e.jsx(n.a,{href:"https://rollupjs.org/",rel:"nofollow",children:"Rollup"})," too."]}),`
`,e.jsx(n.p,{children:"Once you set up a module bundler, you can start importing our component modules, for example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/dropdown/dropdown';
import '@carbon/web-components/es/components/dropdown/dropdown-item';
`})}),`
`,e.jsx(n.p,{children:"Once you've imported the component modules, you can use our components in the same manner as native HTML tags, for example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-dropdown trigger-content="Select an item">
  <cds-dropdown-item value="all">Option 1</cds-dropdown-item>
  <cds-dropdown-item value="cloudFoundry">Option 2</cds-dropdown-item>
  <cds-dropdown-item value="staging">Option 3</cds-dropdown-item>
  <cds-dropdown-item value="dea">Option 4</cds-dropdown-item>
  <cds-dropdown-item value="router">Option 5</cds-dropdown-item>
</cds-dropdown>
`})}),`
`,e.jsxs(n.p,{children:["An alternative to using a bundler are CDN artifacts which can be added client side in your html files. With CDNs, you can import the components in ",e.jsx(n.code,{children:'<script type="module">'}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/dropdown.min.js"><\/script>
    <style type="text/css">
      #app {
        font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
        width: 300px;
        margin: 2rem;
      }

      cds-dropdown:not(:defined),
      cds-dropdown-item:not(:defined) {
        visibility: hidden;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <cds-dropdown trigger-content="Select an item">
        <cds-dropdown-item value="all">Option 1</cds-dropdown-item>
        <cds-dropdown-item value="cloudFoundry">Option 2</cds-dropdown-item>
        <cds-dropdown-item value="staging">Option 3</cds-dropdown-item>
        <cds-dropdown-item value="dea">Option 4</cds-dropdown-item>
        <cds-dropdown-item value="router">Option 5</cds-dropdown-item>
      </cds-dropdown>
    </div>
  </body>
</html>
`})}),`
`,e.jsx(n.h3,{id:"javascript-framework-integration",children:"JavaScript framework integration"}),`
`,e.jsx(n.p,{children:`This package can also be used within other JavaScript frameworks such as Angular and
Vue. This is achievable since web components are the modern browser standard, and
work well with other front-end frameworks that exist in the application. In
turn, this also comes with the benefits of encapsulation within the Shadow DOM:`}),`
`,e.jsx(n.h3,{id:"other-usage-guides",children:"Other usage guides"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/?path=/story/introduction-form-paticipation--page",children:"Having components participate in form"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/?path=/docs/introduction-custom-styles--page",children:"Using custom styles in components"})}),`
`]})]})}function g(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{g as default};
