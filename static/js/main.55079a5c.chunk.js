(this["webpackJsonpcrypto-dashboard"]=this["webpackJsonpcrypto-dashboard"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(13),a=c.n(s),i=(c(19),c(20),c(4)),o=(c(21),c(14)),j=c.n(o),d=(c(40),c(0));var l=function(e){var t=e.coin,c=t.price_change_percentage_24h;return Object(d.jsxs)("tr",{className:"coin-row",children:[Object(d.jsxs)("td",{children:[" ",Object(d.jsx)("img",{alt:t.id,src:t.image})," "]}),Object(d.jsx)("td",{className:"coin-name",children:t.name}),Object(d.jsx)("td",{className:"coin-symbol",children:t.symbol.toUpperCase()}),Object(d.jsxs)("td",{children:["\u20ac",t.current_price.toLocaleString()]}),Object(d.jsxs)("td",{style:{color:c<0?"red":"green"},children:[c.toFixed(2),"%"]}),Object(d.jsxs)("td",{children:["\u20ac",t.ath.toLocaleString()]}),Object(d.jsxs)("td",{children:["\u20ac",t.market_cap.toLocaleString()]}),Object(d.jsxs)("td",{children:["\u20ac",t.total_volume.toLocaleString()]})]})};function h(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(i.a)(s,2),o=a[0],h=a[1];Object(n.useEffect)((function(){j.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[]);var b=c.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Cryptocurrencies Dashboard"}),Object(d.jsx)("div",{id:"SearchBar",children:Object(d.jsx)("input",{id:"SearchBarInput",type:"text",placeholder:"Search a cryptocurrency",onChange:function(e){h(e.target.value)}})}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Logo"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Symbol"}),Object(d.jsx)("th",{children:"Price"}),Object(d.jsx)("th",{children:"24h change"}),Object(d.jsx)("th",{children:"ATH"}),Object(d.jsx)("th",{children:"Market cap"}),Object(d.jsx)("th",{children:"Total volume"})]})}),Object(d.jsx)("tbody",{children:b.map((function(e){return Object(d.jsx)(l,{coin:e},e.id)}))})]})]})}var b=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),u()}},[[42,1,2]]]);
//# sourceMappingURL=main.55079a5c.chunk.js.map