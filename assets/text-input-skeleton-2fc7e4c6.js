import{s as c,x as i}from"./lit-element-266f0592.js";import{n as u}from"./property-da2637ab.js";import{p as t,c as m}from"./carbon-element-59fbbccb.js";import{s as b}from"./text-input-f5b277bd.js";var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f=(s,r,n,l)=>{for(var e=l>1?void 0:l?h(r,n):r,p=s.length-1,a;p>=0;p--)(a=s[p])&&(e=(l?a(r,n,e):a(e))||e);return l&&e&&v(r,n,e),e};let o=class extends c{constructor(){super(...arguments),this.hideLabel=!1}render(){const{hideLabel:s}=this;return i`
      ${!s&&i` <span class="${t}--label ${t}--skeleton"></span> `}
      <div class="${t}--text-input ${t}--skeleton"></div>
    `}};o.styles=b;f([u({type:Boolean,reflect:!0,attribute:"hide-label"})],o.prototype,"hideLabel",2);o=f([m(`${t}-text-input-skeleton`)],o);
