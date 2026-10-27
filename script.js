// Preencher com o WhatsApp oficial: código do país, DDD e número, apenas dígitos.
const SITE_CONFIG = { whatsapp: '5511984260037', businessDetails: '' };
const menu=document.querySelector('.menu'),nav=document.querySelector('#navigation');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
if(SITE_CONFIG.businessDetails)document.querySelectorAll('#business-details').forEach(el=>el.textContent=SITE_CONFIG.businessDetails);
const messageFor=()=> 'Atendimento Online.';
function whatsappUrl(message){return /^\d{10,15}$/.test(SITE_CONFIG.whatsapp)?'https://wa.me/'+SITE_CONFIG.whatsapp+'?text='+encodeURIComponent(message):null;}
document.querySelectorAll('[data-contact]').forEach(link=>{const service=link.dataset.service||'Manutenção do jardim',url=whatsappUrl(messageFor(service));if(url){link.href=url;link.target='_blank';link.rel='noopener noreferrer';}else{link.addEventListener('click',()=>{const select=document.querySelector('#service');if(select&&[...select.options].some(o=>o.value===service))select.value=service;});}});
document.querySelector('#contact-form')?.addEventListener('submit',event=>{event.preventDefault();const service=document.querySelector('#service').value,detail=document.querySelector('#message').value.trim(),url=whatsappUrl(messageFor(service)+(detail?'\n\nSobre o espaço: '+detail:''));if(url){window.open(url,'_blank','noopener,noreferrer');}else{const status=document.querySelector('#contact-status');status.hidden=false;status.textContent='O contato pelo WhatsApp está em atualização. Em breve você poderá solicitar seu orçamento por aqui.';}});

