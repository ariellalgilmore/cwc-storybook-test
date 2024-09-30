import{j as t}from"./jsx-runtime-b0aba563.js";import{u as a}from"./index-e6c45b0c.js";import{ae as i,af as s,ag as c}from"./index-fa03931b.js";import{c as r,a as l}from"./storybook-cdn-4cc58f60.js";import{S as d}from"./stack.stories-56056894.js";import"./iframe-3b9c0475.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./stack-4f2eefe9.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./index-d401daa0.js";function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:d}),`
`,t.jsx(e.h1,{id:"stack",children:"Stack"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/stack",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/stack",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:`The Stack component is a useful layout utility in a component-based model. This
allows components to not use margin and instead delegate the responsibility of
positioning and layout to parent components.`}),`
`,t.jsx(e.p,{children:`In the case of the Stack component, it uses the spacing scale from the Design
Language in order to determine how much space there should be between items
rendered by the Stack component. It also supports a custom gap prop which will
allow a user to provide a custom value for the gap of the layout.`}),`
`,t.jsx(e.p,{children:"This component supports both horizontal and vertical orientations."}),`
`,t.jsx(e.p,{children:"Inspiration for this component:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://paste.twilio.design/layout/stack/",rel:"nofollow",children:"https://paste.twilio.design/layout/stack/"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://github.com/Workday/canvas-kit/blob/f2f599654876700f483a1d8c5de82a41315c76f1/modules/labs-react/layout/lib/Stack.tsx",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/blob/f2f599654876700f483a1d8c5de82a41315c76f1/modules/labs-react/layout/lib/Stack.tsx"})}),`
`]}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/stack/index.js';
`})}),`
`,t.jsx(s,{children:`${r({components:["stack"]})}`}),`
`,t.jsx(s,{children:`${l()}`}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<cds-stack gap="6" orientation="vertical">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</cds-stack>
`})}),`
`,t.jsx(e.h2,{id:"passing-in-custom-gap-value",children:"Passing in custom gap value"}),`
`,t.jsxs(e.p,{children:["You can set a custom gap value by passing in the custom value to the ",t.jsx(e.code,{children:"gap"}),`
attribute AND setting the `,t.jsx(e.code,{children:"custom-gap-value"})," attribute to true."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<cds-stack gap="2rem" orientation="vertical" custom-gap-value>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</cds-stack>
`})}),`
`,t.jsxs(e.h2,{id:"cds-stack-attributes-properties-and-events",children:[t.jsx(e.code,{children:"<cds-stack>"})," attributes, properties and events"]}),`
`,t.jsx(c,{of:"cds-stack"})]})}function C(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{C as default};
