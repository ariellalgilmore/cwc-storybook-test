import{j as e}from"./jsx-runtime-feeeffe0.js";import{u as a}from"./index-ff638d55.js";import{ae as o,af as s,ag as r}from"./index-c9446c32.js";import{c,a as l}from"./storybook-cdn-4cc58f60.js";import{T as d}from"./tag.stories-a96ec8b1.js";import"./iframe-f75e0ec2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./tag-0e6d166e.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./16-9baaa345.js";import"./spread-61d77317.js";import"./directive-12249aa5.js";import"./carbon-element-59fbbccb.js";import"./focus-73f58502.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";function i(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(t.h1,{id:"tag",children:"Tag"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/tag",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/tag",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`Tags are used for items that need to be labeled, categorized, or organized using
keywords that describe them.`}),`
`,e.jsx(t.p,{children:"Multiple or single tags can be used to categorize items."}),`
`,e.jsx(t.p,{children:`Use tags when content is mapped to multiple categories, and the user needs a way
to differentiate between them.`}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/tag/index.js';
`})}),`
`,e.jsx(s,{children:`${c({components:["tag"]})}`}),`
`,e.jsx(s,{children:`${l()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-tag type="gray" title="tag-example"> This is a tag </cds-tag>
`})}),`
`,e.jsx(t.h2,{id:"filter-tag",children:"Filter tag"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"filter"})," attribute to turn the tag into a filterable element."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-tag filter type="gray" title="Clear selection"> This is a tag </cds-tag>
`})}),`
`,e.jsx(t.p,{children:"You can use the events to catch the closing of the tag."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`document.addEventListener('cds-tag-closed', (event) => {
  // use values here
});
`})}),`
`,e.jsx(t.h2,{id:"custom-icon",children:"Custom icon"}),`
`,e.jsxs(t.p,{children:["If you'd like to use a custom icon other than the ",e.jsx(t.code,{children:"Close"}),` button, import another
icon and insert it within the tag element as such:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-tag filter type="gray" title="Clear selection"> This is a tag </cds-tag>
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import Download16 from '@carbon/icons/lib/download/16';

function App() {
  return html\` <cds-tag filter type="gray" title="Clear selection"
    >This is a tag \${Download16({ slot: 'icon' })}</cds-tag
  >\`;
}
`})}),`
`,e.jsxs(t.h2,{id:"cds-tag-attributes-and-properties",children:[e.jsx(t.code,{children:"<cds-tag>"})," attributes and properties"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-tag disabled>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-tag>"})," without ",e.jsx(t.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(r,{of:"cds-tag"})]})}function L(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{L as default};
