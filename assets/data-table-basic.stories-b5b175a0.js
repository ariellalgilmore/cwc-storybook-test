import{x as t}from"./lit-element-266f0592.js";import{T as l}from"./table-toolbar-search-2366535b.js";import L from"./data-table-86300d07.js";import"./property-da2637ab.js";import"./state-7d5425f0.js";import"./carbon-element-59fbbccb.js";import"./collection-helpers-3389bc25.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./spread-61d77317.js";import"./focus-73f58502.js";import"./16-dfb8f0c2.js";import"./checkbox-4cbf61d5.js";import"./if-defined-21892bb5.js";import"./16-d3a54398.js";import"./16-81e6b9cc.js";import"./checkbox-skeleton-f3c1a5c2.js";import"./radio-button-skeleton-3df2ffb6.js";import"./radio-group-manager-b52ff8da.js";import"./text-input-f5b277bd.js";import"./16-4249ddd2.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./search-c228858a.js";import"./16-9baaa345.js";import"./jsx-runtime-29019649.js";import"./index-775d7884.js";import"./iframe-532ac6a9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-081880b6.js";import"./storybook-cdn-4cc58f60.js";import"./package-7aeb10bd.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const B={[`xs (${l.XS})`]:l.XS,[`sm (${l.SM})`]:l.SM,[`md (${l.MD})`]:l.MD,[`lg (${l.LG} - default)`]:l.LG,[`xl (${l.XL})`]:l.XL},D={locale:"en",size:l.LG,useStaticWidth:!1,useZebraStyles:!1},R={locale:{control:"text",description:"Provide a string for the current locale."},size:{control:"radio",description:"Change the row height of table.",options:B},useStaticWidth:{control:"boolean",description:"Use static width."},useZebraStyles:{control:"boolean",description:"Use zebra styles."}},e={render:()=>t`
    <cds-table>
      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
          <cds-table-header-cell>Other</cds-table-header-cell>
          <cds-table-header-cell>Example</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Starting</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Active</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 7</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  `},c={render:()=>t`
    <cds-table size="xl">
      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
          <cds-table-header-cell>Other</cds-table-header-cell>
          <cds-table-header-cell>Example</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 1
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Starting</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 2
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Active</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 3
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 4
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 5
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 6
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 7
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  `},a={args:D,argTypes:R,render:({locale:u,size:m,useStaticWidth:p,useZebraStyles:T})=>t`
    <cds-table
      locale="${u}"
      size="${m}"
      ?use-static-width="${p}"
      ?use-zebra-styles="${T}">
      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
          <cds-table-header-cell>Other</cds-table-header-cell>
          <cds-table-header-cell>Example</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Starting</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Active</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 7</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  `},bl={title:"Components/DataTable/Basic",parameters:{docs:{page:L}}};var d,s,b;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <cds-table>
      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
          <cds-table-header-cell>Other</cds-table-header-cell>
          <cds-table-header-cell>Example</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Starting</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Active</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 7</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  \`
}`,...(b=(s=e.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var n,r,o;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <cds-table size="xl">
      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
          <cds-table-header-cell>Other</cds-table-header-cell>
          <cds-table-header-cell>Example</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 1
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Starting</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 2
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Active</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 3
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 4
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 5
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 6
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            Load Balancer 7
            <cds-table-cell-content>Austin, Tx</cds-table-cell-content>
          </cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  \`
}`,...(o=(r=c.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,h,w;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    locale,
    size,
    useStaticWidth,
    useZebraStyles
  }) => html\`
    <cds-table
      locale="\${locale}"
      size="\${size}"
      ?use-static-width="\${useStaticWidth}"
      ?use-zebra-styles="\${useZebraStyles}">
      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
          <cds-table-header-cell>Other</cds-table-header-cell>
          <cds-table-header-cell>Example</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Starting</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Active</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 7</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Disabled</cds-table-cell>
          <cds-table-cell>Test</cds-table-cell>
          <cds-table-cell>22</cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  \`
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const nl=["Default","XLWithTwoLines","Playground"];export{e as Default,a as Playground,c as XLWithTwoLines,nl as __namedExportsOrder,bl as default};
