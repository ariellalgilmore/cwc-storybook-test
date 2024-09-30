import{b as be,x as n}from"./lit-element-266f0592.js";import{s as pe}from"./16-4249ddd2.js";import{s as ge,a as he}from"./16-c244fb0e.js";import{s as xe}from"./spread-61d77317.js";import"./slug-action-button-0a957c91.js";import"./icon-button-e8231e03.js";import"./checkbox-4cbf61d5.js";import"./checkbox-skeleton-f3c1a5c2.js";import"./combo-box-item-62122f9c.js";import"./date-picker-input-skeleton-3ba49b61.js";import"./dropdown-item-7b096599.js";import"./dropdown-skeleton-47db96c2.js";import"./multi-select-item-afab8586.js";import"./number-input-skeleton-f5616efb.js";import"./radio-button-skeleton-3df2ffb6.js";import"./select-skeleton-2dec3fba.js";import"./tag-0e6d166e.js";import"./text-input-f5b277bd.js";import"./text-input-skeleton-2fc7e4c6.js";import"./textarea-skeleton-5d52d4ee.js";import"./tile-group-d432cb10.js";import{s as o}from"./slug-story-87db5f07.js";const T=({children:l,...s}={})=>be`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${xe(s)}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${l}<path d="M7.2,2.3c-1,4.4,1.7,8.7,6.1,9.8c0.1,0,0.1,0,0.2,0c-1.1,1.2-2.7,1.8-4.3,1.8c-0.1,0-0.2,0-0.2,0C5.6,13.8,3,11,3.2,7.7	C3.2,5.3,4.8,3.1,7.2,2.3 M8,1L8,1C4.1,1.6,1.5,5.3,2.1,9.1c0.6,3.3,3.4,5.8,6.8,5.9c0.1,0,0.2,0,0.3,0c2.3,0,4.4-1.1,5.8-3	c0.2-0.2,0.1-0.6-0.1-0.7c-0.1-0.1-0.2-0.1-0.3-0.1c-3.9-0.3-6.7-3.8-6.4-7.6C8.3,3,8.4,2.4,8.6,1.8c0.1-0.3,0-0.6-0.3-0.7	C8.1,1,8.1,1,8,1z"></path></svg>`;/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const ve=[{value:"option-0",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{value:"option-1",text:"Option 1"},{value:"option-2",text:"Option 2"},{value:"option-3",text:"Option 3 - a disabled item",disabled:!0},{value:"option-4",text:"Option 4"},{value:"option-5",text:"Option 5"}],e=n`
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
`,t=n`
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${pe({slot:"icon"})}
    <span slot="tooltip-content"> View </span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${ge({slot:"icon"})}
    <span slot="tooltip-content"> Open folder</span>
  </cds-icon-button>
  <cds-icon-button kind="ghost" slot="actions" size="lg">
    ${he({slot:"icon"})}
    <span slot="tooltip-content"> Folders </span>
  </cds-icon-button>
  <cds-slug-action-button>View details</cds-slug-action-button>
`,r={args:{disabled:!1,invalid:!1,invalidText:"Error message goes here",warn:!1,warnText:"Warning message that is really long can wrap to more lines but should not be excessively long."},argTypes:{disabled:{control:"boolean"},invalid:{control:"boolean"},invalidText:{control:"text"},warn:{control:"boolean"},warnText:{control:"text"}},render:l=>{const{disabled:s,invalid:a,invalidText:i,warn:d,warnText:c}=l??{};return n`
      <style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-checkbox-group
          legend-text="Group label"
          ?disabled="${s}"
          ?invalid="${a}"
          invalid-text="${i}"
          ?warn="${d}"
          warn-text="${c}">
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
          <cds-checkbox>Checkbox label</cds-checkbox>
          <cds-checkbox>Checkbox label</cds-checkbox>
          <cds-checkbox>Checkbox label</cds-checkbox>
        </cds-checkbox-group>

        <cds-checkbox-group
          legend-text="Group label"
          ?disabled="${s}"
          ?invalid="${a}"
          invalid-text="${i}"
          ?warn="${d}"
          warn-text="${c}">
          <cds-checkbox>
            Checkbox label
            <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
          </cds-checkbox>
          <cds-checkbox>
            Checkbox label
            <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
          </cds-checkbox>
          <cds-checkbox>Checkbox label</cds-checkbox>
        </cds-checkbox-group>

        <cds-checkbox-group
          legend-text="Group label"
          ?disabled="${s}"
          ?invalid="${a}"
          invalid-text="${i}"
          ?warn="${d}"
          warn-text="${c}">
          <cds-checkbox>
            Checkbox label
            <cds-slug alignment="bottom-left" kind="inline">
              ${e}${t}
            </cds-slug>
          </cds-checkbox>
          <cds-checkbox>
            Checkbox label
            <cds-slug alignment="bottom-left" kind="inline">
              ${e}${t}
            </cds-slug>
          </cds-checkbox>
          <cds-checkbox>Checkbox label</cds-checkbox>
        </cds-checkbox-group>
      </div>
    `}},u={render:()=>n` <style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-combo-box
          helper-text="This is some helper text"
          title-text="Combo box title"
          label="Filter...">
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>

          <cds-combo-box-item value="all">Option 1</cds-combo-box-item>
          <cds-combo-box-item value="cloudFoundry">Option 2</cds-combo-box-item>
          <cds-combo-box-item value="staging">Option 3</cds-combo-box-item>
          <cds-combo-box-item value="dea">Option 4</cds-combo-box-item>
          <cds-combo-box-item value="router">Option 5</cds-combo-box-item>
          <cds-combo-box-item value="support">Option 6</cds-combo-box-item>
          <cds-combo-box-item value="services">Option 7</cds-combo-box-item>
          <cds-combo-box-item value="products">Option 8</cds-combo-box-item>
        </cds-combo-box>
      </div>`},m={render:()=>n` <style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-date-picker>
          <cds-date-picker-input
            kind="single"
            label-text="Date Picker label"
            placeholder="mm/dd/yyyy">
            <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
          </cds-date-picker-input>
        </cds-date-picker>
      </div>`},b={render:()=>n` <style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-dropdown
          helper-text="This is some helper text"
          title-text="Dropdown label"
          label="Dropdown menu options">
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
          ${ve.map(l=>n`
              <cds-dropdown-item
                ?disabled=${l.disabled}
                value="${l.value}"
                >${l.text}</cds-dropdown-item
              >
            `)}
        </cds-dropdown>
      </div>`},p={args:{hasScrollingContent:!0,showButtons:!0},argTypes:{hasScrollingContent:{control:"boolean",description:"Specify whether modal has scrolling content"},showButtons:{control:"boolean",description:"Specify whether to show or hide modal buttons"}},render:l=>{const{hasScrollingContent:s,showButtons:a}=l??{};return n`
    <style>
      ${o}
    </style>
    <cds-modal open prevent-close ?has-scrolling-content="${s}">
      <cds-modal-header>
        <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Account resources</cds-modal-label>
        <cds-modal-heading>Add a custom domain</cds-modal-heading>
      </cds-modal-header>
      <cds-modal-body>
        <cds-modal-body-content description>
        <p style="margin-bottom: 1rem">
        Custom domains direct requests for your apps in this Cloud Foundry
        organization to a URL that you own. A custom domain can be a shared
        domain, a shared subdomain, or a shared domain and host.
      </p>
      <p style="margin-bottom: 1rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        eu nibh odio. Nunc a consequat est, id porttitor sapien. Proin vitae
        leo vitae orci tincidunt auctor eget eget libero. Ut tincidunt
        ultricies fringilla. Aliquam erat volutpat. Aenean arcu odio,
        elementum vel vehicula vitae, porttitor ac lorem. Sed viverra elit
        ac risus tincidunt fermentum. Ut sollicitudin nibh id risus ornare
        ornare. Etiam gravida orci ut lectus dictum, quis ultricies felis
        mollis. Mauris nec commodo est, nec faucibus nibh. Nunc commodo ante
        quis pretium consectetur. Ut ac nisl vitae mi mattis vulputate a at
        elit. Nullam porttitor ex eget mi feugiat mattis. Nunc non sodales
        magna. Proin ornare tellus quis hendrerit egestas. Donec pharetra
        leo nec molestie sollicitudin.
      </p>
        </cds-modal-body-content>
        <cds-form-item>
          <cds-text-input placeholder="e.g. github.com" label="Domain name">
          </cds-text-input>
        </cds-form-item>

        <cds-form-item>
          <cds-select placeholder="US South" label-text="Region">
            <cds-select-item value="us-south">US South</cds-select-item>
            <cds-select-item value="us-east">US East</cds-select-item>
          </cds-select>
        </cds-form-item>
        <cds-form-item>
        <cds-textarea label="Comments" >
        </cds-form-item>
      </cds-textarea>
      </cds-modal-body>
      ${a?n`
              <cds-modal-footer>
                <cds-modal-footer-button kind="secondary"
                  >Cancel</cds-modal-footer-button
                >
                <cds-modal-footer-button>Add</cds-modal-footer-button>
              </cds-modal-footer>
            `:""}

    </cds-modal>
  `}},g={render:()=>n` <style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-multi-select
          title-text="Multiselect title"
          label="Multiselect label"
          helper-text="This is helper text">
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
          <cds-multi-select-item value="example">
            An example option that is really long to show what should be done to
            handle long text</cds-multi-select-item
          >
          <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
          <cds-multi-select-item value="cloudFoundry"
            >Option 2</cds-multi-select-item
          >
          <cds-multi-select-item disabled value="staging"
            >Option 3 - a disabled item</cds-multi-select-item
          >
          <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
          <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
        </cds-multi-select>
      </div>`},h={render:()=>n` <style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-multi-select
          filterable="true"
          title-text="FilterableMultiselect title"
          helper-text="This is helper text">
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
          <cds-multi-select-item value="example"
            >An example option that is really long to show what should be done
            to handle long text</cds-multi-select-item
          >
          <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
          <cds-multi-select-item value="cloudFoundry"
            >Option 2</cds-multi-select-item
          >
          <cds-multi-select-item disabled value="staging"
            >Option 3 - a disabled item</cds-multi-select-item
          >
          <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
          <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
        </cds-multi-select>
      </div>`},x={render:()=>n`<style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-number-input
          value="50"
          min="0"
          max="100"
          step="1"
          label="Number input">
          <cds-slug alignment="bottom-left"> ${e}${t} </cds-slug>
        </cds-number-input>
      </div> `},v={args:{disabled:!1,invalid:!1,invalidText:"Error message goes here",warn:!1,warnText:"Warning message that is really long can wrap to more lines but should not be excessively long."},argTypes:{disabled:{control:"boolean"},invalid:{control:"boolean"},invalidText:{control:"text"},warn:{control:"boolean"},warnText:{control:"text"}},render:l=>{const{disabled:s,invalid:a,invalidText:i,warn:d,warnText:c}=l??{};return n`
      <style>
        ${o}
      </style>
      <cds-radio-button-group
        legend-text="Group label"
        name="radio-group"
        value="radio-1"
        orientation="vertical"
        ?disabled="${s}"
        ?invalid="${a}"
        invalid-text="${i}"
        ?warn="${d}"
        warn-text="${c}">
        <cds-slug alignment="bottom-left"> ${e}${t} </cds-slug>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-1"></cds-radio-button>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-2"></cds-radio-button>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-3"></cds-radio-button>
      </cds-radio-button-group>

      <cds-radio-button-group
        legend-text="Group label"
        name="radio-group-2"
        value="radio-4"
        orientation="vertical"
        ?disabled="${s}"
        ?invalid="${a}"
        invalid-text="${i}"
        ?warn="${d}"
        warn-text="${c}">
        <cds-radio-button label-text="Radio button label" value="radio-4">
          <cds-slug alignment="bottom-left"> ${e}${t} </cds-slug>
        </cds-radio-button>
        <cds-radio-button label-text="Radio button label" value="radio-5">
          <cds-slug alignment="bottom-left"> ${e}${t} </cds-slug>
        </cds-radio-button>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-6"></cds-radio-button>
      </cds-radio-button-group>

      <cds-radio-button-group
        legend-text="Group label"
        name="radio-group-3"
        value="radio-7"
        orientation="vertical"
        ?disabled="${s}"
        ?invalid="${a}"
        invalid-text="${i}"
        ?warn="${d}"
        warn-text="${c}">
        <cds-radio-button label-text="Radio button label" value="radio-7">
          <cds-slug alignment="bottom-left" kind="inline">
            ${e}${t}
          </cds-slug>
        </cds-radio-button>
        <cds-radio-button label-text="Radio button label" value="radio-8">
          <cds-slug alignment="bottom-left" kind="inline">
            ${e}${t}
          </cds-slug>
        </cds-radio-button>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-9"></cds-radio-button>
      </cds-radio-button-group>
    `}},$={render:()=>n`<style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-select
          helper-text="Optional helper text"
          label-text="Select"
          placeholder="Optional placeholder text">
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
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
      </div> `},y={render:()=>n` <style>
        ${o}
      </style>
      <cds-tag type="red"
        >Tag
        <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
      </cds-tag>

      <cds-tag filter type="purple">
        Tag
        <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
      </cds-tag>

      <cds-tag type="blue">
        ${T({slot:"icon"})} Tag
        <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
      </cds-tag>
      <cds-tag filter type="green">
        ${T({slot:"icon"})} Tag
        <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
      </cds-tag>`},f={render:()=>n`<style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-text-input label="Text input label" placeholder="Placeholder text">
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
        </cds-text-input>
      </div> `},w={render:()=>n`<style>
        ${o}
      </style>
      <div style="width: 400px">
        <cds-textarea label="Text input label" placeholder="Placeholder text">
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
        </cds-textarea>
      </div> `},k={args:{hasRoundedCorners:!1},argTypes:{hasRoundedCorners:{control:"boolean"}},render:l=>{const{hasRoundedCorners:s}=l??{};return n`<style>
        ${o}
      </style>
      <div class="slug-tile-container">
        <cds-tile ?has-rounded-corners="${s}">
          <div class="tile-container">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris gravida penatibus.
            </p>
            <div class="ai-data">
              <div class="data-container">
                <p>Data Quality</p>
                <h3>85%</h3>
              </div>
              <div class="data-container">
                <p>Label text</p>
                <h3>16%</h3>
              </div>
            </div>
          </div>
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
        </cds-tile>

        <cds-clickable-tile
          href="https://example.com"
          slug
          ?has-rounded-corners="${s}">
          <div class="tile-container">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris gravida penatibus.
            </p>
            <div class="ai-data">
              <div class="data-container">
                <p>Data Quality</p>
                <h3>85%</h3>
              </div>
              <div class="data-container">
                <p>Label text</p>
                <h3>16%</h3>
              </div>
            </div>
          </div>
        </cds-clickable-tile>

        <cds-selectable-tile ?has-rounded-corners="${s}">
          <div class="tile-container">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris gravida penatibus.
            </p>
            <div class="ai-data">
              <div class="data-container">
                <p>Data Quality</p>
                <h3>85%</h3>
              </div>
              <div class="data-container">
                <p>Label text</p>
                <h3>16%</h3>
              </div>
            </div>
          </div>
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
        </cds-selectable-tile>

        <cds-expandable-tile
          with-interactive
          ?has-rounded-corners="${s}">
          <cds-tile-above-the-fold-content slot="above-the-fold-content">
            <div class="tile-container">
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum
                sit at consectetur turpis mauris gravida penatibus.
              </p>
              <div class="ai-data">
                <div class="data-container">
                  <p>Data Quality</p>
                  <h3>85%</h3>
                </div>
                <div class="data-container">
                  <p>Label text</p>
                  <h3>16%</h3>
                </div>
              </div>
            </div>
          </cds-tile-above-the-fold-content>
          <cds-tile-below-the-fold-content>
            <h6>Expanded Section</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris.
            </p>
          </cds-tile-below-the-fold-content>
          <cds-slug alignment="bottom-left"> ${e}${t}</cds-slug>
        </cds-expandable-tile>
      </div> `}},$e={title:"Experimental/Slug/Examples"};var C,O,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: false,
    invalid: false,
    invalidText: 'Error message goes here',
    warn: false,
    warnText: 'Warning message that is really long can wrap to more lines but should not be excessively long.'
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
    }
  },
  render: args => {
    const {
      disabled,
      invalid,
      invalidText,
      warn,
      warnText
    } = args ?? {};
    return html\`
      <style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-checkbox-group
          legend-text="Group label"
          ?disabled="\${disabled}"
          ?invalid="\${invalid}"
          invalid-text="\${invalidText}"
          ?warn="\${warn}"
          warn-text="\${warnText}">
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
          <cds-checkbox>Checkbox label</cds-checkbox>
          <cds-checkbox>Checkbox label</cds-checkbox>
          <cds-checkbox>Checkbox label</cds-checkbox>
        </cds-checkbox-group>

        <cds-checkbox-group
          legend-text="Group label"
          ?disabled="\${disabled}"
          ?invalid="\${invalid}"
          invalid-text="\${invalidText}"
          ?warn="\${warn}"
          warn-text="\${warnText}">
          <cds-checkbox>
            Checkbox label
            <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
          </cds-checkbox>
          <cds-checkbox>
            Checkbox label
            <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
          </cds-checkbox>
          <cds-checkbox>Checkbox label</cds-checkbox>
        </cds-checkbox-group>

        <cds-checkbox-group
          legend-text="Group label"
          ?disabled="\${disabled}"
          ?invalid="\${invalid}"
          invalid-text="\${invalidText}"
          ?warn="\${warn}"
          warn-text="\${warnText}">
          <cds-checkbox>
            Checkbox label
            <cds-slug alignment="bottom-left" kind="inline">
              \${content}\${actions}
            </cds-slug>
          </cds-checkbox>
          <cds-checkbox>
            Checkbox label
            <cds-slug alignment="bottom-left" kind="inline">
              \${content}\${actions}
            </cds-slug>
          </cds-checkbox>
          <cds-checkbox>Checkbox label</cds-checkbox>
        </cds-checkbox-group>
      </div>
    \`;
  }
}`,...(S=(O=r.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var R,_,L;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return html\` <style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-combo-box
          helper-text="This is some helper text"
          title-text="Combo box title"
          label="Filter...">
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>

          <cds-combo-box-item value="all">Option 1</cds-combo-box-item>
          <cds-combo-box-item value="cloudFoundry">Option 2</cds-combo-box-item>
          <cds-combo-box-item value="staging">Option 3</cds-combo-box-item>
          <cds-combo-box-item value="dea">Option 4</cds-combo-box-item>
          <cds-combo-box-item value="router">Option 5</cds-combo-box-item>
          <cds-combo-box-item value="support">Option 6</cds-combo-box-item>
          <cds-combo-box-item value="services">Option 7</cds-combo-box-item>
          <cds-combo-box-item value="products">Option 8</cds-combo-box-item>
        </cds-combo-box>
      </div>\`;
  }
}`,...(L=(_=u.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var P,A,D;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return html\` <style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-date-picker>
          <cds-date-picker-input
            kind="single"
            label-text="Date Picker label"
            placeholder="mm/dd/yyyy">
            <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
          </cds-date-picker-input>
        </cds-date-picker>
      </div>\`;
  }
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var M,F,E;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return html\` <style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-dropdown
          helper-text="This is some helper text"
          title-text="Dropdown label"
          label="Dropdown menu options">
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
          \${items.map(elem => html\`
              <cds-dropdown-item
                ?disabled=\${elem.disabled}
                value="\${elem.value}"
                >\${elem.text}</cds-dropdown-item
              >
            \`)}
        </cds-dropdown>
      </div>\`;
  }
}`,...(E=(F=b.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var U,q,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    hasScrollingContent: true,
    showButtons: true
  },
  argTypes: {
    hasScrollingContent: {
      control: 'boolean',
      description: 'Specify whether modal has scrolling content'
    },
    showButtons: {
      control: 'boolean',
      description: 'Specify whether to show or hide modal buttons'
    }
  },
  render: args => {
    const {
      hasScrollingContent,
      showButtons
    } = args ?? {};
    return html\`
    <style>
      \${styles}
    </style>
    <cds-modal open prevent-close ?has-scrolling-content="\${hasScrollingContent}">
      <cds-modal-header>
        <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Account resources</cds-modal-label>
        <cds-modal-heading>Add a custom domain</cds-modal-heading>
      </cds-modal-header>
      <cds-modal-body>
        <cds-modal-body-content description>
        <p style="margin-bottom: 1rem">
        Custom domains direct requests for your apps in this Cloud Foundry
        organization to a URL that you own. A custom domain can be a shared
        domain, a shared subdomain, or a shared domain and host.
      </p>
      <p style="margin-bottom: 1rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        eu nibh odio. Nunc a consequat est, id porttitor sapien. Proin vitae
        leo vitae orci tincidunt auctor eget eget libero. Ut tincidunt
        ultricies fringilla. Aliquam erat volutpat. Aenean arcu odio,
        elementum vel vehicula vitae, porttitor ac lorem. Sed viverra elit
        ac risus tincidunt fermentum. Ut sollicitudin nibh id risus ornare
        ornare. Etiam gravida orci ut lectus dictum, quis ultricies felis
        mollis. Mauris nec commodo est, nec faucibus nibh. Nunc commodo ante
        quis pretium consectetur. Ut ac nisl vitae mi mattis vulputate a at
        elit. Nullam porttitor ex eget mi feugiat mattis. Nunc non sodales
        magna. Proin ornare tellus quis hendrerit egestas. Donec pharetra
        leo nec molestie sollicitudin.
      </p>
        </cds-modal-body-content>
        <cds-form-item>
          <cds-text-input placeholder="e.g. github.com" label="Domain name">
          </cds-text-input>
        </cds-form-item>

        <cds-form-item>
          <cds-select placeholder="US South" label-text="Region">
            <cds-select-item value="us-south">US South</cds-select-item>
            <cds-select-item value="us-east">US East</cds-select-item>
          </cds-select>
        </cds-form-item>
        <cds-form-item>
        <cds-textarea label="Comments" >
        </cds-form-item>
      </cds-textarea>
      </cds-modal-body>
      \${showButtons ? html\`
              <cds-modal-footer>
                <cds-modal-footer-button kind="secondary"
                  >Cancel</cds-modal-footer-button
                >
                <cds-modal-footer-button>Add</cds-modal-footer-button>
              </cds-modal-footer>
            \` : \`\`}

    </cds-modal>
  \`;
  }
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var N,B,I;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    return html\` <style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-multi-select
          title-text="Multiselect title"
          label="Multiselect label"
          helper-text="This is helper text">
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
          <cds-multi-select-item value="example">
            An example option that is really long to show what should be done to
            handle long text</cds-multi-select-item
          >
          <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
          <cds-multi-select-item value="cloudFoundry"
            >Option 2</cds-multi-select-item
          >
          <cds-multi-select-item disabled value="staging"
            >Option 3 - a disabled item</cds-multi-select-item
          >
          <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
          <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
        </cds-multi-select>
      </div>\`;
  }
}`,...(I=(B=g.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var Q,z,W;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    return html\` <style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-multi-select
          filterable="true"
          title-text="FilterableMultiselect title"
          helper-text="This is helper text">
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
          <cds-multi-select-item value="example"
            >An example option that is really long to show what should be done
            to handle long text</cds-multi-select-item
          >
          <cds-multi-select-item value="all">Option 1</cds-multi-select-item>
          <cds-multi-select-item value="cloudFoundry"
            >Option 2</cds-multi-select-item
          >
          <cds-multi-select-item disabled value="staging"
            >Option 3 - a disabled item</cds-multi-select-item
          >
          <cds-multi-select-item value="dea">Option 4</cds-multi-select-item>
          <cds-multi-select-item value="router">Option 5</cds-multi-select-item>
        </cds-multi-select>
      </div>\`;
  }
}`,...(W=(z=h.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var j,V,Y;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return html\`<style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-number-input
          value="50"
          min="0"
          max="100"
          step="1"
          label="Number input">
          <cds-slug alignment="bottom-left"> \${content}\${actions} </cds-slug>
        </cds-number-input>
      </div> \`;
  }
}`,...(Y=(V=x.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var H,J,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: false,
    invalid: false,
    invalidText: 'Error message goes here',
    warn: false,
    warnText: 'Warning message that is really long can wrap to more lines but should not be excessively long.'
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
    }
  },
  render: args => {
    const {
      disabled,
      invalid,
      invalidText,
      warn,
      warnText
    } = args ?? {};
    return html\`
      <style>
        \${styles}
      </style>
      <cds-radio-button-group
        legend-text="Group label"
        name="radio-group"
        value="radio-1"
        orientation="vertical"
        ?disabled="\${disabled}"
        ?invalid="\${invalid}"
        invalid-text="\${invalidText}"
        ?warn="\${warn}"
        warn-text="\${warnText}">
        <cds-slug alignment="bottom-left"> \${content}\${actions} </cds-slug>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-1"></cds-radio-button>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-2"></cds-radio-button>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-3"></cds-radio-button>
      </cds-radio-button-group>

      <cds-radio-button-group
        legend-text="Group label"
        name="radio-group-2"
        value="radio-4"
        orientation="vertical"
        ?disabled="\${disabled}"
        ?invalid="\${invalid}"
        invalid-text="\${invalidText}"
        ?warn="\${warn}"
        warn-text="\${warnText}">
        <cds-radio-button label-text="Radio button label" value="radio-4">
          <cds-slug alignment="bottom-left"> \${content}\${actions} </cds-slug>
        </cds-radio-button>
        <cds-radio-button label-text="Radio button label" value="radio-5">
          <cds-slug alignment="bottom-left"> \${content}\${actions} </cds-slug>
        </cds-radio-button>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-6"></cds-radio-button>
      </cds-radio-button-group>

      <cds-radio-button-group
        legend-text="Group label"
        name="radio-group-3"
        value="radio-7"
        orientation="vertical"
        ?disabled="\${disabled}"
        ?invalid="\${invalid}"
        invalid-text="\${invalidText}"
        ?warn="\${warn}"
        warn-text="\${warnText}">
        <cds-radio-button label-text="Radio button label" value="radio-7">
          <cds-slug alignment="bottom-left" kind="inline">
            \${content}\${actions}
          </cds-slug>
        </cds-radio-button>
        <cds-radio-button label-text="Radio button label" value="radio-8">
          <cds-slug alignment="bottom-left" kind="inline">
            \${content}\${actions}
          </cds-slug>
        </cds-radio-button>
        <cds-radio-button
          label-text="Radio button label"
          value="radio-9"></cds-radio-button>
      </cds-radio-button-group>
    \`;
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Z,ee;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    return html\`<style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-select
          helper-text="Optional helper text"
          label-text="Select"
          placeholder="Optional placeholder text">
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
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
      </div> \`;
  }
}`,...(ee=(Z=$.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    return html\` <style>
        \${styles}
      </style>
      <cds-tag type="red"
        >Tag
        <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
      </cds-tag>

      <cds-tag filter type="purple">
        Tag
        <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
      </cds-tag>

      <cds-tag type="blue">
        \${Asleep16({
      slot: 'icon'
    })} Tag
        <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
      </cds-tag>
      <cds-tag filter type="green">
        \${Asleep16({
      slot: 'icon'
    })} Tag
        <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
      </cds-tag>\`;
  }
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,ae;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    return html\`<style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-text-input label="Text input label" placeholder="Placeholder text">
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
        </cds-text-input>
      </div> \`;
  }
}`,...(ae=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ie,de,ce;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    return html\`<style>
        \${styles}
      </style>
      <div style="width: 400px">
        <cds-textarea label="Text input label" placeholder="Placeholder text">
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
        </cds-textarea>
      </div> \`;
  }
}`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var re,ue,me;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    hasRoundedCorners: false
  },
  argTypes: {
    hasRoundedCorners: {
      control: 'boolean'
    }
  },
  render: args => {
    const {
      hasRoundedCorners
    } = args ?? {};
    return html\`<style>
        \${styles}
      </style>
      <div class="slug-tile-container">
        <cds-tile ?has-rounded-corners="\${hasRoundedCorners}">
          <div class="tile-container">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris gravida penatibus.
            </p>
            <div class="ai-data">
              <div class="data-container">
                <p>Data Quality</p>
                <h3>85%</h3>
              </div>
              <div class="data-container">
                <p>Label text</p>
                <h3>16%</h3>
              </div>
            </div>
          </div>
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
        </cds-tile>

        <cds-clickable-tile
          href="https://example.com"
          slug
          ?has-rounded-corners="\${hasRoundedCorners}">
          <div class="tile-container">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris gravida penatibus.
            </p>
            <div class="ai-data">
              <div class="data-container">
                <p>Data Quality</p>
                <h3>85%</h3>
              </div>
              <div class="data-container">
                <p>Label text</p>
                <h3>16%</h3>
              </div>
            </div>
          </div>
        </cds-clickable-tile>

        <cds-selectable-tile ?has-rounded-corners="\${hasRoundedCorners}">
          <div class="tile-container">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris gravida penatibus.
            </p>
            <div class="ai-data">
              <div class="data-container">
                <p>Data Quality</p>
                <h3>85%</h3>
              </div>
              <div class="data-container">
                <p>Label text</p>
                <h3>16%</h3>
              </div>
            </div>
          </div>
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
        </cds-selectable-tile>

        <cds-expandable-tile
          with-interactive
          ?has-rounded-corners="\${hasRoundedCorners}">
          <cds-tile-above-the-fold-content slot="above-the-fold-content">
            <div class="tile-container">
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum
                sit at consectetur turpis mauris gravida penatibus.
              </p>
              <div class="ai-data">
                <div class="data-container">
                  <p>Data Quality</p>
                  <h3>85%</h3>
                </div>
                <div class="data-container">
                  <p>Label text</p>
                  <h3>16%</h3>
                </div>
              </div>
            </div>
          </cds-tile-above-the-fold-content>
          <cds-tile-below-the-fold-content>
            <h6>Expanded Section</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris.
            </p>
          </cds-tile-below-the-fold-content>
          <cds-slug alignment="bottom-left"> \${content}\${actions}</cds-slug>
        </cds-expandable-tile>
      </div> \`;
  }
}`,...(me=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const ye=["_Checkbox","_Combobox","_DatePicker","_Dropdown","_Modal","_Multiselect","_FilterableMultiselect","_NumberItem","_RadioButton","_Select","_Tag","_TextInput","_TextArea","_Tile"],Qe=Object.freeze(Object.defineProperty({__proto__:null,_Checkbox:r,_Combobox:u,_DatePicker:m,_Dropdown:b,_FilterableMultiselect:h,_Modal:p,_Multiselect:g,_NumberItem:x,_RadioButton:v,_Select:$,_Tag:y,_TextArea:w,_TextInput:f,_Tile:k,__namedExportsOrder:ye,default:$e},Symbol.toStringTag,{value:"Module"}));export{Qe as S};
