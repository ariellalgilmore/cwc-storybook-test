import{j as e}from"./jsx-runtime-c7a019d5.js";import{u as s}from"./index-e2a81c98.js";import{ae as l,af as n,ag as i}from"./index-4bcb7531.js";import{c as a,a as d}from"./storybook-cdn-4cc58f60.js";import{F as p}from"./file-uploader.stories-5f1b4260.js";import"./iframe-7f5a54d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./carbon-element-59fbbccb.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./16-d57aeffe.js";import"./spread-61d77317.js";import"./16-9baaa345.js";import"./16-81e6b9cc.js";import"./loading-c136bf2d.js";import"./loading-icon-284120b6.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./if-non-empty-f918a1a3.js";import"./button-4ef875e3.js";import"./focus-73f58502.js";import"./skeleton-text-084071b9.js";import"./button-skeleton-e866e3ce.js";function r(o){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:p}),`
`,e.jsx(t.h1,{id:"file-uploader",children:"File uploader"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/file-uploader",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/file-uploader",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`File uploaders allow users to select one or more files to upload to a specific
location.`}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/file-uploader/index.js';
`})}),`
`,e.jsx(n,{children:`${a({components:["file-uploader"]})}`}),`
`,e.jsx(n,{children:`${d()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-file-uploader
  label-description="Only .jpg and .png files. 500kb max file size"
  label-title="Account photo"
>
  <cds-file-uploader-button accept="image/jpeg image/png" multiple>
    Drag and drop files here or click to upload
  </cds-file-drop-container>
</cds-file-uploader>
`})}),`
`,e.jsxs(t.h2,{id:"cds-file-uploader-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-file-uploader>"})," attributes, properties and events"]}),`
`,e.jsx(i,{of:"cds-file-uploader"}),`
`,e.jsxs(t.h2,{id:"cds-file-uploader-drop-container-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-file-uploader-drop-container>"})," attributes, properties and events"]}),`
`,e.jsx(i,{of:"cds-file-uploader-drop-container"}),`
`,e.jsxs(t.h2,{id:"cds-file-uploader-button-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-file-uploader-button>"})," attributes, properties and events"]}),`
`,e.jsx(i,{of:"cds-file-uploader-button"}),`
`,e.jsxs(t.h2,{id:"cds-file-uploader-item-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-file-uploader-item>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-file-uploader-item invalid>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(t.code,{children:"<cds-file-uploader-item>"})," without ",e.jsx(t.code,{children:"invalid"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-file-uploader-item"})]})}function O(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{O as default};
