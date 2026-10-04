/* Luna Beauty Studio – nákupní košík (styl + rozložení). Načítá se z HTML kódu Zápatí. */
(function(){
if(!/kosik/.test(location.pathname))return;
var css="html.lc-on :is(.lc-help,.lc-hide,.lc-av),html.lc-on .lc-t thead{display:none!important}\n.lc-steps{display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;margin:clamp(20px,3vw,36px) 0 28px;font:500 15px/1.4 \"Montserrat Alternates\",sans-serif;color:rgba(58,44,43,.5)}\n.lc-steps svg{flex:none;opacity:.8}\n.lc-steps [aria-current]{color:#3a2c2b;font-weight:600}\n.lc-top{margin:0 0 32px}\n.lc-title{font:400 clamp(40px,5vw,64px)/1.05 \"Gilda Display\",serif;color:#3a2c2b;margin:0 0 10px}\n.lc-cnt{font:500 15px/1.6 \"Montserrat Alternates\",sans-serif;color:rgba(58,44,43,.7);margin:0!important}\n.lc-h,:is(#lc,html.lc-on) .lc-r{display:grid!important;grid-template-columns:96px minmax(0,1fr) 140px 120px 32px;column-gap:20px}\n.lc-h{padding:0 0 14px;border-bottom:1px solid #eadfd3;font:600 11px/1 \"Montserrat Alternates\",sans-serif;letter-spacing:.12em;text-transform:uppercase;color:rgba(58,44,43,.6)}\n.lc-h span:first-child{grid-column:1/3}\n.lc-h span:nth-child(2){text-align:center}\n.lc-h span:last-child{text-align:right}\n:is(#lc,html.lc-on) :is(.lc-t,.lc-t tbody){display:block!important;width:100%!important;border:0!important;margin:0!important;background:none!important}\n:is(#lc,html.lc-on) .lc-r{grid-template-areas:\"i n q t x\" \"i p q t x\";align-items:center;row-gap:4px;padding:20px 0!important;border:0!important;border-bottom:1px solid #eadfd3!important;background:none!important}\n:is(#lc,html.lc-on) .lc-r *{text-transform:none!important;letter-spacing:0!important}\n:is(#lc,html.lc-on) .lc-r>*{display:block;min-width:0;width:auto!important;padding:0!important;margin:0!important;border:0!important;background:none!important;text-align:left}\n:is(#lc,html.lc-on) .lc-r>:not(.lc-img,.lc-n,.lc-pr,.lc-q,.lc-tot,.lc-x){display:none!important}\n:is(#lc,html.lc-on) .lc-img{grid-area:i;display:grid!important;place-items:center;width:96px!important;height:96px!important;border-radius:18px;background:#f2f1ef!important;overflow:hidden}\n:is(#lc,html.lc-on) .lc-img a{display:grid;place-items:center;width:100%;height:100%}\n:is(#lc,html.lc-on) .lc-img img{width:84%!important;height:84%!important;max-width:none!important;object-fit:contain;mix-blend-mode:multiply}\n:is(#lc,html.lc-on) .lc-n{grid-area:n;align-self:end;font:500 12px/1.5 \"Montserrat Alternates\",sans-serif!important;color:rgba(58,44,43,.6)!important}\n:is(#lc,html.lc-on) .lc-n *{font:inherit!important;color:inherit!important;text-transform:none!important}\n:is(#lc,html.lc-on) .lc-n a{display:block;margin-bottom:2px;font:600 16px/1.35 \"Montserrat Alternates\",sans-serif!important;color:#3a2c2b!important;text-decoration:none!important}\n:is(#lc,html.lc-on) .lc-pr{grid-area:p;align-self:start;font:500 13px/1.5 \"Montserrat Alternates\",sans-serif!important;color:rgba(58,44,43,.6)!important}\n:is(#lc,html.lc-on) .lc-pr *{font:inherit!important;color:inherit!important}\n:is(#lc,html.lc-on) .lc-q{grid-area:q;justify-self:center}\n:is(#lc,html.lc-on) .lc-q form{margin:0!important}\n:is(#lc,html.lc-on) .lc-tot{grid-area:t;text-align:right!important;white-space:nowrap;font:600 18px/1.2 \"Montserrat Alternates\",sans-serif!important;color:#3a2c2b!important}\n:is(#lc,html.lc-on) .lc-tot *{font:inherit!important;color:inherit!important}\n:is(#lc,html.lc-on) .lc-x{grid-area:x;justify-self:end}\n:is(#lc,html.lc-on) .lc-x :is(button,a){display:grid!important;place-items:center;width:32px!important;height:32px!important;padding:0!important;border:0!important;border-radius:50%!important;background:transparent!important;color:#3a2c2b!important;font-size:0!important;cursor:pointer;transition:background .2s}\n:is(#lc,html.lc-on) .lc-x :is(button,a) *{display:none!important}\n:is(#lc,html.lc-on) .lc-x :is(button,a)::before{content:\"×\"!important;display:block!important;font:400 22px/1 \"Montserrat Alternates\",sans-serif;color:#3a2c2b}\n:is(#lc,html.lc-on) .lc-x :is(button,a):hover{background:#f2f1ef!important}\n:is(#lc,html.lc-on) .lc-q .quantity{position:relative!important;display:inline-flex!important;align-items:center;width:auto!important;height:46px!important;padding:0 5px!important;border:1px solid rgba(58,44,43,.2)!important;border-radius:100px!important;background:#fff!important}\n:is(#lc,html.lc-on) .lc-q .quantity input{order:2;width:34px!important;height:36px!important;padding:0!important;border:0!important;background:none!important;box-shadow:none!important;text-align:center!important;font:600 15px \"Montserrat Alternates\",sans-serif!important;color:#3a2c2b!important;-moz-appearance:textfield;appearance:textfield}\n:is(#lc,html.lc-on) .lc-q .quantity input::-webkit-inner-spin-button,:is(#lc,html.lc-on) .lc-q .quantity input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}\n:is(#lc,html.lc-on) .lc-q .quantity :is(.increase,.decrease):not([class*=\"tooltip\"]){position:relative!important;inset:auto!important;order:3;flex:none;width:34px!important;height:34px!important;border-radius:50%!important;transition:background .2s}\n:is(#lc,html.lc-on) .lc-q .quantity .decrease:not([class*=\"tooltip\"]){order:1}\n:is(#lc,html.lc-on) .lc-q .quantity :is(.increase,.decrease):not([class*=\"tooltip\"]):hover{background:#f2f1ef!important}\n:is(#lc,html.lc-on) .lc-q .quantity :is(.increase,.decrease):not([class*=\"tooltip\"])::after{content:\"+\"!important;width:auto!important;height:auto!important;border:0!important;transform:translate(-50%,-54%)!important;font:400 20px/1 \"Montserrat Alternates\",sans-serif;color:#3a2c2b}\n:is(#lc,html.lc-on) .lc-q .quantity .decrease:not([class*=\"tooltip\"])::after{content:\"−\"!important}\n:is(#lc,html.lc-on) .lc-sum{padding:28px!important;border:1px solid rgba(58,44,43,.08)!important;border-radius:24px!important;background:#fdf6ea!important;box-shadow:none!important}\n:is(#lc,html.lc-on) .lc-sum *{font-family:\"Montserrat Alternates\",sans-serif!important}\n:is(#lc,html.lc-on) .lc-sum .lc-sh{margin:0 0 20px;font:400 28px/1.15 \"Gilda Display\",serif!important;color:#3a2c2b}\n:is(#lc,html.lc-on) .lc-row{display:flex!important;justify-content:space-between;align-items:baseline;gap:12px;margin:0 0 20px!important;padding:18px 0!important;border-top:1px solid rgba(58,44,43,.12)!important;border-bottom:1px solid rgba(58,44,43,.12)!important;font-size:15px!important;font-weight:500!important;color:#3a2c2b!important;text-transform:none!important}\n:is(#lc,html.lc-on) .lc-row>:last-child{font-size:28px!important;font-weight:600!important;line-height:1!important;color:#3a2c2b!important}\n:is(#lc,html.lc-on) .lc-ns{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:14px!important;margin:0!important;padding:0!important;border:0!important}\n:is(#lc,html.lc-on) .lc-go{order:1;box-sizing:border-box!important;display:flex!important;align-items:center;justify-content:center;gap:10px;width:100%!important;height:56px!important;margin:0!important;padding:0 24px!important;border:0!important;border-radius:100px!important;background:#3a2c2b!important;color:#fdf6ea!important;font-size:15px!important;font-weight:600!important;letter-spacing:.01em!important;text-transform:none!important;text-decoration:none!important}\n:is(#lc,html.lc-on) .lc-go:hover{background:#4d3b39!important}\n:is(#lc,html.lc-on) .lc-back{order:2;align-self:center;display:inline-flex!important;align-items:center;gap:8px;margin:0!important;padding:6px 0!important;border:0!important;background:none!important;font-size:13px!important;font-weight:600!important;text-transform:none!important;letter-spacing:0!important;color:#3a2c2b!important;text-decoration:none!important}\n:is(#lc,html.lc-on) .lc-back::before{content:\"←\";font-size:16px}\n.lc-trust{display:flex;gap:14px;align-items:flex-start;margin:16px 0 0;padding:20px;border-radius:20px;background:#f7e8d0;color:#3a2c2b;font:500 13px/1.6 \"Montserrat Alternates\",sans-serif}\n.lc-ic{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#3a2c2b;color:#f5c98a}\n.lc-trust b{display:block;margin-bottom:4px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}\n.lc-trust p{margin:0 0 8px!important;font:inherit;color:rgba(58,44,43,.8)}\n.lc-trust a{font-weight:600;color:#7a4a4a!important;text-decoration:none!important}\n@media(max-width:768px){\n.lc-steps{font-size:14px;gap:4px 10px}\n.lc-h{display:none!important}\n:is(#lc,html.lc-on) .lc-r{grid-template-columns:76px minmax(0,1fr) auto;grid-template-areas:\"i n x\" \"i p p\" \"q q t\";column-gap:14px;row-gap:6px}\n:is(#lc,html.lc-on) .lc-img{width:76px!important;height:76px!important;border-radius:14px}\n:is(#lc,html.lc-on) .lc-q{justify-self:start;margin-top:10px!important}\n:is(#lc,html.lc-on) .lc-tot{margin-top:10px!important}\n:is(#lc,html.lc-on) .lc-sum{padding:22px!important}\n}";
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function tx(re,sel){var l=document.querySelectorAll(sel||'body *');for(var i=0;i<l.length;i++){var e=l[i];if(e.children.length<2&&!e.closest('.lh,script,style')&&re.test((e.textContent||'').trim()))return e;}return null;}
function up(e,stop){while(e&&e.parentNode&&e.parentNode!==document.body&&!e.parentNode.contains(stop))e=e.parentNode;return e;}
function lc(){
if(!/kosik/.test(location.pathname))return;
var q=document.querySelectorAll('input[name="amount"]'),t=q.length&&q[0].closest('table'),n=0;
if(!t)return;
document.documentElement.classList.add('lc-on');t.classList.add('lc-t');
for(var i=0;i<q.length;i++){
n+=+q[i].value||0;
var r=q[i].closest('tr');if(!r||r.classList.contains('lc-r'))continue;
r.classList.add('lc-r');
var td=r.children,tot=[];
for(var j=0;j<td.length;j++){
var c=td[j],s=c.textContent||'',k='';
if(c.querySelector('img'))k='lc-img';
else if(c.querySelector('input[name="amount"]'))k='lc-q';
else if(!r.querySelector('.lc-n')&&c.querySelector('a[href]')&&s.trim())k='lc-n';
else if(/\/\s*ks/.test(s))k='lc-pr';
else if(/skladem|dostupn/i.test(s)||/availab/.test(c.className))k='lc-av';
else if(/\d/.test(s)){k='lc-tot';tot.push(c);}
else if(c.querySelector('button,form,[class*="remove"]'))k='lc-x';
if(k)c.classList.add(k);
}
if(tot.length>1)tot[0].classList.replace('lc-tot','lc-pr');
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
sm.classList.add('lc-sum');cb.classList.add('lc-go');cb.parentNode.classList.add('lc-ns');
if(lb.parentNode!==sm)lb.parentNode.classList.add('lc-row');
if(!sm.querySelector('.lc-sh')){var sh=document.createElement('div');sh.className='lc-sh';sh.textContent='Shrnutí objednávky';sm.insertBefore(sh,sm.firstChild);}
var bk=tx(/^Zpět do obchodu/i,'a,button');if(bk)bk.classList.add('lc-back');
if(!document.querySelector('.lc-trust')){
var tr=document.createElement('div');tr.className='lc-trust';
tr.innerHTML='<span class="lc-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg></span><div><b>Darujte s jistotou</b><p>Poukaz pošleme do 24 hodin e-mailem jako PDF, nebo si ho do 7 dnů vyzvednete ve studiu. Platí 12 měsíců na všechny služby.</p><a href="tel:+420702811933">Poradíme: +420 702 811 933</a></div>';
sm.parentNode.insertBefore(tr,sm.nextSibling);
}}}
var hp=tx(/^Potřebujete pomoc/i);if(hp)up(hp,lb||t).classList.add('lc-help');
var gs=tx(/^Dárky a slevy/i);if(gs){var g=up(gs,t);if(!g.querySelector('input[type="text"],input:not([type])'))g.classList.add('lc-hide');}
}
var tm;function sch(){clearTimeout(tm);tm=setTimeout(lc,60);}
lc();document.addEventListener('DOMContentLoaded',lc);
if(window.MutationObserver)new MutationObserver(sch).observe(document.documentElement,{childList:true,subtree:true});
})();
