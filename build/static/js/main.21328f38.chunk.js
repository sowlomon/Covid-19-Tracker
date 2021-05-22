(this["webpackJsonpcorana-virus-tracker"]=this["webpackJsonpcorana-virus-tracker"]||[]).push([[0],{118:function(e,t,a){},120:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},234:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(10),i=a.n(n),r=(a(118),a(27)),o=a.n(r),u=a(41),A=a(17),l=a(269),j=a(270),d=a(271),p=a(263),x=a(267),h=a(61),O=(a(120),a(268)),b=a(3);var I=function(e){var t=e.title,a=e.cases,c=e.isRed,s=e.active,n=e.total,i=Object(h.a)(e,["title","cases","isRed","active","total"]);return Object(b.jsx)(p.a,{onClick:i.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(c&&"infoBox--red"),children:Object(b.jsxs)(x.a,{children:[Object(b.jsxs)(O.a,{className:"infoBox_title",color:"textSecondary",children:[t," "]}),Object(b.jsx)("h2",{className:"infoBox_cases ".concat(!c&&"infoBox_cases--green"),children:a}),Object(b.jsxs)(O.a,{className:"infoBox_total",color:"textSecondary",children:[n," Total"]})]})})},m=(a(126),a(274)),g=a(275),f=a(13),N=a(20),L=a.n(N),C=a(272),Q=a(273),v={cases:{hex:"#CC1034",multiplier:400},recovered:{hex:"green",multiplier:500},deaths:{hex:"#fb4443",multiplier:1e3}},y=function(e){var t=Object(f.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},R=function(e){return e?"+".concat(L()(e).format("0.0a")):"+0"},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(b.jsx)(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:v[t].hex,fillColor:v[t].hex,radius:Math.sqrt(e[t])*v[t].multiplier,children:Object(b.jsx)(Q.a,{children:Object(b.jsxs)("div",{className:"info-container",children:[Object(b.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(b.jsx)("div",{className:"info-name",children:e.country}),Object(b.jsxs)("div",{className:"info-confirmed",children:["Cases: ",L()(e.cases).format("0,0")]}),Object(b.jsxs)("div",{className:"info-recovered",children:["Recovered: ",L()(e.cases).format("0,0")]}),Object(b.jsxs)("div",{className:"info-deaths",children:["Deaths: ",L()(e.cases).format("0,0")]})]})})})}))};var q=function(e){var t=e.casesType,a=e.countries,c=e.center,s=e.zoom;return Object(b.jsx)("div",{className:"map",children:Object(b.jsxs)(m.a,{center:c,zoom:s,children:[Object(b.jsx)(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),S(a,t)]})})};a(127);var E=function(e){var t=e.countries;return Object(b.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,a=e.cases;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t}),Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:L()(a).format()})})]})}))})},M=a(107),z={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return L()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return L()(e).format("0a")}}}]}},J=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",c=[];for(var s in e.cases){if(t){var n={x:s,y:e[a][s]-t};c.push(n)}t=e[a][s]}return c};var W=function(e){var t=e.casesType,a=void 0===t?"cases":t,s=Object(h.a)(e,["casesType"]),n=Object(c.useState)({}),i=Object(A.a)(n,2),r=i[0],l=i[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=J(e,a);l(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),Object(b.jsx)("div",{className:s.className,children:(null===r||void 0===r?void 0:r.length)>0&&Object(b.jsx)(M.a,{options:z,data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]}})})};a(234),a(235);var D=function(){var e=Object(c.useState)([]),t=Object(A.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("worldwide"),i=Object(A.a)(n,2),r=i[0],h=i[1],O=Object(c.useState)({}),m=Object(A.a)(O,2),g=m[0],f=m[1],N=Object(c.useState)([]),L=Object(A.a)(N,2),C=L[0],Q=L[1],v=Object(c.useState)({lat:34.80746,lng:-40.4796}),S=Object(A.a)(v,2),M=S[0],z=S[1],J=Object(c.useState)(3),D=Object(A.a)(J,2),P=D[0],B=D[1],Z=Object(c.useState)([]),w=Object(A.a)(Z,2),T=w[0],X=w[1],U=Object(c.useState)("cases"),H=Object(A.a)(U,2),F=H[0],V=H[1];Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){f(e)}))}),[]),Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=y(e);s(t),X(e),Q(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,c="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(c).then((function(e){return e.json()})).then((function(e){h(a),f(e),z([e.countryInfo.lat,e.countryInfo.long]),B(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsxs)("div",{className:"app_left",children:[Object(b.jsxs)("div",{className:"app_header",children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)("img",{style:{height:"45px"},src:"data:image/jpeg;base64,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",alt:"covid"})," COVID-19-TRACKER "]}),Object(b.jsx)(l.a,{className:"app_dropdown",children:Object(b.jsxs)(j.a,{variant:"outlined",onChange:k,value:r,children:[Object(b.jsx)(d.a,{value:"worldwide",children:"Worldwide"}),a.map((function(e){return Object(b.jsx)(d.a,{value:e.value,children:e.name})}))]})})]}),Object(b.jsxs)("div",{className:"app_stats",children:[Object(b.jsx)(I,{isRed:!0,active:"cases"===F,onClick:function(e){return V("cases")},title:"Coronavirus cases",cases:R(g.todayCases),total:R(g.cases)}),Object(b.jsx)(I,{active:"recovered"===F,onClick:function(e){return V("recovered")},title:"Recovered",cases:R(g.todayRecovered),total:R(g.recovered)}),Object(b.jsx)(I,{isRed:!0,active:"deaths"===F,onClick:function(e){return V("deaths")},title:"Deaths",cases:R(g.todayDeaths),total:R(g.deaths)})]}),Object(b.jsx)(q,{casesType:F,countries:T,center:M,zoom:P})]}),Object(b.jsx)(p.a,{className:"app_right",children:Object(b.jsxs)(x.a,{children:[Object(b.jsx)("h3",{children:"Live Cases By Country"}),Object(b.jsx)(E,{countries:C}),Object(b.jsxs)("h3",{className:"app_graphTitle",children:["Worldwide New ",F]}),Object(b.jsx)(W,{className:"app_graph",casesType:F}),Object(b.jsx)("h3",{className:"app_preTitle",children:"Prevention For Covid-19:"}),Object(b.jsx)("span",{children:"1. Wash your hands often."}),Object(b.jsx)("span",{children:"2. Use your elbow to block your mouth while you cough."}),Object(b.jsx)("span",{children:"3. Always put your mask around people."}),Object(b.jsx)("span",{children:"4. Avoid using your hands to touch your face."})]})})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,277)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),P()}},[[237,1,2]]]);
//# sourceMappingURL=main.21328f38.chunk.js.map