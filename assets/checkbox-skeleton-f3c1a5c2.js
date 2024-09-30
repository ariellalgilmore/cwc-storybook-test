import{e as O}from"./class-map-4a7e6437.js";import{s as g,x as u}from"./lit-element-266f0592.js";import{n as c}from"./property-da2637ab.js";import{p as r,c as x}from"./carbon-element-59fbbccb.js";import{s as I}from"./16-81e6b9cc.js";import{s as T}from"./16-d3a54398.js";import{s as y}from"./checkbox-4cbf61d5.js";var B=Object.defineProperty,P=Object.getOwnPropertyDescriptor,i=(a,l,o,e)=>{for(var t=e>1?void 0:e?P(l,o):l,n=a.length-1,d;n>=0;n--)(d=a[n])&&(t=(e?d(l,o,t):d(t))||t);return e&&t&&B(l,o,t),t};let s=class extends g{constructor(){super(...arguments),this.readonly=!1,this.warn=!1,this.warnText="",this._hasSlug=!1}_handleSlotChange({target:a}){const l=a.assignedNodes().filter(o=>o.matches!==void 0?o.matches(this.constructor.slugItem):!1);this._hasSlug=!!l,l[0].setAttribute("size","mini"),this.requestUpdate()}updated(a){const{selectorCheckbox:l}=this.constructor,o=this.querySelectorAll(l);if(["disabled","readonly"].forEach(e=>{if(a.has(e)){const{[e]:t}=this;o.forEach(n=>{n[e]=t})}}),a.has("invalid")){const{invalid:e}=this;o.forEach(t=>{e?t.setAttribute("invalid-group",""):t.removeAttribute("invalid-group")})}}render(){const{ariaLabelledBy:a,disabled:l,helperText:o,invalid:e,invalidText:t,legendId:n,legendText:d,readonly:p,warn:h,warnText:_,_hasSlug:m,_handleSlotChange:S}=this,f=!p&&!e&&h,w=!e&&!h,k=Math.random().toString(16).slice(2),v=o?`checkbox-group-helper-text-${k}`:void 0,$=o?u` <div id="${v}" class="${r}--form__helper-text">
          ${o}
        </div>`:null,C=O({[`${r}--checkbox-group`]:!0,[`${r}--checkbox-group--readonly`]:p,[`${r}--checkbox-group--invalid`]:!p&&e,[`${r}--checkbox-group--warning`]:f,[`${r}--checkbox-group--slug`]:m});return u`
      <fieldset
        class="${C}"
        ?data-invalid=${e}
        ?disabled=${l}
        aria-readonly=${p}
        ?aria-labelledby=${a||n}
        ?aria-describedby=${!e&&!h&&$?v:void 0}>
        <legend class="${r}--label" id=${n||a}>
          ${d}
          <slot name="slug" @slotchange="${S}"></slot>
        </legend>
        <slot></slot>
        <div class="${r}--checkbox-group__validation-msg">
          ${!p&&e?u`
                ${I({class:`${r}--checkbox__invalid-icon`})}
                <div class="${r}--form-requirement">${t}</div>
              `:null}
          ${f?u`
                ${T({class:`${r}--checkbox__invalid-icon ${r}--checkbox__invalid-icon--warning`})}
                <div class="${r}--form-requirement">${_}</div>
              `:null}
        </div>
        ${w?$:null}
      </fieldset>
    `}static get selectorCheckbox(){return`${r}-checkbox`}static get slugItem(){return`${r}-slug`}};s.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};s.styles=y;i([c({type:String,reflect:!0,attribute:"aria-labelledby"})],s.prototype,"ariaLabelledBy",2);i([c({type:Boolean})],s.prototype,"disabled",2);i([c({type:String,reflect:!0,attribute:"helper-text"})],s.prototype,"helperText",2);i([c({type:Boolean,attribute:"invalid"})],s.prototype,"invalid",2);i([c({type:String,reflect:!0,attribute:"invalid-text"})],s.prototype,"invalidText",2);i([c({type:String,reflect:!0,attribute:"legend-id"})],s.prototype,"legendId",2);i([c({type:String,reflect:!0,attribute:"legend-text"})],s.prototype,"legendText",2);i([c({type:Boolean,reflect:!0})],s.prototype,"readonly",2);i([c({type:Boolean,reflect:!0})],s.prototype,"warn",2);i([c({type:String,reflect:!0,attribute:"warn-text"})],s.prototype,"warnText",2);s=i([x(`${r}-checkbox-group`)],s);var D=Object.defineProperty,j=Object.getOwnPropertyDescriptor,q=(a,l,o,e)=>{for(var t=e>1?void 0:e?j(l,o):l,n=a.length-1,d;n>=0;n--)(d=a[n])&&(t=(e?d(l,o,t):d(t))||t);return e&&t&&D(l,o,t),t};let b=class extends g{render(){return u`
      <label class="${r}--checkbox-label" for="checkbox" part="label">
        <span class="${r}--checkbox-label-text ${r}--skeleton"
          ><slot></slot
        ></span>
      </label>
    `}};b.styles=y;b=q([x(`${r}-checkbox-skeleton`)],b);
