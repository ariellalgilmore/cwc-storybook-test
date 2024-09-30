import{x as T}from"./lit-element-266f0592.js";import{p as k}from"./carbon-element-59fbbccb.js";import{T as c}from"./table-toolbar-search-2366535b.js";import{s as g}from"./16-22dc4144.js";import{s as i}from"./16-459943d7.js";import{s as M}from"./16-fc295375.js";import{s as $}from"./16-8e39cfac.js";import{s as x}from"./16-c489d79b.js";import R from"./data-table-eae08402.js";import"./property-da2637ab.js";import"./state-7d5425f0.js";import"./collection-helpers-3389bc25.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./spread-61d77317.js";import"./focus-73f58502.js";import"./16-dfb8f0c2.js";import"./checkbox-4cbf61d5.js";import"./if-defined-21892bb5.js";import"./16-d3a54398.js";import"./16-81e6b9cc.js";import"./checkbox-skeleton-f3c1a5c2.js";import"./radio-button-skeleton-3df2ffb6.js";import"./radio-group-manager-b52ff8da.js";import"./text-input-f5b277bd.js";import"./16-4249ddd2.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./search-c228858a.js";import"./16-9baaa345.js";import"./jsx-runtime-a132e2bc.js";import"./index-8ad226c6.js";import"./iframe-4eabc064.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-84c96c65.js";import"./storybook-cdn-4cc58f60.js";import"./package-7aeb10bd.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const P={[`xs (${c.XS})`]:c.XS,[`sm (${c.SM})`]:c.SM,[`md (${c.MD})`]:c.MD,[`lg (${c.LG} - default)`]:c.LG,[`xl (${c.XL})`]:c.XL},y={isSortable:!1,locale:"en",radio:!1,size:c.LG,useStaticWidth:!1,useZebraStyles:!1},A={isSortable:{control:"boolean",description:"Is sortable"},locale:{control:"text",description:"Locale"},radio:{control:"boolean",description:"Radio"},size:{control:"radio",description:"Size",options:P},useStaticWidth:{control:"boolean",description:"Use static width"},useZebraStyles:{control:"boolean",description:"Use zebra styles"}};let n=6,o=1;const H=(e,l)=>{const a=Math.floor(Math.random()*(e.length+1));return[...e.slice(0,a),l,...e.slice(a)]},S=()=>{const e=document.createElement("cds-table-row"),l={name:`New Row ${o}`,protocol:"HTTP",port:o*100,rule:o%2===0?"Round robin":"DNS delegation",attached_groups:`Row ${o}'s VM Groups`,status:"Starting"};for(const t in l)if(Object.prototype.hasOwnProperty.call(l,t)){const p=document.createElement("cds-table-cell");p.textContent=l[t],e.appendChild(p)}const a=document.querySelectorAll("cds-table-row"),d=n-Object.keys(l).length;[...Array(d)].forEach(()=>{const t=document.createElement("cds-table-cell");t.textContent=`Header ${n-1}`,e.appendChild(t)}),e.setAttribute("selection-name",`${a.length}`),H([...a],e).forEach(t=>{document.querySelector("cds-table-body").insertBefore(t,null)}),o++},D=()=>{const e=document.querySelector("cds-table-header-row"),l=document.createElement("cds-table-header-cell");l.textContent=`Header ${n}`,e==null||e.appendChild(l),document.querySelectorAll("cds-table-row").forEach(d=>{const s=document.createElement("cds-table-cell");s.textContent=`Header ${n}`,d.appendChild(s)}),n++},b={render:()=>T`
    <cds-table>
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >Use the toolbar menu to add rows and
        headers</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-batch-actions ?active="true">
          <cds-button tooltip-position="bottom" tooltip-text="Add"
            >${g({slot:"icon"})}</cds-button
          >
          <cds-button tooltip-position="bottom" tooltip-text="Save"
            >${i({slot:"icon"})}</cds-button
          >
          <cds-button>${i({slot:"icon"})}</cds-button>
          <cds-button href="javascript:void 0" download="table-data.json">
            Download ${$({slot:"icon"})}
          </cds-button>
        </cds-table-batch-actions>
        <cds-table-toolbar-content ?has-batch-actions="true">
          <cds-table-toolbar-search
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            ${x({slot:"icon",class:`${k}--overflow-menu__icon`})}
            <cds-overflow-menu-body flipped>
              <cds-overflow-menu-item @click=${S}
                >Add row</cds-overflow-menu-item
              >
              <cds-overflow-menu-item @click=${D}
                >Add header</cds-overflow-menu-item
              >
            </cds-overflow-menu-body>
          </cds-overflow-menu>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row selection-name="header">
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row selection-name="0">
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row selection-name="1">
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="2">
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="3">
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row selection-name="4">
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="5">
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  `},r={args:y,argTypes:A,render:({isSortable:e,locale:l,radio:a,size:d,useStaticWidth:s,useZebraStyles:t})=>T`
    <cds-table
      expandable
      ?is-sortable=${e}
      locale="${l}"
      ?radio=${a}
      size="${d}"
      ?use-static-width="${s}"
      ?use-zebra-styles="${t}">
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >Use the toolbar menu to add rows and
        headers</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-batch-actions ?active="true">
          <cds-button>Delete ${M({slot:"icon"})}</cds-button>
          <cds-button>Save ${i({slot:"icon"})}</cds-button>
          <cds-button href="javascript:void 0" download="table-data.json">
            Download ${$({slot:"icon"})}
          </cds-button>
        </cds-table-batch-actions>
        <cds-table-toolbar-content ?has-batch-actions="true">
          <cds-table-toolbar-search
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            ${x({slot:"icon",class:`${k}--overflow-menu__icon`})}
            <cds-overflow-menu-body flipped>
              <cds-overflow-menu-item @click=${S}
                >Add row</cds-overflow-menu-item
              >
              <cds-overflow-menu-item @click=${D}
                >Add header</cds-overflow-menu-item
              >
            </cds-overflow-menu-body>
          </cds-overflow-menu>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row selection-name="header">
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row selection-name="0">
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="1">
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="2">
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="3">
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="4">
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="5">
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
      </cds-table-body>
    </cds-table>
  `},xe={title:"Components/DataTable/Dynamic",parameters:{docs:{page:R}}};var h,u,m;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <cds-table>
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >Use the toolbar menu to add rows and
        headers</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-batch-actions ?active="true">
          <cds-button tooltip-position="bottom" tooltip-text="Add"
            >\${Add({
    slot: 'icon'
  })}</cds-button
          >
          <cds-button tooltip-position="bottom" tooltip-text="Save"
            >\${Save({
    slot: 'icon'
  })}</cds-button
          >
          <cds-button>\${Save({
    slot: 'icon'
  })}</cds-button>
          <cds-button href="javascript:void 0" download="table-data.json">
            Download \${Download16({
    slot: 'icon'
  })}
          </cds-button>
        </cds-table-batch-actions>
        <cds-table-toolbar-content ?has-batch-actions="true">
          <cds-table-toolbar-search
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            \${Settings16({
    slot: 'icon',
    class: \`\${prefix}--overflow-menu__icon\`
  })}
            <cds-overflow-menu-body flipped>
              <cds-overflow-menu-item @click=\${addRow}
                >Add row</cds-overflow-menu-item
              >
              <cds-overflow-menu-item @click=\${addHeader}
                >Add header</cds-overflow-menu-item
              >
            </cds-overflow-menu-body>
          </cds-overflow-menu>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row selection-name="header">
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row selection-name="0">
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row selection-name="1">
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="2">
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="3">
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row selection-name="4">
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="5">
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  \`
}`,...(m=(u=b.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var w,v,f;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    isSortable,
    locale,
    radio,
    size,
    useStaticWidth,
    useZebraStyles
  }) => html\`
    <cds-table
      expandable
      ?is-sortable=\${isSortable}
      locale="\${locale}"
      ?radio=\${radio}
      size="\${size}"
      ?use-static-width="\${useStaticWidth}"
      ?use-zebra-styles="\${useZebraStyles}">
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >Use the toolbar menu to add rows and
        headers</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-batch-actions ?active="true">
          <cds-button>Delete \${TrashCan({
    slot: 'icon'
  })}</cds-button>
          <cds-button>Save \${Save({
    slot: 'icon'
  })}</cds-button>
          <cds-button href="javascript:void 0" download="table-data.json">
            Download \${Download16({
    slot: 'icon'
  })}
          </cds-button>
        </cds-table-batch-actions>
        <cds-table-toolbar-content ?has-batch-actions="true">
          <cds-table-toolbar-search
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            \${Settings16({
    slot: 'icon',
    class: \`\${prefix}--overflow-menu__icon\`
  })}
            <cds-overflow-menu-body flipped>
              <cds-overflow-menu-item @click=\${addRow}
                >Add row</cds-overflow-menu-item
              >
              <cds-overflow-menu-item @click=\${addHeader}
                >Add header</cds-overflow-menu-item
              >
            </cds-overflow-menu-body>
          </cds-overflow-menu>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row selection-name="header">
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row selection-name="0">
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="1">
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="2">
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="3">
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="4">
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
        <cds-table-row selection-name="5">
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-expanded-row>
          <h6>Expandable row content</h6>
          <div>Description here</div>
        </cds-table-expanded-row>
      </cds-table-body>
    </cds-table>
  \`
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const Se=["Default","Playground"];export{b as Default,r as Playground,Se as __namedExportsOrder,xe as default};
