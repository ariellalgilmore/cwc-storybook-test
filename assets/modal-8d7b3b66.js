import{j as e}from"./jsx-runtime-29019649.js";import{u as a}from"./index-081880b6.js";import{ae as l,af as t,ag as s}from"./index-775d7884.js";import{c,a as i}from"./storybook-cdn-4cc58f60.js";import{M as r}from"./modal.stories-96b17f60.js";import"./iframe-532ac6a9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./structured-list-row-af858098.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./collection-helpers-3389bc25.js";import"./focus-73f58502.js";import"./query-b9d3c2af.js";import"./if-defined-21892bb5.js";import"./16-d57aeffe.js";import"./spread-61d77317.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./radio-group-manager-b52ff8da.js";import"./modal-c7d1de3b.js";import"./modal-label-5028dcdd.js";import"./20-6cfa9697.js";import"./button-4ef875e3.js";function d(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/modal",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/modal",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.p,{children:`Modals interrupt user workflow by design. They are most effective when a task
must be completed before a user can continue. While effective when used
correctly, modals should be used sparingly to limit disruption to a user
experience.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#modal",children:"Modal"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#getting-started",children:"Getting started"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#modal-sizes",children:"Modal sizes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overflow-content",children:"Overflow content"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#modal-button-variants",children:"Modal button variants"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#using-modal-title-as-message",children:"Using modal title as message"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#focus-management",children:"Focus management"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#references",children:"References"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#feedback",children:"Feedback"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/button/index.js';
`})}),`
`,e.jsx(t,{children:`${c({components:["modal","button"]})}`}),`
`,e.jsx(t,{children:`${i()}`}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-button id="modal-example-button"> Open Modal </cds-button>

<cds-modal id="modal-example">
  <cds-modal-header>
    <cds-modal-close-button></cds-modal-close-button>
    <cds-modal-label>Label (Optional)</cds-modal-label>
    <cds-modal-heading>Modal Title</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body><p>Modal text description</p></cds-modal-body>
  <cds-modal-footer>
    <cds-modal-footer-button kind="secondary" data-modal-close
      >Cancel</cds-modal-footer-button
    >
    <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
  </cds-modal-footer>
</cds-modal>

<script type="text/javascript">
  document
    .getElementById('modal-example-button')
    .addEventListener('click', () => {
      document.getElementById('modal-example').open = true;
    });
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-modal open>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-modal>"})," without ",e.jsx(n.code,{children:"open"})," attribute)."]}),`
`,e.jsx(s,{of:"cds-modal"}),`
`,e.jsxs(n.h2,{id:"cds-modal-footer-button-attributes-and-properties",children:[e.jsx(n.code,{children:"<cds-modal-footer-button>"})," attributes and properties"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(n.code,{children:"<cds-modal-footer-button disabled>"}),") and ",e.jsx(n.code,{children:"false"}),` means not setting the
attribute (e.g. `,e.jsx(n.code,{children:"<cds-modal-footer-button>"})," without ",e.jsx(n.code,{children:"disabled"})," attribute)."]}),`
`,e.jsx(s,{of:"cds-modal-footer-button"}),`
`,e.jsx(n.h2,{id:"openingclosing-modal",children:"Opening/closing modal"}),`
`,e.jsx(n.p,{children:`For both modal variants, you can open/close the modal by changing the open prop.
For example, you can implement a button that launches the modal upon click.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal></cds-modal>
`})}),`
`,e.jsx(n.h2,{id:"modal-sizes",children:"Modal sizes"}),`
`,e.jsx(n.p,{children:`There are four responsive modal sizes: extra-small (sm), small (sm),
default/medium (md), and large (lg). You can set it via the size prop.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal size="lg">
  <cds-modal-header>
    <cds-modal-close-button></cds-modal-close-button>
    <cds-modal-label>Label (Optional)</cds-modal-label>
    <cds-modal-heading>Modal Title</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    <cds-modal-body-content>Modal text description</cds-modal-body-content>
  </cds-modal-body>
  <cds-modal-footer>
    <cds-modal-footer-button kind="secondary" data-modal-close
      >Cancel</cds-modal-footer-button
    >
    <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
  </cds-modal-footer>
</cds-modal>
`})}),`
`,e.jsx(n.h2,{id:"overflow-content",children:"Overflow content"}),`
`,e.jsx(n.p,{children:`In cases where even the largest modal size does not fit all of the modal
content, Carbon design specifies having a "visual fade" at the end of the modal
body area to indicate there is additional content out of view. You can set
hasScrollingContent prop to the component as such:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal has-scrolling-content>
  <cds-modal-header>
    <cds-modal-close-button></cds-modal-close-button>
    <cds-modal-label>Label (Optional)</cds-modal-label>
    <cds-modal-heading>Modal Title</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    <cds-modal-body-content>Modal text description</cds-modal-body-content>
    <p>Some very large contents...</p>
  </cds-modal-body>
  <cds-modal-footer>
    <cds-modal-footer-button kind="secondary" data-modal-close
      >Cancel</cds-modal-footer-button
    >
    <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
  </cds-modal-footer>
</cds-modal>
`})}),`
`,e.jsx(n.h2,{id:"modal-button-variants",children:"Modal button variants"}),`
`,e.jsx(n.p,{children:`With the modal component you can use up to three buttons. One has to be primary,
and the others secondary. Only the primary button can be a danger button.`}),`
`,e.jsx(n.h2,{id:"using-modal-title-as-message",children:"Using modal title as message"}),`
`,e.jsx(n.p,{children:`For short, direct messages the title can include the whole message to add visual
clarity to an otherwise repetitive title and body message.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal>
  <cds-modal-header>
    <cds-modal-close-button></cds-modal-close-button>
    <cds-modal-heading>You have been successfully signed out</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body></cds-modal-body>
</cds-modal>
`})}),`
`,e.jsx(n.h2,{id:"focus-management",children:"Focus management"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<cds-modal>"}),` puts focus on one of the following elements (in priority order)
once it gets open:`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["An programmatic-focusable element with ",e.jsx(n.code,{children:"data-modal-primary-focus"})," attribute"]}),`
`,e.jsx(n.li,{children:"The primary button in modal footer"}),`
`,e.jsx(n.li,{children:"The first sequential-focusable child element"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<cds-modal>"}),` enables "focus-wrapping" behavior after then. It means that
hitting tab key at the last sequential-focusable element in `,e.jsx(n.code,{children:"<cds-modal>"}),` puts
focus on the first sequential-focusable element, and hitting Shift-tab key at
the first sequential-focusable element in `,e.jsx(n.code,{children:"<cds-modal>"}),` puts focus on the last
sequential-focusable element.`]}),`
`,e.jsxs(n.p,{children:["Once ",e.jsx(n.code,{children:"<cds-modal>"}),` gets closed, it puts focus on the last focused element before
it got open, typically the launcher button.`]}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.p,{children:[`Check out the
`,e.jsx(n.a,{href:"https://www.carbondesignsystem.com/components/modal/usage/",rel:"nofollow",children:"usage guidelines"}),`
on the Carbon Design System website.`]}),`
`,e.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,e.jsxs(n.p,{children:[`Help us improve this component by providing feedback through, asking questions
on Slack,or updating this file on
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon-for-ibm-dotcom/edit/main/packages/carbon-web-components/src/components/modal/modal-story.mdx",rel:"nofollow",children:"GitHub"}),"."]})]})}function X(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}export{X as default};
