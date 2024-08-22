import{b as Q,i as W,d as I,a as j,u as J,r as X,c as b,o as Y,e as ee,f as h,g as C,w as k,h as L,j as p,n as v,k as i,l as M,E as z,m as te,p as N,t as P,q as oe,s as x,F as se,v as V,x as ne,y as g,T as ae,_ as ie,C as le,z as re,A as D,B as w,D as ce,G as A,H as F,I as ue,J as O,K as de,L as fe,M as pe,N as U,O as me,P as $,Q as R,R as he,S as ve,U as ge,V as _e}from"./index-BGvlSTQS.js";const q=["success","info","warning","error"],be=Q({customClass:{type:String,default:""},dangerouslyUseHTMLString:Boolean,duration:{type:Number,default:4500},icon:{type:W},id:{type:String,default:""},message:{type:I([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:I(Function),default:()=>{}},onClose:{type:I(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...q,""],default:""},zIndex:Number}),ye={destroy:()=>!0},Ce=j({name:"ElNotification"}),ke=j({...Ce,props:be,emits:ye,setup(t,{expose:a}){const o=t,{ns:s,zIndex:c}=J("notification"),{nextZIndex:u,currentZIndex:r}=c,{Close:d}=le,l=X(!1);let n;const f=b(()=>{const e=o.type;return e&&D[o.type]?s.m(e):""}),m=b(()=>o.type&&D[o.type]||o.icon),S=b(()=>o.position.endsWith("right")?"right":"left"),G=b(()=>o.position.startsWith("top")?"top":"bottom"),K=b(()=>{var e;return{[G.value]:`${o.offset}px`,zIndex:(e=o.zIndex)!=null?e:r.value}});function E(){o.duration>0&&({stop:n}=re(()=>{l.value&&y()},o.duration))}function H(){n==null||n()}function y(){l.value=!1}function Z({code:e}){e===w.delete||e===w.backspace?H():e===w.esc?l.value&&y():E()}return Y(()=>{E(),u(),l.value=!0}),ee(document,"keydown",Z),a({visible:l,close:y}),(e,Ve)=>(h(),C(ae,{name:i(s).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:De=>e.$emit("destroy"),persisted:""},{default:k(()=>[L(p("div",{id:e.id,class:v([i(s).b(),e.customClass,i(S)]),style:M(i(K)),role:"alert",onMouseenter:H,onMouseleave:E,onClick:e.onClick},[i(m)?(h(),C(i(z),{key:0,class:v([i(s).e("icon"),i(f)])},{default:k(()=>[(h(),C(te(i(m))))]),_:1},8,["class"])):N("v-if",!0),p("div",{class:v(i(s).e("group"))},[p("h2",{class:v(i(s).e("title")),textContent:P(e.title)},null,10,["textContent"]),L(p("div",{class:v(i(s).e("content")),style:M(e.title?void 0:{margin:0})},[oe(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(h(),x(se,{key:1},[N(" Caution here, message could've been compromised, never use user's input as message "),p("p",{innerHTML:e.message},null,8,["innerHTML"])],2112)):(h(),x("p",{key:0},P(e.message),1))])],6),[[V,e.message]]),e.showClose?(h(),C(i(z),{key:0,class:v(i(s).e("closeBtn")),onClick:ne(y,["stop"])},{default:k(()=>[g(i(d))]),_:1},8,["class","onClick"])):N("v-if",!0)],2)],46,["id","onClick"]),[[V,l.value]])]),_:3},8,["name","onBeforeLeave","onAfterLeave"]))}});var Te=ie(ke,[["__file","notification.vue"]]);const T={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},B=16;let Se=1;const _=function(t={},a=null){if(!ce)return{close:()=>{}};(typeof t=="string"||A(t))&&(t={message:t});const o=t.position||"top-right";let s=t.offset||0;T[o].forEach(({vm:f})=>{var m;s+=(((m=f.el)==null?void 0:m.offsetHeight)||0)+B}),s+=B;const c=`notification_${Se++}`,u=t.onClose,r={...t,offset:s,id:c,onClose:()=>{Ee(c,o,u)}};let d=document.body;F(t.appendTo)?d=t.appendTo:ue(t.appendTo)&&(d=document.querySelector(t.appendTo)),F(d)||(d=document.body);const l=document.createElement("div"),n=g(Te,r,A(r.message)?{default:()=>r.message}:null);return n.appContext=a??_._context,n.props.onDestroy=()=>{O(null,l)},O(n,l),T[o].push({vm:n}),d.appendChild(l.firstElementChild),{close:()=>{n.component.exposed.visible.value=!1}}};q.forEach(t=>{_[t]=(a={})=>((typeof a=="string"||A(a))&&(a={message:a}),_({...a,type:t}))});function Ee(t,a,o){const s=T[a],c=s.findIndex(({vm:n})=>{var f;return((f=n.component)==null?void 0:f.props.id)===t});if(c===-1)return;const{vm:u}=s[c];if(!u)return;o==null||o(u);const r=u.el.offsetHeight,d=a.split("-")[0];s.splice(c,1);const l=s.length;if(!(l<1))for(let n=c;n<l;n++){const{el:f,component:m}=s[n].vm,S=Number.parseInt(f.style[d],10)-r-B;m.props.offset=S}}function Ie(){for(const t of Object.values(T))t.forEach(({vm:a})=>{a.component.exposed.visible.value=!1})}_.closeAll=Ie;_._context=null;const Ne=de(_,"$notify"),we="/assets/shot-ai-DyQKRRNp.png",$e={class:"home"},xe=R('<div class="section main" data-v-abb7f07e><img class="logo" src="'+ve+'" data-v-abb7f07e><h2 class="title highlight" data-v-abb7f07e>大藏经 AI</h2><h5 class="intro highlight" data-v-abb7f07e>让阅读佛经变简单</h5><h5 class="desc highlight" data-v-abb7f07e>AI 翻译14000卷大藏经 文言文现代文对照阅读</h5></div>',1),Ae={class:"section"},Be={class:"title highlight"},He=R('<h5 class="intro" data-v-abb7f07e> 基于大数据模型的佛经AI智能体 - <b class="highlight" data-v-abb7f07e>悟空</b><br data-v-abb7f07e> 颇有修为的藏经阁扫地僧 对佛经有深厚的理解和领悟 <br data-v-abb7f07e> 专业解读大藏经全卷和佛教知识 擅长于将佛经从文言文翻译为现代文 </h5><div class="img software-white" data-v-abb7f07e><a href="/ai" target="_blank" data-v-abb7f07e><img src="'+we+'" data-v-abb7f07e></a></div>',2),Le={href:"/ai",target:"_blank"},Me={class:"section"},ze={class:"title highlight"},Pe={__name:"Home",setup(t){const a=pe(),{title:o,category:s,work:c,juan:u}=U.bookmark||{};let r;return U.bookmark.title&&(r=Ne({dangerouslyUseHTMLString:!0,title:"继续阅读",message:`<h4 class="highlight">${o} (第 ${+u} 卷)</h4>`,duration:5e3,position:"bottom-right",onClick:()=>{r.close(),a.push(`/${s}/${c}/${u}`)}})),me(()=>{r&&r.close()}),(d,l)=>{const n=ge,f=he,m=_e;return h(),x("div",$e,[xe,p("div",Ae,[p("h2",Be,[g(n),$(" 悟空 - 佛经AI ")]),He,p("a",Le,[g(f,{type:"primary",plain:"",round:"",class:"button"},{default:k(()=>[$("悟空 - 佛经AI")]),_:1})])]),p("div",Me,[p("h2",ze,[g(n),$(" 热门经卷 ")]),g(m,{category:"hot",works:"hot"})])])}}},Oe=fe(Pe,[["__scopeId","data-v-abb7f07e"]]);export{Oe as default};
