try{
(()=>{var t={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."};var a=(n,e)=>n!=="true"?`button[id^="${e}"] { display: none !important; }
`:"",o="";t.CDS_FLAGS_ALL||(o+=a(t.CDS_EXPERIEMENTAL_COMPONENT_NAME,"components-experimental-component-name"));if(o.length){let n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");n.appendChild(e),e.appendChild(document.createTextNode(o))}})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
