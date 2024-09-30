import{e as g}from"./class-map-4a7e6437.js";import{o as c}from"./if-defined-21892bb5.js";import{r as m,s as f,x as h}from"./lit-element-266f0592.js";import{n as s}from"./property-da2637ab.js";import{a as u}from"./query-b9d3c2af.js";import{p as d,c as y}from"./carbon-element-59fbbccb.js";import{F as x}from"./focus-73f58502.js";const _=`.cds--link{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);display:inline-flex;color:var(--cds-link-text-color, var(--cds-link-primary, #0f62fe));outline:none;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9)}.cds--link *,.cds--link *:before,.cds--link *:after{box-sizing:inherit}.cds--link:hover{color:var(--cds-link-hover-text-color, var(--cds-link-primary-hover, #0043ce));text-decoration:underline}.cds--link:active,.cds--link:active:visited,.cds--link:active:visited:hover{outline:1px solid var(--cds-focus, #0f62fe);color:var(--cds-link-text-color, var(--cds-link-primary, #0f62fe));outline-color:var(--cds-link-focus-text-color, var(--cds-focus, #0f62fe));text-decoration:underline}@media screen and (prefers-contrast){.cds--link:active,.cds--link:active:visited,.cds--link:active:visited:hover{outline-style:dotted}}.cds--link:focus{outline:1px solid var(--cds-focus, #0f62fe);outline-color:var(--cds-link-focus-text-color, var(--cds-focus, #0f62fe));text-decoration:underline}@media screen and (prefers-contrast){.cds--link:focus{outline-style:dotted}}.cds--link:visited{color:var(--cds-link-text-color, var(--cds-link-primary, #0f62fe))}.cds--link:visited:hover{color:var(--cds-link-hover-text-color, var(--cds-link-primary-hover, #0043ce))}.cds--link--disabled,.cds--link--disabled:hover{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);color:var(--cds-text-disabled, rgba(22, 22, 22, .25));cursor:not-allowed;font-weight:400;text-decoration:none}.cds--link--disabled *,.cds--link--disabled *:before,.cds--link--disabled *:after,.cds--link--disabled:hover *,.cds--link--disabled:hover *:before,.cds--link--disabled:hover *:after{box-sizing:inherit}.cds--link.cds--link--visited:visited{color:var(--cds-link-visited-text-color, var(--cds-link-visited, #8a3ffc))}.cds--link.cds--link--visited:visited:hover{color:var(--cds-link-hover-text-color, var(--cds-link-primary-hover, #0043ce))}.cds--link.cds--link--inline{display:inline;text-decoration:underline}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size, 1rem);font-weight:var(--cds-body-compact-02-font-weight, 400);line-height:var(--cds-body-compact-02-line-height, 1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing, 0)}.cds--link__icon{display:inline-flex;align-self:center;margin-inline-start:.5rem}:host(cds-link){outline:none}:host(cds-link) .cds--link--disabled{color:var(--cds-text-disabled, rgba(22, 22, 22, .25))}:host(cds-link) .cds--link__icon[hidden]{display:none}
`,$=m(_);var z=Object.defineProperty,w=Object.getOwnPropertyDescriptor,n=(i,t,l,o)=>{for(var r=o>1?void 0:o?w(t,l):t,a=i.length-1,p;a>=0;a--)(p=i[a])&&(r=(o?p(t,l,r):p(r))||r);return o&&r&&z(t,l,r),r};const C={MEDIUM:"md",SMALL:"sm",LARGE:"lg"};let e=class extends x(f){constructor(){super(...arguments),this._hasIcon=!1,this.disabled=!1,this.inline=!1,this.size=C.MEDIUM,this.visited=!1}_handleSlotChange({target:i}){const{name:t}=i,l=i.assignedNodes().some(o=>o.nodeType!==Node.TEXT_NODE||o.textContent.trim());this[t==="icon"?"_hasIcon":""]=l,this.requestUpdate()}get _classes(){const{disabled:i,size:t,inline:l,visited:o,_hasIcon:r}=this;return g({[`${d}--link`]:!0,[`${d}--link--disabled`]:i,[`${d}--link--icon`]:r,[`${d}--link--inline`]:l,[`${d}--link--${t}`]:t,[`${d}--link--visited`]:o})}_handleClick(i){}_renderInner(){const{_hasIcon:i,_handleSlotChange:t}=this;return h`
      <slot @slotchange="${t}"></slot>
      <div ?hidden="${!i}" class="${d}--link__icon">
        <slot name="icon" @slotchange="${t}"></slot>
      </div>
    `}_renderDisabledLink(){const{_classes:i}=this;return h`
      <p id="link" part="link" class="${i}">${this._renderInner()}</p>
    `}_renderLink(){const{download:i,href:t,hreflang:l,linkRole:o,ping:r,rel:a,target:p,type:v,_classes:k,_handleClick:b}=this;return h`
      <a
        tabindex="0"
        id="link"
        role="${c(o)}"
        class="${k}"
        part="link"
        download="${c(i)}"
        href="${c(t)}"
        hreflang="${c(l)}"
        ping="${c(r)}"
        rel="${c(a)}"
        target="${c(p)}"
        type="${c(v)}"
        @click="${b}">
        ${this._renderInner()}
      </a>
    `}render(){const{disabled:i}=this;return i?this._renderDisabledLink():this._renderLink()}};e.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0};e.styles=$;n([u("#link")],e.prototype,"_linkNode",2);n([s({type:Boolean,reflect:!0})],e.prototype,"disabled",2);n([s({reflect:!0})],e.prototype,"download",2);n([s({reflect:!0})],e.prototype,"href",2);n([s({reflect:!0})],e.prototype,"hreflang",2);n([s({type:Boolean,reflect:!0})],e.prototype,"inline",2);n([s({attribute:"link-role"})],e.prototype,"linkRole",2);n([s({reflect:!0})],e.prototype,"ping",2);n([s({reflect:!0})],e.prototype,"rel",2);n([s({reflect:!0})],e.prototype,"size",2);n([s({reflect:!0})],e.prototype,"target",2);n([s({reflect:!0})],e.prototype,"type",2);n([s({type:Boolean,reflect:!0})],e.prototype,"visited",2);e=n([y(`${d}-link`)],e);const N=e;export{N as C,C as L};
