import{j as o}from"./jsx-runtime-feeeffe0.js";import{u as l}from"./index-ff638d55.js";import{ae as c,af as e}from"./index-c9446c32.js";import{c as t,a as r}from"./storybook-cdn-4cc58f60.js";import{A as p}from"./autoalign.stories-53abe60f.js";import"./iframe-f75e0ec2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./lit-element-266f0592.js";import"./popover-content-d3dfbbea.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./property-da2637ab.js";import"./query-b9d3c2af.js";import"./carbon-element-59fbbccb.js";import"./popover-controller-26cce6f0.js";import"./toggletip-4f5ff9ac.js";import"./16-5513bc0c.js";import"./spread-61d77317.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./focus-73f58502.js";import"./defs-4d9ca86b.js";import"./slug-action-button-0a957c91.js";import"./button-4ef875e3.js";import"./if-defined-21892bb5.js";import"./icon-button-e8231e03.js";import"./tooltip-content-1105f219.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import"./table-toolbar-search-2366535b.js";import"./state-7d5425f0.js";import"./collection-helpers-3389bc25.js";import"./16-dfb8f0c2.js";import"./checkbox-4cbf61d5.js";import"./16-d3a54398.js";import"./16-81e6b9cc.js";import"./checkbox-skeleton-f3c1a5c2.js";import"./radio-button-skeleton-3df2ffb6.js";import"./radio-group-manager-b52ff8da.js";import"./text-input-f5b277bd.js";import"./16-4249ddd2.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./search-c228858a.js";import"./16-9baaa345.js";import"./16-80dd19e9.js";import"./16-c244fb0e.js";import"./popover-story-1d9aa45e.js";import"./slug-story-87db5f07.js";import"./tooltip-story-bea37db3.js";function s(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:p}),`
`,o.jsx(n.h1,{id:"auto-align",children:"Auto Align"}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsxs(n.p,{children:[`💡 Check our
`,o.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/autoalign",rel:"nofollow",children:"CodeSandbox"}),`
example implementation.`]}),`
`]}),`
`,o.jsx(n.p,{children:o.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/autoalign",rel:"nofollow",children:o.jsx(n.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit carbon-web-components"})})}),`
`,o.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#popover",children:"Popover"})}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#toggletip",children:"Toggletip"})}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#tooltip",children:"Tooltip"})}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#slug",children:"Slug"})}),`
`]}),`
`,o.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,o.jsxs(n.p,{children:[`Auto Align is an experimental feature utilizing the
`,o.jsx(n.a,{href:"https://floating-ui.com/docs/getting-started",rel:"nofollow",children:"@floating-ui/dom"}),` library. With
Auto Align, the tooltip or popover is positioned relative to the viewport and
other elements, avoiding collisions.`]}),`
`,o.jsxs(n.p,{children:["NOTE: The Auto Align feature currently uses the ",o.jsx(n.code,{children:"flip()"}),` utility from
`,o.jsx(n.a,{href:"https://floating-ui.com/docs/flip",rel:"nofollow",children:"@floating-ui/dom"}),` with the
`,o.jsx(n.code,{children:"fallbackAxisSideDirection"}),` enabled. If no placements along the preferred
placement axis fit, it will fallback to a primary axis direction (`,o.jsx(n.code,{children:"top"}),", ",o.jsx(n.code,{children:"left"}),`,
`,o.jsx(n.code,{children:"right"}),", or ",o.jsx(n.code,{children:"bottom"}),")."]}),`
`,o.jsxs(n.p,{children:["Activating the Auto Align feature is simple - just add the ",o.jsx(n.code,{children:"autoalign"}),` property
to the component.`]}),`
`,o.jsx(n.h2,{id:"popover",children:"Popover"}),`
`,o.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/popover/index.js';
import Checkbox16 from '@carbon/icons/lib/checkbox/16';
`})}),`
`,o.jsx(e,{children:`${t({components:["popover"]})}`}),`
`,o.jsx(e,{children:`${r()}`}),`
`,o.jsx(n.h3,{id:"html",children:"HTML"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-html",children:`<cds-popover open autoalign>
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
`,o.jsx(n.h2,{id:"toggletip",children:"Toggletip"}),`
`,o.jsx(n.h3,{id:"js-via-import-1",children:"JS (via import)"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/toggle-tip/index.js';
`})}),`
`,o.jsx(e,{children:`${t({components:["toogle-tip"]})}`}),`
`,o.jsx(e,{children:`${r()}`}),`
`,o.jsx(n.h3,{id:"html-1",children:"HTML"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-html",children:`<cds-toggletip autoalign>
  Toggletip label

  <p slot="body-text">toggletip body text</p>
  <cds-link slot="actions">Test</cds-link>
  <cds-button slot="actions">Button</cds-button>
</cds-toggletip>
`})}),`
`,o.jsx(n.h2,{id:"tooltip",children:"Tooltip"}),`
`,o.jsx(n.h3,{id:"js-via-import-2",children:"JS (via import)"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/tooltip/index.js';
import Information16 from '@carbon/icons/lib/information/16';
`})}),`
`,o.jsx(e,{children:`${t({components:["tooltip"]})}`}),`
`,o.jsx(e,{children:`${r()}`}),`
`,o.jsx(n.h3,{id:"html-2",children:"HTML"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-html",children:`<cds-tooltip autoalign>
  <div aria-labelledby="content">\${Information16()}</div>
  <cds-tooltip-content id="content">
    Occassionally, services are updated in a specified time window to ensure no
    down time for customers.
  </cds-tooltip-content>
</cds-tooltip>
`})}),`
`,o.jsx(n.h2,{id:"slug",children:"Slug"}),`
`,o.jsx(n.h3,{id:"js-via-import-3",children:"JS (via import)"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/slug/index.js';
`})}),`
`,o.jsx(e,{children:`${t({components:["slug"]})}`}),`
`,o.jsx(e,{children:`${r()}`}),`
`,o.jsx(n.h3,{id:"html-3",children:"HTML"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-html",children:`<cds-slug autoalign>
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h1>84%</h1>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr />
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>
</cds-slug>
`})})]})}function mo(i={}){const{wrapper:n}={...l(),...i.components};return n?o.jsx(n,{...i,children:o.jsx(s,{...i})}):s(i)}export{mo as default};
