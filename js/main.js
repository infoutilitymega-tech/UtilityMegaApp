// Google Analytics
(function () {
var gtagScript = document.createElement("script");
gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-HJ7NVQ7CMJ";
gtagScript.async = true;
document.head.appendChild(gtagScript);

```
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
window.gtag = gtag;

gtag('js', new Date());
gtag('config', 'G-HJ7NVQ7CMJ');
```

})();

// Wait for DOM before adding Vercel scripts
document.addEventListener("DOMContentLoaded", function () {

```
// Vercel Insights
var insights = document.createElement("script");
insights.src = "/_vercel/insights/script.js";
insights.defer = true;
document.body.appendChild(insights);

// Vercel Speed Insights
var speedInsights = document.createElement("script");
speedInsights.src = "/_vercel/speed-insights/script.js";
speedInsights.defer = true;
document.body.appendChild(speedInsights);
```

});
s