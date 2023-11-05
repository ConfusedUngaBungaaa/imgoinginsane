export function $(t){const e=[...document.querySelectorAll(t)];return e.addEventListener=(...t)=>{for(const n of e)n.addEventListener(...t)},e.removeEventListener=(...t)=>{for(const n of e)n.removeEventListener(...t)},e.el=e[0],e.on=e.addEventListener,e.off=e.removeEventListener,e}export function $1(t){return document.querySelector(t)}export function $el(t,e){const n=document.createElement(t);if(e.content&&(n.innerText=e.content),e.attrs)for(const[t,r]of Object.entries(e.attrs))n.setAttribute(t,r);if(e.data)for(const[t,r]of Object.entries(e.data))n.setAttribute(`data-${t}`,r);if(e.class&&n.classList.add(e.class),e.classes)for(const t of e.classes)n.classList.add(t);if(e.id&&(n.id=e.id),e.style){n.style="";for(const[t,r]of Object.entries(e.style))n.style[t]=r}return e.child&&n.appendChild(e.child),e.children&&n.append(...e.children),n}EventTarget.prototype.on=EventTarget.prototype.addEventListener,EventTarget.prototype.off=EventTarget.prototype.removeEventListener,EventTarget.prototype.once=function(t,e,n){const r=function(o){e.call(this,o),this.removeEventListener(t,r,n)};this.addEventListener(t,r,n)};const urlResolver=document.createElement("a");export function $url(t){return urlResolver.href=t,urlResolver.href}export async function $download(t,e){var n=document.createElement("a");const r=await(await fetch(t)).blob();n.href=URL.createObjectURL(r),n.download=e,n.click()}export function $shuffle(t){let e,n=t.length;for(;0!=n;)e=Math.floor(Math.random()*n),n--,[t[n],t[e]]=[t[e],t[n]];return t}export async function $req(t){const e=t.match(/(?<=\.)[^.]*$/)?.[0]??"";return/^json$/i.test(e)?await(await fetch(t)).json():await(await fetch(t)).text()}export function $hsv2rgb(t){if(!(t instanceof Array))throw"hsv must be array";const[e,n,r]=[$fmod(t[0],360),$clamp(t[1],100)/100,$clamp(t[2],100)/100],o=r*n,c=o*(1-Math.abs(e/60%2-1)),s=r-o;let a=[0,0,0];const i=e/60|0;let f=i/2|0,l=(f+1)%3;i%2&&([f,l]=[l,f]),a[f]=o,a[l]=c;const u=a.map((t=>255*(t+s)));return u.toString=function(){return`#${this.map((t=>(0|t).toString(16).padStart(2,"0"))).join("")}`},u}export function $clamp(t,e,n=0){const[r,o]=e<n?[e,n]:[n,e];return t>=o?o:t<=r?r:t}export function $fmod(t,e){return t-e*Math.floor(t/e)}export function $time(){return performance.now()/1e3}export function $remap(t,e,n=[0,1]){return n[0]+(t-e[0])/(e[1]-e[0])*(n[1]-n[0])}export function $sleep(t=0){return new Promise((e=>setTimeout(e,1e3*t)))}