import{e as d}from"./class-map-4a7e6437.js";import{o as e}from"./if-defined-21892bb5.js";import{x as c}from"./lit-element-266f0592.js";import{c as m,p as i}from"./carbon-element-59fbbccb.js";import{e as h,C as _}from"./button-4ef875e3.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,C=(o,n,s,r)=>{for(var t=r>1?void 0:r?v(n,s):n,l=o.length-1,a;l>=0;l--)(a=o[l])&&(t=(r?a(n,s,t):a(t))||t);return r&&t&&g(n,s,t),t};let p=class extends _{_handleClickLinkSkeleton(o){this.disabled&&(o.preventDefault(),o.stopPropagation())}render(){const{autofocus:o,disabled:n,download:s,href:r,hreflang:t,ping:l,rel:a,size:f,target:b,type:u}=this,$=d({[`${i}--btn`]:!0,[`${i}--skeleton`]:!0,[`${i}--btn--${f}`]:f});return r?c`
          <a
            id="button"
            role="button"
            class="${$}"
            download="${e(s)}"
            href="${e(r)}"
            hreflang="${e(t)}"
            ping="${e(l)}"
            rel="${e(a)}"
            target="${e(b)}"
            type="${e(u)}"
            @click="${this._handleClickLinkSkeleton}"></a>
        `:c`
          <button
            id="button"
            class="${$}"
            ?autofocus="${o}"
            ?disabled="${n}"
            type="${e(u)}"></button>
        `}};p.styles=h;p=C([m(`${i}-button-skeleton`)],p);
