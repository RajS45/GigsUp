(() => {
  const API_BASE = localStorage.getItem('gigsup_api_base') || 'https://gigsup-1.onrender.com';
  window.GigsUp = {
    API_BASE,
    getToken: () => localStorage.getItem('gigsup_token'),
    getUser: () => { try { return JSON.parse(localStorage.getItem('gigsup_user') || 'null'); } catch { return null; } },
    saveSession(data) { if (data?.token) localStorage.setItem('gigsup_token', data.token); const user={email:data?.email||'',role:(data?.role||'').toUpperCase(),userId:data?.userId??null};localStorage.setItem('gigsup_user',JSON.stringify(user));return user; },
    async api(path, options={}) { const headers={'Content-Type':'application/json',...(options.headers||{})};const token=this.getToken();if(token)headers.Authorization=`Bearer ${token}`;let res;try{res=await fetch(`${this.API_BASE}${path}`,{...options,headers});}catch(e){throw new Error(`Cannot connect to backend at ${this.API_BASE}. Start Spring Boot and check CORS.`);}const raw=await res.text();let body=null;try{body=raw?JSON.parse(raw):null;}catch{body=raw;}if(!res.ok)throw new Error((body&&typeof body==='object'&&(body.message||body.error||body.detail))||(typeof body==='string'&&body)||`Request failed (${res.status})`);return body;},
    showMessage(el,text,type='error'){if(el){el.textContent=text;el.className=`message ${type}`;}},clearMessage(el){if(el){el.textContent='';el.className='message hidden';}},money(v){return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:2}).format(Number(v||0));},date(v){if(!v)return 'Time not specified';const d=new Date(v);return Number.isNaN(d.getTime())?v:d.toLocaleString([],{dateStyle:'medium',timeStyle:'short'});},escape(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));},requireRole(role){const u=this.getUser();if(!this.getToken()||!u){location.href='login.html';return false;}if(role&&u.role!==role){location.href=u.role==='VENDOR'?'vendor-dashboard.html':'student-dashboard.html';return false;}return true;},logout(){localStorage.removeItem('gigsup_token');localStorage.removeItem('gigsup_user');location.href='login.html';}
  };
  document.querySelectorAll('.logout-button').forEach(b=>b.addEventListener('click',()=>GigsUp.logout()));
  const toggle=document.getElementById('mobileToggle'),nav=document.getElementById('mainNav');if(toggle&&nav)toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();const user=GigsUp.getUser();if(user){document.querySelectorAll('#userLabel').forEach(e=>e.textContent=user.email||`${user.role} workspace`);document.querySelectorAll('#sidebarName').forEach(e=>e.textContent=user.email||user.role||'Account');}
})();
