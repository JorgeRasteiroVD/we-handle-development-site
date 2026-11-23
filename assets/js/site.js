document.documentElement.classList.add('js');
const menuToggle=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-nav]');
if(menuToggle&&nav){
  menuToggle.addEventListener('click',()=>{
    const isOpen=nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(isOpen));
    menuToggle.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');
  }));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}});
}
document.querySelectorAll('[data-current-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const io=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}});
 },{threshold:.08,rootMargin:'0px 0px -30px 0px'});
 document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));
}else{document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('revealed'));}
