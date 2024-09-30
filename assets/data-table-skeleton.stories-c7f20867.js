import{x as p}from"./lit-element-266f0592.js";import h from"./data-table-c7befb3f.js";import"./table-toolbar-search-2366535b.js";import"./jsx-runtime-b0aba563.js";import"./index-fa03931b.js";import"./iframe-3b9c0475.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-e6c45b0c.js";import"./storybook-cdn-4cc58f60.js";import"./package-7aeb10bd.js";import"./property-da2637ab.js";import"./state-7d5425f0.js";import"./carbon-element-59fbbccb.js";import"./collection-helpers-3389bc25.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./spread-61d77317.js";import"./focus-73f58502.js";import"./16-dfb8f0c2.js";import"./checkbox-4cbf61d5.js";import"./if-defined-21892bb5.js";import"./16-d3a54398.js";import"./16-81e6b9cc.js";import"./checkbox-skeleton-f3c1a5c2.js";import"./radio-button-skeleton-3df2ffb6.js";import"./radio-group-manager-b52ff8da.js";import"./text-input-f5b277bd.js";import"./16-4249ddd2.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./search-c228858a.js";import"./16-9baaa345.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const c=["Name","Protocol","Port","Rule","Attached groups","Status"],w={compact:!1,columnCount:5,rowCount:5,showHeader:!0,showToolbar:!0,zebra:!1},$={compact:{control:"boolean",description:"Compact"},columnCount:{control:"number",description:"Column count"},rowCount:{control:"number",description:"Row count"},showHeader:{control:"boolean",description:"Show header"},showToolbar:{control:"boolean",description:"Show toolbar"},zebra:{control:"boolean",description:"Use zebra styles"}},o={render:()=>p` <cds-table-skeleton .headers=${c}> </cds-table-skeleton>`},r={args:w,argTypes:$,render:({columnCount:l,rowCount:i,showHeader:d,showToolbar:u,zebra:b})=>p`
    <cds-table-skeleton
      .headers=${c}
      column-count=${l}
      row-count=${i}
      ?show-header=${d}
      ?show-toolbar=${u}
      ?zebra=${b}>
    </cds-table-skeleton>
  `},eo={title:"Components/DataTable/Skeleton",parameters:{docs:{page:h}}};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{\n  render: () => html` <cds-table-skeleton .headers=${headers}> </cds-table-skeleton>`\n}",...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};var a,s,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    columnCount,
    rowCount,
    showHeader,
    showToolbar,
    zebra
  }) => html\`
    <cds-table-skeleton
      .headers=\${headers}
      column-count=\${columnCount}
      row-count=\${rowCount}
      ?show-header=\${showHeader}
      ?show-toolbar=\${showToolbar}
      ?zebra=\${zebra}>
    </cds-table-skeleton>
  \`
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const no=["Default","Playground"];export{o as Default,r as Playground,no as __namedExportsOrder,eo as default};
