function x(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function bt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ct(t){return t()}function nt(){return Object.create(null)}function L(t){t.forEach(ct)}function Q(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t){let e;return V(t,n=>e=n)(),e}function Tt(t,e,n){t.$$.on_destroy.push(V(e,n))}function It(t,e,n,s){if(t){const i=lt(t,e,n,s);return t[0](i)}}function lt(t,e,n,s){return t[1]&&s?K(n.ctx.slice(),t[1](s(e))):n.ctx}function zt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const u=[],l=Math.max(e.dirty.length,i.length);for(let o=0;o<l;o+=1)u[o]=e.dirty[o]|i[o];return u}return e.dirty|i}return e.dirty}function Ft(t,e,n,s,i,u){if(i){const l=lt(e,n,s,u);t.p(l,i)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)e[n]=!0;return e}function Yt(t){return t==null?"":t}function Bt(t,e,n){return t.set(n),e}function Wt(t){return t&&Q(t.destroy)?t.destroy:x}function Xt(t,e){t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function D(t){t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function wt(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function at(t){return document.createTextNode(t)}function Jt(){return at(" ")}function Z(){return at("")}function Kt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t){return t===""?null:+t}function vt(t){return Array.from(t.childNodes)}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e){t.value=e==null?"":e}function ne(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function se(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function re(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function oe(t,e,n){t.classList[n?"add":"remove"](e)}function xt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}class ie{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=kt(n.nodeName):this.e=wt(n.nodeName),this.t=n,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(D)}}let q;function v(t){q=t}function O(){if(!q)throw new Error("Function called outside component initialization");return q}function ce(t){O().$$.on_mount.push(t)}function Et(t){O().$$.after_update.push(t)}function $t(t){O().$$.on_destroy.push(t)}function jt(){const t=O();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const u=xt(e,n,{cancelable:s});return i.slice().forEach(l=>{l.call(t,u)}),!u.defaultPrevented}return!0}}function ue(t,e){return O().$$.context.set(t,e),e}function le(t){return O().$$.context.get(t)}function st(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const P=[],rt=[],z=[],X=[],ft=Promise.resolve();let G=!1;function ht(){G||(G=!0,ft.then(tt))}function St(){return ht(),ft}function J(t){z.push(t)}function ae(t){X.push(t)}const W=new Set;let I=0;function tt(){const t=q;do{for(;I<P.length;){const e=P[I];I++,v(e),Ot(e.$$)}for(v(null),P.length=0,I=0;rt.length;)rt.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];W.has(n)||(W.add(n),n())}z.length=0}while(P.length);for(;X.length;)X.pop()();G=!1,W.clear(),v(t)}function Ot(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const F=new Set;let S;function Y(){S={r:0,c:[],p:S}}function B(){S.r||L(S.c),S=S.p}function E(t,e){t&&t.i&&(F.delete(t),t.i(e))}function j(t,e,n,s){if(t&&t.o){if(F.has(t))return;F.add(t),S.c.push(()=>{F.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function fe(t,e){const n=e.token={};function s(i,u,l,o){if(e.token!==n)return;e.resolved=o;let r=e.ctx;l!==void 0&&(r=r.slice(),r[l]=o);const c=i&&(e.current=i)(r);let d=!1;e.block&&(e.blocks?e.blocks.forEach((y,p)=>{p!==u&&y&&(Y(),j(y,1,1,()=>{e.blocks[p]===y&&(e.blocks[p]=null)}),B())}):e.block.d(1),c.c(),E(c,1),c.m(e.mount(),e.anchor),d=!0),e.block=c,e.blocks&&(e.blocks[u]=c),d&&tt()}if(bt(t)){const i=O();if(t.then(u=>{v(i),s(e.then,1,e.value,u),v(null)},u=>{if(v(i),s(e.catch,2,e.error,u),v(null),!e.hasCatch)throw u}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function he(t,e,n){const s=e.slice(),{resolved:i}=t;t.current===t.then&&(s[t.value]=i),t.current===t.catch&&(s[t.error]=i),t.block.p(s,n)}function de(t,e){j(t,1,1,()=>{e.delete(t.key)})}function _e(t,e,n,s,i,u,l,o,r,c,d,y){let p=t.length,g=u.length,b=p;const $={};for(;b--;)$[t[b].key]=b;const k=[],N=new Map,A=new Map;for(b=g;b--;){const a=y(i,u,b),m=n(a);let _=l.get(m);_?s&&_.p(a,e):(_=c(m,a),_.c()),N.set(m,k[b]=_),m in $&&A.set(m,Math.abs(b-$[m]))}const T=new Set,h=new Set;function f(a){E(a,1),a.m(o,d),l.set(a.key,a),d=a.first,g--}for(;p&&g;){const a=k[g-1],m=t[p-1],_=a.key,w=m.key;a===m?(d=a.first,p--,g--):N.has(w)?!l.has(_)||T.has(_)?f(a):h.has(w)?p--:A.get(_)>A.get(w)?(h.add(_),f(a)):(T.add(w),p--):(r(m,l),p--)}for(;p--;){const a=t[p];N.has(a.key)||r(a,l)}for(;g;)f(k[g-1]);return k}function dt(t,e){const n={},s={},i={$$scope:1};let u=t.length;for(;u--;){const l=t[u],o=e[u];if(o){for(const r in l)r in o||(s[r]=1);for(const r in o)i[r]||(n[r]=o[r],i[r]=1);t[u]=o}else for(const r in l)i[r]=1}for(const l in s)l in n||(n[l]=void 0);return n}function _t(t){return typeof t=="object"&&t!==null?t:{}}function pe(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function H(t){t&&t.c()}function M(t,e,n,s){const{fragment:i,on_mount:u,on_destroy:l,after_update:o}=t.$$;i&&i.m(e,n),s||J(()=>{const r=u.map(ct).filter(Q);l?l.push(...r):L(r),t.$$.on_mount=[]}),o.forEach(J)}function R(t,e){const n=t.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(t,e){t.$$.dirty[0]===-1&&(P.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,s,i,u,l,o=[-1]){const r=q;v(t);const c=t.$$={fragment:null,ctx:null,props:u,update:x,not_equal:i,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:nt(),dirty:o,skip_bound:!1,root:e.target||r.$$.root};l&&l(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(y,p,...g)=>{const b=g.length?g[0]:p;return c.ctx&&i(c.ctx[y],c.ctx[y]=b)&&(!c.skip_bound&&c.bound[y]&&c.bound[y](b),d&&Ct(t,y)),p}):[],c.update(),d=!0,L(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const y=vt(e.target);c.fragment&&c.fragment.l(y),y.forEach(D)}else c.fragment&&c.fragment.c();e.intro&&E(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),tt()}v(r)}class Nt{$destroy(){R(this,1),this.$destroy=x}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const C=[];function pt(t,e){return{subscribe:gt(t,e).subscribe}}function gt(t,e=x){let n;const s=new Set;function i(o){if(ut(t,o)&&(t=o,n)){const r=!C.length;for(const c of s)c[1](),C.push(c,t);if(r){for(let c=0;c<C.length;c+=2)C[c][0](C[c+1]);C.length=0}}}function u(o){i(o(t))}function l(o,r=x){const c=[o,r];return s.add(c),s.size===1&&(n=e(i)||x),o(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:u,subscribe:l}}function mt(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,u=e.length<2;return pt(n,l=>{let o=!1;const r=[];let c=0,d=x;const y=()=>{if(c)return;d();const g=e(s?r[0]:r,l);u?l(g):d=Q(g)?g:x},p=i.map((g,b)=>V(g,$=>{r[b]=$,c&=~(1<<b),o&&y()},()=>{c|=1<<b}));return o=!0,y(),function(){L(p),d()}})}function At(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,i,u,l=[],o="",r=t.split("/");for(r[0]||r.shift();i=r.shift();)n=i[0],n==="*"?(l.push("wild"),o+="/(.*)"):n===":"?(s=i.indexOf("?",1),u=i.indexOf(".",1),l.push(i.substring(1,~s?s:~u?u:i.length)),o+=!!~s&&!~u?"(?:/([^/]+?))?":"/([^/]+?)",~u&&(o+=(~s?"?":"")+"\\"+i.substring(u))):o+="/"+i;return{keys:l,pattern:new RegExp("^"+o+(e?"(?=$|/)":"/?$"),"i")}}function Pt(t){let e,n,s;const i=[t[2]];var u=t[0];function l(o){let r={};for(let c=0;c<i.length;c+=1)r=K(r,i[c]);return{props:r}}return u&&(e=new u(l()),e.$on("routeEvent",t[7])),{c(){e&&H(e.$$.fragment),n=Z()},m(o,r){e&&M(e,o,r),U(o,n,r),s=!0},p(o,r){const c=r&4?dt(i,[_t(o[2])]):{};if(u!==(u=o[0])){if(e){Y();const d=e;j(d.$$.fragment,1,0,()=>{R(d,1)}),B()}u?(e=new u(l()),e.$on("routeEvent",o[7]),H(e.$$.fragment),E(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else u&&e.$set(c)},i(o){s||(e&&E(e.$$.fragment,o),s=!0)},o(o){e&&j(e.$$.fragment,o),s=!1},d(o){o&&D(n),e&&R(e,o)}}}function qt(t){let e,n,s;const i=[{params:t[1]},t[2]];var u=t[0];function l(o){let r={};for(let c=0;c<i.length;c+=1)r=K(r,i[c]);return{props:r}}return u&&(e=new u(l()),e.$on("routeEvent",t[6])),{c(){e&&H(e.$$.fragment),n=Z()},m(o,r){e&&M(e,o,r),U(o,n,r),s=!0},p(o,r){const c=r&6?dt(i,[r&2&&{params:o[1]},r&4&&_t(o[2])]):{};if(u!==(u=o[0])){if(e){Y();const d=e;j(d.$$.fragment,1,0,()=>{R(d,1)}),B()}u?(e=new u(l()),e.$on("routeEvent",o[6]),H(e.$$.fragment),E(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else u&&e.$set(c)},i(o){s||(e&&E(e.$$.fragment,o),s=!0)},o(o){e&&j(e.$$.fragment,o),s=!1},d(o){o&&D(n),e&&R(e,o)}}}function Mt(t){let e,n,s,i;const u=[qt,Pt],l=[];function o(r,c){return r[1]?0:1}return e=o(t),n=l[e]=u[e](t),{c(){n.c(),s=Z()},m(r,c){l[e].m(r,c),U(r,s,c),i=!0},p(r,[c]){let d=e;e=o(r),e===d?l[e].p(r,c):(Y(),j(l[d],1,1,()=>{l[d]=null}),B(),n=l[e],n?n.p(r,c):(n=l[e]=u[e](r),n.c()),E(n,1),n.m(s.parentNode,s))},i(r){i||(E(n),i=!0)},o(r){j(n),i=!1},d(r){l[e].d(r),r&&D(s)}}}function ot(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const et=pt(null,function(e){e(ot());const n=()=>{e(ot())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}),ge=mt(et,t=>t.location);mt(et,t=>t.querystring);const it=gt(void 0);function Rt(t,e,n){let{routes:s={}}=e,{prefix:i=""}=e,{restoreScrollState:u=!1}=e;class l{constructor(f,a){if(!a||typeof a!="function"&&(typeof a!="object"||a._sveltesparouter!==!0))throw Error("Invalid component object");if(!f||typeof f=="string"&&(f.length<1||f.charAt(0)!="/"&&f.charAt(0)!="*")||typeof f=="object"&&!(f instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:m,keys:_}=At(f);this.path=f,typeof a=="object"&&a._sveltesparouter===!0?(this.component=a.component,this.conditions=a.conditions||[],this.userData=a.userData,this.props=a.props||{}):(this.component=()=>Promise.resolve(a),this.conditions=[],this.props={}),this._pattern=m,this._keys=_}match(f){if(i){if(typeof i=="string")if(f.startsWith(i))f=f.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const w=f.match(i);if(w&&w[0])f=f.substr(w[0].length)||"/";else return null}}const a=this._pattern.exec(f);if(a===null)return null;if(this._keys===!1)return a;const m={};let _=0;for(;_<this._keys.length;){try{m[this._keys[_]]=decodeURIComponent(a[_+1]||"")||null}catch{m[this._keys[_]]=null}_++}return m}async checkConditions(f){for(let a=0;a<this.conditions.length;a++)if(!await this.conditions[a](f))return!1;return!0}}const o=[];s instanceof Map?s.forEach((h,f)=>{o.push(new l(f,h))}):Object.keys(s).forEach(h=>{o.push(new l(h,s[h]))});let r=null,c=null,d={};const y=jt();async function p(h,f){await St(),y(h,f)}let g=null,b=null;u&&(b=h=>{h.state&&h.state.__svelte_spa_router_scrollY?g=h.state:g=null},window.addEventListener("popstate",b),Et(()=>{g?window.scrollTo(g.__svelte_spa_router_scrollX,g.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let $=null,k=null;const N=et.subscribe(async h=>{$=h;let f=0;for(;f<o.length;){const a=o[f].match(h.location);if(!a){f++;continue}const m={route:o[f].path,location:h.location,querystring:h.querystring,userData:o[f].userData,params:a&&typeof a=="object"&&Object.keys(a).length?a:null};if(!await o[f].checkConditions(m)){n(0,r=null),k=null,p("conditionsFailed",m);return}p("routeLoading",Object.assign({},m));const _=o[f].component;if(k!=_){_.loading?(n(0,r=_.loading),k=_,n(1,c=_.loadingParams),n(2,d={}),p("routeLoaded",Object.assign({},m,{component:r,name:r.name,params:c}))):(n(0,r=null),k=null);const w=await _();if(h!=$)return;n(0,r=w&&w.default||w),k=_}a&&typeof a=="object"&&Object.keys(a).length?n(1,c=a):n(1,c=null),n(2,d=o[f].props),p("routeLoaded",Object.assign({},m,{component:r,name:r.name,params:c})).then(()=>{it.set(c)});return}n(0,r=null),k=null,it.set(void 0)});$t(()=>{N(),b&&window.removeEventListener("popstate",b)});function A(h){st.call(this,t,h)}function T(h){st.call(this,t,h)}return t.$$set=h=>{"routes"in h&&n(3,s=h.routes),"prefix"in h&&n(4,i=h.prefix),"restoreScrollState"in h&&n(5,u=h.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=u?"manual":"auto")},[r,c,d,s,i,u,A,T]}class me extends Nt{constructor(e){super(),Lt(this,e,Rt,Mt,ut,{routes:3,prefix:4,restoreScrollState:5})}}export{re as $,_e as A,B,de as C,Bt as D,dt as E,_t as F,fe as G,he as H,K as I,St as J,Wt as K,Kt as L,jt as M,Gt as N,st as O,oe as P,Yt as Q,me as R,Nt as S,ie as T,Qt as U,ee as V,Zt as W,L as X,le as Y,J as Z,se as _,Jt as a,mt as a0,pt as a1,rt as a2,pe as a3,ae as a4,ue as a5,ce as a6,ne as a7,Ut as a8,U as b,Vt as c,D as d,wt as e,Xt as f,te as g,H as h,Lt as i,E as j,j as k,R as l,M as m,x as n,Tt as o,ge as p,Dt as q,Ht as r,ut as s,at as t,Ft as u,zt as v,gt as w,It as x,Z as y,Y as z};