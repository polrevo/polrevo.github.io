import{r as Pr,e as Dr,f as jr,g as Hr,i as Wr,b as Fr,a as Br,s as zr,n as Qr,d as ie,q as Vr,E as Yt,j as Ct,o as Jr}from"./index.es-Df_Kaxpm.js";import{o as We,aK as Gr,aL as Yr,aM as Kr,aN as Zr,aO as Xr,aP as eo,aQ as to,aR as no,aS as ro,aT as oo,aU as io,aV as so,aW as ao,aX as co,aY as lo,aZ as uo,a_ as _o,a$ as fo,p as Kt,b0 as ho}from"./index-D8PKd5Pd.js";var se,E,Zt,W,St,Xt,Ne,Fe,Me,Le,en,ne={},tn=[],po=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ve=Array.isArray;function A(t,e){for(var n in e)t[n]=e[n];return t}function nn(t){var e=t.parentNode;e&&e.removeChild(t)}function L(t,e,n){var r,o,i,s={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:s[i]=e[i];if(arguments.length>2&&(s.children=arguments.length>3?se.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)s[i]===void 0&&(s[i]=t.defaultProps[i]);return ee(t,s,r,o,null)}function ee(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Zt,__i:-1,__u:0};return o==null&&E.vnode!=null&&E.vnode(i),i}function rn(){return{current:null}}function q(t){return t.children}function M(t,e){this.props=t,this.context=e}function F(t,e){if(e==null)return t.__?F(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?F(t):null}function on(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return on(t)}}function qe(t){(!t.__d&&(t.__d=!0)&&W.push(t)&&!pe.__r++||St!==E.debounceRendering)&&((St=E.debounceRendering)||Xt)(pe)}function pe(){var t,e,n,r,o,i,s,l;for(W.sort(Ne);t=W.shift();)t.__d&&(e=W.length,r=void 0,i=(o=(n=t).__v).__e,s=[],l=[],n.__P&&((r=A({},o)).__v=o.__v+1,E.vnode&&E.vnode(r),Be(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,s,i??F(o),!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,cn(s,r,l),r.__e!=i&&on(r)),W.length>e&&W.sort(Ne));pe.__r=0}function sn(t,e,n,r,o,i,s,l,f,_,m){var a,w,g,k,I,S=r&&r.__k||tn,c=e.length;for(n.__d=f,mo(n,e,S),f=n.__d,a=0;a<c;a++)(g=n.__k[a])!=null&&typeof g!="boolean"&&typeof g!="function"&&(w=g.__i===-1?ne:S[g.__i]||ne,g.__i=a,Be(t,g,w,o,i,s,l,f,_,m),k=g.__e,g.ref&&w.ref!=g.ref&&(w.ref&&ze(w.ref,null,g),m.push(g.ref,g.__c||k,g)),I==null&&k!=null&&(I=k),65536&g.__u||w.__k===g.__k?f=an(g,f,t):typeof g.type=="function"&&g.__d!==void 0?f=g.__d:k&&(f=k.nextSibling),g.__d=void 0,g.__u&=-196609);n.__d=f,n.__e=I}function mo(t,e,n){var r,o,i,s,l,f=e.length,_=n.length,m=_,a=0;for(t.__k=[],r=0;r<f;r++)s=r+a,(o=t.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?ee(null,o,null,null,null):ve(o)?ee(q,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?ee(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=go(o,n,s,m),o.__i=l,i=null,l!==-1&&(m--,(i=n[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&a--,typeof o.type!="function"&&(o.__u|=65536)):l!==s&&(l==s-1?a--:l==s+1?a++:l>s?m>f-s?a+=l-s:a--:l<s&&(l==s-a?a-=l-s:a++),l!==r+a&&(o.__u|=65536))):(i=n[s])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=F(i)),Ae(i,i,!1),n[s]=null,m--);if(m)for(r=0;r<_;r++)(i=n[r])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=F(i)),Ae(i,i))}function an(t,e,n){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=an(r[o],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=F(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function U(t,e){return e=e||[],t==null||typeof t=="boolean"||(ve(t)?t.some(function(n){U(n,e)}):e.push(t)),e}function go(t,e,n,r){var o=t.key,i=t.type,s=n-1,l=n+1,f=e[n];if(f===null||f&&o==f.key&&i===f.type&&!(131072&f.__u))return n;if(r>(f!=null&&!(131072&f.__u)?1:0))for(;s>=0||l<e.length;){if(s>=0){if((f=e[s])&&!(131072&f.__u)&&o==f.key&&i===f.type)return s;s--}if(l<e.length){if((f=e[l])&&!(131072&f.__u)&&o==f.key&&i===f.type)return l;l++}}return-1}function xt(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||po.test(e)?n:n+"px"}function de(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||xt(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||xt(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=Fe,t.addEventListener(e,i?Le:Me,i)):t.removeEventListener(e,i?Le:Me,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function It(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=Fe++;else if(e.t<n.u)return;return n(E.event?E.event(e):e)}}}function Be(t,e,n,r,o,i,s,l,f,_){var m,a,w,g,k,I,S,c,u,p,d,v,b,y,R,N,T=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(f=!!(32&n.__u),i=[l=e.__e=n.__e]),(m=E.__b)&&m(e);e:if(typeof T=="function")try{if(c=e.props,u="prototype"in T&&T.prototype.render,p=(m=T.contextType)&&r[m.__c],d=m?p?p.props.value:m.__:r,n.__c?S=(a=e.__c=n.__c).__=a.__E:(u?e.__c=a=new T(c,d):(e.__c=a=new M(c,d),a.constructor=T,a.render=yo),p&&p.sub(a),a.props=c,a.state||(a.state={}),a.context=d,a.__n=r,w=a.__d=!0,a.__h=[],a._sb=[]),u&&a.__s==null&&(a.__s=a.state),u&&T.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=A({},a.__s)),A(a.__s,T.getDerivedStateFromProps(c,a.__s))),g=a.props,k=a.state,a.__v=e,w)u&&T.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),u&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(u&&T.getDerivedStateFromProps==null&&c!==g&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(c,d),!a.__e&&(a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(c,a.__s,d)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(a.props=c,a.state=a.__s,a.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(z){z&&(z.__=e)}),v=0;v<a._sb.length;v++)a.__h.push(a._sb[v]);a._sb=[],a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(c,a.__s,d),u&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(g,k,I)})}if(a.context=d,a.props=c,a.__P=t,a.__e=!1,b=E.__r,y=0,u){for(a.state=a.__s,a.__d=!1,b&&b(e),m=a.render(a.props,a.state,a.context),R=0;R<a._sb.length;R++)a.__h.push(a._sb[R]);a._sb=[]}else do a.__d=!1,b&&b(e),m=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++y<25);a.state=a.__s,a.getChildContext!=null&&(r=A(A({},r),a.getChildContext())),u&&!w&&a.getSnapshotBeforeUpdate!=null&&(I=a.getSnapshotBeforeUpdate(g,k)),sn(t,ve(N=m!=null&&m.type===q&&m.key==null?m.props.children:m)?N:[N],e,n,r,o,i,s,l,f,_),a.base=e.__e,e.__u&=-161,a.__h.length&&s.push(a),S&&(a.__E=a.__=null)}catch(z){if(e.__v=null,f||i!=null){for(e.__u|=f?160:32;l&&l.nodeType===8&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,e.__e=l}else e.__e=n.__e,e.__k=n.__k;E.__e(z,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=vo(n.__e,e,n,r,o,i,s,f,_);(m=E.diffed)&&m(e)}function cn(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)ze(n[r],n[++r],n[++r]);E.__c&&E.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){E.__e(i,o.__v)}})}function vo(t,e,n,r,o,i,s,l,f){var _,m,a,w,g,k,I,S=n.props,c=e.props,u=e.type;if(u==="svg"?o="http://www.w3.org/2000/svg":u==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(_=0;_<i.length;_++)if((g=i[_])&&"setAttribute"in g==!!u&&(u?g.localName===u:g.nodeType===3)){t=g,i[_]=null;break}}if(t==null){if(u===null)return document.createTextNode(c);t=document.createElementNS(o,u,c.is&&c),i=null,l=!1}if(u===null)S===c||l&&t.data===c||(t.data=c);else{if(i=i&&se.call(t.childNodes),S=n.props||ne,!l&&i!=null)for(S={},_=0;_<t.attributes.length;_++)S[(g=t.attributes[_]).name]=g.value;for(_ in S)if(g=S[_],_!="children"){if(_=="dangerouslySetInnerHTML")a=g;else if(_!=="key"&&!(_ in c)){if(_=="value"&&"defaultValue"in c||_=="checked"&&"defaultChecked"in c)continue;de(t,_,null,g,o)}}for(_ in c)g=c[_],_=="children"?w=g:_=="dangerouslySetInnerHTML"?m=g:_=="value"?k=g:_=="checked"?I=g:_==="key"||l&&typeof g!="function"||S[_]===g||de(t,_,g,S[_],o);if(m)l||a&&(m.__html===a.__html||m.__html===t.innerHTML)||(t.innerHTML=m.__html),e.__k=[];else if(a&&(t.innerHTML=""),sn(t,ve(w)?w:[w],e,n,r,u==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:n.__k&&F(n,0),l,f),i!=null)for(_=i.length;_--;)i[_]!=null&&nn(i[_]);l||(_="value",k!==void 0&&(k!==t[_]||u==="progress"&&!k||u==="option"&&k!==S[_])&&de(t,_,k,S[_],o),_="checked",I!==void 0&&I!==t[_]&&de(t,_,I,S[_],o))}return t}function ze(t,e,n){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(o){E.__e(o,n)}}function Ae(t,e,n){var r,o;if(E.unmount&&E.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||ze(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){E.__e(i,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Ae(r[o],e,n||typeof t.type!="function");n||t.__e==null||nn(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function yo(t,e,n){return this.constructor(t,n)}function re(t,e,n){var r,o,i,s;E.__&&E.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],s=[],Be(e,t=(!r&&n||e).__k=L(q,null,[t]),o||ne,ne,e.namespaceURI,!r&&n?[n]:o?null:e.firstChild?se.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,s),cn(i,t,s)}function ln(t,e){re(t,e,ln)}function wo(t,e,n){var r,o,i,s,l=A({},t.props);for(i in t.type&&t.type.defaultProps&&(s=t.type.defaultProps),e)i=="key"?r=e[i]:i=="ref"?o=e[i]:l[i]=e[i]===void 0&&s!==void 0?s[i]:e[i];return arguments.length>2&&(l.children=arguments.length>3?se.call(arguments,2):n),ee(t.type,l,r||t.key,o||t.ref,null)}function un(t,e){var n={__c:e="__cC"+en++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&o.some(function(l){l.__e=!0,qe(l)})},this.sub=function(s){o.push(s);var l=s.componentWillUnmount;s.componentWillUnmount=function(){o&&o.splice(o.indexOf(s),1),l&&l.call(s)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}se=tn.slice,E={__e:function(t,e,n,r){for(var o,i,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(l){t=l}throw t}},Zt=0,M.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof t=="function"&&(t=t(A({},n),this.props)),t&&A(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),qe(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),qe(this))},M.prototype.render=q,W=[],Xt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ne=function(t,e){return t.__v.__b-e.__v.__b},pe.__r=0,Fe=0,Me=It(!1),Le=It(!0),en=0;var $,C,Ie,Rt,J=0,_n=[],x=E,Tt=x.__b,Ot=x.__r,Nt=x.diffed,Mt=x.__c,Lt=x.unmount,qt=x.__;function B(t,e){x.__h&&x.__h(C,t,J||e),J=0;var n=C.__H||(C.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function ae(t){return J=1,ye(dn,t)}function ye(t,e,n){var r=B($++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):dn(void 0,e),function(l){var f=r.__N?r.__N[0]:r.__[0],_=r.t(f,l);f!==_&&(r.__N=[_,r.__[1]],r.__c.setState({}))}],r.__c=C,!C.u)){var o=function(l,f,_){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(w){return!!w.__c});if(m.every(function(w){return!w.__N}))return!i||i.call(this,l,f,_);var a=!1;return m.forEach(function(w){if(w.__N){var g=w.__[0];w.__=w.__N,w.__N=void 0,g!==w.__[0]&&(a=!0)}}),!(!a&&r.__c.props===l)&&(!i||i.call(this,l,f,_))};C.u=!0;var i=C.shouldComponentUpdate,s=C.componentWillUpdate;C.componentWillUpdate=function(l,f,_){if(this.__e){var m=i;i=void 0,o(l,f,_),i=m}s&&s.call(this,l,f,_)},C.shouldComponentUpdate=o}return r.__N||r.__}function we(t,e){var n=B($++,3);!x.__s&&Ze(n.__H,e)&&(n.__=t,n.i=e,C.__H.__h.push(n))}function K(t,e){var n=B($++,4);!x.__s&&Ze(n.__H,e)&&(n.__=t,n.i=e,C.__h.push(n))}function Qe(t){return J=5,ce(function(){return{current:t}},[])}function Ve(t,e,n){J=6,K(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function ce(t,e){var n=B($++,7);return Ze(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function Je(t,e){return J=8,ce(function(){return t},e)}function Ge(t){var e=C.context[t.__c],n=B($++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(C)),e.props.value):t.__}function Ye(t,e){x.useDebugValue&&x.useDebugValue(e?e(t):t)}function bo(t){var e=B($++,10),n=ae();return e.__=t,C.componentDidCatch||(C.componentDidCatch=function(r,o){e.__&&e.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Ke(){var t=B($++,11);if(!t.__){for(var e=C.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Eo(){for(var t;t=_n.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(fe),t.__H.__h.forEach(Ue),t.__H.__h=[]}catch(e){t.__H.__h=[],x.__e(e,t.__v)}}x.__b=function(t){C=null,Tt&&Tt(t)},x.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),qt&&qt(t,e)},x.__r=function(t){Ot&&Ot(t),$=0;var e=(C=t.__c).__H;e&&(Ie===C?(e.__h=[],C.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(fe),e.__h.forEach(Ue),e.__h=[],$=0)),Ie=C},x.diffed=function(t){Nt&&Nt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(_n.push(e)!==1&&Rt===x.requestAnimationFrame||((Rt=x.requestAnimationFrame)||ko)(Eo)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Ie=C=null},x.__c=function(t,e){e.some(function(n){try{n.__h.forEach(fe),n.__h=n.__h.filter(function(r){return!r.__||Ue(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],x.__e(r,n.__v)}}),Mt&&Mt(t,e)},x.unmount=function(t){Lt&&Lt(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{fe(r)}catch(o){e=o}}),n.__H=void 0,e&&x.__e(e,n.__v))};var At=typeof requestAnimationFrame=="function";function ko(t){var e,n=function(){clearTimeout(r),At&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);At&&(e=requestAnimationFrame(n))}function fe(t){var e=C,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),C=e}function Ue(t){var e=C;t.__c=t.__(),C=e}function Ze(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function dn(t,e){return typeof e=="function"?e(t):e}class Ut extends Pr{constructor(e){super(e),this.events=new Dr.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(jr(e.method,e.params||[],e.id||Hr().toString()),n)}async requestStrict(e,n){return new Promise(async(r,o)=>{if(!this.connection.connected)try{await this.open()}catch(i){o(i)}this.events.on(`${e.id}`,i=>{Wr(i)?o(i.error):r(i.result)});try{await this.connection.send(e,n)}catch(i){o(i)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Fr(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}const Re="Session currently connected",H="Session currently disconnected",Co="Session Rejected",So="Missing JSON RPC response",xo='JSON-RPC success response must include "result" field',Io='JSON-RPC error response must include "error" field',Ro='JSON RPC request must have valid "method" value',To='JSON RPC request must have valid "id" value',Oo="Missing one of the required parameters: bridge / uri / session",$t="JSON RPC response format is invalid",No="URI format is invalid",Mo="QRCode Modal not provided",Pt="User close QRCode Modal",Lo=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],qo=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],Xe=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...qo],$e="WALLETCONNECT_DEEPLINK_CHOICE",Ao={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var fn=et;et.strict=hn;et.loose=pn;var Uo=Object.prototype.toString,$o={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function et(t){return hn(t)||pn(t)}function hn(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function pn(t){return $o[Uo.call(t)]}const Po=We(fn);var Do=fn.strict,jo=function(e){if(Do(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const Ho=We(jo),tt="hex",nt="utf8",Wo="binary",Fo="buffer",Bo="array",zo="typed-array",Qo="array-buffer",be="0";function G(t){return new Uint8Array(t)}function rt(t,e=!1){const n=t.toString(tt);return e?le(n):n}function ot(t){return t.toString(nt)}function mn(t){return t.readUIntBE(0,t.length)}function Z(t){return Ho(t)}function P(t,e=!1){return rt(Z(t),e)}function gn(t){return ot(Z(t))}function vn(t){return mn(Z(t))}function it(t){return Buffer.from(Y(t),tt)}function D(t){return G(it(t))}function Vo(t){return ot(it(t))}function Jo(t){return vn(D(t))}function st(t){return Buffer.from(t,nt)}function yn(t){return G(st(t))}function Go(t,e=!1){return rt(st(t),e)}function Yo(t){const e=parseInt(t,10);return hi(fi(e),"Number can only safely store up to 53 bits"),e}function Ko(t){return ti(at(t))}function Zo(t){return ct(at(t))}function Xo(t,e){return ni(at(t),e)}function ei(t){return`${t}`}function at(t){const e=(t>>>0).toString(2);return ut(e)}function ti(t){return Z(ct(t))}function ct(t){return new Uint8Array(ci(t).map(e=>parseInt(e,2)))}function ni(t,e){return P(ct(t),e)}function ri(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function wn(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function Ee(t){return Buffer.isBuffer(t)}function lt(t){return Po.strict(t)&&!Ee(t)}function bn(t){return!lt(t)&&!Ee(t)&&typeof t.byteLength<"u"}function oi(t){return Ee(t)?Fo:lt(t)?zo:bn(t)?Qo:Array.isArray(t)?Bo:typeof t}function ii(t){return ri(t)?Wo:wn(t)?tt:nt}function si(...t){return Buffer.concat(t)}function En(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function ai(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function ci(t,e=8){const n=ut(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function ut(t,e=8,n=be){return li(t,ai(t.length,e),n)}function li(t,e,n=be){return pi(t,e,!0,n)}function Y(t){return t.replace(/^0x/,"")}function le(t){return t.startsWith("0x")?t:`0x${t}`}function ui(t){return t=Y(t),t=ut(t,2),t&&(t=le(t)),t}function _i(t){const e=t.startsWith("0x");return t=Y(t),t=t.startsWith(be)?t.substring(1):t,e?le(t):t}function di(t){return typeof t>"u"}function fi(t){return!di(t)}function hi(t,e){if(!t)throw new Error(e)}function pi(t,e,n,r=be){const o=e-t.length;let i=t;return o>0&&(i=r.repeat(o)+t),i}function me(t){return Z(new Uint8Array(t))}function mi(t){return gn(new Uint8Array(t))}function kn(t,e){return P(new Uint8Array(t),!e)}function gi(t){return vn(new Uint8Array(t))}function vi(...t){return D(t.map(e=>P(new Uint8Array(e))).join("")).buffer}function Cn(t){return G(t).buffer}function yi(t){return ot(t)}function wi(t,e){return rt(t,!e)}function bi(t){return mn(t)}function Ei(...t){return si(...t)}function ki(t){return yn(t).buffer}function Ci(t){return st(t)}function Si(t,e){return Go(t,!e)}function xi(t){return Yo(t)}function Ii(t){return it(t)}function Sn(t){return D(t).buffer}function Ri(t){return Vo(t)}function Ti(t){return Jo(t)}function Oi(t){return Ko(t)}function Ni(t){return Zo(t).buffer}function Mi(t){return ei(t)}function xn(t,e){return Xo(Number(t),!e)}const Li=Zr,qi=Xr,Ai=eo,Ui=to,$i=no,In=Kr,Pi=ro,Rn=Gr,Di=oo,ji=io,Hi=so,ke=Yr;function Ce(t){return ao(t)}function Se(){const t=Ce();return t&&t.os?t.os:void 0}function Tn(){const t=Se();return t?t.toLowerCase().includes("android"):!1}function On(){const t=Se();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function Nn(){return Se()?Tn()||On():!1}function Mn(){const t=Ce();return t&&t.name?t.name.toLowerCase()==="node":!1}function Ln(){return!Mn()&&!!In()}const qn=Br,An=zr;function _t(t,e){const n=An(e),r=ke();r&&r.setItem(t,n)}function dt(t){let e=null,n=null;const r=ke();return r&&(n=r.getItem(t)),e=n&&qn(n),e}function ft(t){const e=ke();e&&e.removeItem(t)}function Pe(){return co()}function Wi(t){return ui(t)}function Fi(t){return le(t)}function Bi(t){return Y(t)}function zi(t){return _i(le(t))}const Un=Qr;function he(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Qi(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function $n(t,e){let n;const r=Ao[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function Pn(t,e){let n;const r=$n(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function Vi(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Ji(t){const e=t.href.split("?")[0];_t($e,Object.assign(Object.assign({},t),{href:e}))}function Dn(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Gi(t,e){let n=t;return e&&(n=e.map(r=>Dn(t,r)).filter(Boolean)),n}function Yi(t,e){return async(...r)=>new Promise((o,i)=>{const s=(l,f)=>{(l===null||typeof l>"u")&&i(l),o(f)};t.apply(e,[...r,s])})}function jn(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const Hn="https://registry.walletconnect.com";function Ki(){return Hn+"/api/v2/wallets"}function Zi(){return Hn+"/api/v2/dapps"}function Wn(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function Xi(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>Wn(n,e))}var ht={};(function(t){const e=_o,n=fo,r=lo,o=uo,i=c=>c==null;function s(c){switch(c.arrayFormat){case"index":return u=>(p,d)=>{const v=p.length;return d===void 0||c.skipNull&&d===null||c.skipEmptyString&&d===""?p:d===null?[...p,[_(u,c),"[",v,"]"].join("")]:[...p,[_(u,c),"[",_(v,c),"]=",_(d,c)].join("")]};case"bracket":return u=>(p,d)=>d===void 0||c.skipNull&&d===null||c.skipEmptyString&&d===""?p:d===null?[...p,[_(u,c),"[]"].join("")]:[...p,[_(u,c),"[]=",_(d,c)].join("")];case"comma":case"separator":return u=>(p,d)=>d==null||d.length===0?p:p.length===0?[[_(u,c),"=",_(d,c)].join("")]:[[p,_(d,c)].join(c.arrayFormatSeparator)];default:return u=>(p,d)=>d===void 0||c.skipNull&&d===null||c.skipEmptyString&&d===""?p:d===null?[...p,_(u,c)]:[...p,[_(u,c),"=",_(d,c)].join("")]}}function l(c){let u;switch(c.arrayFormat){case"index":return(p,d,v)=>{if(u=/\[(\d*)\]$/.exec(p),p=p.replace(/\[\d*\]$/,""),!u){v[p]=d;return}v[p]===void 0&&(v[p]={}),v[p][u[1]]=d};case"bracket":return(p,d,v)=>{if(u=/(\[\])$/.exec(p),p=p.replace(/\[\]$/,""),!u){v[p]=d;return}if(v[p]===void 0){v[p]=[d];return}v[p]=[].concat(v[p],d)};case"comma":case"separator":return(p,d,v)=>{const b=typeof d=="string"&&d.includes(c.arrayFormatSeparator),y=typeof d=="string"&&!b&&m(d,c).includes(c.arrayFormatSeparator);d=y?m(d,c):d;const R=b||y?d.split(c.arrayFormatSeparator).map(N=>m(N,c)):d===null?d:m(d,c);v[p]=R};default:return(p,d,v)=>{if(v[p]===void 0){v[p]=d;return}v[p]=[].concat(v[p],d)}}}function f(c){if(typeof c!="string"||c.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function _(c,u){return u.encode?u.strict?e(c):encodeURIComponent(c):c}function m(c,u){return u.decode?n(c):c}function a(c){return Array.isArray(c)?c.sort():typeof c=="object"?a(Object.keys(c)).sort((u,p)=>Number(u)-Number(p)).map(u=>c[u]):c}function w(c){const u=c.indexOf("#");return u!==-1&&(c=c.slice(0,u)),c}function g(c){let u="";const p=c.indexOf("#");return p!==-1&&(u=c.slice(p)),u}function k(c){c=w(c);const u=c.indexOf("?");return u===-1?"":c.slice(u+1)}function I(c,u){return u.parseNumbers&&!Number.isNaN(Number(c))&&typeof c=="string"&&c.trim()!==""?c=Number(c):u.parseBooleans&&c!==null&&(c.toLowerCase()==="true"||c.toLowerCase()==="false")&&(c=c.toLowerCase()==="true"),c}function S(c,u){u=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},u),f(u.arrayFormatSeparator);const p=l(u),d=Object.create(null);if(typeof c!="string"||(c=c.trim().replace(/^[?#&]/,""),!c))return d;for(const v of c.split("&")){if(v==="")continue;let[b,y]=r(u.decode?v.replace(/\+/g," "):v,"=");y=y===void 0?null:["comma","separator"].includes(u.arrayFormat)?y:m(y,u),p(m(b,u),y,d)}for(const v of Object.keys(d)){const b=d[v];if(typeof b=="object"&&b!==null)for(const y of Object.keys(b))b[y]=I(b[y],u);else d[v]=I(b,u)}return u.sort===!1?d:(u.sort===!0?Object.keys(d).sort():Object.keys(d).sort(u.sort)).reduce((v,b)=>{const y=d[b];return y&&typeof y=="object"&&!Array.isArray(y)?v[b]=a(y):v[b]=y,v},Object.create(null))}t.extract=k,t.parse=S,t.stringify=(c,u)=>{if(!c)return"";u=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},u),f(u.arrayFormatSeparator);const p=y=>u.skipNull&&i(c[y])||u.skipEmptyString&&c[y]==="",d=s(u),v={};for(const y of Object.keys(c))p(y)||(v[y]=c[y]);const b=Object.keys(v);return u.sort!==!1&&b.sort(u.sort),b.map(y=>{const R=c[y];return R===void 0?"":R===null?_(y,u):Array.isArray(R)?R.reduce(d(y),[]).join("&"):_(y,u)+"="+_(R,u)}).filter(y=>y.length>0).join("&")},t.parseUrl=(c,u)=>{u=Object.assign({decode:!0},u);const[p,d]=r(c,"#");return Object.assign({url:p.split("?")[0]||"",query:S(k(c),u)},u&&u.parseFragmentIdentifier&&d?{fragmentIdentifier:m(d,u)}:{})},t.stringifyUrl=(c,u)=>{u=Object.assign({encode:!0,strict:!0},u);const p=w(c.url).split("?")[0]||"",d=t.extract(c.url),v=t.parse(d,{sort:!1}),b=Object.assign(v,c.query);let y=t.stringify(b,u);y&&(y=`?${y}`);let R=g(c.url);return c.fragmentIdentifier&&(R=`#${_(c.fragmentIdentifier,u)}`),`${p}${y}${R}`},t.pick=(c,u,p)=>{p=Object.assign({parseFragmentIdentifier:!0},p);const{url:d,query:v,fragmentIdentifier:b}=t.parseUrl(c,p);return t.stringifyUrl({url:d,query:o(v,u),fragmentIdentifier:b},p)},t.exclude=(c,u,p)=>{const d=Array.isArray(u)?v=>!u.includes(v):(v,b)=>!u(v,b);return t.pick(c,d,p)}})(ht);function Fn(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Bn(t,e){let n=pt(t);return n=Object.assign(Object.assign({},n),e),t=zn(n),t}function pt(t){return ht.parse(t)}function zn(t){return ht.stringify(t)}function Qn(t){return typeof t.bridge<"u"}function Vn(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(a){const g=a.split("@");return{handshakeTopic:g[0],version:parseInt(g[1],10)}}const s=i(o),l=typeof n<"u"?t.substr(n):"";function f(a){const w=pt(a);return{key:w.key||"",bridge:w.bridge||""}}const _=f(l);return Object.assign(Object.assign({protocol:r},s),_)}function es(t){return t===""||typeof t=="string"&&t.trim()===""}function ts(t){return!(t&&t.length)}function ns(t){return Ee(t)}function rs(t){return lt(t)}function os(t){return bn(t)}function is(t){return oi(t)}function ss(t){return ii(t)}function as(t,e){return wn(t,e)}function cs(t){return typeof t.params=="object"}function Jn(t){return typeof t.method<"u"}function Q(t){return typeof t.result<"u"}function oe(t){return typeof t.error<"u"}function De(t){return typeof t.event<"u"}function Gn(t){return Lo.includes(t)||t.startsWith("wc_")}function Yn(t){return t.method.startsWith("wc_")?!0:!Xe.includes(t.method)}const ls=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Fi,appendToQueryString:Bn,concatArrayBuffers:vi,concatBuffers:Ei,convertArrayBufferToBuffer:me,convertArrayBufferToHex:kn,convertArrayBufferToNumber:gi,convertArrayBufferToUtf8:mi,convertBufferToArrayBuffer:Cn,convertBufferToHex:wi,convertBufferToNumber:bi,convertBufferToUtf8:yi,convertHexToArrayBuffer:Sn,convertHexToBuffer:Ii,convertHexToNumber:Ti,convertHexToUtf8:Ri,convertNumberToArrayBuffer:Ni,convertNumberToBuffer:Oi,convertNumberToHex:xn,convertNumberToUtf8:Mi,convertUtf8ToArrayBuffer:ki,convertUtf8ToBuffer:Ci,convertUtf8ToHex:Si,convertUtf8ToNumber:xi,detectEnv:Ce,detectOS:Se,formatIOSMobile:Vi,formatMobileRegistry:Xi,formatMobileRegistryEntry:Wn,formatQueryString:zn,formatRpcError:jn,getClientMeta:Pe,getCrypto:ji,getCryptoOrThrow:Di,getDappRegistryUrl:Zi,getDocument:Ui,getDocumentOrThrow:Ai,getEncoding:ss,getFromWindow:Li,getFromWindowOrThrow:qi,getInfuraRpcUrl:$n,getLocal:dt,getLocalStorage:ke,getLocalStorageOrThrow:Hi,getLocation:Rn,getLocationOrThrow:Pi,getMobileLinkRegistry:Gi,getMobileRegistryEntry:Dn,getNavigator:In,getNavigatorOrThrow:$i,getQueryString:Fn,getRpcUrl:Pn,getType:is,getWalletRegistryUrl:Ki,isAndroid:Tn,isArrayBuffer:os,isBrowser:Ln,isBuffer:ns,isEmptyArray:ts,isEmptyString:es,isHexString:as,isIOS:On,isInternalEvent:De,isJsonRpcRequest:Jn,isJsonRpcResponseError:oe,isJsonRpcResponseSuccess:Q,isJsonRpcSubscription:cs,isMobile:Nn,isNode:Mn,isReservedEvent:Gn,isSilentPayload:Yn,isTypedArray:rs,isWalletConnectSession:Qn,logDeprecationWarning:Qi,parseQueryString:pt,parseWalletConnectUri:Vn,payloadId:Un,promisify:Yi,removeHexLeadingZeros:zi,removeHexPrefix:Bi,removeLocal:ft,safeJsonParse:qn,safeJsonStringify:An,sanitizeHex:Wi,saveMobileLinkInfo:Ji,setLocal:_t,uuid:he},Symbol.toStringTag,{value:"Module"}));class us{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const _s=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class ds{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new us,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=fs(this._url,this._protocol,this._version);if(this._nextSocket=new _s(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function fs(t,e,n){var r,o;const s=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),l=Ln()?{protocol:e,version:n,env:"browser",host:((r=Rn())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=Ce())===null||o===void 0?void 0:o.name)||""},f=Bn(Fn(s[1]||""),l);return s[0]+"?"+f}class hs{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;Jn(e)?r=e.method:Q(e)||oe(e)?r=`response:${e.id}`:De(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!Gn(r)&&!De(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(oe(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class ps{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=dt(this.storageId);return n&&Qn(n)&&(e=n),e}setSession(e){return _t(this.storageId,e),e}removeSession(){ft(this.storageId)}}const ms="walletconnect.org",gs="abcdefghijklmnopqrstuvwxyz0123456789",Kn=gs.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function vs(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function ys(t){return vs(t).split(".").slice(-2).join(".")}function ws(){return Math.floor(Math.random()*Kn.length)}function bs(){return Kn[ws()]}function Es(t){return ys(t)===ms}function ks(t){return Es(t)?bs():t}class Cs{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new hs,this._clientMeta=Pe()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new ps(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...Xe,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(Oo);e.connectorOpts.bridge&&(this.bridge=ks(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new ds({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=Sn(e);this._key=n}get key(){return this._key?kn(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=he()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=Pe()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=he(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(Pt)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(Mo);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(Pt))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(Re);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=he(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(Re);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(Re);const n=e&&e.message?e.message:Co,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(H);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(H);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(H);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(H);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(H);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(H);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,s)=>{if(i){o(i);return}if(!s)throw new Error(So);r(s)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(H);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return xn(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(Q(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(xo)}rejectRequest(e){if(oe(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(Io)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,s=JSON.stringify(o),l=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:Yn(r);this._transport.send(s,i,l)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n);this._transport.send(o,r,!0)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(Ro);return{id:typeof e.id>"u"?Un():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(To);const n={id:e.id,jsonrpc:"2.0"};if(oe(e)){const r=jn(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(Q(e))return Object.assign(Object.assign({},n),e);throw new Error($t)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),ft($e)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}Q(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}Q(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error($t))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(Nn()&&this._signingMethods.includes(r.method)){const o=dt($e);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=Vn(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(No)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function Ss(t){return ie.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const Zn=256,Xn=Zn,xs=Zn,j="AES-CBC",Is=`SHA-${Xn}`,je="HMAC",Rs="encrypt",Ts="decrypt",Os="sign",Ns="verify";function Ms(t){return t===j?{length:Xn,name:j}:{hash:{name:Is},name:je}}function Ls(t){return t===j?[Rs,Ts]:[Os,Ns]}async function mt(t,e=j){return ie.getSubtleCrypto().importKey("raw",t,Ms(e),!0,Ls(e))}async function qs(t,e,n){const r=ie.getSubtleCrypto(),o=await mt(e,j),i=await r.encrypt({iv:t,name:j},o,n);return new Uint8Array(i)}async function As(t,e,n){const r=ie.getSubtleCrypto(),o=await mt(e,j),i=await r.decrypt({iv:t,name:j},o,n);return new Uint8Array(i)}async function Us(t,e){const n=ie.getSubtleCrypto(),r=await mt(t,je),o=await n.sign({length:xs,name:je},r,e);return new Uint8Array(o)}function $s(t,e,n){return qs(t,e,n)}function Ps(t,e,n){return As(t,e,n)}async function er(t,e){return await Us(t,e)}async function tr(t){const e=(t||256)/8,n=Ss(e);return Cn(Z(n))}async function nr(t,e){const n=D(t.data),r=D(t.iv),o=D(t.hmac),i=P(o,!1),s=En(n,r),l=await er(e,s),f=P(l,!1);return Y(i)===Y(f)}async function Ds(t,e,n){const r=G(me(e)),o=n||await tr(128),i=G(me(o)),s=P(i,!1),l=JSON.stringify(t),f=yn(l),_=await $s(i,r,f),m=P(_,!1),a=En(_,i),w=await er(r,a),g=P(w,!1);return{data:m,hmac:g,iv:s}}async function js(t,e){const n=G(me(e));if(!n)throw new Error("Missing key: required for decryption");if(!await nr(t,n))return null;const o=D(t.data),i=D(t.iv),s=await Ps(i,n,o),l=gn(s);let f;try{f=JSON.parse(l)}catch{return null}return f}const Hs=Object.freeze(Object.defineProperty({__proto__:null,decrypt:js,encrypt:Ds,generateKey:tr,verifyHmac:nr},Symbol.toStringTag,{value:"Module"}));class Ws extends Cs{constructor(e,n){super({cryptoLib:Hs,connectorOpts:e,pushServerOpts:n})}}const Fs=Kt(ls);var Bs=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(o){t.addRange(o)}),e&&e.focus()}},zs=Bs,Dt={"text/plain":"Text","text/html":"Url",default:"Text"},Qs="Copy to clipboard: #{key}, Enter";function Vs(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Js(t,e){var n,r,o,i,s,l,f=!1;e||(e={}),n=e.debug||!1;try{o=zs(),i=document.createRange(),s=document.getSelection(),l=document.createElement("span"),l.textContent=t,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(m){if(m.stopPropagation(),e.format)if(m.preventDefault(),typeof m.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=Dt[e.format]||Dt.default;window.clipboardData.setData(a,t)}else m.clipboardData.clearData(),m.clipboardData.setData(e.format,t);e.onCopy&&(m.preventDefault(),e.onCopy(m.clipboardData))}),document.body.appendChild(l),i.selectNodeContents(l),s.addRange(i);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");f=!0}catch(m){n&&console.error("unable to copy using execCommand: ",m),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),f=!0}catch(a){n&&console.error("unable to copy using clipboardData: ",a),n&&console.error("falling back to prompt"),r=Vs("message"in e?e.message:Qs),window.prompt(r,t)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(i):s.removeAllRanges()),l&&document.body.removeChild(l),o()}return f}var Gs=Js;function rr(t,e){for(var n in e)t[n]=e[n];return t}function He(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function ge(t,e){this.props=t,this.context=e}function or(t,e){function n(o){var i=this.props.ref,s=i==o.ref;return!s&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!s:He(this.props,o)}function r(o){return this.shouldComponentUpdate=n,L(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(ge.prototype=new M).isPureReactComponent=!0,ge.prototype.shouldComponentUpdate=function(t,e){return He(this.props,t)||He(this.state,e)};var jt=E.__b;E.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),jt&&jt(t)};var Ys=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ir(t){function e(n){var r=rr({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ys,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var Ht=function(t,e){return t==null?null:U(U(t).map(e))},sr={map:Ht,forEach:Ht,count:function(t){return t?U(t).length:0},only:function(t){var e=U(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:U},Ks=E.__e;E.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}Ks(t,e,n,r)};var Wt=E.unmount;function ar(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=rr({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return ar(r,e,n)})),t}function cr(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return cr(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function te(){this.__u=0,this.t=null,this.__b=null}function lr(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function ur(t){var e,n,r;function o(i){if(e||(e=t()).then(function(s){n=s.default||s},function(s){r=s}),r)throw r;if(!n)throw e;return L(n,i)}return o.displayName="Lazy",o.__f=!0,o}function V(){this.u=null,this.o=null}E.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Wt&&Wt(t)},(te.prototype=new M).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=lr(r.__v),i=!1,s=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=s;var l=function(){if(!--r.__u){if(r.state.__a){var f=r.state.__a;r.__v.__k[0]=cr(f,f.__c.__P,f.__c.__O)}var _;for(r.setState({__a:r.__b=null});_=r.t.pop();)_.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(s,s)},te.prototype.componentWillUnmount=function(){this.t=[]},te.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ar(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&L(q,null,t.fallback);return o&&(o.__u&=-33),[L(q,null,e.__a?null:t.children),o]};var Ft=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Zs(t){return this.getChildContext=function(){return t.context},t.children}function Xs(t){var e=this,n=t.i;e.componentWillUnmount=function(){re(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),re(L(Zs,{context:e.context},t.__v),e.l)}function _r(t,e){var n=L(Xs,{__v:t,i:e});return n.containerInfo=e,n}(V.prototype=new M).__a=function(t){var e=this,n=lr(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),Ft(e,t,r)):o()};n?n(i):i()}},V.prototype.render=function(t){this.u=null,this.o=new Map;var e=U(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Ft(t,n,e)})};var dr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ea=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ta=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,na=/[A-Z0-9]/g,ra=typeof document<"u",oa=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function fr(t,e,n){return e.__k==null&&(e.textContent=""),re(t,e),typeof n=="function"&&n(),t?t.__c:null}function hr(t,e,n){return ln(t,e),typeof n=="function"&&n(),t?t.__c:null}M.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(M.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Bt=E.event;function ia(){}function sa(){return this.cancelBubble}function aa(){return this.defaultPrevented}E.event=function(t){return Bt&&(t=Bt(t)),t.persist=ia,t.isPropagationStopped=sa,t.isDefaultPrevented=aa,t.nativeEvent=t};var gt,ca={enumerable:!1,configurable:!0,get:function(){return this.class}},zt=E.vnode;E.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={},i=r.indexOf("-")===-1;for(var s in n){var l=n[s];if(!(s==="value"&&"defaultValue"in n&&l==null||ra&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var f=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&l===!0?l="":f==="translate"&&l==="no"?l=!1:f[0]==="o"&&f[1]==="n"?f==="ondoubleclick"?s="ondblclick":f!=="onchange"||r!=="input"&&r!=="textarea"||oa(n.type)?f==="onfocus"?s="onfocusin":f==="onblur"?s="onfocusout":ta.test(s)&&(s=f):f=s="oninput":i&&ea.test(s)?s=s.replace(na,"-$&").toLowerCase():l===null&&(l=void 0),f==="oninput"&&o[s=f]&&(s="oninputCapture"),o[s]=l}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=U(n.children).forEach(function(_){_.props.selected=o.value.indexOf(_.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=U(n.children).forEach(function(_){_.props.selected=o.multiple?o.defaultValue.indexOf(_.props.value)!=-1:o.defaultValue==_.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",ca)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=dr,zt&&zt(t)};var Qt=E.__r;E.__r=function(t){Qt&&Qt(t),gt=t.__c};var Vt=E.diffed;E.diffed=function(t){Vt&&Vt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),gt=null};var pr={ReactCurrentDispatcher:{current:{readContext:function(t){return gt.__n[t.__c].props.value},useCallback:Je,useContext:Ge,useDebugValue:Ye,useDeferredValue:yt,useEffect:we,useId:Ke,useImperativeHandle:Ve,useInsertionEffect:bt,useLayoutEffect:K,useMemo:ce,useReducer:ye,useRef:Qe,useState:ae,useSyncExternalStore:Et,useTransition:wt}}},la="17.0.2";function mr(t){return L.bind(null,t)}function ue(t){return!!t&&t.$$typeof===dr}function gr(t){return ue(t)&&t.type===q}function vr(t){return!!t&&!!t.displayName&&(typeof t.displayName=="string"||t.displayName instanceof String)&&t.displayName.startsWith("Memo(")}function yr(t){return ue(t)?wo.apply(null,arguments):t}function wr(t){return!!t.__k&&(re(null,t),!0)}function br(t){return t&&(t.base||t.nodeType===1&&t)||null}var Er=function(t,e){return t(e)},kr=function(t,e){return t(e)},Cr=q;function vt(t){t()}function yt(t){return t}function wt(){return[!1,vt]}var bt=K,Sr=ue;function Et(t,e){var n=e(),r=ae({h:{__:n,v:e}}),o=r[0].h,i=r[1];return K(function(){o.__=n,o.v=e,Te(o)&&i({h:o})},[t,n,e]),we(function(){return Te(o)&&i({h:o}),t(function(){Te(o)&&i({h:o})})},[t]),n}function Te(t){var e,n,r=t.v,o=t.__;try{var i=r();return!((e=o)===(n=i)&&(e!==0||1/e==1/n)||e!=e&&n!=n)}catch{return!0}}var ua={useState:ae,useId:Ke,useReducer:ye,useEffect:we,useLayoutEffect:K,useInsertionEffect:bt,useTransition:wt,useDeferredValue:yt,useSyncExternalStore:Et,startTransition:vt,useRef:Qe,useImperativeHandle:Ve,useMemo:ce,useCallback:Je,useContext:Ge,useDebugValue:Ye,version:"17.0.2",Children:sr,render:fr,hydrate:hr,unmountComponentAtNode:wr,createPortal:_r,createElement:L,createContext:un,createFactory:mr,cloneElement:yr,createRef:rn,Fragment:q,isValidElement:ue,isElement:Sr,isFragment:gr,isMemo:vr,findDOMNode:br,Component:M,PureComponent:ge,memo:or,forwardRef:ir,flushSync:kr,unstable_batchedUpdates:Er,StrictMode:Cr,Suspense:te,SuspenseList:V,lazy:ur,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pr};const _a=Object.freeze(Object.defineProperty({__proto__:null,Children:sr,Component:M,Fragment:q,PureComponent:ge,StrictMode:Cr,Suspense:te,SuspenseList:V,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pr,cloneElement:yr,createContext:un,createElement:L,createFactory:mr,createPortal:_r,createRef:rn,default:ua,findDOMNode:br,flushSync:kr,forwardRef:ir,hydrate:hr,isElement:Sr,isFragment:gr,isMemo:vr,isValidElement:ue,lazy:ur,memo:or,render:fr,startTransition:vt,unmountComponentAtNode:wr,unstable_batchedUpdates:Er,useCallback:Je,useContext:Ge,useDebugValue:Ye,useDeferredValue:yt,useEffect:we,useErrorBoundary:bo,useId:Ke,useImperativeHandle:Ve,useInsertionEffect:bt,useLayoutEffect:K,useMemo:ce,useReducer:ye,useRef:Qe,useState:ae,useSyncExternalStore:Et,useTransition:wt,version:la},Symbol.toStringTag,{value:"Module"})),da=Kt(_a);function xr(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var O=Fs,Ir=xr(ho),fa=xr(Gs),h=da;function ha(t){Ir.toString(t,{type:"terminal"}).then(console.log)}var pa=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function ma(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var ga="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",va="WalletConnect",ya=300,wa="rgb(64, 153, 255)",Rr="walletconnect-wrapper",Jt="walletconnect-style-sheet",Tr="walletconnect-qrcode-modal",ba="walletconnect-qrcode-close",Or="walletconnect-qrcode-text",Ea="walletconnect-connect-button";function ka(t){return h.createElement("div",{className:"walletconnect-modal__header"},h.createElement("img",{src:ga,className:"walletconnect-modal__headerLogo"}),h.createElement("p",null,va),h.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},h.createElement("div",{id:ba,className:"walletconnect-modal__close__icon"},h.createElement("div",{className:"walletconnect-modal__close__line1"}),h.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function Ca(t){return h.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:Ea+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var Sa="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function xa(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return h.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},h.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),h.createElement("div",{className:"walletconnect-modal__base__row__right"},h.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),h.createElement("img",{src:Sa,className:"walletconnect-modal__base__row__right__caret"})))}function Ia(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,s=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return h.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},h.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),h.createElement("div",{style:{fontSize:s},className:"walletconnect-connect__button__text"},r))}var Ra=5,Oe=12;function Ta(t){var e=O.isAndroid(),n=h.useState(""),r=n[0],o=n[1],i=h.useState(""),s=i[0],l=i[1],f=h.useState(1),_=f[0],m=f[1],a=s?t.links.filter(function(d){return d.name.toLowerCase().includes(s.toLowerCase())}):t.links,w=t.errorMessage,g=s||a.length>Ra,k=Math.ceil(a.length/Oe),I=[(_-1)*Oe+1,_*Oe],S=a.length?a.filter(function(d,v){return v+1>=I[0]&&v+1<=I[1]}):[],c=!e&&k>1,u=void 0;function p(d){o(d.target.value),clearTimeout(u),d.target.value?u=setTimeout(function(){l(d.target.value),m(1)},1e3):(o(""),l(""),m(1))}return h.createElement("div",null,h.createElement("p",{id:Or,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&h.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:p}),h.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":g&&a.length?"__wrap":"")},e?h.createElement(Ca,{name:t.text.connect,color:wa,href:t.uri,onClick:h.useCallback(function(){O.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):S.length?S.map(function(d){var v=d.color,b=d.name,y=d.shortName,R=d.logo,N=O.formatIOSMobile(t.uri,d),T=h.useCallback(function(){O.saveMobileLinkInfo({name:b,href:N})},[S]);return g?h.createElement(Ia,{color:v,href:N,name:y||b,logo:R,onClick:T}):h.createElement(xa,{color:v,href:N,name:b,logo:R,onClick:T})}):h.createElement(h.Fragment,null,h.createElement("p",null,w.length?t.errorMessage:t.links.length&&!a.length?t.text.no_wallets_found:t.text.loading))),c&&h.createElement("div",{className:"walletconnect-modal__footer"},Array(k).fill(0).map(function(d,v){var b=v+1,y=_===b;return h.createElement("a",{style:{margin:"auto 10px",fontWeight:y?"bold":"normal"},onClick:function(){return m(b)}},b)})))}function Oa(t){var e=!!t.message.trim();return h.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var Na=function(t){try{var e="";return Promise.resolve(Ir.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function Ma(t){var e=h.useState(""),n=e[0],r=e[1],o=h.useState(""),i=o[0],s=o[1];h.useEffect(function(){try{return Promise.resolve(Na(t.uri)).then(function(f){s(f)})}catch(f){Promise.reject(f)}},[]);var l=function(){var f=fa(t.uri);f?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return h.createElement("div",null,h.createElement("p",{id:Or,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),h.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),h.createElement("div",{className:"walletconnect-modal__footer"},h.createElement("a",{onClick:l},t.text.copy_to_clipboard)),h.createElement(Oa,{message:n}))}function La(t){var e=O.isAndroid(),n=O.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=h.useState(!1),i=o[0],s=o[1],l=h.useState(!1),f=l[0],_=l[1],m=h.useState(!n),a=m[0],w=m[1],g={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},k=h.useState(""),I=k[0],S=k[1],c=h.useState(!1),u=c[0],p=c[1],d=h.useState([]),v=d[0],b=d[1],y=h.useState(""),R=y[0],N=y[1],T=function(){f||i||r&&!r.length||v.length>0||h.useEffect(function(){var Lr=function(){try{if(e)return Promise.resolve();s(!0);var xe=ma(function(){var X=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:O.getWalletRegistryUrl();return Promise.resolve(fetch(X)).then(function(qr){return Promise.resolve(qr.json()).then(function(Ar){var Ur=Ar.listings,$r=n?"mobile":"desktop",_e=O.getMobileLinkRegistry(O.formatMobileRegistry(Ur,$r),r);s(!1),_(!0),N(_e.length?"":t.text.no_supported_wallets),b(_e);var kt=_e.length===1;kt&&(S(O.formatIOSMobile(t.uri,_e[0])),w(!0)),p(kt)})})},function(X){s(!1),_(!0),N(t.text.something_went_wrong),console.error(X)});return Promise.resolve(xe&&xe.then?xe.then(function(){}):void 0)}catch(X){return Promise.reject(X)}};Lr()})};T();var z=n?a:!a;return h.createElement("div",{id:Tr,className:"walletconnect-qrcode__base animated fadeIn"},h.createElement("div",{className:"walletconnect-modal__base"},h.createElement(ka,{onClose:t.onClose}),u&&a?h.createElement("div",{className:"walletconnect-modal__single_wallet"},h.createElement("a",{onClick:function(){return O.saveMobileLinkInfo({name:v[0].name,href:I})},href:I,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(u?v[0].name:"")+" ›")):e||i||!i&&v.length?h.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(z?" right__selected":"")},h.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?h.createElement(h.Fragment,null,h.createElement("a",{onClick:function(){return w(!1),T()}},t.text.mobile),h.createElement("a",{onClick:function(){return w(!0)}},t.text.qrcode)):h.createElement(h.Fragment,null,h.createElement("a",{onClick:function(){return w(!0)}},t.text.qrcode),h.createElement("a",{onClick:function(){return w(!1),T()}},t.text.desktop))):null,h.createElement("div",null,a||!e&&!i&&!v.length?h.createElement(Ma,Object.assign({},g)):h.createElement(Ta,Object.assign({},g,{links:v,errorMessage:R})))))}var qa={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},Aa={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},Ua={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},$a={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},Pa={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},Da={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},ja={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},Ha={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},Gt={de:qa,en:Aa,es:Ua,fr:$a,ko:Pa,pt:Da,zh:ja,fa:Ha};function Wa(){var t=O.getDocumentOrThrow(),e=t.getElementById(Jt);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",Jt),n.innerText=pa,t.head.appendChild(n)}function Fa(){var t=O.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",Rr),t.body.appendChild(e),e}function Nr(){var t=O.getDocumentOrThrow(),e=t.getElementById(Tr);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(Rr);n&&t.body.removeChild(n)},ya))}function Ba(t){return function(){Nr(),t&&t()}}function za(){var t=O.getNavigatorOrThrow().language.split("-")[0]||"en";return Gt[t]||Gt.en}function Qa(t,e,n){Wa();var r=Fa();h.render(h.createElement(La,{text:za(),uri:t,onClose:Ba(e),qrcodeModalOptions:n}),r)}function Va(){Nr()}var Mr=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Ja(t,e,n){console.log(t),Mr()?ha(t):Qa(t,e,n)}function Ga(){Mr()||Va()}var Ya={open:Ja,close:Ga},Ka=Ya;const Za=We(Ka);class Xa extends Vr{constructor(e){super(),this.events=new Yt,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",Ct(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?Za:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new Ws(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?Ct(e.id,e.error.message,e.error.data):e}}class nc{constructor(e){this.events=new Yt,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new Ut(new Xa(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(Xe.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=Pn(e,this.rpc);return typeof n>"u"?void 0:new Ut(new Jr(n))}}export{nc as default};
