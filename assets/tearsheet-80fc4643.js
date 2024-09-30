import{j as t}from"./jsx-runtime-5c5465e4.js";import{u as i}from"./index-78b33afb.js";import{ae as r,af as o,ag as a}from"./index-d6ce44c6.js";import{c,a as d}from"./storybook-cdn-4cc58f60.js";import{T as p}from"./tearsheet.stories-74891204.js";import"./iframe-999c67b6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./button-4ef875e3.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./if-defined-21892bb5.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./focus-73f58502.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./state-7d5425f0.js";import"./query-b9d3c2af.js";import"./query-assigned-elements-43485e4e.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import"./layer-d66987ad.js";import"./modal-c7d1de3b.js";import"./modal-label-5028dcdd.js";import"./20-6cfa9697.js";import"./spread-61d77317.js";import"./text-input-f5b277bd.js";import"./16-4249ddd2.js";import"./16-81e6b9cc.js";import"./16-d3a54398.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./text-input-skeleton-2fc7e4c6.js";import"./textarea-skeleton-5d52d4ee.js";function s(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:p}),`
`,t.jsx(e.h1,{id:"tearsheet",children:"Tearsheet"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://codesandbox.io/s/github/carbon-design-system/carbon-for-ibm-dotcom/tree/feat/main/packages/carbon-web-components/examples/codesandbox/basic/components/tearsheet",rel:"nofollow",children:"CodeSandbox"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://codesandbox.io/s/github/carbon-design-system/carbon-for-ibm-dotcom/tree/feat/main/packages/carbon-web-components/examples/codesandbox/basic/components/tearsheet",rel:"nofollow",children:t.jsx(e.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:`Tearsheets keep users in-context of a page while performing tasks like
navigating, editing, viewing details, or configuring something new.`}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/tearsheet/index.js';
// The following are used for slotted fields
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/textarea/index.js';
import '@carbon/web-components/es/components/button/index.js';
`})}),`
`,t.jsx(o,{children:`${c({components:["tearsheet"]})}`}),`
`,t.jsx(o,{children:`${d()}`}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<cds-tearsheet>
  <!-- Content -->
  <h5>Tearsheet content</h5>
  <div class="\${storyPrefix}text-inputs">
    <cds-text-input
      label="Input A"
      id="tearsheet-story-text-input-a"></cds-text-input>
    <cds-text-input
      label="Input B"
      id="tearsheet-story-text-input-b"></cds-text-input>
  </div>
  <div class="\${storyPrefix}text-inputs">
    <cds-text-input
      label="Input C"
      id="tearsheet-story-text-input-c"></cds-text-input>
    <cds-text-input
      label="Input D"
      id="tearsheet-story-text-input-d"></cds-text-input>
  </div>
  <div class="\${storyPrefix}textarea-container">
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
  </div>

  <!-- subtitle optional -->
  <div slot="subtitle">
    Subtitle text which can provide more detail on the content being displayed.
  </div>

  <!-- Action toolbar optional -->
  <cds-button slot="action-toolbar">Copy</cds-button>
  <cds-button
    slot="action-toolbar"
    aria-label="Settings"
    has-icon-only="true"
    kind="\${BUTTON_KIND.GHOST}"
    size="sm"
    tooltip-text="Settings">
    \${Settings({ slot: 'icon' })}
  </cds-button>
  <cds-button
    slot="action-toolbar"
    aria-label="Delete"
    has-icon-only="true"
    kind="\${BUTTON_KIND.GHOST}"
    size="sm"
    tooltip-text="Delete">
    \${Trashcan({ slot: 'icon' })}
  </cds-button>

  <!-- Tearsheet actions optional -->
  <cds-button slot="actions" kind="\${BUTTON_KIND.GHOST}">Ghost</cds-button>
  <cds-button slot="actions" kind="\${BUTTON_KIND.PRIMARY}"></cds-button>
</cds-tearsheet>
`})}),`
`,t.jsxs(e.h2,{id:"cds-tearsheet-attributes-properties-and-events",children:[t.jsx(e.code,{children:"<cds-tearsheet>"})," attributes, properties and events"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(e.code,{children:"<cds-tearsheet open>"}),") and ",t.jsx(e.code,{children:"false"}),` means not setting the attribute (e.g.
`,t.jsx(e.code,{children:"<cds-tearsheet>"})," without ",t.jsx(e.code,{children:"open"})," attribute)."]}),`
`,t.jsx(a,{of:"cds-tearsheet"})]})}function V(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{V as default};
