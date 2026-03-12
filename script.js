// Google Analytics
(function () {
    var gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-HJ7NVQ7CMJ";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-HJ7NVQ7CMJ');
})();

// Vercel Analytics
window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };

// Vercel Insights Scripts
(function () {
    var insights = document.createElement("script");
    insights.src = "/_vercel/insights/script.js";
    insights.defer = true;
    document.body.appendChild(insights);

    var speedInsights = document.createElement("script");
    speedInsights.src = "/_vercel/speed-insights/script.js";
    speedInsights.defer = true;
    document.body.appendChild(speedInsights);
})();



function sbOpen() { document.getElementById('sb').classList.add('on'); document.getElementById('ov').classList.add('on'); document.body.style.overflow = 'hidden'; setTimeout(() => document.getElementById('sbQ').focus(), 300) }
    function sbClose() { document.getElementById('sb').classList.remove('on'); document.getElementById('ov').classList.remove('on'); document.body.style.overflow = '' }
    function sbToggle(id) { const el = document.getElementById(id), exp = el.classList.contains('exp'); document.querySelectorAll('.sb-item.exp').forEach(e => e.classList.remove('exp')); if (!exp) el.classList.add('exp') }
    document.getElementById('sbQ').addEventListener('input', function () {
      const q = this.value.toLowerCase();
      document.querySelectorAll('.sb-item').forEach(el => {
        el.style.display = (!q || el.textContent.toLowerCase().includes(q)) ? '' : 'none';
        if (q && el.textContent.toLowerCase().includes(q)) el.classList.add('exp');
      });
    });

    // Theme
    const html = document.documentElement;
    function thToggle() { const d = html.getAttribute('data-theme') === 'dark'; html.setAttribute('data-theme', d ? 'light' : 'dark'); localStorage.setItem('um-theme', d ? 'light' : 'dark'); updTh(!d) }
    function updTh(dark) {
      const d = document.getElementById('thDot'), t = document.getElementById('thTxt'), si = document.getElementById('sbThIco'), st = document.getElementById('sbThTxt');
      if (d) d.textContent = dark ? '🌙' : '☀️'; if (t) t.textContent = dark ? 'Dark' : 'Light';
      if (si) si.textContent = dark ? '☀️' : '🌙'; if (st) st.textContent = dark ? 'Light Mode' : 'Dark Mode';
    }
    const saved = localStorage.getItem('um-theme') || 'light';
    html.setAttribute('data-theme', saved); updTh(saved === 'dark');

    // Search
    function sOpen() { document.getElementById('sOv').classList.add('on'); document.body.style.overflow = 'hidden'; document.getElementById('sQ').focus(); renderSR('') }
    function sClose() { document.getElementById('sOv').classList.remove('on'); document.body.style.overflow = '' }
    function sHandleClick(e) { if (e.target === document.getElementById('sOv')) sClose() }
    function renderSR(q) {
      const el = document.getElementById('sRes');
      const res = q.trim() ? TOOLS.filter(t => t.n.toLowerCase().includes(q.toLowerCase()) || t.c.toLowerCase().includes(q.toLowerCase())) : TOOLS.slice(0, 8);
      if (!res.length) { el.innerHTML = `<div style="padding:18px;text-align:center;color:var(--text2);font-size:.83rem">No results for "${q}"</div>`; return }
      el.innerHTML = res.slice(0, 8).map(t => `<a href="${t.u}" class="sr-item" onclick="sClose()"><div class="sr-ico">${t.i}</div><div><div class="sr-name">${t.n}</div><div class="sr-cat">${t.c}</div></div><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text3);margin-left:auto"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>`).join('')
    }
    document.getElementById('sQ').addEventListener('input', function () { renderSR(this.value) });
    document.getElementById('hQ').addEventListener('focus', sOpen);
    document.getElementById('hQ').addEventListener('keydown', e => { if (e.key === 'Enter') sOpen() });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { sClose(); sbClose() } });

    // Scroll
    window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
      document.getElementById('btt').classList.toggle('on', window.scrollY > 400);
    });

    // Scroll animations
    const obs = new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; obs.unobserve(e.target) } }) }, { threshold: .1 });
    document.querySelectorAll('.cat-card,.tool-card,.how-card').forEach(el => {
      el.style.opacity = '0'; el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .45s ease, transform .45s ease, border-color .22s, box-shadow .22s';
      obs.observe(el);
    });