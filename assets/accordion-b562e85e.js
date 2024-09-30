import{j as e}from"./jsx-runtime-508ac468.js";import{u as c}from"./index-957a5a66.js";import{ae as s,af as i,ag as a}from"./index-31737638.js";import{c as r,a as d}from"./storybook-cdn-4cc58f60.js";import{A as m}from"./accordion.stories-ffd42a02.js";import"./iframe-7e1ca180.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./carbon-element-59fbbccb.js";import"./property-da2637ab.js";import"./collection-helpers-3389bc25.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./16-dfb8f0c2.js";import"./spread-61d77317.js";import"./focus-73f58502.js";import"./skeleton-text-084071b9.js";import"./button-4ef875e3.js";import"./if-defined-21892bb5.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:m}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/accordion",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/accordion",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.p,{children:`The accordion component delivers large amounts of content in a small space
through progressive disclosure. That is, the user gets key details about the
underlying content and can choose to expand that content within the constraints
of the accordion. Accordions work especially well on mobile interfaces or
whenever vertical space is at a premium.`}),`
`,e.jsx(n.p,{children:`Avoid “nested” accordions—that is, collapsible content within collapsible
content. This type of pattern goes against UX best practices.`}),`
`,e.jsx(n.p,{children:"The Carbon accordion allows for multiple sections to be expanded simultaneously."}),`
`,e.jsx(n.p,{children:`A chevron is used to indicate the “expand/collapse” action, though the entire
header area is clickable for the same action.`}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/accordion/index.js';
`})}),`
`,e.jsx(i,{children:`${r({components:["accordion"]})}`}),`
`,e.jsx(i,{children:`${d()}`}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-accordion>
  <cds-accordion-item title="Section 1 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </cds-accordion-item>
  <cds-accordion-item title="Section 2 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </cds-accordion-item>
  <cds-accordion-item title="Section 3 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </cds-accordion-item>
  <cds-accordion-item title="Section 4 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </cds-accordion-item>
</cds-accordion>
`})}),`
`,e.jsx(n.h3,{id:"html-skeleton",children:"HTML (skeleton)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-accordion-skeleton></cds-accordion-skeleton>
`})}),`
`,e.jsxs(n.h2,{id:"cds-accordion-item-attributes-properties-and-events",children:[e.jsx(n.code,{children:"<cds-accordion-item>"})," attributes, properties and events"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-accordion-item open>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-accordion-item>"})," without ",e.jsx(n.code,{children:"open"})," attribute)."]}),`
`,e.jsx(a,{of:"cds-accordion-item"})]})}function F(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{F as default};
