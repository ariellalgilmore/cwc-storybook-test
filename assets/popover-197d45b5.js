import{j as e}from"./jsx-runtime-feeeffe0.js";import{u as i}from"./index-ff638d55.js";import{ae as c,af as t,ag as r}from"./index-c9446c32.js";import{c as p,a}from"./storybook-cdn-4cc58f60.js";import{P as d}from"./popover.stories-235bda6d.js";import"./iframe-f75e0ec2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./popover-content-d3dfbbea.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./carbon-element-59fbbccb.js";import"./popover-controller-26cce6f0.js";import"./radio-button-skeleton-3df2ffb6.js";import"./if-defined-21892bb5.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./focus-73f58502.js";import"./radio-group-manager-b52ff8da.js";import"./16-d3a54398.js";import"./spread-61d77317.js";import"./collection-helpers-3389bc25.js";import"./16-81e6b9cc.js";import"./defs-4d9ca86b.js";import"./16-80dd19e9.js";import"./16-c489d79b.js";import"./checkbox-4cbf61d5.js";import"./popover-story-1d9aa45e.js";function s(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[`💡 Check our
`,e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/popover",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/popover",rel:"nofollow",children:e.jsx(o.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(o.p,{children:"Popover is a layer that pops up over all other elements on a page"}),`
`,e.jsx(o.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(o.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(o.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/popover/index.js';
import Checkbox16 from '@carbon/icons/lib/checkbox/16';
`})}),`
`,e.jsx(t,{children:`${p({components:["popover"]})}`}),`
`,e.jsx(t,{children:`${a()}`}),`
`,e.jsx(o.h3,{id:"html",children:"HTML"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<cds-popover open>
  <div class="playground-trigger">\${Checkbox16()}</div>
  <cds-popover-content>
    <div class="p-3">
      <p class="popover-title">Available storage</p>
      <p class="popover-details">
        This server has 150 GB of block storage remaining.
      </p>
    </div>
  </cds-popover-content>
</cds-popover>
`})}),`
`,e.jsx(o.h2,{id:"html-with-tabtip",children:"HTML (with Tabtip)"}),`
`,e.jsx(o.h3,{id:"js-via-import-1",children:"JS (via import)"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/popover/index.js';
import '@carbon/web-components/es/components/form/index.js';
import '@carbon/web-components/es/components/radio-button/index.js';
import '@carbon/web-components/es/components/checkbox/index.js';

import Settings16 from '@carbon/icons/lib/settings/16';
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<cds-popover open tabTip>
  <button aria-label="Settings" type="button">\${Settings16()}</button>
  <cds-popover-content>
    <div class="p-3">
      <cds-form-item>
        <cds-radio-button-group
          legend-text="Row height"
          name="radio-button-group"
          value="small"
          style="align-items: flex-start; flex-direction: column">
          <cds-radio-button
            label-text="Small"
            value="small"
            id="radio-small"></cds-radio-button>
          <cds-radio-button
            label-text="Large"
            value="large"
            id="radio-large"></cds-radio-button>
        </cds-radio-button-group>
      </cds-form-item>
      <hr />
      <fieldset class="\${prefix}--fieldset">
        <legend class="\${prefix}--label">Edit columns</legend>
        <cds-checkbox
          checked
          label-text="Name"
          id="checkbox-label-1"></cds-checkbox>
        <cds-checkbox
          checked
          label-text="Type"
          id="checkbox-label-2"></cds-checkbox>
        <cds-checkbox
          checked
          label-text="Location"
          id="checkbox-label-3"></cds-checkbox>
      </fieldset>
    </div>
  </cds-popover-content>
</cds-popover>
`})}),`
`,e.jsxs(o.h2,{id:"cds-popover-attributes-and-properties",children:[e.jsx(o.code,{children:"<cds-popover>"})," attributes and properties"]}),`
`,e.jsx(r,{of:"cds-popover"}),`
`,e.jsxs(o.h2,{id:"cds-popover-content-attributes-and-properties",children:[e.jsx(o.code,{children:"<cds-popover-content>"})," attributes and properties"]}),`
`,e.jsx(r,{of:"cds-popover-content"})]})}function K(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{K as default};
