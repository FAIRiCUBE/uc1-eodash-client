function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/main-vZjuH8D5.js","assets/index-53H0BOq7.js","assets/index-B3-CcigJ.css","assets/webfontloader-BDicpu_w.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/MobileLayout-DC49a6lJ.js","assets/VBtn-BKkK2efR.js","assets/color-BoCKJNSQ.js","assets/VBtn-CNWFp2uZ.css","assets/forwardRefs-VqJb2hov.js","assets/index-5D2taPGL.js","assets/VMain-CCUt7Kvs.js","assets/ssrBoot-Czf9Q7by.js","assets/VMain-Byt37V4c.css","assets/MobileLayout-DUdyvWBp.css","assets/DashboardLayout-CC8bBxbL.js","assets/DashboardLayout-BzRDFeiU.css","assets/Header-TgxV6x9R.js","assets/index-K1-Yeq5R.js","assets/Header-C0TiFeWz.css","assets/Footer-Btwosbm-.js","assets/Footer-DqA86aID.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as y,r as f,w as E,a as w,b as T,o as D,c as g,d as A,g as I,u as R,e as O,f as L,_ as r,s as P,h as l,j as V,k as C,l as j,m as x,n as _,p as S,q as F,t as M,v as i,x as c,y as k,F as H,z as U}from"./index-53H0BOq7.js";function z(a,e={}){const t=e.head||y();if(t)return t.ssr?t.push(a,e):B(t,a,e)}function B(a,e,t={}){const o=f(!1),s=f({});E(()=>{s.value=o.value?{}:w(e)});const n=a.push(s.value,t);return T(s,u=>{n.patch(u)}),I()&&(D(()=>{n.dispose()}),g(()=>{o.value=!0}),A(()=>{o.value=!1})),n}function $(a,e){const{title:t,titleTemplate:o,...s}=a;return z({title:t,titleTemplate:o,_flatMeta:s},{...e,transform(n){const d=R({...n._flatMeta});return delete n._flatMeta,{...n,meta:d}}})}const q=async()=>{const a=O(L),e=t=>{Object.keys(a).forEach(o=>{a[o]=t[o]})};try{e((await r(()=>import(new URL("/config.js",import.meta.url).href),__vite__mapDeps([]))).default)}catch{try{e(await r(()=>import("./main-vZjuH8D5.js"),__vite__mapDeps([0,1,2])).then(async t=>await t.default))}catch{console.error("no dashboard configuration defined")}}return a},X=async a=>await a(P),K=async(a="Roboto",e)=>{const t=(await r(()=>import("./webfontloader-BDicpu_w.js").then(o=>o.w),__vite__mapDeps([3,4]))).default;return e?t.load({custom:{families:[a],urls:[e]}}):t.load({google:{families:[a]}}),a},N=(a,e)=>{const t=a.__vccOpts||a;for(const[o,s]of e)t[o]=s;return t},W={__name:"Dashboard",async setup(a){let e,t;U(b=>({"4d9dbdf0":c(n)}));const o=([e,t]=l(()=>q()),e=await e,t(),e);V();const s=C("dashboardTheme",o.brand?.theme);s.global.name.value="dashboardTheme";const n=([e,t]=l(()=>K(o.brand?.font?.family,o.brand?.font?.link)),e=await e,t(),e),{loadSTAC:d}=j();[e,t]=l(()=>d()),await e,t();const{smAndDown:u}=x(),h=u.value?_(()=>r(()=>import("./MobileLayout-DC49a6lJ.js"),__vite__mapDeps([5,1,2,6,7,8,9,10,11,12,13,14]))):_(()=>r(()=>import("./DashboardLayout-CC8bBxbL.js"),__vite__mapDeps([15,1,2,6,7,8,11,12,13,16]))),p=_(()=>r(()=>import("./Header-TgxV6x9R.js"),__vite__mapDeps([17,1,2,6,7,8,18,10,12,19]))),v=_(()=>r(()=>import("./Footer-Btwosbm-.js"),__vite__mapDeps([20,1,2,7,21]))),{mainRect:m}=S();return $(o.brand.meta??{}),(b,J)=>(F(),M(H,null,[i(c(p)),i(c(h),{style:k(`height: calc(100dvh - ${c(m).top+c(m).bottom}px)`)},null,8,["style"]),i(c(v))],64))}},G=N(W,[["__scopeId","data-v-d852cd8e"]]),Y=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{Y as D,N as _,X as c};
