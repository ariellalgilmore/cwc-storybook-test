import{_ as m}from"./iframe-c15361be.js";import"../sb-preview/runtime.js";var o="storybook/a11y",f=`${o}/result`,S=`${o}/request`,p=`${o}/running`,w=`${o}/error`,T=`${o}/manual`,r={RESULT:f,REQUEST:S,RUNNING:p,ERROR:w,MANUAL:T};const{global:g}=__STORYBOOK_MODULE_GLOBAL__,{addons:h}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:y,window:L}=g,n=h.getChannel(),_=!1,s,N=async a=>{const{manual:e}=await E(a);e||await u(a)},u=async a=>{s=a;try{const e=await E(a);if(!_){_=!0,n.emit(r.RUNNING);const{element:v="#storybook-root",config:c,options:O={}}=e,l=y.querySelector(v);if(!l)return;let i=null;if(!e.engine||e.engine==="axe"){const t=(await m(()=>import("./axe-de59dc6e.js").then(R=>R.a),["./axe-de59dc6e.js","./_commonjsHelpers-725317a4.js"],import.meta.url)).default;t.reset(),c&&t.configure(c),i=await t.run(l,O)}else if(e.engine==="accessibility-checker"){const{CheckerWrapper:t}=await m(()=>import("./CheckerWrapper-3ONZQPCS-5f5343c7.js"),[],import.meta.url);i=await new t(c).run(l)}i&&s===a?n.emit(r.RESULT,i):(_=!1,u(s))}}catch(e){n.emit(r.ERROR,e)}finally{_=!1}},E=async a=>{const{parameters:e}=await L.__STORYBOOK_STORY_STORE__.loadStory({storyId:a})||{};return e.a11y||{config:{},options:{}}};n.on(r.REQUEST,N);n.on(r.MANUAL,u);
