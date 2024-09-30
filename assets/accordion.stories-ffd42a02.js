import{r as K,s as x,x as a}from"./lit-element-266f0592.js";import{p as s,c as z}from"./carbon-element-59fbbccb.js";import{n as r}from"./property-da2637ab.js";import{a as y}from"./collection-helpers-3389bc25.js";import{e as G}from"./class-map-4a7e6437.js";import{s as A}from"./16-dfb8f0c2.js";import{F as H}from"./focus-73f58502.js";import"./skeleton-text-084071b9.js";import"./button-4ef875e3.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=(e=>(e.SMALL="sm",e.MEDIUM="md",e))(h||{}),l=(e=>(e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e))(l||{}),T=(e=>(e.START="start",e.END="END",e))(T||{});const J=`:root{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-one{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-two{--cds-layer: var(--cds-layer-02, #ffffff);--cds-layer-active: var(--cds-layer-active-02, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-02, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-02, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-02, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-02, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-02, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-02, #a8a8a8);--cds-field: var(--cds-field-02, #ffffff);--cds-field-hover: var(--cds-field-hover-02, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-01, #c6c6c6);--cds-border-subtle-selected: var(--cds-border-subtle-selected-02, #c6c6c6);--cds-border-strong: var(--cds-border-strong-02, #8d8d8d);--cds-border-tile: var(--cds-border-tile-02, #a8a8a8)}.cds--layer-three{--cds-layer: var(--cds-layer-03, #f4f4f4);--cds-layer-active: var(--cds-layer-active-03, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-03, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-03, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-03, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-03, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-03, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-03, #a8a8a8);--cds-field: var(--cds-field-03, #f4f4f4);--cds-field-hover: var(--cds-field-hover-03, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-02, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-03, #c6c6c6);--cds-border-strong: var(--cds-border-strong-03, #8d8d8d);--cds-border-tile: var(--cds-border-tile-03, #c6c6c6)}.cds--layout--size-xs{--cds-layout-size-height-context: var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm,:host(cds-accordion-item[size=sm]) button,:host(cds-accordion-item-skeleton[size=sm]) button{--cds-layout-size-height-context: var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min: var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max: var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context: var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg,:host(cds-accordion-item[size=lg]) button,:host(cds-accordion-item-skeleton[size=lg]) button{--cds-layout-size-height-context: var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min: var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max: var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context: var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min: var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max: var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context: var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-condensed, .5rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, .5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}.cds--accordion,:host(cds-accordion),:host(cds-accordion-skeleton){--cds-layout-size-height-local: clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)), var(--cds-layout-size-height, var(--cds-layout-size-height-md)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-lg)));--cds-layout-density-padding-inline-local: clamp(var(--cds-layout-density-padding-inline-min), var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)), var(--cds-layout-density-padding-inline-max));box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;inline-size:100%;list-style:none}.cds--accordion *,:host(cds-accordion) *,:host(cds-accordion-skeleton) *,.cds--accordion *:before,:host(cds-accordion) *:before,:host(cds-accordion-skeleton) *:before,.cds--accordion *:after,:host(cds-accordion) *:after,:host(cds-accordion-skeleton) *:after{box-sizing:inherit}.cds--accordion__item,:host(cds-accordion-item),:host(cds-accordion-item-skeleton){display:list-item;overflow:visible;border-block-start:1px solid var(--cds-border-subtle);transition:border-color cubic-bezier(.2,0,.38,.9) .11s}.cds--accordion__item:last-child{border-block-end:1px solid var(--cds-border-subtle)}.cds--accordion__item:not(.cds--accordion__item--active):hover,.cds--accordion__item:not(.cds--accordion__item--active):hover+.cds--accordion__item,.cds--accordion__item:not(.cds--accordion__item--active):hover+:host(cds-accordion-item),.cds--accordion__item:not(.cds--accordion__item--active):hover+:host(cds-accordion-item-skeleton){border-block-start-color:var(--cds-layer-hover)}.cds--accordion__item:not(.cds--accordion__item--active):last-child:hover{border-block-end-color:var(--cds-layer-hover)}.cds--accordion__heading{box-sizing:border-box;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:none;text-align:start;position:relative;display:flex;flex-direction:row-reverse;align-items:center;justify-content:flex-start;margin:0;color:var(--cds-text-primary, #161616);cursor:pointer;inline-size:100%;min-block-size:var(--cds-layout-size-height-local);padding-inline-end:var(--cds-layout-density-padding-inline-local);transition:background-color cubic-bezier(.2,0,.38,.9) .11s}.cds--accordion__heading *,.cds--accordion__heading *:before,.cds--accordion__heading *:after{box-sizing:inherit}.cds--accordion__heading::-moz-focus-inner{border:0}.cds--accordion__heading:hover{background-color:var(--cds-layer-hover);outline:none}.cds--accordion__heading:focus{position:relative;z-index:2;box-shadow:0 -1px 0 0 var(--cds-focus, #0f62fe),inset 0 1px 0 0 var(--cds-focus, #0f62fe),inset 2px 0 0 0 var(--cds-focus, #0f62fe),0 1px 0 0 var(--cds-focus, #0f62fe),inset 0 -1px 0 0 var(--cds-focus, #0f62fe),inset -2px 0 0 0 var(--cds-focus, #0f62fe);outline:none}.cds--accordion__heading[disabled]{color:var(--cds-text-disabled, rgba(22, 22, 22, .25));cursor:not-allowed}.cds--accordion__heading[disabled] .cds--accordion__arrow{fill:var(--cds-icon-disabled, rgba(22, 22, 22, .25))}.cds--accordion__heading[disabled]:hover:before{background-color:transparent}.cds--accordion__item--disabled,.cds--accordion__item--disabled+.cds--accordion__item,.cds--accordion__item--disabled+:host(cds-accordion-item),.cds--accordion__item--disabled+:host(cds-accordion-item-skeleton){border-block-start:1px solid var(--cds-border-subtle)}li.cds--accordion__item--disabled:last-of-type{border-block-end:1px solid var(--cds-border-subtle)}.cds--accordion__arrow{outline:2px solid transparent;outline-offset:-2px;flex:0 0 1rem;block-size:1rem;fill:var(--cds-icon-primary, #161616);inline-size:1rem;transform:rotate(-270deg);transition:all .11s cubic-bezier(.2,0,.38,.9)}.cds--accordion__title{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);z-index:1;inline-size:100%;padding-inline-start:1rem;text-align:start}.cds--accordion__wrapper{overflow:hidden;padding:0;max-block-size:0;opacity:0;transition:all .11s cubic-bezier(0,0,.38,.9);writing-mode:horizontal-tb}.cds--accordion__content,:host(cds-accordion-item) .cds--accordion__content,:host(cds-accordion-item-skeleton) .cds--accordion__content{padding-inline:var(--cds-layout-density-padding-inline-local)}@media (min-width: 480px){.cds--accordion__content,:host(cds-accordion-item) .cds--accordion__content,:host(cds-accordion-item-skeleton) .cds--accordion__content{padding-inline-end:3rem}}@media (min-width: 640px){.cds--accordion__content,:host(cds-accordion-item) .cds--accordion__content,:host(cds-accordion-item-skeleton) .cds--accordion__content{padding-inline-end:25%}}.cds--accordion__content>p,:host(cds-accordion-item) .cds--accordion__content>p,:host(cds-accordion-item-skeleton) .cds--accordion__content>p{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px)}.cds--accordion--start .cds--accordion__heading,:host(cds-accordion-item[alignment=start]) .cds--accordion__heading,:host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__heading{flex-direction:row}.cds--accordion--start .cds--accordion__arrow,:host(cds-accordion-item[alignment=start]) .cds--accordion__arrow,:host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__arrow{margin:2px 0 0 var(--cds-layout-density-padding-inline-local)}.cds--accordion--start .cds--accordion__title,:host(cds-accordion-item[alignment=start]) .cds--accordion__title,:host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__title{margin-inline-end:1rem}.cds--accordion--start .cds--accordion__content,:host(cds-accordion-item[alignment=start]) .cds--accordion__content,:host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__content{margin-inline-start:calc(var(--cds-layout-density-padding-inline-local) + 1rem)}.cds--accordion__item--collapsing .cds--accordion__content,:host(cds-accordion-item[collapsing]) .cds--accordion__content,.cds--accordion__item--expanding .cds--accordion__content,:host(cds-accordion-item[expanding]) .cds--accordion__content{display:block}.cds--accordion__item--active,:host(cds-accordion-item[open]:not([disabled])){overflow:visible}.cds--accordion__item--active>.cds--accordion__wrapper,:host(cds-accordion-item[open]:not([disabled]))>.cds--accordion__wrapper{overflow:visible;max-block-size:fit-content;opacity:1;padding-block:.5rem;padding-block-end:1.5rem}.cds--accordion__item--active>.cds--accordion__heading>.cds--accordion__arrow,:host(cds-accordion-item[open]:not([disabled]))>.cds--accordion__heading>.cds--accordion__arrow{fill:var(--cds-icon-primary, #161616);transform:rotate(-90deg)}.cds--accordion--flush .cds--accordion__item,:host(cds-accordion-item[isFlush]) .cds--accordion__item,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item,.cds--accordion--flush :host(cds-accordion-item),:host(cds-accordion-item[isFlush]) :host(cds-accordion-item),:host(cds-accordion-item-skeleton[isFlush]) :host(cds-accordion-item),.cds--accordion--flush :host(cds-accordion-item-skeleton),:host(cds-accordion-item[isFlush]) :host(cds-accordion-item-skeleton),:host(cds-accordion-item-skeleton[isFlush]) :host(cds-accordion-item-skeleton){position:relative;border-color:transparent}.cds--accordion--flush .cds--accordion__item:last-child,:host(cds-accordion-item[isFlush]) .cds--accordion__item:last-child,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:last-child,.cds--accordion--flush .cds--accordion__item:hover,:host(cds-accordion-item[isFlush]) .cds--accordion__item:hover,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:hover,.cds--accordion--flush .cds--accordion__item:last-child:hover,.cds--accordion--flush .cds--accordion__item:hover+.cds--accordion__item,:host(cds-accordion-item[isFlush]) .cds--accordion__item:hover+.cds--accordion__item,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:hover+.cds--accordion__item,.cds--accordion--flush .cds--accordion__item:hover+:host(cds-accordion-item),:host(cds-accordion-item[isFlush]) .cds--accordion__item:hover+:host(cds-accordion-item),:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:hover+:host(cds-accordion-item),.cds--accordion--flush .cds--accordion__item:hover+:host(cds-accordion-item-skeleton),:host(cds-accordion-item[isFlush]) .cds--accordion__item:hover+:host(cds-accordion-item-skeleton),:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:hover+:host(cds-accordion-item-skeleton){border-color:transparent}.cds--accordion--flush .cds--accordion__item:before,:host(cds-accordion-item[isFlush]) .cds--accordion__item:before,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:before,.cds--accordion--flush .cds--accordion__item:after,:host(cds-accordion-item[isFlush]) .cds--accordion__item:after,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:after{position:absolute;display:block;block-size:1px;content:"";inline-size:calc(100% - 2rem);margin-inline-start:1rem;transition:background cubic-bezier(.2,0,.38,.9) .11s}@media screen and (prefers-reduced-motion: reduce){.cds--accordion--flush .cds--accordion__item:before,:host(cds-accordion-item[isFlush]) .cds--accordion__item:before,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:before,.cds--accordion--flush .cds--accordion__item:after,:host(cds-accordion-item[isFlush]) .cds--accordion__item:after,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:after{transition:none}}.cds--accordion--flush .cds--accordion__item:before,:host(cds-accordion-item[isFlush]) .cds--accordion__item:before,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:before{background:var(--cds-border-subtle);inset-block-start:-1px}.cds--accordion--flush .cds--accordion__item:last-child:after,:host(cds-accordion-item[isFlush]) .cds--accordion__item:last-child:after,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__item:last-child:after{background:var(--cds-border-subtle);inset-block-end:-1px}.cds--accordion--flush .cds--accordion__heading:hover,:host(cds-accordion-item[isFlush]) .cds--accordion__heading:hover,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__heading:hover{position:relative;z-index:1}.cds--accordion--flush .cds--accordion__heading:hover:before,:host(cds-accordion-item[isFlush]) .cds--accordion__heading:hover:before,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__heading:hover:before,.cds--accordion--flush .cds--accordion__heading:hover:after,:host(cds-accordion-item[isFlush]) .cds--accordion__heading:hover:after,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__heading:hover:after{position:absolute;display:block;background:var(--cds-layer-hover);block-size:1px;content:"";inline-size:100%;inset-inline-start:0;transition:background cubic-bezier(.2,0,.38,.9) .11s}@media screen and (prefers-reduced-motion: reduce){.cds--accordion--flush .cds--accordion__heading:hover:before,:host(cds-accordion-item[isFlush]) .cds--accordion__heading:hover:before,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__heading:hover:before,.cds--accordion--flush .cds--accordion__heading:hover:after,:host(cds-accordion-item[isFlush]) .cds--accordion__heading:hover:after,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__heading:hover:after{transition:none}}.cds--accordion--flush .cds--accordion__heading:hover:before,:host(cds-accordion-item[isFlush]) .cds--accordion__heading:hover:before,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__heading:hover:before{inset-block-start:-1px}.cds--accordion--flush .cds--accordion__heading:hover:after,:host(cds-accordion-item[isFlush]) .cds--accordion__heading:hover:after,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__heading:hover:after{inset-block-end:-1px}.cds--accordion--flush .cds--accordion__heading:hover:focus:after,:host(cds-accordion-item[isFlush]) .cds--accordion__heading:hover:focus:after,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__heading:hover:focus:after,.cds--accordion--flush .cds--accordion__heading:hover:focus:before,:host(cds-accordion-item[isFlush]) .cds--accordion__heading:hover:focus:before,:host(cds-accordion-item-skeleton[isFlush]) .cds--accordion__heading:hover:focus:before{background:none}.cds--accordion.cds--skeleton .cds--accordion__heading,.cds--accordion.cds--skeleton .cds--accordion__button{cursor:default}.cds--accordion.cds--skeleton .cds--accordion__arrow{cursor:default;fill:var(--cds-icon-primary, #161616);pointer-events:none}.cds--accordion.cds--skeleton .cds--accordion__arrow:hover,.cds--accordion.cds--skeleton .cds--accordion__arrow:focus,.cds--accordion.cds--skeleton .cds--accordion__arrow:active{border:none;cursor:default;outline:none}.cds--accordion.cds--skeleton .cds--accordion__heading:hover:before,.cds--accordion.cds--skeleton .cds--accordion__heading:hover{background-color:transparent}.cds--accordion--end.cds--skeleton .cds--accordion__arrow{margin-inline-start:1rem}.cds--skeleton .cds--accordion__heading:focus .cds--accordion__arrow{border:none;cursor:default;outline:none}.cds--accordion__title.cds--skeleton__text{margin-block-end:0}.cds--accordion.cds--skeleton .cds--accordion__title{margin-inline-start:1rem}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--accordion__arrow,.cds--accordion__item--active .cds--accordion__arrow{fill:ButtonText}}[dir=rtl] .cds--accordion--start .cds--accordion__heading,[dir=rtl] :host(cds-accordion-item[alignment=start]) .cds--accordion__heading,[dir=rtl] :host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__heading{padding-inline-end:0;padding-inline-start:var(--cds-layout-density-padding-inline-local)}[dir=rtl] .cds--accordion--start .cds--accordion__title,[dir=rtl] :host(cds-accordion-item[alignment=start]) .cds--accordion__title,[dir=rtl] :host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__title{margin-inline-end:0;padding-inline-start:0}:host(cds-accordion),:host(cds-accordion-skeleton){--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}:host(cds-accordion-item),:host(cds-accordion-item-skeleton){display:block;outline:none}:host(cds-accordion-item) .cds--accordion__content ::slotted(p),:host(cds-accordion-item-skeleton) .cds--accordion__content ::slotted(p){font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin:0}:host(cds-accordion-item[size=sm]) button,:host(cds-accordion-item-skeleton[size=sm]) button{min-block-size:var(--cds-layout-size-height-context)}:host(cds-accordion-item[size=lg]) button,:host(cds-accordion-item-skeleton[size=lg]) button{min-block-size:var(--cds-layout-size-height-context)}:host(cds-accordion-item[open]:not([disabled])) .cds--accordion__content{padding-inline-end:1rem}:host(cds-accordion-item[open]:not([disabled])) .cds-ce--accordion__content--sm{padding-inline-end:3rem}:host(cds-accordion-item[open]:not([disabled])) .cds-ce--accordion__content--md{padding-inline-end:25%}:host(cds-accordion-skeleton) .cds--accordion__heading,:host(cds-accordion-item-skeleton) .cds--accordion__heading{cursor:default}:host(cds-accordion-skeleton) .cds--accordion__heading:hover:before,:host(cds-accordion-item-skeleton) .cds--accordion__heading:hover:before{background:transparent}
`,k=K(J);var Q=Object.defineProperty,V=Object.getOwnPropertyDescriptor,$=(e,o,t,c)=>{for(var i=c>1?void 0:c?V(o,t):o,n=e.length-1,d;n>=0;n--)(d=e[n])&&(i=(c?d(o,t,i):d(i))||i);return c&&i&&Q(o,t,i),i};let u=class extends x{constructor(){super(...arguments),this.size=l.MEDIUM,this.alignment=T.END,this.isFlush=!1}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","list"),super.connectedCallback()}updated(e){e.has("size")&&y(this.querySelectorAll(this.constructor.selectorAccordionItems),o=>{o.setAttribute("size",this.size)}),e.has("alignment")&&y(this.querySelectorAll(this.constructor.selectorAccordionItems),o=>{o.setAttribute("alignment",this.alignment)}),(e.has("isFlush")||e.has("alignment"))&&y(this.querySelectorAll(this.constructor.selectorAccordionItems),o=>{this.isFlush&&this.alignment!=="start"?o.setAttribute("isFlush",""):o.removeAttribute("isFlush")})}render(){return a` <slot></slot> `}static get selectorAccordionItems(){return`${s}-accordion-item`}};u.styles=k;$([r({reflect:!0})],u.prototype,"size",2);$([r({reflect:!0})],u.prototype,"alignment",2);$([r({type:Boolean,reflect:!0})],u.prototype,"isFlush",2);u=$([z(`${s}-accordion`)],u);var W=Object.defineProperty,X=Object.getOwnPropertyDescriptor,F=(e,o,t,c)=>{for(var i=c>1?void 0:c?X(o,t):o,n=e.length-1,d;n>=0;n--)(d=e[n])&&(i=(c?d(o,t,i):d(i))||i);return c&&i&&W(o,t,i),i};const Y=(e,o)=>o?(e.observe(o),{release(){return e.unobserve(o),null}}):null;let g=class extends H(x){constructor(){super(...arguments),this._hObserveResize=null,this._handleKeydownExpando=({key:e})=>{this.open&&(e==="Esc"||e==="Escape")&&this._handleUserInitiatedToggle(!1)},this._resizeObserver=new ResizeObserver(e=>{const{width:o}=e[e.length-1].contentRect,{_sizesBreakpoints:t}=this.constructor;this._currentBreakpoint=Object.keys(t).sort((c,i)=>t[i]-t[c]).find(c=>o>=t[c]),this.requestUpdate()}),this.disabled=!1,this.open=!1,this.title=""}_handleUserInitiatedToggle(e=!this.open){const o={bubbles:!0,cancelable:!0,composed:!0,detail:{open:e}};if(this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeToggle,o))){const{selectorAccordionContent:c}=this.constructor;this.open?this.setAttribute("collapsing",""):this.setAttribute("expanding",""),this.shadowRoot.querySelector(c).addEventListener("animationend",()=>{this.removeAttribute("expanding"),this.removeAttribute("collapsing")}),this.open=e,this.dispatchEvent(new CustomEvent(this.constructor.eventToggle,o))}const t=this.shadowRoot.querySelector(`.${s}--accordion__wrapper`);this.open?t.style.maxBlockSize=t.scrollHeight+15+"px":t.style.maxBlockSize=""}_handleClickExpando(){this._handleUserInitiatedToggle()}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","listitem"),super.connectedCallback(),this._hObserveResize&&(this._hObserveResize=this._hObserveResize.release()),this._hObserveResize=Y(this._resizeObserver,this)}disconnectedCallback(){this._hObserveResize&&(this._hObserveResize=this._hObserveResize.release())}render(){const{disabled:e,title:o,open:t,_currentBreakpoint:c,_handleClickExpando:i,_handleKeydownExpando:n}=this,{_classesBreakpoints:d}=this.constructor,{[c]:f}=d,L=G({[f]:f,[`${s}--accordion__content`]:!0});return a`
      <button
        ?disabled="${e}"
        type="button"
        part="expando"
        class="${s}--accordion__heading"
        aria-controls="content"
        aria-expanded="${t}"
        @click="${i}"
        @keydown="${n}">
        ${A({part:"expando-icon",class:`${s}--accordion__arrow`})}
        <div part="title" class="${s}--accordion__title">
          <slot name="title">${o}</slot>
        </div>
      </button>
      <div class="${s}--accordion__wrapper">
        <div id="content" part="content" class="${L}">
          <slot></slot>
        </div>
      </div>
    `}static get _classesBreakpoints(){return{[h.SMALL]:`${s}-ce--accordion__content--${h.SMALL}`,[h.MEDIUM]:`${s}-ce--accordion__content--${h.MEDIUM}`}}static get _sizesBreakpoints(){return{[h.SMALL]:480,[h.MEDIUM]:640}}static get eventBeforeToggle(){return`${s}-accordion-item-beingtoggled`}static get eventToggle(){return`${s}-accordion-item-toggled`}static get selectorAccordionContent(){return`.${s}--accordion__content`}};g.styles=k;F([r({type:Boolean,reflect:!0})],g.prototype,"disabled",2);F([r({type:Boolean,reflect:!0})],g.prototype,"open",2);F([r({attribute:"title"})],g.prototype,"title",2);g=F([z(`${s}-accordion-item`)],g);var N=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,ee=(e,o,t,c)=>{for(var i=c>1?void 0:c?Z(o,t):o,n=e.length-1,d;n>=0;n--)(d=e[n])&&(i=(c?d(o,t,i):d(i))||i);return c&&i&&N(o,t,i),i};let w=class extends x{render(){return a`
      <span class="${s}--accordion__heading">
        ${A({part:"expando-icon",class:`${s}--accordion__arrow`})}
        <cds-skeleton-text
          class="${s}--accordion__title"></cds-skeleton-text>
      </span>
    `}};w.styles=k;w=ee([z(`${s}-accordion-item-skeleton`)],w);var oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,b=(e,o,t,c)=>{for(var i=c>1?void 0:c?ie(o,t):o,n=e.length-1,d;n>=0;n--)(d=e[n])&&(i=(c?d(o,t,i):d(i))||i);return c&&i&&oe(o,t,i),i};let m=class extends x{constructor(){super(...arguments),this.alignment=T.END,this.count=4,this.isFlush=!1,this.open=!0}updated(e){e.has("alignment")&&y(this.shadowRoot.querySelectorAll(this.constructor.selectorAccordionItemSkeletons),o=>{o.setAttribute("alignment",this.alignment)}),(e.has("isFlush")||e.has("alignment"))&&y(this.shadowRoot.querySelectorAll(this.constructor.selectorAccordionItemSkeletons),o=>{this.isFlush&&this.alignment!=="start"?o.setAttribute("isFlush",""):o.removeAttribute("isFlush")})}render(){const e=G({[`${s}--accordion__item`]:!0,[`${s}--accordion__item--active`]:!0,[`${s}--accordion--${this.alignment}`]:this.alignment,[`${s}--accordion--flush`]:this.isFlush&&this.alignment!=="start"}),o=this.open?this.count-1:this.count;return a`
      ${this.open?a`
            <li class="${e}">
              <span class="${s}--accordion__heading">
                ${A({part:"expando-icon",class:`${s}--accordion__arrow`})}
                <cds-skeleton-text
                  class="${s}--accordion__title"></cds-skeleton-text>
              </span>
              <div class="${s}--accordion__content">
                <cds-skeleton-text width="90%"></cds-skeleton-text>
                <cds-skeleton-text width="80%"></cds-skeleton-text>
                <cds-skeleton-text width="85%"></cds-skeleton-text>
              </div>
            </li>
          `:""}
      ${Array.from(new Array(o)).map((t,c)=>a`
            <cds-accordion-item-skeleton
              key=${c}></cds-accordion-item-skeleton>
          `)}
    `}static get selectorAccordionItemSkeletons(){return`${s}-accordion-item-skeleton`}};m.styles=k;b([r({reflect:!0})],m.prototype,"alignment",2);b([r({type:Number,attribute:"count"})],m.prototype,"count",2);b([r({type:Boolean,reflect:!0})],m.prototype,"isFlush",2);b([r({type:Boolean,reflect:!0})],m.prototype,"open",2);m=b([z(`${s}-accordion-skeleton`)],m);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const te={[`Small size (${l.SMALL})`]:l.SMALL,[`Medium size (${l.MEDIUM})`]:l.MEDIUM,[`Large size (${l.LARGE})`]:l.LARGE},q={alignment:"end",disabled:!1,isFlush:!1,size:l.MEDIUM,disableToggle:!1},S={alignment:{control:"select",description:"Specify the alignment of the accordion heading title and chevron.",options:["start","end"]},disabled:{control:"boolean",description:"Specify whether an individual AccordionItem should be disabled."},isFlush:{control:"boolean",description:'Specify whether Accordion text should be flush, default is false, does not work with align="start".'},size:{control:"select",description:"Specify the size of the Accordion.",options:te},disableToggle:{control:"boolean",description:`Disable user-initiated toggle action (Call event.preventDefault() in ${s}-accordion-beingtoggled event).`},onBeforeToggle:{action:`${s}-accordion-item-beingtoggled`},onToggle:{action:`${s}-accordion-item-toggled`}},_={args:{},argTypes:{},render:()=>a`
      <cds-accordion>
        <cds-accordion-item title="Section 1 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item title="Section 2 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item title="Section 3 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item title="Section 4 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
      </cds-accordion>
    `},p={args:{alignment:q.alignment,isFlush:q.isFlush},argTypes:{alignment:S.alignment,isFlush:S.isFlush},decorators:[e=>a`<div style="width: 500px">${e()}</div>`],parameters:{percy:{skip:!0}},render:e=>{const{alignment:o,isFlush:t}=e??{};return a`
      <cds-accordion-skeleton alignment="${o}" ?isFlush="${t}">
      </cds-accordion-skeleton>
    `}},B=()=>{},v={args:q,argTypes:S,parameters:{percy:{skip:!0}},render:e=>{const{disabled:o,disableToggle:t,onBeforeToggle:c=B,onToggle:i=B,size:n,alignment:d,isFlush:f}=e??{};return a`
      <cds-accordion
        @cds-accordion-item-beingtoggled="${E=>{c(E),t&&E.preventDefault()}}"
        @cds-accordion-item-toggled="${i}"
        size="${n}"
        alignment="${d}"
        ?isFlush="${f}">
        <cds-accordion-item ?disabled="${o}" title="Section 1 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item ?disabled="${o}" title="Section 2 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item ?disabled="${o}" title="Section 3 title">
          <cds-button>This is a button.</cds-button>
        </cds-accordion-item>
        <cds-accordion-item ?disabled="${o}">
          <span slot="title">
            <span> Section 4 title (<em>the title can be a node</em>) </span>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
      </cds-accordion>
    `}},ce={title:"Components/Accordion"};var D,U,M;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
  // This story doesn't accept any args.
  args: {},
  argTypes: {},
  render: () => {
    return html\`
      <cds-accordion>
        <cds-accordion-item title="Section 1 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item title="Section 2 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item title="Section 3 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item title="Section 4 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
      </cds-accordion>
    \`;
  }
}`,...(M=(U=_.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var O,C,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    alignment: args['alignment'],
    isFlush: args['isFlush']
  },
  argTypes: {
    alignment: argTypes['alignment'],
    isFlush: argTypes['isFlush']
  },
  decorators: [story => {
    return html\`<div style="width: 500px">\${story()}</div>\`;
  }],
  parameters: {
    percy: {
      skip: true
    }
  },
  render: args => {
    const {
      alignment,
      isFlush
    } = args ?? {};
    return html\`
      <cds-accordion-skeleton alignment="\${alignment}" ?isFlush="\${isFlush}">
      </cds-accordion-skeleton>
    \`;
  }
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,P,j;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args,
  argTypes,
  parameters: {
    percy: {
      skip: true
    }
  },
  render: args => {
    const {
      disabled,
      disableToggle,
      onBeforeToggle = noop,
      onToggle = noop,
      size,
      alignment,
      isFlush
    } = args ?? {};
    const handleBeforeToggle = (event: CustomEvent) => {
      onBeforeToggle(event);
      if (disableToggle) {
        event.preventDefault();
      }
    };
    return html\`
      <cds-accordion
        @cds-accordion-item-beingtoggled="\${handleBeforeToggle}"
        @cds-accordion-item-toggled="\${onToggle}"
        size="\${size}"
        alignment="\${alignment}"
        ?isFlush="\${isFlush}">
        <cds-accordion-item ?disabled="\${disabled}" title="Section 1 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item ?disabled="\${disabled}" title="Section 2 title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item ?disabled="\${disabled}" title="Section 3 title">
          <cds-button>This is a button.</cds-button>
        </cds-accordion-item>
        <cds-accordion-item ?disabled="\${disabled}">
          <span slot="title">
            <span> Section 4 title (<em>the title can be a node</em>) </span>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
      </cds-accordion>
    \`;
  }
}`,...(j=(P=v.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const se=["Default","Skeleton","Playground"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:_,Playground:v,Skeleton:p,__namedExportsOrder:se,default:ce},Symbol.toStringTag,{value:"Module"}));export{ve as A};
