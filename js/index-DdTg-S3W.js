import{d as x,r as C,o as i,c as d,w as a,g as T,h as S,m as k,i as w,j as V,k as f,t as B,F as N,u as o,l as $,T as F,n as I,p as L,q as y,v as R,x as q,y as z,C as A,z as m,A as D}from"./vendor-CyYX7On4.js";import{_ as P}from"./index-C_z5zltI.js";import{u as j}from"./app-CCxeMuBw.js";import"./request-CtLRoyYC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./main-9-5wyhsW.js";const E=x({name:"LayoutNav",__name:"index",props:{option:{}},emits:["tabbar-change"],setup(g,{emit:u}){const l=g,_=u,n=C(0),b=r=>{_("tabbar-change",r)};return(r,v)=>{const s=F,p=I;return i(),d(p,{modelValue:o(n),"onUpdate:modelValue":v[0]||(v[0]=e=>$(n)?n.value=e:null),fixed:"",route:"",onChange:b},{default:a(()=>[(i(!0),T(N,null,S(l.option,(e,c)=>(i(),d(s,k({key:c},e),w({default:a(()=>[f("span",null,B(e.title),1)]),_:2},[r.$slots[e.name]?{name:"icon",fn:a(({active:h})=>[V(r.$slots,e.name,{props:{active:h,...e}})]),key:"0"}:void 0]),1040))),128))]),_:3},8,["modelValue"])}}}),H={class:"van-safe-area-top van-safe-area-bottom app-container"},O={class:"layout-content"},U={key:0,class:"layout-footer"},X=x({name:"Layout",__name:"index",setup(g){const u=q(),l=j();l.watchTheme();const{theme:_}=L(l),n=y(()=>u.meta.showTab),b=y(()=>{const s={};return o(n)&&(s["padding-bottom"]="var(--van-tabbar-height)"),s}),r=C([{title:"主页",name:"nav-home",to:{name:"Home"}},{title:"项目信息",name:"nav-info",to:{name:"Info"}},{title:"请求",name:"nav-fetch",to:{name:"Fetch"}},{title:"主题",name:"nav-theme",to:{name:"Theme"}}]),v=s=>{const p=document.querySelector("html");p.scrollTop=0};return(s,p)=>{const e=z("router-view"),c=P,h=A;return i(),d(h,{theme:o(_),style:R(o(b))},{default:a(()=>[f("div",H,[f("div",O,[m(e)]),o(n)?(i(),T("div",U,[m(E,{option:o(r),onTabbarChange:v},{"nav-home":a(({props:t})=>[m(c,{name:"nav-home",color:t.active?"var(--van-tabbar-item-active-color) ":"var(--van-tabbar-item-text-color)"},null,8,["color"])]),"nav-info":a(({props:t})=>[m(c,{name:"nav-info",color:t.active?"var(--van-tabbar-item-active-color) ":"var(--van-tabbar-item-text-color)"},null,8,["color"])]),"nav-theme":a(({props:t})=>[m(c,{name:`nav-${o(l).theme}`,color:t.active?"var(--van-tabbar-item-active-color) ":"var(--van-tabbar-item-text-color)"},null,8,["name","color"])]),"nav-fetch":a(({props:t})=>[m(c,{name:"nav-fetch",color:t.active?"var(--van-tabbar-item-active-color) ":"var(--van-tabbar-item-text-color)"},null,8,["color"])]),_:1},8,["option"])])):D("",!0)])]),_:1},8,["theme","style"])}}});export{X as default};