import{b as X,r as pe,x as l,s as v}from"./lit-element-266f0592.js";import{s as W}from"./spread-61d77317.js";import{p as i,c as h}from"./carbon-element-59fbbccb.js";import{n as c}from"./property-da2637ab.js";import{e as L}from"./class-map-4a7e6437.js";import{H as hn,a as U}from"./host-listener-0f7877ac.js";import{a as f}from"./collection-helpers-3389bc25.js";import{a as me}from"./query-b9d3c2af.js";import{C as _n,c as yn}from"./button-4ef875e3.js";import{o as C}from"./if-defined-21892bb5.js";import{s as kn}from"./16-a57556b1.js";import{F as O}from"./focus-73f58502.js";import{s as xn}from"./20-6cfa9697.js";import"./skip-to-content-8e1e9b95.js";import"./modal-c7d1de3b.js";const p=({children:n,...t}={})=>X`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${W(t)}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${n}<path d="M4.1 12.6l-.6.8c.6.5 1.3.9 2.1 1.2l.3-.9C5.3 13.4 4.7 13 4.1 12.6zM2.1 9l-1 .2c.1.8.4 1.6.8 2.3L2.8 11C2.4 10.4 2.2 9.7 2.1 9zM5.9 2.4L5.6 1.4C4.8 1.7 4.1 2.1 3.5 2.7l.6.8C4.7 3 5.3 2.6 5.9 2.4zM2.8 5L1.9 4.5C1.5 5.2 1.3 6 1.1 6.8l1 .2C2.2 6.3 2.5 5.6 2.8 5zM8 1v1c3.3 0 6 2.7 6 6s-2.7 6-6 6v1c3.9 0 7-3.1 7-7S11.9 1 8 1z"></path></svg>`,A=({children:n,...t}={})=>X`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${W(t)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${n}<path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"></path></svg>`,M=({children:n,...t}={})=>X`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${W(t)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${n}<path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"></path></svg>`,B=({children:n,...t}={})=>X`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${W(t)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${n}<path d="M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"></path></svg>`,$n="",wn=pe($n);/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=(n=>(n.FIXED="fixed",n.RAIL="rail",n.RESPONSIVE="responsive",n))(m||{}),un=(n=>(n.REGULAR="",n.HEADER_NAV="header-nav",n))(un||{});const zn=`:root{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-one{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-two{--cds-layer: var(--cds-layer-02, #ffffff);--cds-layer-active: var(--cds-layer-active-02, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-02, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-02, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-02, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-02, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-02, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-02, #a8a8a8);--cds-field: var(--cds-field-02, #ffffff);--cds-field-hover: var(--cds-field-hover-02, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-01, #c6c6c6);--cds-border-subtle-selected: var(--cds-border-subtle-selected-02, #c6c6c6);--cds-border-strong: var(--cds-border-strong-02, #8d8d8d);--cds-border-tile: var(--cds-border-tile-02, #a8a8a8)}.cds--layer-three{--cds-layer: var(--cds-layer-03, #f4f4f4);--cds-layer-active: var(--cds-layer-active-03, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-03, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-03, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-03, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-03, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-03, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-03, #a8a8a8);--cds-field: var(--cds-field-03, #f4f4f4);--cds-field-hover: var(--cds-field-hover-03, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-02, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-03, #c6c6c6);--cds-border-strong: var(--cds-border-strong-03, #8d8d8d);--cds-border-tile: var(--cds-border-tile-03, #c6c6c6)}.cds--side-nav{position:fixed;z-index:8000;overflow:hidden;background-color:var(--cds-background, #ffffff);color:var(--cds-text-secondary, #525252);inline-size:3rem;inset-block-end:0;inset-block-start:0;inset-inline-start:0;max-inline-size:16rem;transition:inline-size .11s cubic-bezier(.2,0,1,.9),transform .11s cubic-bezier(.2,0,1,.9);will-change:inline-size}.cds--side-nav--ux{inline-size:16rem;inset-block-start:3rem}@media (max-width: 65.98rem){.cds--side-nav--ux{inline-size:0}}.cds--side-nav--rail{inline-size:3rem}.cds--side-nav--hidden{inline-size:0}.cds--side-nav--expanded{inline-size:16rem}.cds--side-nav__overlay{position:fixed;background-color:transparent;block-size:0;inline-size:0;inset-block-start:3rem;inset-inline-start:0;opacity:0;transition:opacity .3s cubic-bezier(.5,0,.1,1),background-color .3s cubic-bezier(.5,0,.1,1)}@media (max-width: 65.98rem){.cds--side-nav__overlay-active{z-index:6000;background-color:var(--cds-overlay, rgba(22, 22, 22, .5));block-size:100vh;inline-size:100vw;opacity:1;transition:opacity .3s cubic-bezier(.5,0,.1,1),background-color .3s cubic-bezier(.5,0,.1,1)}}.cds--header~.cds--side-nav{block-size:calc(100% - 48px);inset-block-start:3rem}.cds--side-nav--fixed{inline-size:16rem}.cds--side-nav--collapsed{inline-size:16rem;transform:translate(-16rem)}.cds--side-nav__navigation{display:flex;flex-direction:column}.cds--side-nav__items,:host(cds-side-nav-items){box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;overflow:hidden;flex:1 1 0%;padding:1rem 0 0}.cds--side-nav__items *,:host(cds-side-nav-items) *,.cds--side-nav__items *:before,:host(cds-side-nav-items) *:before,.cds--side-nav__items *:after,:host(cds-side-nav-items) *:after{box-sizing:inherit}.cds--side-nav:hover .cds--side-nav__items,.cds--side-nav:hover :host(cds-side-nav-items),.cds--side-nav--fixed .cds--side-nav__items,.cds--side-nav--fixed :host(cds-side-nav-items),.cds--side-nav--expanded .cds--side-nav__items,.cds--side-nav--expanded :host(cds-side-nav-items){overflow-y:auto}.cds--side-nav--ux .cds--side-nav__items,.cds--side-nav--ux :host(cds-side-nav-items){overflow-y:auto}.cds--side-nav__item,:host(cds-side-nav-link),:host(cds-side-nav-menu){overflow:hidden;block-size:auto;inline-size:auto}.cds--side-nav--ux .cds--side-nav__item,.cds--side-nav--ux :host(cds-side-nav-link),.cds--side-nav--ux :host(cds-side-nav-menu){block-size:auto;inline-size:auto}.cds--side-nav__item:not(.cds--side-nav__item--active):hover .cds--side-nav__item:not(.cds--side-nav__item--active)>.cds--side-nav__submenu:hover,.cds--side-nav__item:not(.cds--side-nav__item--active):hover :not(.cds--side-nav__item--active):host(cds-side-nav-link)>.cds--side-nav__submenu:hover,.cds--side-nav__item:not(.cds--side-nav__item--active):hover :not(.cds--side-nav__item--active):host(cds-side-nav-menu)>.cds--side-nav__submenu:hover,.cds--side-nav__item:not(.cds--side-nav__item--active)>.cds--side-nav__link:hover,:not(.cds--side-nav__item--active):host(cds-side-nav-link)>.cds--side-nav__link:hover,:not(.cds--side-nav__item--active):host(cds-side-nav-menu)>.cds--side-nav__link:hover,.cds--side-nav__menu a.cds--side-nav__link:not(.cds--side-nav__link--current):not([aria-current=page]):hover,.cds--side-nav a.cds--header__menu-item:hover,.cds--side-nav .cds--header__menu-title[aria-expanded=true]:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12));color:var(--cds-text-primary, #161616)}.cds--side-nav__item:not(.cds--side-nav__item--active)>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-link)>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-menu)>.cds--side-nav__link:hover>span,.cds--side-nav__item:not(.cds--side-nav__item--active) .cds--side-nav__menu-item>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-link) .cds--side-nav__menu-item>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-menu) .cds--side-nav__menu-item>.cds--side-nav__link:hover>span,.cds--side-nav__item:not(.cds--side-nav__item--active) :host(cds-side-nav-menu-item)>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-link) :host(cds-side-nav-menu-item)>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-menu) :host(cds-side-nav-menu-item)>.cds--side-nav__link:hover>span{color:var(--cds-text-primary, #161616)}.cds--side-nav__item--large,:host(cds-side-nav-link[large]),:host(cds-side-nav-menu[large]){block-size:auto}.cds--side-nav__divider,:host(cds-side-nav-divider){margin:.5rem 1rem;background-color:var(--cds-border-subtle);block-size:1px;list-style-type:none}.cds--side-nav__divider hr,:host(cds-side-nav-divider) hr{border:none}.cds--side-nav__submenu{box-sizing:border-box;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:none;cursor:pointer;text-align:start;inline-size:100%;font-size:var(--cds-heading-compact-01-font-size, .875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, .16px);outline:2px solid transparent;outline-offset:-2px;display:flex;align-items:center;padding:0 1rem;block-size:2rem;color:var(--cds-text-secondary, #525252);transition:color .11s,background-color .11s,outline .11s;user-select:none}.cds--side-nav__submenu *,.cds--side-nav__submenu *:before,.cds--side-nav__submenu *:after{box-sizing:inherit}.cds--side-nav__submenu::-moz-focus-inner{border:0}.cds--side-nav__submenu:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12));color:var(--cds-text-primary, #161616)}.cds--side-nav__submenu:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--side-nav__submenu:focus{outline-style:dotted}}.cds--side-nav__submenu-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start}.cds--side-nav__icon.cds--side-nav__submenu-chevron{display:flex;flex:1;justify-content:flex-end}.cds--side-nav__submenu-chevron>svg{block-size:1rem;inline-size:1rem;transition:transform .11s}.cds--side-nav__submenu[aria-expanded=true] .cds--side-nav__submenu-chevron>svg{transform:rotate(180deg)}.cds--side-nav__item--large .cds--side-nav__submenu,:host(cds-side-nav-link[large]) .cds--side-nav__submenu,:host(cds-side-nav-menu[large]) .cds--side-nav__submenu{block-size:3rem}.cds--side-nav__item--active .cds--side-nav__submenu:hover,:host(cds-side-nav-menu[active]) .cds--side-nav__submenu:hover{background-color:var(--cds-background-selected, rgba(141, 141, 141, .2));color:var(--cds-text-primary, #161616)}.cds--side-nav__item--active .cds--side-nav__submenu[aria-expanded=false],:host(cds-side-nav-menu[active]) .cds--side-nav__submenu[aria-expanded=false]{position:relative;background-color:var(--cds-background-selected, rgba(141, 141, 141, .2));color:var(--cds-text-primary, #161616)}.cds--side-nav__item--active .cds--side-nav__submenu[aria-expanded=false]:before,:host(cds-side-nav-menu[active]) .cds--side-nav__submenu[aria-expanded=false]:before{position:absolute;background-color:var(--cds-border-interactive, #0f62fe);content:"";inline-size:3px;inset-block-end:0;inset-block-start:0;inset-inline-start:0}.cds--side-nav__item--active .cds--side-nav__submenu-title,:host(cds-side-nav-menu[active]) .cds--side-nav__submenu-title{color:var(--cds-text-primary, #161616);font-weight:600}.cds--side-nav__item--active .cds--side-nav__icon>svg,:host(cds-side-nav-menu[active]) .cds--side-nav__icon>svg{fill:var(--cds-icon-primary, #161616)}.cds--side-nav__menu{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:block;max-block-size:0;visibility:hidden}.cds--side-nav__menu *,.cds--side-nav__menu *:before,.cds--side-nav__menu *:after{box-sizing:inherit}.cds--side-nav__submenu[aria-expanded=true]+.cds--side-nav__menu{max-block-size:93.75rem;visibility:inherit}.cds--side-nav__menu a.cds--side-nav__link{block-size:2rem;font-weight:400;min-block-size:2rem;padding-inline-start:2rem}.cds--side-nav__item.cds--side-nav__item--icon a.cds--side-nav__link,:host(cds-side-nav-menu):host(cds-side-nav-menu[has-icon]) a.cds--side-nav__link{padding-inline-start:4.5rem}.cds--side-nav__menu a.cds--side-nav__link--current,.cds--side-nav__menu a.cds--side-nav__link[aria-current=page],a.cds--side-nav__link--current{background-color:var(--cds-background-selected, rgba(141, 141, 141, .2))}.cds--side-nav__menu a.cds--side-nav__link--current>span,.cds--side-nav__menu a.cds--side-nav__link[aria-current=page]>span,a.cds--side-nav__link--current>span{color:var(--cds-text-primary, #161616);font-weight:600}a.cds--side-nav__link,.cds--side-nav a.cds--header__menu-item,.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu{outline:2px solid transparent;outline-offset:-2px;font-size:var(--cds-heading-compact-01-font-size, .875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, .16px);position:relative;display:flex;align-items:center;padding:0 1rem;min-block-size:2rem;text-decoration:none;transition:color .11s,background-color .11s,outline .11s}.cds--side-nav__item--large a.cds--side-nav__link,:host(cds-side-nav-link[large]) a.cds--side-nav__link,:host(cds-side-nav-menu[large]) a.cds--side-nav__link{block-size:3rem}a.cds--side-nav__link>.cds--side-nav__link-text,.cds--side-nav a.cds--header__menu-item .cds--text-truncate-end{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--cds-text-secondary, #525252);font-size:.875rem;letter-spacing:.1px;line-height:1.25rem;user-select:none}a.cds--side-nav__link:focus,.cds--side-nav a.cds--header__menu-item:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){a.cds--side-nav__link:focus,.cds--side-nav a.cds--header__menu-item:focus{outline-style:dotted}}a.cds--side-nav__link[aria-current=page],a.cds--side-nav__link--current{background-color:var(--cds-background-selected, rgba(141, 141, 141, .2));font-weight:600}a.cds--side-nav__link[aria-current=page] .cds--side-nav__link-text,a.cds--side-nav__link--current .cds--side-nav__link-text{color:var(--cds-text-primary, #161616)}a.cds--side-nav__link[aria-current=page]:before,a.cds--side-nav__link--current:before{position:absolute;background-color:var(--cds-border-interactive, #0f62fe);content:"";inline-size:3px;inset-block-end:0;inset-block-start:0;inset-inline-start:0}.cds--side-nav__icon{display:flex;flex:0 0 1rem;align-items:center;justify-content:center}.cds--side-nav__icon:not(.cds--side-nav__submenu-chevron){margin-inline-end:1.5rem}.cds--side-nav__icon>svg{block-size:1rem;fill:var(--cds-icon-secondary, #525252);inline-size:1rem}.cds--side-nav__icon>svg.cds--side-nav-collapse-icon{display:none}.cds--side-nav--expanded .cds--side-nav__icon>svg.cds--side-nav-expand-icon{display:none}.cds--side-nav--expanded .cds--side-nav__icon>svg.cds--side-nav-collapse-icon{display:block}.cds--side-nav--fixed a.cds--side-nav__link,.cds--side-nav--fixed .cds--side-nav__submenu{padding-inline-start:1rem}.cds--side-nav--fixed .cds--side-nav__item:not(.cds--side-nav__item--icon) .cds--side-nav__menu a.cds--side-nav__link,.cds--side-nav--fixed :not(.cds--side-nav__item--icon):host(cds-side-nav-link) .cds--side-nav__menu a.cds--side-nav__link,.cds--side-nav--fixed :not(.cds--side-nav__item--icon):host(cds-side-nav-menu) .cds--side-nav__menu a.cds--side-nav__link{padding-inline-start:2rem}@media (max-width: 65.98rem){.cds--side-nav .cds--header__nav{display:block}}.cds--side-nav__header-navigation,:host(cds-header-side-nav-items){box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:none}.cds--side-nav__header-navigation *,:host(cds-header-side-nav-items) *,.cds--side-nav__header-navigation *:before,:host(cds-header-side-nav-items) *:before,.cds--side-nav__header-navigation *:after,:host(cds-header-side-nav-items) *:after{box-sizing:inherit}@media (max-width: 65.98rem){.cds--side-nav__header-navigation,:host(cds-header-side-nav-items){position:relative;display:block;margin-block-end:2rem}}.cds--side-nav__header-divider:after{position:absolute;background:var(--cds-border-subtle);block-size:.0625rem;content:"";inline-size:calc(100% - 32px);inset-block-end:-1rem;inset-inline-start:1rem}.cds--side-nav a.cds--header__menu-item{justify-content:space-between;color:var(--cds-text-secondary, #525252);white-space:nowrap}.cds--side-nav a.cds--header__menu-item[aria-expanded=true]{background-color:transparent}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu{padding:0;background-color:transparent;box-shadow:none;inline-size:100%;inset-block-end:inherit;transform:none}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu li{inline-size:100%}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu a.cds--header__menu-item{font-weight:400;padding-inline-start:4.25rem}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu a.cds--header__menu-item:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12));color:var(--cds-text-primary, #161616)}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu a.cds--header__menu-item--current:hover{background-color:var(--cds-layer-selected-hover)}.cds--side-nav .cds--side-nav__header-navigation a.cds--header__menu-item[aria-current=page]:after,.cds--side-nav :host(cds-header-side-nav-items) a.cds--header__menu-item[aria-current=page]:after,.cds--side-nav .cds--side-nav__header-navigation .cds--header__menu-item--current:after,.cds--side-nav :host(cds-header-side-nav-items) .cds--header__menu-item--current:after{block-size:calc(100% + 4px);inline-size:3px}.cds--side-nav .cds--header__menu a.cds--header__menu-item{block-size:inherit}.cds--side-nav a.cds--header__menu-item:hover .cds--header__menu-arrow,.cds--side-nav a.cds--header__menu-item:focus .cds--header__menu-arrow,.cds--side-nav .cds--header__menu-arrow{fill:var(--cds-icon-secondary, #525252)}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--side-nav__icon>svg,.cds--side-nav a.cds--header__menu-item:hover .cds--header__menu-arrow,.cds--side-nav a.cds--header__menu-item:focus .cds--header__menu-arrow,.cds--side-nav .cds--header__menu-arrow{fill:ButtonText}}:host(cds-side-nav[expanded]) ::slotted(cds-side-nav-items){overflow-y:auto}:host(cds-side-nav-link){display:block;block-size:auto;inline-size:auto;outline:none}:host(cds-side-nav-link) .cds--side-nav__icon{color:var(--cds-text-primary, #161616)}:host(cds-side-nav-link) .cds--side-nav__icon[hidden]{display:none}:host(cds-side-nav-divider){display:block}:host(cds-side-nav-menu){display:block}:host(cds-side-nav-menu) .cds--side-nav__icon[hidden]{display:none}:host(cds-side-nav-menu) .cds--side-nav__menu{padding:0;margin:0}:host(cds-side-nav-menu) .cds--side-nav__submenu[aria-expanded=true]+.cds--side-nav__menu{max-block-size:none}:host(cds-side-nav-menu[active]){position:relative;color:var(--cds-text-primary, #161616)}:host(cds-side-nav-menu[active]):before{position:absolute;background-color:var(--cds-border-interactive, #0f62fe);content:"";inline-size:.25rem;inset-block:0;inset-inline-start:0}:host(cds-side-nav-menu[active][expanded]){position:inherit;background-color:inherit;color:inherit}:host(cds-side-nav-menu[active][expanded]):before{content:none}:host(cds-side-nav-menu-item){display:block;block-size:auto;inline-size:auto;outline:none}:host(cds-side-nav-menu-item) a.cds--side-nav__link{block-size:2rem;font-weight:400;min-block-size:2rem;padding-inline-start:2rem}:host(cds-side-nav-menu-item[parent-has-icon]) a.cds--side-nav__link{padding-inline-start:4.5rem}:host(cds-side-nav-item) .cds--side-nav__link:hover,:host(cds-side-nav-menu) .cds--side-nav__submenu:hover,:host(cds-side-nav-menu-item) .cds--side-nav__link:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12));color:var(--cds-text-primary, #161616)}
`,D=pe(zn);var Ln=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,I=(n,t,a,s)=>{for(var e=s>1?void 0:s?Sn(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Ln(t,a,e),e};let x=class extends hn(v){constructor(){super(...arguments),this._hovered=!1,this._hTransition=null,this._handleButtonToggle=async n=>{this.expanded=n.detail.active},this.collapseMode=m.RESPONSIVE,this.expanded=!1,this.isNotChildOfHeader=!1,this.isNotPersistent=!1}_cleanHTransition(){this._hTransition&&(this._hTransition=this._hTransition.release())}_updatedSideNavMenuForceCollapsedState(){const{expanded:n,_hovered:t}=this;f(this.querySelectorAll(this.constructor.selectorMenu),a=>{a.forceCollapsed=!n&&!t})}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","navigation"),super.connectedCallback()}disconnectedCallback(){this._cleanHTransition(),super.disconnectedCallback()}updated(n){var a;const t=this.getRootNode();if(n.has("collapseMode")&&f(t.querySelectorAll(this.constructor.selectorButtonToggle),s=>{s.collapseMode=this.collapseMode}),n.has("expanded")){const s=t.querySelectorAll(this.constructor.selectorHeaderItems);f(t.querySelectorAll(this.constructor.selectorButtonToggle),e=>{e.active=this.expanded}),this.expanded?(f(s,e=>{e.setAttribute("tabindex","-1")}),(a=this.querySelector(this.constructor.selectorNavItems))==null||a.focus()):f(s,e=>{e.removeAttribute("tabindex")})}n.has("isNotChildOfHeader")&&f(t.querySelectorAll(this.constructor.selectorButtonToggle),s=>{s.isNotChildOfHeader=this.isNotChildOfHeader})}_handleFocusOut({relatedTarget:n}){const{collapseMode:t}=this;t!==m.FIXED&&(this.contains(n)||(this.expanded=!1))}_handleFocusIn(){const{collapseMode:n}=this;n!==m.FIXED&&(this.expanded=!0)}_handleNavMouseOver(){const{collapseMode:n}=this;n===m.RAIL&&(this.expanded=!0,this._hovered=!0,this._updatedSideNavMenuForceCollapsedState())}_handleNavMouseOut(){const{collapseMode:n}=this;n===m.RAIL&&(this.expanded=!1,this._hovered=!1,this._updatedSideNavMenuForceCollapsedState())}_onOverlayClick(){this.expanded=!1}render(){const{collapseMode:n,expanded:t,isNotChildOfHeader:a,isNotPersistent:s}=this,e=L({[`${i}--side-nav__navigation`]:!0,[`${i}--side-nav`]:!0,[`${i}--side-nav--expanded`]:t,[`${i}--side-nav--collapsed`]:!t&&n===m.FIXED,[`${i}--side-nav--rail`]:n===m.RAIL,[`${i}--side-nav--ux`]:!a,[`${i}--side-nav--hidden`]:s}),d=L({[`${i}--side-nav__overlay`]:!0,[`${i}--side-nav__overlay-active`]:t});return l`${this.collapseMode===m.FIXED?null:l`<div
            class="${d}"
            @click=${this._onOverlayClick}></div>`}
      <div
        class="${e}"
        @mouseover="${this._handleNavMouseOver}"
        @mouseout="${this._handleNavMouseOut}">
        <slot></slot>
      </div>`}static get selectorButtonToggle(){return`${i}-header-menu-button`}static get selectorHeaderItems(){return`${i}-header-name, ${i}-header-global-action`}static get selectorNavItems(){return`${i}-side-nav-menu, ${i}-side-nav-menu-item, ${i}-side-nav-link`}static get selectorMenu(){return`${i}-side-nav-menu`}static get eventButtonToggle(){return`${i}-header-menu-button-toggled`}};x.styles=D;I([U("parentRoot:eventButtonToggle")],x.prototype,"_handleButtonToggle",2);I([c({reflect:!0,attribute:"collapse-mode"})],x.prototype,"collapseMode",2);I([c({type:Boolean,reflect:!0})],x.prototype,"expanded",2);I([c({type:Boolean,attribute:"is-not-child-of-header"})],x.prototype,"isNotChildOfHeader",2);I([c({type:Boolean,reflect:!0,attribute:"is-not-persistent"})],x.prototype,"isNotPersistent",2);I([U("focusout")],x.prototype,"_handleFocusOut",1);I([U("focusin")],x.prototype,"_handleFocusIn",1);x=I([h(`${i}-side-nav`)],x);const Cn=`@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context: var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context: var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min: var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max: var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context: var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context: var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min: var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max: var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context: var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min: var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max: var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context: var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-condensed, .5rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, .5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}:root{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-one{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-two{--cds-layer: var(--cds-layer-02, #ffffff);--cds-layer-active: var(--cds-layer-active-02, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-02, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-02, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-02, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-02, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-02, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-02, #a8a8a8);--cds-field: var(--cds-field-02, #ffffff);--cds-field-hover: var(--cds-field-hover-02, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-01, #c6c6c6);--cds-border-subtle-selected: var(--cds-border-subtle-selected-02, #c6c6c6);--cds-border-strong: var(--cds-border-strong-02, #8d8d8d);--cds-border-tile: var(--cds-border-tile-02, #a8a8a8)}.cds--layer-three{--cds-layer: var(--cds-layer-03, #f4f4f4);--cds-layer-active: var(--cds-layer-active-03, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-03, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-03, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-03, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-03, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-03, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-03, #a8a8a8);--cds-field: var(--cds-field-03, #f4f4f4);--cds-field-hover: var(--cds-field-hover-03, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-02, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-03, #c6c6c6);--cds-border-strong: var(--cds-border-strong-03, #8d8d8d);--cds-border-tile: var(--cds-border-tile-03, #c6c6c6)}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color: var(--cds-background-inverse, #393939);--cds-popover-text-color: var(--cds-text-inverse, #ffffff)}.cds--popover--drop-shadow .cds--popover{--cds-popover-drop-shadow: drop-shadow(0 2px 2px rgba(0, 0, 0, .2))}.cds--popover--caret{--cds-popover-offset: .625rem}.cds--popover{position:absolute;z-index:6000;filter:var(--cds-popover-drop-shadow, none);inset:0;pointer-events:none}.cds--popover-content{--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;position:absolute;z-index:6000;display:none;border-radius:var(--cds-popover-border-radius, 2px);background-color:var(--cds-popover-background-color, var(--cds-layer));color:var(--cds-popover-text-color, var(--cds-text-primary, #161616));inline-size:max-content;max-inline-size:23rem;pointer-events:auto}.cds--layout--size-sm .cds--popover-content{--cds-layout-size-height: var(--cds-layout-size-height-sm)}.cds--layout--size-md .cds--popover-content{--cds-layout-size-height: var(--cds-layout-size-height-md)}.cds--layout--size-lg .cds--popover-content{--cds-layout-size-height: var(--cds-layout-size-height-lg)}.cds--popover-content *,.cds--popover-content *:before,.cds--popover-content *:after{box-sizing:inherit}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover-content:before{position:absolute;display:none;content:""}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover-caret,.cds--popover--auto-align.cds--popover-caret{position:absolute;z-index:6000;display:none;background-color:var(--cds-popover-background-color, var(--cds-layer));will-change:transform}.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:0;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem)),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:initial}.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset, 0rem),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--bottom>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset, 0rem);inset-block-start:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(-100%)}.cds--popover--bottom>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-end>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height, .375rem);clip-path:polygon(0% 100%,50% 0%,100% 100%);inline-size:var(--cds-popover-caret-width, .75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset, 0rem))}[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset, 0rem))}.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height, .375rem);clip-path:polygon(0% 100%,50% 0%,100% 100%);inline-size:var(--cds-popover-caret-width, .75rem)}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:0;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem)),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:initial}.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset, 0rem),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--top>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-end>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset, 0rem);inset-block-end:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(100%)}.cds--popover--top>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-end>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height, .375rem);clip-path:polygon(0% 0%,50% 100%,100% 0%);inline-size:var(--cds-popover-caret-width, .75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-1 * var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(-1 * var(--cds-popover-offset, 0rem)))}.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height, .375rem);clip-path:polygon(0% 0%,50% 100%,100% 0%);inline-size:var(--cds-popover-caret-width, .75rem)}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset, 0rem),-50%)}.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset, 0rem),calc(.5 * var(--cds-popover-offset, 0rem) * -1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset, 0rem),calc(.5 * var(--cds-popover-offset, 0rem) + 16px))}[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:initial}.cds--popover--right>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset, 0rem);inset-block-end:0;inset-block-start:0;inset-inline-start:0;transform:translate(-100%)}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width, .75rem);clip-path:polygon(0% 50%,100% 0%,100% 100%);inline-size:var(--cds-popover-caret-height, .375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:initial}.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width, .75rem);clip-path:polygon(0% 50%,100% 0%,100% 100%);inline-size:var(--cds-popover-caret-height, .375rem)}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem) + .1px),-50%)}.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem)),calc(-.5 * var(--cds-popover-offset, 0rem) - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem)),calc(.5 * var(--cds-popover-offset, 0rem) + 16px))}[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:initial;inset-inline-start:100%}.cds--popover--left>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset, 0rem);inset-block-end:0;inset-block-start:0;inset-inline-end:0;transform:translate(100%)}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width, .75rem);clip-path:polygon(0% 0%,100% 50%,0% 100%);inline-size:var(--cds-popover-caret-height, .375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem) + 100%),-50%)}[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:initial;inset-inline-start:100%}.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width, .75rem);clip-path:polygon(0% 0%,100% 50%,0% 100%);inline-size:var(--cds-popover-caret-height, .375rem)}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{box-sizing:border-box;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:none;cursor:pointer;text-align:start;inline-size:100%;position:relative;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;inline-size:2rem}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button *:before,.cds--popover--tab-tip__button *:after{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px #0003}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{position:absolute;z-index:6001;background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary, #161616)}.cds--tooltip{--cds-popover-offset: 12px}.cds--tooltip-content{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);padding:var(--cds-tooltip-padding-block, 1rem) var(--cds-tooltip-padding-inline, 1rem);color:var(--cds-text-inverse, #ffffff);max-inline-size:18rem}.cds--icon-tooltip{--cds-tooltip-padding-block: .125rem;--cds-popover-caret-width: .5rem;--cds-popover-caret-height: .25rem;--cds-popover-offset: .5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px)}.cds--definition-term{box-sizing:border-box;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:none;cursor:pointer;text-align:start;inline-size:100%;border-radius:0;border-block-end:1px dotted var(--cds-border-strong);color:var(--cds-text-primary, #161616)}.cds--definition-term *,.cds--definition-term *:before,.cds--definition-term *:after{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term:focus{outline:1px solid var(--cds-focus, #0f62fe);border-block-end-color:var(--cds-border-interactive, #0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive, #0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);padding:.5rem 1rem;max-inline-size:11rem}.cds--btn{--cds-layout-size-height-local: clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)), var(--cds-layout-size-height, var(--cds-layout-size-height-lg)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local: clamp(var(--cds-layout-density-padding-inline-min), var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)), var(--cds-layout-density-padding-inline-max));--temp-1lh: ( var(--cds-body-compact-01-line-height, 1.28572) * 1em );--temp-expressive-1lh: ( var(--cds-body-compact-02-line-height, 1.375) * 1em );--temp-padding-block-max: calc( (var(--cds-layout-size-height-lg) - var(--temp-1lh)) / 2 - .0625rem );box-sizing:border-box;padding:0;border:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);position:relative;display:inline-flex;flex-shrink:0;justify-content:space-between;border-radius:0;margin:0;cursor:pointer;inline-size:max-content;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh)) / 2 - .0625rem,var(--temp-padding-block-max));padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) * 3 + 1rem - .0625rem);padding-inline-start:calc(var(--cds-layout-density-padding-inline-local) - .0625rem);text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:top}.cds--btn *,.cds--btn *:before,.cds--btn *:after{box-sizing:inherit}.cds--btn:disabled,.cds--btn:hover:disabled,.cds--btn:focus:disabled,.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:hover,.cds--btn.cds--btn--disabled:focus{border-color:var(--cds-button-disabled, #c6c6c6);background:var(--cds-button-disabled, #c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled, #8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{position:absolute;flex-shrink:0;block-size:1rem;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem) / 2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem}.cds--btn::-moz-focus-inner{padding:0;border:0}.cds--btn--primary{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-primary, #0f62fe);color:var(--cds-text-on-color, #ffffff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover, #0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active, #002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover{color:var(--cds-text-on-color, #ffffff)}.cds--btn--secondary{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-secondary, #393939);color:var(--cds-text-on-color, #ffffff)}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover, #474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active, #6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:hover,.cds--btn--secondary:focus{color:var(--cds-text-on-color, #ffffff)}.cds--btn--tertiary{border-width:1px;border-style:solid;border-color:var(--cds-button-tertiary, #0f62fe);background-color:transparent;color:var(--cds-button-tertiary, #0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover, #0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active, #002d9c)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:hover{color:var(--cds-text-inverse, #ffffff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary, #0f62fe);color:var(--cds-text-inverse, #ffffff)}.cds--btn--tertiary:active{border-color:transparent;background-color:var(--cds-button-tertiary-active, #002d9c);color:var(--cds-text-inverse, #ffffff)}.cds--btn--tertiary:disabled,.cds--btn--tertiary:hover:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary.cds--btn--disabled:focus{background:transparent;color:var(--cds-text-on-color-disabled, #8d8d8d);outline:none}.cds--btn--ghost{border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;color:var(--cds-link-primary, #0f62fe);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost .cds--btn__icon{position:static;margin-inline-start:.5rem}.cds--btn--ghost:hover,.cds--btn--ghost:active{color:var(--cds-link-primary-hover, #0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active, rgba(141, 141, 141, .5))}.cds--btn--ghost:disabled,.cds--btn--ghost:hover:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost.cds--btn--disabled:focus{border-color:transparent;background:transparent;color:var(--cds-text-on-color-disabled, #8d8d8d);outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary, #161616)}.cds--btn--icon-only{justify-content:center;padding:0;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);padding-block-start:min((var(--cds-layout-size-height-local) - 1rem) / 2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only>:first-child{margin-block-start:.0625rem;min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon{margin:0}.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected, rgba(141, 141, 141, .2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon{fill:var(--cds-icon-primary, #161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled, #8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-danger-primary, #da1e28);color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover, #b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active, #750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--tertiary{border-width:1px;border-style:solid;border-color:var(--cds-button-danger-secondary, #da1e28);background-color:transparent;color:var(--cds-button-danger-secondary, #da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover, #b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active, #750e13)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover, #b81921);color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary, #da1e28);color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--tertiary:active{border-color:var(--cds-button-danger-active, #750e13);background-color:var(--cds-button-danger-active, #750e13);color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:hover:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary.cds--btn--disabled:focus{background:transparent;color:var(--cds-text-on-color-disabled, #8d8d8d);outline:none}.cds--btn--danger--ghost{border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;color:var(--cds-button-danger-secondary, #da1e28);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover, #b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active, #750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost .cds--btn__icon{position:static;margin-inline-start:.5rem}.cds--btn--danger--ghost:hover,.cds--btn--danger--ghost:active{color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:hover:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost.cds--btn--disabled:focus{border-color:transparent;background:transparent;color:var(--cds-text-disabled, rgba(22, 22, 22, .25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size, 1rem);font-weight:var(--cds-body-compact-02-font-weight, 400);line-height:var(--cds-body-compact-02-line-height, 1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing, 0);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh)) / 2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{position:relative;padding:0;border:none;background:var(--cds-skeleton-background, #e8e8e8);box-shadow:none;pointer-events:none;inline-size:9.375rem}.cds--btn.cds--skeleton:hover,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:active{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element, #c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion: reduce){.cds--btn.cds--skeleton:before{animation:none}}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator, #e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator, #e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled, #8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled, #8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{border-color:transparent;background-color:transparent;box-shadow:none}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon{fill:ButtonText}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator, #e0e0e0)}.cds--header,:host(cds-header){box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;position:fixed;z-index:8000;display:flex;align-items:center;background-color:var(--cds-background, #ffffff);block-size:3rem;border-block-end:1px solid var(--cds-border-subtle);inset-block-start:0;inset-inline-end:0;inset-inline-start:0}.cds--header *,:host(cds-header) *,.cds--header *:before,:host(cds-header) *:before,.cds--header *:after,:host(cds-header) *:after{box-sizing:inherit}.cds--header__action{box-sizing:border-box;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:none;cursor:pointer;text-align:start;inline-size:100%;display:inline-flex;border:.0625rem solid transparent;block-size:3rem;inline-size:3rem;transition:background-color .11s,border-color .11s}.cds--header__action *,.cds--header__action *:before,.cds--header__action *:after{box-sizing:inherit}.cds--header__action::-moz-focus-inner{border:0}@media (max-width: 41.98rem){.cds--header__action{min-inline-size:3rem}}.cds--header__global .cds--popover,:host(cds-header) ::slotted(.cds--header__global) .cds--popover{z-index:8001}.cds--header__action>:first-child{margin-block-start:0}.cds--header__action>svg.cds--navigation-menu-panel-collapse-icon,.cds--header__action--active>svg.cds--navigation-menu-panel-expand-icon{display:none}.cds--header__action--active>svg.cds--navigation-menu-panel-collapse-icon{display:inline}.cds--header__action:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12))}.cds--header__action--active{background:var(--cds-layer);border-block-end:1px solid transparent;border-inline-end:1px solid var(--cds-border-subtle);border-inline-start:1px solid var(--cds-border-subtle)}.cds--header__action--active>svg{fill:var(--cds-icon-primary, #161616)}.cds--header__action:focus{border-color:var(--cds-focus, #0f62fe);outline:none}.cds--header__action:active{background-color:var(--cds-background-active, rgba(141, 141, 141, .5))}.cds--header__action.cds--btn--icon-only{align-items:center;justify-content:center}.cds--btn.cds--btn--icon-only.cds--header__action svg{fill:var(--cds-icon-secondary, #525252)}.cds--btn.cds--btn--icon-only.cds--header__action:hover svg,.cds--btn.cds--btn--icon-only.cds--header__action:active svg,.cds--btn.cds--btn--icon-only.cds--header__action--active svg{fill:var(--cds-icon-primary, #161616)}.cds--header__menu-trigger>svg{fill:var(--cds-icon-primary, #161616)}.cds--header__menu-trigger:hover>svg{fill:var(--cds-icon-primary, #161616)}.cds--header__menu-toggle{display:flex;align-items:center;justify-content:center}@media (min-width: 66rem){.cds--header__menu-toggle__hidden{display:none}}a.cds--header__name{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);display:flex;align-items:center;padding:0 2rem 0 1rem;border:.125rem solid transparent;block-size:100%;font-weight:600;letter-spacing:.1px;line-height:1.25rem;outline:none;text-decoration:none;transition:border-color .11s;user-select:none}@media (max-width: 41.98rem){a.cds--header__name{padding:0 1rem}}a.cds--header__name:focus{border-color:var(--cds-focus, #0f62fe)}.cds--header__name--prefix{font-weight:400}a.cds--header__name,a.cds--header__name:hover{color:var(--cds-text-primary, #161616)}.cds--header__menu-toggle:not(.cds--header__menu-toggle__hidden)~.cds--header__name{padding-inline-start:.5rem}.cds--header__nav,:host(cds-header-nav){position:relative;display:none;block-size:100%;padding-inline-start:1rem}@media (min-width: 66rem){.cds--header__nav,:host(cds-header-nav){display:block}}.cds--header__nav:before{position:absolute;display:block;background-color:var(--cds-border-subtle);block-size:1.5rem;content:"";inline-size:.0625rem;inset-block-start:50%;inset-inline-start:0;transform:translateY(-50%)}.cds--header__menu-bar{box-sizing:border-box;border:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:flex;padding:0;margin:0;block-size:100%;list-style:none}.cds--header__menu-bar *,.cds--header__menu-bar *:before,.cds--header__menu-bar *:after{box-sizing:inherit}a.cds--header__menu-item{position:relative;display:flex;align-items:center;padding:0 1rem;border:2px solid transparent;background-color:var(--cds-background, #ffffff);block-size:100%;color:var(--cds-text-secondary, #525252);font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.125rem;text-decoration:none;transition:background-color .11s,border-color .11s,color .11s;user-select:none}a.cds--header__menu-item:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12));color:var(--cds-text-primary, #161616)}.cds--header__action:active,a.cds--header__menu-item:active{background-color:var(--cds-background-active, rgba(141, 141, 141, .5));color:var(--cds-text-primary, #161616)}a.cds--header__menu-item:focus{border-color:var(--cds-focus, #0f62fe);outline:none}a.cds--header__menu-item:hover>svg,a.cds--header__menu-item:active>svg{fill:var(--cds-icon-primary, #161616)}a.cds--header__menu-item[aria-current=page],.cds--header__menu-item--current{color:var(--cds-text-primary, #161616)}a.cds--header__menu-item[aria-current=page]:after,.cds--header__menu-item--current:after{position:absolute;background-color:var(--cds-border-interactive, #0f62fe);block-size:3px;content:"";inline-size:calc(100% + 4px);inset-block-end:-2px;inset-inline-start:-2px}a.cds--header__menu-item[aria-current=page]:focus:after,.cds--header__menu-item--current:focus:after{border:0}.cds--header__submenu .cds--header__menu a.cds--header__menu-item[aria-current=page]:after,:host(cds-header-menu) .cds--header__menu a.cds--header__menu-item[aria-current=page]:after,.cds--header__submenu .cds--header__menu .cds--header__menu-item--current:after,:host(cds-header-menu) .cds--header__menu .cds--header__menu-item--current:after{background-color:var(--cds-border-interactive, #0f62fe);block-size:calc(100% + 4px);inline-size:3px;inset-block-start:-2px;inset-inline-start:-2px}.cds--header__submenu .cds--header__menu a.cds--header__menu-item[aria-current=page]:focus:after,:host(cds-header-menu) .cds--header__menu a.cds--header__menu-item[aria-current=page]:focus:after,.cds--header__submenu .cds--header__menu .cds--header__menu-item--current:focus:after,:host(cds-header-menu) .cds--header__menu .cds--header__menu-item--current:focus:after{background-color:var(--cds-border-interactive, #0f62fe);block-size:calc(100% + 4px);inline-size:5px;inset-block-start:-2px;inset-inline-start:-2px}a.cds--header__menu-item[aria-current=page]:focus,a.cds--header__menu-item.cds--header__menu-item--current:focus{border:2px solid var(--cds-focus, #0f62fe)}.cds--header__submenu,:host(cds-header-menu){position:relative}.cds--header__menu-title[aria-haspopup=true]{position:relative}.cds--header__menu-title[aria-expanded=true]{z-index:8002;background-color:var(--cds-layer);color:var(--cds-text-secondary, #525252)}.cds--header__menu-title[aria-expanded=true]>.cds--header__menu-arrow{transform:rotate(180deg)}.cds--header__menu{display:none;padding:0;margin:0;list-style:none}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu{position:absolute;z-index:8001;display:flex;flex-direction:column;background-color:var(--cds-layer);box-shadow:0 4px 8px #00000080;inline-size:12.5rem;inset-block-end:0;inset-inline-start:0;transform:translateY(100%)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item{background-color:var(--cds-layer)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item:hover{background-color:var(--cds-layer-hover);color:var(--cds-text-primary, #161616)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item:active{background-color:var(--cds-layer-active);color:var(--cds-text-primary, #161616)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item.cds--header__menu-item--current{background-color:var(--cds-layer-selected)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item.cds--header__menu-item--current:hover{background-color:var(--cds-layer-selected-hover)}.cds--header__menu .cds--header__menu-item{block-size:3rem}.cds--header__menu-arrow{fill:var(--cds-icon-secondary, #525252);margin-inline-start:.5rem;transition:transform .11s,fill .11s}.cds--header__global,:host(cds-header) ::slotted(.cds--header__global){display:flex;flex:1 1 0%;justify-content:flex-end;block-size:100%}.cds--skip-to-content{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--skip-to-content:focus{z-index:9999;display:flex;align-items:center;padding:0 1rem;border:4px solid var(--cds-focus, #0f62fe);background-color:var(--cds-background, #ffffff);block-size:3rem;clip:auto;color:var(--cds-text-secondary, #525252);inline-size:auto;inset-block-start:0;inset-inline-start:0;outline:none}.cds--header-panel,:host(cds-header-panel){position:fixed;z-index:8000;overflow:hidden;border:none;background-color:var(--cds-layer);color:var(--cds-text-secondary, #525252);inline-size:0;inset-block-end:0;inset-block-start:3rem;inset-inline-end:0;transition:width .11s cubic-bezier(.2,0,1,.9);will-change:width}.cds--header-panel--expanded,:host(cds-header-panel[expanded]){border-inline-end:1px solid var(--cds-border-subtle);border-inline-start:1px solid var(--cds-border-subtle);inline-size:16rem}.cds--switcher,:host(cds-switcher){box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--cds-text-secondary, #525252)}.cds--switcher *,:host(cds-switcher) *,.cds--switcher *:before,:host(cds-switcher) *:before,.cds--switcher *:after,:host(cds-switcher) *:after{box-sizing:inherit}.cds--switcher__item,:host(cds-switcher-item){block-size:2rem;inline-size:100%}.cds--switcher__item:nth-child(1){margin-block-start:1rem}.cds--switcher__item--divider,:host(cds-switcher-divider){display:block;border:none;margin:.5rem 1rem;background:var(--cds-border-subtle);block-size:1px;inline-size:14rem}.cds--switcher__item-link{font-size:var(--cds-heading-compact-01-font-size, .875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, .16px);display:block;padding:.375rem 1rem;block-size:2rem;color:var(--cds-text-secondary, #525252);text-decoration:none}.cds--switcher__item-link:hover:not(.cds--switcher__item-link--selected){background:var(--cds-layer-hover);color:var(--cds-text-primary, #161616);cursor:pointer}.cds--switcher__item-link:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}.cds--switcher__item-link:active{background:var(--cds-layer-active);color:var(--cds-text-primary, #161616)}.cds--switcher__item-link--selected{background:var(--cds-layer-selected);color:var(--cds-text-primary, #161616)}:host(cds-header-nav) .cds-ce--header__divider{position:absolute;background-color:var(--cds-border-subtle);block-size:1.5rem;inline-size:.0625rem;inset-block-start:50%;inset-inline-start:0;transform:translateY(-50%)}:host(cds-header-nav-item){outline:none}:host(cds-header-menu){outline:none}:host(cds-header-menu-item){outline:none}:host(cds-header-menu-item) a.cds--header__menu-item{background-color:var(--cds-layer);block-size:3rem}:host(cds-header-menu-item) a.cds--header__menu-item:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12));color:var(--cds-text-primary, #161616)}:host(cds-header-menu-item) a.cds--header__menu-item:active{background-color:var(--cds-background-active, rgba(141, 141, 141, .5))}:host(cds-header-menu-item) a.cds--header__menu-item--current{background-color:var(--cds-layer-selected)}:host(cds-header-menu-item) a.cds--header__menu-item--current:hover{background-color:var(--cds-layer-selected-hover)}:host(cds-header-menu-item) a.cds--header__menu-item--current:after{position:absolute;background-color:var(--cds-border-interactive, #0f62fe);block-size:100%;content:"";inline-size:3px;inset-block:-.125rem;inset-inline-start:-.125rem}:host(cds-header-global-action) ::slotted(svg){fill:var(--cds-icon-secondary, #525252)}:host(cds-header-global-action):hover ::slotted(svg){fill:var(--cds-icon-primary, #161616)}:host(cds-header-global-action) .cds--popover{z-index:8001}:host(cds-header-nav-item) a.cds--header__menu-item,:host(cds-header-menu) a.cds--header__menu-item{box-sizing:border-box}:host(cds-header-menu-button){display:content;outline:none}@media (min-width: 66rem){:host(cds-header-menu-button){display:none}}:host(cds-header-menu-button[collapse-mode=fixed]){display:none}@media (min-width: 66rem){:host(cds-header-menu-button[collapse-mode=rail]){display:block}}:host(cds-header-name){display:content;block-size:100%}:host(cds-header-name) a{box-sizing:border-box}:host(cds-switcher-item) a{box-sizing:border-box}:host(cds-switcher-item:nth-child(1)){margin-block-start:1rem}
`,k=pe(Cn);var On=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Hn=(n,t,a,s)=>{for(var e=s>1?void 0:s?In(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&On(t,a,e),e};let ue=class extends v{connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","banner"),super.connectedCallback()}render(){return l` <slot></slot> `}};ue.styles=k;ue=Hn([h(`${i}-header`)],ue);var Nn=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,R=(n,t,a,s)=>{for(var e=s>1?void 0:s?jn(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Nn(t,a,e),e};let $=class extends _n{connectedCallback(){this.tooltipPosition=yn.BOTTOM,super.connectedCallback()}_handleClick(n){const{disabled:t}=this;if(t)n.stopPropagation();else{const a=document.querySelector(`#${this.panelId}`);if(a){a.getAttribute("expanded")?a.removeAttribute("expanded"):a.setAttribute("expanded","true");const e=!this.active;this.active=e}}}updated(){this._buttonNode&&this._buttonNode.classList.add(`${i}--header__action`)}shouldUpdate(n){return n.has("active")&&(this.active?(this._buttonNode.classList.add(`${i}--header__action--active`),this.buttonLabelActive&&(this.tooltipText=this.buttonLabelActive)):(this._buttonNode.classList.remove(`${i}--header__action--active`),this.buttonLabelInactive&&(this.tooltipText=this.buttonLabelInactive))),!0}};$.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};$.styles=k;R([me("button")],$.prototype,"_buttonNode",2);R([c({type:Boolean,reflect:!0})],$.prototype,"active",2);R([c({type:String,attribute:"panel-id",reflect:!0})],$.prototype,"panelId",2);R([c({attribute:"button-label-active"})],$.prototype,"buttonLabelActive",2);R([c({attribute:"button-label-inactive"})],$.prototype,"buttonLabelInactive",2);R([U("click",{capture:!0})],$.prototype,"_handleClick",1);$=R([h(`${i}-header-global-action`)],$);var Pn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,H=(n,t,a,s)=>{for(var e=s>1?void 0:s?An(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Pn(t,a,e),e};let g=class extends hn(O(v)){constructor(){super(...arguments),this._hasActiveChildren=!1,this.expanded=!1,this.isActive=!1,this.triggerContent=""}_handleClick(){this._handleUserInitiatedToggle()}_handleKeydownTrigger({key:n}){(n==="Esc"||n==="Escape")&&this._handleUserInitiatedToggle(!1)}_handleUserInitiatedToggle(n=!this.expanded){this.expanded=n,n||this._topMenuItem.focus()}_handleBlur({relatedTarget:n}){this.contains(n)||(this.expanded=!1)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","listitem");const{selectorItem:n}=this.constructor;f(this.querySelectorAll(n),t=>{t.isActive===!0&&(this._hasActiveChildren=!0)}),super.connectedCallback()}updated(n){if(n.has("expanded")){const{selectorItem:t}=this.constructor,{expanded:a}=this;f(this.querySelectorAll(t),s=>{s.tabIndex=a?0:-1})}}render(){const{expanded:n,isActive:t,triggerContent:a,menuLabel:s,_hasActiveChildren:e,_handleClick:d}=this,r=L({[`${i}--header__menu-item`]:!0,[`${i}--header__menu-title`]:!0,[`${i}--header__menu-item--current`]:t||e&&!n});return l`
      <a
        part="trigger"
        role="button"
        tabindex="0"
        class="${r}"
        href="javascript:void 0"
        aria-haspopup="menu"
        aria-expanded="${String(!!n)}"
        @click=${d}>
        ${a}${kn({part:"trigger-icon",class:`${i}--header__menu-arrow`})}
      </a>
      <ul
        part="menu-body"
        class="${i}--header__menu"
        aria-label="${C(s)}">
        <slot></slot>
      </ul>
    `}static get selectorItem(){return`${i}-header-menu-item`}};g.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};g.styles=k;H([me('[part="trigger"]')],g.prototype,"_topMenuItem",2);H([U("keydown")],g.prototype,"_handleKeydownTrigger",1);H([U("focusout")],g.prototype,"_handleBlur",1);H([c({type:Boolean,reflect:!0})],g.prototype,"expanded",2);H([c({type:Boolean,attribute:"is-active",reflect:!0})],g.prototype,"isActive",2);H([c({attribute:"trigger-content"})],g.prototype,"triggerContent",2);H([c({attribute:"menu-label"})],g.prototype,"menuLabel",2);g=H([h(`${i}-header-menu`)],g);const Mn=({children:n,...t}={})=>X`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${W(t)}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${n}<path d="M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"></path></svg>`;var Bn=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,E=(n,t,a,s)=>{for(var e=s>1?void 0:s?Dn(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Bn(t,a,e),e};let w=class extends O(v){constructor(){super(...arguments),this.active=!1,this.buttonLabelActive="Close navigation menu",this.buttonLabelInactive="Open navigation menu",this.collapseMode=m.RESPONSIVE,this.disabled=!1,this.isNotChildOfHeader=!1}_handleClick(){const n=!this.active;this.active=n,this.dispatchEvent(new CustomEvent(this.constructor.eventToggle,{bubbles:!0,cancelable:!0,composed:!0,detail:{active:n}}))}render(){const{active:n,buttonLabelActive:t,buttonLabelInactive:a,disabled:s,_handleClick:e}=this,d=n?t:a,r=L({[`${i}--header__action`]:!0,[`${i}--header__menu-trigger`]:!0,[`${i}--header__menu-toggle`]:!0,[`${i}--header__action--active`]:n});return l`
      <button
        part="button"
        class="${r}"
        ?disabled=${s}
        aria-label="${C(d)}"
        @click=${e}>
        ${(n?xn:Mn)({slot:"toggle-icon"})}
      </button>
    `}static get eventToggle(){return`${i}-header-menu-button-toggled`}};w.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};w.styles=k;E([c({type:Boolean,reflect:!0})],w.prototype,"active",2);E([c({attribute:"button-label-active"})],w.prototype,"buttonLabelActive",2);E([c({attribute:"button-label-inactive"})],w.prototype,"buttonLabelInactive",2);E([c({reflect:!0,attribute:"collapse-mode"})],w.prototype,"collapseMode",2);E([c({type:Boolean,reflect:!0})],w.prototype,"disabled",2);E([c({type:Boolean,attribute:"is-not-child-of-header"})],w.prototype,"isNotChildOfHeader",2);w=E([h(`${i}-header-menu-button`)],w);var Rn=Object.defineProperty,En=Object.getOwnPropertyDescriptor,N=(n,t,a,s)=>{for(var e=s>1?void 0:s?En(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Rn(t,a,e),e};let b=class extends O(v){constructor(){super(...arguments),this.isActive=!1,this.role="listitem"}render(){const{ariaCurrent:n,href:t,isActive:a,title:s,rel:e,target:d}=this,r=L({[`${i}--header__menu-item`]:!0,[`${i}--header__menu-item--current`]:a&&n!=="page"});return l`
      <a
        part="link"
        class="${r}"
        tabindex="0"
        href="${C(t)}"
        rel="${C(e)}"
        target="${C(d)}">
        <span part="title" class="${i}--text-truncate--end"
          ><slot>${s}</slot></span
        >
      </a>
    `}};b.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};b.styles=k;N([c()],b.prototype,"href",2);N([c({reflect:!0})],b.prototype,"rel",2);N([c({reflect:!0})],b.prototype,"target",2);N([c()],b.prototype,"title",2);N([c({type:Boolean,attribute:"is-active"})],b.prototype,"isActive",2);N([c({type:String,attribute:"aria-current"})],b.prototype,"ariaCurrent",2);N([c({reflect:!0})],b.prototype,"role",2);b=N([h(`${i}-header-nav-item`)],b);const Fn=b;var Tn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Xn=(n,t,a,s)=>{for(var e=s>1?void 0:s?Vn(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Tn(t,a,e),e};let ke=class extends Fn{};ke=Xn([h(`${i}-header-menu-item`)],ke);var Wn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,_e=(n,t,a,s)=>{for(var e=s>1?void 0:s?Un(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Wn(t,a,e),e};let T=class extends O(v){render(){const{href:n,prefix:t}=this,a=t?l`
          <span part="prefix" class="${i}--header__name--prefix"
            >${t}</span
          >
        `:void 0;return l`
      <a part="link" class="${i}--header__name" href="${C(n)}"
        >${a}&nbsp;<slot></slot
      ></a>
    `}};T.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};T.styles=k;_e([c()],T.prototype,"href",2);_e([c()],T.prototype,"prefix",2);T=_e([h(`${i}-header-name`)],T);var qn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,bn=(n,t,a,s)=>{for(var e=s>1?void 0:s?Yn(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&qn(t,a,e),e};let le=class extends v{connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","navigation"),super.connectedCallback()}render(){const{menuBarLabel:n}=this;return l`
      <div part="divider" class="${i}-ce--header__divider"></div>
      <ul
        part="menu-body"
        class="${i}--header__menu-bar"
        aria-label="${n}">
        <slot></slot>
      </ul>
    `}};le.styles=k;bn([c({attribute:"menu-bar-label"})],le.prototype,"menuBarLabel",2);le=bn([h(`${i}-header-nav`)],le);var Zn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,fn=(n,t,a,s)=>{for(var e=s>1?void 0:s?Gn(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Zn(t,a,e),e};let ce=class extends v{render(){return l`<slot></slot>`}};ce.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};ce.styles=k;fn([c({type:Boolean,reflect:!0})],ce.prototype,"expanded",2);ce=fn([h(`${i}-header-panel`)],ce);var Kn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,gn=(n,t,a,s)=>{for(var e=s>1?void 0:s?Jn(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Kn(t,a,e),e};let ve=class extends v{constructor(){super(...arguments),this.hasDivider=!1}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","list"),super.connectedCallback()}render(){return l`<slot></slot>`}};ve.styles=D;gn([c({type:Boolean,attribute:"has-divider"})],ve.prototype,"hasDivider",2);ve=gn([h(`${i}-header-side-nav-items`)],ve);var Qn=Object.defineProperty,et=Object.getOwnPropertyDescriptor,nt=(n,t,a,s)=>{for(var e=s>1?void 0:s?et(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&Qn(t,a,e),e};let be=class extends v{connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","separator"),super.connectedCallback()}};be.styles=D;be=nt([h(`${i}-side-nav-divider`)],be);var tt=Object.defineProperty,st=Object.getOwnPropertyDescriptor,at=(n,t,a,s)=>{for(var e=s>1?void 0:s?st(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&tt(t,a,e),e};let fe=class extends v{connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","list"),super.connectedCallback()}render(){return l`<slot></slot>`}};fe.styles=D;fe=at([h(`${i}-side-nav-items`)],fe);var it=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,j=(n,t,a,s)=>{for(var e=s>1?void 0:s?dt(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&it(t,a,e),e};let _=class extends O(v){constructor(){super(...arguments),this.active=!1,this.href="",this.large=!1}_handleSlotChangeTitleIcon({target:n}){var t;(t=this._titleIconContainerNode)==null||t.toggleAttribute("hidden",n.assignedNodes().length===0)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","listitem"),super.connectedCallback()}render(){const{active:n,href:t,rel:a,target:s,title:e,_handleSlotChangeTitleIcon:d}=this,r=L({[`${i}--side-nav__link`]:!0,[`${i}--side-nav__link--current`]:n});return l`
      <a
        part="link"
        class="${r}"
        href="${t}"
        rel="${C(a)}"
        target="${C(s)}">
        <div
          id="title-icon-container"
          part="title-icon-container"
          hidden
          class="${i}--side-nav__icon">
          <slot
            name="title-icon"
            @slotchange=${d}></slot>
        </div>
        <span part="title" class="${i}--side-nav__link-text">
          <slot>${e}</slot>
        </span>
      </a>
    `}};_.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};_.styles=D;j([me("#title-icon-container")],_.prototype,"_titleIconContainerNode",2);j([c({type:Boolean,reflect:!0})],_.prototype,"active",2);j([c()],_.prototype,"href",2);j([c({reflect:!0})],_.prototype,"rel",2);j([c({reflect:!0})],_.prototype,"target",2);j([c({type:Boolean,reflect:!0})],_.prototype,"large",2);j([c()],_.prototype,"title",2);_=j([h(`${i}-side-nav-link`)],_);const rt=({children:n,...t}={})=>X`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${W(t)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${n}<path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>`;var ot=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,F=(n,t,a,s)=>{for(var e=s>1?void 0:s?ct(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&ot(t,a,e),e};let y=class extends O(v){constructor(){super(...arguments),this._hasIcon=!1,this.active=!1,this.expanded=!1,this.large=!1,this.forceCollapsed=!1,this.title=""}_handleUserInitiatedToggle(n=!this.expanded){const{eventBeforeToggle:t,eventToggle:a}=this.constructor,s={bubbles:!0,cancelable:!0,composed:!0,detail:{expanded:n}};this.dispatchEvent(new CustomEvent(t,s))&&(this.expanded=n,this.dispatchEvent(new CustomEvent(a,s)))}_handleClickExpando(){this._handleUserInitiatedToggle()}_handleSlotChange({target:n}){const{_hasIcon:t}=this;f(n.assignedNodes(),a=>{a.nodeType===Node.ELEMENT_NODE&&a.toggleAttribute(this.constructor.attribItemHasIcon,t)})}_handleSlotChangeTitleIcon({target:n}){var s;const t=this.constructor,a=n.assignedNodes().length>0;this._hasIcon=a,(s=this._titleIconContainerNode)==null||s.toggleAttribute("hidden",!a),f(this.querySelectorAll(t.selectorItem),e=>{e.toggleAttribute(t.attribItemHasIcon,a)})}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","listitem"),super.connectedCallback()}updated(n){if(n.has("expanded")){const{selectorItem:t}=this.constructor,{expanded:a}=this;f(this.querySelectorAll(t),s=>{s.tabIndex=a?0:-1})}}render(){const{expanded:n,forceCollapsed:t,title:a,_handleClickExpando:s,_handleSlotChange:e,_handleSlotChangeTitleIcon:d}=this;return l`
      <button
        type="button"
        part="expando"
        aria-haspopup="true"
        aria-expanded="${String(!!(n&&!t))}"
        class="${i}--side-nav__submenu"
        @click=${s}>
        <div
          id="title-icon-container"
          part="title-icon-container"
          hidden
          class="${i}--side-nav__icon">
          <slot
            name="title-icon"
            @slotchange=${d}></slot>
        </div>
        <span part="title" class="${i}--side-nav__submenu-title"
          >${a}</span
        >
        <div
          part="expando-icon-container"
          class="${i}--side-nav__icon ${i}--side-nav__icon--small ${i}--side-nav__submenu-chevron">
          ${rt({part:"expando-icon"})}
        </div>
      </button>
      <ul part="menu-body" class="${i}--side-nav__menu">
        <slot @slotchange=${e}></slot>
      </ul>
    `}static get selectorItem(){return`${i}-side-nav-menu-item`}static get eventBeforeToggle(){return`${i}-side-nav-menu-beingtoggled`}static get eventToggle(){return`${i}-side-nav-menu-toggled`}};y.attribItemHasIcon="parent-has-icon";y.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};y.styles=D;F([me("#title-icon-container")],y.prototype,"_titleIconContainerNode",2);F([c({type:Boolean,reflect:!0})],y.prototype,"active",2);F([c({type:Boolean,reflect:!0})],y.prototype,"expanded",2);F([c({type:Boolean,reflect:!0})],y.prototype,"large",2);F([c({type:Boolean,reflect:!0,attribute:"force-collapsed"})],y.prototype,"forceCollapsed",2);F([c()],y.prototype,"title",2);y=F([h(`${i}-side-nav-menu`)],y);var lt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,he=(n,t,a,s)=>{for(var e=s>1?void 0:s?vt(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&lt(t,a,e),e};let P=class extends O(v){constructor(){super(...arguments),this.active=!1,this.href=""}shouldUpdate(n){if(n.has("active")&&this.active){const{selectorMenu:t}=this.constructor,a=this.closest(t);a&&(a.active=!0)}return!0}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","button"),super.connectedCallback()}render(){const{active:n,href:t,title:a}=this,s=L({[`${i}--side-nav__link`]:!0,[`${i}--side-nav__link--current`]:n});return l`
      <a part="link" class="${s}" href="${t}">
        <span part="title" class="${i}--side-nav__link-text">
          <slot>${a}</slot>
        </span>
      </a>
    `}static get selectorMenu(){return`${i}-side-nav-menu`}};P.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};P.styles=D;he([c({type:Boolean,reflect:!0})],P.prototype,"active",2);he([c()],P.prototype,"href",2);he([c()],P.prototype,"title",2);P=he([h(`${i}-side-nav-menu-item`)],P);var pt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,ye=(n,t,a,s)=>{for(var e=s>1?void 0:s?mt(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&pt(t,a,e),e};let V=class extends v{connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","list"),super.connectedCallback()}render(){return l`<slot></slot>`}};V.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};V.styles=k;ye([c({type:String,attribute:"aria-label"})],V.prototype,"ariaLabel",2);ye([c({type:String,attribute:"aria-labelledby"})],V.prototype,"ariaLabelledBy",2);V=ye([h(`${i}-switcher`)],V);var ht=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,bt=(n,t,a,s)=>{for(var e=s>1?void 0:s?ut(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&ht(t,a,e),e};let ge=class extends v{connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","separator"),super.connectedCallback()}};ge.styles=k;ge=bt([h(`${i}-switcher-divider`)],ge);var ft=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,q=(n,t,a,s)=>{for(var e=s>1?void 0:s?gt(t,a):t,d=n.length-1,r;d>=0;d--)(r=n[d])&&(e=(s?r(t,a,e):r(e))||e);return s&&e&&ft(t,a,e),e};let S=class extends O(v){constructor(){super(...arguments),this.href="",this.selected=!1,this.tabIndex=0}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","listitem"),super.connectedCallback()}render(){const{href:n,selected:t,ariaLabel:a,ariaLabelledBy:s,tabIndex:e}=this,d=L({[`${i}--switcher__item-link`]:!0,[`${i}--switcher__item-link--selected`]:t});return l`
      <a
        part="link"
        aria-label="${a}"
        aria-labelledby="${s}"
        tabindex="${e}"
        class="${d}"
        href="${n}">
        <slot></slot>
      </a>
    `}};S.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};S.styles=k;q([c({type:String,attribute:"aria-label"})],S.prototype,"ariaLabel",2);q([c({type:String,attribute:"aria-labelledby"})],S.prototype,"ariaLabelledBy",2);q([c()],S.prototype,"href",2);q([c({type:Boolean,reflect:!0})],S.prototype,"selected",2);q([c({type:Number,reflect:!0,attribute:"tab-index"})],S.prototype,"tabIndex",2);S=q([h(`${i}-switcher-item`)],S);const _t=`cds-header~cds-side-nav{block-size:calc(100% - 3rem);margin-block-start:3rem}.cds-ce-demo-devenv--container{transition:margin-left .11s cubic-bezier(.2,0,1,.9);will-change:margin-left}@media (min-width: 66rem){.cds-ce-demo-devenv--container{margin-inline-start:16rem}}
`,u=pe(_t);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const o="https://www.carbondesignsystem.com/",z=({useResponsiveOffset:n=!0})=>{const t=L({[`${i}--col-lg-13`]:!0,[`${i}--offset-lg-3`]:n}),a=()=>{var s;(s=document.querySelector("cds-modal"))==null||s.toggleAttribute("open")};return l`
    <style type="text/css">
      ${wn.cssText}
    </style>
    <main class="${i}--content ${i}-ce-demo-devenv--ui-shell-content">
      <div class="${i}--grid">
        <div class="${i}--row">
          <div
            class="${t}"
            style="${n?"":"margin-left: 16rem;"}">
            <h2 style="margin: 0 0 30px">Purpose and function</h2>
            <p>
              The shell is perhaps the most crucial piece of any UI built with
              <a href="www.carbondesignsystem.com"> Carbon</a>. It contains the
              shared navigation framework for the entire design system and ties
              the products in IBM’s portfolio together in a cohesive and elegant
              way. The shell is the home of the topmost navigation, where users
              can quickly and dependably gain their bearings and move between
              pages.
              <br />
              <br />
              The shell was designed with maximum flexibility built in, to serve
              the needs of a broad range of products and users. Adopting the
              shell ensures compliance with IBM design standards, simplifies
              development efforts, and provides great user experiences. All IBM
              products built with Carbon are required to use the shell’s header.
              <br />
              <br />
              To better understand the purpose and function of the UI shell,
              consider the “shell” of MacOS, which contains the Apple menu,
              top-level navigation, and universal, OS-level controls at the top
              of the screen, as well as a universal dock along the bottom or
              side of the screen. The Carbon UI shell is roughly analogous in
              function to these parts of the Mac UI. For example, the app
              switcher portion of the shell can be compared to the dock in
              MacOS.
            </p>
            <h2 style="margin: 30px 0px">Header responsive behavior</h2>
            <p>
              As a header scales down to fit smaller screen sizes, headers with
              persistent side nav menus should have the side nav collapse into
              “hamburger” menu. See the example to better understand responsive
              behavior of the header.
            </p>
            <h2 style="margin: 30px 0px">Secondary navigation</h2>
            <p>
              The side-nav contains secondary navigation and fits below the
              header. It can be configured to be either fixed-width or flexible,
              with only one level of nested items allowed. Both links and
              category lists can be used in the side-nav and may be mixed
              together. There are several configurations of the side-nav, but
              only one configuration should be used per product section. If tabs
              are needed on a page when using a side-nav, then the tabs are
              secondary in hierarchy to the side-nav.
            </p>
            <cds-modal>
              <cds-modal-header>
                <cds-modal-close-button></cds-modal-close-button>
                <cds-modal-label>Account resources</cds-modal-label>
                <cds-modal-heading>Add a custom domain</cds-modal-heading>
              </cds-modal-header>
              <cds-modal-body>
                <cds-modal-body-content description>
                  Custom domains direct requests for your apps in this Cloud
                  Foundry organization to a URL that you own. A custom domain
                  can be a shared domain, a shared subdomain, or a shared domain
                  and host.
                </cds-modal-body-content>
              </cds-modal-body>
              <cds-modal-footer>
                <cds-modal-footer-button kind="secondary" data-modal-close
                  >Cancel</cds-modal-footer-button
                >
                <cds-modal-footer-button>Add</cds-modal-footer-button>
              </cds-modal-footer>
            </cds-modal>
            <cds-button @click="${a}">Launch modal</cds-button>
          </div>
        </div>
      </div>
    </main>
  `},Y={name:"Fixed SideNav",render:()=>{const n=l`
      <style>
        ${u}
      </style>
      <cds-side-nav
        is-not-child-of-header
        usage-mode="${un.REGULAR}"
        aria-label="Side navigation"
        collapse-mode="${m.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      ${z({useResponsiveOffset:!1})}
    `;return n.hasMainTag=!0,n}},Z={name:"Fixed SideNav w/Divider",render:()=>{const n=l`
      <style>
        ${u}
      </style>
      <cds-side-nav
        is-not-child-of-header
        aria-label="Side navigation"
        collapse-mode="${m.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-divider></cds-side-nav-divider>
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      ${z({useResponsiveOffset:!1})}
    `;return n.hasMainTag=!0,n}},G={name:"Fixed SideNav w/ Icons",render:()=>{const n=l`
      <style>
        ${u}
      </style>
      <cds-side-nav
        is-not-child-of-header
        aria-label="Side navigation"
        collapse-mode="${m.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu title="Category title">
            ${p({slot:"title-icon"})}
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${p({slot:"title-icon"})}
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${p({slot:"title-icon"})}
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >${p({slot:"title-icon"})}Link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >${p({slot:"title-icon"})}Link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      ${z({useResponsiveOffset:!1})}
    `;return n.hasMainTag=!0,n}},K={render:()=>l` <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
      </cds-header>`},J={name:"Header Base w/ Actions",render:()=>l` <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <div class="${i}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            ${A({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            ${M({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            ${B({slot:"icon"})}
          </cds-header-global-action>
        </div>
      </cds-header>`},Q={name:"Header Base w/ Actions and Right Panel",render:()=>l` <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <div class="${i}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            ${A({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            panel-id="notification-panel"
            aria-label="Notification"
            tooltip-text="Notification">
            ${M({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            ${B({slot:"icon"})}
          </cds-header-global-action>
        </div>
        <cds-header-panel
          id="notification-panel"
          expanded
          aria-label="Header Panel"></cds-header-panel>
      </cds-header>`},ee={name:"Header Base w/ Actions and Switcher",render:()=>l` <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <div class="${i}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            ${A({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            ${M({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            button-label-active="Close switcher"
            button-label-inactive="Open switcher"
            tooltip-text="Open switcher"
            panel-id="switcher-panel"
            tooltip-alignment="right">
            ${B({slot:"icon"})}
          </cds-header-global-action>
        </div>
        <cds-header-panel id="switcher-panel" aria-label="Header Panel">
          <cds-switcher aria-label="Switcher Container">
            <cds-switcher-item aria-label="Link 1" href="#"
              >Link 1</cds-switcher-item
            >
            <cds-switcher-divider></cds-switcher-divider>
            <cds-switcher-item aria-label="Link 2" href="#"
              >Link 2</cds-switcher-item
            >
            <cds-switcher-item aria-label="Link 3" href="#"
              >Link 3</cds-switcher-item
            >
            <cds-switcher-item aria-label="Link 4" href="#"
              >Link 4</cds-switcher-item
            >
            <cds-switcher-item aria-label="Link 5" href="#"
              >Link 5</cds-switcher-item
            >
            <cds-switcher-divider></cds-switcher-divider>
            <cds-switcher-item aria-label="Link 6" href="#"
              >Link 6</cds-switcher-item
            >
          </cds-switcher>
        </cds-header-panel>
      </cds-header>
      ${z({useResponsiveOffset:!0})}`},ne={name:"Header Base w/ Navigation, Actions and SideNav",render:()=>l` <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0"
            >Link 1</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 2</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 3</cds-header-nav-item
          >
          <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 1</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 2</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 3</cds-header-menu-item
            >
          </cds-header-menu>
        </cds-header-nav>
        <div class="${i}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            ${A({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            ${M({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            ${B({slot:"icon"})}
          </cds-header-global-action>
        </div>
        <cds-side-nav
          aria-label="Side navigation"
          collapse-mode="${m.RESPONSIVE}">
          <cds-side-nav-items>
            <cds-header-side-nav-items has-divider>
              <cds-side-nav-link href="javascript:void(0)">
                Link 1
              </cds-side-nav-link>
              <cds-side-nav-link href="javascript:void(0)">
                Link 2
              </cds-side-nav-link>
              <cds-side-nav-link href="javascript:void(0)">
                Link 3
              </cds-side-nav-link>
              <cds-side-nav-menu title="Link 4">
                <cds-side-nav-menu-item href="${o}">
                  Sub-link 1
                </cds-side-nav-menu-item>
                <cds-side-nav-menu-item href="${o}">
                  Sub-link 2
                </cds-side-nav-menu-item>
                <cds-side-nav-menu-item href="${o}">
                  Sub-link 3
                </cds-side-nav-menu-item>
              </cds-side-nav-menu>
            </cds-header-side-nav-items>
            <cds-side-nav-menu title="Category title">
              ${p({slot:"title-icon"})}
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              ${p({slot:"title-icon"})}
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item aria-current="page" href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              ${p({slot:"title-icon"})}
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item active href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-link href="javascript:void(0)"
              >${p({slot:"title-icon"})}Link</cds-side-nav-link
            >
            <cds-side-nav-link href="javascript:void(0)"
              >${p({slot:"title-icon"})}Link</cds-side-nav-link
            >
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>
      ${z({useResponsiveOffset:!0})}`},te={name:"Header Base w/ Navigation and Actions",render:()=>l` <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0"
            >Link 1</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 2</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 3</cds-header-nav-item
          >
          <cds-header-menu
            is-active
            menu-label="Link 4"
            trigger-content="Link 4">
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 1</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 2</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 3</cds-header-menu-item
            >
          </cds-header-menu>
        </cds-header-nav>
        <div class="${i}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            ${A({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            ${M({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            ${B({slot:"icon"})}
          </cds-header-global-action>
        </div>
        <cds-side-nav
          is-not-persistent
          aria-label="Side navigation"
          collapse-mode="${m.RESPONSIVE}">
          <cds-side-nav-items>
            <cds-side-nav-link href="javascript:void(0)">
              Link 1
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 2
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 3
            </cds-side-nav-link>
            <cds-side-nav-menu title="Link 4">
              <cds-side-nav-menu-item href="${o}">
                Sub-link 1
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Sub-link 2
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Sub-link 3
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>`},se={name:"Header Base w/ Navigation",render:()=>l` <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0"
            >Link 1</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 2</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 3</cds-header-nav-item
          >
          <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 1</cds-header-menu-item
            >
            <cds-header-menu-item is-active href="javascript:void 0"
              >Sub-link 2</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 3</cds-header-menu-item
            >
          </cds-header-menu>
        </cds-header-nav>
        <cds-side-nav
          is-not-persistent
          aria-label="Side navigation"
          collapse-mode="${m.RESPONSIVE}">
          <cds-side-nav-items>
            <cds-side-nav-link href="javascript:void(0)">
              Link 1
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 2
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 3
            </cds-side-nav-link>
            <cds-side-nav-menu title="Link 4">
              <cds-side-nav-menu-item href="${o}">
                Sub-link 1
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Sub-link 2
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Sub-link 3
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>`},ae={name:"Header Base w/ SideNav",render:()=>{const n=l`
      <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-side-nav
          aria-label="Side navigation"
          collapse-mode="${m.RESPONSIVE}">
          <cds-side-nav-items>
            <cds-side-nav-menu title="Category title">
              ${p({slot:"title-icon"})}
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              ${p({slot:"title-icon"})}
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item
                active
                aria-current="page"
                href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              ${p({slot:"title-icon"})}
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-link href="javascript:void(0)"
              >${p({slot:"title-icon"})}Link</cds-side-nav-link
            >
            <cds-side-nav-link href="javascript:void(0)"
              >${p({slot:"title-icon"})}Link</cds-side-nav-link
            >
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>
      ${z({useResponsiveOffset:!0})}
    `;return n.hasMainTag=!0,n}},ie={name:"Header Base w/ SkipToContent",render:()=>l` <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-skip-to-content></cds-skip-to-content>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <div class="${i}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            ${A({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            ${M({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            ${B({slot:"icon"})}
          </cds-header-global-action>
        </div>
      </cds-header>
      ${z({useResponsiveOffset:!0})}`},de={name:"SideNav Rail",render:()=>l` <style>
        ${u}
      </style>
      <cds-side-nav
        aria-label="Side navigation"
        collapse-mode="${m.RAIL}">
        <cds-side-nav-items>
          <cds-side-nav-menu title="Category title">
            ${p({slot:"title-icon"})}
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${p({slot:"title-icon"})}
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${p({slot:"title-icon"})}
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >${p({slot:"title-icon"})}Link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >${p({slot:"title-icon"})}Link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      ${z({useResponsiveOffset:!0})}`},re={name:"SideNav Rail w/ Header",render:()=>l` <style>
        ${u}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0"
            >Link 1</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 2</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 3</cds-header-nav-item
          >
          <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 1</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 2</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 3</cds-header-menu-item
            >
          </cds-header-menu>
        </cds-header-nav>
        <div class="${i}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            ${A({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            ${M({slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            ${B({slot:"icon"})}
          </cds-header-global-action>
        </div>
        <cds-side-nav
          aria-label="Side navigation"
          collapse-mode="${m.RAIL}">
          <cds-side-nav-items>
            <cds-side-nav-menu title="Category title">
              ${p({slot:"title-icon"})}
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item
                active
                aria-current="page"
                href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              ${p({slot:"title-icon"})}
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              ${p({slot:"title-icon"})}
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${o}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-link href="javascript:void(0)"
              >${p({slot:"title-icon"})}Link</cds-side-nav-link
            >
            <cds-side-nav-link href="javascript:void(0)"
              >${p({slot:"title-icon"})}Link</cds-side-nav-link
            >
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>
      ${z({useResponsiveOffset:!0})}`},oe={name:"SideNav w/ large side nav items",render:()=>{const n=l`
      <style>
        ${u}
      </style>
      <cds-side-nav
        is-not-child-of-header
        aria-label="Side navigation"
        collapse-mode="${m.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu large title="Large menu">
            <cds-side-nav-menu-item href="${o}">
              Menu 1
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Menu 2
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Menu 3
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link large href="javascript:void(0)"
            >Large link</cds-side-nav-link
          >
          <cds-side-nav-menu large title="Large menu w/icon"
            >${p({slot:"title-icon"})}
            <cds-side-nav-menu-item href="${o}">
              Menu 1
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Menu 2
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${o}">
              Menu 3
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link large href="javascript:void(0)">
            ${p({slot:"title-icon"})} Large link
            w/icon</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      ${z({useResponsiveOffset:!0})}
    `;return n.hasMainTag=!0,n}},yt={title:"Components/UI Shell"};var xe,$e,we;Y.parameters={...Y.parameters,docs:{...(xe=Y.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Fixed SideNav',
  render: () => {
    const result = html\`
      <style>
        \${styles}
      </style>
      <cds-side-nav
        is-not-child-of-header
        usage-mode="\${SIDE_NAV_USAGE_MODE.REGULAR}"
        aria-label="Side navigation"
        collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      \${StoryContent({
      useResponsiveOffset: false
    })}
    \`;
    (result as any).hasMainTag = true;
    return result;
  }
}`,...(we=($e=Y.parameters)==null?void 0:$e.docs)==null?void 0:we.source}}};var ze,Le,Se;Z.parameters={...Z.parameters,docs:{...(ze=Z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Fixed SideNav w/Divider',
  render: () => {
    const result = html\`
      <style>
        \${styles}
      </style>
      <cds-side-nav
        is-not-child-of-header
        aria-label="Side navigation"
        collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="L0 menu">
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              L0 menu item
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-divider></cds-side-nav-divider>
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >L0 link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      \${StoryContent({
      useResponsiveOffset: false
    })}
    \`;
    (result as any).hasMainTag = true;
    return result;
  }
}`,...(Se=(Le=Z.parameters)==null?void 0:Le.docs)==null?void 0:Se.source}}};var Ce,Oe,Ie;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Fixed SideNav w/ Icons',
  render: () => {
    const result = html\`
      <style>
        \${styles}
      </style>
      <cds-side-nav
        is-not-child-of-header
        aria-label="Side navigation"
        collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu title="Category title">
            \${Fade16({
      slot: 'title-icon'
    })}
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            \${Fade16({
      slot: 'title-icon'
    })}
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            \${Fade16({
      slot: 'title-icon'
    })}
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >\${Fade16({
      slot: 'title-icon'
    })}Link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >\${Fade16({
      slot: 'title-icon'
    })}Link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      \${StoryContent({
      useResponsiveOffset: false
    })}
    \`;
    (result as any).hasMainTag = true;
    return result;
  }
}`,...(Ie=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var He,Ne,je;K.parameters={...K.parameters,docs:{...(He=K.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
      </cds-header>\`
}`,...(je=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Pe,Ae,Me;J.parameters={...J.parameters,docs:{...(Pe=J.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Header Base w/ Actions',
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <div class="\${prefix}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            \${Search20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            \${Notification20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            \${SwitcherIcon20({
    slot: 'icon'
  })}
          </cds-header-global-action>
        </div>
      </cds-header>\`
}`,...(Me=(Ae=J.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};var Be,De,Re;Q.parameters={...Q.parameters,docs:{...(Be=Q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Header Base w/ Actions and Right Panel',
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <div class="\${prefix}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            \${Search20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            panel-id="notification-panel"
            aria-label="Notification"
            tooltip-text="Notification">
            \${Notification20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            \${SwitcherIcon20({
    slot: 'icon'
  })}
          </cds-header-global-action>
        </div>
        <cds-header-panel
          id="notification-panel"
          expanded
          aria-label="Header Panel"></cds-header-panel>
      </cds-header>\`
}`,...(Re=(De=Q.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ee,Fe,Te;ee.parameters={...ee.parameters,docs:{...(Ee=ee.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Header Base w/ Actions and Switcher',
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <div class="\${prefix}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            \${Search20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            \${Notification20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            button-label-active="Close switcher"
            button-label-inactive="Open switcher"
            tooltip-text="Open switcher"
            panel-id="switcher-panel"
            tooltip-alignment="right">
            \${SwitcherIcon20({
    slot: 'icon'
  })}
          </cds-header-global-action>
        </div>
        <cds-header-panel id="switcher-panel" aria-label="Header Panel">
          <cds-switcher aria-label="Switcher Container">
            <cds-switcher-item aria-label="Link 1" href="#"
              >Link 1</cds-switcher-item
            >
            <cds-switcher-divider></cds-switcher-divider>
            <cds-switcher-item aria-label="Link 2" href="#"
              >Link 2</cds-switcher-item
            >
            <cds-switcher-item aria-label="Link 3" href="#"
              >Link 3</cds-switcher-item
            >
            <cds-switcher-item aria-label="Link 4" href="#"
              >Link 4</cds-switcher-item
            >
            <cds-switcher-item aria-label="Link 5" href="#"
              >Link 5</cds-switcher-item
            >
            <cds-switcher-divider></cds-switcher-divider>
            <cds-switcher-item aria-label="Link 6" href="#"
              >Link 6</cds-switcher-item
            >
          </cds-switcher>
        </cds-header-panel>
      </cds-header>
      \${StoryContent({
    useResponsiveOffset: true
  })}\`
}`,...(Te=(Fe=ee.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};var Ve,Xe,We;ne.parameters={...ne.parameters,docs:{...(Ve=ne.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Header Base w/ Navigation, Actions and SideNav',
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0"
            >Link 1</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 2</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 3</cds-header-nav-item
          >
          <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 1</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 2</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 3</cds-header-menu-item
            >
          </cds-header-menu>
        </cds-header-nav>
        <div class="\${prefix}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            \${Search20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            \${Notification20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            \${SwitcherIcon20({
    slot: 'icon'
  })}
          </cds-header-global-action>
        </div>
        <cds-side-nav
          aria-label="Side navigation"
          collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.RESPONSIVE}">
          <cds-side-nav-items>
            <cds-header-side-nav-items has-divider>
              <cds-side-nav-link href="javascript:void(0)">
                Link 1
              </cds-side-nav-link>
              <cds-side-nav-link href="javascript:void(0)">
                Link 2
              </cds-side-nav-link>
              <cds-side-nav-link href="javascript:void(0)">
                Link 3
              </cds-side-nav-link>
              <cds-side-nav-menu title="Link 4">
                <cds-side-nav-menu-item href="\${linksHref}">
                  Sub-link 1
                </cds-side-nav-menu-item>
                <cds-side-nav-menu-item href="\${linksHref}">
                  Sub-link 2
                </cds-side-nav-menu-item>
                <cds-side-nav-menu-item href="\${linksHref}">
                  Sub-link 3
                </cds-side-nav-menu-item>
              </cds-side-nav-menu>
            </cds-header-side-nav-items>
            <cds-side-nav-menu title="Category title">
              \${Fade16({
    slot: 'title-icon'
  })}
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              \${Fade16({
    slot: 'title-icon'
  })}
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item aria-current="page" href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              \${Fade16({
    slot: 'title-icon'
  })}
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item active href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-link href="javascript:void(0)"
              >\${Fade16({
    slot: 'title-icon'
  })}Link</cds-side-nav-link
            >
            <cds-side-nav-link href="javascript:void(0)"
              >\${Fade16({
    slot: 'title-icon'
  })}Link</cds-side-nav-link
            >
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>
      \${StoryContent({
    useResponsiveOffset: true
  })}\`
}`,...(We=(Xe=ne.parameters)==null?void 0:Xe.docs)==null?void 0:We.source}}};var Ue,qe,Ye;te.parameters={...te.parameters,docs:{...(Ue=te.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Header Base w/ Navigation and Actions',
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0"
            >Link 1</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 2</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 3</cds-header-nav-item
          >
          <cds-header-menu
            is-active
            menu-label="Link 4"
            trigger-content="Link 4">
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 1</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 2</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 3</cds-header-menu-item
            >
          </cds-header-menu>
        </cds-header-nav>
        <div class="\${prefix}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            \${Search20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            \${Notification20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            \${SwitcherIcon20({
    slot: 'icon'
  })}
          </cds-header-global-action>
        </div>
        <cds-side-nav
          is-not-persistent
          aria-label="Side navigation"
          collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.RESPONSIVE}">
          <cds-side-nav-items>
            <cds-side-nav-link href="javascript:void(0)">
              Link 1
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 2
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 3
            </cds-side-nav-link>
            <cds-side-nav-menu title="Link 4">
              <cds-side-nav-menu-item href="\${linksHref}">
                Sub-link 1
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Sub-link 2
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Sub-link 3
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>\`
}`,...(Ye=(qe=te.parameters)==null?void 0:qe.docs)==null?void 0:Ye.source}}};var Ze,Ge,Ke;se.parameters={...se.parameters,docs:{...(Ze=se.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'Header Base w/ Navigation',
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0"
            >Link 1</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 2</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 3</cds-header-nav-item
          >
          <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 1</cds-header-menu-item
            >
            <cds-header-menu-item is-active href="javascript:void 0"
              >Sub-link 2</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 3</cds-header-menu-item
            >
          </cds-header-menu>
        </cds-header-nav>
        <cds-side-nav
          is-not-persistent
          aria-label="Side navigation"
          collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.RESPONSIVE}">
          <cds-side-nav-items>
            <cds-side-nav-link href="javascript:void(0)">
              Link 1
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 2
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 3
            </cds-side-nav-link>
            <cds-side-nav-menu title="Link 4">
              <cds-side-nav-menu-item href="\${linksHref}">
                Sub-link 1
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Sub-link 2
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Sub-link 3
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>\`
}`,...(Ke=(Ge=se.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.source}}};var Je,Qe,en;ae.parameters={...ae.parameters,docs:{...(Je=ae.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'Header Base w/ SideNav',
  render: () => {
    const result = html\`
      <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-side-nav
          aria-label="Side navigation"
          collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.RESPONSIVE}">
          <cds-side-nav-items>
            <cds-side-nav-menu title="Category title">
              \${Fade16({
      slot: 'title-icon'
    })}
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              \${Fade16({
      slot: 'title-icon'
    })}
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item
                active
                aria-current="page"
                href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              \${Fade16({
      slot: 'title-icon'
    })}
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-link href="javascript:void(0)"
              >\${Fade16({
      slot: 'title-icon'
    })}Link</cds-side-nav-link
            >
            <cds-side-nav-link href="javascript:void(0)"
              >\${Fade16({
      slot: 'title-icon'
    })}Link</cds-side-nav-link
            >
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>
      \${StoryContent({
      useResponsiveOffset: true
    })}
    \`;
    (result as any).hasMainTag = true;
    return result;
  }
}`,...(en=(Qe=ae.parameters)==null?void 0:Qe.docs)==null?void 0:en.source}}};var nn,tn,sn;ie.parameters={...ie.parameters,docs:{...(nn=ie.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  name: 'Header Base w/ SkipToContent',
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-skip-to-content></cds-skip-to-content>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <div class="\${prefix}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            \${Search20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            \${Notification20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            \${SwitcherIcon20({
    slot: 'icon'
  })}
          </cds-header-global-action>
        </div>
      </cds-header>
      \${StoryContent({
    useResponsiveOffset: true
  })}\`
}`,...(sn=(tn=ie.parameters)==null?void 0:tn.docs)==null?void 0:sn.source}}};var an,dn,rn;de.parameters={...de.parameters,docs:{...(an=de.parameters)==null?void 0:an.docs,source:{originalSource:`{
  name: 'SideNav Rail',
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-side-nav
        aria-label="Side navigation"
        collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.RAIL}">
        <cds-side-nav-items>
          <cds-side-nav-menu title="Category title">
            \${Fade16({
    slot: 'title-icon'
  })}
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            \${Fade16({
    slot: 'title-icon'
  })}
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            \${Fade16({
    slot: 'title-icon'
  })}
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >\${Fade16({
    slot: 'title-icon'
  })}Link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >\${Fade16({
    slot: 'title-icon'
  })}Link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      \${StoryContent({
    useResponsiveOffset: true
  })}\`
}`,...(rn=(dn=de.parameters)==null?void 0:dn.docs)==null?void 0:rn.source}}};var on,cn,ln;re.parameters={...re.parameters,docs:{...(on=re.parameters)==null?void 0:on.docs,source:{originalSource:`{
  name: 'SideNav Rail w/ Header',
  render: () => html\` <style>
        \${styles}
      </style>
      <cds-header aria-label="IBM Platform Name">
        <cds-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"></cds-header-menu-button>
        <cds-header-name href="javascript:void 0" prefix="IBM"
          >[Platform]</cds-header-name
        >
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0"
            >Link 1</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 2</cds-header-nav-item
          >
          <cds-header-nav-item href="javascript:void 0"
            >Link 3</cds-header-nav-item
          >
          <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 1</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 2</cds-header-menu-item
            >
            <cds-header-menu-item href="javascript:void 0"
              >Sub-link 3</cds-header-menu-item
            >
          </cds-header-menu>
        </cds-header-nav>
        <div class="\${prefix}--header__global">
          <cds-header-global-action aria-label="Search" tooltip-text="Search">
            \${Search20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification">
            \${Notification20({
    slot: 'icon'
  })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right">
            \${SwitcherIcon20({
    slot: 'icon'
  })}
          </cds-header-global-action>
        </div>
        <cds-side-nav
          aria-label="Side navigation"
          collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.RAIL}">
          <cds-side-nav-items>
            <cds-side-nav-menu title="Category title">
              \${Fade16({
    slot: 'title-icon'
  })}
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item
                active
                aria-current="page"
                href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              \${Fade16({
    slot: 'title-icon'
  })}
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-menu title="Category title">
              \${Fade16({
    slot: 'title-icon'
  })}
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="\${linksHref}">
                Link
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
            <cds-side-nav-link href="javascript:void(0)"
              >\${Fade16({
    slot: 'title-icon'
  })}Link</cds-side-nav-link
            >
            <cds-side-nav-link href="javascript:void(0)"
              >\${Fade16({
    slot: 'title-icon'
  })}Link</cds-side-nav-link
            >
          </cds-side-nav-items>
        </cds-side-nav>
      </cds-header>
      \${StoryContent({
    useResponsiveOffset: true
  })}\`
}`,...(ln=(cn=re.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var vn,pn,mn;oe.parameters={...oe.parameters,docs:{...(vn=oe.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  name: 'SideNav w/ large side nav items',
  render: () => {
    const result = html\`
      <style>
        \${styles}
      </style>
      <cds-side-nav
        is-not-child-of-header
        aria-label="Side navigation"
        collapse-mode="\${SIDE_NAV_COLLAPSE_MODE.FIXED}"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-menu large title="Large menu">
            <cds-side-nav-menu-item href="\${linksHref}">
              Menu 1
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Menu 2
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Menu 3
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link large href="javascript:void(0)"
            >Large link</cds-side-nav-link
          >
          <cds-side-nav-menu large title="Large menu w/icon"
            >\${Fade16({
      slot: 'title-icon'
    })}
            <cds-side-nav-menu-item href="\${linksHref}">
              Menu 1
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Menu 2
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="\${linksHref}">
              Menu 3
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link large href="javascript:void(0)">
            \${Fade16({
      slot: 'title-icon'
    })} Large link
            w/icon</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
      \${StoryContent({
      useResponsiveOffset: true
    })}
    \`;
    (result as any).hasMainTag = true;
    return result;
  }
}`,...(mn=(pn=oe.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};const kt=["FixedSideNav","FixedSideNavDivider","FixedSideNavIcons","HeaderBase","HeaderBaseWActions","HeaderBaseWActionsRightPanel","HeaderBaseWActionsSwitcher","HeaderBaseWNavigationActionsAndSideNav","HeaderBaseWNavigationActions","HeaderBaseWNavigation","HeaderBaseWSideNav","HeaderBaseWSkipToContent","SideNavRail","SideNavRailWHeader","SideNavWLargeSideNavItems"],Bt=Object.freeze(Object.defineProperty({__proto__:null,FixedSideNav:Y,FixedSideNavDivider:Z,FixedSideNavIcons:G,HeaderBase:K,HeaderBaseWActions:J,HeaderBaseWActionsRightPanel:Q,HeaderBaseWActionsSwitcher:ee,HeaderBaseWNavigation:se,HeaderBaseWNavigationActions:te,HeaderBaseWNavigationActionsAndSideNav:ne,HeaderBaseWSideNav:ae,HeaderBaseWSkipToContent:ie,SideNavRail:de,SideNavRailWHeader:re,SideNavWLargeSideNavItems:oe,__namedExportsOrder:kt,default:yt},Symbol.toStringTag,{value:"Module"}));export{Bt as U};
