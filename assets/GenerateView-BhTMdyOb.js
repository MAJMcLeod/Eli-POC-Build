import{_ as $,H as v,k as p,o as l,a as o,w as d,h as f,i as S,a4 as Je,v as pe,a5 as De,a6 as Se,A as Q,E as ke,x as w,a7 as Xe,R as Qe,P as Ze,a8 as Ie,a9 as ge,aa as et,s as ve,ab as tt,ac as Fe,C as at,ad as ot,ae as st,L as ye,M as se,a2 as fe,af as qe,ag as it,a3 as nt,S as Me,D as rt,z as $e,ah as Ee,ai as Le,aj as _e,ak as he,al as ze,am as lt,F as L,an as dt,f as t,Z as ie,ao as ct,K as ut,ap as mt,aq as me,ar as pt,as as gt,at as ht,au as ft,av as _t,aw as vt,ax as yt,ay as bt,az as wt,t as m,g as G,n as Y,aA as Pe,l as J,c as q,aB as kt,aC as xt,aD as be,aE as At,aF as St,aG as de,m as xe,aH as It}from"./index-CBwQeFa2.js";import{V as Pt,a as ue}from"./VTabs-DR6fkL6J.js";import{V as Ct}from"./VSelect-f4W1a40j.js";import{V as Rt}from"./VChip-C2Oxc8tQ.js";const Dt={class:"media-generate-nav-slider"},$t={__name:"MediaGenerateNavSlider",props:{modelValue:{type:String,default:"run"}},emits:["update:modelValue","tabChange"],setup(e,{emit:s}){const a=e,i=s,r=v({get:()=>a.modelValue,set:c=>{i("update:modelValue",c)}});return(c,n)=>(l(),p("div",Dt,[o(Je,{flat:"",class:"pa-0"},{default:d(()=>[o(Pt,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=u=>r.value=u),color:"primary","align-tabs":"start","show-arrows":"","slider-color":"primary",height:"48"},{default:d(()=>[o(ue,{value:"run",class:"text-none"},{default:d(()=>[o(S,{start:""},{default:d(()=>n[1]||(n[1]=[f("mdi-play-outline")])),_:1}),n[2]||(n[2]=f(" Run "))]),_:1}),o(ue,{value:"examples",class:"text-none"},{default:d(()=>[o(S,{start:""},{default:d(()=>n[3]||(n[3]=[f("mdi-book-open-outline")])),_:1}),n[4]||(n[4]=f(" Examples "))]),_:1}),o(ue,{value:"docs",class:"text-none"},{default:d(()=>[o(S,{start:""},{default:d(()=>n[5]||(n[5]=[f("mdi-file-document-outline")])),_:1}),n[6]||(n[6]=f(" Docs "))]),_:1}),o(ue,{value:"forums",class:"text-none"},{default:d(()=>[o(S,{start:""},{default:d(()=>n[7]||(n[7]=[f("mdi-forum-outline")])),_:1}),n[8]||(n[8]=f(" Forums "))]),_:1}),o(ue,{value:"history",class:"text-none"},{default:d(()=>[o(S,{start:""},{default:d(()=>n[9]||(n[9]=[f("mdi-history")])),_:1}),n[10]||(n[10]=f(" History "))]),_:1}),o(ue,{value:"api",class:"text-none"},{default:d(()=>[o(S,{start:""},{default:d(()=>n[11]||(n[11]=[f("mdi-code-json")])),_:1}),n[12]||(n[12]=f(" API "))]),_:1})]),_:1},8,["modelValue"])]),_:1})]))}},Vt=$($t,[["__scopeId","data-v-6c6da649"]]),Ce=Symbol.for("vuetify:v-slider");function Tt(e,s,a){const i=a==="vertical",r=s.getBoundingClientRect(),c="touches"in e?e.touches[0]:e;return i?c.clientY-(r.top+r.height/2):c.clientX-(r.left+r.width/2)}function Ut(e,s){return"touches"in e&&e.touches.length?e.touches[0][s]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][s]:e[s]}const Ft=pe({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...Ze(),...Qe({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),qt=e=>{const s=v(()=>parseFloat(e.min)),a=v(()=>parseFloat(e.max)),i=v(()=>Number(e.step)>0?parseFloat(e.step):0),r=v(()=>Math.max(De(i.value),De(s.value)));function c(n){if(n=parseFloat(n),i.value<=0)return n;const u=Ie(n,s.value,a.value),y=s.value%i.value,M=Math.round((u-y)/i.value)*i.value+y;return parseFloat(Math.min(M,a.value).toFixed(r.value))}return{min:s,max:a,step:i,decimals:r,roundValue:c}},Mt=e=>{let{props:s,steps:a,onSliderStart:i,onSliderMove:r,onSliderEnd:c,getActiveThumb:n}=e;const{isRtl:u}=Se(),y=Q(s,"reverse"),M=v(()=>s.direction==="vertical"),B=v(()=>M.value!==y.value),{min:g,max:A,step:E,decimals:K,roundValue:z}=a,Z=v(()=>parseInt(s.thumbSize,10)),N=v(()=>parseInt(s.tickSize,10)),O=v(()=>parseInt(s.trackSize,10)),W=v(()=>(A.value-g.value)/E.value),ee=Q(s,"disabled"),H=v(()=>s.error||s.disabled?void 0:s.thumbColor??s.color),x=v(()=>s.error||s.disabled?void 0:s.trackColor??s.color),F=v(()=>s.error||s.disabled?void 0:s.trackFillColor??s.color),D=ke(!1),I=ke(0),C=w(),_=w();function b(h){var Re;const k=(Re=C.value)==null?void 0:Re.$el;if(!k)return;const le=s.direction==="vertical",Ne=le?"top":"left",We=le?"height":"width",He=le?"clientY":"clientX",{[Ne]:Ke,[We]:Oe}=k.getBoundingClientRect(),Ye=Ut(h,He);let we=Math.min(Math.max((Ye-Ke-I.value)/Oe,0),1)||0;return(le?B.value:B.value!==u.value)&&(we=1-we),z(g.value+we*(A.value-g.value))}const P=h=>{const k=b(h);k!=null&&c({value:k}),D.value=!1,I.value=0},V=h=>{const k=b(h);_.value=n(h),_.value&&(D.value=!0,_.value.contains(h.target)?I.value=Tt(h,_.value,s.direction):(I.value=0,k!=null&&r({value:k})),k!=null&&i({value:k}),ge(()=>{var le;return(le=_.value)==null?void 0:le.focus()}))},T={passive:!0,capture:!0};function X(h){const k=b(h);k!=null&&r({value:k})}function te(h){h.stopPropagation(),h.preventDefault(),P(h),window.removeEventListener("mousemove",X,T),window.removeEventListener("mouseup",te)}function j(h){var k;P(h),window.removeEventListener("touchmove",X,T),(k=h.target)==null||k.removeEventListener("touchend",j)}function ae(h){var k;V(h),window.addEventListener("touchmove",X,T),(k=h.target)==null||k.addEventListener("touchend",j,{passive:!1})}function U(h){h.button===0&&(h.preventDefault(),V(h),window.addEventListener("mousemove",X,T),window.addEventListener("mouseup",te,{passive:!1}))}const R=h=>{const k=(h-g.value)/(A.value-g.value)*100;return Ie(isNaN(k)?0:k,0,100)},oe=Q(s,"showTicks"),ne=v(()=>oe.value?s.ticks?Array.isArray(s.ticks)?s.ticks.map(h=>({value:h,position:R(h),label:h.toString()})):Object.keys(s.ticks).map(h=>({value:parseFloat(h),position:R(parseFloat(h)),label:s.ticks[h]})):W.value!==1/0?Xe(W.value+1).map(h=>{const k=g.value+h*E.value;return{value:k,position:R(k)}}):[]:[]),ce=v(()=>ne.value.some(h=>{let{label:k}=h;return!!k})),re={activeThumbRef:_,color:Q(s,"color"),decimals:K,disabled:ee,direction:Q(s,"direction"),elevation:Q(s,"elevation"),hasLabels:ce,isReversed:y,indexFromEnd:B,min:g,max:A,mousePressed:D,numTicks:W,onSliderMousedown:U,onSliderTouchstart:ae,parsedTicks:ne,parseMouseMove:b,position:R,readonly:Q(s,"readonly"),rounded:Q(s,"rounded"),roundValue:z,showTicks:oe,startOffset:I,step:E,thumbSize:Z,thumbColor:H,thumbLabel:Q(s,"thumbLabel"),ticks:Q(s,"ticks"),tickSize:N,trackColor:x,trackContainerRef:C,trackFillColor:F,trackSize:O,vertical:M};return et(Ce,re),re},Et=pe({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},name:String,...Me()},"VSliderThumb"),Lt=ve()({name:"VSliderThumb",directives:{Ripple:tt},props:Et(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:a,emit:i}=s;const r=Fe(Ce),{isRtl:c,rtlClasses:n}=Se();if(!r)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:u,step:y,disabled:M,thumbSize:B,thumbLabel:g,direction:A,isReversed:E,vertical:K,readonly:z,elevation:Z,mousePressed:N,decimals:O,indexFromEnd:W}=r,ee=v(()=>M.value?void 0:Z.value),{elevationClasses:H}=at(ee),{textColorClasses:x,textColorStyles:F}=ot(u),{pageup:D,pagedown:I,end:C,home:_,left:b,right:P,down:V,up:T}=st,X=[D,I,C,_,b,P,V,T],te=v(()=>y.value?[1,2,3]:[1,5,10]);function j(U,R){if(!X.includes(U.key))return;U.preventDefault();const oe=y.value||.1,ne=(e.max-e.min)/oe;if([b,P,V,T].includes(U.key)){const re=(K.value?[c.value?b:P,E.value?V:T]:W.value!==c.value?[b,T]:[P,T]).includes(U.key)?1:-1,h=U.shiftKey?2:U.ctrlKey?1:0;R=R+re*oe*te.value[h]}else if(U.key===_)R=e.min;else if(U.key===C)R=e.max;else{const ce=U.key===I?1:-1;R=R-ce*oe*(ne>100?ne/10:10)}return Math.max(e.min,Math.min(e.max,R))}function ae(U){const R=j(U,e.modelValue);R!=null&&i("update:modelValue",R)}return ye(()=>{const U=se(W.value?100-e.position:e.position,"%");return o("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&N.value},e.class,n.value],style:[{"--v-slider-thumb-position":U,"--v-slider-thumb-size":se(B.value)},e.style],role:"slider",tabindex:M.value?-1:0,"aria-label":e.name,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!z.value,"aria-orientation":A.value,onKeydown:z.value?void 0:ae},[o("div",{class:["v-slider-thumb__surface",x.value,H.value],style:{...F.value}},null),fe(o("div",{class:["v-slider-thumb__ripple",x.value],style:F.value},null),[[qe("ripple"),e.ripple,null,{circle:!0,center:!0}]]),o(it,{origin:"bottom center"},{default:()=>{var R;return[fe(o("div",{class:"v-slider-thumb__label-container"},[o("div",{class:["v-slider-thumb__label"]},[o("div",null,[((R=a["thumb-label"])==null?void 0:R.call(a,{modelValue:e.modelValue}))??e.modelValue.toFixed(y.value?O.value:1)])])]),[[nt,g.value&&e.focused||g.value==="always"]])]}})])}),{}}}),zt=pe({start:{type:Number,required:!0},stop:{type:Number,required:!0},...Me()},"VSliderTrack"),Bt=ve()({name:"VSliderTrack",props:zt(),emits:{},setup(e,s){let{slots:a}=s;const i=Fe(Ce);if(!i)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:r,parsedTicks:c,rounded:n,showTicks:u,tickSize:y,trackColor:M,trackFillColor:B,trackSize:g,vertical:A,min:E,max:K,indexFromEnd:z}=i,{roundedClasses:Z}=rt(n),{backgroundColorClasses:N,backgroundColorStyles:O}=$e(B),{backgroundColorClasses:W,backgroundColorStyles:ee}=$e(M),H=v(()=>`inset-${A.value?"block":"inline"}-${z.value?"end":"start"}`),x=v(()=>A.value?"height":"width"),F=v(()=>({[H.value]:"0%",[x.value]:"100%"})),D=v(()=>e.stop-e.start),I=v(()=>({[H.value]:se(e.start,"%"),[x.value]:se(D.value,"%")})),C=v(()=>u.value?(A.value?c.value.slice().reverse():c.value).map((b,P)=>{var T;const V=b.value!==E.value&&b.value!==K.value?se(b.position,"%"):void 0;return o("div",{key:b.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":b.position>=e.start&&b.position<=e.stop,"v-slider-track__tick--first":b.value===E.value,"v-slider-track__tick--last":b.value===K.value}],style:{[H.value]:V}},[(b.label||a["tick-label"])&&o("div",{class:"v-slider-track__tick-label"},[((T=a["tick-label"])==null?void 0:T.call(a,{tick:b,index:P}))??b.label])])}):[]);return ye(()=>o("div",{class:["v-slider-track",Z.value,e.class],style:[{"--v-slider-track-size":se(g.value),"--v-slider-tick-size":se(y.value)},e.style]},[o("div",{class:["v-slider-track__background",W.value,{"v-slider-track__background--opacity":!!r.value||!B.value}],style:{...F.value,...ee.value}},null),o("div",{class:["v-slider-track__fill",N.value],style:{...I.value,...O.value}},null),u.value&&o("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":u.value==="always"}]},[C.value])])),{}}}),jt=pe({...lt(),...Ft(),...ze(),modelValue:{type:[Number,String],default:0}},"VSlider"),Ve=ve()({name:"VSlider",props:jt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,s){let{slots:a,emit:i}=s;const r=w(),{rtlClasses:c}=Se(),n=qt(e),u=Ee(e,"modelValue",void 0,x=>n.roundValue(x??n.min.value)),{min:y,max:M,mousePressed:B,roundValue:g,onSliderMousedown:A,onSliderTouchstart:E,trackContainerRef:K,position:z,hasLabels:Z,readonly:N}=Mt({props:e,steps:n,onSliderStart:()=>{i("start",u.value)},onSliderEnd:x=>{let{value:F}=x;const D=g(F);u.value=D,i("end",D)},onSliderMove:x=>{let{value:F}=x;return u.value=g(F)},getActiveThumb:()=>{var x;return(x=r.value)==null?void 0:x.$el}}),{isFocused:O,focus:W,blur:ee}=Le(e),H=v(()=>z(u.value));return ye(()=>{const x=_e.filterProps(e),F=!!(e.label||a.label||a.prepend);return o(_e,he({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||Z.value,"v-slider--focused":O.value,"v-slider--pressed":B.value,"v-slider--disabled":e.disabled},c.value,e.class],style:e.style},x,{focused:O.value}),{...a,prepend:F?D=>{var I,C;return o(L,null,[((I=a.label)==null?void 0:I.call(a,D))??(e.label?o(dt,{id:D.id.value,class:"v-slider__label",text:e.label},null):void 0),(C=a.prepend)==null?void 0:C.call(a,D)])}:void 0,default:D=>{let{id:I,messagesId:C}=D;return o("div",{class:"v-slider__container",onMousedown:N.value?void 0:A,onTouchstartPassive:N.value?void 0:E},[o("input",{id:I.value,name:e.name||I.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:u.value},null),o(Bt,{ref:K,start:0,stop:H.value},{"tick-label":a["tick-label"]}),o(Lt,{ref:r,"aria-describedby":C.value,focused:O.value,min:y.value,max:M.value,modelValue:u.value,"onUpdate:modelValue":_=>u.value=_,position:H.value,elevation:e.elevation,onFocus:W,onBlur:ee,ripple:e.ripple,name:e.name},{"thumb-label":a["thumb-label"]})])}})}),{}}}),Gt={class:"run-advanced-settings"},Nt={class:"setting-field"},Wt={class:"setting-field"},Ht={class:"setting-field"},Kt={class:"setting-field"},Ot={__name:"RunAdvancedSettings",setup(e){const s=w(-1),a=w(7.5),i=w(30),r=w("DPM++ 2M Karras"),c=["DPM++ 2M Karras","Euler a","DPM++ SDE Karras","DPM++ 2M SDE Karras","DDIM"];return(n,u)=>(l(),p("div",Gt,[t("div",Nt,[u[6]||(u[6]=t("div",{class:"field-label"},"seed",-1)),o(ie,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=y=>s.value=y),variant:"outlined","hide-details":"",type:"number",density:"compact","bg-color":"rgba(42, 42, 42, 0.8)",placeholder:"-1 for random"},null,8,["modelValue"])]),t("div",Wt,[u[7]||(u[7]=t("div",{class:"field-label"},"guidance_scale",-1)),o(Ve,{modelValue:a.value,"onUpdate:modelValue":u[2]||(u[2]=y=>a.value=y),min:"1",max:"20",step:"0.1","thumb-label":"","hide-details":"",color:"primary"},{append:d(()=>[o(ie,{modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=y=>a.value=y),type:"number",style:{width:"70px"},density:"compact","hide-details":"",variant:"outlined","bg-color":"rgba(42, 42, 42, 0.8)"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),t("div",Ht,[u[8]||(u[8]=t("div",{class:"field-label"},"steps",-1)),o(Ve,{modelValue:i.value,"onUpdate:modelValue":u[4]||(u[4]=y=>i.value=y),min:"10",max:"100",step:"1","thumb-label":"","hide-details":"",color:"primary"},{append:d(()=>[o(ie,{modelValue:i.value,"onUpdate:modelValue":u[3]||(u[3]=y=>i.value=y),type:"number",style:{width:"70px"},density:"compact","hide-details":"",variant:"outlined","bg-color":"rgba(42, 42, 42, 0.8)"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),t("div",Kt,[u[9]||(u[9]=t("div",{class:"field-label"},"sampler",-1)),o(Ct,{modelValue:r.value,"onUpdate:modelValue":u[5]||(u[5]=y=>r.value=y),items:c,variant:"outlined","hide-details":"",density:"compact","bg-color":"rgba(42, 42, 42, 0.8)"},null,8,["modelValue"])])]))}},Yt=$(Ot,[["__scopeId","data-v-e22daca1"]]),Jt=pe({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ze(),..._t()},"VTextarea"),Te=ve()({name:"VTextarea",directives:{Intersect:ct},inheritAttrs:!1,props:Jt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:a,emit:i,slots:r}=s;const c=Ee(e,"modelValue"),{isFocused:n,focus:u,blur:y}=Le(e),M=v(()=>typeof e.counterValue=="function"?e.counterValue(c.value):(c.value||"").toString().length),B=v(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function g(_,b){var P,V;!e.autofocus||!_||(V=(P=b[0].target)==null?void 0:P.focus)==null||V.call(P)}const A=w(),E=w(),K=ke(""),z=w(),Z=v(()=>e.persistentPlaceholder||n.value||e.active);function N(){var _;z.value!==document.activeElement&&((_=z.value)==null||_.focus()),n.value||u()}function O(_){N(),i("click:control",_)}function W(_){i("mousedown:control",_)}function ee(_){_.stopPropagation(),N(),ge(()=>{c.value="",wt(e["onClick:clear"],_)})}function H(_){var P;const b=_.target;if(c.value=b.value,(P=e.modelModifiers)!=null&&P.trim){const V=[b.selectionStart,b.selectionEnd];ge(()=>{b.selectionStart=V[0],b.selectionEnd=V[1]})}}const x=w(),F=w(Number(e.rows)),D=v(()=>["plain","underlined"].includes(e.variant));ut(()=>{e.autoGrow||(F.value=Number(e.rows))});function I(){e.autoGrow&&ge(()=>{if(!x.value||!E.value)return;const _=getComputedStyle(x.value),b=getComputedStyle(E.value.$el),P=parseFloat(_.getPropertyValue("--v-field-padding-top"))+parseFloat(_.getPropertyValue("--v-input-padding-top"))+parseFloat(_.getPropertyValue("--v-field-padding-bottom")),V=x.value.scrollHeight,T=parseFloat(_.lineHeight),X=Math.max(parseFloat(e.rows)*T+P,parseFloat(b.getPropertyValue("--v-input-control-height"))),te=parseFloat(e.maxRows)*T+P||1/0,j=Ie(V??0,X,te);F.value=Math.floor((j-P)/T),K.value=se(j)})}mt(I),me(c,I),me(()=>e.rows,I),me(()=>e.maxRows,I),me(()=>e.density,I);let C;return me(x,_=>{_?(C=new ResizeObserver(I),C.observe(x.value)):C==null||C.disconnect()}),pt(()=>{C==null||C.disconnect()}),ye(()=>{const _=!!(r.counter||e.counter||e.counterValue),b=!!(_||r.details),[P,V]=gt(a),{modelValue:T,...X}=_e.filterProps(e),te=ht(e);return o(_e,he({ref:A,modelValue:c.value,"onUpdate:modelValue":j=>c.value=j,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":D.value},e.class],style:e.style},P,X,{centerAffix:F.value===1&&!D.value,focused:n.value}),{...r,default:j=>{let{id:ae,isDisabled:U,isDirty:R,isReadonly:oe,isValid:ne}=j;return o(yt,he({ref:E,style:{"--v-textarea-control-height":K.value},onClick:O,onMousedown:W,"onClick:clear":ee,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},te,{id:ae.value,active:Z.value||R.value,centerAffix:F.value===1&&!D.value,dirty:R.value||e.dirty,disabled:U.value,focused:n.value,error:ne.value===!1}),{...r,default:ce=>{let{props:{class:re,...h}}=ce;return o(L,null,[e.prefix&&o("span",{class:"v-text-field__prefix"},[e.prefix]),fe(o("textarea",he({ref:z,class:re,value:c.value,onInput:H,autofocus:e.autofocus,readonly:oe.value,disabled:U.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:N,onBlur:y},h,V),null),[[qe("intersect"),{handler:g},null,{once:!0}]]),e.autoGrow&&fe(o("textarea",{class:[re,"v-textarea__sizer"],id:`${h.id}-sizer`,"onUpdate:modelValue":k=>c.value=k,ref:x,readonly:!0,"aria-hidden":"true"},null),[[bt,c.value]]),e.suffix&&o("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:b?j=>{var ae;return o(L,null,[(ae=r.details)==null?void 0:ae.call(r,j),_&&o(L,null,[o("span",null,null),o(vt,{active:e.persistentCounter||n.value,value:M.value,max:B.value,disabled:e.disabled},r.counter)])])}:void 0})}),ft({},A,E,z)}}),Xt={class:"run-settings-panel"},Qt={class:"panel-header"},Zt={class:"panel-content"},ea={key:0,class:"settings-fields"},ta={class:"setting-field"},aa={class:"setting-field"},oa={class:"setting-field dimensions-row"},sa={class:"dimension-field"},ia={class:"dimension-field"},na={class:"setting-field"},ra={key:0,class:"advanced-settings"},la={class:"panel-footer"},da={__name:"RunSettingsPanel",setup(e){const s=w(!1),a=w(!1),i=w("Image of a man in a park, man is wearing black smart trenchcoat and hat"),r=w("Weird hands, unrealistic, creepy"),c=w(512),n=w(512),u=w(1),y=()=>{a.value=!a.value},M=()=>{console.log("Generating image with settings:",{prompt:i.value,negativePrompt:r.value,width:c.value,height:n.value,numOutputs:u.value})};return(B,g)=>(l(),p("div",Xt,[t("div",Qt,[g[5]||(g[5]=t("div",{class:"panel-title"},"settings",-1)),o(G,{variant:"text",class:"advanced-btn",density:"compact",onClick:y},{default:d(()=>[f(m(a.value?"basic":"advanced"),1)]),_:1})]),t("div",Zt,[s.value?Y("",!0):(l(),p("div",ea,[t("div",ta,[g[6]||(g[6]=t("div",{class:"field-label"},"prompt",-1)),o(Te,{modelValue:i.value,"onUpdate:modelValue":g[0]||(g[0]=A=>i.value=A),variant:"outlined","auto-grow":"",rows:"3","hide-details":"",class:"prompt-field","bg-color":"rgba(42, 42, 42, 0.8)"},null,8,["modelValue"])]),t("div",aa,[g[7]||(g[7]=t("div",{class:"field-label"},"negative_prompt",-1)),o(Te,{modelValue:r.value,"onUpdate:modelValue":g[1]||(g[1]=A=>r.value=A),variant:"outlined","auto-grow":"",rows:"3","hide-details":"",class:"negative-prompt-field","bg-color":"rgba(42, 42, 42, 0.8)"},null,8,["modelValue"])]),t("div",oa,[t("div",sa,[g[8]||(g[8]=t("div",{class:"field-label"},"width",-1)),o(ie,{modelValue:c.value,"onUpdate:modelValue":g[2]||(g[2]=A=>c.value=A),variant:"outlined","hide-details":"",type:"number",density:"compact","bg-color":"rgba(42, 42, 42, 0.8)"},null,8,["modelValue"])]),t("div",ia,[g[9]||(g[9]=t("div",{class:"field-label"},"height",-1)),o(ie,{modelValue:n.value,"onUpdate:modelValue":g[3]||(g[3]=A=>n.value=A),variant:"outlined","hide-details":"",type:"number",density:"compact","bg-color":"rgba(42, 42, 42, 0.8)"},null,8,["modelValue"])])]),t("div",na,[g[10]||(g[10]=t("div",{class:"field-label"},"num_outputs",-1)),o(ie,{modelValue:u.value,"onUpdate:modelValue":g[4]||(g[4]=A=>u.value=A),variant:"outlined","hide-details":"",type:"number",density:"compact","bg-color":"rgba(42, 42, 42, 0.8)"},null,8,["modelValue"])]),o(Pe,null,{default:d(()=>[a.value?(l(),p("div",ra,[o(Yt)])):Y("",!0)]),_:1})]))]),t("div",la,[g[13]||(g[13]=t("div",{class:"spacer"},null,-1)),o(G,{variant:"outlined",color:"primary",class:"generate-btn",onClick:M,disabled:!i.value},{default:d(()=>[g[12]||(g[12]=f(" Generate ")),o(S,{end:"",class:"chevron-icon"},{default:d(()=>g[11]||(g[11]=[f("mdi-chevron-right")])),_:1})]),_:1},8,["disabled"])])]))}},ca=$(da,[["__scopeId","data-v-c47045f7"]]),ua={class:"run-generation-item"},ma={class:"generation-header"},pa={class:"generation-title"},ga={class:"model-name"},ha={class:"timestamp"},fa={class:"generation-actions"},_a={class:"action-buttons"},va={class:"generation-image-container"},ya=["src","alt"],ba={__name:"RunGenerationItem",props:{generation:{type:Object,required:!0}},setup(e){return(s,a)=>(l(),p("div",ua,[t("div",ma,[t("div",pa,[t("span",ga,m(e.generation.model),1),a[0]||(a[0]=t("span",{class:"separator"},"-",-1)),t("span",ha,m(e.generation.timestamp),1)]),t("div",fa,[o(G,{variant:"text",density:"compact",class:"settings-btn pa-0"},{default:d(()=>[o(S,{size:"small",class:"settings-icon"},{default:d(()=>a[1]||(a[1]=[f("mdi-cog-outline")])),_:1}),a[2]||(a[2]=t("span",{class:"settings-text"},"settings",-1))]),_:1}),t("div",_a,[o(G,{variant:"text",density:"compact",class:"action-btn"},{default:d(()=>[o(S,{size:"small"},{default:d(()=>a[3]||(a[3]=[f("mdi-fullscreen")])),_:1})]),_:1}),o(G,{variant:"text",density:"compact",class:"action-btn"},{default:d(()=>[o(S,{size:"small"},{default:d(()=>a[4]||(a[4]=[f("mdi-download-outline")])),_:1})]),_:1}),o(G,{variant:"text",density:"compact",class:"action-btn"},{default:d(()=>[o(S,{size:"small"},{default:d(()=>a[5]||(a[5]=[f("mdi-share-variant-outline")])),_:1})]),_:1}),o(G,{variant:"text",density:"compact",class:"action-btn"},{default:d(()=>[o(S,{size:"small"},{default:d(()=>a[6]||(a[6]=[f("mdi-delete-outline")])),_:1})]),_:1})])])]),t("div",va,[t("img",{src:e.generation.imageUrl,alt:e.generation.model+" generation",class:"generation-image"},null,8,ya)])]))}},wa=$(ba,[["__scopeId","data-v-6f1db1ad"]]),ka={class:"run-generations-list"},xa={class:"generations-container"},Aa={key:0,class:"no-generations"},Sa={__name:"RunGenerationsList",setup(e){const s=w([{id:1,model:"sdxl-generation",timestamp:"now",imageUrl:"/assets/mock/general/ilightice_A_bright_and_colorful_photo_of_an_influencer_in_a_vib_438201a7-d193-40fa-a820-d121ec13e4bd.png"},{id:2,model:"sdxl-generation",timestamp:"09:17",imageUrl:"/assets/mock/general/jalaison_A_serene_minimalist_photograph_of_a_lighthouse_on_the__b723de58-954e-40b1-9b58-9d12aaa2cc58.png"},{id:3,model:"sdxl-generation",timestamp:"08:45",imageUrl:"/assets/mock/general/sparta.cass_Virgo_astrology_full_moon_--ar_45_--stylize_250_--v_dc3f4528-f7ed-4310-9c87-f6d204d2b653.png"}]);return(a,i)=>(l(),p("div",ka,[t("div",xa,[(l(!0),p(L,null,J(s.value,r=>(l(),q(wa,{key:r.id,generation:r,class:"generation-item"},null,8,["generation"]))),128)),s.value.length===0?(l(),p("div",Aa,[o(S,{size:"64",color:"grey-darken-1"},{default:d(()=>i[0]||(i[0]=[f("mdi-image-outline")])),_:1}),i[1]||(i[1]=t("div",{class:"placeholder-text"},"No generations yet",-1)),i[2]||(i[2]=t("div",{class:"placeholder-subtext"},"Configure settings in the panel and click Generate",-1))])):Y("",!0)])]))}},Ia=$(Sa,[["__scopeId","data-v-f93d1b32"]]),Pa={class:"run-section"},Ca={class:"run-container"},Ra={class:"content-area"},Da={__name:"RunSection",setup(e){return(s,a)=>(l(),p("div",Pa,[t("div",Ca,[o(ca,{class:"settings-panel"}),t("div",Ra,[o(Ia)])])]))}},Ue=$(Da,[["__scopeId","data-v-ad2bb909"]]),$a={class:"example-panel"},Va={class:"input-side"},Ta={class:"input-fields"},Ua={class:"input-field"},Fa={class:"field-value prompt-value"},qa={class:"input-field"},Ma={class:"field-value negative-prompt-value"},Ea={class:"input-field dimensions-field"},La={class:"dimension-field"},za={class:"field-value"},Ba={class:"dimension-field"},ja={class:"field-value"},Ga={class:"input-field"},Na={class:"field-value"},Wa={class:"input-field"},Ha={class:"field-value"},Ka={class:"input-field"},Oa={class:"field-value"},Ya={class:"output-side"},Ja={class:"output-image-container"},Xa=["src","alt"],Qa={__name:"ExamplePanel",props:{example:{type:Object,required:!0}},setup(e){return(s,a)=>(l(),p("div",$a,[t("div",Va,[a[7]||(a[7]=t("div",{class:"panel-title"},"input",-1)),t("div",Ta,[t("div",Ua,[a[0]||(a[0]=t("div",{class:"field-label"},"prompt",-1)),t("div",Fa,m(e.example.prompt),1)]),t("div",qa,[a[1]||(a[1]=t("div",{class:"field-label"},"negative_prompt",-1)),t("div",Ma,m(e.example.negativePrompt),1)]),t("div",Ea,[t("div",La,[a[2]||(a[2]=t("div",{class:"field-label"},"width",-1)),t("div",za,m(e.example.width),1)]),t("div",Ba,[a[3]||(a[3]=t("div",{class:"field-label"},"height",-1)),t("div",ja,m(e.example.height),1)])]),t("div",Ga,[a[4]||(a[4]=t("div",{class:"field-label"},"num_outputs",-1)),t("div",Na,m(e.example.numOutputs),1)]),t("div",Wa,[a[5]||(a[5]=t("div",{class:"field-label"},"scheduler",-1)),t("div",Ha,m(e.example.scheduler),1)]),t("div",Ka,[a[6]||(a[6]=t("div",{class:"field-label"},"inference_steps",-1)),t("div",Oa,m(e.example.inferenceSteps),1)])])]),t("div",Ya,[a[8]||(a[8]=t("div",{class:"panel-title"},"output",-1)),t("div",Ja,[t("img",{src:e.example.outputImage,alt:"Example output for "+e.example.prompt,class:"output-image"},null,8,Xa)])])]))}},Za=$(Qa,[["__scopeId","data-v-ad7088b7"]]),eo={class:"examples-section"},to={class:"examples-container"},ao={__name:"ExamplesSection",setup(e){const s=w([{id:1,scheduler:"K_EULER",inferenceSteps:25,guidanceScale:7.5,promptStrength:.8,seed:"",prompt:"Image of a man in a park, man is wearing black smart trenchcoat and hat",negativePrompt:"Weird hands, unrealistic, creepy",width:512,height:512,numOutputs:1,outputImage:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png"},{id:2,scheduler:"K_EULER",inferenceSteps:30,guidanceScale:8,promptStrength:.9,seed:"42",prompt:"A girl floating with balloons in a city at sunset",negativePrompt:"Blurry, bad anatomy, extra limbs, poorly drawn face",width:512,height:512,numOutputs:1,outputImage:"/assets/mock/general/yyuanlit_Future_black_technology_mountain_future_sense_black_go_38a4cd9f-c267-4f17-980a-4b43fc541d43.png"},{id:3,scheduler:"DPM++",inferenceSteps:40,guidanceScale:9,promptStrength:.85,seed:"12345",prompt:"Futuristic cityscape with flying cars and neon lights",negativePrompt:"Grainy, low resolution, poorly drawn buildings",width:512,height:512,numOutputs:1,outputImage:"/assets/mock/general/meshadventures_A_dramatic_view_of_the_Empire_State_Building_fro_8e20eb61-7df8-43b5-80bb-7ad75f47f3f6.png"},{id:4,scheduler:"DDIM",inferenceSteps:50,guidanceScale:10,promptStrength:.95,seed:"67890",prompt:"Photorealistic portrait of a cyberpunk character with neon implants and futuristic background",negativePrompt:"Cartoon, anime, illustration, bad proportions, deformed",width:512,height:512,numOutputs:1,outputImage:"/assets/mock/general/anzhelikos_A_breathtaking_landscape_of_cherry_blossom_trees_in__12357cff-490a-4a39-bb83-cfb4bba207d7.png"}]);return(a,i)=>(l(),p("div",eo,[t("div",to,[(l(!0),p(L,null,J(s.value,r=>(l(),q(Za,{key:r.id,example:r,class:"example-item"},null,8,["example"]))),128))])]))}},oo=$(ao,[["__scopeId","data-v-47cc7e40"]]),so={class:"docs-nav-panel"},io={class:"nav-content"},no={__name:"DocsNavPanel",props:{sections:{type:Array,required:!0},selected:{type:String,required:!0}},emits:["update:selected"],setup(e,{emit:s}){const a=s,i=r=>{a("update:selected",r)};return(r,c)=>(l(),p("div",so,[c[0]||(c[0]=t("div",{class:"panel-header"},[t("div",{class:"panel-title"},"documentation")],-1)),t("div",io,[o(St,{density:"compact","bg-color":"transparent",class:"docs-list"},{default:d(()=>[(l(!0),p(L,null,J(e.sections,n=>(l(),p("div",{key:n.id},[o(kt,{class:"section-title"},{default:d(()=>[f(m(n.title),1)]),_:2},1024),(l(!0),p(L,null,J(n.items,u=>(l(),q(xt,{key:u.id,value:u.id,active:e.selected===u.id,onClick:y=>i(u.id),class:be(["nav-item",{active:e.selected===u.id}])},{default:d(()=>[o(At,{class:"item-title"},{default:d(()=>[f(m(u.title),1)]),_:2},1024)]),_:2},1032,["value","active","onClick","class"]))),128))]))),128))]),_:1})])]))}},Be=$(no,[["__scopeId","data-v-f4c4243d"]]),ro={class:"docs-content"},lo={class:"content-header"},co={class:"content-title"},uo={class:"content-body"},mo={key:0,class:"paragraph"},po={key:1,class:"image-container"},go=["src","alt"],ho={key:0,class:"image-caption"},fo={key:2,class:"code-block"},_o={class:"code-language"},vo={class:"code-content"},yo={key:3,class:"content-list"},bo={__name:"DocsContent",props:{doc:{type:Object,required:!0}},setup(e){return(s,a)=>(l(),p("div",ro,[t("div",lo,[t("h1",co,m(e.doc.title),1)]),t("div",uo,[(l(!0),p(L,null,J(e.doc.content,(i,r)=>(l(),p("div",{key:r,class:be(["content-item",i.type])},[i.type==="paragraph"?(l(),p("p",mo,m(i.text),1)):i.type==="image"?(l(),p("div",po,[t("img",{src:i.src,alt:i.alt,class:"content-image"},null,8,go),i.caption?(l(),p("div",ho,m(i.caption),1)):Y("",!0)])):i.type==="code"?(l(),p("div",fo,[t("div",_o,m(i.language),1),t("pre",vo,[t("code",null,m(i.text),1)])])):i.type==="list"?(l(),p("ul",yo,[(l(!0),p(L,null,J(i.items,(c,n)=>(l(),p("li",{key:n,class:"list-item"},m(c),1))),128))])):Y("",!0)],2))),128))])]))}},je=$(bo,[["__scopeId","data-v-355af899"]]),Ge=[{id:"getting-started",title:"Getting Started",items:[{id:"introduction",title:"Introduction",content:[{type:"paragraph",text:"Welcome to the image generation documentation. This guide will help you understand how to use our powerful image generation tools to create stunning visuals for your projects."},{type:"paragraph",text:"Our system uses state-of-the-art diffusion models to generate high-quality images from text prompts. By providing detailed descriptions, you can guide the AI to create exactly what you envision."},{type:"image",src:"/assets/mock/general/anzhelikos_A_breathtaking_landscape_of_cherry_blossom_trees_in__12357cff-490a-4a39-bb83-cfb4bba207d7.png",alt:"Example of AI generated image",caption:"An example of an AI-generated landscape with cherry blossom trees"},{type:"paragraph",text:"The quality and style of the generated images depend on several factors, including the prompt, negative prompt, and various settings that we will explore in this documentation."}]},{id:"installation",title:"Installation",content:[{type:"paragraph",text:"To get started with our image generation tools, you need to install the required dependencies and set up your environment."},{type:"code",language:"bash",text:`npm install @ai-tools/image-generator
# or
yarn add @ai-tools/image-generator`},{type:"paragraph",text:"After installation, you can import the components in your application and start generating images."},{type:"code",language:"javascript",text:`import { ImageGenerator } from '@ai-tools/image-generator';

const generator = new ImageGenerator();
const image = await generator.generate({
  prompt: 'A beautiful landscape with mountains',
  negativePrompt: 'blurry, low quality',
  width: 512,
  height: 512
});`}]},{id:"quick-start",title:"Quick Start Guide",content:[{type:"paragraph",text:"This quick start guide will help you generate your first image in just a few minutes."},{type:"paragraph",text:"First, make sure you have installed the package as described in the Installation section."},{type:"paragraph",text:"Then, follow these simple steps:"},{type:"list",items:["Create a new instance of the ImageGenerator","Prepare your prompt describing what you want to generate","Set basic parameters like dimensions and quality","Call the generate method and wait for the result"]},{type:"code",language:"javascript",text:`// Quick example
const generator = new ImageGenerator();

// Generate a simple image
const result = await generator.generate({
  prompt: "A beautiful sunset over mountains",
  width: 512,
  height: 512
});

// Display or save the image
console.log(result.imageUrl);`},{type:"image",src:"/assets/mock/general/oqme7bw7_52477_A_hiker_on_the_top_of_Mount_Shuksan_in_the_style_88af8520-9038-44a6-b782-e14b78258fe7 (2).png",alt:"Mountain landscape with hiker",caption:"A generated image of a hiker on a mountain - created with a simple prompt"}]}]},{id:"basic-settings",title:"Basic Settings",items:[{id:"prompts",title:"Prompts",content:[{type:"paragraph",text:"Prompts are the most important part of generating images. A well-crafted prompt can guide the AI to create exactly what you want."},{type:"paragraph",text:"Here are some tips for writing effective prompts:"},{type:"list",items:["Be specific and detailed in your descriptions","Include information about style, lighting, and composition","Mention specific artists or art styles for reference","Use adjectives to describe the mood and atmosphere"]},{type:"image",src:"/assets/mock/general/ilightice_A_bright_and_colorful_photo_of_an_influencer_in_a_vib_438201a7-d193-40fa-a820-d121ec13e4bd.png",alt:"Example of prompt-based generation",caption:'Generated using the prompt: "A bright and colorful photo of an influencer in a vibrant setting"'},{type:"paragraph",text:"Remember that the AI interprets your prompt literally, so be clear about what you want to see in the image."}]},{id:"negative-prompts",title:"Negative Prompts",content:[{type:"paragraph",text:"Negative prompts tell the AI what you don't want to see in the generated image. They are a powerful way to avoid common issues and improve the quality of your results."},{type:"paragraph",text:"Common negative prompts include:"},{type:"list",items:["Blurry, low quality, pixelated","Distorted faces, extra limbs, bad anatomy","Watermarks, signatures, text","Oversaturated colors, unrealistic lighting"]},{type:"code",language:"javascript",text:`// Example with negative prompt
const result = await generator.generate({
  prompt: "Portrait of a woman with blue eyes",
  negativePrompt: "blurry, distorted, bad anatomy, extra fingers, low quality",
  width: 512,
  height: 512
});`},{type:"paragraph",text:"Using negative prompts effectively can significantly improve the quality and consistency of your generated images."},{type:"image",src:"/assets/mock/general/stasihund_a_psychedelic_photo_two_women_overlayed_Kate_Beckinsa_45bebcfd-abc8-4276-99d3-9237764c1589.png",alt:"Portrait with negative prompts",caption:"A portrait generated with careful negative prompting to avoid common issues"}]},{id:"dimensions",title:"Dimensions",content:[{type:"paragraph",text:"The dimensions of your generated image affect both the composition and the level of detail. Different models support different maximum dimensions and aspect ratios."},{type:"paragraph",text:"Common dimensions include:"},{type:"list",items:["512×512 - Standard square format","768×768 - Higher resolution square","512×768 - Portrait orientation","768×512 - Landscape orientation","1024×1024 - High resolution (for supported models)"]},{type:"paragraph",text:"When choosing dimensions, consider the following:"},{type:"list",items:["Larger dimensions require more processing time and resources","Some models perform better with specific aspect ratios","The subject matter may influence the ideal dimensions (landscapes often work better in landscape orientation)","Consider the final use case for the image (social media, print, etc.)"]},{type:"image",src:"/assets/mock/general/xiaoyu.1986_A_minimalist_room_with_white_walls_and_wood-framed__3b360f6a-7cd5-4d45-a034-74bb05d5eb41 (1).png",alt:"Wide aspect ratio image",caption:"A minimalist room rendered in landscape format (16:9 aspect ratio)"}]}]},{id:"advanced-settings",title:"Advanced Settings",items:[{id:"scheduler",title:"Scheduler",content:[{type:"paragraph",text:"The scheduler controls how the diffusion process evolves over time. Different schedulers can produce different results even with the same prompt and seed."},{type:"paragraph",text:"Common schedulers include:"},{type:"list",items:["K_EULER - Fast and good for general use","K_EULER_ANCESTRAL - Adds more variation","DPM++ 2M - High quality with good detail","DDIM - Deterministic results with the same seed","DPM++ SDE Karras - Good for detailed images"]},{type:"code",language:"javascript",text:`// Example with scheduler selection
const result = await generator.generate({
  prompt: "A futuristic cityscape",
  scheduler: "DPM_PLUS_PLUS_2M",
  width: 512,
  height: 512
});`},{type:"image",src:"/assets/mock/general/yyuanlit_Future_black_technology_mountain_future_sense_black_go_38a4cd9f-c267-4f17-980a-4b43fc541d43.png",alt:"Futuristic landscape with advanced scheduler",caption:"A futuristic landscape generated using the DPM++ scheduler for enhanced detail"}]},{id:"guidance-scale",title:"Guidance Scale",content:[{type:"paragraph",text:"The guidance scale (also known as CFG scale) controls how closely the generation follows your prompt. Higher values make the image more closely match the prompt, but may reduce overall quality or creativity."},{type:"paragraph",text:"Typical guidance scale values range from 1 to 20:"},{type:"list",items:["1-3: Very creative but may not follow the prompt closely","5-8: Balanced between creativity and prompt adherence (recommended for most cases)","10-15: Strongly follows the prompt but may have artifacts","15-20: Very strict prompt following, may reduce image quality"]},{type:"code",language:"javascript",text:`// Example with guidance scale
const result = await generator.generate({
  prompt: "A magical forest with glowing mushrooms",
  guidanceScale: 7.5,  // Balanced setting
  width: 512,
  height: 512
});`},{type:"image",src:"/assets/mock/general/azucca8888_Close-up_of_eyes_grape_hyacinths_rainbow_reflected_i_30bf2972-f0a6-40a3-9be8-bd96a44ddf73.png",alt:"Image with balanced guidance scale",caption:"An image generated with a balanced guidance scale of 7.5"}]},{id:"inference-steps",title:"Inference Steps",content:[{type:"paragraph",text:"Inference steps determine how many iterations the diffusion process goes through. More steps generally result in higher quality but take longer to generate."},{type:"paragraph",text:"Common step counts include:"},{type:"list",items:["20-25 steps: Fast generation with acceptable quality","30-35 steps: Good balance between speed and quality","40-50 steps: High quality with longer generation time","100+ steps: Maximum quality, but diminishing returns after ~50 steps"]},{type:"code",language:"javascript",text:`// Example with inference steps
const result = await generator.generate({
  prompt: "A detailed portrait of an elderly man",
  steps: 40,  // Higher quality setting
  width: 512,
  height: 512
});`},{type:"image",src:"/assets/mock/general/artmo11_portrait_of_an_old_ancient_greek_man_captain_of_a_ship__38648ac8-4fad-48d9-a98d-76eaed34db83.png",alt:"Portrait generated with high step count",caption:"A detailed portrait generated with 40 inference steps"}]},{id:"seed",title:"Seed",content:[{type:"paragraph",text:"The seed is a number that initializes the random noise used in the diffusion process. Using the same seed with the same settings will produce similar (but not identical) results."},{type:"paragraph",text:"Seed values can be any integer. Special considerations:"},{type:"list",items:["Using -1 or not specifying a seed will generate a random seed","Saving the seed allows you to recreate similar images later","Changing only the seed while keeping other parameters the same is a good way to explore variations","Seeds are model-specific (the same seed will produce different results with different models)"]},{type:"code",language:"javascript",text:`// Example with fixed seed
const result = await generator.generate({
  prompt: "A cyberpunk street scene with neon lights",
  seed: 42,  // Fixed seed for reproducibility
  width: 512,
  height: 512
});`},{type:"image",src:"/assets/mock/general/mr_robotekh_An_experimental_uplifted_album_cover_image_include__a38e2e72-d589-4e95-bfce-15a37de54c7c.png",alt:"Image generated with fixed seed",caption:"A cyberpunk scene generated with a fixed seed value"}]}]},{id:"examples",title:"Examples",items:[{id:"portraits",title:"Portraits",content:[{type:"paragraph",text:"Portraits are one of the most common use cases for AI image generation. They can range from realistic photographs to stylized illustrations."},{type:"paragraph",text:"Tips for generating great portraits:"},{type:"list",items:["Be specific about facial features, expressions, and lighting","Include details about the subject's age, ethnicity, and style","Specify the framing (close-up, medium shot, etc.)","Use strong negative prompts to avoid common issues with faces"]},{type:"image",src:"/assets/mock/general/bosphore._A_frontal_view_of_an_ancient_statue_facing_directly_f_194c5a2c-fc2e-4aac-9132-1895402df34c.png",alt:"AI-generated portrait",caption:"A frontal view of an ancient statue - demonstrating the AI's ability to create detailed facial features"},{type:"code",language:"javascript",text:`// Portrait generation example
const result = await generator.generate({
  prompt: "Portrait of a young woman with freckles, blue eyes, auburn hair, soft natural lighting, photorealistic",
  negativePrompt: "deformed, blurry, bad anatomy, extra limbs, poorly drawn face",
  width: 512,
  height: 768,  // Portrait orientation
  guidanceScale: 7.5
});`}]},{id:"landscapes",title:"Landscapes",content:[{type:"paragraph",text:"Landscapes are one of the most popular subjects for AI image generation. They can range from realistic nature scenes to fantastical environments."},{type:"image",src:"/assets/mock/general/jalaison_A_serene_minimalist_photograph_of_a_lighthouse_on_the__b723de58-954e-40b1-9b58-9d12aaa2cc58.png",alt:"Minimalist lighthouse landscape",caption:"A serene minimalist photograph of a lighthouse on the coast"},{type:"paragraph",text:"When generating landscapes, consider including details about:"},{type:"list",items:["Time of day (sunrise, sunset, night, etc.)","Weather conditions (clear, cloudy, rainy, snowy)","Geographical features (mountains, forests, oceans, deserts)","Lighting and atmosphere (foggy, misty, golden hour)"]},{type:"image",src:"/assets/mock/general/meshadventures_A_dramatic_view_of_the_Empire_State_Building_fro_8e20eb61-7df8-43b5-80bb-7ad75f47f3f6.png",alt:"Urban landscape",caption:"A dramatic view of the Empire State Building - urban landscapes can be just as compelling as natural ones"},{type:"code",language:"javascript",text:`// Landscape generation example
const result = await generator.generate({
  prompt: "Majestic mountains with snow-capped peaks, alpine lake in foreground, sunset with golden light, dramatic clouds",
  width: 768,
  height: 512,  // Landscape orientation
  steps: 40,  // Higher quality for detailed landscapes
  guidanceScale: 8.0
});`}]},{id:"abstract",title:"Abstract Art",content:[{type:"paragraph",text:"AI is particularly good at generating abstract and surreal artwork. These images can be used for backgrounds, album covers, or artistic projects."},{type:"paragraph",text:"Tips for generating abstract art:"},{type:"list",items:["Use descriptive terms for textures, colors, and shapes","Reference specific art movements (cubism, expressionism, etc.)","Experiment with lower guidance scale values for more creative results","Combine contrasting concepts for interesting juxtapositions"]},{type:"image",src:"/assets/mock/general/roquinho9999_fundo_solido_roxo_escuro_--v_6.1_7bdc5f16-259d-4329-a120-e5f27986952e.png",alt:"Abstract purple artwork",caption:"An abstract composition with deep purple tones"},{type:"paragraph",text:"Abstract art often benefits from more experimental settings:"},{type:"code",language:"javascript",text:`// Abstract art generation example
const result = await generator.generate({
  prompt: "Abstract expressionist painting, vibrant colors, dynamic brushstrokes, emotional, chaotic energy, inspired by Kandinsky and Pollock",
  guidanceScale: 5.0,  // Lower for more creativity
  scheduler: "K_EULER_ANCESTRAL",  // More variation
  width: 512,
  height: 512
});`},{type:"image",src:"/assets/mock/general/seatoe22_a_wooden_guitai__A_brown_and_white_digital_illustratio_61687719-1aaf-4364-b8cb-5433352a3f48.png",alt:"Stylized abstract illustration",caption:"A stylized abstract illustration with organic forms and textures"}]}]}],wo=e=>{for(const s of Ge)for(const a of s.items)if(a.id===e)return{title:a.title,content:a.content};return{title:"Page Not Found",content:[{type:"paragraph",text:"The requested documentation page could not be found."}]}},ko={class:"docs-section"},xo={class:"docs-container"},Ao={__name:"DocsSection",setup(e){const s=w(Ge),a=w("introduction"),i=v(()=>wo(a.value));return(r,c)=>(l(),p("div",ko,[t("div",xo,[o(Be,{class:"nav-panel",sections:s.value,selected:a.value,"onUpdate:selected":c[0]||(c[0]=n=>a.value=n)},null,8,["sections","selected"]),o(je,{class:"content-area",doc:i.value},null,8,["doc"])])]))}},So=$(Ao,[["__scopeId","data-v-d14b6642"]]),Io={class:"forums-header"},Po={class:"forum-title-area"},Co={class:"forum-title"},Ro={class:"article-count"},Do={class:"forum-actions"},$o={class:"search-container"},Vo={__name:"ForumHeader",props:{title:{type:String,required:!0},articleCount:{type:Number,required:!0}},setup(e){const s=w("");return(a,i)=>(l(),p("div",Io,[t("div",Po,[t("h1",Co,[f(m(e.title)+" ",1),t("span",Ro,"- "+m(e.articleCount)+" articles",1)])]),t("div",Do,[o(G,{color:"primary",class:"create-topic-btn","prepend-icon":"mdi-plus"},{default:d(()=>i[1]||(i[1]=[f(" create topic ")])),_:1}),t("div",$o,[o(ie,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=r=>s.value=r),placeholder:"search forums",variant:"outlined",density:"compact","hide-details":"","bg-color":"rgba(30, 30, 30, 0.6)",class:"search-input","prepend-inner-icon":"mdi-magnify"},null,8,["modelValue"])])])]))}},To=$(Vo,[["__scopeId","data-v-c0625b11"]]),Uo={class:"topic-avatar"},Fo={class:"text-h5 font-weight-bold"},qo={class:"topic-content"},Mo={class:"topic-author-info"},Eo={class:"author-name"},Lo={class:"author-role"},zo={class:"topic-title"},Bo={class:"topic-preview"},jo={class:"topic-metrics"},Go={class:"metric likes"},No={class:"metric views"},Wo={class:"metric comments"},Ho={class:"metric time"},Ko={__name:"ForumTopicItem",props:{topic:{type:Object,required:!0}},emits:["click"],setup(e){return(s,a)=>(l(),p("div",{class:be(["forum-topic-item",{pinned:e.topic.pinned}]),onClick:a[0]||(a[0]=i=>s.$emit("click",e.topic.id))},[t("div",Uo,[e.topic.avatarUrl?(l(),q(de,{key:1,size:"48"},{default:d(()=>[o(xe,{src:e.topic.avatarUrl,alt:"User avatar"},null,8,["src"])]),_:1})):(l(),q(de,{key:0,size:"48",color:e.topic.avatarColor},{default:d(()=>[t("span",Fo,m(e.topic.author.charAt(0)),1)]),_:1},8,["color"]))]),t("div",qo,[t("div",Mo,[t("span",Eo,m(e.topic.author),1),t("span",Lo,m(e.topic.authorRole),1)]),t("h3",zo,[e.topic.pinned?(l(),q(S,{key:0,size:"small",color:"primary",class:"pin-icon"},{default:d(()=>a[1]||(a[1]=[f("mdi-bookmark")])),_:1})):Y("",!0),f(" "+m(e.topic.title),1)]),t("p",Bo,m(e.topic.preview),1),t("div",jo,[t("div",Go,[o(S,{size:"small"},{default:d(()=>a[2]||(a[2]=[f("mdi-thumb-up-outline")])),_:1}),t("span",null,m(e.topic.likes),1)]),t("div",No,[o(S,{size:"small"},{default:d(()=>a[3]||(a[3]=[f("mdi-eye-outline")])),_:1}),t("span",null,m(e.topic.views),1)]),t("div",Wo,[o(S,{size:"small"},{default:d(()=>a[4]||(a[4]=[f("mdi-comment-outline")])),_:1}),t("span",null,m(e.topic.comments),1)]),t("div",Ho,[e.topic.hasAdminResponse?(l(),q(S,{key:0,size:"small"},{default:d(()=>a[5]||(a[5]=[f("mdi-update")])),_:1})):Y("",!0),e.topic.hasAdminResponse?(l(),q(de,{key:1,size:"18",color:"primary",class:"admin-badge"},{default:d(()=>a[6]||(a[6]=[t("span",{class:"text-caption font-weight-bold"},"A",-1)])),_:1})):Y("",!0),t("span",null,m(e.topic.timeAgo),1)])])])],2))}},Oo=$(Ko,[["__scopeId","data-v-d532f75c"]]),Yo={class:"forum-post-view"},Jo={class:"breadcrumb"},Xo={class:"post-title"},Qo={class:"post-container"},Zo={class:"post-main"},es={key:0,class:"post-label"},ts={class:"post-title"},as={class:"post-meta"},os={class:"time"},ss={class:"replies"},is={class:"views"},ns={class:"post-content"},rs={class:"post-author"},ls={class:"author-avatar"},ds={class:"text-h5 font-weight-bold"},cs={class:"author-info"},us={class:"author-name"},ms={class:"author-role"},ps={class:"post-text"},gs={class:"post-actions"},hs={key:0,class:"replies-section"},fs={class:"replies-header"},_s={class:"reply-author"},vs={class:"author-avatar"},ys={class:"text-h5 font-weight-bold"},bs={class:"author-info"},ws={class:"author-name"},ks={class:"author-role"},xs={class:"reply-text"},As={class:"reply-actions"},Ss={class:"reply-meta"},Is={class:"time"},Ps={__name:"ForumPostView",props:{post:{type:Object,required:!0},forumName:{type:String,default:"sdxl turbo"}},emits:["back"],setup(e){return(s,a)=>(l(),p("div",Yo,[t("div",Jo,[t("span",{class:"forum-name",onClick:a[0]||(a[0]=i=>s.$emit("back"))},m(e.forumName),1),o(S,{size:"small",class:"breadcrumb-separator"},{default:d(()=>a[1]||(a[1]=[f("mdi-chevron-right")])),_:1}),t("span",Xo,m(e.post.title),1)]),t("div",Qo,[t("div",Zo,[e.post.type?(l(),p("div",es,m(e.post.type),1)):Y("",!0),t("h1",ts,m(e.post.title),1),t("div",as,[t("span",os,m(e.post.timeAgo),1),a[2]||(a[2]=t("span",{class:"separator"},"•",-1)),t("span",ss,m(e.post.replies.length)+" replies",1),a[3]||(a[3]=t("span",{class:"separator"},"•",-1)),t("span",is,m(e.post.views)+" views",1)]),t("div",ns,[t("div",rs,[t("div",ls,[e.post.avatarUrl?(l(),q(de,{key:1,size:"48"},{default:d(()=>[o(xe,{src:e.post.avatarUrl,alt:"User avatar"},null,8,["src"])]),_:1})):(l(),q(de,{key:0,size:"48",color:e.post.avatarColor},{default:d(()=>[t("span",ds,m(e.post.author.charAt(0)),1)]),_:1},8,["color"]))]),t("div",cs,[t("div",us,m(e.post.author),1),t("div",ms,m(e.post.authorRole),1)])]),t("div",ps,[(l(!0),p(L,null,J(e.post.content,(i,r)=>(l(),p("p",{key:r,class:"paragraph"},m(i),1))),128))]),t("div",gs,[o(G,{variant:"text",density:"comfortable",class:"like-btn"},{default:d(()=>[o(S,{start:""},{default:d(()=>a[4]||(a[4]=[f("mdi-thumb-up-outline")])),_:1}),f(" "+m(e.post.likes),1)]),_:1})])])]),e.post.replies&&e.post.replies.length>0?(l(),p("div",hs,[t("div",fs,m(e.post.replies.length)+" replies ",1),(l(!0),p(L,null,J(e.post.replies,i=>(l(),p("div",{class:"reply",key:i.id},[t("div",_s,[t("div",vs,[i.avatarUrl?(l(),q(de,{key:1,size:"48"},{default:d(()=>[o(xe,{src:i.avatarUrl,alt:"User avatar"},null,8,["src"])]),_:2},1024)):(l(),q(de,{key:0,size:"48",color:i.avatarColor},{default:d(()=>[t("span",ys,m(i.author.charAt(0)),1)]),_:2},1032,["color"]))]),t("div",bs,[t("div",ws,m(i.author),1),t("div",ks,m(i.authorRole),1)])]),t("div",xs,[(l(!0),p(L,null,J(i.content,(r,c)=>(l(),p("p",{key:c,class:"paragraph"},m(r),1))),128))]),t("div",As,[o(G,{variant:"text",density:"comfortable",class:"like-btn"},{default:d(()=>[o(S,{start:""},{default:d(()=>a[5]||(a[5]=[f("mdi-thumb-up-outline")])),_:1}),f(" "+m(i.likes),1)]),_:2},1024)]),t("div",Ss,[i.isAuthor?(l(),q(Rt,{key:0,color:"primary",size:"small",class:"author-badge"},{default:d(()=>a[6]||(a[6]=[f(" Author ")])),_:1})):Y("",!0),t("span",Is,m(i.timeAgo),1)])]))),128))])):Y("",!0)])]))}},Cs=$(Ps,[["__scopeId","data-v-57a6ae2b"]]),Rs=[{id:1,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",title:"READ ME: Updates to SDXL Turbo",preview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit am...",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit amet.","Integer porttitor luctus commodo. Etiam pulvinar mattis lacus, eu rutrum arcu. Vivamus lacinia, dolor consequat blandit posuere, ante odio maximus erat, a ullamcorper velit felis euismod eros. Mauris bibendum egestas enim id sollicitudin."],likes:10,views:90,comments:7,timeAgo:"2 weeks ago",hasAdminResponse:!1,pinned:!0,replies:[{id:101,author:"Jared.R",authorRole:"Creative Director",avatarUrl:"/assets/mock/general/yyuanlit_Future_black_technology_mountain_future_sense_black_go_38a4cd9f-c267-4f17-980a-4b43fc541d43.png",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices.","Integer porttitor luctus commodo. Etiam pulvinar mattis lacus, eu rutrum arcu. Vivamus lacinia, dolor consequat blandit posuere, ante odio maximus erat, a ullamcorper velit felis euismod eros. Mauris bibendum egestas enim id sollicitudin."],likes:3,timeAgo:"1 week ago",isAuthor:!1},{id:102,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices."],likes:5,timeAgo:"6 days ago",isAuthor:!0},{id:103,author:"Sarah.L",authorRole:"Senior Designer",avatarUrl:"/assets/mock/general/stasihund_a_psychedelic_photo_two_women_overlayed_Kate_Beckinsa_45bebcfd-abc8-4276-99d3-9237764c1589.png",content:["Thanks for the update! This is really helpful for our upcoming project. I've been testing the new features and they're working great so far.","One question though - is there any way to adjust the inference steps for better quality without sacrificing too much speed?"],likes:2,timeAgo:"5 days ago",isAuthor:!1},{id:104,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["Great question Sarah! Yes, you can find a good balance by setting the inference steps between 20-25. This gives you decent quality while maintaining the speed advantage of SDXL Turbo.",`We've also added a new preset in the advanced settings panel called "Balanced" that should give you a good starting point.`],likes:4,timeAgo:"4 days ago",isAuthor:!0},{id:105,author:"Thomas.K",authorRole:"Production Manager",avatarColor:"#4CAF50",content:["The update is working great for our team. We've seen about a 40% reduction in generation time which has been a huge productivity boost.","Looking forward to the next update!"],likes:3,timeAgo:"3 days ago",isAuthor:!1}]},{id:2,author:"Walter.W",authorRole:"Head Producer, Integrated Production",avatarColor:"#FF6B6B",title:"Trouble with Prompts",preview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit am...",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit amet.","Integer porttitor luctus commodo. Etiam pulvinar mattis lacus, eu rutrum arcu. Vivamus lacinia, dolor consequat blandit posuere, ante odio maximus erat, a ullamcorper velit felis euismod eros. Mauris bibendum egestas enim id sollicitudin."],likes:2,views:40,comments:2,timeAgo:"1 day ago",hasAdminResponse:!1,replies:[{id:201,author:"Emily.R",authorRole:"AI Specialist",avatarUrl:"/assets/mock/general/stasihund_a_psychedelic_photo_two_women_overlayed_Kate_Beckinsa_45bebcfd-abc8-4276-99d3-9237764c1589.png",content:["I've had similar issues with prompts recently. Have you tried using more specific descriptors? Sometimes being too vague can confuse the model.","Also, make sure you're using a good negative prompt to avoid unwanted elements in your generations."],likes:1,timeAgo:"1 day ago",isAuthor:!1},{id:202,author:"Walter.W",authorRole:"Head Producer, Integrated Production",avatarColor:"#FF6B6B",content:["Thanks for the suggestion Emily. I'll try being more specific with my prompts and see if that helps.","Do you have any examples of good negative prompts that work well with SDXL?"],likes:0,timeAgo:"23 hours ago",isAuthor:!0},{id:203,author:"Emily.R",authorRole:"AI Specialist",avatarUrl:"/assets/mock/general/stasihund_a_psychedelic_photo_two_women_overlayed_Kate_Beckinsa_45bebcfd-abc8-4276-99d3-9237764c1589.png",content:[`Sure! Here's a negative prompt template I use frequently: "blurry, bad anatomy, bad hands, cropped, worst quality, low quality, normal quality, text, watermark, logo, banner, extra digits, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, ugly, blurry, bad anatomy"`,"You can customize it based on what specific issues you're seeing in your generations."],likes:3,timeAgo:"20 hours ago",isAuthor:!1}]},{id:3,author:"John.A",authorRole:"Senior Creative",avatarUrl:"/assets/mock/general/artmo11_portrait_of_an_old_ancient_greek_man_captain_of_a_ship__38648ac8-4fad-48d9-a98d-76eaed34db83.png",title:"Generation limit issue",preview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit am...",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit amet.","Integer porttitor luctus commodo. Etiam pulvinar mattis lacus, eu rutrum arcu. Vivamus lacinia, dolor consequat blandit posuere, ante odio maximus erat, a ullamcorper velit felis euismod eros. Mauris bibendum egestas enim id sollicitudin."],likes:2,views:40,comments:2,timeAgo:"1 day ago",hasAdminResponse:!0,replies:[{id:301,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["Hi John, thanks for bringing this up. We're aware of the generation limit issue and our team is working on a fix.","In the meantime, you can try clearing your generation history to free up some quota. We'll be deploying an update next week that should resolve this permanently."],likes:1,timeAgo:"1 day ago",isAuthor:!1},{id:302,author:"John.A",authorRole:"Senior Creative",avatarUrl:"/assets/mock/general/artmo11_portrait_of_an_old_ancient_greek_man_captain_of_a_ship__38648ac8-4fad-48d9-a98d-76eaed34db83.png",content:["Thanks for the quick response! I'll try clearing my history and see if that helps for now."],likes:0,timeAgo:"23 hours ago",isAuthor:!0},{id:303,author:"Lisa.T",authorRole:"Project Manager",avatarColor:"#9C27B0",content:["I'm having the same issue. Clearing the history worked temporarily but I hit the limit again after about 20 generations.","Looking forward to the permanent fix!"],likes:1,timeAgo:"18 hours ago",isAuthor:!1},{id:304,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["Thanks for the additional info Lisa. I've escalated this issue to our engineering team and they're looking into why the limit is being reached so quickly.","We'll keep you updated on the progress."],likes:2,timeAgo:"12 hours ago",isAuthor:!1}]},{id:4,author:"Maria.S",authorRole:"Account Director",avatarUrl:"/assets/mock/general/stasihund_a_psychedelic_photo_two_women_overlayed_Kate_Beckinsa_45bebcfd-abc8-4276-99d3-9237764c1589.png",title:"Need prompt reference",preview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit am...",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit amet.","Integer porttitor luctus commodo. Etiam pulvinar mattis lacus, eu rutrum arcu. Vivamus lacinia, dolor consequat blandit posuere, ante odio maximus erat, a ullamcorper velit felis euismod eros. Mauris bibendum egestas enim id sollicitudin."],likes:2,views:40,comments:2,timeAgo:"1 day ago",hasAdminResponse:!0,replies:[{id:401,author:"David.L",authorRole:"Senior Prompt Engineer",avatarColor:"#2196F3",content:["Hi Maria, I've been collecting effective prompts for different use cases. Here are a few that might help:",'1. For photorealistic portraits: "Professional headshot of [description], high quality, studio lighting, detailed facial features, DSLR, 85mm lens, sharp focus"','2. For landscapes: "Breathtaking landscape of [location], golden hour, cinematic, panoramic view, high detail, photorealistic, 8k"',"Let me know if you need more specific examples!"],likes:5,timeAgo:"1 day ago",isAuthor:!1},{id:402,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["We're also working on a prompt library feature that will be available in the next update. It will include categorized examples and templates you can use as starting points.","In the meantime, check out the Examples tab for some inspiration!"],likes:3,timeAgo:"22 hours ago",isAuthor:!1},{id:403,author:"Maria.S",authorRole:"Account Director",avatarUrl:"/assets/mock/general/stasihund_a_psychedelic_photo_two_women_overlayed_Kate_Beckinsa_45bebcfd-abc8-4276-99d3-9237764c1589.png",content:["Thank you both! This is exactly what I needed. The examples are really helpful, and I'm looking forward to the prompt library feature."],likes:1,timeAgo:"20 hours ago",isAuthor:!0},{id:404,author:"Robert.J",authorRole:"Creative Lead",avatarColor:"#FF9800",content:[`I've found that adding style references can really help too. For example: "in the style of [artist/photographer name]" or "inspired by [art movement]".`,"Also, being specific about lighting, composition, and mood makes a big difference in the quality of results."],likes:2,timeAgo:"15 hours ago",isAuthor:!1}]},{id:5,author:"John Ackerson",authorRole:"Senior Creative",avatarUrl:"/assets/mock/general/artmo11_portrait_of_an_old_ancient_greek_man_captain_of_a_ship__38648ac8-4fad-48d9-a98d-76eaed34db83.png",title:"How to get multiple outputs from sdxl?",preview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit am...",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit amet.","Integer porttitor luctus commodo. Etiam pulvinar mattis lacus, eu rutrum arcu. Vivamus lacinia, dolor consequat blandit posuere, ante odio maximus erat, a ullamcorper velit felis euismod eros. Mauris bibendum egestas enim id sollicitudin."],likes:5,views:62,comments:3,timeAgo:"3 days ago",hasAdminResponse:!1,type:"question",replies:[{id:501,author:"Alex.P",authorRole:"Technical Director",avatarColor:"#E91E63",content:['You can set the "num_outputs" parameter to generate multiple images at once. The maximum is 4 per generation.','Look for the "Number of outputs" field in the settings panel on the left side of the generation interface.'],likes:3,timeAgo:"3 days ago",isAuthor:!1},{id:502,author:"John Ackerson",authorRole:"Senior Creative",avatarUrl:"/assets/mock/general/artmo11_portrait_of_an_old_ancient_greek_man_captain_of_a_ship__38648ac8-4fad-48d9-a98d-76eaed34db83.png",content:["Thanks Alex! I found the setting. Is there a way to use different seeds for each output to get more variety?"],likes:1,timeAgo:"2 days ago",isAuthor:!0},{id:503,author:"Alex.P",authorRole:"Technical Director",avatarColor:"#E91E63",content:[`Yes, there's a checkbox labeled "Use different seeds" in the advanced settings panel. When checked, each output will use a different random seed.`,"If you want even more control, you can also specify the starting seed and it will increment by 1 for each output."],likes:2,timeAgo:"2 days ago",isAuthor:!1},{id:504,author:"Sarah.L",authorRole:"Senior Designer",avatarUrl:"/assets/mock/general/stasihund_a_psychedelic_photo_two_women_overlayed_Kate_Beckinsa_45bebcfd-abc8-4276-99d3-9237764c1589.png",content:["Another tip: if you want to generate a lot of variations quickly, you can reduce the inference steps to around 20 and increase the batch size.","This gives you more options to choose from in less time, and then you can regenerate your favorites with higher quality settings."],likes:4,timeAgo:"1 day ago",isAuthor:!1}]},{id:6,author:"Walter.W",authorRole:"Head Producer, Integrated Production",avatarColor:"#FF6B6B",title:"How to get multiple outputs from sdxl?",preview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit am...",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices. Fusce consectetur mi sit amet.","Integer porttitor luctus commodo. Etiam pulvinar mattis lacus, eu rutrum arcu. Vivamus lacinia, dolor consequat blandit posuere, ante odio maximus erat, a ullamcorper velit felis euismod eros. Mauris bibendum egestas enim id sollicitudin."],likes:2,views:20,comments:3,timeAgo:"2 hours ago",hasAdminResponse:!1,type:"question",replies:[{id:601,author:"Jared.R",authorRole:"Creative Director",avatarUrl:"/assets/mock/general/yyuanlit_Future_black_technology_mountain_future_sense_black_go_38a4cd9f-c267-4f17-980a-4b43fc541d43.png",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices.","Integer porttitor luctus commodo. Etiam pulvinar mattis lacus, eu rutrum arcu. Vivamus lacinia, dolor consequat blandit posuere, ante odio maximus erat, a ullamcorper velit felis euismod eros. Mauris bibendum egestas enim id sollicitudin."],likes:2,timeAgo:"2 hours ago",isAuthor:!1},{id:602,author:"Walter.W",authorRole:"Head Producer, Integrated Production",avatarColor:"#FF6B6B",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat bibendum, dignissim tortor in, imperdiet elit. Mauris cursus eros est. Duis mattis eros ac posuere ultrices."],likes:0,timeAgo:"5 seconds ago",isAuthor:!0},{id:603,author:"Michael.B",authorRole:"UI/UX Designer",avatarColor:"#00BCD4",content:["I just wanted to add that you can also save your favorite outputs to your personal collection by clicking the bookmark icon.","This makes it easy to reference them later or share them with your team."],likes:1,timeAgo:"1 hour ago",isAuthor:!1},{id:604,author:"Emma.D",authorRole:"Content Strategist",avatarColor:"#8BC34A",content:["Has anyone tried using the batch processing feature for this? I've found it really useful for generating multiple variations of the same concept.","You can access it from the advanced menu by clicking the three dots in the top right corner of the generation panel."],likes:0,timeAgo:"45 minutes ago",isAuthor:!1},{id:605,author:"Jared.R",authorRole:"Creative Director",avatarUrl:"/assets/mock/general/yyuanlit_Future_black_technology_mountain_future_sense_black_go_38a4cd9f-c267-4f17-980a-4b43fc541d43.png",content:["Good point Emma. The batch processing is especially useful when you need to generate assets for multiple use cases at once.","Walter, if you need any help setting this up for your project, feel free to reach out directly."],likes:1,timeAgo:"30 minutes ago",isAuthor:!1}]}],Ds={class:"forums-section"},$s={key:0,class:"forums-container"},Vs={class:"forum-topics-list"},Ts={__name:"ForumsSection",setup(e){const s=w(Rs),a=w(null),i=v(()=>a.value?s.value.find(n=>n.id===a.value):null),r=n=>{a.value=n},c=()=>{a.value=null};return(n,u)=>(l(),p("div",Ds,[o(Pe,{mode:"out-in"},{default:d(()=>[a.value?(l(),q(Cs,{key:1,post:i.value,onBack:c},null,8,["post"])):(l(),p("div",$s,[o(To,{title:"sdxl turbo",articleCount:197}),t("div",Vs,[(l(!0),p(L,null,J(s.value,y=>(l(),q(Oo,{key:y.id,topic:y,onClick:r},null,8,["topic"]))),128))])]))]),_:1})]))}},Us=$(Ts,[["__scopeId","data-v-eadf77d4"]]),Fs={class:"history-image-mosaic"},qs={class:"mosaic-grid"},Ms={class:"image-container"},Es=["src","alt"],Ls={class:"image-overlay"},zs={class:"overlay-content"},Bs={class:"generation-prompt"},js={class:"generation-details"},Gs={class:"detail-item"},Ns={class:"detail-value"},Ws={class:"detail-item"},Hs={class:"detail-value"},Ks={class:"detail-item"},Os={class:"detail-value"},Ys={class:"overlay-actions"},Js={__name:"HistoryImageMosaic",props:{generations:{type:Array,required:!0}},setup(e){return(s,a)=>(l(),p("div",Fs,[t("div",qs,[(l(!0),p(L,null,J(e.generations,i=>(l(),p("div",{key:i.id,class:be(["mosaic-item",{wide:i.aspectRatio>1.2,tall:i.aspectRatio<.8}])},[t("div",Ms,[t("img",{src:i.imageUrl,alt:i.prompt,class:"generation-image"},null,8,Es),t("div",Ls,[t("div",zs,[t("div",Bs,m(i.prompt),1),t("div",js,[t("div",Gs,[a[0]||(a[0]=t("span",{class:"detail-label"},"Model:",-1)),t("span",Ns,m(i.model),1)]),t("div",Ws,[a[1]||(a[1]=t("span",{class:"detail-label"},"Created:",-1)),t("span",Hs,m(i.timestamp),1)]),t("div",Ks,[a[2]||(a[2]=t("span",{class:"detail-label"},"Size:",-1)),t("span",Os,m(i.width)+"x"+m(i.height),1)])])]),t("div",Ys,[o(G,{icon:"",variant:"text",size:"small",class:"action-btn"},{default:d(()=>[o(S,null,{default:d(()=>a[3]||(a[3]=[f("mdi-download-outline")])),_:1})]),_:1}),o(G,{icon:"",variant:"text",size:"small",class:"action-btn"},{default:d(()=>[o(S,null,{default:d(()=>a[4]||(a[4]=[f("mdi-share-variant-outline")])),_:1})]),_:1}),o(G,{icon:"",variant:"text",size:"small",class:"action-btn"},{default:d(()=>[o(S,null,{default:d(()=>a[5]||(a[5]=[f("mdi-delete-outline")])),_:1})]),_:1})])])])],2))),128))])]))}},Xs=$(Js,[["__scopeId","data-v-752cbf38"]]),Qs=[{id:1,model:"sdxl-turbo",prompt:"A bright and colorful photo of an influencer in a vibrant setting",negativePrompt:"blurry, low quality, distorted",width:1024,height:1024,aspectRatio:1,timestamp:"2 hours ago",imageUrl:"/assets/mock/general/ilightice_A_bright_and_colorful_photo_of_an_influencer_in_a_vib_438201a7-d193-40fa-a820-d121ec13e4bd.png"},{id:2,model:"sdxl-turbo",prompt:"A serene minimalist photograph of a lighthouse on the coast at sunset",negativePrompt:"oversaturated, cartoon, anime",width:1024,height:768,aspectRatio:1.33,timestamp:"3 hours ago",imageUrl:"/assets/mock/general/jalaison_A_serene_minimalist_photograph_of_a_lighthouse_on_the__b723de58-954e-40b1-9b58-9d12aaa2cc58.png"},{id:3,model:"sdxl-turbo",prompt:"Virgo astrology full moon",negativePrompt:"blurry, low quality",width:1024,height:1024,aspectRatio:1,timestamp:"5 hours ago",imageUrl:"/assets/mock/general/sparta.cass_Virgo_astrology_full_moon_--ar_45_--stylize_250_--v_dc3f4528-f7ed-4310-9c87-f6d204d2b653.png"},{id:4,model:"sdxl-turbo",prompt:"Cinematic portrait photo of a male model in a stylish outfit",negativePrompt:"unrealistic, cartoon, low quality",width:1024,height:1024,aspectRatio:1,timestamp:"6 hours ago",imageUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png"},{id:5,model:"sdxl-turbo",prompt:"Future black technology mountain with futuristic elements",negativePrompt:"color, realistic, photographic",width:1024,height:768,aspectRatio:1.33,timestamp:"8 hours ago",imageUrl:"/assets/mock/general/yyuanlit_Future_black_technology_mountain_future_sense_black_go_38a4cd9f-c267-4f17-980a-4b43fc541d43.png"},{id:6,model:"sdxl-turbo",prompt:"A dramatic view of the Empire State Building from below",negativePrompt:"people, faces, text, logos",width:768,height:1024,aspectRatio:.75,timestamp:"10 hours ago",imageUrl:"/assets/mock/general/meshadventures_A_dramatic_view_of_the_Empire_State_Building_fro_8e20eb61-7df8-43b5-80bb-7ad75f47f3f6.png"},{id:7,model:"sdxl-turbo",prompt:"A breathtaking landscape of cherry blossom trees in bloom",negativePrompt:"realistic, photographic, dark, moody",width:1024,height:1024,aspectRatio:1,timestamp:"12 hours ago",imageUrl:"/assets/mock/general/anzhelikos_A_breathtaking_landscape_of_cherry_blossom_trees_in__12357cff-490a-4a39-bb83-cfb4bba207d7.png"},{id:8,model:"sdxl-turbo",prompt:"A wooden guitar, brown and white digital illustration",negativePrompt:"cartoon, illustration, blurry",width:1024,height:1024,aspectRatio:1,timestamp:"1 day ago",imageUrl:"/assets/mock/general/seatoe22_a_wooden_guitai__A_brown_and_white_digital_illustratio_61687719-1aaf-4364-b8cb-5433352a3f48.png"},{id:9,model:"sdxl-turbo",prompt:"Characters each with a unique personality and style",negativePrompt:"busy, cluttered, detailed background",width:768,height:1024,aspectRatio:.75,timestamp:"1 day ago",imageUrl:"/assets/mock/general/all.in.a.days.artwork_create_characters_each_with_a_unique_pers_f5ff7e22-825c-4f1e-92c5-b7e11deb3091.png"},{id:10,model:"sdxl-turbo",prompt:"A luxurious white bottle of shampoo with gold accents",negativePrompt:"dark, moody, realistic",width:1024,height:1024,aspectRatio:1,timestamp:"2 days ago",imageUrl:"/assets/mock/general/jeremiah_burns6856_A_luxurious_white_bottle_of_shampoo_with_gol_6d1e3565-df30-4cc0-b943-69c096b8c1d5.png"},{id:11,model:"sdxl-turbo",prompt:"A French bulldog as a chef in a stir-fry scene",negativePrompt:"people, land, boats, text",width:1024,height:1536,aspectRatio:.67,timestamp:"2 days ago",imageUrl:"/assets/mock/general/jacqueddh_prompt_A_french_bulldog_as_a_chef_in_a_stir-fry_scene_066ce19b-36ec-460c-b8f3-2c70085918da.png"},{id:12,model:"sdxl-turbo",prompt:"Rottweiler dog wearing pink sunglasses blowing a bubble",negativePrompt:"realistic, photographic, plain background",width:1024,height:1024,aspectRatio:1,timestamp:"3 days ago",imageUrl:"/assets/mock/general/hexor960_Rottweiler_Dog_wearing_pink_sunglasses_blowing_a_bubbl_9e6ddc04-7477-43f0-aaba-b0916a2f3fda.png"},{id:13,model:"sdxl-turbo",prompt:"A hiker on the top of Mount Shuksan in artistic style",negativePrompt:"bright, daylight, cheerful, colorful",width:1024,height:768,aspectRatio:1.33,timestamp:"3 days ago",imageUrl:"/assets/mock/general/oqme7bw7_52477_A_hiker_on_the_top_of_Mount_Shuksan_in_the_style_88af8520-9038-44a6-b782-e14b78258fe7 (2).png"},{id:14,model:"sdxl-turbo",prompt:"Close-up of classic black Ray-Ban Wayfarer sunglasses",negativePrompt:"organic, natural, soft, people",width:1024,height:1024,aspectRatio:1,timestamp:"4 days ago",imageUrl:"/assets/mock/general/katarinahorosha_Close-up_of_classic_black_Ray-Ban_Wayfarer_sung_81fca7f2-e4ad-4a97-b598-965979ed5fc5.png"},{id:15,model:"sdxl-turbo",prompt:"A minimalist room with white walls and wood-framed furniture",negativePrompt:"cluttered, busy, colorful",width:1024,height:768,aspectRatio:1.33,timestamp:"4 days ago",imageUrl:"/assets/mock/general/xiaoyu.1986_A_minimalist_room_with_white_walls_and_wood-framed__3b360f6a-7cd5-4d45-a034-74bb05d5eb41 (1).png"},{id:16,model:"sdxl-turbo",prompt:"An experimental uplifted album cover image",negativePrompt:"traditional, conventional, simple",width:1024,height:1024,aspectRatio:1,timestamp:"5 days ago",imageUrl:"/assets/mock/general/mr_robotekh_An_experimental_uplifted_album_cover_image_include__a38e2e72-d589-4e95-bfce-15a37de54c7c.png"},{id:17,model:"sdxl-turbo",prompt:"A psychedelic photo of two women overlayed",negativePrompt:"realistic, natural, simple",width:768,height:1024,aspectRatio:.75,timestamp:"5 days ago",imageUrl:"/assets/mock/general/stasihund_a_psychedelic_photo_two_women_overlayed_Kate_Beckinsa_45bebcfd-abc8-4276-99d3-9237764c1589.png"},{id:18,model:"sdxl-turbo",prompt:"A candid high-angle shot of a very fat red cat",negativePrompt:"skinny, thin, dog, human",width:1024,height:1024,aspectRatio:1,timestamp:"6 days ago",imageUrl:"/assets/mock/general/stampdeflector_A_candid_high-angle_shot_in_which_a_very_fat_red_8c49d21c-f1a7-4c9d-99dc-e4e0cc048df4.png"},{id:19,model:"sdxl-turbo",prompt:"A frontal view of an ancient statue facing directly forward",negativePrompt:"modern, colorful, busy background",width:768,height:1024,aspectRatio:.75,timestamp:"6 days ago",imageUrl:"/assets/mock/general/bosphore._A_frontal_view_of_an_ancient_statue_facing_directly_f_194c5a2c-fc2e-4aac-9132-1895402df34c.png"},{id:20,model:"sdxl-turbo",prompt:"Underwater cat photography in blue and pure water",negativePrompt:"dry, land, air bubbles",width:1024,height:1024,aspectRatio:1,timestamp:"1 week ago",imageUrl:"/assets/mock/general/kzobobyfc02_Underwater_cat_photography_blue_and_pure_water_blis_aa1e8ee0-5b76-4e43-bd41-624323ae347b.png"},{id:21,model:"sdxl-turbo",prompt:"Portrait of an old ancient Greek man captain of a ship",negativePrompt:"young, modern, indoor setting",width:1024,height:1024,aspectRatio:1,timestamp:"1 week ago",imageUrl:"/assets/mock/general/artmo11_portrait_of_an_old_ancient_greek_man_captain_of_a_ship__38648ac8-4fad-48d9-a98d-76eaed34db83.png"},{id:22,model:"sdxl-turbo",prompt:"Product photography of an amber glass bottle",negativePrompt:"people, cluttered background, text",width:768,height:1024,aspectRatio:.75,timestamp:"1 week ago",imageUrl:"/assets/mock/general/yapanda._Product_photography_of_an_amber_glass_bottle_with_the__13737e30-947c-4075-8a57-3e50ea0a0602.png"},{id:23,model:"sdxl-turbo",prompt:"A studio photo of a hand holding a coffee cup, yellow minimalist",negativePrompt:"busy, cluttered, dark, moody",width:1024,height:1024,aspectRatio:1,timestamp:"1 week ago",imageUrl:"/assets/mock/general/anadnq_a_studio_photo_a_hand_holding_a_coffee_cup_yellow_minima_60f3b515-6b9a-4c2a-9f97-84db6b746ff8.png"},{id:24,model:"sdxl-turbo",prompt:"Low camera angle of a group of 5 scumrun cars",negativePrompt:"high angle, single car, people",width:1024,height:768,aspectRatio:1.33,timestamp:"2 weeks ago",imageUrl:"/assets/mock/general/chrish2554_low_camera_angle_a_group_of_5_scumrun_cars_participa_e35acb88-c9c3-4e47-88cc-975e900933a9.png"},{id:25,model:"sdxl-turbo",prompt:"Solid dark purple background",negativePrompt:"pattern, texture, objects, people",width:1024,height:1024,aspectRatio:1,timestamp:"2 weeks ago",imageUrl:"/assets/mock/general/roquinho9999_fundo_solido_roxo_escuro_--v_6.1_7bdc5f16-259d-4329-a120-e5f27986952e.png"},{id:26,model:"sdxl-turbo",prompt:"Hamster Travel in widescreen format",negativePrompt:"cats, dogs, people, dark, moody",width:1920,height:1080,aspectRatio:1.78,timestamp:"2 weeks ago",imageUrl:"/assets/mock/general/junting6427_Hamster_Travel_--ar_169_--v_6.1_862ad6b7-0519-4b20-b2e2-0f6f28f9b2b3.png"},{id:27,model:"sdxl-turbo",prompt:"Close-up of eyes grape hyacinths with rainbow reflections",negativePrompt:"people, animals, buildings, text",width:1024,height:1024,aspectRatio:1,timestamp:"3 weeks ago",imageUrl:"/assets/mock/general/azucca8888_Close-up_of_eyes_grape_hyacinths_rainbow_reflected_i_30bf2972-f0a6-40a3-9be8-bd96a44ddf73.png"}],Zs={class:"history-section"},ei={class:"history-header"},ti={class:"search-controls"},ai={class:"search-container"},oi={class:"history-content"},si={__name:"HistorySection",setup(e){w("image mosaic");const s=w(""),a=w(Qs),i=v(()=>{if(!s.value)return a.value;const r=s.value.toLowerCase();return a.value.filter(c=>c.prompt.toLowerCase().includes(r)||c.model.toLowerCase().includes(r)||c.timestamp.toLowerCase().includes(r))});return(r,c)=>(l(),p("div",Zs,[t("div",ei,[c[1]||(c[1]=t("div",{class:"model-title"},"sdxl turbo - generations",-1)),t("div",ti,[t("div",ai,[o(ie,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=n=>s.value=n),placeholder:"search generations",variant:"outlined",density:"compact","hide-details":"","bg-color":"rgba(30, 30, 30, 0.6)",class:"search-input","prepend-inner-icon":"mdi-magnify"},null,8,["modelValue"])])])]),t("div",oi,[o(Xs,{generations:i.value},null,8,["generations"])])]))}},ii=$(si,[["__scopeId","data-v-d7d5a594"]]),Ae=[{id:"getting-started",title:"Getting Started",items:[{id:"introduction",title:"Introduction",content:[{type:"paragraph",text:"The SDXL Turbo API provides programmatic access to our state-of-the-art image generation models. This documentation will help you integrate our API into your applications, allowing you to generate high-quality images with simple API calls."},{type:"paragraph",text:"Our API is designed to be easy to use while providing powerful capabilities for image generation, manipulation, and enhancement. Whether you're building a creative tool, content platform, or integrating AI-generated imagery into your application, our API provides the flexibility and performance you need."}]},{id:"authentication",title:"Authentication",content:[{type:"paragraph",text:"All API requests require authentication using an API key. You can obtain your API key from the dashboard after signing up for an account."},{type:"code",language:"javascript",text:`// Example of authenticating with the API
const axios = require('axios');

// Your API key from the dashboard
const API_KEY = 'your_api_key_here';

// Create an axios instance with default headers
const api = axios.create({
  baseURL: 'https://api.sdxlturbo.ai/v1',
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

// Now you can use this instance for all API calls
// Example:
async function testConnection() {
  try {
    const response = await api.get('/models');
    console.log('Connection successful!', response.data);
  } catch (error) {
    console.error('Authentication failed:', error.response?.data || error.message);
  }
}

testConnection();`},{type:"paragraph",text:"Keep your API key secure and never expose it in client-side code. If you believe your API key has been compromised, you can regenerate it from the dashboard."}]},{id:"rate-limits",title:"Rate Limits",content:[{type:"paragraph",text:"To ensure fair usage and system stability, we implement rate limits on API requests. The limits vary based on your subscription tier."},{type:"list",items:["Free tier: 50 requests per day, max 5 requests per minute","Basic tier: 500 requests per day, max 20 requests per minute","Pro tier: 5,000 requests per day, max 60 requests per minute","Enterprise tier: Custom limits based on your needs"]},{type:"paragraph",text:"If you exceed your rate limit, the API will return a 429 Too Many Requests response. We recommend implementing exponential backoff in your client to handle rate limiting gracefully."},{type:"code",language:"javascript",text:`// Example of handling rate limits with exponential backoff
async function makeRequestWithRetry(endpoint, data, maxRetries = 5) {
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      return await api.post(endpoint, data);
    } catch (error) {
      if (error.response?.status === 429) {
        // Rate limited, implement exponential backoff
        const delay = Math.pow(2, retries) * 1000 + Math.random() * 1000;
        console.log(\`Rate limited. Retrying in \${delay}ms...\`);
        await new Promise(resolve => setTimeout(resolve, delay));
        retries++;
      } else {
        // Different error, don't retry
        throw error;
      }
    }
  }
  
  throw new Error('Max retries exceeded');
}`}]}]},{id:"core-endpoints",title:"Core Endpoints",items:[{id:"text-to-image",title:"Text to Image",content:[{type:"paragraph",text:"The text-to-image endpoint allows you to generate images based on text prompts. This is the most commonly used endpoint for creating AI-generated imagery."},{type:"code",language:"javascript",text:`// Example of generating an image from text
const generateImage = async (prompt, options = {}) => {
  try {
    const response = await api.post('/generate/text-to-image', {
      prompt,
      model: options.model || 'sdxl-turbo',
      negative_prompt: options.negativePrompt || '',
      width: options.width || 1024,
      height: options.height || 1024,
      num_outputs: options.numOutputs || 1,
      guidance_scale: options.guidanceScale || 7.5,
      steps: options.steps || 30,
      seed: options.seed || -1, // -1 for random seed
      scheduler: options.scheduler || 'K_EULER'
    });
    
    return response.data;
  } catch (error) {
    console.error('Image generation failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    const result = await generateImage(
      'A serene landscape with mountains and a lake at sunset',
      {
        negativePrompt: 'blurry, low quality, distorted',
        width: 1024,
        height: 768,
        guidanceScale: 8.0
      }
    );
    
    console.log('Generated image URLs:', result.images);
    console.log('Generation ID:', result.generation_id);
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"The API returns URLs to the generated images, which are temporarily available for download. For permanent storage, you should download and save these images to your own storage solution."}]},{id:"image-to-image",title:"Image to Image",content:[{type:"paragraph",text:"The image-to-image endpoint allows you to use an existing image as a starting point and transform it based on a text prompt. This is useful for style transfers, image editing, and variations."},{type:"code",language:"javascript",text:`// Example of transforming an existing image
const fs = require('fs');
const FormData = require('form-data');

const transformImage = async (imageUrl, prompt, options = {}) => {
  try {
    // For local files, use this approach
    if (imageUrl.startsWith('file://')) {
      const formData = new FormData();
      const localPath = imageUrl.replace('file://', '');
      
      formData.append('image', fs.createReadStream(localPath));
      formData.append('prompt', prompt);
      formData.append('model', options.model || 'sdxl-turbo');
      formData.append('negative_prompt', options.negativePrompt || '');
      formData.append('strength', options.strength || 0.7);
      formData.append('guidance_scale', options.guidanceScale || 7.5);
      formData.append('steps', options.steps || 30);
      formData.append('seed', options.seed || -1);
      
      const response = await api.post('/generate/image-to-image', formData, {
        headers: {
          ...api.defaults.headers,
          'Content-Type': \`multipart/form-data; boundary=\${formData._boundary}\`
        }
      });
      
      return response.data;
    } 
    // For remote images, use URL
    else {
      const response = await api.post('/generate/image-to-image', {
        image_url: imageUrl,
        prompt,
        model: options.model || 'sdxl-turbo',
        negative_prompt: options.negativePrompt || '',
        strength: options.strength || 0.7,
        guidance_scale: options.guidanceScale || 7.5,
        steps: options.steps || 30,
        seed: options.seed || -1
      });
      
      return response.data;
    }
  } catch (error) {
    console.error('Image transformation failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    // Using a remote image
    const result = await transformImage(
      'https://example.com/path/to/image.jpg',
      'Convert this landscape to winter scene with snow',
      {
        strength: 0.8,
        steps: 40
      }
    );
    
    console.log('Transformed image URLs:', result.images);
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"The strength parameter controls how much the original image is transformed. Values closer to 0 preserve more of the original image, while values closer to 1 allow more creative freedom based on the prompt."}]},{id:"inpainting",title:"Inpainting",content:[{type:"paragraph",text:"The inpainting endpoint allows you to selectively replace parts of an image based on a mask. This is useful for removing unwanted elements, adding new elements, or making targeted edits to specific regions."},{type:"code",language:"javascript",text:`// Example of inpainting (editing specific parts of an image)
const fs = require('fs');
const FormData = require('form-data');

const inpaintImage = async (imageUrl, maskUrl, prompt, options = {}) => {
  try {
    const formData = new FormData();
    
    // Handle local or remote images
    if (imageUrl.startsWith('file://')) {
      const localPath = imageUrl.replace('file://', '');
      formData.append('image', fs.createReadStream(localPath));
    } else {
      formData.append('image_url', imageUrl);
    }
    
    // Handle local or remote masks
    if (maskUrl.startsWith('file://')) {
      const localPath = maskUrl.replace('file://', '');
      formData.append('mask', fs.createReadStream(localPath));
    } else {
      formData.append('mask_url', maskUrl);
    }
    
    // Add other parameters
    formData.append('prompt', prompt);
    formData.append('model', options.model || 'sdxl-turbo');
    formData.append('negative_prompt', options.negativePrompt || '');
    formData.append('guidance_scale', options.guidanceScale || 7.5);
    formData.append('steps', options.steps || 30);
    formData.append('seed', options.seed || -1);
    
    const response = await api.post('/generate/inpainting', formData, {
      headers: {
        ...api.defaults.headers,
        'Content-Type': \`multipart/form-data; boundary=\${formData._boundary}\`
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Inpainting failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    const result = await inpaintImage(
      'file:///path/to/original.jpg',
      'file:///path/to/mask.png',
      'Replace with a bouquet of flowers',
      {
        steps: 50,
        guidanceScale: 8.5
      }
    );
    
    console.log('Inpainted image URLs:', result.images);
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"The mask should be a black and white image where white areas indicate regions to be replaced/inpainted, and black areas indicate regions to preserve from the original image."}]}]},{id:"advanced-features",title:"Advanced Features",items:[{id:"batch-processing",title:"Batch Processing",content:[{type:"paragraph",text:"For high-volume image generation, you can use our batch processing endpoint to generate multiple images in a single request. This is more efficient than making separate requests for each image."},{type:"code",language:"javascript",text:`// Example of batch processing multiple prompts
const batchGenerate = async (prompts, options = {}) => {
  try {
    const response = await api.post('/generate/batch', {
      prompts: prompts.map(prompt => ({
        prompt,
        negative_prompt: options.negativePrompt || '',
        width: options.width || 1024,
        height: options.height || 1024
      })),
      model: options.model || 'sdxl-turbo',
      guidance_scale: options.guidanceScale || 7.5,
      steps: options.steps || 30,
      seed: options.seed || -1,
      scheduler: options.scheduler || 'K_EULER'
    });
    
    return response.data;
  } catch (error) {
    console.error('Batch generation failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    const prompts = [
      'A futuristic cityscape with flying cars',
      'A serene beach at sunset with palm trees',
      'A fantasy castle on a floating island',
      'A cyberpunk character with neon lights'
    ];
    
    const result = await batchGenerate(prompts, {
      width: 768,
      height: 768,
      steps: 25
    });
    
    console.log('Batch results:', result.generations);
    console.log('Batch ID:', result.batch_id);
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"Batch processing requests are processed asynchronously. The API returns a batch ID that you can use to check the status of the batch and retrieve results when processing is complete."}]},{id:"webhook-notifications",title:"Webhook Notifications",content:[{type:"paragraph",text:"For long-running operations like batch processing, you can set up webhook notifications to be alerted when processing is complete. This allows your application to continue working without polling the API for status updates."},{type:"code",language:"javascript",text:`// Example of setting up webhook notifications
const generateWithWebhook = async (prompt, webhookUrl, options = {}) => {
  try {
    const response = await api.post('/generate/text-to-image', {
      prompt,
      model: options.model || 'sdxl-turbo',
      negative_prompt: options.negativePrompt || '',
      width: options.width || 1024,
      height: options.height || 1024,
      num_outputs: options.numOutputs || 4, // Generate multiple outputs
      guidance_scale: options.guidanceScale || 7.5,
      steps: options.steps || 30,
      seed: options.seed || -1,
      webhook_url: webhookUrl // URL to receive the notification
    });
    
    return response.data;
  } catch (error) {
    console.error('Generation with webhook failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    const result = await generateWithWebhook(
      'A detailed fantasy landscape with mountains, forests, and a castle',
      'https://your-app.com/api/webhooks/sdxl-callback',
      {
        numOutputs: 8,
        width: 1024,
        height: 768
      }
    );
    
    console.log('Request submitted:', result);
    console.log('Generation ID:', result.generation_id);
    console.log('Check your webhook endpoint for results when processing completes');
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();

// Example Express.js webhook handler
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/webhooks/sdxl-callback', (req, res) => {
  const { generation_id, status, images } = req.body;
  
  console.log(\`Received webhook for generation \${generation_id}\`);
  console.log(\`Status: \${status}\`);
  
  if (status === 'completed') {
    console.log('Generated images:', images);
    // Process the images (e.g., save to database, notify users)
  } else if (status === 'failed') {
    console.error('Generation failed:', req.body.error);
  }
  
  // Acknowledge receipt of the webhook
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Webhook server listening on port 3000');
});`},{type:"paragraph",text:"When setting up webhooks, ensure your endpoint is publicly accessible and can handle POST requests with JSON payloads. We recommend implementing signature verification to ensure the webhook calls are coming from our service."}]},{id:"model-fine-tuning",title:"Model Fine-Tuning",content:[{type:"paragraph",text:"For specialized use cases, you can fine-tune our models on your own data to achieve more targeted results. This is useful for consistent style generation, brand-specific imagery, or specialized domain applications."},{type:"code",language:"javascript",text:`// Example of initiating a fine-tuning job
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

const initiateFineTuning = async (trainingImagesDir, options = {}) => {
  try {
    const formData = new FormData();
    
    // Add training images
    const imageFiles = fs.readdirSync(trainingImagesDir)
      .filter(file => /\\.(jpg|jpeg|png)$/i.test(file));
    
    for (const file of imageFiles) {
      formData.append('training_images', 
        fs.createReadStream(path.join(trainingImagesDir, file)),
        file
      );
    }
    
    // Add training configuration
    formData.append('name', options.name || 'My Fine-Tuned Model');
    formData.append('base_model', options.baseModel || 'sdxl-turbo');
    formData.append('training_steps', options.trainingSteps || 2000);
    formData.append('learning_rate', options.learningRate || 1e-5);
    formData.append('instance_prompt', options.instancePrompt || 'a photo of sks');
    formData.append('class_prompt', options.classPrompt || 'a photo of');
    
    const response = await api.post('/fine-tune/create', formData, {
      headers: {
        ...api.defaults.headers,
        'Content-Type': \`multipart/form-data; boundary=\${formData._boundary}\`
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Fine-tuning initiation failed:', error.response?.data || error.message);
    throw error;
  }
};

// Check fine-tuning status
const checkFineTuningStatus = async (fineTuneId) => {
  try {
    const response = await api.get(\`/fine-tune/\${fineTuneId}\`);
    return response.data;
  } catch (error) {
    console.error('Status check failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    // Start fine-tuning
    const result = await initiateFineTuning('./training-images', {
      name: 'Corporate Brand Style',
      instancePrompt: 'a photo of xyz corporate style',
      trainingSteps: 3000
    });
    
    console.log('Fine-tuning job initiated:', result);
    console.log('Fine-tune ID:', result.fine_tune_id);
    
    // Check status (in a real app, you'd do this periodically or use webhooks)
    const status = await checkFineTuningStatus(result.fine_tune_id);
    console.log('Current status:', status.status);
    console.log('Progress:', status.progress);
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"Fine-tuning is a resource-intensive process that may take several hours to complete. We recommend using webhook notifications to be alerted when the process is complete. Fine-tuned models are billed separately from regular API usage."}]}]},{id:"resources",title:"Resources",items:[{id:"sdks-libraries",title:"SDKs & Libraries",content:[{type:"paragraph",text:"We provide official SDKs for several programming languages to make integration easier. These SDKs handle authentication, error handling, and provide typed interfaces for all API endpoints."},{type:"list",items:["Node.js SDK: npm install sdxl-turbo-api","Python SDK: pip install sdxl-turbo-api","PHP SDK: composer require sdxl-turbo/api-client","Ruby SDK: gem install sdxl-turbo-api","Java SDK: Available on Maven Central"]},{type:"code",language:"javascript",text:`// Example using the official Node.js SDK
const SdxlTurbo = require('sdxl-turbo-api');

// Initialize the client
const client = new SdxlTurbo.Client('your_api_key_here');

// Generate an image
async function generateWithSdk() {
  try {
    const result = await client.textToImage({
      prompt: 'A beautiful mountain landscape at sunset',
      negativePrompt: 'blurry, low quality',
      width: 1024,
      height: 768,
      numOutputs: 1
    });
    
    console.log('Generated image:', result.images[0]);
    return result;
  } catch (error) {
    if (error instanceof SdxlTurbo.RateLimitError) {
      console.error('Rate limit exceeded, try again later');
    } else if (error instanceof SdxlTurbo.AuthenticationError) {
      console.error('Invalid API key');
    } else {
      console.error('Generation failed:', error.message);
    }
    throw error;
  }
}

generateWithSdk();`},{type:"paragraph",text:"Our SDKs are open source and available on GitHub. We welcome contributions from the community to improve and extend these libraries."}]},{id:"examples-tutorials",title:"Examples & Tutorials",content:[{type:"paragraph",text:"We provide a variety of examples and tutorials to help you get started with our API. These cover common use cases and integration patterns."},{type:"list",items:["Building a simple image generation web app","Creating a Slack bot for image generation","Implementing an image editing tool with inpainting","Setting up a batch processing pipeline","Integrating with content management systems"]},{type:"paragraph",text:"You can find these examples in our GitHub repository: github.com/sdxl-turbo/api-examples"},{type:"code",language:"javascript",text:`// Example of a simple Express.js web app for image generation
const express = require('express');
const SdxlTurbo = require('sdxl-turbo-api');
const app = express();

// Initialize the SDXL client
const client = new SdxlTurbo.Client(process.env.SDXL_API_KEY);

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Serve the form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle image generation
app.post('/generate', async (req, res) => {
  try {
    const { prompt, negativePrompt, width, height } = req.body;
    
    // Validate inputs
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    
    // Generate the image
    const result = await client.textToImage({
      prompt,
      negativePrompt: negativePrompt || '',
      width: parseInt(width) || 1024,
      height: parseInt(height) || 1024,
      numOutputs: 1
    });
    
    // Return the result
    res.json({ 
      success: true, 
      imageUrl: result.images[0],
      generationId: result.generation_id
    });
  } catch (error) {
    console.error('Generation failed:', error);
    res.status(500).json({ 
      error: 'Image generation failed', 
      message: error.message 
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}]},{id:"support",title:"Support",content:[{type:"paragraph",text:"If you need help with our API, there are several support channels available:"},{type:"list",items:["Documentation: comprehensive guides and reference","Community Forum: connect with other developers","GitHub Issues: report bugs or request features","Email Support: contact our team directly","Discord Community: real-time chat with our team and community"]},{type:"paragraph",text:"For enterprise customers, we offer dedicated support with guaranteed response times and access to our engineering team."}]}]}],ni=e=>{for(const s of Ae)for(const a of s.items)if(a.id===e)return a;return Ae[0].items[0]},ri={class:"api-section"},li={class:"api-container"},di={__name:"ApiSection",setup(e){const s=w(Ae),a=w("introduction"),i=v(()=>ni(a.value));return(r,c)=>(l(),p("div",ri,[t("div",li,[o(Be,{class:"nav-panel",sections:s.value,selected:a.value,"onUpdate:selected":c[0]||(c[0]=n=>a.value=n)},null,8,["sections","selected"]),o(je,{class:"content-area",doc:i.value},null,8,["doc"])])]))}},ci=$(di,[["__scopeId","data-v-e6e2e72d"]]),ui={class:"generate-view-wrapper"},mi={class:"nav-slider-container"},pi={class:"content-container"},gi={__name:"GenerateView",setup(e){const s=w("run"),a=v(()=>{switch(s.value){case"run":return Ue;case"examples":return oo;case"docs":return So;case"forums":return Us;case"history":return ii;case"api":return ci;default:return Ue}});return(i,r)=>(l(),p("div",ui,[t("div",mi,[o(Vt,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=c=>s.value=c)},null,8,["modelValue"])]),t("div",pi,[o(Pe,{mode:"out-in",duration:100},{default:d(()=>[(l(),q(It(a.value),{key:s.value,class:"section-component"}))]),_:1})])]))}},yi=$(gi,[["__scopeId","data-v-261f7551"]]);export{yi as default};
