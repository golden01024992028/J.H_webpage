const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');
});

// HOME / THINGS / CONNECT: 전신 캐릭터는 누르고 있는 동안에만 표시합니다.
const navLinks=[...document.querySelectorAll('.nav-item')];
function setPressed(link, pressed){
  const img=link.querySelector('img');
  link.classList.toggle('pressed',pressed);
  if(img) img.src=pressed ? img.dataset.full : img.dataset.head;
}
navLinks.forEach(link=>{
  link.addEventListener('pointerdown',()=>setPressed(link,true));
  link.addEventListener('pointerup',()=>setPressed(link,false));
  link.addEventListener('pointercancel',()=>setPressed(link,false));
  link.addEventListener('pointerleave',()=>setPressed(link,false));
  // 키보드 사용 시 Enter 또는 Space를 누르는 동안에도 같은 상태를 제공합니다.
  link.addEventListener('keydown',event=>{
    if(event.key==='Enter' || event.key===' '){
      if(event.key===' ') event.preventDefault();
      setPressed(link,true);
    }
  });
  link.addEventListener('keyup',event=>{
    if(event.key==='Enter' || event.key===' ') setPressed(link,false);
  });
  link.addEventListener('blur',()=>setPressed(link,false));
  link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded','false');
  });
});

const topButton=document.querySelector('.top');
window.addEventListener('scroll',()=>topButton?.classList.toggle('show',window.scrollY>420));

document.querySelectorAll('[data-placeholder]').forEach(link=>link.addEventListener('click',event=>{
  const href=link.getAttribute('href');
  if(href==='#'||href.includes('YOUR_EMAIL')){
    event.preventDefault();
    alert('실제 이메일 주소 또는 SNS 계정 링크로 수정한 뒤 사용해 주세요.');
  }
}));
