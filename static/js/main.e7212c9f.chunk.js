(this.webpackJsonpt3=this.webpackJsonpt3||[]).push([[0],{67:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(54),o=a.n(i),s=(a(67),a(17)),r=a(45),l=a(37),h=a.n(l),j=a(126),p=a(130),d=a(128),u=a(127),b=a(131),g=a(129),x=a(7),m=a(123),O=a(124),f=a(125),v=a(121),y=a(2),w=Object(x.a)(O.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)({},t.typography.body2),{},{padding:t.spacing(4),textAlign:"center",color:t.palette.text.secondary})}));var N=function(e){var t=Object(c.useState)(1),a=Object(s.a)(t,2),n=a[0],i=a[1],o=Object(c.useState)([]),r=Object(s.a)(o,2),l=r[0],x=r[1];return Object(c.useEffect)((function(){var t=[];h.a.get(e.api1).then((function(a){t=a.data.articles,h.a.get(e.api2).then((function(a){t=t.concat(a.data.articles),h.a.get(e.api3).then((function(e){t=t.concat(e.data.articles),console.log(t),x(t)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}),[e.api1,e.api2,e.api3]),Object(y.jsxs)(f.a,{xs:{width:"100%"},className:"box",children:[Object(y.jsx)("div",{className:"page",children:Object(y.jsx)(v.a,{count:10,page:n,onChange:function(e,t){console.log(t),i(t)},textAlign:"center"})}),Object(y.jsx)(m.a,{alignItems:"left",container:!0,rowSpacing:{xs:30,sm:3,md:3},columnSpacing:1,children:l.slice(6*(n-1),6*n).map((function(e){return Object(y.jsx)(w,{className:"items",children:Object(y.jsx)("div",{children:Object(y.jsxs)(j.a,{sx:{maxWidth:358},className:"abc",children:[Object(y.jsx)(u.a,{component:"img",alt:"loading",height:"220",image:e.urlToImage,className:"img"}),Object(y.jsxs)(d.a,{children:[Object(y.jsx)(g.a,{gutterBottom:!0,variant:"h7",component:"div",children:e.author}),Object(y.jsx)(g.a,{gutterBottom:!0,variant:"h6",component:"div",children:e.title}),Object(y.jsx)(g.a,{variant:"body2",color:"black",children:e.content}),Object(y.jsxs)(g.a,{variant:"body3",color:"text.secondary",children:["Published at : ",e.publishedAt]})]}),Object(y.jsx)(p.a,{textAlign:"center",className:"cards",children:Object(y.jsx)(b.a,{size:"small",children:Object(y.jsx)("a",{href:e.url,children:"More Description"})})})]})})})}))})]})};a(93);var S=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(N,{api1:"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2eef8ae39878472798e22a1548e75ac0",api2:"https://newsapi.org/v2/everything?q=apple&from=2021-10-13&to=2021-10-13&sortBy=popularity&apiKey=2eef8ae39878472798e22a1548e75ac0",api3:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2eef8ae39878472798e22a1548e75ac0"})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,132)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),i(e),o(e)}))};o.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root")),A()}},[[94,1,2]]]);
//# sourceMappingURL=main.e7212c9f.chunk.js.map