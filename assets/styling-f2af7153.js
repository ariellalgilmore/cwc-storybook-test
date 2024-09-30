import{j as e}from"./jsx-runtime-ca9ab4eb.js";import{u as o}from"./index-e87182e5.js";import{ae as c}from"./index-10c5cb00.js";import"./iframe-be34abd3.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Introduction/Custom styles"}),`
`,e.jsx(n.h1,{id:"using-custom-styles-in-components",children:"Using custom styles in components"}),`
`,e.jsxs(n.p,{children:["As Shadow DOM (one of the Web Components specs that ",e.jsx(n.code,{children:"@carbon/web-components"})," uses) promises, styles that ",e.jsx(n.code,{children:"@carbon/web-components"})," defines does not affect styles in your application, or vice versa."]}),`
`,e.jsx(n.p,{children:`However, in cases where your application or a Carbon-derived style guide wants
to change the styles of our components, there are a few options.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#using-css-custom-properties",children:"Using CSS Custom Properties"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dependency-injection",children:"Dependency injection"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#creating-derived-components-with-different-style",children:"Creating derived components with different style"})}),`
`]}),`
`,e.jsx(n.h2,{id:"using-css-custom-properties",children:"Using CSS Custom Properties"}),`
`,e.jsx(n.p,{children:"For example, if you add CSS like below:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:"footer {\n  --cds-interactive-02: #6f6f6f; /* `$interactive-02` token for `g100` theme */\n}\n"})}),`
`,e.jsxs(n.p,{children:["The color of the button in the code below changes to the one in the ",e.jsx(n.code,{children:"g100"}),`
theme:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<footer>
  <cds-button kind="secondary">Secondary button</cds-button>
</footer>
`})}),`
`,e.jsxs(n.p,{children:[`The names of CSS Custom Properties you can use are the Carbon theme tokens
prefixed with `,e.jsx(n.code,{children:"--cds-"}),`. The list of Carbon theme tokens can be found at
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon/blob/v11.34.1/packages/themes/src/index.js",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(n.p,{children:`With CSS Custom Properties approach, you can switch the entire theme under the
specific element by:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@use "@carbon/styles/scss/reset";
@use "@carbon/styles/scss/theme";
@use "@carbon/styles/scss/themes";

footer {
   @include theme.theme(themes.$g100);
 } // Emits all theme tokens in CSS Custom Properties
`})}),`
`,e.jsxs(n.p,{children:["Some components such as ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"Notification"}),", & ",e.jsx(n.code,{children:"Tag"}),` have specific tokens per theme
that need to emitted in the styles. You can do this for example by adding the
following:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@use "@carbon/styles/scss/reset";
@use "@carbon/styles/scss/theme";
@use "@carbon/styles/scss/themes";
@use '@carbon/styles/scss/components/button/tokens' as button-tokens;
@use '@carbon/styles/scss/components/notification/tokens' as notification-tokens;
@use '@carbon/styles/scss/components/tag/tokens' as tag-tokens;
@include theme.add-component-tokens(button-tokens.$button-tokens);
@include theme.add-component-tokens(notification-tokens.$notification-tokens);
@include theme.add-component-tokens(tag-tokens.$tag-tokens);
`})}),`
`,e.jsx(n.h2,{id:"creating-derived-components-with-different-style",children:"Creating derived components with different style"}),`
`,e.jsxs(n.p,{children:[`You can create a derived class of our component and override
`,e.jsxs(n.a,{href:"https://lit-element.polymer-project.org/guide/styles#static-styles",rel:"nofollow",children:["static ",e.jsx(n.code,{children:"styles"})," property"]}),`,
like:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { css, customElement } from 'lit';
import CDSDropdown from '@carbon/web-components/es/components/dropdown/dropdown';

@customElement('my-dropdown')
class MyDropdown extends CDSDropdown {
  // Custom CSS to enforce \`field-02\` (light) style of the dropdown
  static styles = css\`
    \${CDSDropdown.styles}
    .cds--list-box {
      background-color: white;
    }
  \`;
}
`})})]})}function f(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{f as default};
