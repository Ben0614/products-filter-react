(this["webpackJsonpproducts-filter-react"]=this["webpackJsonpproducts-filter-react"]||[]).push([[3],{16:function(t,e,n){"use strict";n.r(e),n.d(e,"getCLS",(function(){return m})),n.d(e,"getFCP",(function(){return S})),n.d(e,"getFID",(function(){return F})),n.d(e,"getLCP",(function(){return k})),n.d(e,"getTTFB",(function(){return C}));var i,r,a,o,u=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},f=function(t,e){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},p="function"==typeof WeakSet?new WeakSet:new Set,d=function(t,e,n){var i;return function(){e.value>=0&&(n||p.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},m=function(t,e){var n,i=u("CLS",0),r=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},a=c("layout-shift",r);a&&(n=d(t,i,e),f((function(){a.takeRecords().map(r),n()})),s((function(){i=u("CLS",0),n=d(t,i,e)})))},v=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},h=function(){f((function(t){var e=t.timeStamp;v=e}),!0)},g=function(){return v<0&&(v=l(),h(),s((function(){setTimeout((function(){v=l(),h()}),0)}))),{get timeStamp(){return v}}},S=function(t,e){var n,i=g(),r=u("FCP"),a=function(t){"first-contentful-paint"===t.name&&(f&&f.disconnect(),t.startTime<i.timeStamp&&(r.value=t.startTime,r.entries.push(t),p.add(r),n()))},o=performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(n=d(t,r,e),o&&a(o),s((function(i){r=u("FCP"),n=d(t,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,p.add(r),n()}))}))})))},y={passive:!0,capture:!0},E=new Date,w=function(t,e){i||(i=e,r=t,a=new Date,b(removeEventListener),L())},L=function(){if(r>=0&&r<a-E){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(e){e(t)})),o=[]}},T=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){w(t,e),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",i,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",i,y)}(e,t):w(e,t)}},b=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,T,y)}))},F=function(t,e){var n,a=g(),m=u("FID"),v=function(t){t.startTime<a.timeStamp&&(m.value=t.processingStart-t.startTime,m.entries.push(t),p.add(m),n())},l=c("first-input",v);n=d(t,m,e),l&&f((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&s((function(){var a;m=u("FID"),n=d(t,m,e),o=[],r=-1,i=null,b(addEventListener),a=v,o.push(a),L()}))},k=function(t,e){var n,i=g(),r=u("LCP"),a=function(t){var e=t.startTime;e<i.timeStamp&&(r.value=e,r.entries.push(t)),n()},o=c("largest-contentful-paint",a);if(o){n=d(t,r,e);var m=function(){p.has(r)||(o.takeRecords().map(a),o.disconnect(),p.add(r),n())};["keydown","click"].forEach((function(t){addEventListener(t,m,{once:!0,capture:!0})})),f(m,!0),s((function(i){r=u("LCP"),n=d(t,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,p.add(r),n()}))}))}))}},C=function(t){var e,n=u("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();if(n.value=n.delta=e.responseStart,n.value<0)return;n.entries=[e],t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=3.020cd67a.chunk.js.map