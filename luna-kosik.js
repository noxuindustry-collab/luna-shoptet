/* Luna Beauty Studio – nákupní košík (styl + rozložení). Načítá se z HTML kódu Zápatí. Diagnostika: /kosik/#ldbg */
(function(){
if(!/kosik|objednavka/.test(location.pathname))return;
var css="html.lc-on :is(.lc-help,.lc-hide,.lc-av),html.lc-on .lc-t thead{display:none!important}\n.lc-steps{display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;margin:clamp(20px,3vw,36px) 0 28px;font:500 15px/1.4 \"Montserrat Alternates\",sans-serif;color:rgba(58,44,43,.5)}\n.lc-steps svg{flex:none;opacity:.8}\n.lc-steps [aria-current]{color:#3a2c2b;font-weight:600}\n.lc-top{margin:0 0 32px}\n.lc-title{font:400 clamp(40px,5vw,64px)/1.05 \"Gilda Display\",serif;color:#3a2c2b;margin:0 0 10px}\n.lc-cnt{font:500 15px/1.6 \"Montserrat Alternates\",sans-serif;color:rgba(58,44,43,.7);margin:0!important}\n.lc-h,:is(#lc,html.lc-on) .lc-r{display:grid!important;grid-template-columns:96px minmax(0,1fr) 140px 120px 32px;column-gap:20px}\n.lc-h{padding:0 0 14px;border-bottom:1px solid #eadfd3;font:600 11px/1 \"Montserrat Alternates\",sans-serif;letter-spacing:.12em;text-transform:uppercase;color:rgba(58,44,43,.6)}\n.lc-h span:first-child{grid-column:1/3}\n.lc-h span:nth-child(2){text-align:center}\n.lc-h span:last-child{text-align:right}\n:is(#lc,html.lc-on) :is(.lc-t,.lc-t tbody){display:block!important;width:100%!important;border:0!important;margin:0!important;background:none!important}\n:is(#lc,html.lc-on) .lc-r{grid-template-areas:\"i n q t x\" \"i p q t x\";align-items:center;row-gap:4px;padding:20px 0!important;border:0!important;border-bottom:1px solid #eadfd3!important;background:none!important}\n:is(#lc,html.lc-on) .lc-r *{text-transform:none!important;letter-spacing:0!important}\n:is(#lc,html.lc-on) .lc-r>*{display:block;min-width:0;width:auto!important;padding:0!important;margin:0!important;border:0!important;background:none!important;text-align:left}\n:is(#lc,html.lc-on) .lc-r>:not(.lc-img,.lc-n,.lc-pr,.lc-q,.lc-tot,.lc-x){display:none!important}\n:is(#lc,html.lc-on) .lc-img{grid-area:i;display:grid!important;place-items:center;width:96px!important;height:96px!important;border-radius:18px;background:#f2f1ef!important;overflow:hidden}\n:is(#lc,html.lc-on) .lc-img a{display:grid;place-items:center;width:100%;height:100%}\n:is(#lc,html.lc-on) .lc-img img{width:84%!important;height:84%!important;max-width:none!important;object-fit:contain;mix-blend-mode:multiply}\n:is(#lc,html.lc-on) .lc-n{grid-area:n;align-self:end;font:500 12px/1.5 \"Montserrat Alternates\",sans-serif!important;color:rgba(58,44,43,.6)!important}\n:is(#lc,html.lc-on) .lc-n *{font:inherit!important;color:inherit!important;text-transform:none!important}\n:is(#lc,html.lc-on) .lc-n a{display:block;margin-bottom:2px;font:600 16px/1.35 \"Montserrat Alternates\",sans-serif!important;color:#3a2c2b!important;text-decoration:none!important}\n:is(#lc,html.lc-on) .lc-pr{grid-area:p;align-self:start;font:500 13px/1.5 \"Montserrat Alternates\",sans-serif!important;color:rgba(58,44,43,.6)!important}\n:is(#lc,html.lc-on) .lc-pr *{font:inherit!important;color:inherit!important}\n:is(#lc,html.lc-on) .lc-q{grid-area:q;justify-self:center}\n:is(#lc,html.lc-on) .lc-q form{margin:0!important}\n:is(#lc,html.lc-on) .lc-q{position:relative!important}\n:is(#lc,html.lc-on) .lc-q .quantity{position:absolute!important;left:0!important;top:0!important;width:1px!important;height:1px!important;margin:0!important;padding:0!important;border:0!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important;clip:rect(0 0 0 0)!important}\n.lc-qty{display:inline-flex;align-items:center;gap:2px;height:46px;padding:0 5px;border:1px solid rgba(58,44,43,.2);border-radius:100px;background:#fff;box-sizing:border-box}\n.lc-qty button{display:grid!important;place-items:center;width:34px!important;height:34px!important;min-width:0!important;margin:0!important;padding:0 0 2px!important;border:0!important;border-radius:50%!important;background:transparent!important;box-shadow:none!important;color:#3a2c2b!important;font:400 20px/1 \"Montserrat Alternates\",sans-serif!important;text-transform:none!important;cursor:pointer;transition:background .2s;transform:none!important}\n.lc-qty button:hover{background:#f2f1ef!important}\n.lc-qty button::before,.lc-qty button::after{content:none!important;display:none!important}\n.lc-v{min-width:30px;text-align:center;font:600 15px/1 \"Montserrat Alternates\",sans-serif;color:#3a2c2b}\n:is(#lc,html.lc-on) .lc-tot{grid-area:t;text-align:right!important;white-space:nowrap;font:600 18px/1.2 \"Montserrat Alternates\",sans-serif!important;color:#3a2c2b!important}\n:is(#lc,html.lc-on) .lc-tot *{font:inherit!important;color:inherit!important}\n:is(#lc,html.lc-on) .lc-x{grid-area:x;justify-self:end}\n:is(#lc,html.lc-on) .lc-x :is(button,a){display:grid!important;place-items:center;width:32px!important;height:32px!important;padding:0!important;border:0!important;border-radius:50%!important;background:transparent!important;color:#3a2c2b!important;font-size:0!important;cursor:pointer;transition:background .2s}\n:is(#lc,html.lc-on) .lc-x :is(button,a) *{display:none!important}\n:is(#lc,html.lc-on) .lc-x :is(button,a)::before{content:\"×\"!important;display:block!important;font:400 22px/1 \"Montserrat Alternates\",sans-serif;color:#3a2c2b}\n:is(#lc,html.lc-on) .lc-x :is(button,a):hover{background:#f2f1ef!important}\n:is(#lc,html.lc-on) .lc-sum{padding:28px!important;border:1px solid rgba(58,44,43,.08)!important;border-radius:24px!important;background:#fdf6ea!important;box-shadow:none!important}\n:is(#lc,html.lc-on) .lc-sum *{font-family:\"Montserrat Alternates\",sans-serif!important}\n:is(#lc,html.lc-on) .lc-sum .lc-sh{display:block!important;margin:0 0 20px!important;font:400 28px/1.15 \"Gilda Display\",serif!important;color:#3a2c2b}\n:is(#lc,html.lc-on) .lc-row{display:flex!important;justify-content:space-between;align-items:baseline;gap:12px;margin:0 0 20px!important;padding:18px 0!important;border-top:1px solid rgba(58,44,43,.12)!important;border-bottom:1px solid rgba(58,44,43,.12)!important;font-size:15px!important;font-weight:500!important;color:#3a2c2b!important;text-transform:none!important}\n:is(#lc,html.lc-on) .lc-row>:last-child{font-size:28px!important;font-weight:600!important;line-height:1!important;color:#3a2c2b!important}\n:is(#lc,html.lc-on) .lc-ns{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:14px!important;margin:0!important;padding:0!important;border:0!important}\n:is(#lc,html.lc-on) .lc-go{order:1;box-sizing:border-box!important;display:flex!important;align-items:center;justify-content:center;gap:10px;width:100%!important;height:56px!important;margin:0!important;padding:0 24px!important;border:0!important;border-radius:100px!important;background:#3a2c2b!important;color:#fdf6ea!important;font-size:15px!important;font-weight:600!important;letter-spacing:.01em!important;text-transform:none!important;text-decoration:none!important}\n:is(#lc,html.lc-on) .lc-go:hover{background:#4d3b39!important}\n:is(#lc,html.lc-on) .lc-back{order:2;align-self:center;display:inline-flex!important;align-items:center;gap:8px;margin:0!important;padding:6px 0!important;border:0!important;background:none!important;font-size:13px!important;font-weight:600!important;text-transform:none!important;letter-spacing:0!important;color:#3a2c2b!important;text-decoration:none!important}\n:is(#lc,html.lc-on) .lc-back::before{content:\"←\";font-size:16px}\n.lc-col{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:16px!important}\n.lc-col>.lc-sum,.lc-col>.lc-trust{flex:none!important;width:auto!important;max-width:none!important;float:none!important}\nhtml.lc-on .lc-trust{display:flex!important;gap:14px;align-items:flex-start;margin:16px 0 0!important;padding:20px!important;border-radius:20px;background:#f7e8d0!important;color:#3a2c2b!important;text-align:left!important}\nhtml.lc-on .lc-trust *{font-family:\"Montserrat Alternates\",sans-serif!important;letter-spacing:0!important;text-transform:none!important}\nhtml.lc-on .lc-ic{flex:none;display:grid!important;place-items:center;width:34px;height:34px;border-radius:50%;background:#3a2c2b;color:#f5c98a!important}\nhtml.lc-on .lc-trust b{display:block;margin:0 0 4px!important;font-size:12px!important;line-height:1.4!important;font-weight:700!important;letter-spacing:.1em!important;text-transform:uppercase!important;color:#3a2c2b!important}\nhtml.lc-on .lc-trust p{margin:0 0 8px!important;font-size:13px!important;line-height:1.6!important;font-weight:500!important;color:rgba(58,44,43,.8)!important}\nhtml.lc-on .lc-trust a{font-size:13px!important;line-height:1.6!important;font-weight:600!important;color:#7a4a4a!important;text-decoration:none!important}\nhtml.lc-narrow .lc-h{display:none!important}\n:is(#lc,html.lc-narrow) .lc-r{grid-template-columns:80px minmax(0,1fr) auto!important;grid-template-areas:\"i n x\" \"i p p\" \"i q t\"!important;column-gap:16px!important;row-gap:6px!important}\n:is(#lc,html.lc-narrow) .lc-img{width:80px!important;height:80px!important;border-radius:14px;align-self:start}\n:is(#lc,html.lc-narrow) .lc-q{justify-self:start;margin-top:8px!important}\n:is(#lc,html.lc-narrow) .lc-tot{align-self:center;margin-top:8px!important}\n@media(max-width:768px){\n.lc-steps{font-size:14px;gap:4px 10px}\n.lc-h{display:none!important}\n:is(#lc,html.lc-on) .lc-r{grid-template-columns:76px minmax(0,1fr) auto;grid-template-areas:\"i n x\" \"i p p\" \"q q t\";column-gap:14px;row-gap:6px}\n:is(#lc,html.lc-on) .lc-img{width:76px!important;height:76px!important;border-radius:14px}\n:is(#lc,html.lc-on) .lc-q{justify-self:start;margin-top:10px!important}\n:is(#lc,html.lc-on) .lc-tot{margin-top:10px!important}\n:is(#lc,html.lc-on) .lc-sum{padding:22px!important}\n}\nhtml.lc-on,html.lc-on body{background:#fff!important}\nhtml.lo-on .lo-hide{display:none!important}\nhtml.lo-on .lo-top{margin:0 0 8px}\nhtml.lo-on .lo-sec-h{display:block!important;margin:36px 0 16px!important;padding:0!important;border:0!important;background:none!important;text-align:left!important;text-transform:none!important;letter-spacing:0!important;font:400 28px/1.2 \"Gilda Display\",serif!important;color:#3a2c2b!important}\nhtml.lo-on .lo-tb,html.lo-on .lo-tb>tbody{display:block!important;width:100%!important;border:0!important;background:none!important}\nhtml.lo-on .lo-opt{display:flex!important;flex-wrap:nowrap!important;align-items:center;gap:6px 16px;width:auto!important;margin:0 0 12px!important;padding:18px 20px!important;border:1px solid rgba(58,44,43,.15)!important;border-radius:18px!important;background:#fff!important;box-shadow:none!important;cursor:pointer;transition:border-color .2s,background .2s,box-shadow .2s;text-align:left!important}\nhtml.lo-on .lo-opt:hover{border-color:rgba(58,44,43,.4)!important}\nhtml.lo-on .lo-opt.is-sel{border-color:#3a2c2b!important;box-shadow:inset 0 0 0 1px #3a2c2b!important;background:#fdf6ea!important}\nhtml.lo-on .lo-opt>*{border:0!important;padding:0!important;background:none!important;width:auto!important}\nhtml.lo-on .lo-opt *{font-family:\"Montserrat Alternates\",sans-serif!important;text-transform:none!important;letter-spacing:0!important;color:#3a2c2b!important}\nhtml.lo-on .lo-opt :is(b,strong,label,.name,[class*=\"name\"]){font-size:15px!important;font-weight:600!important}\nhtml.lo-on .lo-opt :is(small,p,.description,[class*=\"desc\"],[class*=\"info\"]){font-size:13px!important;font-weight:500!important;color:rgba(58,44,43,.65)!important}\nhtml.lo-on .lo-opt input[type=\"radio\"]{accent-color:#3a2c2b;width:20px;height:20px;margin:0!important;flex:none}\nhtml.lo-on .lo-ship img{display:none!important}\nhtml.lo-on .lo-pay img{max-height:26px!important;width:auto!important}\n.lo-ic{flex:none;display:inline-grid!important;place-items:center;width:42px;height:42px;margin:0 4px 0 0;border-radius:50%;background:#f7e8d0;color:#3a2c2b;vertical-align:middle}\nhtml.lo-on .lo-note{display:block;margin:0 0 12px!important;padding:16px 20px!important;border-radius:16px;background:#fdf6ea;font:500 14px/1.5 \"Montserrat Alternates\",sans-serif!important;color:#7a4a4a!important}\n:is(#lc,html.lo-on) .lc-sum .lo-rh,html.lo-on .lo-rh{display:block!important;margin:0 0 18px!important;font:400 28px/1.15 \"Gilda Display\",serif!important;text-transform:none!important;letter-spacing:0!important;color:#3a2c2b!important}\nhtml.lo-on .lc-sum table{width:100%!important;border:0!important;border-collapse:collapse}\nhtml.lo-on .lc-sum :is(td,th){padding:10px 0!important;border:0!important;border-bottom:1px solid rgba(58,44,43,.1)!important;background:none!important;font-size:14px!important;font-weight:500!important;color:#3a2c2b!important;text-transform:none!important;letter-spacing:0!important;vertical-align:middle}\nhtml.lo-on .lc-sum :is(td,th)+:is(td,th){padding-left:12px!important;text-align:right!important;white-space:nowrap}\nhtml.lo-on .lc-sum a{color:#3a2c2b!important;text-decoration:none!important;text-transform:none!important}\nhtml.lo-on .lc-sum *{text-transform:none!important;letter-spacing:0!important}\nhtml.lo-on .lo-opt .lo-ic{display:inline-grid!important;width:42px!important;height:42px!important;padding:0!important;border-radius:50%!important;background:#f7e8d0!important}\nhtml.lo-on .lc-sum .lc-row{margin-top:8px!important}\nhtml.lo-on .lo-flat{padding-left:0!important;padding-right:0!important;margin-left:0!important;margin-right:0!important;max-width:none!important;width:auto!important;float:none!important}\nhtml.lo-on .lo-sec-h::before,html.lo-on .lo-sec-h::after{content:none!important;display:none!important}\nhtml.lo-on .lo-opt [class*=\"tooltip\"]:not(.lo-desc){display:none!important}\nhtml.lo-on .lo-opt .lo-grow{flex:1 1 auto!important;min-width:0!important}\nhtml.lo-on .lo-opt .lo-line{display:flex!important;flex-wrap:wrap!important;align-items:center!important;gap:2px 12px!important}\nhtml.lo-on .lo-opt .lo-price{order:2;margin-left:auto!important;font-size:15px!important;font-weight:600!important;white-space:nowrap}\nhtml.lo-on .lo-opt .lo-desc{order:3;flex-basis:100%;display:block;font-size:13px!important;font-weight:500!important;line-height:1.5!important;color:rgba(58,44,43,.65)!important}\nhtml.lo-on .lo-rh::before,html.lo-on .lo-rh::after{content:none!important;display:none!important}\nhtml.lo-on .lo-fb{padding-bottom:0!important;margin-bottom:0!important;min-height:0!important}\nhtml.lo-on .lo-ft{padding-top:0!important;margin-top:0!important;min-height:0!important}\nhtml.lo-on .lo-ft>.lo-sec-h,html.lo-on .lo-sec-h+*{margin-top:0}\n";
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function nm(e){return e&&e.tagName?e.tagName.toLowerCase()+(e.id?'#'+e.id:'')+(typeof e.className=='string'&&e.className.trim()?'.'+e.className.trim().split(/\s+/).join('.'):''):'-';}
function tx(re,sel){var l=document.querySelectorAll(sel||'body *');for(var i=0;i<l.length;i++){var e=l[i];if(e.children.length<2&&!e.closest('.lh,script,style,.lc-trust,.lc-steps,#ldbg')&&re.test((e.textContent||'').trim()))return e;}return null;}
function up(e,stop){while(e&&e.parentNode&&e.parentNode!==document.body&&!e.parentNode.contains(stop))e=e.parentNode;return e;}
function num(s){var m=(s||'').split('/')[0].replace(/\s|&nbsp;/g,'').match(/(\d+(?:[.,]\d+)?)/);return m?parseFloat(m[1].replace(',','.')):0;}
function fmt(n){return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,'\u00a0')+'\u00a0Kč';}

function wb(el){for(var e=el&&el.parentElement;e&&e!==document.documentElement;e=e.parentElement){if(e.closest('.lh'))continue;var c=(getComputedStyle(e).backgroundColor.match(/[\d.]+/g)||[]);if(c.length>2&&(c[3]==null||+c[3]>0)&&!(+c[0]>250&&+c[1]>250&&+c[2]>250)&&!/lc-sum|lc-trust|lo-opt/.test(e.className))e.style.setProperty('background','#fff','important');}}
var IC={pin:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',card:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18M7 15h4"/>',bank:'<path d="M3 10h18L12 4 3 10zM5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>'};
function ic(k){return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC[k]+'</svg>';}
function lo(){
var hs=tx(/^Zvolte zp.sob dopravy|^Jak chcete poukaz/i),hp2=tx(/^Zvolte zp.sob platby|^Jak chcete zaplatit/i);
var rs=document.querySelectorAll('input[type="radio"]');if(!hs)return;
document.documentElement.classList.add('lc-on','lo-on');
if(hs){hs.classList.add('lo-sec-h');if(!/^Jak/.test(hs.textContent.trim()))hs.textContent='Jak chcete poukaz převzít?';}
if(hp2){hp2.classList.add('lo-sec-h');if(!/^Jak/.test(hp2.textContent.trim()))hp2.textContent='Jak chcete zaplatit?';}
var stop=[hs,hp2].filter(Boolean);
for(var i=0;i<rs.length;i++){
var rd=rs[i];if(rd.closest('.lh,.lc-sum'))continue;
var isPay=/bill|pay|plat/i.test(rd.name)||(hp2&&(hp2.compareDocumentPosition(rd)&4)&&!/ship|doprav|deliver/i.test(rd.name));
var e=rd;while(e.parentElement&&e.parentElement!==document.body){var pe=e.parentElement,bad=pe.querySelectorAll('input[type="radio"]').length>1;for(var z=0;z<stop.length;z++)if(pe.contains(stop[z]))bad=true;if(bad)break;e=pe;}
var tb=e.closest('table');if(tb)tb.classList.add('lo-tb');
if(!e.classList.contains('lo-opt')){e.classList.add('lo-opt',isPay?'lo-pay':'lo-ship');
var txt=e.textContent||'',k=isPay?(/p.evod|bank/i.test(txt)?'bank':'card'):(/mail|pdf|elektron/i.test(txt)?'mail':'pin');
var sp=document.createElement('span');sp.className='lo-ic';sp.innerHTML=ic(k);rd.parentNode.insertBefore(sp,rd.nextSibling);}
e.classList.toggle('is-sel',rd.checked);
}
if(hs&&hp2){var ca=hs.parentElement;while(ca&&!ca.contains(hp2))ca=ca.parentElement;[hs,hp2].forEach(function(h,hi){for(var f=h.parentElement;f&&f!==ca;f=f.parentElement)f.classList.add('lo-flat',hi?'lo-ft':'lo-fb');});
var keep=function(x){return x.contains(hs)||x.contains(hp2)||x.querySelector('.lo-opt,input,select,textarea,button,.lc-steps,.lc-top')||x.closest('.lo-opt,.lc-steps,.lc-top')||(x.textContent||'').trim();};
var A=hs;while(A&&A.parentElement!==ca)A=A.parentElement;var B=hp2;while(B&&B.parentElement!==ca)B=B.parentElement;
if(A&&B){for(var sbl=A.nextElementSibling;sbl&&sbl!==B;sbl=sbl.nextElementSibling)if(!keep(sbl))sbl.classList.add('lo-hide');
var inA=A.querySelectorAll('*');for(var ia=0;ia<inA.length;ia++){var y=inA[ia];if(y.closest('.lo-hide'))continue;if(!keep(y)&&y.offsetHeight>16)y.classList.add('lo-hide');}}}
var ops=document.querySelectorAll('.lo-opt');for(var oi=0;oi<ops.length;oi++){var op=ops[oi];if(op.querySelector('.lo-price'))continue;
var lv=op.querySelectorAll('*'),pz=null;for(var li=lv.length-1;li>=0;li--){var lf=lv[li];if(lf.children.length===0&&/^(zdarma|[\d\s.,]+\s*K.)$/i.test((lf.textContent||'').trim())){pz=lf;break;}}
if(pz){pz.classList.add('lo-price');if(/^zdarma$/i.test(pz.textContent.trim()))pz.textContent='Zdarma';var pp=pz.parentElement;if(pp&&pp!==op){pp.classList.add('lo-line');for(var g=pp;g&&g.parentElement!==op&&g!==op;g=g.parentElement)g.parentElement.classList.add('lo-grow');pp.classList.add('lo-grow');}}
var tt2=op.querySelector('[class*="tooltip"],[data-original-title],[title]:not(a):not(img)');if(tt2&&!op.querySelector('.lo-desc')){var dsc=(tt2.getAttribute('data-original-title')||tt2.getAttribute('title')||tt2.getAttribute('data-content')||'').replace(/<[^>]+>/g,' ').trim();if(dsc){var dd=document.createElement('span');dd.className='lo-desc';dd.textContent=dsc;(pz&&pz.parentElement!==op?pz.parentElement:op).appendChild(dd);}}
}
var nt=tx(/kombinace dopravy a platby nen/i);if(nt)nt.classList.add('lo-note');
if(!document.querySelector('.lc-steps')&&hs){
var cb0=document.getElementById('continue-order-button')||tx(/^Pokračovat/i,'a,button'),lb0=tx(/^Celkem k .hrad/i)||tx(/^Celkem za zbo/i);
var both=function(x){var tt=x.textContent||'';return /N.kupn. ko..k/i.test(tt)&&/Informace o v.s/i.test(tt)&&!x.contains(hs)&&!(cb0&&x.contains(cb0))&&!(lb0&&x.contains(lb0))&&(x.compareDocumentPosition(hs)&4)&&!x.closest('.lh,.lc-sum,.lc-steps,script,style');};
var sb=null,al=document.querySelectorAll('body *');for(var a=0;a<al.length;a++){var x=al[a];if(both(x)&&![].some.call(x.children,both)){sb=x;break;}}
if(sb)sb.classList.add('lo-hide');
var ch='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';
var ns=document.createElement('nav');ns.className='lc-steps';ns.setAttribute('aria-label','Kroky objednávky');
ns.innerHTML='<a href="/kosik/" style="color:inherit;text-decoration:none">Košík</a>'+ch+'<span aria-current="step">Doprava a platba</span>'+ch+'<span>Informace o vás</span>';
var tp=document.createElement('div');tp.className='lc-top lo-top';tp.innerHTML='<div class="lc-title" role="heading" aria-level="1">Doprava a platba</div><p class="lc-cnt">Vyberte, jak chcete poukaz převzít a zaplatit.</p>';
hs.parentNode.insertBefore(ns,hs);hs.parentNode.insertBefore(tp,hs);
}
var lb=tx(/^Celkem k .hrad/i)||tx(/^Celkem za zbo/i),cb=document.getElementById('continue-order-button')||tx(/^Pokračovat/i,'a,button');
if(lb&&cb){var sm=cb.parentNode;while(sm&&!sm.contains(lb))sm=sm.parentNode;
if(sm&&sm!==document.body&&!(hs&&sm.contains(hs))){
sm.classList.add('lc-sum');cb.classList.add('lc-go');cb.parentNode.classList.add('lc-ns');if(lb.parentNode!==sm)lb.parentNode.classList.add('lc-row');
var bk=tx(/^Zpět( do obchodu)?$/i,'a,button');if(bk)bk.classList.add('lc-back');
var rh=tx(/^Rekapitulace objedn/i);if(rh){rh.classList.add('lo-rh');if(rh.textContent.trim()!=='Shrnutí objednávky')rh.textContent='Shrnutí objednávky';}
var hp=tx(/^Potřebujete pomoc/i);if(hp)up(hp,lb).classList.add('lc-help');
wb(sm);}}
var cb1=document.getElementById('continue-order-button')||tx(/^Pokračovat/i,'a,button');if(cb1){var hh=document.querySelectorAll('.lo-hide,.lc-help');for(var hi2=0;hi2<hh.length;hi2++)if(hh[hi2].contains(cb1))hh[hi2].classList.remove('lo-hide','lc-help');}
if(hs)wb(hs);
}
function lc(){
if(!/kosik/.test(location.pathname))return;
var t=document.querySelector('.lc-t');
if(!t){var al0=document.querySelectorAll('input[name="amount"]'),bc=0;for(var i0=0;i0<al0.length;i0++){var tb=al0[i0].closest('table');if(tb&&tb.getClientRects().length&&!tb.closest('.lh')){var cnt=tb.querySelectorAll('input[name="amount"]').length;if(cnt>bc){bc=cnt;t=tb;}}}}
if(!t)return;
document.documentElement.classList.add('lc-on');t.classList.add('lc-t');
document.documentElement.classList.toggle('lc-narrow',t.getBoundingClientRect().width<700);
var q=t.querySelectorAll('input[name="amount"]'),n=0,seen=[];
for(var i=0;i<q.length;i++){
var r=q[i].closest('tr');if(!r||seen.indexOf(r)>-1)continue;seen.push(r);
n+=+q[i].value||0;
if(!r.classList.contains('lc-r')){
r.classList.add('lc-r');
var td=r.children,tot=[],has={};
for(var j=0;j<td.length;j++){
var c=td[j],s=c.textContent||'',k='';
if(!has.i&&c.querySelector('img'))k='lc-img';
else if(!has.q&&c.querySelector('input[name="amount"]'))k='lc-q';
else if(c.querySelector('input[name="amount"]'))k='';
else if(!has.n&&c.querySelector('a[href]')&&s.trim())k='lc-n';
else if(/\/\s*ks/.test(s))k='lc-pr';
else if(/skladem|dostupn/i.test(s)||/availab/.test(c.className))k='lc-av';
else if(/\d/.test(s)){k='lc-tot';tot.push(c);}
if(k){c.classList.add(k);has[k.charAt(3)]=1;}
}
if(tot.length>1)tot[0].classList.replace('lc-tot','lc-pr');
}
var qc=r.querySelector('.lc-q');
if(qc){var w=qc.querySelector('.lc-qty');
if(!w){w=document.createElement('div');w.className='lc-qty';w.innerHTML='<button type="button" class="lc-m" aria-label="Odebrat kus">−</button><span class="lc-v"></span><button type="button" class="lc-p" aria-label="Přidat kus">+</button>';qc.appendChild(w);}
var vv=String(+q[i].value||0),vs=w.querySelector('.lc-v');if(vs.textContent!==vv)vs.textContent=vv;}
if(!r.querySelector('.lc-xo')){var xo=document.createElement('td');xo.className='lc-x lc-xo';xo.innerHTML='<button type="button" class="lc-del" aria-label="Odebrat z košíku" title="Odebrat z košíku"></button>';r.appendChild(xo);}
var tc=r.querySelector('.lc-tot:not(.lc-own)'),own=r.querySelector('.lc-own'),pr=r.querySelector('.lc-pr');
if((!tc||!tc.offsetParent||!/\d/.test(tc.textContent))&&pr){
if(!own){own=document.createElement('td');own.className='lc-tot lc-own';r.appendChild(own);}
var v2=fmt(num(pr.textContent)*(+q[i].value||0));if(own.textContent!==v2)own.textContent=v2;
}else if(own)own.remove();
}
if(!document.querySelector('.lc-h')){
var hd=document.createElement('div');hd.className='lc-h';
hd.innerHTML='<span>Produkt</span><span>Množství</span><span>Mezisoučet</span>';
t.parentNode.insertBefore(hd,t);
var tp=document.createElement('div');tp.className='lc-top';
tp.innerHTML='<div class="lc-title" role="heading" aria-level="1">Nákupní košík</div><p class="lc-cnt"></p>';
t.parentNode.insertBefore(tp,hd);
}
if(!document.querySelector('.lc-steps')){
var al=document.querySelectorAll('body *'),st=null;
for(var a=0;a<al.length;a++){var e=al[a];if(e.children.length<3&&!e.contains(t)&&!e.closest('.lh,script,style')&&/Doprava\s*(&|a)\s*platba/i.test(e.textContent||'')){st=e;break;}}
if(st)up(st,t).classList.add('lc-hide');
var ch='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';
var ns=document.createElement('nav');ns.className='lc-steps';ns.setAttribute('aria-label','Kroky objednávky');
ns.innerHTML='<span aria-current="step">Košík</span>'+ch+'<span>Doprava a platba</span>'+ch+'<span>Informace o vás</span>';
var tq=document.querySelector('.lc-top');tq.parentNode.insertBefore(ns,tq);
}
var p=document.querySelector('.lc-cnt'),v='V košíku máte '+n+' '+(n==1?'poukaz':n>1&&n<5?'poukazy':'poukazů')+'.';
if(p&&p.textContent!==v)p.textContent=v;
var lb=tx(/^Celkem za zbo/i),cb=document.getElementById('continue-order-button')||tx(/^Pokračovat/i,'a,button');
if(lb&&cb){
var sm=cb.parentNode;while(sm&&!sm.contains(lb))sm=sm.parentNode;
if(sm&&sm!==document.body&&!sm.contains(t)){
var olds=document.querySelectorAll('.lc-sum');for(var o=0;o<olds.length;o++)if(olds[o]!==sm)olds[o].classList.remove('lc-sum');
var oldh=document.querySelectorAll('.lc-sh');for(var o2=0;o2<oldh.length;o2++)if(oldh[o2].parentNode!==sm)oldh[o2].remove();
sm.classList.add('lc-sum');cb.classList.add('lc-go');cb.parentNode.classList.add('lc-ns');
if(lb.parentNode!==sm)lb.parentNode.classList.add('lc-row');
if(!sm.querySelector('.lc-sh')){var sh=document.createElement('div');sh.className='lc-sh';sh.textContent='Shrnutí objednávky';sm.insertBefore(sh,sm.firstChild);}
var bk=tx(/^Zpět do obchodu/i,'a,button');if(bk)bk.classList.add('lc-back');
var tr=document.querySelector('.lc-trust');
if(!tr){tr=document.createElement('div');tr.className='lc-trust';
tr.innerHTML='<span class="lc-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg></span><div><b>Darujte s jistotou</b><p>Poukaz pošleme do 24 hodin e-mailem jako PDF, nebo si ho do 7 dnů vyzvednete ve studiu. Platí 12 měsíců na všechny služby.</p><a href="tel:+420702811933">Poradíme: +420 702 811 933</a></div>';}
var pa=sm.parentNode;
if(pa&&!pa.contains(t)){pa.classList.add('lc-col');if(tr.previousElementSibling!==sm)pa.insertBefore(tr,sm.nextSibling);}
else if(tr.parentNode!==sm)sm.appendChild(tr);
}}
var hp=tx(/^Potřebujete pomoc/i);if(hp)up(hp,lb||t).classList.add('lc-help');
wb(t);var sm2=document.querySelector('.lc-sum');if(sm2)wb(sm2);
var gs=tx(/^Dárky a slevy/i);if(gs){var g=up(gs,t);if(!g.querySelector('input[type="text"],input:not([type])'))g.classList.add('lc-hide');}
}
function dbg(){
if(location.hash!=='#ldbg')return;
var o=document.getElementById('ldbg');if(!o){o=document.createElement('pre');o.id='ldbg';document.body.appendChild(o);}
o.style.cssText='position:fixed;left:8px;right:8px;bottom:8px;max-height:60vh;overflow:auto;z-index:2147483647;background:#fff3cd;color:#000;font:11px/1.45 monospace;padding:10px;border:1px solid #e0c36a;border-radius:8px;white-space:pre-wrap;margin:0';
var out=['LUNA DIAG  sirka okna='+innerWidth];
try{
var t=document.querySelector('.lc-t');out.push('inputy amount celkem='+document.querySelectorAll('input[name="amount"]').length+' v tabulce='+(t?t.querySelectorAll('input[name="amount"]').length:'-'));
for(var p=t,i=0;p&&i<6;p=p.parentNode,i++)out.push('TAB'+i+': '+nm(p)+' ['+getComputedStyle(p).display+']');
var r=document.querySelector('.lc-r');
if(r)for(var j=0;j<r.children.length;j++){var c=r.children[j],cs=getComputedStyle(c);out.push('TD'+j+': '+nm(c)+' ['+cs.display+'] "'+(c.textContent||'').replace(/\s+/g,' ').trim().slice(0,45)+'"');}
var qd=r&&r.querySelector('.quantity');if(qd){out.push('QTY: '+nm(qd)+' ['+getComputedStyle(qd).display+']');for(var k=0;k<qd.children.length;k++){var qc=qd.children[k],b=getComputedStyle(qc,'::before');out.push('  q'+k+': '+nm(qc)+' order='+getComputedStyle(qc).order+' before="'+b.content+'"');}}
var ro=document.querySelectorAll('input[type="radio"]');out.push('RADIA: '+ro.length);for(var y2=0;y2<ro.length&&y2<6;y2++){var rr=ro[y2],ch2=[];for(var q2=rr,z2=0;q2&&z2<4;q2=q2.parentElement,z2++)ch2.push(nm(q2));out.push('  r'+y2+' name='+rr.name+' checked='+rr.checked+': '+ch2.join(' < '));}
var op=document.querySelectorAll('.lo-opt');for(var y3=0;y3<op.length;y3++)out.push('OPT'+y3+': '+nm(op[y3])+' "'+(op[y3].textContent||'').replace(/\s+/g,' ').trim().slice(0,60)+'"');
var s=document.querySelectorAll('.lc-sum');out.push('lc-sum pocet='+s.length);
for(var m=0;m<s.length;m++){var ch=[];for(var p2=s[m],z=0;p2&&z<5;p2=p2.parentNode,z++)ch.push(nm(p2)+'['+getComputedStyle(p2).display+'/'+getComputedStyle(p2).flexDirection+']');out.push('SUM'+m+': '+ch.join(' < '));}
var tr=document.querySelector('.lc-trust');out.push('TRUST v: '+nm(tr&&tr.parentNode));
['.lc-help','.lc-hide'].forEach(function(x){var l=document.querySelectorAll(x);for(var y=0;y<l.length;y++)out.push(x+': '+nm(l[y]));});
}catch(err){out.push('CHYBA: '+err.message);}
o.textContent=out.join('\n');
}
document.addEventListener('click',function(ev){
var b=ev.target.closest&&ev.target.closest('.lc-m,.lc-p');if(!b)return;ev.preventDefault();
var cell=b.closest('.lc-q'),up1=b.classList.contains('lc-p'),inp=cell.querySelector('input[name="amount"]'),nat=cell.querySelector((up1?'.increase':'.decrease')+':not([class*="tooltip"])');
if(nat)nat.click();else if(inp){inp.value=Math.max(1,(+inp.value||1)+(up1?1:-1));inp.dispatchEvent(new Event('input',{bubbles:true}));inp.dispatchEvent(new Event('change',{bubbles:true}));}
setTimeout(function(){var vs=cell.querySelector('.lc-v');if(vs&&inp)vs.textContent=String(+inp.value||0);sch();},60);
});
document.addEventListener('click',function(ev){
var b=ev.target.closest&&ev.target.closest('.lc-del');if(!b)return;ev.preventDefault();
var r=b.closest('tr'),nat=null,cs=r.querySelectorAll('[class*="remove"],[data-testid*="emove"],[data-testid*="elete"],form[action*="elete"] [type="submit"],form[action*="emove"] [type="submit"],a[href*="elete"],a[href*="emove"],[title*="Odstranit"],[title*="Smazat"],[aria-label*="Odstranit"]');
for(var i=0;i<cs.length;i++){if(!cs[i].closest('.lc-xo')&&/^(BUTTON|A|INPUT|SPAN|I)$/.test(cs[i].tagName)){nat=cs[i];break;}}
if(!nat)for(var j=0;j<cs.length;j++){if(!cs[j].closest('.lc-xo')){nat=cs[j];break;}}
if(nat){var f=nat.tagName==='FORM'?nat:null;if(f){if(f.requestSubmit)f.requestSubmit();else f.submit();}else nat.click();}
else{var inp=r.querySelector('input[name="amount"]');if(inp){inp.value=0;inp.dispatchEvent(new Event('input',{bubbles:true}));inp.dispatchEvent(new Event('change',{bubbles:true}));}}
setTimeout(sch,300);
});
function run(){if(/kosik/.test(location.pathname))lc();else lo();}
var tm;function sch(){clearTimeout(tm);tm=setTimeout(run,60);}
run();document.addEventListener('DOMContentLoaded',run);
document.addEventListener('change',function(ev){if(ev.target&&ev.target.type==='radio')sch();});
document.addEventListener('click',function(ev){var o=ev.target.closest&&ev.target.closest('.lo-opt');if(!o||ev.target.closest('input,a,button,select,label'))return;var r=o.querySelector('input[type="radio"]');if(r&&!r.checked){r.click();sch();}});
if(window.MutationObserver)new MutationObserver(function(ms){for(var i=0;i<ms.length;i++)if(!(ms[i].target.closest&&ms[i].target.closest('#ldbg')))return sch();}).observe(document.documentElement,{childList:true,subtree:true});
window.addEventListener('load',function(){setTimeout(dbg,1500);});
window.addEventListener('resize',sch);
})();
