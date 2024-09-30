import{x as c}from"./lit-element-266f0592.js";import{s as w}from"./16-4249ddd2.js";import{s as h,a as f}from"./16-c244fb0e.js";import"./slug-action-button-0a957c91.js";import"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import"./combo-box-item-62122f9c.js";import"./date-picker-input-skeleton-3ba49b61.js";import"./dropdown-item-7b096599.js";import"./dropdown-skeleton-47db96c2.js";import"./form-item-325d0083.js";import"./form-group-a7da5ade.js";import"./icon-button-e8231e03.js";import"./multi-select-item-afab8586.js";import"./number-input-skeleton-f5616efb.js";import"./select-skeleton-2dec3fba.js";import"./stack-4f2eefe9.js";import"./textarea-skeleton-5d52d4ee.js";import"./text-input-f5b277bd.js";import"./text-input-skeleton-2fc7e4c6.js";import"./spread-61d77317.js";import"./directive-12249aa5.js";import"./class-map-4a7e6437.js";import"./property-da2637ab.js";import"./carbon-element-59fbbccb.js";import"./toggletip-4f5ff9ac.js";import"./16-5513bc0c.js";import"./host-listener-0f7877ac.js";import"./on-5bd5e89a.js";import"./focus-73f58502.js";import"./defs-4d9ca86b.js";import"./popover-controller-26cce6f0.js";import"./if-defined-21892bb5.js";import"./query-b9d3c2af.js";import"./16-9baaa345.js";import"./collection-helpers-3389bc25.js";import"./if-non-empty-f918a1a3.js";import"./16-d3a54398.js";import"./16-441d7cbb.js";import"./16-dfb8f0c2.js";import"./_commonjsHelpers-725317a4.js";import"./state-7d5425f0.js";import"./16-81e6b9cc.js";import"./shared-enums-5977151c.js";import"./16-a57556b1.js";import"./validity-01821d7e.js";import"./tooltip-content-1105f219.js";import"./popover-content-d3dfbbea.js";import"./16-22dc4144.js";import"./index-d401daa0.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const O=[{value:"option-0",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{value:"option-1",text:"Option 1"},{value:"option-2",text:"Option 2"},{value:"option-3",text:"Option 3 - a disabled item",disabled:!0},{value:"option-4",text:"Option 4"},{value:"option-5",text:"Option 5"}],s=c`
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
`,d=c`
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${w({slot:"icon"})}
    <span slot="tooltip-content"> View </span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${h({slot:"icon"})}
    <span slot="tooltip-content"> Open folder</span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${f({slot:"icon"})}
    <span slot="tooltip-content"> Folders </span>
  </cds-icon-button>
  <cds-slug-action-button>View details</cds-slug-action-button>
`,r={args:{disabled:!1,invalid:!1,invalidText:"Error message goes here",warn:!1,warnText:"Warning message that is really long can wrap to more lines but should not be excessively long.",revert:!1},argTypes:{disabled:{control:"boolean"},invalid:{control:"boolean"},invalidText:{control:"text"},warn:{control:"boolean"},warnText:{control:"text"},revert:{control:"boolean"}},render:a=>{const{disabled:l,invalid:n,invalidText:e,warn:t,warnText:i,revert:o}=a??{};return c`
      <div style="width: 400px">
        <cds-form-group>
          <cds-stack gap="7">
            <cds-form-item>
              <cds-number-input
                value="50"
                min="0"
                max="100"
                step="1"
                label="Number input"
                ?disabled="${l}"
                ?invalid="${n}"
                invalid-text="${e}"
                ?warn="${t}"
                warn-text="${i}">
                <cds-slug alignment="bottom-left" ?revert-active="${o}">
                  ${s}${d}
                </cds-slug>
              </cds-number-input>
            </cds-form-item>

            <cds-form-item>
              <cds-date-picker>
                <cds-date-picker-input
                  kind="single"
                  label-text="Date Picker label"
                  placeholder="mm/dd/yyyy"
                  ?disabled="${l}"
                  ?invalid="${n}"
                  invalid-text="${e}"
                  ?warn="${t}"
                  warn-text="${i}">
                  <cds-slug alignment="bottom-left" ?revert-active="${o}">
                    ${s}${d}</cds-slug
                  >
                </cds-date-picker-input>
              </cds-date-picker>
            </cds-form-item>

            <cds-form-item>
              <cds-text-input
                label="Text input label"
                placeholder="Placeholder text"
                ?disabled="${l}"
                ?invalid="${n}"
                invalid-text="${e}"
                ?warn="${t}"
                warn-text="${i}">
                <cds-slug alignment="bottom-left" ?revert-active="${o}">
                  ${s}${d}</cds-slug
                >
              </cds-text-input>
            </cds-form-item>

            <cds-form-item>
              <cds-textarea
                label="Text input label"
                placeholder="Placeholder text"
                ?disabled="${l}"
                ?invalid="${n}"
                invalid-text="${e}"
                ?warn="${t}"
                warn-text="${i}">
                <cds-slug alignment="bottom-left" ?revert-active="${o}">
                  ${s}${d}</cds-slug
                >
              </cds-textarea>
            </cds-form-item>

            <cds-form-item>
              <cds-dropdown
                helper-text="This is some helper text"
                title-text="Dropdown label"
                label="Dropdown menu options"
                ?disabled="${l}"
                ?invalid="${n}"
                invalid-text="${e}"
                ?warn="${t}"
                warn-text="${i}">
                <cds-slug alignment="bottom-left" ?revert-active="${o}">
                  ${s}${d}</cds-slug
                >
                ${O.map(u=>c`
                    <cds-dropdown-item
                      ?disabled=${u.disabled}
                      value="${u.value}"
                      >${u.text}</cds-dropdown-item
                    >
                  `)}
              </cds-dropdown>
            </cds-form-item>

            <cds-multi-select
              title-text="Multiselect title"
              label="Multiselect label"
              helper-text="This is helper text"
              ?disabled="${l}"
              ?invalid="${n}"
              invalid-text="${e}"
              ?warn="${t}"
              warn-text="${i}">
              <cds-slug alignment="bottom-left" ?revert-active="${o}">
                ${s}${d}</cds-slug
              >
              <cds-multi-select-item value="example">
                An example option that is really long to show what should be
                done to handle long text</cds-multi-select-item
              >
              <cds-multi-select-item value="all"
                >Option 1</cds-multi-select-item
              >
              <cds-multi-select-item value="cloudFoundry"
                >Option 2</cds-multi-select-item
              >
              <cds-multi-select-item disabled value="staging"
                >Option 3 - a disabled item</cds-multi-select-item
              >
              <cds-multi-select-item value="dea"
                >Option 4</cds-multi-select-item
              >
              <cds-multi-select-item value="router"
                >Option 5</cds-multi-select-item
              >
            </cds-multi-select>

            <cds-multi-select
              filterable="true"
              title-text="FilterableMultiselect title"
              helper-text="This is helper text"
              ?disabled="${l}"
              ?invalid="${n}"
              invalid-text="${e}"
              ?warn="${t}"
              warn-text="${i}">
              <cds-slug alignment="bottom-left" ?revert-active="${o}">
                ${s}${d}</cds-slug
              >
              <cds-multi-select-item value="example"
                >An example option that is really long to show what should be
                done to handle long text</cds-multi-select-item
              >
              <cds-multi-select-item value="all"
                >Option 1</cds-multi-select-item
              >
              <cds-multi-select-item value="cloudFoundry"
                >Option 2</cds-multi-select-item
              >
              <cds-multi-select-item disabled value="staging"
                >Option 3 - a disabled item</cds-multi-select-item
              >
              <cds-multi-select-item value="dea"
                >Option 4</cds-multi-select-item
              >
              <cds-multi-select-item value="router"
                >Option 5</cds-multi-select-item
              >
            </cds-multi-select>

            <cds-combo-box
              helper-text="This is some helper text"
              title-text="Combo box title"
              label="Filter..."
              ?disabled="${l}"
              ?invalid="${n}"
              invalid-text="${e}"
              ?warn="${t}"
              warn-text="${i}">
              <cds-slug alignment="bottom-left" ?revert-active="${o}">
                ${s}${d}</cds-slug
              >

              <cds-combo-box-item value="all">Option 1</cds-combo-box-item>
              <cds-combo-box-item value="cloudFoundry"
                >Option 2</cds-combo-box-item
              >
              <cds-combo-box-item value="staging">Option 3</cds-combo-box-item>
              <cds-combo-box-item value="dea">Option 4</cds-combo-box-item>
              <cds-combo-box-item value="router">Option 5</cds-combo-box-item>
              <cds-combo-box-item value="support">Option 6</cds-combo-box-item>
              <cds-combo-box-item value="services">Option 7</cds-combo-box-item>
              <cds-combo-box-item value="products">Option 8</cds-combo-box-item>
            </cds-combo-box>

            <cds-select
              helper-text="Optional helper text"
              label-text="Select"
              placeholder="Optional placeholder text"
              ?disabled="${l}"
              ?invalid="${n}"
              invalid-text="${e}"
              ?warn="${t}"
              warn-text="${i}">
              <cds-slug alignment="bottom-left" ?revert-active="${o}">
                ${s}${d}</cds-slug
              >
              <cds-select-item-group label="Category 1">
                <cds-select-item value="all">Option 1</cds-select-item>
                <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
              </cds-select-item-group>
              <cds-select-item-group label="Category 2">
                <cds-select-item value="staging">Option 3</cds-select-item>
                <cds-select-item value="dea">Option 4</cds-select-item>
                <cds-select-item value="router">Option 5</cds-select-item>
              </cds-select-item-group>
            </cds-select>

            <cds-button>Submit</cds-button>
          </cds-stack>
        </cds-form-group>
      </div>
    `}},m={render:()=>{const a=n=>{var e,t;(t=(e=n.target)==null?void 0:e.querySelector("cds-slug"))==null||t.setAttribute("revert-active","")},l=n=>e=>{var t,i;(t=e.target.parentElement)!=null&&t.querySelector("cds-slug")&&((i=e.target.parentElement)==null||i.setAttribute("value",n))};return c`
      <div style="width: 400px">
        <cds-form-group>
          <cds-stack gap="7">
            <cds-form-item>
              <cds-text-input
                label="Sample AI Input"
                value="Generated AI content"
                @input="${a}">
                <cds-slug
                  alignment="bottom-left"
                  @click="${l("Generated AI content")}"
                  >${s}</cds-slug
                >
              </cds-text-input>
            </cds-form-item>

            <cds-form-item>
              <cds-number-input
                value="11"
                min="0"
                max="100"
                step="1"
                label="Sample AI Input"
                @cds-number-input="${a}">
                <cds-slug alignment="bottom-left" @click="${l("11")}"
                  >${s}</cds-slug
                >
              </cds-number-input>
            </cds-form-item>
          </cds-stack>
        </cds-form-group>
      </div>
    `}},he={title:"Experimental/Slug/Form"};var p,b,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: false,
    invalid: false,
    invalidText: 'Error message goes here',
    warn: false,
    warnText: 'Warning message that is really long can wrap to more lines but should not be excessively long.',
    revert: false
  },
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    },
    invalidText: {
      control: 'text'
    },
    warn: {
      control: 'boolean'
    },
    warnText: {
      control: 'text'
    },
    revert: {
      control: 'boolean'
    }
  },
  render: args => {
    const {
      disabled,
      invalid,
      invalidText,
      warn,
      warnText,
      revert
    } = args ?? {};
    return html\`
      <div style="width: 400px">
        <cds-form-group>
          <cds-stack gap="7">
            <cds-form-item>
              <cds-number-input
                value="50"
                min="0"
                max="100"
                step="1"
                label="Number input"
                ?disabled="\${disabled}"
                ?invalid="\${invalid}"
                invalid-text="\${invalidText}"
                ?warn="\${warn}"
                warn-text="\${warnText}">
                <cds-slug alignment="bottom-left" ?revert-active="\${revert}">
                  \${content}\${actions}
                </cds-slug>
              </cds-number-input>
            </cds-form-item>

            <cds-form-item>
              <cds-date-picker>
                <cds-date-picker-input
                  kind="single"
                  label-text="Date Picker label"
                  placeholder="mm/dd/yyyy"
                  ?disabled="\${disabled}"
                  ?invalid="\${invalid}"
                  invalid-text="\${invalidText}"
                  ?warn="\${warn}"
                  warn-text="\${warnText}">
                  <cds-slug alignment="bottom-left" ?revert-active="\${revert}">
                    \${content}\${actions}</cds-slug
                  >
                </cds-date-picker-input>
              </cds-date-picker>
            </cds-form-item>

            <cds-form-item>
              <cds-text-input
                label="Text input label"
                placeholder="Placeholder text"
                ?disabled="\${disabled}"
                ?invalid="\${invalid}"
                invalid-text="\${invalidText}"
                ?warn="\${warn}"
                warn-text="\${warnText}">
                <cds-slug alignment="bottom-left" ?revert-active="\${revert}">
                  \${content}\${actions}</cds-slug
                >
              </cds-text-input>
            </cds-form-item>

            <cds-form-item>
              <cds-textarea
                label="Text input label"
                placeholder="Placeholder text"
                ?disabled="\${disabled}"
                ?invalid="\${invalid}"
                invalid-text="\${invalidText}"
                ?warn="\${warn}"
                warn-text="\${warnText}">
                <cds-slug alignment="bottom-left" ?revert-active="\${revert}">
                  \${content}\${actions}</cds-slug
                >
              </cds-textarea>
            </cds-form-item>

            <cds-form-item>
              <cds-dropdown
                helper-text="This is some helper text"
                title-text="Dropdown label"
                label="Dropdown menu options"
                ?disabled="\${disabled}"
                ?invalid="\${invalid}"
                invalid-text="\${invalidText}"
                ?warn="\${warn}"
                warn-text="\${warnText}">
                <cds-slug alignment="bottom-left" ?revert-active="\${revert}">
                  \${content}\${actions}</cds-slug
                >
                \${items.map(elem => html\`
                    <cds-dropdown-item
                      ?disabled=\${elem.disabled}
                      value="\${elem.value}"
                      >\${elem.text}</cds-dropdown-item
                    >
                  \`)}
              </cds-dropdown>
            </cds-form-item>

            <cds-multi-select
              title-text="Multiselect title"
              label="Multiselect label"
              helper-text="This is helper text"
              ?disabled="\${disabled}"
              ?invalid="\${invalid}"
              invalid-text="\${invalidText}"
              ?warn="\${warn}"
              warn-text="\${warnText}">
              <cds-slug alignment="bottom-left" ?revert-active="\${revert}">
                \${content}\${actions}</cds-slug
              >
              <cds-multi-select-item value="example">
                An example option that is really long to show what should be
                done to handle long text</cds-multi-select-item
              >
              <cds-multi-select-item value="all"
                >Option 1</cds-multi-select-item
              >
              <cds-multi-select-item value="cloudFoundry"
                >Option 2</cds-multi-select-item
              >
              <cds-multi-select-item disabled value="staging"
                >Option 3 - a disabled item</cds-multi-select-item
              >
              <cds-multi-select-item value="dea"
                >Option 4</cds-multi-select-item
              >
              <cds-multi-select-item value="router"
                >Option 5</cds-multi-select-item
              >
            </cds-multi-select>

            <cds-multi-select
              filterable="true"
              title-text="FilterableMultiselect title"
              helper-text="This is helper text"
              ?disabled="\${disabled}"
              ?invalid="\${invalid}"
              invalid-text="\${invalidText}"
              ?warn="\${warn}"
              warn-text="\${warnText}">
              <cds-slug alignment="bottom-left" ?revert-active="\${revert}">
                \${content}\${actions}</cds-slug
              >
              <cds-multi-select-item value="example"
                >An example option that is really long to show what should be
                done to handle long text</cds-multi-select-item
              >
              <cds-multi-select-item value="all"
                >Option 1</cds-multi-select-item
              >
              <cds-multi-select-item value="cloudFoundry"
                >Option 2</cds-multi-select-item
              >
              <cds-multi-select-item disabled value="staging"
                >Option 3 - a disabled item</cds-multi-select-item
              >
              <cds-multi-select-item value="dea"
                >Option 4</cds-multi-select-item
              >
              <cds-multi-select-item value="router"
                >Option 5</cds-multi-select-item
              >
            </cds-multi-select>

            <cds-combo-box
              helper-text="This is some helper text"
              title-text="Combo box title"
              label="Filter..."
              ?disabled="\${disabled}"
              ?invalid="\${invalid}"
              invalid-text="\${invalidText}"
              ?warn="\${warn}"
              warn-text="\${warnText}">
              <cds-slug alignment="bottom-left" ?revert-active="\${revert}">
                \${content}\${actions}</cds-slug
              >

              <cds-combo-box-item value="all">Option 1</cds-combo-box-item>
              <cds-combo-box-item value="cloudFoundry"
                >Option 2</cds-combo-box-item
              >
              <cds-combo-box-item value="staging">Option 3</cds-combo-box-item>
              <cds-combo-box-item value="dea">Option 4</cds-combo-box-item>
              <cds-combo-box-item value="router">Option 5</cds-combo-box-item>
              <cds-combo-box-item value="support">Option 6</cds-combo-box-item>
              <cds-combo-box-item value="services">Option 7</cds-combo-box-item>
              <cds-combo-box-item value="products">Option 8</cds-combo-box-item>
            </cds-combo-box>

            <cds-select
              helper-text="Optional helper text"
              label-text="Select"
              placeholder="Optional placeholder text"
              ?disabled="\${disabled}"
              ?invalid="\${invalid}"
              invalid-text="\${invalidText}"
              ?warn="\${warn}"
              warn-text="\${warnText}">
              <cds-slug alignment="bottom-left" ?revert-active="\${revert}">
                \${content}\${actions}</cds-slug
              >
              <cds-select-item-group label="Category 1">
                <cds-select-item value="all">Option 1</cds-select-item>
                <cds-select-item value="cloudFoundry">Option 2</cds-select-item>
              </cds-select-item-group>
              <cds-select-item-group label="Category 2">
                <cds-select-item value="staging">Option 3</cds-select-item>
                <cds-select-item value="dea">Option 4</cds-select-item>
                <cds-select-item value="router">Option 5</cds-select-item>
              </cds-select-item-group>
            </cds-select>

            <cds-button>Submit</cds-button>
          </cds-stack>
        </cds-form-group>
      </div>
    \`;
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,$,g;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const handleInput = event => {
      event.target?.querySelector('cds-slug')?.setAttribute('revert-active', '');
    };
    const handleRevert = value => {
      return event => {
        (event.target as HTMLElement).parentElement?.querySelector('cds-slug') ? (event.target as HTMLElement).parentElement?.setAttribute('value', value) : '';
      };
    };
    return html\`
      <div style="width: 400px">
        <cds-form-group>
          <cds-stack gap="7">
            <cds-form-item>
              <cds-text-input
                label="Sample AI Input"
                value="Generated AI content"
                @input="\${handleInput}">
                <cds-slug
                  alignment="bottom-left"
                  @click="\${handleRevert('Generated AI content')}"
                  >\${content}</cds-slug
                >
              </cds-text-input>
            </cds-form-item>

            <cds-form-item>
              <cds-number-input
                value="11"
                min="0"
                max="100"
                step="1"
                label="Sample AI Input"
                @cds-number-input="\${handleInput}">
                <cds-slug alignment="bottom-left" @click="\${handleRevert('11')}"
                  >\${content}</cds-slug
                >
              </cds-number-input>
            </cds-form-item>
          </cds-stack>
        </cds-form-group>
      </div>
    \`;
  }
}`,...(g=($=m.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};const fe=["_AIForm","_RevertTest"];export{r as _AIForm,m as _RevertTest,fe as __namedExportsOrder,he as default};
