import{j as t}from"./jsx-runtime-4f014612.js";import{u as s}from"./index-5339b155.js";import{ae as r,af as n,ag as a}from"./index-d9869d15.js";import{c,a as p}from"./storybook-cdn-4cc58f60.js";import{T as l}from"./tooltip.stories-a0ce0d8c.js";import"./iframe-174b7d92.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./tooltip-content-1105f219.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./popover-content-d3dfbbea.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./popover-controller-26cce6f0.js";import"./defs-4d9ca86b.js";import"./tooltip-story-bea37db3.js";import"./16-5513bc0c.js";import"./spread-61d77317.js";function i(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l}),`
`,t.jsx(e.h1,{id:"tooltip",children:"Tooltip"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/tooltip",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/tooltip",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:`You can use the Tooltip component as a wrapper to display a popup for an
interactive element that you provide. If you are trying to place interactive
content inside of the Tooltip itself, consider using Toggletip instead. You can
provide the interactive element as a child to Tooltip. Tooltips provide
additional information upon hover or focus. The information should be
contextual, useful, and nonessential information. Keep tooltips short.`}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/tooltip/index.js';
import Information16 from '@carbon/icons/lib/information/16';
`})}),`
`,t.jsx(n,{children:`${c({components:["tooltip"]})}`}),`
`,t.jsx(n,{children:`${p()}`}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<cds-tooltip align="bottom">
  <div class="sb-tooltip-trigger" aria-labelledby="content">
    \${Information16()}
  </div>
  <cds-tooltip-content id="content">
    Occassionally, services are updated in a specified time window to ensure no
    down time for customers.
  </cds-tooltip-content>
</cds-tooltip>
`})}),`
`,t.jsx(e.h2,{id:"toggletips-vs-tooltips",children:"Toggletips vs Tooltips"}),`
`,t.jsx(e.p,{children:`Toggletips and tooltips are similar visually and both contain a popover and
interactive trigger element. The two components differ in the way they are
invoked and dismissed and if the user must interact with the contents. A tooltip
is exposed on hover or focus when you need to expose brief, supplemental
information that is not interactive. A toggletip is used on click or enter when
you need to expose interactive elements, such as button, that a user needs to
interact with.`}),`
`,t.jsxs(e.h3,{id:"cds-tooltip-attributes-and-properties",children:[t.jsx(e.code,{children:"<cds-tooltip>"})," attributes and properties"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(e.code,{children:"<cds-tooltip open>"}),") and ",t.jsx(e.code,{children:"false"}),` means not setting the attribute (e.g.
`,t.jsx(e.code,{children:"<cds-tooltip>"})," without ",t.jsx(e.code,{children:"open"})," attribute)."]}),`
`,t.jsx(a,{of:"cds-tooltip"})]})}function H(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{H as default};
