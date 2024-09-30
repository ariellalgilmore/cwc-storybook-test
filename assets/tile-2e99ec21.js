import{j as e}from"./jsx-runtime-c7a019d5.js";import{u as c}from"./index-e2a81c98.js";import{af as l,ag as i}from"./index-4bcb7531.js";import{c as a,a as r}from"./storybook-cdn-4cc58f60.js";import"./iframe-7f5a54d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";function s(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"tile",children:"Tile"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/tile",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/tile",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.p,{children:`Tiles are a highly flexible component for displaying a wide variety of content,
including informational, getting started, how-to, next steps, and more.`}),`
`,e.jsx(t.p,{children:`Carbon ships a basic tile structure that responds to the grid. Tiles have no
pre-set styles for the content within them. You can customize tiles to fit your
specific use case.`}),`
`,e.jsx(t.p,{children:`When using a call-to-action (CTA) within a tile, use a secondary button. Primary
buttons should be reserved for the most important action a user can take on the
page.`}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/tile/index.js';
`})}),`
`,e.jsx(l,{children:`${a({components:["tile"]})}`}),`
`,e.jsx(l,{children:`${r()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-tile>Default tile</cds-tile>
`})}),`
`,e.jsx(t.h2,{id:"read-only-tile-default",children:"Read-only tile (default)"}),`
`,e.jsx(t.p,{children:`Read-only tiles are used to display information to the user, such as features or
services offered. Read-only tiles are often seen on marketing pages to promote
content. These tiles can have internal calls-to-action (CTAs), such as a button
or a link.`}),`
`,e.jsx(t.h2,{id:"clickable-tile",children:"Clickable tile"}),`
`,e.jsx(t.p,{children:`Clickable tiles can be used as navigational items, where the entire tile is a
clickable state, which redirects the user to a new page. Clickable tiles cannot
contain separate internal CTAs.`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-clickable-tile> Clickable tile </cds-clickable-tile>
`})}),`
`,e.jsxs(t.h2,{id:"cds-clickable-tile-attributes-and-properties",children:[e.jsx(t.code,{children:"<cds-clickable-tile>"})," attributes and properties"]}),`
`,e.jsx(i,{of:"cds-clickable-tile"}),`
`,e.jsx(t.h2,{id:"radio-tile",children:"Radio tile"}),`
`,e.jsx(t.p,{children:`Radio tiles work like a radio button, where the entire tile is a click target.
Radio tiles may contain internal CTAs (like links to docs) if the internal CTA
is given its own click target. Radio tiles work well for presenting options to a
user in a structured manner, such as a set of pricing plans.`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-tile-group>
  <cds-radio-tile name="selectable-tile"> Single-select Tile </cds-radio-tile>
  <cds-radio-tile name="selectable-tile"> Single-select Tile </cds-radio-tile>
  <cds-radio-tile name="selectable-tile"> Single-select Tile </cds-radio-tile>
</cds-tile-group>
`})}),`
`,e.jsxs(t.h2,{id:"cds-radio-tile-attributes-and-properties",children:[e.jsx(t.code,{children:"<cds-radio-tile>"})," attributes and properties"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-radio-tile selected>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-radio-tile>"})," without ",e.jsx(t.code,{children:"selected"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-radio-tile"}),`
`,e.jsx(t.h2,{id:"selectable-tile",children:"Selectable tile"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-selectable-tile name="selectable-tile">
  Selectable Tile
</cds-selectable-tile>
`})}),`
`,e.jsxs(t.h2,{id:"cds-selectable-tile-attributes-and-properties-and-events",children:[e.jsx(t.code,{children:"<cds-selectable-tile>"})," attributes and properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-selectable-tile selected>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(t.code,{children:"<cds-selectable-tile>"})," without ",e.jsx(t.code,{children:"selected"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-selectable-tile"}),`
`,e.jsx(t.h2,{id:"multi-select",children:"Multi Select"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-tile-group>
  <cds-selectable-tile name="selectable-tile">
    Selectable Tile 1
  </cds-selectable-tile>
  <cds-selectable-tile name="selectable-tile2">
    Selectable Tile 2
  </cds-selectable-tile>
  <cds-selectable-tile name="selectable-tile3">
    Selectable Tile 3
  </cds-selectable-tile>
  <cds-tile-group></cds-tile-group
></cds-tile-group>
`})}),`
`,e.jsx(t.h2,{id:"capturing-tile-selection",children:"Capturing tile selection"}),`
`,e.jsxs(t.p,{children:["If using the ",e.jsx(t.code,{children:"cds-tile-group"}),` component alongside either Radio or Selectable
tiles, you can capture the events using an event listener for the following
event names:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["For radio tiles, capture:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"cds-current-radio-tile-selection"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["For selectable tiles, capture:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"cds-current-selectable-tile-selections"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`document.addEventListener('cds-current-radio-tile-selection', (event) => {
  // use values from the detail object within the event
});
`})}),`
`,e.jsx(t.h2,{id:"expandable-tile",children:"Expandable tile"}),`
`,e.jsx(t.p,{children:`Expandable tiles are helpful for hiding/showing larger amounts of content to a
user. They can only be stacked in a single column, and cannot live in a row or
horizontal grid. When expanded, tiles push content down the page. Expandable
tiles may contain internal CTAs (like links to docs) if the internal CTA is
given its own click target.`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-expandable-tile>
  <cds-tile-above-the-fold-content
    slot="above-the-fold-content"
    style="height: 200px">
    Above the fold content here
  </cds-tile-above-the-fold-content>
  <cds-tile-below-the-fold-content style="height: 300px">
    Below the fold content here
  </cds-tile-below-the-fold-content>
</cds-expandable-tile>
`})}),`
`,e.jsxs(t.p,{children:[`If the desired behavior is expanding only upon clicking the button with the
caret icon, use the `,e.jsx(t.code,{children:"with-interactive"})," attribute instead."]}),`
`,e.jsxs(t.h2,{id:"cds-expandable-tile-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<cds-expandable-tile>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-expandable-tile expanded>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute
(e.g. `,e.jsx(t.code,{children:"<cds-expandable-tile>"})," without ",e.jsx(t.code,{children:"expanded"})," attribute)."]}),`
`,e.jsx(i,{of:"cds-expandable-tile"})]})}function k(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{k as default};
