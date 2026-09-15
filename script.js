const body=document.body;
const theme=document.querySelector('.theme-toggle');
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');

theme.addEventListener('click',()=>{
  body.classList.toggle('light');
  theme.textContent=body.classList.contains('light')?'☀':'☾';
  localStorage.setItem('theme',body.classList.contains('light')?'light':'dark');
});
if(localStorage.getItem('theme')==='light'){body.classList.add('light');theme.textContent='☀';}

menu.addEventListener('click',()=>{
  const open=nav.style.display==='flex';
  nav.style.display=open?'none':'flex';
  nav.style.position='absolute';
  nav.style.top='72px';
  nav.style.left='0';
  nav.style.right='0';
  nav.style.padding='20px 24px';
  nav.style.background=getComputedStyle(body).backgroundColor;
  nav.style.flexDirection='column';
});

document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.style.display='none'));
document.getElementById('year').textContent=new Date().getFullYear();
