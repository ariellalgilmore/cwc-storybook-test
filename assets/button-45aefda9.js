import{j as e}from"./jsx-runtime-feeeffe0.js";import{u as i}from"./index-ff638d55.js";import{ae as r,af as o,ag as c}from"./index-c9446c32.js";import{c as a,a as d}from"./storybook-cdn-4cc58f60.js";import"./lit-element-266f0592.js";import{B as l}from"./button.stories-1aa1e677.js";import"./iframe-f75e0ec2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./package-7aeb10bd.js";import"./16-22dc4144.js";import"./spread-61d77317.js";import"./directive-12249aa5.js";import"./button-4ef875e3.js";import"./class-map-4a7e6437.js";import"./if-defined-21892bb5.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./focus-73f58502.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";function s(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(t.h1,{id:"button",children:"Button"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/button",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/packages/web-components/examples/components/button",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[`Buttons are clickable elements that are used to trigger actions. They
communicate calls to action to the user and allow users to interact with pages
in a variety of ways. `,e.jsx(t.code,{children:"Button"}),` labels express what action will occur when the
user interacts with it.`]}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/button/index.js';
`})}),`
`,e.jsx(t.h3,{id:"scss-must-include-with-js-import",children:"SCSS (must include with JS import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`@use '@carbon/styles/scss/components/button';
`})}),`
`,e.jsx(o,{children:`${a({components:["button"]})}`}),`
`,e.jsx(o,{children:`${d()}`}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-button href="https://www.ibm.com"> Button </cds-button>
`})}),`
`,e.jsx(t.h2,{id:"danger-buttons",children:"Danger Buttons"}),`
`,e.jsx(t.p,{children:`The danger button has three different styles: primary, tertiary, and ghost.
Determining which danger button style to use will depend on the level of
emphasis you want to give to the danger action. Destructive actions that are
considered a required or primary step in a workflow should use the primary
danger button style. However, if a destructive action is just one of several
actions a user could choose from, then a lower emphasis style like the tertiary
danger button or the ghost danger button may be more appropriate.`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-button type="danger" href="https://www.ibm.com"> Button </cds-button>
`})}),`
`,e.jsx(t.h2,{id:"icon-only-buttons",children:"Icon-only Buttons"}),`
`,e.jsx(t.p,{children:`Icon buttons allow users to take actions, and make choices, with a single tap.
Icon buttons can take the form of any of the seven types (Primary, Secondary,
Tertiary, Danger, Danger tertiary, Danger ghost and Ghost) but most commonly
will be styled as primary or ghost buttons.`}),`
`,e.jsx(t.p,{children:"Our Storybook example also shows off the Tooltip feature, explained later."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`import Add16 from '@carbon/icons/lib/add/16';

<cds-button> \${Add16({ slot: 'icon' })} </cds-button>\`\`\` ## Set of Buttons You
can wrap two \`Button\` elements in a \`ButtonSet\` when an action required by the
user has more than one option. Always use a negative action button (secondary)
paired with a positive action button (primary) in that order. Negative action
buttons will be on the left. Positive action buttons should be on the right.
When these two types buttons are paired in the correct order, they will
automatically space themselves apart. \`\`\`html
<cds-button-set>
  <cds-button href="https://www.ibm.com"> Secondary 1</cds-button>
  <cds-button href="https://www.ibm.com"> Primary 2</cds-button>
</cds-button-set>
`})}),`
`,e.jsx(t.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsxs(t.p,{children:["For the skeleton variation, utilize ",e.jsx(t.code,{children:"<cds-button-skeleton>"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<cds-button-skeleton size="sm"> </cds-button-skeleton>
`})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsxs(t.h3,{id:"button-size",children:["Button ",e.jsx(t.code,{children:"size"})]}),`
`,e.jsxs(t.p,{children:["This attribute specifies which size the ",e.jsx(t.code,{children:"Button"}),` should be rendered at. Valid
values are `,e.jsx(t.code,{children:"sm"}),", ",e.jsx(t.code,{children:"md"}),", ",e.jsx(t.code,{children:"lg"}),", ",e.jsx(t.code,{children:"xl"})," and ",e.jsx(t.code,{children:"2xl"}),". If no ",e.jsx(t.code,{children:"size"}),` is specified, it
renders as `,e.jsx(t.code,{children:"lg"}),"."]}),`
`,e.jsxs(t.h3,{id:"button-tooltipalignment",children:["Button ",e.jsx(t.code,{children:"tooltipAlignment"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"tooltip-alignment"}),` attribute is used to change where the tooltip text and
caret is rendered in relation to the `,e.jsx(t.code,{children:"Button"}),". Accepted options are ",e.jsx(t.code,{children:"start"}),`,
`,e.jsx(t.code,{children:"center"}),", and ",e.jsx(t.code,{children:"end"}),". The default alignment is ",e.jsx(t.code,{children:"center"}),"."]}),`
`,e.jsxs(t.h3,{id:"button-tooltipposition",children:["Button ",e.jsx(t.code,{children:"tooltipPosition"})]}),`
`,e.jsxs(t.p,{children:[`When using an icon-only button, you may be in a situation where you need to
change where the tooltip is positioned on the screen. `,e.jsx(t.code,{children:"tooltip-position"}),` takes
in a position and will render the tooltip accordingly. Accepted options are
`,e.jsx(t.code,{children:"top"}),", ",e.jsx(t.code,{children:"bottom"}),", ",e.jsx(t.code,{children:"left"}),", and ",e.jsx(t.code,{children:"right"}),". The default is position is ",e.jsx(t.code,{children:"top"}),"."]}),`
`,e.jsxs(t.h3,{id:"buttonset-stacked",children:["ButtonSet ",e.jsx(t.code,{children:"stacked"})]}),`
`,e.jsxs(t.p,{children:["By passing in ",e.jsx(t.code,{children:"stacked"})," to the ",e.jsx(t.code,{children:"cds-button-set"}),` component, you can arrange your
two `,e.jsx(t.code,{children:"Button"})," elements vertically"]}),`
`,e.jsxs(t.h2,{id:"cds-button-attributes-and-properties",children:[e.jsx(t.code,{children:"<cds-button>"})," attributes and properties"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-button autofocus>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<cds-button>"})," without ",e.jsx(t.code,{children:"autofocus"})," attribute)."]}),`
`,e.jsx(c,{of:"cds-button"})]})}function F(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{F as default};
