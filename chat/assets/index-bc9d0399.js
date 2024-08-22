import{aA as bt,h as G,j as i,aB as V,M as le,k as De,K as yt,L as wt,l as J,u as Ue,o as he,aC as xt,r as z,m as kt,p as C,t as $t,n as St,X as Me,ao as ye,W as _t,s as xe,v as Ct,w as ke,x as S,V as zt,y as Rt,Y as Tt,A as It,T as Ae,H as re,aD as de,aE as ce,aF as Vt,aG as Dt,aH as Mt,Q as Nt,aI as Bt,U as Pt,aJ as Ut,aK as Ee,aL as At,aq as Et,af as Ht,al as He,a0 as O,a1 as Q,aa as s,a6 as l,a3 as g,a7 as c,N as ue,a4 as x,a5 as D,ay as P,aj as Ft,ak as K,aM as jt,av as Ot,aw as Lt,aN as Gt,ag as X,aO as Kt,aP as Fe,S as Wt,a9 as $e,am as Se,aQ as Yt,aR as Xt,aS as we,aT as Jt}from"./index-f022ad58.js";function Ne(t){return window.TouchEvent&&t instanceof window.TouchEvent}function Be(){const t=new Map,o=f=>r=>{t.set(f,r)};return bt(()=>{t.clear()}),[t,o]}const qt=G([i("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[V("reverse",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),V("vertical",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),i("slider-marks",[i("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),V("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[i("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[i("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),i("slider-rail",`
 height: 100%;
 `,[le("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),V("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),i("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[i("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),i("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[i("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),V("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[i("slider-handle",`
 cursor: not-allowed;
 `)]),V("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),G("&:hover",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),V("active",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),i("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[i("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),i("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[le("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),i("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[i("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[i("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),G("&:focus",[i("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),i("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[V("transition-disabled",[i("slider-dot","transition: none;")]),i("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[V("active","border: var(--n-dot-border-active);")])])]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[De()]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[V("top",`
 margin-bottom: 12px;
 `),V("right",`
 margin-left: 12px;
 `),V("bottom",`
 margin-top: 12px;
 `),V("left",`
 margin-right: 12px;
 `),De()]),yt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-modal);")])),wt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Qt=0,Zt=Object.assign(Object.assign({},he.props),{to:ke.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Pe=J({name:"Slider",props:Zt,setup(t){const{mergedClsPrefixRef:o,namespaceRef:f,inlineThemeDisabled:r}=Ue(t),u=he("Slider","-slider",qt,xt,t,o),v=z(null),[p,_]=Be(),[d,m]=Be(),k=z(new Set),H=kt(t),{mergedDisabledRef:U}=H,A=C(()=>{const{step:e}=t;if(Number(e)<=0||e==="mark")return 0;const n=e.toString();let a=0;return n.includes(".")&&(a=n.length-n.indexOf(".")-1),a}),L=z(t.defaultValue),ve=$t(t,"value"),q=St(ve,L),M=C(()=>{const{value:e}=q;return(t.range?e:[e]).map(Re)}),Z=C(()=>M.value.length>2),y=C(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),$=C(()=>{const{marks:e}=t;return e?Object.keys(e).map(Number.parseFloat):null}),b=z(-1),F=z(-1),B=z(-1),N=z(!1),ee=z(!1),fe=C(()=>{const{vertical:e,reverse:n}=t;return e?n?"top":"bottom":n?"right":"left"}),Le=C(()=>{if(Z.value)return;const e=M.value,n=te(t.range?Math.min(...e):t.min),a=te(t.range?Math.max(...e):e[0]),{value:h}=fe;return t.vertical?{[h]:`${n}%`,height:`${a-n}%`}:{[h]:`${n}%`,width:`${a-n}%`}}),Ge=C(()=>{const e=[],{marks:n}=t;if(n){const a=M.value.slice();a.sort((T,I)=>T-I);const{value:h}=fe,{value:w}=Z,{range:R}=t,E=w?()=>!1:T=>R?T>=a[0]&&T<=a[a.length-1]:T<=a[0];for(const T of Object.keys(n)){const I=Number(T);e.push({active:E(I),label:n[T],style:{[h]:`${te(I)}%`}})}}return e});function Ke(e,n){const a=te(e),{value:h}=fe;return{[h]:`${a}%`,zIndex:n===b.value?1:0}}function _e(e){return t.showTooltip||B.value===e||b.value===e&&N.value}function We(e){return N.value?!(b.value===e&&F.value===e):!0}function Ye(e){var n;~e&&(b.value=e,(n=p.get(e))===null||n===void 0||n.focus())}function Xe(){d.forEach((e,n)=>{_e(n)&&e.syncPosition()})}function Ce(e){const{"onUpdate:value":n,onUpdateValue:a}=t,{nTriggerFormInput:h,nTriggerFormChange:w}=H;a&&re(a,e),n&&re(n,e),L.value=e,h(),w()}function ze(e){const{range:n}=t;if(n){if(Array.isArray(e)){const{value:a}=M;e.join()!==a.join()&&Ce(e)}}else Array.isArray(e)||M.value[0]!==e&&Ce(e)}function me(e,n){if(t.range){const a=M.value.slice();a.splice(n,1,e),ze(a)}else ze(e)}function pe(e,n,a){const h=a!==void 0;a||(a=e-n>0?1:-1);const w=$.value||[],{step:R}=t;if(R==="mark"){const I=ne(e,w.concat(n),h?a:void 0);return I?I.value:n}if(R<=0)return n;const{value:E}=A;let T;if(h){const I=Number((n/R).toFixed(E)),j=Math.floor(I),ge=I>j?j:j-1,be=I<j?j:j+1;T=ne(n,[Number((ge*R).toFixed(E)),Number((be*R).toFixed(E)),...w],a)}else{const I=qe(e);T=ne(e,[...w,I])}return T?Re(T.value):n}function Re(e){return Math.min(t.max,Math.max(t.min,e))}function te(e){const{max:n,min:a}=t;return(e-a)/(n-a)*100}function Je(e){const{max:n,min:a}=t;return a+(n-a)*e}function qe(e){const{step:n,min:a}=t;if(Number(n)<=0||n==="mark")return e;const h=Math.round((e-a)/n)*n+a;return Number(h.toFixed(A.value))}function ne(e,n=$.value,a){if(!(n!=null&&n.length))return null;let h=null,w=-1;for(;++w<n.length;){const R=n[w]-e,E=Math.abs(R);(a===void 0||R*a>0)&&(h===null||E<h.distance)&&(h={index:w,distance:E,value:n[w]})}return h}function Te(e){const n=v.value;if(!n)return;const a=Ne(e)?e.touches[0]:e,h=n.getBoundingClientRect();let w;return t.vertical?w=(h.bottom-a.clientY)/h.height:w=(a.clientX-h.left)/h.width,t.reverse&&(w=1-w),Je(w)}function Qe(e){if(U.value||!t.keyboard)return;const{vertical:n,reverse:a}=t;switch(e.key){case"ArrowUp":e.preventDefault(),ae(n&&a?-1:1);break;case"ArrowRight":e.preventDefault(),ae(!n&&a?-1:1);break;case"ArrowDown":e.preventDefault(),ae(n&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),ae(!n&&a?1:-1);break}}function ae(e){const n=b.value;if(n===-1)return;const{step:a}=t,h=M.value[n],w=Number(a)<=0||a==="mark"?h:h+a*e;me(pe(w,h,e>0?1:-1),n)}function Ze(e){var n,a;if(U.value||!Ne(e)&&e.button!==Qt)return;const h=Te(e);if(h===void 0)return;const w=M.value.slice(),R=t.range?(a=(n=ne(h,w))===null||n===void 0?void 0:n.index)!==null&&a!==void 0?a:-1:0;R!==-1&&(e.preventDefault(),Ye(R),et(),me(pe(h,M.value[R]),R))}function et(){N.value||(N.value=!0,t.onDragstart&&re(t.onDragstart),de("touchend",document,ie),de("mouseup",document,ie),de("touchmove",document,oe),de("mousemove",document,oe))}function se(){N.value&&(N.value=!1,t.onDragend&&re(t.onDragend),ce("touchend",document,ie),ce("mouseup",document,ie),ce("touchmove",document,oe),ce("mousemove",document,oe))}function oe(e){const{value:n}=b;if(!N.value||n===-1){se();return}const a=Te(e);a!==void 0&&me(pe(a,M.value[n]),n)}function ie(){se()}function tt(e){b.value=e,U.value||(B.value=e)}function nt(e){b.value===e&&(b.value=-1,se()),B.value===e&&(B.value=-1)}function at(e){B.value=e}function st(e){B.value===e&&(B.value=-1)}Me(b,(e,n)=>void ye(()=>F.value=n)),Me(q,()=>{if(t.marks){if(ee.value)return;ee.value=!0,ye(()=>{ee.value=!1})}ye(Xe)}),_t(()=>{se()});const Ie=C(()=>{const{self:{markFontSize:e,railColor:n,railColorHover:a,fillColor:h,fillColorHover:w,handleColor:R,opacityDisabled:E,dotColor:T,dotColorModal:I,handleBoxShadow:j,handleBoxShadowHover:ge,handleBoxShadowActive:be,handleBoxShadowFocus:ot,dotBorder:it,dotBoxShadow:lt,railHeight:rt,railWidthVertical:dt,handleSize:ct,dotHeight:ut,dotWidth:ht,dotBorderRadius:vt,fontSize:ft,dotBorderActive:mt,dotColorPopover:pt},common:{cubicBezierEaseInOut:gt}}=u.value;return{"--n-bezier":gt,"--n-dot-border":it,"--n-dot-border-active":mt,"--n-dot-border-radius":vt,"--n-dot-box-shadow":lt,"--n-dot-color":T,"--n-dot-color-modal":I,"--n-dot-color-popover":pt,"--n-dot-height":ut,"--n-dot-width":ht,"--n-fill-color":h,"--n-fill-color-hover":w,"--n-font-size":ft,"--n-handle-box-shadow":j,"--n-handle-box-shadow-active":be,"--n-handle-box-shadow-focus":ot,"--n-handle-box-shadow-hover":ge,"--n-handle-color":R,"--n-handle-size":ct,"--n-opacity-disabled":E,"--n-rail-color":n,"--n-rail-color-hover":a,"--n-rail-height":rt,"--n-rail-width-vertical":dt,"--n-mark-font-size":e}}),W=r?xe("slider",void 0,Ie,t):void 0,Ve=C(()=>{const{self:{fontSize:e,indicatorColor:n,indicatorBoxShadow:a,indicatorTextColor:h,indicatorBorderRadius:w}}=u.value;return{"--n-font-size":e,"--n-indicator-border-radius":w,"--n-indicator-box-shadow":a,"--n-indicator-color":n,"--n-indicator-text-color":h}}),Y=r?xe("slider-indicator",void 0,Ve,t):void 0;return{mergedClsPrefix:o,namespace:f,uncontrolledValue:L,mergedValue:q,mergedDisabled:U,mergedPlacement:y,isMounted:Ct(),adjustedTo:ke(t),dotTransitionDisabled:ee,markInfos:Ge,isShowTooltip:_e,shouldKeepTooltipTransition:We,handleRailRef:v,setHandleRefs:_,setFollowerRefs:m,fillStyle:Le,getHandleStyle:Ke,activeIndex:b,arrifiedValues:M,followerEnabledIndexSet:k,handleRailMouseDown:Ze,handleHandleFocus:tt,handleHandleBlur:nt,handleHandleMouseEnter:at,handleHandleMouseLeave:st,handleRailKeyDown:Qe,indicatorCssVars:r?void 0:Ve,indicatorThemeClass:Y==null?void 0:Y.themeClass,indicatorOnRender:Y==null?void 0:Y.onRender,cssVars:r?void 0:Ie,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender}},render(){var t;const{mergedClsPrefix:o,themeClass:f,formatTooltip:r}=this;return(t=this.onRender)===null||t===void 0||t.call(this),S("div",{class:[`${o}-slider`,f,{[`${o}-slider--disabled`]:this.mergedDisabled,[`${o}-slider--active`]:this.activeIndex!==-1,[`${o}-slider--with-mark`]:this.marks,[`${o}-slider--vertical`]:this.vertical,[`${o}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},S("div",{class:`${o}-slider-rail`},S("div",{class:`${o}-slider-rail__fill`,style:this.fillStyle}),this.marks?S("div",{class:[`${o}-slider-dots`,this.dotTransitionDisabled&&`${o}-slider-dots--transition-disabled`]},this.markInfos.map(u=>S("div",{key:u.label,class:[`${o}-slider-dot`,{[`${o}-slider-dot--active`]:u.active}],style:u.style}))):null,S("div",{ref:"handleRailRef",class:`${o}-slider-handles`},this.arrifiedValues.map((u,v)=>{const p=this.isShowTooltip(v);return S(zt,null,{default:()=>[S(Rt,null,{default:()=>S("div",{ref:this.setHandleRefs(v),class:`${o}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":u,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(u,v),onFocus:()=>{this.handleHandleFocus(v)},onBlur:()=>{this.handleHandleBlur(v)},onMouseenter:()=>{this.handleHandleMouseEnter(v)},onMouseleave:()=>{this.handleHandleMouseLeave(v)}},Tt(this.$slots.thumb,()=>[S("div",{class:`${o}-slider-handle`})]))}),this.tooltip&&S(It,{ref:this.setFollowerRefs(v),show:p,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(v),teleportDisabled:this.adjustedTo===ke.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>S(Ae,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(v),onEnter:()=>{this.followerEnabledIndexSet.add(v)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(v)}},{default:()=>{var _;return p?((_=this.indicatorOnRender)===null||_===void 0||_.call(this),S("div",{class:[`${o}-slider-handle-indicator`,this.indicatorThemeClass,`${o}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof r=="function"?r(u):u)):null}})})]})})),this.marks?S("div",{class:`${o}-slider-marks`},this.markInfos.map(u=>S("div",{key:u.label,class:`${o}-slider-mark`,style:u.style},u.label))):null))}}),en=G([G("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),i("spin-container",`
 position: relative;
 `,[i("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Vt()])]),i("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),i("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[V("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),i("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),i("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[V("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),tn={small:20,medium:18,large:16},nn=Object.assign(Object.assign({},he.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),an=J({name:"Spin",props:nn,setup(t){const{mergedClsPrefixRef:o,inlineThemeDisabled:f}=Ue(t),r=he("Spin","-spin",en,Dt,t,o),u=C(()=>{const{size:d}=t,{common:{cubicBezierEaseInOut:m},self:k}=r.value,{opacitySpinning:H,color:U,textColor:A}=k,L=typeof d=="number"?Mt(d):k[Nt("size",d)];return{"--n-bezier":m,"--n-opacity-spinning":H,"--n-size":L,"--n-color":U,"--n-text-color":A}}),v=f?xe("spin",C(()=>{const{size:d}=t;return typeof d=="number"?String(d):d[0]}),u,t):void 0,p=Bt(t,["spinning","show"]),_=z(!1);return Pt(d=>{let m;if(p.value){const{delay:k}=t;if(k){m=window.setTimeout(()=>{_.value=!0},k),d(()=>{clearTimeout(m)});return}}_.value=p.value}),{mergedClsPrefix:o,active:_,mergedStrokeWidth:C(()=>{const{strokeWidth:d}=t;if(d!==void 0)return d;const{size:m}=t;return tn[typeof m=="number"?"medium":m]}),cssVars:f?void 0:u,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var t,o;const{$slots:f,mergedClsPrefix:r,description:u}=this,v=f.icon&&this.rotate,p=(u||f.description)&&S("div",{class:`${r}-spin-description`},u||((t=f.description)===null||t===void 0?void 0:t.call(f))),_=f.icon?S("div",{class:[`${r}-spin-body`,this.themeClass]},S("div",{class:[`${r}-spin`,v&&`${r}-spin--rotate`],style:f.default?"":this.cssVars},f.icon()),p):S("div",{class:[`${r}-spin-body`,this.themeClass]},S(Ut,{clsPrefix:r,style:f.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),p);return(o=this.onRender)===null||o===void 0||o.call(this),f.default?S("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},S("div",{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},f),S(Ae,{name:"fade-in-transition"},{default:()=>this.active?_:null})):_}}),je="userStorage";function Oe(){return{userInfo:{avatar:"https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg",name:"ChenZhaoYu",description:'Star on <a href="https://github.com/Chanzhaoyu/chatgpt-bot" class="text-blue-500" target="_blank" >GitHub</a>'}}}function sn(){const t=Ee.get(je);return{...Oe(),...t}}function on(t){Ee.set(je,t)}const ln=At("user-store",{state:()=>sn(),actions:{updateUserInfo(t){this.userInfo={...this.userInfo,...t},this.recordState()},resetUserInfo(){this.userInfo={...Oe().userInfo},this.recordState()},recordState(){on(this.$state)}}});function rn(){const t=new Date,o=t.getDate(),f=t.getMonth()+1;return`${t.getFullYear()}-${f}-${o}`}const dn={class:"p-4 space-y-5 min-h-[200px]"},cn={class:"space-y-6"},un={class:"flex items-center space-x-4"},hn={class:"flex-shrink-0 w-[100px]"},vn={class:"flex-1"},fn={class:"flex items-center space-x-4"},mn={class:"flex-shrink-0 w-[100px]"},pn={class:"w-[200px]"},gn={class:"flex items-center space-x-4"},bn={class:"flex-shrink-0 w-[100px]"},yn={class:"flex-1"},wn={class:"flex-shrink-0 w-[100px]"},xn={class:"flex flex-wrap items-center gap-4"},kn={class:"flex items-center space-x-4"},$n={class:"flex-shrink-0 w-[100px]"},Sn={class:"flex flex-wrap items-center gap-4"},_n={class:"flex items-center space-x-4"},Cn={class:"flex-shrink-0 w-[100px]"},zn={class:"flex flex-wrap items-center gap-4"},Rn={class:"flex items-center space-x-4"},Tn={class:"flex-shrink-0 w-[100px]"},In=J({__name:"General",setup(t){const o=Et(),f=ln(),{isMobile:r}=Ht(),u=He(),v=C(()=>o.theme),p=C(()=>f.userInfo),_=z(p.value.avatar??""),d=z(p.value.name??""),m=z(p.value.description??""),k=C({get(){return o.language},set(y){o.setLanguage(y)}}),H=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],U=[{label:"English",key:"en-US",value:"en-US"},{label:"Español",key:"es-ES",value:"es-ES"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"},{label:"Tiếng Việt",key:"vi-VN",value:"vi-VN"},{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"}];function A(y){f.updateUserInfo(y),u.success(X("common.success"))}function L(){f.resetUserInfo(),u.success(X("common.success")),window.location.reload()}function ve(){const y=rn(),$=localStorage.getItem("chatStorage")||"{}",b=JSON.stringify(JSON.parse($),null,2),F=new Blob([b],{type:"application/json"}),B=URL.createObjectURL(F),N=document.createElement("a");N.href=B,N.download=`chat-store_${y}.json`,document.body.appendChild(N),N.click(),document.body.removeChild(N)}function q(y){const $=y.target;if(!$||!$.files)return;const b=$.files[0];if(!b)return;const F=new FileReader;F.onload=()=>{try{const B=JSON.parse(F.result);localStorage.setItem("chatStorage",JSON.stringify(B)),u.success(X("common.success")),location.reload()}catch{u.error(X("common.invalidFileFormat"))}},F.readAsText(b)}function M(){localStorage.removeItem("chatStorage"),location.reload()}function Z(){const y=document.getElementById("fileInput");y&&y.click()}return(y,$)=>(O(),Q("div",dn,[s("div",cn,[s("div",un,[s("span",hn,l(y.$t("setting.avatarLink")),1),s("div",vn,[g(c(ue),{value:_.value,"onUpdate:value":$[0]||($[0]=b=>_.value=b),placeholder:""},null,8,["value"])]),g(c(P),{size:"tiny",text:"",type:"primary",onClick:$[1]||($[1]=b=>A({avatar:_.value}))},{default:x(()=>[D(l(y.$t("common.save")),1)]),_:1})]),s("div",fn,[s("span",mn,l(y.$t("setting.name")),1),s("div",pn,[g(c(ue),{value:d.value,"onUpdate:value":$[2]||($[2]=b=>d.value=b),placeholder:""},null,8,["value"])]),g(c(P),{size:"tiny",text:"",type:"primary",onClick:$[3]||($[3]=b=>A({name:d.value}))},{default:x(()=>[D(l(y.$t("common.save")),1)]),_:1})]),s("div",gn,[s("span",bn,l(y.$t("setting.description")),1),s("div",yn,[g(c(ue),{value:m.value,"onUpdate:value":$[4]||($[4]=b=>m.value=b),placeholder:""},null,8,["value"])]),g(c(P),{size:"tiny",text:"",type:"primary",onClick:$[5]||($[5]=b=>A({description:m.value}))},{default:x(()=>[D(l(y.$t("common.save")),1)]),_:1})]),s("div",{class:Ft(["flex items-center space-x-4",c(r)&&"items-start"])},[s("span",wn,l(y.$t("setting.chatHistory")),1),s("div",xn,[g(c(P),{size:"small",onClick:ve},{icon:x(()=>[g(c(K),{icon:"ri:download-2-fill"})]),default:x(()=>[D(" "+l(y.$t("common.export")),1)]),_:1}),s("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:q},null,32),g(c(P),{size:"small",onClick:Z},{icon:x(()=>[g(c(K),{icon:"ri:upload-2-fill"})]),default:x(()=>[D(" "+l(y.$t("common.import")),1)]),_:1}),g(c(jt),{placement:"bottom",onPositiveClick:M},{trigger:x(()=>[g(c(P),{size:"small"},{icon:x(()=>[g(c(K),{icon:"ri:close-circle-line"})]),default:x(()=>[D(" "+l(y.$t("common.clear")),1)]),_:1})]),default:x(()=>[D(" "+l(y.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),s("div",kn,[s("span",$n,l(y.$t("setting.theme")),1),s("div",Sn,[(O(),Q(Ot,null,Lt(H,b=>g(c(P),{key:b.key,size:"small",type:b.key===v.value?"primary":void 0,onClick:F=>c(o).setTheme(b.key)},{icon:x(()=>[g(c(K),{icon:b.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),s("div",_n,[s("span",Cn,l(y.$t("setting.language")),1),s("div",zn,[g(c(Gt),{style:{width:"140px"},value:k.value,options:U,onUpdateValue:$[6]||($[6]=b=>c(o).setLanguage(b))},null,8,["value"])])]),s("div",Rn,[s("span",Tn,l(y.$t("setting.resetUserInfo")),1),g(c(P),{size:"small",onClick:L},{default:x(()=>[D(l(y.$t("common.reset")),1)]),_:1})])])]))}}),Vn={class:"p-4 space-y-5 min-h-[200px]"},Dn={class:"space-y-6"},Mn={class:"flex items-center space-x-4"},Nn={class:"flex-shrink-0 w-[120px]"},Bn={class:"flex-1"},Pn={class:"flex items-center space-x-4"},Un={class:"flex-shrink-0 w-[120px]"},An={class:"flex-1"},En={class:"flex items-center space-x-4"},Hn={class:"flex-shrink-0 w-[120px]"},Fn={class:"flex-1"},jn={class:"flex items-center space-x-4"},On=s("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),Ln=J({__name:"Advanced",setup(t){const o=Kt(),f=He(),r=z(o.systemMessage??""),u=z(o.temperature??.5),v=z(o.top_p??1);function p(d){o.updateSetting(d),f.success(X("common.success"))}function _(){o.resetSetting(),f.success(X("common.success")),window.location.reload()}return(d,m)=>(O(),Q("div",Vn,[s("div",Dn,[s("div",Mn,[s("span",Nn,l(d.$t("setting.role")),1),s("div",Bn,[g(c(ue),{value:r.value,"onUpdate:value":m[0]||(m[0]=k=>r.value=k),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),g(c(P),{size:"tiny",text:"",type:"primary",onClick:m[1]||(m[1]=k=>p({systemMessage:r.value}))},{default:x(()=>[D(l(d.$t("common.save")),1)]),_:1})]),s("div",Pn,[s("span",Un,l(d.$t("setting.temperature")),1),s("div",An,[g(c(Pe),{value:u.value,"onUpdate:value":m[2]||(m[2]=k=>u.value=k),max:2,min:0,step:.1},null,8,["value"])]),s("span",null,l(u.value),1),g(c(P),{size:"tiny",text:"",type:"primary",onClick:m[3]||(m[3]=k=>p({temperature:u.value}))},{default:x(()=>[D(l(d.$t("common.save")),1)]),_:1})]),s("div",En,[s("span",Hn,l(d.$t("setting.top_p")),1),s("div",Fn,[g(c(Pe),{value:v.value,"onUpdate:value":m[4]||(m[4]=k=>v.value=k),max:1,min:0,step:.1},null,8,["value"])]),s("span",null,l(v.value),1),g(c(P),{size:"tiny",text:"",type:"primary",onClick:m[5]||(m[5]=k=>p({top_p:v.value}))},{default:x(()=>[D(l(d.$t("common.save")),1)]),_:1})]),s("div",jn,[On,g(c(P),{size:"small",onClick:_},{default:x(()=>[D(l(d.$t("common.reset")),1)]),_:1})])])]))}}),Gn="chatgpt-web",Kn="2.11.1",Wn="ChatGPT Web",Yn="ChenZhaoYu <chenzhaoyu1994@gmail.com>",Xn=["chatgpt-web","chatgpt","chatbot","vue"],Jn={dev:"vite",build:"vite build",preview:"vite preview","check-build":"run-p type-check build-only","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},qn={"@vscode/markdown-it-katex":"^1.0.3","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0","html-to-image":"^1.11.11",katex:"^0.16.4","markdown-it":"^13.0.1","mermaid-it-markdown":"^1.0.8","naive-ui":"^2.34.3",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},Qn={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.3.0",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},Zn={name:Gn,version:Kn,private:!1,description:Wn,author:Yn,keywords:Xn,scripts:Jn,dependencies:qn,devDependencies:Qn,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},ea={class:"p-4 space-y-4"},ta={class:"text-xl font-bold"},na={class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},aa=s("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/Chanzhaoyu/chatgpt-web",target:"_blank"}," GitHub ",-1),sa={key:0},oa={key:1},ia=J({__name:"About",setup(t){const o=Fe(),f=z(!1),r=z(),u=C(()=>!!o.isChatGPTAPI);async function v(){try{f.value=!0;const{data:p}=await Yt();r.value=p}finally{f.value=!1}}return Wt(()=>{v()}),(p,_)=>(O(),$e(c(an),{show:f.value},{default:x(()=>{var d,m,k,H,U,A;return[s("div",ea,[s("h2",ta," Version - "+l(c(Zn).version),1),s("div",na,[s("p",null,[D(l(p.$t("setting.openSource"))+" ",1),aa,D(" "+l(p.$t("setting.freeMIT")),1)]),s("p",null,l(p.$t("setting.stars")),1)]),s("p",null,l(p.$t("setting.api"))+"："+l(((d=r.value)==null?void 0:d.apiModel)??"-"),1),u.value?(O(),Q("p",sa,l(p.$t("setting.monthlyUsage"))+"："+l(((m=r.value)==null?void 0:m.usage)??"-"),1)):Se("",!0),u.value?Se("",!0):(O(),Q("p",oa,l(p.$t("setting.reverseProxy"))+"："+l(((k=r.value)==null?void 0:k.reverseProxy)??"-"),1)),s("p",null,l(p.$t("setting.timeout"))+"："+l(((H=r.value)==null?void 0:H.timeoutMs)??"-"),1),s("p",null,l(p.$t("setting.socks"))+"："+l(((U=r.value)==null?void 0:U.socksProxy)??"-"),1),s("p",null,l(p.$t("setting.httpsProxy"))+"："+l(((A=r.value)==null?void 0:A.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),la={class:"ml-2"},ra={class:"min-h-[100px]"},da={class:"ml-2"},ca={class:"min-h-[100px]"},ua={class:"ml-2"},va=J({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(t,{emit:o}){const f=t,r=o,u=Fe(),v=C(()=>!!u.isChatGPTAPI),p=z("General"),_=C({get(){return f.visible},set(d){r("update:visible",d)}});return(d,m)=>(O(),$e(c(Jt),{show:_.value,"onUpdate:show":m[1]||(m[1]=k=>_.value=k),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:x(()=>[s("div",null,[g(c(Xt),{value:p.value,"onUpdate:value":m[0]||(m[0]=k=>p.value=k),type:"line",animated:""},{default:x(()=>[g(c(we),{name:"General",tab:"General"},{tab:x(()=>[g(c(K),{class:"text-lg",icon:"ri:file-user-line"}),s("span",la,l(d.$t("setting.general")),1)]),default:x(()=>[s("div",ra,[g(In)])]),_:1}),v.value?(O(),$e(c(we),{key:0,name:"Advanced",tab:"Advanced"},{tab:x(()=>[g(c(K),{class:"text-lg",icon:"ri:equalizer-line"}),s("span",da,l(d.$t("setting.advanced")),1)]),default:x(()=>[s("div",ca,[g(Ln)])]),_:1})):Se("",!0),g(c(we),{name:"Config",tab:"Config"},{tab:x(()=>[g(c(K),{class:"text-lg",icon:"ri:list-settings-line"}),s("span",ua,l(d.$t("setting.config")),1)]),default:x(()=>[g(ia)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{va as default};
