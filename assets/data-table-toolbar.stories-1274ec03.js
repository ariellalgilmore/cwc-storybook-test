import{x as c}from"./lit-element-266f0592.js";import{p as t}from"./carbon-element-59fbbccb.js";import{T as l}from"./table-toolbar-search-2366535b.js";import{s as d}from"./16-c489d79b.js";import{s as e}from"./16-46438ed3.js";import B from"./data-table-fc1d5a9f.js";import"./property-da2637ab.js";import"./state-7d5425f0.js";import"./collection-helpers-3389bc25.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./class-map-4a7e6437.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./spread-61d77317.js";import"./focus-73f58502.js";import"./16-dfb8f0c2.js";import"./checkbox-4cbf61d5.js";import"./if-defined-21892bb5.js";import"./16-d3a54398.js";import"./16-81e6b9cc.js";import"./checkbox-skeleton-f3c1a5c2.js";import"./radio-button-skeleton-3df2ffb6.js";import"./radio-group-manager-b52ff8da.js";import"./text-input-f5b277bd.js";import"./16-4249ddd2.js";import"./if-non-empty-f918a1a3.js";import"./validity-01821d7e.js";import"./search-c228858a.js";import"./16-9baaa345.js";import"./jsx-runtime-ca9ab4eb.js";import"./index-10c5cb00.js";import"./iframe-be34abd3.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-e87182e5.js";import"./storybook-cdn-4cc58f60.js";import"./package-7aeb10bd.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const G={[`xs (${l.XS})`]:l.XS,[`sm (${l.SM})`]:l.SM,[`md (${l.MD})`]:l.MD,[`lg (${l.LG} - default)`]:l.LG,[`xl (${l.XL})`]:l.XL},D={isSortable:!1,locale:"en",overflowMenuOnHover:!1,radio:!1,size:l.LG,useStaticWidth:!1,useZebraStyles:!1},O={isSortable:{control:"boolean",description:"Is sortable"},locale:{control:"text",description:"Locale"},overflowMenuOnHover:{control:"boolean",description:"Overflow menu on hover"},radio:{control:"boolean",description:"Radio"},size:{control:"select",description:"Size",options:G},useStaticWidth:{control:"boolean",description:"Use static width"},useZebraStyles:{control:"boolean",description:"Use zebra styles"}},s={render:()=>c`
      <cds-table>
        <cds-table-header-title slot="title">DataTable</cds-table-header-title>
        <cds-table-header-description slot="description"
          >With toolbar</cds-table-header-description
        >

        <cds-table-toolbar slot="toolbar">
          <cds-table-toolbar-content>
            <cds-table-toolbar-search
              placeholder="Filter table"></cds-table-toolbar-search>
            <cds-overflow-menu toolbar-action>
              ${d({slot:"icon",class:`${t}--overflow-menu__icon`})}
              <cds-overflow-menu-body>
                <cds-overflow-menu-item @click=${()=>alert("Alert 1")}>
                  Action 1
                </cds-overflow-menu-item>
                <cds-overflow-menu-item @click=${()=>alert("Alert 2")}>
                  Action 2
                </cds-overflow-menu-item>
                <cds-overflow-menu-item @click=${()=>alert("Alert 3")}>
                  Action 3
                </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
            <cds-button>Primary button</cds-button>
          </cds-table-toolbar-content>
        </cds-table-toolbar>

        <cds-table-head>
          <cds-table-header-row>
            <cds-table-header-cell>Name</cds-table-header-cell>
            <cds-table-header-cell>Protocol</cds-table-header-cell>
            <cds-table-header-cell>Port</cds-table-header-cell>
            <cds-table-header-cell>Rule</cds-table-header-cell>
            <cds-table-header-cell>Attached groups</cds-table-header-cell>
            <cds-table-header-cell>Status</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
          <cds-table-row>
            <cds-table-cell>Load Balancer 3</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Kevin's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 1</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Maureen's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 2</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Andrew's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 6</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Marc's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 4</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Mel's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 5</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Ronja's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
        </cds-table-body>
      </cds-table>
    `},a={render:()=>c`
    <cds-table>
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >With toolbar</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content>
          <cds-table-toolbar-search
            persistent
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            ${d({slot:"icon",class:`${t}--overflow-menu__icon`})}
            <cds-overflow-menu-body>
              <cds-overflow-menu-item @click=${()=>alert("Alert 1")}>
                Action 1
              </cds-overflow-menu-item>
              <cds-overflow-menu-item @click=${()=>alert("Alert 2")}>
                Action 2
              </cds-overflow-menu-item>
              <cds-overflow-menu-item @click=${()=>alert("Alert 3")}>
                Action 3
              </cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
          <cds-button>Primary button</cds-button>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  `},o={render:()=>c`
    <cds-table size="sm">
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >With toolbar</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content>
          <cds-table-toolbar-search
            persistent
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            ${d({slot:"icon",class:`${t}--overflow-menu__icon`})}
            <cds-overflow-menu-body>
              <cds-overflow-menu-item> Action 1 </cds-overflow-menu-item>
              <cds-overflow-menu-item> Action 2 </cds-overflow-menu-item>
              <cds-overflow-menu-item> Action 3 </cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
          <cds-button>Primary Button</cds-button>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  `},b={render:()=>c`
    <cds-table overflow-menu-on-hover>
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >With toolbar</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content>
          <cds-table-toolbar-search
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            ${d({slot:"icon",class:`${t}--overflow-menu__icon`})}
            <cds-overflow-menu-body>
              <cds-overflow-menu-item @click=${()=>alert("Alert 1")}>
                Action 1
              </cds-overflow-menu-item>
              <cds-overflow-menu-item @click=${()=>alert("Alert 2")}>
                Action 2
              </cds-overflow-menu-item>
              <cds-overflow-menu-item @click=${()=>alert("Alert 3")}>
                Action 3
              </cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
          <cds-button>Primary button</cds-button>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
          <cds-table-header-cell></cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  `},r={args:D,argTypes:O,render:({isSortable:P,locale:A,radio:$,overflowMenuOnHover:g,size:V,useStaticWidth:L,useZebraStyles:H})=>c`
    <cds-table
      ?is-sortable=${P}
      locale="${A}"
      ?overflow-menu-on-hover=${g}
      ?radio=${$}
      size="${V}"
      ?use-static-width="${L}"
      ?use-zebra-styles="${H}">
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >With batch actions.</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content ?has-batch-actions="true">
          <cds-table-toolbar-search
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            ${d({slot:"icon",class:`${t}--overflow-menu__icon`})}
            <cds-overflow-menu-body>
              <cds-overflow-menu-item> Action 1 </cds-overflow-menu-item>
              <cds-overflow-menu-item> Action 2 </cds-overflow-menu-item>
              <cds-overflow-menu-item> Action 3 </cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
          <cds-button>Primary button</cds-button>
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
          <cds-table-header-cell></cds-table-header-cell>
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
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="1">
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="2">
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
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
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="4">
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="5">
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              ${e({slot:"icon"})}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  `},ye={title:"Components/DataTable/Toolbar",parameters:{docs:{page:B}}};var n,i,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <cds-table>
        <cds-table-header-title slot="title">DataTable</cds-table-header-title>
        <cds-table-header-description slot="description"
          >With toolbar</cds-table-header-description
        >

        <cds-table-toolbar slot="toolbar">
          <cds-table-toolbar-content>
            <cds-table-toolbar-search
              placeholder="Filter table"></cds-table-toolbar-search>
            <cds-overflow-menu toolbar-action>
              \${Settings16({
      slot: 'icon',
      class: \`\${prefix}--overflow-menu__icon\`
    })}
              <cds-overflow-menu-body>
                <cds-overflow-menu-item @click=\${() => alert('Alert 1')}>
                  Action 1
                </cds-overflow-menu-item>
                <cds-overflow-menu-item @click=\${() => alert('Alert 2')}>
                  Action 2
                </cds-overflow-menu-item>
                <cds-overflow-menu-item @click=\${() => alert('Alert 3')}>
                  Action 3
                </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
            <cds-button>Primary button</cds-button>
          </cds-table-toolbar-content>
        </cds-table-toolbar>

        <cds-table-head>
          <cds-table-header-row>
            <cds-table-header-cell>Name</cds-table-header-cell>
            <cds-table-header-cell>Protocol</cds-table-header-cell>
            <cds-table-header-cell>Port</cds-table-header-cell>
            <cds-table-header-cell>Rule</cds-table-header-cell>
            <cds-table-header-cell>Attached groups</cds-table-header-cell>
            <cds-table-header-cell>Status</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
          <cds-table-row>
            <cds-table-cell>Load Balancer 3</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Kevin's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 1</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Maureen's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 2</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Andrew's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 6</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>3000</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Marc's VM Groups</cds-table-cell>
            <cds-table-cell
              ><cds-link disabled>Disabled</cds-link></cds-table-cell
            >
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 4</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>443</cds-table-cell>
            <cds-table-cell>Round robin</cds-table-cell>
            <cds-table-cell>Mel's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          </cds-table-row>
          <cds-table-row>
            <cds-table-cell>Load Balancer 5</cds-table-cell>
            <cds-table-cell>HTTP</cds-table-cell>
            <cds-table-cell>80</cds-table-cell>
            <cds-table-cell>DNS delegation</cds-table-cell>
            <cds-table-cell>Ronja's VM Groups</cds-table-cell>
            <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          </cds-table-row>
        </cds-table-body>
      </cds-table>
    \`;
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,w,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <cds-table>
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >With toolbar</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content>
          <cds-table-toolbar-search
            persistent
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            \${Settings16({
    slot: 'icon',
    class: \`\${prefix}--overflow-menu__icon\`
  })}
            <cds-overflow-menu-body>
              <cds-overflow-menu-item @click=\${() => alert('Alert 1')}>
                Action 1
              </cds-overflow-menu-item>
              <cds-overflow-menu-item @click=\${() => alert('Alert 2')}>
                Action 2
              </cds-overflow-menu-item>
              <cds-overflow-menu-item @click=\${() => alert('Alert 3')}>
                Action 3
              </cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
          <cds-button>Primary button</cds-button>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
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
}`,...(p=(w=a.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};var f,v,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <cds-table size="sm">
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >With toolbar</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content>
          <cds-table-toolbar-search
            persistent
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            \${Settings16({
    slot: 'icon',
    class: \`\${prefix}--overflow-menu__icon\`
  })}
            <cds-overflow-menu-body>
              <cds-overflow-menu-item> Action 1 </cds-overflow-menu-item>
              <cds-overflow-menu-item> Action 2 </cds-overflow-menu-item>
              <cds-overflow-menu-item> Action 3 </cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
          <cds-button>Primary Button</cds-button>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
        </cds-table-row>
        <cds-table-row>
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
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var T,k,M;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <cds-table overflow-menu-on-hover>
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >With toolbar</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content>
          <cds-table-toolbar-search
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            \${Settings16({
    slot: 'icon',
    class: \`\${prefix}--overflow-menu__icon\`
  })}
            <cds-overflow-menu-body>
              <cds-overflow-menu-item @click=\${() => alert('Alert 1')}>
                Action 1
              </cds-overflow-menu-item>
              <cds-overflow-menu-item @click=\${() => alert('Alert 2')}>
                Action 2
              </cds-overflow-menu-item>
              <cds-overflow-menu-item @click=\${() => alert('Alert 3')}>
                Action 3
              </cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
          <cds-button>Primary button</cds-button>
        </cds-table-toolbar-content>
      </cds-table-toolbar>

      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Name</cds-table-header-cell>
          <cds-table-header-cell>Protocol</cds-table-header-cell>
          <cds-table-header-cell>Port</cds-table-header-cell>
          <cds-table-header-cell>Rule</cds-table-header-cell>
          <cds-table-header-cell>Attached groups</cds-table-header-cell>
          <cds-table-header-cell>Status</cds-table-header-cell>
          <cds-table-header-cell></cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>Load Balancer 3</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Kevin's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 6</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>3000</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Marc's VM Groups</cds-table-cell>
          <cds-table-cell
            ><cds-link disabled>Disabled</cds-link></cds-table-cell
          >
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  \`
}`,...(M=(k=b.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var R,y,S;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    isSortable,
    locale,
    radio,
    overflowMenuOnHover,
    size,
    useStaticWidth,
    useZebraStyles
  }) => html\`
    <cds-table
      ?is-sortable=\${isSortable}
      locale="\${locale}"
      ?overflow-menu-on-hover=\${overflowMenuOnHover}
      ?radio=\${radio}
      size="\${size}"
      ?use-static-width="\${useStaticWidth}"
      ?use-zebra-styles="\${useZebraStyles}">
      <cds-table-header-title slot="title">DataTable</cds-table-header-title>
      <cds-table-header-description slot="description"
        >With batch actions.</cds-table-header-description
      >

      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content ?has-batch-actions="true">
          <cds-table-toolbar-search
            placeholder="Filter table"></cds-table-toolbar-search>
          <cds-overflow-menu toolbar-action>
            \${Settings16({
    slot: 'icon',
    class: \`\${prefix}--overflow-menu__icon\`
  })}
            <cds-overflow-menu-body>
              <cds-overflow-menu-item> Action 1 </cds-overflow-menu-item>
              <cds-overflow-menu-item> Action 2 </cds-overflow-menu-item>
              <cds-overflow-menu-item> Action 3 </cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
          <cds-button>Primary button</cds-button>
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
          <cds-table-header-cell></cds-table-header-cell>
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
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="1">
          <cds-table-cell>Load Balancer 1</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Maureen's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="2">
          <cds-table-cell>Load Balancer 2</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Andrew's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
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
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="4">
          <cds-table-cell>Load Balancer 4</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>443</cds-table-cell>
          <cds-table-cell>Round robin</cds-table-cell>
          <cds-table-cell>Mel's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Starting</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
        <cds-table-row selection-name="5">
          <cds-table-cell>Load Balancer 5</cds-table-cell>
          <cds-table-cell>HTTP</cds-table-cell>
          <cds-table-cell>80</cds-table-cell>
          <cds-table-cell>DNS delegation</cds-table-cell>
          <cds-table-cell>Ronja's VM Groups</cds-table-cell>
          <cds-table-cell><cds-link>Active</cds-link></cds-table-cell>
          <cds-table-cell>
            <cds-overflow-menu toolbar-action>
              \${OverflowMenuVertical16({
    slot: 'icon'
  })}
              <span slot="tooltip-content"> Options </span>

              <cds-overflow-menu-body flipped>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>
  \`
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const Se=["Default","PersistentToolbar","SmallPersistentToolbar","WithOverflowMenu","Playground"];export{s as Default,a as PersistentToolbar,r as Playground,o as SmallPersistentToolbar,b as WithOverflowMenu,Se as __namedExportsOrder,ye as default};
