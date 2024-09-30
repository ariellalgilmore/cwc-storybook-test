import{j as e}from"./jsx-runtime-b0aba563.js";import{u as a}from"./index-e6c45b0c.js";import{ae as l,af as r,ag as o}from"./index-fa03931b.js";import{c,a as i}from"./storybook-cdn-4cc58f60.js";import{L as d}from"./layer.stories-912798de.js";import"./iframe-3b9c0475.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./carbon-element-59fbbccb.js";import"./layer-d66987ad.js";import"./property-da2637ab.js";function t(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(n.h1,{id:"layer",children:"Layer"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/layer",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/layer",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Layer"}),` component is used to render components on different layers. Each
layer has a specific set of token values associated with it. You can use these
tokens directly, or use contextual tokens from our styles package like `,e.jsx(n.code,{children:"$layer"}),`
or `,e.jsx(n.code,{children:"$field"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Layer"})," component accepts any ",e.jsx(n.code,{children:"children"}),". Each child of a ",e.jsx(n.code,{children:"Layer"}),` component
is rendered using the layer tokens at that layer. `,e.jsx(n.code,{children:"Layer"}),` components can be
nested indefinitely, but the token sets typically end after 3 layers.`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/layer/index.js';
`})}),`
`,e.jsx(r,{children:`${c({components:["layer"]})}`}),`
`,e.jsx(r,{children:`${i()}`}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.p,{children:"Here we define a custom test class to define a custom padding."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.example-layer-test-component {
  padding: 1rem;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-layer>
  <div class="example-layer-test-component">Layer 1</div>
  <cds-layer>
    <div class="example-layer-test-component">Layer 2</div>
    <cds-layer>
      <div class="example-layer-test-component">Layer 3</div>
    </cds-layer>
  </cds-layer>
</cds-layer>
`})}),`
`,e.jsx(n.h2,{id:"setting-a-custom-level",children:"Setting a custom level"}),`
`,e.jsxs(n.p,{children:["You can override the ",e.jsx(n.code,{children:"level"})," of a ",e.jsx(n.code,{children:"Layer"}),` if you would like to change the
presentation of a layer in your application. This is particularly helpful if you
would like to reset the `,e.jsx(n.code,{children:"Layer"})," level back to ",e.jsx(n.code,{children:"0"}),` or if you want to make sure a
part of a page always renders in a certain level.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-layer>
  <div class="example-layer-test-component">Layer 1</div>
  <cds-layer level="0">
    <div class="example-layer-test-component">Layer 1 as well</div>
    <cds-layer>
      <div class="example-layer-test-component">Layer 2</div>
    </cds-layer>
  </cds-layer>
</cds-layer>
`})}),`
`,e.jsx(n.h2,{id:"get-the-current-layer",children:"Get the current layer"}),`
`,e.jsxs(n.p,{children:[`If you are building a component and would like to know what layer the component
resides within, you can use the `,e.jsx(n.code,{children:"cds-use-layer"})," event."]}),`
`,e.jsxs(n.p,{children:["This event returns a ",e.jsx(n.code,{children:"CustomEvent"}),` with the current element firing the event, as
well as its layer:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`  document.addEventListener(\`\${prefix}-use-layer\`, (e) => {
    const { layer, level } = (e as any).detail;

    // use values here
  })
`})}),`
`,e.jsxs(n.p,{children:["If the structure of ",e.jsx(n.code,{children:"Layer"}),` components in your app change, the event will
automatically fire with the new level.`]}),`
`,e.jsx(n.p,{children:`The level value can be one of: 0, 1, or 2 and will correspond to the level of
the current layer. This value mirrors the level prop on the Layer component.`}),`
`,e.jsx(n.h2,{id:"layer-role",children:"Layer role"}),`
`,e.jsxs(n.p,{children:["As ",e.jsx(n.code,{children:"Layer"}),` is effectively a container component, and you can configure what the
`,e.jsx(n.code,{children:"Layer"})," should be seen as in the DOM using ",e.jsx(n.code,{children:"role"}),`. For example, if you would
like the Layer component to be seen as a section you could write the following:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-layer role="section">
  <div class="example-layer-test-component">Layer 1</div>
</cds-layer>
`})}),`
`,e.jsxs(n.h2,{id:"cds-layer-attributes-properties-and-events",children:[e.jsx(n.code,{children:"<cds-layer>"})," attributes, properties and events"]}),`
`,e.jsx(o,{of:"cds-layer"})]})}function C(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{C as default};
