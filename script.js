const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');});
const navLinks=[...document.querySelectorAll('.nav-item')];
function setActiveNav(link){navLinks.forEach(item=>{const img=item.querySelector('img');const active=item===link;item.classList.toggle('active',active);if(img)img.src=active?img.dataset.full:img.dataset.head;if(active)item.setAttribute('aria-current','location');else item.removeAttribute('aria-current');});}
navLinks.forEach(link=>link.addEventListener('click',()=>{setActiveNav(link);nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const targets=[{id:'home',link:navLinks.find(a=>a.hash==='#home')},{id:'things',link:navLinks.find(a=>a.hash==='#things')},{id:'connect',link:navLinks.find(a=>a.hash==='#connect')}].filter(x=>x.link);
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible){const item=targets.find(x=>x.id===visible.target.id);if(item)setActiveNav(item.link);}},{rootMargin:'-25% 0px -55% 0px',threshold:[0,.1,.35]});targets.forEach(x=>{const el=document.getElementById(x.id);if(el)observer.observe(el);});}
const topButton=document.querySelector('.top');window.addEventListener('scroll',()=>topButton?.classList.toggle('show',window.scrollY>420));
document.querySelectorAll('[data-placeholder]').forEach(link=>link.addEventListener('click',event=>{const href=link.getAttribute('href');if(href==='#'||href.includes('YOUR_EMAIL')){event.preventDefault();alert('실제 이메일 주소 또는 SNS 계정 링크로 수정한 뒤 사용해 주세요.');}}));
