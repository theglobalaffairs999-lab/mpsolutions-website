(function(){
var url=location.origin+location.pathname,title=document.title.split('|')[0].trim();
function ev(n,m){if(typeof gtag==='function')gtag('event',n,{method:m,page_path:location.pathname})}
var ico={wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.1z"/></svg>',
x:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L2 3h6.3l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></svg>',
ln:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>'};
function bar(te){var d=document.createElement('div');d.className='mp-share';
d.innerHTML='<a class="wa" href="https://wa.me/?text='+encodeURIComponent(title+'\n'+url)+'" target="_blank" rel="noopener" data-m="whatsapp">'+ico.wa+'WhatsApp</a>'+
'<a href="https://twitter.com/intent/tweet?text='+encodeURIComponent(title)+'&url='+encodeURIComponent(url)+'" target="_blank" rel="noopener" data-m="x">'+ico.x+'Post</a>'+
'<button type="button" data-m="copy">'+ico.ln+'<span>'+(te?'లింక్ కాపీ':'Copy link')+'</span></button>';
d.addEventListener('click',function(e){var t=e.target.closest('[data-m]');if(!t)return;var m=t.getAttribute('data-m');ev('share',m);
if(m==='copy'){var s=t.querySelector('span');var done=function(){s.textContent=te?'కాపీ అయింది ✓':'Copied ✓';setTimeout(function(){s.textContent=te?'లింక్ కాపీ':'Copy link'},2000)};
if(navigator.clipboard)navigator.clipboard.writeText(url).then(done,done);else done();}});return d}
document.querySelectorAll('article').forEach(function(a,ai){
var te=(a.getAttribute('lang')||'').indexOf('te')===0;
var words=(a.innerText||a.textContent||'').trim().split(/\s+/).length,min=Math.max(1,Math.round(words/(te?150:220)));
var by=a.querySelector('.byline');var meta=document.createElement('div');meta.className='mp-meta';
var r=document.createElement('span');r.className='mp-read';r.textContent=te?min+' నిమిషాల చదువు':min+' min read';meta.appendChild(r);meta.appendChild(bar(te));
if(by)by.insertAdjacentElement('afterend',meta);else a.insertBefore(meta,a.firstChild);
var hs=a.querySelectorAll('h2');if(hs.length>=4){var det=document.createElement('details');det.className='mp-toc';
var ol='';hs.forEach(function(h,i){if(!h.id)h.id='s'+ai+'-'+(i+1);ol+='<li><a href="#'+h.id+'">'+h.textContent+'</a></li>'});
det.innerHTML='<summary>'+(te?'ఈ కథనంలో':'In this article')+'</summary><ol>'+ol+'</ol>';meta.insertAdjacentElement('afterend',det)}
var end=document.createElement('div');end.className='mp-endshare';end.innerHTML='<p>'+(te?'ఉపయోగపడిందా? మీ గ్రూపుల్లో షేర్ చేయండి':'Found this useful? Share it')+'</p>';end.appendChild(bar(te));a.appendChild(end)});
var p=document.createElement('div');p.className='mp-progress';document.body.appendChild(p);
function upd(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;p.style.width=(m>0?Math.min(100,h.scrollTop/m*100):0)+'%'}
addEventListener('scroll',upd,{passive:true});upd();
})();
