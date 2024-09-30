import{r as re,x as n,s as ae}from"./lit-element-266f0592.js";import{B as a}from"./button-4ef875e3.js";import{n as m}from"./property-da2637ab.js";import{r as u}from"./state-7d5425f0.js";import{a as O}from"./query-b9d3c2af.js";import{o as de}from"./query-assigned-elements-43485e4e.js";import{p as h,s as ie,c as le}from"./carbon-element-59fbbccb.js";import{H as pe,a as N}from"./host-listener-0f7877ac.js";import"./button-set-c8bc6e9f.js";import"./button-skeleton-e866e3ce.js";import"./layer-d66987ad.js";import"./modal-c7d1de3b.js";import"./modal-label-5028dcdd.js";import"./text-input-f5b277bd.js";import"./text-input-skeleton-2fc7e4c6.js";import"./textarea-skeleton-5d52d4ee.js";const he=`html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace}strong{font-weight:600}@media screen and (-ms-high-contrast: active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size, 2.625rem);font-weight:var(--cds-heading-06-font-weight, 300);line-height:var(--cds-heading-06-line-height, 1.199);letter-spacing:var(--cds-heading-06-letter-spacing, 0)}h2{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0)}h3{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}h4{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}h5{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0)}h6{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px)}p{font-size:var(--cds-body-02-font-size, 1rem);font-weight:var(--cds-body-02-font-weight, 400);line-height:var(--cds-body-02-line-height, 1.5);letter-spacing:var(--cds-body-02-letter-spacing, 0)}a{color:var(--cds-link-primary, #0062fe)}em{font-style:italic}:root{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-one{--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.cds--layer-two{--cds-layer: var(--cds-layer-02, #ffffff);--cds-layer-active: var(--cds-layer-active-02, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-02, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-02, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-02, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-02, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-02, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-02, #a8a8a8);--cds-field: var(--cds-field-02, #ffffff);--cds-field-hover: var(--cds-field-hover-02, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-01, #c6c6c6);--cds-border-subtle-selected: var(--cds-border-subtle-selected-02, #c6c6c6);--cds-border-strong: var(--cds-border-strong-02, #8d8d8d);--cds-border-tile: var(--cds-border-tile-02, #a8a8a8)}.cds--layer-three{--cds-layer: var(--cds-layer-03, #f4f4f4);--cds-layer-active: var(--cds-layer-active-03, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-03, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-03, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-03, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-03, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-03, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-03, #a8a8a8);--cds-field: var(--cds-field-03, #f4f4f4);--cds-field-hover: var(--cds-field-hover-03, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-02, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-03, #c6c6c6);--cds-border-strong: var(--cds-border-strong-03, #8d8d8d);--cds-border-tile: var(--cds-border-tile-03, #c6c6c6)}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color: var(--cds-background-inverse, #393939);--cds-popover-text-color: var(--cds-text-inverse, #ffffff)}.cds--popover--drop-shadow .cds--popover{--cds-popover-drop-shadow: drop-shadow(0 2px 2px rgba(0, 0, 0, .2))}.cds--popover--caret{--cds-popover-offset: .625rem}.cds--popover{position:absolute;z-index:6000;filter:var(--cds-popover-drop-shadow, none);inset:0;pointer-events:none}.cds--popover-content{--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;position:absolute;z-index:6000;display:none;border-radius:var(--cds-popover-border-radius, 2px);background-color:var(--cds-popover-background-color, var(--cds-layer));color:var(--cds-popover-text-color, var(--cds-text-primary, #161616));inline-size:max-content;max-inline-size:23rem;pointer-events:auto}.cds--layout--size-sm .cds--popover-content{--cds-layout-size-height: var(--cds-layout-size-height-sm)}.cds--layout--size-md .cds--popover-content{--cds-layout-size-height: var(--cds-layout-size-height-md)}.cds--layout--size-lg .cds--popover-content{--cds-layout-size-height: var(--cds-layout-size-height-lg)}.cds--popover-content *,.cds--popover-content *:before,.cds--popover-content *:after{box-sizing:inherit}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover-content:before{position:absolute;display:none;content:""}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover-caret,.cds--popover--auto-align.cds--popover-caret{position:absolute;z-index:6000;display:none;background-color:var(--cds-popover-background-color, var(--cds-layer));will-change:transform}.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:0;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem)),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:initial}.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset, 0rem),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--bottom>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset, 0rem);inset-block-start:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(-100%)}.cds--popover--bottom>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-end>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height, .375rem);clip-path:polygon(0% 100%,50% 0%,100% 100%);inline-size:var(--cds-popover-caret-width, .75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset, 0rem))}[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset, 0rem))}.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height, .375rem);clip-path:polygon(0% 100%,50% 0%,100% 100%);inline-size:var(--cds-popover-caret-width, .75rem)}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:0;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem)),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:initial}.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset, 0rem),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--top>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-end>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset, 0rem);inset-block-end:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(100%)}.cds--popover--top>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-end>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height, .375rem);clip-path:polygon(0% 0%,50% 100%,100% 0%);inline-size:var(--cds-popover-caret-width, .75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-1 * var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(-1 * var(--cds-popover-offset, 0rem)))}.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height, .375rem);clip-path:polygon(0% 0%,50% 100%,100% 0%);inline-size:var(--cds-popover-caret-width, .75rem)}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset, 0rem),-50%)}.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset, 0rem),calc(.5 * var(--cds-popover-offset, 0rem) * -1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset, 0rem),calc(.5 * var(--cds-popover-offset, 0rem) + 16px))}[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:initial}.cds--popover--right>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset, 0rem);inset-block-end:0;inset-block-start:0;inset-inline-start:0;transform:translate(-100%)}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width, .75rem);clip-path:polygon(0% 50%,100% 0%,100% 100%);inline-size:var(--cds-popover-caret-height, .375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:initial}.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width, .75rem);clip-path:polygon(0% 50%,100% 0%,100% 100%);inline-size:var(--cds-popover-caret-height, .375rem)}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem) + .1px),-50%)}.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem)),calc(-.5 * var(--cds-popover-offset, 0rem) - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem)),calc(.5 * var(--cds-popover-offset, 0rem) + 16px))}[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:initial;inset-inline-start:100%}.cds--popover--left>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset, 0rem);inset-block-end:0;inset-block-start:0;inset-inline-end:0;transform:translate(100%)}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width, .75rem);clip-path:polygon(0% 0%,100% 50%,0% 100%);inline-size:var(--cds-popover-caret-height, .375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset, 0rem) + 100%),-50%)}[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:initial;inset-inline-start:100%}.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width, .75rem);clip-path:polygon(0% 0%,100% 50%,0% 100%);inline-size:var(--cds-popover-caret-height, .375rem)}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{box-sizing:border-box;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:none;cursor:pointer;text-align:start;inline-size:100%;position:relative;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;inline-size:2rem}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button *:before,.cds--popover--tab-tip__button *:after{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px #0003}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{position:absolute;z-index:6001;background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary, #161616)}.cds--tooltip{--cds-popover-offset: 12px}.cds--tooltip-content{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);padding:var(--cds-tooltip-padding-block, 1rem) var(--cds-tooltip-padding-inline, 1rem);color:var(--cds-text-inverse, #ffffff);max-inline-size:18rem}.cds--icon-tooltip{--cds-tooltip-padding-block: .125rem;--cds-popover-caret-width: .5rem;--cds-popover-caret-height: .25rem;--cds-popover-offset: .5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px)}.cds--definition-term{box-sizing:border-box;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:none;cursor:pointer;text-align:start;inline-size:100%;border-radius:0;border-block-end:1px dotted var(--cds-border-strong);color:var(--cds-text-primary, #161616)}.cds--definition-term *,.cds--definition-term *:before,.cds--definition-term *:after{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term:focus{outline:1px solid var(--cds-focus, #0f62fe);border-block-end-color:var(--cds-border-interactive, #0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive, #0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);padding:.5rem 1rem;max-inline-size:11rem}.cds--btn{--cds-layout-size-height-local: clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)), var(--cds-layout-size-height, var(--cds-layout-size-height-lg)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local: clamp(var(--cds-layout-density-padding-inline-min), var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)), var(--cds-layout-density-padding-inline-max));--temp-1lh: ( var(--cds-body-compact-01-line-height, 1.28572) * 1em );--temp-expressive-1lh: ( var(--cds-body-compact-02-line-height, 1.375) * 1em );--temp-padding-block-max: calc( (var(--cds-layout-size-height-lg) - var(--temp-1lh)) / 2 - .0625rem );box-sizing:border-box;padding:0;border:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);position:relative;display:inline-flex;flex-shrink:0;justify-content:space-between;border-radius:0;margin:0;cursor:pointer;inline-size:max-content;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh)) / 2 - .0625rem,var(--temp-padding-block-max));padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) * 3 + 1rem - .0625rem);padding-inline-start:calc(var(--cds-layout-density-padding-inline-local) - .0625rem);text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:top}.cds--btn *,.cds--btn *:before,.cds--btn *:after{box-sizing:inherit}.cds--btn:disabled,.cds--btn:hover:disabled,.cds--btn:focus:disabled,.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:hover,.cds--btn.cds--btn--disabled:focus{border-color:var(--cds-button-disabled, #c6c6c6);background:var(--cds-button-disabled, #c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled, #8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{position:absolute;flex-shrink:0;block-size:1rem;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem) / 2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem}.cds--btn::-moz-focus-inner{padding:0;border:0}.cds--btn--primary{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-primary, #0f62fe);color:var(--cds-text-on-color, #ffffff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover, #0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active, #002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover{color:var(--cds-text-on-color, #ffffff)}.cds--btn--secondary{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-secondary, #393939);color:var(--cds-text-on-color, #ffffff)}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover, #474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active, #6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:hover,.cds--btn--secondary:focus{color:var(--cds-text-on-color, #ffffff)}.cds--btn--tertiary{border-width:1px;border-style:solid;border-color:var(--cds-button-tertiary, #0f62fe);background-color:transparent;color:var(--cds-button-tertiary, #0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover, #0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active, #002d9c)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:hover{color:var(--cds-text-inverse, #ffffff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary, #0f62fe);color:var(--cds-text-inverse, #ffffff)}.cds--btn--tertiary:active{border-color:transparent;background-color:var(--cds-button-tertiary-active, #002d9c);color:var(--cds-text-inverse, #ffffff)}.cds--btn--tertiary:disabled,.cds--btn--tertiary:hover:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary.cds--btn--disabled:focus{background:transparent;color:var(--cds-text-on-color-disabled, #8d8d8d);outline:none}.cds--btn--ghost{border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;color:var(--cds-link-primary, #0f62fe);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost .cds--btn__icon{position:static;margin-inline-start:.5rem}.cds--btn--ghost:hover,.cds--btn--ghost:active{color:var(--cds-link-primary-hover, #0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active, rgba(141, 141, 141, .5))}.cds--btn--ghost:disabled,.cds--btn--ghost:hover:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost.cds--btn--disabled:focus{border-color:transparent;background:transparent;color:var(--cds-text-on-color-disabled, #8d8d8d);outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary, #161616)}.cds--btn--icon-only{justify-content:center;padding:0;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);padding-block-start:min((var(--cds-layout-size-height-local) - 1rem) / 2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only>:first-child{margin-block-start:.0625rem;min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon{margin:0}.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected, rgba(141, 141, 141, .2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon{fill:var(--cds-icon-primary, #161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled, #8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-danger-primary, #da1e28);color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover, #b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active, #750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--tertiary{border-width:1px;border-style:solid;border-color:var(--cds-button-danger-secondary, #da1e28);background-color:transparent;color:var(--cds-button-danger-secondary, #da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover, #b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active, #750e13)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover, #b81921);color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary, #da1e28);color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--tertiary:active{border-color:var(--cds-button-danger-active, #750e13);background-color:var(--cds-button-danger-active, #750e13);color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:hover:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary.cds--btn--disabled:focus{background:transparent;color:var(--cds-text-on-color-disabled, #8d8d8d);outline:none}.cds--btn--danger--ghost{border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;color:var(--cds-button-danger-secondary, #da1e28);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover, #b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color, var(--cds-focus, #0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)),inset 0 0 0 2px var(--cds-background, #ffffff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active, #750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost .cds--btn__icon{position:static;margin-inline-start:.5rem}.cds--btn--danger--ghost:hover,.cds--btn--danger--ghost:active{color:var(--cds-text-on-color, #ffffff)}.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:hover:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost.cds--btn--disabled:focus{border-color:transparent;background:transparent;color:var(--cds-text-disabled, rgba(22, 22, 22, .25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size, 1rem);font-weight:var(--cds-body-compact-02-font-weight, 400);line-height:var(--cds-body-compact-02-line-height, 1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing, 0);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh)) / 2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{position:relative;padding:0;border:none;background:var(--cds-skeleton-background, #e8e8e8);box-shadow:none;pointer-events:none;inline-size:9.375rem}.cds--btn.cds--skeleton:hover,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:active{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element, #c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion: reduce){.cds--btn.cds--skeleton:before{animation:none}}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator, #e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator, #e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled, #8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled, #8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{border-color:transparent;background-color:transparent;box-shadow:none}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon{fill:ButtonText}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator, #e0e0e0)}.cds--modal,:host(cds-tearsheet){position:fixed;z-index:9000;display:flex;align-items:center;justify-content:center;background-color:var(--cds-overlay, rgba(22, 22, 22, .5));block-size:100vh;content:"";inline-size:100vw;inset-block-start:0;inset-inline-start:0;opacity:0;transition:opacity .24s cubic-bezier(.4,.14,1,1),visibility 0ms linear .24s;visibility:hidden}.cds--modal.is-visible{opacity:1;transition:opacity .24s cubic-bezier(0,0,.3,1),visibility 0ms linear;visibility:inherit}@media screen and (prefers-reduced-motion: reduce){.cds--modal.is-visible{transition:none}}.cds--modal .cds--text-input--fluid .cds--text-input,:host(cds-tearsheet) .cds--text-input--fluid .cds--text-input,.cds--modal .cds--text-area--fluid .cds--text-area__wrapper,:host(cds-tearsheet) .cds--text-area--fluid .cds--text-area__wrapper,.cds--modal .cds--text-area--fluid .cds--text-area,:host(cds-tearsheet) .cds--text-area--fluid .cds--text-area,.cds--modal .cds--search--fluid .cds--search-input,:host(cds-tearsheet) .cds--search--fluid .cds--search-input,.cds--modal .cds--select--fluid .cds--select-input,:host(cds-tearsheet) .cds--select--fluid .cds--select-input,.cds--modal .cds--text-area--fluid .cds--text-area__wrapper[data-invalid] .cds--text-area__divider+.cds--form-requirement,:host(cds-tearsheet) .cds--text-area--fluid .cds--text-area__wrapper[data-invalid] .cds--text-area__divider+.cds--form-requirement,.cds--modal .cds--list-box__wrapper--fluid .cds--list-box,:host(cds-tearsheet) .cds--list-box__wrapper--fluid .cds--list-box,.cds--modal .cds--list-box__wrapper--fluid.cds--list-box__wrapper,:host(cds-tearsheet) .cds--list-box__wrapper--fluid.cds--list-box__wrapper,.cds--modal .cds--number-input--fluid input[type=number],:host(cds-tearsheet) .cds--number-input--fluid input[type=number],.cds--modal .cds--number-input--fluid .cds--number__control-btn:before,:host(cds-tearsheet) .cds--number-input--fluid .cds--number__control-btn:before,.cds--modal .cds--number-input--fluid .cds--number__control-btn:after,:host(cds-tearsheet) .cds--number-input--fluid .cds--number__control-btn:after,.cds--modal .cds--date-picker--fluid .ccdsds--date-picker-input__wrapper .cds--date-picker__input,:host(cds-tearsheet) .cds--date-picker--fluid .ccdsds--date-picker-input__wrapper .cds--date-picker__input{background-color:var(--cds-field-01, #f4f4f4)}.cds--modal .cds--list-box__wrapper--fluid .cds--list-box__menu,:host(cds-tearsheet) .cds--list-box__wrapper--fluid .cds--list-box__menu{background-color:var(--cds-layer-01, #f4f4f4)}.cds--modal .cds--list-box__menu-item:hover,:host(cds-tearsheet) .cds--list-box__menu-item:hover{background-color:var(--cds-layer-hover-02, #e8e8e8)}.cds--modal .cds--list-box__menu-item--active,:host(cds-tearsheet) .cds--list-box__menu-item--active{background-color:var(--cds-layer-selected-02, #e0e0e0)}.cds--modal .cds--list-box__menu-item--active:hover,:host(cds-tearsheet) .cds--list-box__menu-item--active:hover{background-color:var(--cds-layer-selected-hover-02, #d1d1d1)}.cds--modal .cds--number-input--fluid .cds--number__control-btn:hover:before,:host(cds-tearsheet) .cds--number-input--fluid .cds--number__control-btn:hover:before,.cds--modal .cds--number-input--fluid .cds--number__control-btn:hover:after,:host(cds-tearsheet) .cds--number-input--fluid .cds--number__control-btn:hover:after{background-color:var(--cds-field-hover)}.cds--modal .cds--number-input--fluid .cds--number__control-btn:focus:before,:host(cds-tearsheet) .cds--number-input--fluid .cds--number__control-btn:focus:before,.cds--modal .cds--number-input--fluid .cds--number__control-btn:focus:after,:host(cds-tearsheet) .cds--number-input--fluid .cds--number__control-btn:focus:after{border-inline-start:2px solid var(--cds-focus, #0f62fe)}.cds--modal.is-visible .cds--modal-container{transform:translateZ(0);transition:transform .24s cubic-bezier(0,0,.3,1)}.cds--modal-container{position:fixed;display:grid;background-color:var(--cds-layer);block-size:100%;grid-template-columns:100%;grid-template-rows:auto 1fr auto;inline-size:100%;inset-block-start:0;max-block-size:100%;outline:3px solid transparent;outline-offset:-3px;transform:translate3d(0,-24px,0);transform-origin:top center;transition:transform .24s cubic-bezier(.4,.14,1,1)}@media (min-width: 42rem){.cds--modal-container{position:static;block-size:auto;inline-size:84%;max-block-size:90%}}@media (min-width: 66rem){.cds--modal-container{inline-size:60%;max-block-size:84%}}@media (min-width: 82rem){.cds--modal-container{inline-size:48%}}.cds--modal-container .cds--modal-container-body{display:contents}.cds--modal-content{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);position:relative;color:var(--cds-text-primary, #161616);font-weight:400;grid-column:1/-1;grid-row:2/-2;overflow-y:auto;padding-block-end:3rem;padding-block-start:.5rem;padding-inline-end:1rem;padding-inline-start:1rem}.cds--modal-content:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--modal-content:focus{outline-style:dotted}}.cds--modal-content .cds--form--fluid{margin-inline-end:-1rem;margin-inline-start:-1rem}.cds--modal-content>p,.cds--modal-content__regular-content{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);padding-inline-end:calc(20% - 2rem)}.cds--modal-content--with-form{padding-inline-end:1rem}.cds--modal-header{grid-column:1/-1;grid-row:1/1;margin-block-end:.5rem;padding-block-start:1rem;padding-inline-end:3rem;padding-inline-start:1rem}.cds--modal-header__label{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);color:var(--cds-text-secondary, #525252);margin-block-end:.25rem}.cds--modal-header__label *,.cds--modal-header__label *:before,.cds--modal-header__label *:after{box-sizing:inherit}.cds--modal-header__heading{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0);color:var(--cds-text-primary, #161616);padding-inline-end:calc(20% - 3rem)}.cds--modal-header__heading *,.cds--modal-header__heading *:before,.cds--modal-header__heading *:after{box-sizing:inherit}.cds--modal-container--xs .cds--modal-content__regular-content{padding-inline-end:1rem}.cds--modal-container--xs .cds--modal-content>p{padding-inline-end:0}@media (min-width: 42rem){.cds--modal-container--xs{inline-size:48%}}@media (min-width: 66rem){.cds--modal-container--xs{inline-size:32%;max-block-size:48%}}@media (min-width: 82rem){.cds--modal-container--xs{inline-size:24%}}.cds--modal-container--sm .cds--modal-content__regular-content{padding-inline-end:1rem}.cds--modal-container--sm .cds--modal-content>p{padding-inline-end:0}@media (min-width: 42rem){.cds--modal-container--sm{inline-size:60%}}@media (min-width: 66rem){.cds--modal-container--sm{inline-size:42%;max-block-size:72%}.cds--modal-container--sm .cds--modal-content>p,.cds--modal-container--sm .cds--modal-content__regular-content{padding-inline-end:20%}}@media (min-width: 82rem){.cds--modal-container--sm{inline-size:36%}}@media (min-width: 42rem){.cds--modal-container--lg{inline-size:96%}}@media (min-width: 66rem){.cds--modal-container--lg{inline-size:84%;max-block-size:96%}}@media (min-width: 82rem){.cds--modal-container--lg{inline-size:72%}}.cds--modal-scroll-content{border-block-end:2px solid transparent;mask-image:linear-gradient(to bottom,var(--cds-layer) calc(100% - 80px),transparent calc(100% - 48px),transparent 100%),linear-gradient(to left,var(--cds-layer) 0,16px,transparent 16px),linear-gradient(to right,var(--cds-layer) 0,2px,transparent 2px),linear-gradient(to top,var(--cds-layer) 0,2px,transparent 2px)}.cds--modal-scroll-content:has(.cds--dropdown--autoalign){mask-image:none}.cds--modal-scroll-content>*:last-child{margin-block-end:1.5rem}.cds--modal-footer{display:flex;justify-content:flex-end;block-size:4rem;grid-column:1/-1;grid-row:-1/-1;margin-block-start:auto}.cds--modal-footer .cds--btn{flex:0 1 50%;align-items:baseline;margin:0;block-size:4rem;max-inline-size:none;padding-block-end:2rem;padding-block-start:.875rem}.cds--modal-footer--three-button .cds--btn{flex:0 1 25%;align-items:flex-start}.cds--modal-close-button{position:absolute;inset-block-start:0;inset-inline-end:0}.cds--modal-close{padding:.75rem;border:2px solid transparent;background-color:transparent;block-size:3rem;cursor:pointer;inline-size:3rem;transition:background-color .11s cubic-bezier(.2,0,.38,.9)}.cds--modal-close:hover{background-color:var(--cds-layer-hover)}.cds--modal-close:focus{border-color:var(--cds-focus, #0f62fe);outline:none}.cds--modal-close::-moz-focus-inner{border:0}.cds--modal-close__icon{block-size:1.25rem;fill:var(--cds-icon-primary, #161616);inline-size:1.25rem}.cds--body--with-modal-open{overflow:hidden}.cds--body--with-modal-open .cds--modal .cds--tooltip,.cds--body--with-modal-open :host(cds-tearsheet) .cds--tooltip,.cds--body--with-modal-open .cds--modal .cds--overflow-menu-options,.cds--body--with-modal-open .cds--overflow-menu-options{z-index:9000}.cds--modal-container--full-width .cds--modal-content{padding:0;margin:0}.cds--modal--slug.cds--modal{background-color:var(--cds-ai-overlay, rgba(0, 17, 65, .5))}.cds--modal--slug .cds--modal-container{background:linear-gradient(to top,var(--cds-layer, var(--cds-ai-popover-background, #ffffff)) 0%,var(--cds-ai-aura-start, rgba(69, 137, 255, .1)) 0%,15%,var(--cds-ai-aura-end, rgba(255, 255, 255, 0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer, var(--cds-ai-popover-background, #ffffff)),var(--cds-layer, var(--cds-ai-popover-background, #ffffff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start, rgba(166, 200, 255, .64)),var(--cds-ai-border-end, #78a9ff)) border-box,linear-gradient(to top,var(--cds-layer, var(--cds-ai-popover-background, #ffffff)),var(--cds-layer, var(--cds-ai-popover-background, #ffffff))) border-box;border:1px solid transparent;background-color:var(--cds-layer);box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow, rgba(69, 137, 255, .1)),0 24px 40px -24px var(--cds-ai-drop-shadow, rgba(15, 98, 254, .1))}.cds--modal--slug .cds--modal-container:has(.cds--modal-footer){background:linear-gradient(to top,var(--cds-layer, var(--cds-ai-popover-background, #ffffff)) calc(0% + 64px),var(--cds-ai-aura-start, rgba(69, 137, 255, .1)) calc(0% + 64px),15%,var(--cds-ai-aura-end, rgba(255, 255, 255, 0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer, var(--cds-ai-popover-background, #ffffff)),var(--cds-layer, var(--cds-ai-popover-background, #ffffff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start, rgba(166, 200, 255, .64)),var(--cds-ai-border-end, #78a9ff)) border-box,linear-gradient(to top,var(--cds-layer, var(--cds-ai-popover-background, #ffffff)),var(--cds-layer, var(--cds-ai-popover-background, #ffffff))) border-box;box-shadow:inset 0 -80px 0 -16px var(--cds-layer),inset 0 -160px 70px -65px var(--cds-ai-inner-shadow, rgba(69, 137, 255, .1)),0 24px 40px -24px var(--cds-ai-drop-shadow, rgba(15, 98, 254, .1))}.cds--modal--slug .cds--modal-content.cds--modal-scroll-content{mask-image:linear-gradient(to bottom,var(--cds-layer) calc(100% - 80px),transparent calc(100% - 48px),transparent 100%),linear-gradient(to left,var(--cds-layer) 0,16px,transparent 16px),linear-gradient(to right,var(--cds-layer) 0,2px,transparent 2px),linear-gradient(to top,var(--cds-layer) 0,2px,transparent 2px)}.cds--modal-header>.cds--slug:has(+ .cds--modal-close-button),.cds--modal-header>.cds--modal-close-button~.cds--slug,.cds--modal--slug .cds--modal-container-body>.cds--slug{position:absolute;inset-block-start:.625rem;inset-inline-end:3rem}.cds--modal--slug .cds--modal-content--overflow-indicator:before,.cds--modal--slug .cds--modal-content--overflow-indicator{display:none}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--modal-close__icon{fill:ButtonText}}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cds--modal-close:focus{color:Highlight;outline:1px solid Highlight}}.cds--action-set,:host(cds-tearsheet) .cds--tearsheet__buttons{align-items:stretch;justify-content:flex-end;background-color:var(--cds-layer-01, #f4f4f4)}.cds--action-set .cds--action-set__action-button,:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set__action-button,:host(cds-tearsheet) .cds--tearsheet__buttons ::slotted(cds-button){font-size:var(--cds-body-short-01-font-size, .875rem);font-weight:var(--cds-body-short-01-font-weight, 400);line-height:var(--cds-body-short-01-line-height, 1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing, .16px);align-items:center;margin:0}.cds--action-set .cds--action-set__action-button.cds--action-set__action-button--expressive,:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set__action-button.cds--action-set__action-button--expressive,:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set__action-button--expressive::slotted(cds-button){height:4rem;padding-top:1rem;padding-bottom:2rem}.cds--action-set.cds--btn-set .cds--action-set__action-button.cds--btn.cds--btn--expressive,.cds--action-set.cds--btn-set .cds--action-set__action-button.cds--btn,:host(cds-tearsheet) .cds--btn-set.cds--tearsheet__buttons .cds--action-set__action-button.cds--btn,:host(cds-tearsheet) .cds--action-set.cds--btn-set .cds--tearsheet__buttons .cds--btn::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set.cds--btn-set .cds--btn::slotted(cds-button),:host(cds-tearsheet) .cds--btn-set.cds--tearsheet__buttons .cds--btn::slotted(cds-button){max-width:none}.cds--action-set:not(.cds--action-set--stacking) .cds--action-set__action-button--ghost,:host(cds-tearsheet) .cds--tearsheet__buttons:not(.cds--action-set--stacking) .cds--action-set__action-button--ghost{padding-left:2rem}.cds--action-set.cds--action-set--row-single.cds--action-set--md .cds--action-set__action-button,:host(cds-tearsheet) .cds--action-set--row-single.cds--action-set--md.cds--tearsheet__buttons .cds--action-set__action-button,:host(cds-tearsheet) .cds--action-set.cds--action-set--row-single.cds--action-set--md .cds--tearsheet__buttons ::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set.cds--action-set--row-single.cds--action-set--md ::slotted(cds-button),:host(cds-tearsheet) .cds--action-set--row-single.cds--action-set--md.cds--tearsheet__buttons ::slotted(cds-button),.cds--action-set.cds--action-set--row-single .cds--action-set__action-button--ghost,:host(cds-tearsheet) .cds--action-set--row-single.cds--tearsheet__buttons .cds--action-set__action-button--ghost{flex:0 0 100%}.cds--action-set.cds--action-set--row-double .cds--action-set__action-button--ghost,:host(cds-tearsheet) .cds--action-set--row-double.cds--tearsheet__buttons .cds--action-set__action-button--ghost{flex:1 1 75%}.cds--action-set.cds--action-set--row-single.cds--action-set--lg .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--action-set--row-single.cds--action-set--lg.cds--tearsheet__buttons .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--action-set.cds--action-set--row-single.cds--action-set--lg .cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set.cds--action-set--row-single.cds--action-set--lg :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--action-set--row-single.cds--action-set--lg.cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button),.cds--action-set.cds--action-set--row-double.cds--action-set--md .cds--action-set__action-button,:host(cds-tearsheet) .cds--action-set--row-double.cds--action-set--md.cds--tearsheet__buttons .cds--action-set__action-button,:host(cds-tearsheet) .cds--action-set.cds--action-set--row-double.cds--action-set--md .cds--tearsheet__buttons ::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set.cds--action-set--row-double.cds--action-set--md ::slotted(cds-button),:host(cds-tearsheet) .cds--action-set--row-double.cds--action-set--md.cds--tearsheet__buttons ::slotted(cds-button),.cds--action-set.cds--action-set--row-double.cds--action-set--lg .cds--action-set__action-button,:host(cds-tearsheet) .cds--action-set--row-double.cds--action-set--lg.cds--tearsheet__buttons .cds--action-set__action-button,:host(cds-tearsheet) .cds--action-set.cds--action-set--row-double.cds--action-set--lg .cds--tearsheet__buttons ::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set.cds--action-set--row-double.cds--action-set--lg ::slotted(cds-button),:host(cds-tearsheet) .cds--action-set--row-double.cds--action-set--lg.cds--tearsheet__buttons ::slotted(cds-button),.cds--action-set.cds--action-set--row-triple .cds--action-set__action-button--ghost,:host(cds-tearsheet) .cds--action-set--row-triple.cds--tearsheet__buttons .cds--action-set__action-button--ghost{flex:0 1 50%}.cds--action-set.cds--action-set--row-triple .cds--action-set__action-button--ghost,:host(cds-tearsheet) .cds--action-set--row-triple.cds--tearsheet__buttons .cds--action-set__action-button--ghost{flex:1 1 50%}.cds--action-set.cds--btn-set.cds--action-set--row-triple.cds--action-set--lg .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--btn-set.cds--action-set--row-triple.cds--action-set--lg.cds--tearsheet__buttons .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--action-set.cds--btn-set.cds--action-set--row-triple.cds--action-set--lg .cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set.cds--btn-set.cds--action-set--row-triple.cds--action-set--lg :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--btn-set.cds--action-set--row-triple.cds--action-set--lg.cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button),.cds--action-set.cds--btn-set.cds--action-set--xl .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--btn-set.cds--action-set--xl.cds--tearsheet__buttons .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--action-set.cds--btn-set.cds--action-set--xl .cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set.cds--btn-set.cds--action-set--xl :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--btn-set.cds--action-set--xl.cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button),.cds--action-set.cds--btn-set.cds--action-set--2xl .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--btn-set.cds--action-set--2xl.cds--tearsheet__buttons .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--action-set.cds--btn-set.cds--action-set--2xl .cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set.cds--btn-set.cds--action-set--2xl :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--btn-set.cds--action-set--2xl.cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button),.cds--action-set.cds--btn-set.cds--action-set--row-quadruple .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--btn-set.cds--action-set--row-quadruple.cds--tearsheet__buttons .cds--action-set__action-button:not(.cds--action-set__action-button--ghost),:host(cds-tearsheet) .cds--action-set.cds--btn-set.cds--action-set--row-quadruple .cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set.cds--btn-set.cds--action-set--row-quadruple :not(.cds--action-set__action-button--ghost)::slotted(cds-button),:host(cds-tearsheet) .cds--btn-set.cds--action-set--row-quadruple.cds--tearsheet__buttons :not(.cds--action-set__action-button--ghost)::slotted(cds-button){max-width:14.5rem;flex:0 1 25%}.cds--action-set.cds--btn-set.cds--action-set--row-quadruple .cds--action-set__action-button--ghost,:host(cds-tearsheet) .cds--btn-set.cds--action-set--row-quadruple.cds--tearsheet__buttons .cds--action-set__action-button--ghost{flex:1 1 25%}.cds--action-set .cds--action-set__action-button .cds--inline-loading,:host(cds-tearsheet) .cds--tearsheet__buttons .cds--action-set__action-button .cds--inline-loading,:host(cds-tearsheet) .cds--tearsheet__buttons ::slotted(cds-button) .cds--inline-loading{position:absolute;top:0;right:0;width:2rem}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context: var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context: var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min: var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max: var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context: var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context: var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min: var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max: var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context: var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min: var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max: var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context: var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-condensed, .5rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, .5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}.cds--assistive-text,.cds--visually-hidden,:host(cds-tearsheet) .cds--tearsheet__buttons[hidden],:host(cds-tearsheet) .cds--tearsheet__buttons ::slotted(cds-button[hidden]),:host(cds-tearsheet[hidden]){position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--tearsheet.cds--tearsheet,:host(cds-tearsheet){--overlay-color: var(--cds-overlay, rgba(22, 22, 22, .5));--overlay-opacity: 1;z-index:9001;align-items:flex-end;color:var(--cds-text-primary, #161616);transition:visibility 0s linear .24s,background-color .24s cubic-bezier(.4,.14,1,1),opacity .24s cubic-bezier(.4,.14,1,1);--cds--tearsheet--stacking-scale-factor-single: .95;--cds--tearsheet--stacking-scale-factor-double: .9}.cds--tearsheet.cds--tearsheet:before{position:absolute;display:block;background:var(--overlay-color);content:"";inset:0;opacity:var(--overlay-opacity);transition:background-color .24s cubic-bezier(.4,.14,1,1),opacity .24s cubic-bezier(.4,.14,1,1)}@media (prefers-reduced-motion: reduce){.cds--tearsheet.cds--tearsheet:before{transition:none}}.cds--tearsheet.cds--tearsheet.cds--tearsheet.cds--tearsheet,:host(cds-tearsheet){background:initial}.cds--tearsheet.is-visible{z-index:9000;align-items:flex-end;transition:visibility 0s linear,background-color .24s cubic-bezier(0,0,.3,1),opacity .24s cubic-bezier(0,0,.3,1)}@media (prefers-reduced-motion: reduce){.cds--tearsheet.is-visible{transition:none}}.cds--tearsheet.cds--tearsheet--stacked-1-of-2{--overlay-opacity: .67;z-index:8999}.cds--tearsheet.cds--tearsheet--stacked-1-of-3{--overlay-opacity: .22;z-index:8998}.cds--tearsheet.cds--tearsheet--stacked-2-of-3{--overlay-opacity: .5;z-index:8999}.cds--tearsheet.cds--tearsheet--stacked-2-of-2,.cds--tearsheet.cds--tearsheet--stacked-3-of-3{--overlay-opacity: .5}.cds--tearsheet .cds--tearsheet__container,:host(cds-tearsheet) .cds--tearsheet__container{top:auto;height:100%;max-height:calc(100% - 3rem);transform:translate3d(0,min(95vh,500px),0)}.cds--tearsheet.cds--tearsheet.cds--tearsheet.cds--tearsheet.cds--tearsheet--has-slug .cds--tearsheet__container{border:1px solid transparent;border-bottom:0;background:linear-gradient(to top,var(--cds-layer),var(--cds-layer)) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start, #78a9ff),var(--cds-ai-border-end, #d0e2ff)) border-box,linear-gradient(to top,var(--cds-layer),var(--cds-layer)) border-box;box-shadow:0 4px 10px 2px var(--cds-ai-drop-shadow, rgba(15, 98, 254, .1))}.cds--tearsheet.cds--tearsheet.cds--tearsheet .cds--tearsheet__container,:host(cds-tearsheet) .cds--tearsheet__container{transition:transform .24s cubic-bezier(0,0,.3,1),max-height .24s cubic-bezier(0,0,.3,1)}.cds--tearsheet.cds--tearsheet--stacked-1-of-2 .cds--tearsheet__container:not(.cds--tearsheet__container--mixed-size-stacking),.cds--tearsheet.cds--tearsheet--stacked-2-of-3 .cds--tearsheet__container:not(.cds--tearsheet__container--mixed-size-stacking){max-height:calc(100% - 2rem)}.cds--tearsheet.cds--tearsheet--stacked-1-of-3 .cds--tearsheet__container:not(.cds--tearsheet__container--mixed-size-stacking){max-height:calc(100% - 1rem)}.cds--tearsheet .cds--tearsheet__container--lower,:host(cds-tearsheet) .cds--tearsheet__container--lower,:host(cds-tearsheet) .cds--tearsheet__container{max-height:calc(100% - 5.5rem)}.cds--tearsheet.cds--tearsheet--stacked-1-of-2 .cds--tearsheet__container--lower:not(.cds--tearsheet__container--mixed-size-stacking),:host(cds-tearsheet) .cds--tearsheet.cds--tearsheet--stacked-1-of-2 .cds--tearsheet__container:not(.cds--tearsheet__container--mixed-size-stacking),.cds--tearsheet.cds--tearsheet--stacked-2-of-3 .cds--tearsheet__container--lower:not(.cds--tearsheet__container--mixed-size-stacking),:host(cds-tearsheet) .cds--tearsheet.cds--tearsheet--stacked-2-of-3 .cds--tearsheet__container:not(.cds--tearsheet__container--mixed-size-stacking){max-height:calc(100% - 4.5rem)}.cds--tearsheet.cds--tearsheet--stacked-1-of-3 .cds--tearsheet__container--lower:not(.cds--tearsheet__container--mixed-size-stacking),:host(cds-tearsheet) .cds--tearsheet.cds--tearsheet--stacked-1-of-3 .cds--tearsheet__container:not(.cds--tearsheet__container--mixed-size-stacking){max-height:calc(100% - 3.5rem)}.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__container{width:100%}.cds--tearsheet.cds--tearsheet--wide .cds--action-set .cds--action-set__action-button.cds--action-set__action-button--expressive,:host(cds-tearsheet) .cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__buttons .cds--action-set__action-button.cds--action-set__action-button--expressive,:host(cds-tearsheet) .cds--tearsheet__buttons .cds--tearsheet.cds--tearsheet--wide .cds--action-set .cds--action-set__action-button--expressive::slotted(cds-button),:host(cds-tearsheet) .cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__buttons .cds--action-set__action-button--expressive::slotted(cds-button){height:5rem}@media (min-width: 42rem){.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__container{width:calc(100% - 8rem)}}.cds--tearsheet.cds--tearsheet--stacked-1-of-2.is-visible .cds--tearsheet__container,.cds--tearsheet.cds--tearsheet--stacked-2-of-3.is-visible .cds--tearsheet__container{transform:scale(var(--cds--tearsheet--stacking-scale-factor-single))}.cds--tearsheet.cds--tearsheet--stacked-1-of-3.is-visible .cds--tearsheet__container{transform:scale(var(--cds--tearsheet--stacking-scale-factor-double))}.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__header{padding:1.5rem 2rem;border-bottom:1px solid var(--cds-border-subtle-01, #c6c6c6);margin:0;background-color:var(--cds-layer)}.cds--tearsheet.cds--tearsheet--narrow .cds--tearsheet__header{padding:1rem;border-bottom:1px solid var(--cds-border-subtle-01, #c6c6c6);margin:0;background-color:var(--cds-layer)}.cds--tearsheet .cds--tearsheet__header-content,:host(cds-tearsheet) .cds--tearsheet__header-content{display:flex;justify-content:space-between}.cds--tearsheet .cds--tearsheet__header-fields,:host(cds-tearsheet) .cds--tearsheet__header-fields{flex:1 1 100%}.cds--tearsheet .cds--tearsheet__header-actions,:host(cds-tearsheet) .cds--tearsheet__header-actions{flex:0 0 auto;padding-left:1.5rem}.cds--tearsheet .cds--tearsheet__header-actions .cds--btn-set .cds--btn:not(:first-of-type),:host(cds-tearsheet) .cds--tearsheet__header-actions .cds--btn-set .cds--btn:not(:first-of-type){margin-left:.5rem}.cds--tearsheet .cds--tearsheet__header--no-close-icon,:host(cds-tearsheet) .cds--tearsheet__header--no-close-icon{display:none}.cds--tearsheet.cds--tearsheet--wide .cds--modal-header__heading.cds--tearsheet__heading{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}.cds--tearsheet .cds--tearsheet__header-description,:host(cds-tearsheet) .cds--tearsheet__header-description{display:-webkit-box;overflow:hidden;max-width:100%;margin-top:1rem;font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-word}@media (min-width: 42rem){.cds--tearsheet .cds--tearsheet__header-description,:host(cds-tearsheet) .cds--tearsheet__header-description{max-width:60%}}.cds--tearsheet.cds--tearsheet--narrow .cds--tearsheet__header-description{margin-top:.5rem}.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__header.cds--tearsheet__header--with-nav{padding:1.5rem 2rem 0}.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__header.cds--tearsheet__header--with-close-icon,.cds--tearsheet.cds--tearsheet--has-slug .cds--tearsheet__header.cds--tearsheet__header{padding-inline-end:5rem}.cds--tearsheet.cds--tearsheet--wide.cds--tearsheet--has-slug .cds--tearsheet__header.cds--tearsheet__header--with-close-icon{padding-inline-end:8rem}.cds--tearsheet.cds--tearsheet--narrow .cds--tearsheet__header-description{max-width:80%}.cds--tearsheet .cds--tearsheet__header-navigation,:host(cds-tearsheet) .cds--tearsheet__header-navigation{margin:.75rem 0 0}.cds--tearsheet.cds--tearsheet .cds--tearsheet__body,:host(cds-tearsheet) .cds--tearsheet__body{display:flex;flex-direction:row;padding:0;margin:0}.cds--tearsheet .cds--tearsheet__resize-detector,:host(cds-tearsheet) .cds--tearsheet__resize-detector{width:100%;height:0}.cds--tearsheet .cds--tearsheet__influencer,:host(cds-tearsheet) .cds--tearsheet__influencer{flex:0 0 257px;border-right:1px solid var(--cds-border-subtle-01, #c6c6c6);overflow-y:auto}.cds--tearsheet .cds--tearsheet__influencer.cds--tearsheet__influencer p,:host(cds-tearsheet) .cds--tearsheet__influencer.cds--tearsheet__influencer p{padding-right:0}@media (max-width: 41.98rem){.cds--tearsheet .cds--tearsheet__container,:host(cds-tearsheet) .cds--tearsheet__container{max-height:100%}.cds--tearsheet .cds--tearsheet__influencer,:host(cds-tearsheet) .cds--tearsheet__influencer{flex-basis:auto}}.cds--tearsheet .cds--tearsheet__influencer--wide,:host(cds-tearsheet) .cds--tearsheet__influencer--wide,:host(cds-tearsheet) .cds--tearsheet__influencer[wide]{flex-basis:321px}.cds--tearsheet .cds--tearsheet__right,:host(cds-tearsheet) .cds--tearsheet__right{display:grid;flex-grow:1;grid-template-columns:100%;grid-template-rows:1fr auto}.cds--tearsheet .cds--tearsheet__main,:host(cds-tearsheet) .cds--tearsheet__main{display:flex;flex-direction:row;background-color:var(--cds-background, #ffffff);grid-column:1/-1;grid-row:1/-1}.cds--tearsheet.cds--tearsheet--narrow .cds--tearsheet__main{background-color:var(--cds-layer)}.cds--tearsheet .cds--tearsheet__main .cds--tearsheet__influencer,:host(cds-tearsheet) .cds--tearsheet__main .cds--tearsheet__influencer{border-right:none;border-left:1px solid var(--cds-border-subtle-01, #c6c6c6)}.cds--tearsheet .cds--tearsheet__content,:host(cds-tearsheet) .cds--tearsheet__content{overflow:auto;flex-grow:1}.cds--tearsheet.cds--tearsheet--has-slug .cds--tearsheet__content{background:linear-gradient(to top,var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff)) 0%,var(--cds-ai-aura-start, rgba(69, 137, 255, .1)) 0%,15%,var(--cds-ai-aura-end, rgba(255, 255, 255, 0)) 50%) padding-box,linear-gradient(to top,var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff)),var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start, rgba(166, 200, 255, .64)),var(--cds-ai-border-end, #78a9ff)) border-box,linear-gradient(to top,var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff)),var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff))) border-box;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow, rgba(69, 137, 255, .1))}.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--pagination,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--pagination__control-buttons,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--text-input,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--text-area,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--search-input,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--select-input,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--dropdown,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--dropdown-list,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--number input[type=number],.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--date-picker__input{background-color:var(--cds-field)}.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--select--inline .cds--select-input{background-color:transparent}.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--text-input--light,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--text-area--light,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--search--light .cds--search-input,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--select--light .cds--select-input,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--dropdown--light,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--dropdown--light .cds--dropdown-list,.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--number--light input[type=number],.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__content .cds--date-picker--light .cds--date-picker__input{background-color:var(--cds-field-02, #ffffff)}.cds--tearsheet .cds--tearsheet__button-container,:host(cds-tearsheet) .cds--tearsheet__button-container,:host(cds-tearsheet) .cds--tearsheet__buttons{grid-column:1/-1;grid-row:-1/-1;overflow-x:auto}.cds--tearsheet .cds--tearsheet__buttons,:host(cds-tearsheet) .cds--tearsheet__buttons{display:inline-flex;min-width:100%;border-top:1px solid var(--cds-border-subtle-01, #c6c6c6)}.cds--tearsheet.cds--tearsheet--wide .cds--tearsheet__buttons{background:var(--cds-background, #ffffff)}.cds--tearsheet.cds--tearsheet--has-slug{--overlay-color: var(--cds-ai-overlay, rgba(0, 17, 65, .5))}.cds--tearsheet.cds--tearsheet--has-slug:not(.cds--tearsheet--has-close) .cds--slug{inset-inline-end:0}:host(cds-tearsheet){--content-padding: 1rem}:host(cds-tearsheet) .cds--tearsheet__header,:host(cds-tearsheet) .cds--tearsheet__content,:host(cds-tearsheet) .cds--tearsheet__influencer{padding:var(--content-padding)}:host(cds-tearsheet) .cds--tearsheet__container{max-block-size:calc(100% - 5.5rem)}:host(cds-tearsheet) .cds--tearsheet__container[stack-position="1"][stack-depth="2"],:host(cds-tearsheet) .cds--tearsheet__container[stack-position="2"][stack-depth="3"]{max-block-size:calc(100% - 4.5rem);transform:scale(var(--cds--tearsheet--stacking-scale-factor-single))}:host(cds-tearsheet) .cds--tearsheet__container[stack-position="1"][stack-depth="3"]{max-block-size:calc(100% - 3.5rem);transform:scale(var(--cds--tearsheet--stacking-scale-factor-double))}:host(cds-tearsheet) .cds--tearsheet__buttons{display:flex;background:var(--cds-background, #ffffff);inline-size:100%}:host(cds-tearsheet) .cds--tearsheet__buttons[hidden]{display:none}:host(cds-tearsheet) .cds--tearsheet__buttons ::slotted(cds-button){flex:0 1 25%;block-size:5rem;max-inline-size:14.5rem}:host(cds-tearsheet) .cds--tearsheet__buttons ::slotted(cds-button[kind=ghost]){flex:1 1 25%;max-inline-size:none}:host(cds-tearsheet) .cds--tearsheet__buttons ::slotted(cds-button[hidden]){display:none}:host(cds-tearsheet[open]){--overlay-color: var(--cds-overlay, rgba(22, 22, 22, .5));--overlay-opacity: 1;z-index:9000;align-items:flex-end;background:initial;opacity:1;transition:visibility 0s linear;visibility:inherit}:host(cds-tearsheet[open]) .cds--tearsheet__container{transform:translateZ(0);transition:transform .24s cubic-bezier(0,0,.3,1)}@media (prefers-reduced-motion: reduce){:host(cds-tearsheet[open]){transition:none}}:host(cds-tearsheet[open]):before{position:absolute;display:block;background:var(--overlay-color);content:"";inset:0;opacity:var(--overlay-opacity);transition:background-color .24s cubic-bezier(.4,.14,1,1),opacity .24s cubic-bezier(.4,.14,1,1)}@media (prefers-reduced-motion: reduce){:host(cds-tearsheet[open]):before{transition:none}}:host(cds-tearsheet[open]):before [stack-position="1"][stack-depth="2"]{--overlay-opacity: .67}:host(cds-tearsheet[open]):before [stack-position="1"][stack-depth="3"]{--overlay-opacity: .22}:host(cds-tearsheet[open]):before [stack-position="2"][stack-depth="3"]{--overlay-opacity: .5}:host(cds-tearsheet[open]):before [stack-position="2"][stack-depth="2"],:host(cds-tearsheet[open]):before [stack-position="3"][stack-depth="3"]{--overlay-opacity: .5}:host(cds-tearsheet[slug]){--overlay-color: var(--cds-ai-overlay, rgba(0, 17, 65, .5))}:host(cds-tearsheet[slug]) .cds--tearsheet__container{border:1px solid transparent;background:linear-gradient(to top,var(--cds-layer),var(--cds-layer)) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start, #78a9ff),var(--cds-ai-border-end, #d0e2ff)) border-box,linear-gradient(to top,var(--cds-layer),var(--cds-layer)) border-box;border-block-end:0;box-shadow:0 24px 40px -24px var(--cds-ai-drop-shadow, rgba(15, 98, 254, .1))}:host(cds-tearsheet[slug]) .cds--tearsheet__content{background:linear-gradient(to top,var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff)) 0%,var(--cds-ai-aura-start, rgba(69, 137, 255, .1)) 0%,15%,var(--cds-ai-aura-end, rgba(255, 255, 255, 0)) 50%) padding-box,linear-gradient(to top,var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff)),var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start, rgba(166, 200, 255, .64)),var(--cds-ai-border-end, #78a9ff)) border-box,linear-gradient(to top,var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff)),var(--cds-ai-popover-background, var(--cds-ai-popover-background, #ffffff))) border-box;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow, rgba(69, 137, 255, .1))}:host(cds-tearsheet[slug]) .cds--tearsheet__header[has-actions] ::slotted(cds-slug){inset-inline-end:0}:host(cds-tearsheet[stack-position="1"][stack-depth="2"]),:host(cds-tearsheet[stack-position="2"][stack-depth="3"]){z-index:8999}:host(cds-tearsheet[stack-position="1"][stack-depth="3"]){z-index:8998}:host(cds-tearsheet[width=narrow]) .cds--tearsheet__header{margin:0;background-color:var(--cds-layer);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6)}:host(cds-tearsheet[width=narrow]) .cds--tearsheet__header-description{margin-block-start:.5rem;max-inline-size:80%}:host(cds-tearsheet[width=narrow]) .cds--tearsheet__main{background-color:var(--cds-layer)}:host(cds-tearsheet[width=wide]){--content-padding: 1.5rem 2rem}:host(cds-tearsheet[width=wide]) .cds--tearsheet__header{margin:0;background-color:var(--cds-layer);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6)}:host(cds-tearsheet[width=wide]) .cds--tearsheet__header[has-navigation]{padding-block-end:0}:host(cds-tearsheet[width=wide]) .cds--tearsheet__container{inline-size:100%}@media (min-width: 42rem){:host(cds-tearsheet[width=wide]) .cds--tearsheet__container{inline-size:calc(100% - 8rem)}}:host(cds-tearsheet[width=wide]) .cds--modal-header__heading.cds--tearsheet__heading{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}:host(cds-tearsheet[width=wide]) .cds--tearsheet__header[has-close-icon],:host(cds-tearsheet[width=wide]) .cds--tearsheet__header[has-slug]{padding-inline-end:5rem}:host(cds-tearsheet[width=wide]) .cds--tearsheet__header[has-close-icon][has-slug]{padding-inline-end:8rem}:host(cds-tearsheet[width=wide]) .cds--tearsheet__header-navigation{margin-inline-start:-1rem;max-block-size:2.5rem}:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--pagination,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--pagination__control-buttons,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--text-input,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--text-area,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--search-input,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--select-input,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--dropdown,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--dropdown-list,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--number input[type=number],:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--date-picker__input{background-color:var(--cds-field)}:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--select--inline .cds--select-input{background-color:transparent}:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--text-input--light,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--text-area--light,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--search--light .cds--search-input,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--select--light .cds--select-input,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--dropdown--light,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--dropdown--light .cds--dropdown-list,:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--number--light input[type=number],:host(cds-tearsheet[width=wide]) .cds--tearsheet__content .cds--date-picker--light .cds--date-picker__input{background-color:var(--cds-field-02, #ffffff)}:host(cds-tearsheet[width=wide]) .cds--action-set .cds--action-set__action-button.cds--action-set__action-button--expressive,:host(cds-tearsheet):host(cds-tearsheet[width=wide]) .cds--tearsheet__buttons .cds--action-set__action-button.cds--action-set__action-button--expressive,:host(cds-tearsheet):host(cds-tearsheet[width=wide]) .cds--tearsheet__buttons .cds--action-set__action-button--expressive::slotted(cds-button){block-size:5rem}:host(cds-tearsheet[width=narrow]) .cds--tearsheet__buttons[actions-multiple=single] ::slotted(cds-button),:host(cds-tearsheet[width=narrow]) .cds--tearsheet__buttons[actions-multiple=double] ::slotted(cds-button){flex:0 1 50%;max-inline-size:none}:host(cds-tearsheet[width=narrow]) .cds--tearsheet__buttons ::slotted(cds-button){block-size:4rem}
`,be=re(he);/**
 * @license
 *
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=(e=>(e.RIGHT="right",e.LEFT="left",e))(f||{}),y=(e=>(e.NARROW="narrow",e.WIDE="wide",e))(y||{}),b=(e=>(e.NARROW="narrow",e.WIDE="wide",e))(b||{}),ue=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,c=(e,t,o,r)=>{for(var d=r>1?void 0:r?ve(t,o):t,v=e.length-1,g;v>=0;v--)(g=e[v])&&(d=(r?g(t,o,d):g(d))||d);return r&&d&&ue(t,o,d),d};const ge=3,fe=Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINS,me=Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY,i=`${h}--tearsheet`,D=`${h}--modal-header`,_e=`${h}--action-set`;function S(e,t){if(t)for(let o=e.length-1;o>=0;--o){const r=e[o];if(r.focus(),r.ownerDocument.activeElement===r)return!0}else for(let o=0;o<e.length;++o){const r=e[o];if(r.focus(),r.ownerDocument.activeElement===r)return!0}return!1}let s=class extends pe(ae){constructor(){super(...arguments),this._launcher=null,this._actionsCount=0,this._hasHeaderActions=!1,this._hasLabel=!1,this._hasSlug=!1,this._hasTitle=!1,this._hasDescription=!1,this._hasInfluencerLeft=!1,this._hasInfluencerRight=!1,this._isOpen=!1,this._hasHeaderNavigation=!1,this._handleClick=e=>{e.composedPath().indexOf(this.shadowRoot)<0&&!this.preventCloseOnClickOutside&&this._handleUserInitiatedClose(e.target)},this._handleBlur=async({target:e,relatedTarget:t})=>{var C;if(!this._topOfStack())return;const{open:o,_startSentinelNode:r,_endSentinelNode:d}=this,v=e!==this&&this.contains(e),g=t!==this&&(this.contains(t)||((C=this.shadowRoot)==null?void 0:C.contains(t))&&t!==r&&t!==d),{selectorTabbable:x}=this.constructor;if(o&&t&&v&&!g){const R=e.compareDocumentPosition(t);t===r||R&fe?(await this.constructor._delay(),!S(this.querySelectorAll(x),!0)&&t!==this&&this.focus()):(t===d||R&me)&&(await this.constructor._delay(),S(this.querySelectorAll(x),!0)||this.focus())}},this._handleKeydown=({key:e,target:t})=>{(e==="Esc"||e==="Escape")&&this._topOfStack()&&this._handleUserInitiatedClose(t)},this.ariaLabel="",this.closeIconDescription="Close",this.hasCloseIcon=!1,this.influencerPlacement=f.RIGHT,this.influencerWidth=y.NARROW,this.open=!1,this.preventCloseOnClickOutside=!1,this.width=b.NARROW,this._checkUpdateActionSizes=()=>{if(this._actions)for(let e=0;e<this._actions.length;e++)this._actions[e].setAttribute("size",this.width==="wide"?"2xl":"xl")},this._maxActions=4,this._stackDepth=-1,this._stackPosition=-1,this._topOfStack=()=>this._stackDepth===this._stackPosition,this._notifyStack=()=>{s._stack.all.forEach(e=>{e(Math.min(s._stack.open.length,ge),s._stack.open.indexOf(e)+1)})},this._handleStackChange=(e,t)=>{this._stackDepth=e,this._stackPosition=t,this._stackDepth>1&&this._stackPosition>0?(this.setAttribute("stack-position",`${t}`),this.setAttribute("stack-depth",`${this._stackDepth}`)):(this.removeAttribute("stack-position"),this.removeAttribute("stack-depth"))},this._updateStack=()=>{if(this.open)s._stack.open.push(this._handleStackChange);else{const e=s._stack.open.indexOf(this._handleStackChange);e>=0&&s._stack.open.splice(e,1)}this._notifyStack()},this.actionsMultiple=["","single","double","triple"][this._actionsCount],this._checkSetOpen=()=>{const{_tearsheet:e}=this;e&&this._isOpen?e.addEventListener("transitionend",()=>{this._isOpen=!1}):window.requestAnimationFrame(()=>{this._isOpen=this.open})}}_checkSetHasSlot(e){var v;const t=e.target,o=t.getAttribute("data-postfix"),r=o?`-${o}`:"",d=`_has-${t.name}${r}`.replace(/-./g,g=>g[1].toUpperCase());this[d]=(((v=t==null?void 0:t.assignedElements())==null?void 0:v.length)??0)>0}_handleClickContainer(e){e.target.matches(this.constructor.selectorCloseButton)&&this._handleUserInitiatedClose(e.target)}_handleUserInitiatedClose(e){if(this.open){const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,t))&&(this.open=!1,this.dispatchEvent(new CustomEvent(this.constructor.eventClose,t)))}}_handleSlugChange(e){const t=e.target.assignedElements();this._hasSlug=t.length>0,this._hasSlug?(t[0].setAttribute("size","lg"),this.setAttribute("slug","")):this.removeAttribute("slug")}_handleActionsChange(e){const t=e.target,o=t==null?void 0:t.assignedElements(),r=(o==null?void 0:o.length)??0;r>this._maxActions?(this._actionsCount=this._maxActions,console.error(`Too many tearsheet actions, max ${this._maxActions}.`)):this._actionsCount=r;for(let d=0;d<(o==null?void 0:o.length);d++)d+1>this._maxActions?(o[d].setAttribute("hidden","true"),o[d].setAttribute(`data-actions-limit-${this._maxActions}-exceeded`,`${o.length}`)):o[d].classList.add(`${_e}__action-button`);this._checkUpdateActionSizes()}connectedCallback(){super.connectedCallback(),s._stack.all.push(this._handleStackChange)}disconnectedCallback(){super.disconnectedCallback();const e=s._stack.all.indexOf(this._handleStackChange);s._stack.all.splice(e,1);const t=s._stack.all.indexOf(this._handleStackChange);s._stack.open.splice(t,1)}render(){const{closeIconDescription:e,influencerPlacement:t,influencerWidth:o,open:r,width:d}=this,v=["","single","double","triple"][this._actionsCount],g=n`<div
      class=${`${i}__header-fields`}>
      <h2 class=${`${D}__label`} ?hidden=${!this._hasLabel}>
        <slot name="label" @slotchange=${this._checkSetHasSlot}></slot>
      </h2>
      <h3
        class=${`${D}__heading ${i}__heading`}
        ?hidden=${!this._hasTitle}>
        <slot name="title" @slotchange=${this._checkSetHasSlot}></slot>
      </h3>
      <div
        class=${`${i}__header-description`}
        ?hidden=${!this._hasDescription}>
        <slot name="description" @slotchange=${this._checkSetHasSlot}></slot>
      </div>
    </div>`,x=n` <div
      class=${`${i}__header-actions`}
      ?hidden=${!this._hasHeaderActions||this.width==="narrow"}>
      <slot name="header-actions" @slotchange=${this._checkSetHasSlot}></slot>
    </div>`,C=n` <cds-modal-header
      class=${`${i}__header`}
      ?has-close-icon=${this.hasCloseIcon||(this==null?void 0:this._actionsCount)===0}
      ?has-navigation=${this._hasHeaderNavigation&&this.width==="wide"}
      ?has-header-actions=${this._hasHeaderActions&&this.width==="wide"}
      ?has-actions=${(this==null?void 0:this._actionsCount)>0}
      ?has-slug=${this==null?void 0:this._hasSlug}
      width=${d}>
      ${this.width===b.WIDE?n`<cds-layer level="1" class=${`${i}__header-content`}
            >${g}${x}</cds-layer
          >`:n`<div>${g}${x}</div>`}

      <div
        class=${`${i}__header-navigation`}
        ?hidden=${!this._hasHeaderNavigation||this.width==="narrow"}>
        <slot
          name="header-navigation"
          @slotchange=${this._checkSetHasSlot}></slot>
      </div>
      <slot name="slug" @slotchange=${this._handleSlugChange}></slot>
      ${this.hasCloseIcon||(this==null?void 0:this._actionsCount)===0?n`<cds-modal-close-button
            close-button-label=${e}
            @click=${this._handleUserInitiatedClose}></cds-modal-close-button>`:""}
    </cds-modal-header>`;return n`
      <a
        id="start-sentinel"
        class="${h}--visually-hidden"
        href="javascript:void 0"
        role="navigation"></a>
      <div
        aria-label=${this.ariaLabel}
        class=${`${i}__container ${h}--modal-container ${h}--modal-container--sm`}
        part="dialog"
        role="complementary"
        ?open=${this._isOpen}
        ?opening=${r&&!this._isOpen}
        ?closing=${!r&&this._isOpen}
        width=${d}
        stack-position=${this._stackPosition}
        stack-depth=${this._stackDepth}
        @click=${this._handleClickContainer}>
        <!-- Header -->
        ${C}

        <!-- Body  -->
        <cds-modal-body class=${`${i}__body`} width=${d}>
          <!-- Influencer when on left -->
          ${t!==f.RIGHT?n`<div
                class=${`${i}__influencer`}
                ?wide=${o==="wide"}
                ?hidden=${!this._hasInfluencerLeft||this.width===b.NARROW}>
                <slot
                  name="influencer"
                  data-postfix="left"
                  @slotchange=${this._checkSetHasSlot}></slot>
              </div>`:""}

          <div class=${`${i}__right`}>
            <div class=${`${i}__main`}>
              <div class=${`${i}__content`}>
                <cds-layer level="0">
                  <slot></slot>
                </cds-layer>
              </div>

              <!-- Influencer when on right -->
              ${t===f.RIGHT?n`<div
                    class=${`${i}__influencer`}
                    ?wide=${o}
                    ?hidden=${!this._hasInfluencerRight||this.width===b.NARROW}>
                    <slot
                      name="influencer"
                      data-postfix="right"
                      @slotchange=${this._checkSetHasSlot}></slot>
                  </div>`:""}
            </div>
            <!-- Action buttons -->
            <cds-button-set-base
              class=${`${i}__buttons ${i}__button-container`}
              actions-multiple=${v}
              ?tearsheet-wide=${d==="wide"}
              ?hidden=${this._actionsCount===0}>
              <slot
                name="actions"
                @slotchange=${this._handleActionsChange}></slot>
            </cds-button-set-base>
          </div>
        </cds-modal-body>
      </div>
      <a
        id="end-sentinel"
        class="${h}--visually-hidden"
        href="javascript:void 0"
        role="navigation"></a>
    `}async updated(e){if(e.has("width")&&this._checkUpdateActionSizes(),e.has("open"))if(this._updateStack(),this._checkSetOpen(),this.open){this._launcher=this.ownerDocument.activeElement;const t=this.selectorInitialFocus&&this.querySelector(this.selectorInitialFocus);await this.constructor._delay(),t?t.focus():S(this.querySelectorAll(this.constructor.selectorTabbable),!0)||this.focus()}else this._launcher&&typeof this._launcher.focus=="function"&&(this._launcher.focus(),this._launcher=null)}static _delay(e=0){return new Promise(t=>{setTimeout(t,e)})}static get selectorCloseButton(){return`[data-modal-close],${h}-modal-close-button`}static get selectorTabbable(){return ie}static get eventBeforeClose(){return`${h}-tearsheet-beingclosed`}static get eventClose(){return`${h}-tearsheet-closed`}static get eventNavigateBack(){return`${h}-tearsheet-header-navigate-back`}};s._stack={open:[],all:[]};s.styles=be;c([O("#start-sentinel")],s.prototype,"_startSentinelNode",2);c([O("#end-sentinel")],s.prototype,"_endSentinelNode",2);c([O(`.${i}__container`)],s.prototype,"_tearsheet",2);c([de({slot:"actions",selector:`${h}-button`})],s.prototype,"_actions",2);c([u()],s.prototype,"_actionsCount",2);c([u()],s.prototype,"_hasHeaderActions",2);c([u()],s.prototype,"_hasLabel",2);c([u()],s.prototype,"_hasSlug",2);c([u()],s.prototype,"_hasTitle",2);c([u()],s.prototype,"_hasDescription",2);c([u()],s.prototype,"_hasInfluencerLeft",2);c([u()],s.prototype,"_hasInfluencerRight",2);c([u()],s.prototype,"_isOpen",2);c([u()],s.prototype,"_hasHeaderNavigation",2);c([N("click")],s.prototype,"_handleClick",2);c([N("shadowRoot:focusout")],s.prototype,"_handleBlur",2);c([N("document:keydown")],s.prototype,"_handleKeydown",2);c([m({reflect:!0,attribute:"aria-label"})],s.prototype,"ariaLabel",2);c([m({reflect:!0,attribute:"close-icon-description"})],s.prototype,"closeIconDescription",2);c([m({reflect:!0,type:Boolean,attribute:"has-close-icon"})],s.prototype,"hasCloseIcon",2);c([m({reflect:!0,attribute:"influencer-placement"})],s.prototype,"influencerPlacement",2);c([m({reflect:!0,attribute:"influencer-width"})],s.prototype,"influencerWidth",2);c([m({type:Boolean,reflect:!0})],s.prototype,"open",2);c([m({type:Boolean,attribute:"prevent-close-on-click-outside"})],s.prototype,"preventCloseOnClickOutside",2);c([m({reflect:!0,attribute:"selector-initial-focus",type:String})],s.prototype,"selectorInitialFocus",2);c([m({reflect:!0,attribute:"width"})],s.prototype,"width",2);c([u()],s.prototype,"_stackDepth",2);c([u()],s.prototype,"_stackPosition",2);s=c([le(`${h}-tearsheet`)],s);const E=`#page-content-selector{position:absolute;z-index:9999;inset-block-start:0;inset-inline-start:0}.tearsheet-stories__tabs .cds--tab-content{display:none}
`;/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const ye=()=>{var e;(e=document.querySelector(`${h}-tearsheet`))==null||e.toggleAttribute("open")},xe={[`Narrow (${b.NARROW})`]:b.NARROW,[`Wide (${b.WIDE})`]:b.WIDE},we={[`Narrow (${y.NARROW})`]:y.NARROW,[`Wide (${y.WIDE})`]:y.WIDE},ke={[`Left (${f.LEFT})`]:f.LEFT,[`right (${f.RIGHT})`]:f.RIGHT},ze={"No influencer":0,"Simple influencer":1,"Progress influencer":2},T=e=>{switch(e){case 1:return n`<div
        slot="influencer"
        class=${`${p}__dummy-content-block`}>
        Influencer
      </div>`;case 2:return n` <cds-progress-indicator
        vertical
        slot="influencer"
        class=${`${p}__dummy-content-block`}>
        <cds-progress-step
          state="complete"
          label="First step"
          secondary-label="Optional label"
          description="Step 1: Getting started with Carbon Design System"></cds-progress-step>
        <cds-progress-step
          label="Second step with tooltip"
          state="current"></cds-progress-step>
        <cds-progress-step
          label="Third step with tooltip"
          state="incomplete"></cds-progress-step>
        <cds-progress-step
          label="Fourth step"
          secondary-label="Example invalid step"
          state="invalid"></cds-progress-step>
        <cds-progress-step
          disabled
          label="Fifth step"
          state="incomplete"></cds-progress-step>
      </cds-progress-indicator>`;default:return null}},$e={Empty:0,"Brief content":1,"Longer content":2},p="tearsheet-stories",Ie=e=>{switch(e){case 1:return n`
        <style>
          ${E}
        </style>
        <div class=${`${p}__dummy-content-block`}>
          <h5>Section</h5>
          <cds-text-input
            label="Input A"
            id="tearsheet-story-text-input-a"
            class="${p}text-input"></cds-text-input>
          <cds-text-input
            label="Input B"
            id="tearsheet-story-text-input-b"
            class="${p}text-input"></cds-text-input>
        </div>
      `;case 2:return n` <style>
          ${E}
        </style>
        <div class=${`${p}__dummy-content-block`}>
          <h5>Section</h5>
          <div class="${p}text-inputs">
            <cds-text-input
              label="Input A"
              id="tearsheet-story-text-input-a"></cds-text-input>
            <cds-text-input
              label="Input B"
              id="tearsheet-story-text-input-b"></cds-text-input>
          </div>
          <div class="${p}text-inputs">
            <cds-text-input
              label="Input C"
              id="tearsheet-story-text-input-c"></cds-text-input>
            <cds-text-input
              label="Input D"
              id="tearsheet-story-text-input-d"></cds-text-input>
          </div>
          <div class="${p}textarea-container">
            <cds-textarea
              label="Notes"
              value="This is a text area"></cds-textarea>
            <cds-textarea
              label="Notes"
              value="This is a text area"></cds-textarea>
            <cds-textarea
              label="Notes"
              value="This is a text area"></cds-textarea>
          </div>
        </div>`;default:return null}},Ae={"No label":0,"Shorter label":1,"Longer label":2},oe=e=>{switch(e){case 1:return n`<span slot="label">Optional label for context</span>`;case 2:return n`<span slot="label"
        >A longer label giving a bit more context
      </span>`;default:return null}},Ce={"No header actions":0,"Drop down":1,Buttons:2},ne=e=>{switch(e){case 1:return n`<cds-dropdown slot="header-actions">
        ${["option 1","option 2","option 3","option 4"].map(t=>n` <cds-dropdown-item value="${t}"
            >${t}</cds-dropdown-item
          >`)}
      </cds-dropdown>`;case 2:return n`
        <cds-button
          slot="header-actions"
          kind=${a.SECONDARY}
          size="sm"
          style="width: initial">
          Secondary
        </cds-button>
        <cds-button
          slot="header-actions"
          kind=${a.PRIMARY}
          size="sm"
          style="width: initial">
          Primary
        </cds-button>
      `;default:return null}},Se={"No actions":0,"One button":1,"Two buttons with ghost":2,"Two buttons with danger":3,"Three buttons with ghost":4,"Three buttons with danger":5,"Four buttons with ghost":6,"Four buttons with danger":7,"Too many buttons":8},_=e=>e==null?void 0:e.map(t=>n`<cds-button key=${t} slot="actions" kind=${t}>
      ${t.charAt(0).toUpperCase()+t.slice(1)}
    </cds-button>`),Oe=e=>{switch(e){case 1:return _([a.PRIMARY]);case 2:return _([a.GHOST,a.PRIMARY]);case 3:return _([a.DANGER,a.PRIMARY]);case 4:return _([a.GHOST,a.SECONDARY,a.PRIMARY]);case 5:return _([a.DANGER,a.SECONDARY,a.PRIMARY]);case 6:return _([a.GHOST,a.TERTIARY,a.SECONDARY,a.PRIMARY]);case 7:return _([a.DANGER,a.TERTIARY,a.SECONDARY,a.PRIMARY]);case 8:return _([a.GHOST,a.DANGER,a.TERTIARY,a.SECONDARY,a.PRIMARY]);default:return null}},Ne={"No navigation":0,"With navigation":1},ce=e=>{switch(e){case 1:return n` <div
        className="tearsheet-stories__tabs"
        slot="header-navigation">
        <cds-tabs value="1">
          <cds-tab value="1">Tab 1</cds-tab>
          <cds-tab value="2">Tab 2</cds-tab>
          <cds-tab value="3">Tab 3</cds-tab>
          <cds-tab value="4">Tab 4</cds-tab>
        </cds-tabs>
      </div>`;default:return null}},Te={"No Slug":0,"With Slug":1},Re=e=>{switch(e){case 1:return n`<cds-slug size="xs" alignment="bottom-right">
        <div slot="body-text">
          <p class="secondary">AI Explained</p>
          <h1>84%</h1>
          <p class="secondary bold">Confidence score</p>
          <p class="secondary">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <hr />
          <p class="secondary">Model type</p>
          <p class="bold">Foundation model</p>
        </div>
      </cds-slug>`;default:return null}},l={args:{actionItems:Oe(4),headerActions:ne(0),content:Ie(2),label:oe(1),open:!1,influencerWidth:y.NARROW,influencerPlacement:f.LEFT,influencer:T(0),preventCloseOnClickOutside:!1,selectorInitialFocus:"",width:b.WIDE,slug:Re(0),description:"Description used to describe the flow if need be.",title:"Title used to designate the overarching flow of the tearsheet.",headerNavigation:ce(0)},argTypes:{actionItems:{control:"select",description:"Slot (actions)",options:Se},headerActions:{control:"select",description:"Slot (header-toolbar)",options:Ce},content:{control:"select",description:"Slot (default), panel contents",options:$e},label:{control:"select",description:"label",options:Ae},open:{control:"boolean",description:"open"},influencerWidth:{control:"select",description:"influencer-width",options:we},influencerPlacement:{control:"select",description:"influencer-placement",options:ke},influencer:{control:"select",description:"influencer (slot)",options:ze},preventCloseOnClickOutside:{control:"boolean",description:"prevent-close-on-click-outside"},selectorInitialFocus:{control:"text",description:"selector-initial-focus"},width:{control:"select",description:"width",options:xe},slug:{control:"select",description:"slug (AI slug)",options:Te},description:{control:"text",description:"description"},title:{control:"text",description:"title"},headerNavigation:{control:"select",description:"header-navigation",options:Ne}},render:e=>n`
      <div class="${p}story-container">
        <div class="${p}story-header"></div>
        <div id="page-content-selector" class="${p}story-content">
          <cds-button @click="${ye}">Toggle tearsheet</cds-button>
        </div>
      </div>
      <cds-tearsheet
        class=${e.class}
        selector-initial-focus=${e.selectorInitialFocus}
        ?open=${e.open}
        influencer-placement=${e.influencerPlacement}
        influencer-width=${e.influencerWidth}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        width=${e.width}>
        <!-- default slotted content -->
        ${e.content}

        <!-- slotted header label -->
        ${e.label}

        <!-- slotted header title -->
        ${e.title?n`<span slot="title">${e.title}</span>`:""}

        <!-- slotted header description -->
        ${e.description?n`<span slot="description">${e.description}</span>`:""}

        <!-- slotted action in header cds-buttons -->
        ${e.headerActions}

        <!-- slotted action items cds-buttons -->
        ${e.actionItems}

        <!-- slotted slug -->
        ${e.slug}

        <!-- slotted header-navigation -->
        ${e.headerNavigation}

        <!-- slotted influencer -->
        ${e.influencer}
      </cds-tearsheet>
    `},w={...l,args:{...l.args,headerNavigation:ce(1)}},k={...l,args:{...l.args,influencer:T(2)}},z={...l,args:{...l.args,headerActions:ne(2),influencer:T(2)}},$={...l,args:{...l.args,label:oe(0),width:b.NARROW}},I={...l,args:{...l.args,width:b.NARROW}},A={...l,args:{...l.args},render:e=>{const t=o=>{const r=document.querySelector(`[data-index="${o}"]`);r==null||r.toggleAttribute("open")};return n`
      <div class="${p}story-container">
        <div class="${p}story-header"></div>
        <div id="page-content-selector" class="${p}story-content">
          <cds-button-set-base z-index="9999">
            <cds-button @click="${()=>t("one")}"
              >Toggle tearsheet one</cds-button
            >
            <cds-button @click="${()=>t("two")}"
              >Toggle tearsheet two</cds-button
            >
            <cds-button @click="${()=>t("three")}"
              >Toggle tearsheet three</cds-button
            >
          </cds-button-set-base>
        </div>
      </div>
      <cds-tearsheet
        data-index="one"
        class=${e.class}
        selector-initial-focus=${e.selectorInitialFocus}
        ?open=${e.open}
        influencer-placement=${e.influencerPlacement}
        influencer-width=${e.influencerWidth}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        width=${e.width}>
        <!-- default slotted content -->
        <cds-button @click="${()=>t("two")}"
          >Toggle tearsheet two</cds-button
        >
        ${e.content}

        <!-- slotted header label -->
        ${e.label}

        <!-- slotted header title -->
        ${e.title?n`<span slot="title">One ${e.title}</span>`:""}

        <!-- slotted header description -->
        ${e.description?n`<span slot="description">${e.description}</span>`:""}

        <!-- slotted action in header cds-buttons -->
        ${e.headerActions}

        <!-- slotted action items cds-buttons -->
        ${e.actionItems}

        <!-- slotted slug -->
        ${e.slug}

        <!-- slotted header-navigation -->
        ${e.headerNavigation}

        <!-- slotted influencer -->
        ${e.influencer}
      </cds-tearsheet>
      <cds-tearsheet
        data-index="two"
        class=${e.class}
        selector-initial-focus=${e.selectorInitialFocus}
        has-close-icon
        ?open=${e.open}
        influencer-placement=${e.influencerPlacement}
        influencer-width=${e.influencerWidth}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        width=${e.width}>
        <!-- default slotted content -->
        <cds-button @click="${()=>t("three")}"
          >Toggle tearsheet three</cds-button
        >
        ${e.content}

        <!-- slotted header label -->
        ${e.label}

        <!-- slotted header title -->
        ${e.title?n`<span slot="title">Two ${e.title}</span>`:""}

        <!-- slotted header description -->
        ${e.description?n`<span slot="description">${e.description}</span>`:""}

        <!-- slotted action in header cds-buttons -->
        ${e.headerActions}

        <!-- slotted action items cds-buttons -->
        ${e.actionItems}

        <!-- slotted slug -->
        ${e.slug}

        <!-- slotted header-navigation -->
        ${e.headerNavigation}

        <!-- slotted influencer -->
        ${e.influencer}
      </cds-tearsheet>
      <cds-tearsheet
        data-index="three"
        class=${e.class}
        selector-initial-focus=${e.selectorInitialFocus}
        has-close-icon
        ?open=${e.open}
        influencer-placement=${e.influencerPlacement}
        influencer-width=${e.influencerWidth}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        width=${e.width}>
        <!-- default slotted content -->
        ${e.content}

        <!-- slotted header label -->
        ${e.label}

        <!-- slotted header title -->
        ${e.title?n`<span slot="title">Three ${e.title}</span>`:""}

        <!-- slotted header description -->
        ${e.description?n`<span slot="description">${e.description}</span>`:""}

        <!-- slotted action in header cds-buttons -->
        ${e.headerActions}

        <!-- slotted action items cds-buttons -->
        ${e.actionItems}

        <!-- slotted slug -->
        ${e.slug}

        <!-- slotted header-navigation -->
        ${e.headerNavigation}

        <!-- slotted influencer -->
        ${e.influencer}
      </cds-tearsheet>
    `}},De={title:"Experimental/Tearsheet"};var W,P,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    actionItems: getActionItems(4),
    headerActions: getActionToolbarItems(0),
    content: getContent(2),
    label: getLabel(1),
    open: false,
    influencerWidth: TEARSHEET_INFLUENCER_WIDTH.NARROW,
    influencerPlacement: TEARSHEET_INFLUENCER_PLACEMENT.LEFT,
    influencer: getInfluencer(0),
    preventCloseOnClickOutside: false,
    selectorInitialFocus: '',
    width: TEARSHEET_WIDTH.WIDE,
    slug: getSlug(0),
    description: 'Description used to describe the flow if need be.',
    title: 'Title used to designate the overarching flow of the tearsheet.',
    headerNavigation: getNavigation(0)
  },
  argTypes: {
    actionItems: {
      control: 'select',
      description: 'Slot (actions)',
      options: actionItems
    },
    headerActions: {
      control: 'select',
      description: 'Slot (header-toolbar)',
      options: headerActions
    },
    content: {
      control: 'select',
      description: 'Slot (default), panel contents',
      options: contents
    },
    label: {
      control: 'select',
      description: 'label',
      options: labels
    },
    open: {
      control: 'boolean',
      description: 'open'
    },
    influencerWidth: {
      control: 'select',
      description: 'influencer-width',
      options: influencerWidths
    },
    influencerPlacement: {
      control: 'select',
      description: 'influencer-placement',
      options: influencerPlacements
    },
    influencer: {
      control: 'select',
      description: 'influencer (slot)',
      options: influencers
    },
    preventCloseOnClickOutside: {
      control: 'boolean',
      description: 'prevent-close-on-click-outside'
    },
    selectorInitialFocus: {
      control: 'text',
      description: 'selector-initial-focus'
    },
    width: {
      control: 'select',
      description: 'width',
      options: widths
    },
    slug: {
      control: 'select',
      description: 'slug (AI slug)',
      options: slugs
    },
    description: {
      control: 'text',
      description: 'description'
    },
    title: {
      control: 'text',
      description: 'title'
    },
    headerNavigation: {
      control: 'select',
      description: 'header-navigation',
      options: navigation
    }
  },
  render: args => {
    return html\`
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}">Toggle tearsheet</cds-button>
        </div>
      </div>
      <cds-tearsheet
        class=\${args.class}
        selector-initial-focus=\${args.selectorInitialFocus}
        ?open=\${args.open}
        influencer-placement=\${args.influencerPlacement}
        influencer-width=\${args.influencerWidth}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        width=\${args.width}>
        <!-- default slotted content -->
        \${args.content}

        <!-- slotted header label -->
        \${args.label}

        <!-- slotted header title -->
        \${args.title ? html\`<span slot="title">\${args.title}</span>\` : ''}

        <!-- slotted header description -->
        \${args.description ? html\`<span slot="description">\${args.description}</span>\` : ''}

        <!-- slotted action in header cds-buttons -->
        \${args.headerActions}

        <!-- slotted action items cds-buttons -->
        \${args.actionItems}

        <!-- slotted slug -->
        \${args.slug}

        <!-- slotted header-navigation -->
        \${args.headerNavigation}

        <!-- slotted influencer -->
        \${args.influencer}
      </cds-tearsheet>
    \`;
  }
}`,...(H=(P=l.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var F,B,L;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    headerNavigation: getNavigation(1)
  }
}`,...(L=(B=w.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var q,M,Y;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    influencer: getInfluencer(2)
  }
}`,...(Y=(M=k.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var G,U,j;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    headerActions: getActionToolbarItems(2),
    influencer: getInfluencer(2)
  }
}`,...(j=(U=z.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var X,K,Z;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: getLabel(0),
    width: TEARSHEET_WIDTH.NARROW
  }
}`,...(Z=(K=$.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var J,Q,V;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    width: TEARSHEET_WIDTH.NARROW
  }
}`,...(V=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var ee,te,se;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args
  },
  render: args => {
    const toggleButton = index => {
      const tearsheet = document.querySelector(\`[data-index="\${index}"]\`);
      tearsheet?.toggleAttribute('open');
    };
    return html\`
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button-set-base z-index="9999">
            <cds-button @click="\${() => toggleButton('one')}"
              >Toggle tearsheet one</cds-button
            >
            <cds-button @click="\${() => toggleButton('two')}"
              >Toggle tearsheet two</cds-button
            >
            <cds-button @click="\${() => toggleButton('three')}"
              >Toggle tearsheet three</cds-button
            >
          </cds-button-set-base>
        </div>
      </div>
      <cds-tearsheet
        data-index="one"
        class=\${args.class}
        selector-initial-focus=\${args.selectorInitialFocus}
        ?open=\${args.open}
        influencer-placement=\${args.influencerPlacement}
        influencer-width=\${args.influencerWidth}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        width=\${args.width}>
        <!-- default slotted content -->
        <cds-button @click="\${() => toggleButton('two')}"
          >Toggle tearsheet two</cds-button
        >
        \${args.content}

        <!-- slotted header label -->
        \${args.label}

        <!-- slotted header title -->
        \${args.title ? html\`<span slot="title">One \${args.title}</span>\` : ''}

        <!-- slotted header description -->
        \${args.description ? html\`<span slot="description">\${args.description}</span>\` : ''}

        <!-- slotted action in header cds-buttons -->
        \${args.headerActions}

        <!-- slotted action items cds-buttons -->
        \${args.actionItems}

        <!-- slotted slug -->
        \${args.slug}

        <!-- slotted header-navigation -->
        \${args.headerNavigation}

        <!-- slotted influencer -->
        \${args.influencer}
      </cds-tearsheet>
      <cds-tearsheet
        data-index="two"
        class=\${args.class}
        selector-initial-focus=\${args.selectorInitialFocus}
        has-close-icon
        ?open=\${args.open}
        influencer-placement=\${args.influencerPlacement}
        influencer-width=\${args.influencerWidth}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        width=\${args.width}>
        <!-- default slotted content -->
        <cds-button @click="\${() => toggleButton('three')}"
          >Toggle tearsheet three</cds-button
        >
        \${args.content}

        <!-- slotted header label -->
        \${args.label}

        <!-- slotted header title -->
        \${args.title ? html\`<span slot="title">Two \${args.title}</span>\` : ''}

        <!-- slotted header description -->
        \${args.description ? html\`<span slot="description">\${args.description}</span>\` : ''}

        <!-- slotted action in header cds-buttons -->
        \${args.headerActions}

        <!-- slotted action items cds-buttons -->
        \${args.actionItems}

        <!-- slotted slug -->
        \${args.slug}

        <!-- slotted header-navigation -->
        \${args.headerNavigation}

        <!-- slotted influencer -->
        \${args.influencer}
      </cds-tearsheet>
      <cds-tearsheet
        data-index="three"
        class=\${args.class}
        selector-initial-focus=\${args.selectorInitialFocus}
        has-close-icon
        ?open=\${args.open}
        influencer-placement=\${args.influencerPlacement}
        influencer-width=\${args.influencerWidth}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        width=\${args.width}>
        <!-- default slotted content -->
        \${args.content}

        <!-- slotted header label -->
        \${args.label}

        <!-- slotted header title -->
        \${args.title ? html\`<span slot="title">Three \${args.title}</span>\` : ''}

        <!-- slotted header description -->
        \${args.description ? html\`<span slot="description">\${args.description}</span>\` : ''}

        <!-- slotted action in header cds-buttons -->
        \${args.headerActions}

        <!-- slotted action items cds-buttons -->
        \${args.actionItems}

        <!-- slotted slug -->
        \${args.slug}

        <!-- slotted header-navigation -->
        \${args.headerNavigation}

        <!-- slotted influencer -->
        \${args.influencer}
      </cds-tearsheet>
    \`;
  }
}`,...(se=(te=A.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Ee=["Default","WithNavigation","WithInfluencer","WithAllHeaderItemsAndInfluencer","Narrow","NarrowWithAllHeaderItems","StackingTemplate"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Narrow:$,NarrowWithAllHeaderItems:I,StackingTemplate:A,WithAllHeaderItemsAndInfluencer:z,WithInfluencer:k,WithNavigation:w,__namedExportsOrder:Ee,default:De},Symbol.toStringTag,{value:"Module"}));export{Qe as T};
