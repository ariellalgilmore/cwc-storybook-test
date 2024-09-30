import{s as c,x as d}from"./lit-element-266f0592.js";import{n as r}from"./property-da2637ab.js";import{p as s,c as u}from"./carbon-element-59fbbccb.js";import{F as m}from"./focus-73f58502.js";import{s as h,O as b}from"./overflow-menu-body-0fa120a6.js";var v=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(f,i,n,l)=>{for(var t=l>1?void 0:l?_(i,n):i,a=f.length-1,p;a>=0;a--)(p=f[a])&&(t=(l?p(i,n,t):p(t))||t);return l&&t&&v(i,n,t),t};let e=class extends m(c){constructor(){super(...arguments),this.danger=!1,this.disabled=!1,this.divider=!1,this.href="",this.size=b.MEDIUM}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","menuitem"),super.connectedCallback()}render(){return this.href?d`
          <a
            class="${s}--overflow-menu-options__btn"
            ?disabled=${this.disabled}
            href="${this.href}"
            tabindex="-1">
            <div class="${s}--overflow-menu-options__option-content">
              <slot></slot>
            </div>
          </a>
        `:d`
          <button
            class="${s}--overflow-menu-options__btn"
            ?disabled=${this.disabled}
            tabindex="-1">
            <div class="${s}--overflow-menu-options__option-content">
              <slot></slot>
            </div>
          </button>
        `}};e.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0};e.styles=h;o([r({type:Boolean,reflect:!0})],e.prototype,"danger",2);o([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2);o([r({type:Boolean,reflect:!0})],e.prototype,"divider",2);o([r()],e.prototype,"href",2);o([r({reflect:!0})],e.prototype,"size",2);e=o([u(`${s}-overflow-menu-item`)],e);
