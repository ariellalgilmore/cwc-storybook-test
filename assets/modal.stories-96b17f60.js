import{x as e}from"./lit-element-266f0592.js";import"./structured-list-row-af858098.js";import{M as t}from"./modal-c7d1de3b.js";import"./modal-label-5028dcdd.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const Q=()=>{var a;(a=document.querySelector("cds-modal"))==null||a.toggleAttribute("open")},F={[`Extra small size (${t.EXTRA_SMALL})`]:t.EXTRA_SMALL,[`Small size (${t.SMALL})`]:t.SMALL,[`Medium size (${t.MEDIUM})`]:t.MEDIUM,[`Large size (${t.LARGE})`]:t.LARGE},W={"One (1)":1,"Two (2)":2,"Three (3)":3},T={alert:!1,ariaLabel:"",closeButtonLabel:"Close",danger:!1,fullWidth:!1,hasScrollingContent:!1,modalHeading:"Add a custom domain",modalLabel:"",numberOfButtons:2,open:!0,passiveModal:!1,preventCloseOnClickOutside:!1,primaryButtonDisabled:!1,size:null},_={alert:{control:"boolean",description:"Specify whether the Modal is displaying an alert, error or warning Should go hand in hand with the danger prop."},ariaLabel:{control:"text",description:"Required props for the accessibility label of the header."},closeButtonLabel:{control:"text",description:"Required props for the accessibility label of the header."},danger:{control:"boolean",description:"Specify whether the Modal is for dangerous actions."},fullWidth:{control:"boolean",description:"Specify whether or not the Modal content should have any inner padding."},hasScrollingContent:{control:"boolean",description:"Specify whether the modal contains scrolling content."},modalHeading:{control:"text",description:"Specify the content of the modal header title."},modalLabel:{control:"text",description:"Specify the content of the modal header label."},numberOfButtons:{control:"radio",description:"Count of Footer Buttons",options:W},open:{control:"boolean",description:"Specify whether the modal is currently open."},passiveModal:{control:"boolean",description:"Specify whether the Modal should be passive, or not."},preventCloseOnClickOutside:{control:"boolean",description:"Prevent close on click outside."},primaryButtonDisabled:{control:"boolean",description:"Primary button disabled."},size:{control:"select",description:"Modal size.",options:F}},o={render:()=>e`
    <cds-modal open prevent-close>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Account resources</cds-modal-label>
        <cds-modal-heading>Add a custom domain</cds-modal-heading>
      </cds-modal-header>
      <cds-modal-body>
        <cds-modal-body-content description>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
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

        <cds-dropdown label="Dropdown" title-text="Dropdown">
          <cds-dropdown-item value="one">One</cds-dropdown-item>
          <cds-dropdown-item value="two">Two</cds-dropdown-item>
        </cds-dropdown>

        <cds-multi-select label="Multiselect" title-text="Multiselect">
          <cds-multi-select-item value="option-1"
            >Option 1</cds-multi-select-item
          >
          <cds-multi-select-item value="option-2"
            >Option 2</cds-multi-select-item
          >
        </cds-multi-select>
      </cds-modal-body>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary"
          >Cancel</cds-modal-footer-button
        >
        <cds-modal-footer-button>Add</cds-modal-footer-button>
      </cds-modal-footer>
    </cds-modal>
  `},s={render:()=>e`
    <cds-modal open prevent-close>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Account resources</cds-modal-label>
        <cds-modal-heading
          >Are you sure you want to delete this custom
          domain?</cds-modal-heading
        >
      </cds-modal-header>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary"
          >Cancel</cds-modal-footer-button
        >
        <cds-modal-footer-button kind="danger">Delete</cds-modal-footer-button>
      </cds-modal-footer>
    </cds-modal>
  `},d={render:()=>e`
    <cds-modal open full-width prevent-close>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>An example of a modal with no padding</cds-modal-label>
        <cds-modal-heading>Full Width Modal</cds-modal-heading>
      </cds-modal-header>
      <cds-modal-body>
        <cds-structured-list>
          <cds-structured-list-head>
            <cds-structured-list-header-row>
              <cds-structured-list-header-cell
                >Column A</cds-structured-list-header-cell
              >
              <cds-structured-list-header-cell
                >Column B</cds-structured-list-header-cell
              >
              <cds-structured-list-header-cell
                >Column C</cds-structured-list-header-cell
              >
            </cds-structured-list-header-row>
          </cds-structured-list-head>
          <cds-structured-list-body>
            <cds-structured-list-row>
              <cds-structured-list-cell>Row 1</cds-structured-list-cell>
              <cds-structured-list-cell>Row 1</cds-structured-list-cell>
              <cds-structured-list-cell
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </cds-structured-list-cell>
            </cds-structured-list-row>
            <cds-structured-list-row>
              <cds-structured-list-cell>Row 2</cds-structured-list-cell>
              <cds-structured-list-cell>Row 2</cds-structured-list-cell>
              <cds-structured-list-cell
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </cds-structured-list-cell>
            </cds-structured-list-row>
            <cds-structured-list-row>
              <cds-structured-list-cell>Row 3</cds-structured-list-cell>
              <cds-structured-list-cell>Row 3</cds-structured-list-cell>
              <cds-structured-list-cell
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </cds-structured-list-cell>
            </cds-structured-list-row>
          </cds-structured-list-body>
        </cds-structured-list>
      </cds-modal-body>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary"
          >Cancel</cds-modal-footer-button
        >
        <cds-modal-footer-button>Add</cds-modal-footer-button>
      </cds-modal-footer>
    </cds-modal>
  `},n={render:()=>e`
    <cds-modal open prevent-close>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-heading
          >You have been successfully signed out</cds-modal-heading
        >
      </cds-modal-header>
      <cds-modal-body></cds-modal-body>
    </cds-modal>
  `},l={render:()=>e`
    <cds-modal>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Account resources</cds-modal-label>
        <cds-modal-heading>Add a custom domain</cds-modal-heading>
      </cds-modal-header>
      <cds-modal-body>
        <cds-modal-body-content description>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </cds-modal-body-content>
        <cds-form-item>
          <cds-text-input placeholder="e.g. github.com" label="Domain name">
          </cds-text-input>
        </cds-form-item>
        <cds-select label-text="Domain name" placeholder="US South">
          <cds-select-item value="us-south">Option 1</cds-select-item>
          <cds-select-item value="us-east">Option 2</cds-select-item>
        </cds-select>
      </cds-modal-body>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary" data-modal-close
          >Cancel</cds-modal-footer-button
        >
        <cds-modal-footer-button>Add</cds-modal-footer-button>
      </cds-modal-footer>
    </cds-modal>
    <cds-button @click="${Q}">Launch modal</cds-button>
  `},c={args:T,argTypes:_,render:({alert:a,ariaLabel:O,danger:R,open:P,closeButtonLabel:N,hasScrollingContent:i,fullWidth:k,modalHeading:D,modalLabel:E,numberOfButtons:u,passiveModal:z,preventCloseOnClickOutside:U,primaryButtonDisabled:B,size:j})=>e`
      <cds-modal
        aria-label=${O}
        ?prevent-close-on-click-outside=${U}
        ?alert=${a}
        size="${j}"
        ?open=${P}
        ?full-width=${k}
        prevent-close
        ?has-scrolling-content="${i}">
        <cds-modal-header>
          <cds-modal-close-button
            close-button-label=${N}></cds-modal-close-button>
          <cds-modal-label>${E}</cds-modal-label>
          <cds-modal-heading>${D}</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description>
            Custom domains direct requests for your apps in this Cloud Foundry
            organization to a URL that you own. A custom domain can be a shared
            domain, a shared subdomain, or a shared domain and host.
          </cds-modal-body-content>
          <cds-form-item>
            <cds-text-input placeholder="e.g. github.com" label="Domain name">
            </cds-text-input>
          </cds-form-item>
          <cds-select label-text="Region" placeholder="US South">
            <cds-select-item value="us-south">Option 1</cds-select-item>
            <cds-select-item value="us-east">Option 2</cds-select-item>
          </cds-select>

          ${i?e` <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <h3>Lorem ipsum</h3>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>`:""}
        </cds-modal-body>

        ${z?"":e` <cds-modal-footer>
              ${u>2?e` <cds-modal-footer-button kind="secondary"
                    >Keep both</cds-modal-footer-button
                  >`:""}
              ${u>=2?e` <cds-modal-footer-button kind="secondary"
                    >${u===2?e`Cancel`:"Rename"}</cds-modal-footer-button
                  >`:""}

              <cds-modal-footer-button
                ?disabled=${B}
                kind="${R?"danger":"primary"}"
                >Add</cds-modal-footer-button
              >
            </cds-modal-footer>`}
      </cds-modal>
    `},H={title:"Components/Modal"};var r,m,b;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <cds-modal open prevent-close>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Account resources</cds-modal-label>
        <cds-modal-heading>Add a custom domain</cds-modal-heading>
      </cds-modal-header>
      <cds-modal-body>
        <cds-modal-body-content description>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
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

        <cds-dropdown label="Dropdown" title-text="Dropdown">
          <cds-dropdown-item value="one">One</cds-dropdown-item>
          <cds-dropdown-item value="two">Two</cds-dropdown-item>
        </cds-dropdown>

        <cds-multi-select label="Multiselect" title-text="Multiselect">
          <cds-multi-select-item value="option-1"
            >Option 1</cds-multi-select-item
          >
          <cds-multi-select-item value="option-2"
            >Option 2</cds-multi-select-item
          >
        </cds-multi-select>
      </cds-modal-body>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary"
          >Cancel</cds-modal-footer-button
        >
        <cds-modal-footer-button>Add</cds-modal-footer-button>
      </cds-modal-footer>
    </cds-modal>
  \`
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,h,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <cds-modal open prevent-close>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Account resources</cds-modal-label>
        <cds-modal-heading
          >Are you sure you want to delete this custom
          domain?</cds-modal-heading
        >
      </cds-modal-header>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary"
          >Cancel</cds-modal-footer-button
        >
        <cds-modal-footer-button kind="danger">Delete</cds-modal-footer-button>
      </cds-modal-footer>
    </cds-modal>
  \`
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <cds-modal open full-width prevent-close>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>An example of a modal with no padding</cds-modal-label>
        <cds-modal-heading>Full Width Modal</cds-modal-heading>
      </cds-modal-header>
      <cds-modal-body>
        <cds-structured-list>
          <cds-structured-list-head>
            <cds-structured-list-header-row>
              <cds-structured-list-header-cell
                >Column A</cds-structured-list-header-cell
              >
              <cds-structured-list-header-cell
                >Column B</cds-structured-list-header-cell
              >
              <cds-structured-list-header-cell
                >Column C</cds-structured-list-header-cell
              >
            </cds-structured-list-header-row>
          </cds-structured-list-head>
          <cds-structured-list-body>
            <cds-structured-list-row>
              <cds-structured-list-cell>Row 1</cds-structured-list-cell>
              <cds-structured-list-cell>Row 1</cds-structured-list-cell>
              <cds-structured-list-cell
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </cds-structured-list-cell>
            </cds-structured-list-row>
            <cds-structured-list-row>
              <cds-structured-list-cell>Row 2</cds-structured-list-cell>
              <cds-structured-list-cell>Row 2</cds-structured-list-cell>
              <cds-structured-list-cell
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </cds-structured-list-cell>
            </cds-structured-list-row>
            <cds-structured-list-row>
              <cds-structured-list-cell>Row 3</cds-structured-list-cell>
              <cds-structured-list-cell>Row 3</cds-structured-list-cell>
              <cds-structured-list-cell
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </cds-structured-list-cell>
            </cds-structured-list-row>
          </cds-structured-list-body>
        </cds-structured-list>
      </cds-modal-body>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary"
          >Cancel</cds-modal-footer-button
        >
        <cds-modal-footer-button>Add</cds-modal-footer-button>
      </cds-modal-footer>
    </cds-modal>
  \`
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,A,C;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <cds-modal open prevent-close>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-heading
          >You have been successfully signed out</cds-modal-heading
        >
      </cds-modal-header>
      <cds-modal-body></cds-modal-body>
    </cds-modal>
  \`
}`,...(C=(A=n.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var L,q,S;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <cds-modal>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Account resources</cds-modal-label>
        <cds-modal-heading>Add a custom domain</cds-modal-heading>
      </cds-modal-header>
      <cds-modal-body>
        <cds-modal-body-content description>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </cds-modal-body-content>
        <cds-form-item>
          <cds-text-input placeholder="e.g. github.com" label="Domain name">
          </cds-text-input>
        </cds-form-item>
        <cds-select label-text="Domain name" placeholder="US South">
          <cds-select-item value="us-south">Option 1</cds-select-item>
          <cds-select-item value="us-east">Option 2</cds-select-item>
        </cds-select>
      </cds-modal-body>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary" data-modal-close
          >Cancel</cds-modal-footer-button
        >
        <cds-modal-footer-button>Add</cds-modal-footer-button>
      </cds-modal-footer>
    </cds-modal>
    <cds-button @click="\${toggleButton}">Launch modal</cds-button>
  \`
}`,...(S=(q=l.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var $,M,x;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes: controls,
  render: ({
    alert,
    ariaLabel,
    danger,
    open,
    closeButtonLabel,
    hasScrollingContent,
    fullWidth,
    modalHeading,
    modalLabel,
    numberOfButtons,
    passiveModal,
    preventCloseOnClickOutside,
    primaryButtonDisabled,
    size
  }) => html\`
      <cds-modal
        aria-label=\${ariaLabel}
        ?prevent-close-on-click-outside=\${preventCloseOnClickOutside}
        ?alert=\${alert}
        size="\${size}"
        ?open=\${open}
        ?full-width=\${fullWidth}
        prevent-close
        ?has-scrolling-content="\${hasScrollingContent}">
        <cds-modal-header>
          <cds-modal-close-button
            close-button-label=\${closeButtonLabel}></cds-modal-close-button>
          <cds-modal-label>\${modalLabel}</cds-modal-label>
          <cds-modal-heading>\${modalHeading}</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description>
            Custom domains direct requests for your apps in this Cloud Foundry
            organization to a URL that you own. A custom domain can be a shared
            domain, a shared subdomain, or a shared domain and host.
          </cds-modal-body-content>
          <cds-form-item>
            <cds-text-input placeholder="e.g. github.com" label="Domain name">
            </cds-text-input>
          </cds-form-item>
          <cds-select label-text="Region" placeholder="US South">
            <cds-select-item value="us-south">Option 1</cds-select-item>
            <cds-select-item value="us-east">Option 2</cds-select-item>
          </cds-select>

          \${hasScrollingContent ? html\` <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <h3>Lorem ipsum</h3>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>
                <cds-modal-body-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean id accumsan augue. Phasellus consequat augue vitae
                  tellus tincidunt posuere. Curabitur justo urna, consectetur
                  vel elit iaculis, ultrices condimentum risus. Nulla facilisi.
                  Etiam venenatis molestie tellus. Quisque consectetur non risus
                  eu rutrum.
                </cds-modal-body-content>\` : \`\`}
        </cds-modal-body>

        \${passiveModal ? \`\` : html\` <cds-modal-footer>
              \${numberOfButtons > 2 ? html\` <cds-modal-footer-button kind="secondary"
                    >Keep both</cds-modal-footer-button
                  >\` : \`\`}
              \${numberOfButtons >= 2 ? html\` <cds-modal-footer-button kind="secondary"
                    >\${numberOfButtons === 2 ? html\`Cancel\` : 'Rename'}</cds-modal-footer-button
                  >\` : \`\`}

              <cds-modal-footer-button
                ?disabled=\${primaryButtonDisabled}
                kind="\${danger ? 'danger' : 'primary'}"
                >Add</cds-modal-footer-button
              >
            </cds-modal-footer>\`}
      </cds-modal>
    \`
}`,...(x=(M=c.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};const I=["Default","DangerModal","FullWidth","PassiveModal","WithStateManager","Playground"],Z=Object.freeze(Object.defineProperty({__proto__:null,DangerModal:s,Default:o,FullWidth:d,PassiveModal:n,Playground:c,WithStateManager:l,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{Z as M};
