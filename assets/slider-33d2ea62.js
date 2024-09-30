import{j as e}from"./jsx-runtime-c7a019d5.js";import{u as d}from"./index-e2a81c98.js";import{ae as o,af as s,ag as i}from"./index-4bcb7531.js";import{c as l,a as c}from"./storybook-cdn-4cc58f60.js";import{S as a}from"./slider.stories-fd3cf1bb.js";import"./iframe-7f5a54d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./if-defined-21892bb5.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./carbon-element-59fbbccb.js";import"./focus-73f58502.js";import"./16-d3a54398.js";import"./on-5bd5e89a.js";import"./spread-61d77317.js";import"./host-listener-0f7877ac.js";import"./16-81e6b9cc.js";import"./form-item-325d0083.js";import"./layer-d66987ad.js";import"./with-layer-c4dddb92.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(t.h1,{id:"slider",children:"Slider"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/slider",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/slider",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`Sliders provide a visual indication of adjustable content, where the user can
move the handle along a horizontal track to increase or decrease the value.`}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/slider/index.js';
`})}),`
`,e.jsx(s,{children:`${l({components:["slider"]})}`}),`
`,e.jsx(s,{children:`${c()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-slider
  label-text="Slider"
  max="100"
  min="0"
  step="1"
  value="50"></cds-slider>
`})}),`
`,e.jsx(t.h2,{id:"with-input-box",children:"With input box"}),`
`,e.jsxs(t.p,{children:["To include an input box, place ",e.jsx(t.code,{children:"<cds-slider-input>"})," within ",e.jsx(t.code,{children:"<cds-slider>"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-slider label-text="Slider" max="100" min="0" step="1" value="50">
  <cds-slider-input aria-label="Slider value" type="number"></cds-slider-input>
</cds-slider>
`})}),`
`,e.jsx(t.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsxs(t.p,{children:["For the skeleton variation, utilize ",e.jsx(t.code,{children:"<cds-slider-skeleton>"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-slider-skeleton></cds-slider-skeleton>
`})}),`
`,e.jsxs(t.h2,{id:"cds-slider-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-slider>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-slider disabled>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-slider>"})," without ",e.jsx(t.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-slider"}),`
`,e.jsxs(t.h2,{id:"cds-slider-input-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-slider-input>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-slider-input invalid>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-slider-input>"})," without ",e.jsx(t.code,{children:"invalid"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-slider-input"})]})}function $(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{$ as default};
