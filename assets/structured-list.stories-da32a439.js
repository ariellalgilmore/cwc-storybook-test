import{x as e}from"./lit-element-266f0592.js";import{o as t}from"./if-defined-21892bb5.js";import"./structured-list-row-af858098.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const N={condensed:!1,flush:!1,hasSelection:!1},C={condensed:{control:"boolean",description:"Condensed (condensed)"},flush:{control:"boolean",description:"Flush (flush)"},hasSelection:{control:"boolean",description:"Supports selection feature (has-selection)"}},c={argTypes:{hasSelection:{control:"boolean",description:"Supports selection feature (has-selection)"}},args:{hasSelection:!1},render:({hasSelection:r})=>{const l=r?"structured-list-selection":void 0,s=r?["structured-list-selection-0","structured-list-selection-1","structured-list-selection-2"]:[];return e`
      <cds-structured-list selection-name=${t(l)}>
        <cds-structured-list-head>
          <cds-structured-list-header-row>
            <cds-structured-list-header-cell>
              ColumnA
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnB
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnC
            </cds-structured-list-header-cell>
        </cds-structured-list-head>
        <cds-structured-list-body>
          <cds-structured-list-row
            selection-value=${t(s[0])}>
            <cds-structured-list-cell>Row 1</cds-structured-list-cell>
            <cds-structured-list-cell>Row 1</cds-structured-list-cell>
            <cds-structured-list-cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.</cds-structured-list-cell>
          </cds-structured-list-row>
          <cds-structured-list-row
            selection-value=${t(s[1])}>
            <cds-structured-list-cell>Row 2</cds-structured-list-cell>
            <cds-structured-list-cell>Row 2</cds-structured-list-cell>
            <cds-structured-list-cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.</cds-structured-list-cell>
          </cds-structured-list-row>
        </cds-structured-list-body>
      </cds-structured-list>
    `}},u={render:()=>{const r="structured-list-selection",l=["structured-list-selection-0","structured-list-selection-1","structured-list-selection-2","structured-list-selection-3"];return e`
      <cds-structured-list selection-name=${t(r)}>
        <cds-structured-list-head>
          <cds-structured-list-header-row>
            <cds-structured-list-header-cell>
              ColumnA
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnB
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnC
            </cds-structured-list-header-cell>
          </cds-structured-list-header-row>
        </cds-structured-list-head>
        <cds-structured-list-body>
          ${l.map((s,n)=>e` <cds-structured-list-row
              selection-value=${t(s)}>
              <cds-structured-list-cell>Row ${n}</cds-structured-list-cell>
              <cds-structured-list-cell>Row ${n}</cds-structured-list-cell>
              <cds-structured-list-cell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor
                interdum.</cds-structured-list-cell
              >
            </cds-structured-list-row>`)}
        </cds-structured-list-body>
      </cds-structured-list>
    `}},d={args:N,argTypes:C,render:({condensed:r,flush:l,hasSelection:s})=>{const n=s?"structured-list-selection":void 0,o=s?["structured-list-selection-0","structured-list-selection-1","structured-list-selection-2"]:[];return e`
      <cds-structured-list
      selection-name=${t(n)}
      ?condensed=${r}
      ?flush=${l}>
        <cds-structured-list-head>
          <cds-structured-list-header-row>
            <cds-structured-list-header-cell>
              ColumnA
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnB
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnC
            </cds-structured-list-header-cell>
        </cds-structured-list-head>
        <cds-structured-list-body>
          <cds-structured-list-row
            selection-value=${t(o[0])}>
            <cds-structured-list-cell>Row 1</cds-structured-list-cell>
            <cds-structured-list-cell>Row 1</cds-structured-list-cell>
            <cds-structured-list-cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.</cds-structured-list-cell>
          </cds-structured-list-row>
          <cds-structured-list-row
            selection-value=${t(o[1])}>
            <cds-structured-list-cell>Row 2</cds-structured-list-cell>
            <cds-structured-list-cell>Row 2</cds-structured-list-cell>
            <cds-structured-list-cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.</cds-structured-list-cell>
          </cds-structured-list-row>
        </cds-structured-list-body>
      </cds-structured-list>
    `}},i={parameters:{percy:{skip:!0}},render:()=>e`
    <div style="width:800px">
      ${Array.apply(null,Array(2)).map(()=>e`
          <cds-structured-list>
            <cds-structured-list-head>
              <cds-structured-list-header-row>
                ${Array.apply(null,Array(3)).map(()=>e`
                    <cds-structured-list-header-cell-skeleton>
                    </cds-structured-list-header-cell-skeleton>
                  `)}
              </cds-structured-list-header-row>
            </cds-structured-list-head>
            <cds-structured-list-body>
              ${Array.apply(null,Array(5)).map(()=>e`<cds-structured-list-row>
                  <cds-structured-list-cell></cds-structured-list-cell>
                  <cds-structured-list-cell></cds-structured-list-cell>
                  <cds-structured-list-cell></cds-structured-list-cell>
                </cds-structured-list-row>`)}
            </cds-structured-list-body>
          </cds-structured-list>
        `)}
    </div>
  `},S={title:"Components/Structured list"};var a,m,p;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    hasSelection: {
      control: 'boolean',
      description: 'Supports selection feature (has-selection)'
    }
  },
  args: {
    hasSelection: false
  },
  render: ({
    hasSelection
  }) => {
    const selectionName = !hasSelection ? undefined : 'structured-list-selection';
    const selectionValues = !hasSelection ? [] : ['structured-list-selection-0', 'structured-list-selection-1', 'structured-list-selection-2'];
    return html\`
      <cds-structured-list selection-name=\${ifDefined(selectionName)}>
        <cds-structured-list-head>
          <cds-structured-list-header-row>
            <cds-structured-list-header-cell>
              ColumnA
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnB
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnC
            </cds-structured-list-header-cell>
        </cds-structured-list-head>
        <cds-structured-list-body>
          <cds-structured-list-row
            selection-value=\${ifDefined(selectionValues[0])}>
            <cds-structured-list-cell>Row 1</cds-structured-list-cell>
            <cds-structured-list-cell>Row 1</cds-structured-list-cell>
            <cds-structured-list-cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.</cds-structured-list-cell>
          </cds-structured-list-row>
          <cds-structured-list-row
            selection-value=\${ifDefined(selectionValues[1])}>
            <cds-structured-list-cell>Row 2</cds-structured-list-cell>
            <cds-structured-list-cell>Row 2</cds-structured-list-cell>
            <cds-structured-list-cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.</cds-structured-list-cell>
          </cds-structured-list-row>
        </cds-structured-list-body>
      </cds-structured-list>
    \`;
  }
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,w;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const selectionName = 'structured-list-selection';
    const selectionValues = ['structured-list-selection-0', 'structured-list-selection-1', 'structured-list-selection-2', 'structured-list-selection-3'];
    return html\`
      <cds-structured-list selection-name=\${ifDefined(selectionName)}>
        <cds-structured-list-head>
          <cds-structured-list-header-row>
            <cds-structured-list-header-cell>
              ColumnA
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnB
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnC
            </cds-structured-list-header-cell>
          </cds-structured-list-header-row>
        </cds-structured-list-head>
        <cds-structured-list-body>
          \${selectionValues.map((selectionValue, index) => html\` <cds-structured-list-row
              selection-value=\${ifDefined(selectionValue)}>
              <cds-structured-list-cell>Row \${index}</cds-structured-list-cell>
              <cds-structured-list-cell>Row \${index}</cds-structured-list-cell>
              <cds-structured-list-cell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor
                interdum.</cds-structured-list-cell
              >
            </cds-structured-list-row>\`)}
        </cds-structured-list-body>
      </cds-structured-list>
    \`;
  }
}`,...(w=(g=u.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var b,f,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    condensed,
    flush,
    hasSelection
  }) => {
    const selectionName = !hasSelection ? undefined : 'structured-list-selection';
    const selectionValues = !hasSelection ? [] : ['structured-list-selection-0', 'structured-list-selection-1', 'structured-list-selection-2'];
    return html\`
      <cds-structured-list
      selection-name=\${ifDefined(selectionName)}
      ?condensed=\${condensed}
      ?flush=\${flush}>
        <cds-structured-list-head>
          <cds-structured-list-header-row>
            <cds-structured-list-header-cell>
              ColumnA
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnB
            </cds-structured-list-header-cell>
            <cds-structured-list-header-cell>
              ColumnC
            </cds-structured-list-header-cell>
        </cds-structured-list-head>
        <cds-structured-list-body>
          <cds-structured-list-row
            selection-value=\${ifDefined(selectionValues[0])}>
            <cds-structured-list-cell>Row 1</cds-structured-list-cell>
            <cds-structured-list-cell>Row 1</cds-structured-list-cell>
            <cds-structured-list-cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.</cds-structured-list-cell>
          </cds-structured-list-row>
          <cds-structured-list-row
            selection-value=\${ifDefined(selectionValues[1])}>
            <cds-structured-list-cell>Row 2</cds-structured-list-cell>
            <cds-structured-list-cell>Row 2</cds-structured-list-cell>
            <cds-structured-list-cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.</cds-structured-list-cell>
          </cds-structured-list-row>
        </cds-structured-list-body>
      </cds-structured-list>
    \`;
  }
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,$,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    percy: {
      skip: true
    }
  },
  render: () => html\`
    <div style="width:800px">
      \${Array.apply(null, Array(2)).map(() => html\`
          <cds-structured-list>
            <cds-structured-list-head>
              <cds-structured-list-header-row>
                \${Array.apply(null, Array(3)).map(() => html\`
                    <cds-structured-list-header-cell-skeleton>
                    </cds-structured-list-header-cell-skeleton>
                  \`)}
              </cds-structured-list-header-row>
            </cds-structured-list-head>
            <cds-structured-list-body>
              \${Array.apply(null, Array(5)).map(() => html\`<cds-structured-list-row>
                  <cds-structured-list-cell></cds-structured-list-cell>
                  <cds-structured-list-cell></cds-structured-list-cell>
                  <cds-structured-list-cell></cds-structured-list-cell>
                </cds-structured-list-row>\`)}
            </cds-structured-list-body>
          </cds-structured-list>
        \`)}
    </div>
  \`
}`,...(A=($=i.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const q=["Default","Selection","Playground","skeleton"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Playground:d,Selection:u,__namedExportsOrder:q,default:S,skeleton:i},Symbol.toStringTag,{value:"Module"}));export{L as S};
