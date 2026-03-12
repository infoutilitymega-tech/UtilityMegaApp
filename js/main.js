const TOOLS=[
  {n:"EMI Calculator",c:"Calculators",i:"💰",u:"../calculators/emi-calculator.html"},
  {n:"SIP Calculator",c:"Calculators",i:"📈",u:"../calculators/sip-calculator.html"},
  {n:"BMI Calculator",c:"Calculators",i:"⚖️",u:"../calculators/bmi-calculator.html"},
  {n:"BMR Calculator",c:"Calculators",i:"🔥",u:"../calculators/bmr-calculator.html"},
  {n:"Age Calculator",c:"Calculators",i:"🎂",u:"../calculators/age-calculator.html"},
  {n:"Retirement Calculator",c:"Calculators",i:"🏖️",u:"../calculators/retirement-calculator.html"},
  {n:"Percentage Calculator",c:"Calculators",i:"💯",u:"../calculators/percentage-calculator.html"},
  {n:"Unit Converter",c:"Calculators",i:"🔄",u:"../calculators/unit-converter.html"},
  {n:"GST Calculator",c:"Calculators",i:"🧾",u:"../calculators/gst-calculator.html"},
  {n:"Loan Calculator",c:"Calculators",i:"🏦",u:"../calculators/loan-calculator.html"},
  {n:"Compound Interest",c:"Calculators",i:"📊",u:"../calculators/compound-interest.html"},
  {n:"Discount Calculator",c:"Calculators",i:"🏷️",u:"../calculators/discount-calculator.html"},
  {n:"Image Compressor",c:"Image Tools",i:"🗜️",u:"../image-tools/image-compressor.html"},
  {n:"Image Resizer",c:"Image Tools",i:"📐",u:"../image-tools/image-resizer.html"},
  {n:"Image Cropper",c:"Image Tools",i:"✂️",u:"../image-tools/image-cropper.html"},
  {n:"JPG to PNG",c:"Image Tools",i:"🖼️",u:"../image-tools/jpg-to-png.html"},
  {n:"PNG to JPG",c:"Image Tools",i:"🖼️",u:"../image-tools/png-to-jpg.html"},
  {n:"Meme Generator",c:"Image Tools",i:"😂",u:"../image-tools/meme-generator.html"},
  {n:"Color Extractor",c:"Image Tools",i:"🎨",u:"../image-tools/color-extractor.html"},
  {n:"Image Watermark",c:"Image Tools",i:"💧",u:"../image-tools/image-watermark.html"},
  {n:"JSON Formatter",c:"Developer Tools",i:"{ }",u:"../developer-tools/json-formatter.html"},
  {n:"JSON Validator",c:"Developer Tools",i:"✅",u:"../developer-tools/json-validator.html"},
  {n:"CSS Minifier",c:"Developer Tools",i:"#",u:"../developer-tools/css-minifier.html"},
  {n:"JS Minifier",c:"Developer Tools",i:"JS",u:"../developer-tools/js-minifier.html"},
  {n:"HTML Minifier",c:"Developer Tools",i:"</>",u:"../developer-tools/html-minifier.html"},
  {n:"Base64 Encoder",c:"Developer Tools",i:"🔏",u:"../developer-tools/base64-encoder.html"},
  {n:"Base64 Decoder",c:"Developer Tools",i:"🔓",u:"../developer-tools/base64-decoder.html"},
  {n:"URL Encoder",c:"Developer Tools",i:"🔗",u:"../developer-tools/url-encoder.html"},
  {n:"Regex Tester",c:"Developer Tools",i:"🔍",u:"../developer-tools/regex-tester.html"},
  {n:"Password Generator",c:"Security Tools",i:"🔑",u:"../security-tools/password-generator.html"},
  {n:"Hash Generator",c:"Security Tools",i:"🔐",u:"../security-tools/hash-generator.html"},
  {n:"MD5 Generator",c:"Security Tools",i:"🛡️",u:"../security-tools/md5-generator.html"},
  {n:"SHA256 Generator",c:"Security Tools",i:"🔒",u:"../security-tools/sha256-generator.html"},
  {n:"UUID Generator",c:"Security Tools",i:"🆔",u:"../security-tools/uuid-generator.html"},
  {n:"Password Strength",c:"Security Tools",i:"💪",u:"../security-tools/password-strength.html"},
  {n:"Word Counter",c:"Text Tools",i:"📊",u:"../text-tools/word-counter.html"},
  {n:"Character Counter",c:"Text Tools",i:"🔤",u:"../text-tools/character-counter.html"},
  {n:"Case Converter",c:"Text Tools",i:"🔡",u:"../text-tools/case-converter.html"},
  {n:"Text Sorter",c:"Text Tools",i:"🔢",u:"../text-tools/text-sorter.html"},
  {n:"Lorem Ipsum Generator",c:"Text Tools",i:"📝",u:"../text-tools/lorem-ipsum.html"},
  {n:"Text Reverser",c:"Text Tools",i:"↩️",u:"../text-tools/text-reverser.html"},
  {n:"Slug Generator",c:"Text Tools",i:"🐌",u:"../text-tools/slug-generator.html"},
  {n:"Duplicate Remover",c:"Text Tools",i:"🗑️",u:"../text-tools/duplicate-remover.html"},
  {n:"Meta Tag Generator",c:"SEO Tools",i:"🏷️",u:"../seo-tools/meta-tag-generator.html"},
  {n:"Open Graph Generator",c:"SEO Tools",i:"📱",u:"../seo-tools/og-generator.html"},
  {n:"Keyword Density",c:"SEO Tools",i:"🔑",u:"../seo-tools/keyword-density.html"},
  {n:"Robots.txt Generator",c:"SEO Tools",i:"🤖",u:"../seo-tools/robots-generator.html"},
  {n:"Sitemap Generator",c:"SEO Tools",i:"🗺️",u:"../seo-tools/sitemap-generator.html"},
  {n:"Length Converter",c:"Unit Converters",i:"📏",u:"../unit-converters/length-converter.html"},
  {n:"Weight Converter",c:"Unit Converters",i:"⚖️",u:"../unit-converters/weight-converter.html"},
  {n:"Temperature Converter",c:"Unit Converters",i:"🌡️",u:"../unit-converters/temperature-converter.html"},
  {n:"Area Converter",c:"Unit Converters",i:"📐",u:"../unit-converters/area-converter.html"},
  {n:"Speed Converter",c:"Unit Converters",i:"🚀",u:"../unit-converters/speed-converter.html"},
  {n:"Data Storage Converter",c:"Unit Converters",i:"💾",u:"../unit-converters/data-storage.html"},
  {n:"QR Code Generator",c:"Utility Tools",i:"📱",u:"../utility-tools/qr-generator.html"},
  {n:"Color Picker",c:"Utility Tools",i:"🎨",u:"../utility-tools/color-picker.html"},
  {n:"Gradient Generator",c:"Utility Tools",i:"🌈",u:"../utility-tools/gradient-generator.html"},
  {n:"Random Number",c:"Utility Tools",i:"🎲",u:"../utility-tools/random-number.html"},
  {n:"Timestamp Converter",c:"Utility Tools",i:"⏰",u:"../utility-tools/timestamp-converter.html"},
  {n:"Binary Converter",c:"Utility Tools",i:"💻",u:"../utility-tools/binary-converter.html"},
  {n:"Crop Calculator",c:"Farmers Tools",i:"🌱",u:"../farmers-tools/crop-calculator.html"},
  {n:"Fertilizer Calculator",c:"Farmers Tools",i:"🧪",u:"../farmers-tools/fertilizer-calculator.html"},
  {n:"Irrigation Planner",c:"Farmers Tools",i:"💧",u:"../farmers-tools/irrigation-planner.html"},
  {n:"Seed Rate Calculator",c:"Farmers Tools",i:"🌾",u:"../farmers-tools/seed-rate.html"},
  {n:"Land Area Calculator",c:"Farmers Tools",i:"🗺️",u:"../farmers-tools/land-area.html"},
  {n:"Dairy Feed Calculator",c:"Farmers Tools",i:"🐄",u:"../farmers-tools/dairy-feed.html"},
];

function oSb(){document.getElementById('sb').classList.add('open');document.getElementById('overlay').classList.add('active');document.body.style.overflow='hidden';setTimeout(()=>{const s=document.getElementById('sbSrch');if(s)s.focus()},300)}
function cSb(){document.getElementById('sb').classList.remove('open');document.getElementById('overlay').classList.remove('active');document.body.style.overflow=''}
function tSb(id){const el=document.getElementById(id),ex=el.classList.contains('expanded');document.querySelectorAll('.sb-item.expanded').forEach(e=>e.classList.remove('expanded'));if(!ex)el.classList.add('expanded')}
const sbSrch=document.getElementById('sbSrch');
if(sbSrch)sbSrch.addEventListener('input',function(){
  const q=this.value.toLowerCase();
  document.querySelectorAll('.sb-item').forEach(i=>{
    i.style.display=i.textContent.toLowerCase().includes(q)?'':'none';
    if(q&&i.textContent.toLowerCase().includes(q))i.classList.add('expanded');
  });
});
function tTh(){const d=document.documentElement.getAttribute('data-theme')==='dark';document.documentElement.setAttribute('data-theme',d?'light':'dark');localStorage.setItem('theme',d?'light':'dark');uTh(!d)}
function uTh(dark){const si=document.getElementById('sbTi'),st=document.getElementById('sbTt');if(si)si.textContent=dark?'☀️':'🌙';if(st)st.textContent=dark?'Light Mode':'Dark Mode'}
const th=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',th);uTh(th==='dark');
function oSrch(){document.getElementById('sOv').classList.add('active');document.body.style.overflow='hidden';document.getElementById('sIn').focus();rRes('')}
function cSrch(){document.getElementById('sOv').classList.remove('active');document.body.style.overflow=''}
function hSO(e){if(e.target===document.getElementById('sOv'))cSrch()}
function rRes(q){
  const el=document.getElementById('sRes');
  const r=q?TOOLS.filter(t=>t.n.toLowerCase().includes(q.toLowerCase())||t.c.toLowerCase().includes(q.toLowerCase())):TOOLS.slice(0,8);
  if(!r.length){el.innerHTML=`<div style="padding:20px;text-align:center;color:var(--text2);font-size:.84rem">No results for "${q}"</div>`;return}
  el.innerHTML=r.slice(0,8).map(t=>`<a href="${t.u}" class="sri" onclick="cSrch()"><div class="sri-i">${t.i}</div><div><div class="sri-n">${t.n}</div><div class="sri-c">${t.c}</div></div></a>`).join('');
}
const sIn=document.getElementById('sIn');
if(sIn)sIn.addEventListener('input',function(){rRes(this.value)});
const hSrch=document.getElementById('hSrch');
if(hSrch)hSrch.addEventListener('focus',oSrch);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){cSrch();cSb()}});
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('nav');
  if(nav)nav.classList.toggle('scrolled',scrollY>20);
  const btt=document.getElementById('btt');
  if(btt)btt.classList.toggle('visible',scrollY>400);
});
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';obs.unobserve(e.target)}})},{threshold:.07});
document.querySelectorAll('.cc,.tc,.hwc').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(16px)';
  el.style.transition='opacity .43s ease,transform .43s ease,border-color .24s,box-shadow .24s';
  obs.observe(el);
});
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.closest('.faq-item');
    item.classList.toggle('open');
  });
});
