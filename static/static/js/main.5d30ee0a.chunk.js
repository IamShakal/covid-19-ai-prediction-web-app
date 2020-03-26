(this["webpackJsonpcorona-prediction-analytics"]=this["webpackJsonpcorona-prediction-analytics"]||[]).push([[0],{132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},183:function(e,a,t){"use strict";t.r(a);t(99),t(107),t(108);var n=t(0),c=t.n(n),l=t(91),r=t.n(l),s=t(2),i=t(34),o=t(6),m={countries:"".concat("/api/","countries"),country_predictions:"".concat("/api/","country/predictions")},u="".concat("/","static/static/media/homeImage.87ae5d21.png"),d="".concat("/","static/static/media/resourcesImage.9535de54.png"),E="".concat("/","static/static/media/issatsoIeeImage.png"),f="".concat("/","static/static/media/ramsis_image.jpeg"),h="".concat("/","static/static/media/seif_image.jpeg"),p=t(12),v=t(53),b=t.n(v),N=t(35);var g=function(e,a){var t=a.payload;switch(a.type){case"SET_COUNTRIES":return Object(N.a)({},e,{countries:t.countries});case"SET_PREDICTIONS":return Object(N.a)({},e,{predictions:t.predictions});case"SET_OFFILINE":return Object(N.a)({},e,{is_offline:t.is_offline});default:return e}},y={is_offline:!1,countries:{data:[],has_error:!1},predictions:{deaths:[],cases:[],has_error:!1}},k=Object(n.createContext)(y);function w(e){var a=e.children,t=Object(n.useReducer)(g,y),l=Object(p.a)(t,2),r=l[0],s=l[1];var i={is_offline:r.is_offline,countries:r.countries,predictions:r.predictions,fetchCountries:function(){return new Promise((function(e,a){var t={data:[],has_error:!1};b.a.get(m.countries).then((function(a){t.data=a.data.countries,e(t)})).catch((function(e){t.has_error=!0,a({err:e,countries:t})}))}))},setCountries:function(e){s({type:"SET_COUNTRIES",payload:{countries:e}})},fetchPredictions:function(e){return new Promise((function(a,t){var n={deaths:[],cases:[],recovered:[],has_error:!1};b.a.get("".concat(m.country_predictions,"/").concat(e)).then((function(e){var t=e.data.predictions,c=t.deaths,l=t.cases,r=t.recovered;n.deaths=c,n.cases=l,n.recovered=r,a(n)})).catch((function(e){n.has_error=!0,t({err:e,predictions:n})}))}))},setPredictions:function(e){s({type:"SET_PREDICTIONS",payload:{predictions:e}})},getCountry:function(e){return r.countries.data.filter((function(a){return a.id===e}))[0]||null},setOffline:function(e){s({type:"SET_OFFILINE",payload:{is_offline:e}})}};return c.a.createElement(k.Provider,{value:i},a)}t(132),t(133),t(134);var C=t(18),O=t(92),S=t(93),j=t(96),I=t(97),_=(t(135),function(e){Object(I.a)(t,e);var a=Object(j.a)(t);function t(){var e;Object(O.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={loaded:!1,error:!1},e}return Object(S.a)(t,[{key:"handleLoad",value:function(){this.setState({loaded:!0})}},{key:"handleError",value:function(){this.setState({error:!0})}},{key:"componentDidMount",value:function(){}},{key:"Loading",value:function(e){return e?null:c.a.createElement("small",null,"...")}},{key:"render",value:function(){var e=this,a=this.state,t=a.error,n=a.loaded;return t?null:c.a.createElement("div",{className:"full-height-width"},this.Loading(n),c.a.createElement("img",{alt:"",style:{opacity:n?1:0},src:this.props.src,onLoad:function(){return e.handleLoad()},onError:function(){return e.handleError()}}))}}]),t}(n.Component));var L=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"details"},c.a.createElement("h1",{className:"title"}," Covid-19 Ai Predictions "),c.a.createElement("p",{className:"paragraph"},"Hello visitor, we've took the initiative to create predictions for countries infected. Feel free to take a closer look at  the graphs.",c.a.createElement("br",null),"Be aware of what we might get ourselves into, if we keep on neglecting the dangers of the current situation.",c.a.createElement("br",null),"#StaySafe"),c.a.createElement("div",{className:"btns"},c.a.createElement(s.b,{to:"/predictions",className:"btn-primary hg"},"Predictions"),c.a.createElement(s.b,{to:"/about",className:"btn-outline-primary hg"},"About us"))),c.a.createElement("div",{className:"image"},c.a.createElement(_,{src:u})))};function A(e){if(e<1e3)return e;if(e>=1e6){var a=Math.trunc(e/1e6),t=Math.trunc(e%1e6/1e3);return 0===t?"".concat(a,"M"):"".concat(a,",").concat(t,"M")}if(e>=1e3){var n=Math.trunc(e/1e3),c=Math.trunc(e%1e3/100);return 0===c?"".concat(n,"K"):"".concat(n,",").concat(c,"K")}}function x(e){switch(e){case"03/02":return"Mars";case"04/01":return"April";case"05/01":return"May";case"06/01":return"June";default:return null}}var P=function(e){var a=e.id,t=e.image,n=e.continent,l=e.name,r=e.deaths,i=e.cases;return c.a.createElement("div",{className:"country-card"},c.a.createElement("div",{className:"top-bar"},c.a.createElement("div",{className:"image"},c.a.createElement(_,{src:t.src})),c.a.createElement("div",{className:"name"},c.a.createElement("h4",null,l),c.a.createElement("small",null,n))),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"info"},c.a.createElement("small",null,A(r)),c.a.createElement("span",null,"Deaths")),c.a.createElement("div",{className:"info"},c.a.createElement("small",null,A(i)),c.a.createElement("span",null,"Infections")),c.a.createElement(s.b,{to:"/predictions/country/".concat(a),className:"btn-primary small round "},"See more ",c.a.createElement("i",{className:"right fa fa-arrow-right"})," ")))};var M=function(){var e=Object(n.useContext)(k).countries,a=e.data;return e.has_error?c.a.createElement("div",{className:"countries"},c.a.createElement("h1",{className:"title"}," Available countries "),c.a.createElement("div",{className:"error"},"Oops, something went wrong while loading countries. Repeate later please !")):a&&0===a.length?c.a.createElement("div",{className:"countries"},c.a.createElement("h1",{className:"title"}," Available countries  "),c.a.createElement("div",{className:"error"},"Oops, we still have no data to display")):c.a.createElement("div",{className:"countries"},c.a.createElement("h1",{className:"title"}," Available countries  "),c.a.createElement("div",{className:"container"},a.map((function(e){return c.a.createElement(P,Object.assign({key:e.id},e))}))))},R=t(56),D=t.n(R);var T=function(){var e=Object(n.useRef)(null),a=Object(n.useRef)(null),t=Object(n.useContext)(k),l=t.getCountry,r=t.predictions,i=t.setPredictions,o=t.fetchPredictions,m=Object(n.useState)(!0),u=Object(p.a)(m,2),d=u[0],E=u[1],f=Object(n.useState)(null),h=Object(p.a)(f,2),v=h[0],b=h[1],N=Object(n.useState)([{month:"Mars",deaths:0,cases:0},{month:"April",deaths:0,cases:0},{month:"May",deaths:0,cases:0},{month:"June",deaths:0,cases:0}]),g=Object(p.a)(N,2),y=g[0],w=g[1],O=Object(C.f)().id;if(Object(n.useEffect)((function(){b(l(Number(O))),o(O).then((function(e){i(e),E(!1),w(function(e){for(var a=[],t=e.deaths,n=e.cases,c=0;c<t.length;c++){var l=x(t[c].date);l&&a.push({month:l,deaths:"June"!==l?t[c+29].y:t[c].y,cases:"June"!==l?n[c+29].y:n[c].y})}return a}(e))})).catch((function(e){e.err;var a=e.predictions;i(a),E(!1)}))}),[]),Object(n.useEffect)((function(){if(!d&&!r.has_error){var t=[{label:"Infections",borderColor:"rgba(83, 109, 254, .6)",color:"rgba(83, 109, 254, .6)",pointBorderColor:"rgba(83, 109, 254, .6)",pointBackgroundColor:"rgba(83, 109, 254, .6)",fill:!0,showLine:!0,backgroundColor:"rgba(83, 109, 254, .6)",data:r.cases},{label:"Deaths",borderColor:"tomato",pointBorderColor:"tomato",pointBackgroundColor:"tomato",fill:!0,showLine:!0,backgroundColor:"tomato",data:r.deaths}],n=(new D.a(e.current,{type:"scatter",data:{datasets:t},options:{tooltips:{callbacks:{title:function(e){var a=r.deaths[e[0].xLabel].date,t=x(a);return t||"Date: ".concat(a)},label:function(e){return" "+e.yLabel.toLocaleString()}}},elements:{point:{radius:1}},legend:{labels:{fontColor:"black",fontSize:14}},responsive:!0,scales:{xAxes:[{gridLines:{zeroLineColor:"transparent"},ticks:{autoSkip:!1,stepSize:1,min:0,max:92,padding:20,fontSize:14,fontColor:"rgba(0,0,0,0.5)",callback:function(e,a){return x(r.cases[a].date)},fontStyle:"bold"}}],yAxes:[{ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,padding:20,callback:function(e){return e.toLocaleString()}},gridLines:{padding:20,zeroLineColor:"transparent"}}]}}}),v.deaths),c=v.cases;new D.a(a.current,{type:"doughnut",data:{datasets:[{data:[n,c],fill:!0,backgroundColor:["tomato","rgba(83, 109, 254, 1)"]}],labels:["Deaths","Cases"]},options:{legend:{labels:{fontColor:"black",fontSize:14}},cutoutPercentage:50}})}}),[d]),d)return c.a.createElement("div",{className:"predictions"},c.a.createElement("div",{className:"loading"},"Loading"));if(v&&!d){var S=v.name,j=v.deaths,I=v.cases;return r&&r.has_error?c.a.createElement("div",{className:"predictions"},c.a.createElement("div",{className:"top-bar"},c.a.createElement(s.b,{to:"/predictions",className:"btn-back icon-only"},c.a.createElement("i",{className:"fa fa-arrow-left"})," "),c.a.createElement("h1",{className:"title"},"Predictions of the number of infected cases in ",S," ( Mars - June )")),c.a.createElement("div",{className:"error"},"Oops, something went wrong while loading data. Repeate later please !")):c.a.createElement("div",{className:"predictions"},c.a.createElement("div",{className:"top-bar"},c.a.createElement(s.b,{to:"/predictions",className:"btn-back icon-only"},c.a.createElement("i",{className:"fa fa-arrow-left"})," "),c.a.createElement("h1",{className:"title"},"Predictions of the number of infected cases in ",S," ( Mars - June )")),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"chart-infos"},c.a.createElement("div",{className:"chart"},c.a.createElement("canvas",{width:"120%",height:"80%",ref:e})),c.a.createElement("div",{className:"infos"},c.a.createElement("h3",null,"Total of today:  ",I+j," "),c.a.createElement("canvas",{width:"120%",height:"100%",ref:a}))),c.a.createElement("h1",{className:"title"},"Average prediction per month"),c.a.createElement("div",{className:"table-3"},c.a.createElement("div",{className:"line"},c.a.createElement("span",null," ",c.a.createElement("small",{className:"bold-md"},"Month")," "),c.a.createElement("span",null," ",c.a.createElement("small",{className:"bold-md"},"Infections")," "),c.a.createElement("span",null," ",c.a.createElement("small",{className:"bold-md"},"Deaths")," ")),y.map((function(e,a){var t=e.month,n=e.deaths,l=e.cases;return c.a.createElement("div",{key:a,className:"line"},c.a.createElement("span",null," ",c.a.createElement("small",{className:"bold-md"},t)," "),c.a.createElement("span",null," ",c.a.createElement("small",null,l>=0?l.toLocaleString():0)," "),c.a.createElement("span",null," ",c.a.createElement("small",null,n>=0?n.toLocaleString():0)," "))})))))}return c.a.createElement(C.a,{to:"/"})};var J=function(){return c.a.createElement("div",{className:"about"},c.a.createElement("h1",{className:"title"},"About us"),c.a.createElement("p",{className:"paragraph"},"This is a project dedicated to the current situations and to make people aware of how severe it might get. We've used machine learning skills to predict the confirmed cases/deaths in infected countries with Covid-19. The data and predictions will be updated daily according to the newly confirmed cases and deaths.",c.a.createElement("br",null),"Stay safe everyone we will get through this together."),c.a.createElement("div",{className:"developers"},c.a.createElement("div",{className:"dev-card"},c.a.createElement("div",{className:"top-bar"},c.a.createElement("div",{className:"image"},c.a.createElement(_,{src:h})),c.a.createElement("div",{className:"name"},c.a.createElement("h3",null,"Seif Gharres"),c.a.createElement("small",null,"Web developer / designer"))),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"sub-title"},c.a.createElement("small",null,"Who am i ?"),c.a.createElement("span",null)),c.a.createElement("p",{className:"paragraph"},"I'm a highly motivated web developer / designer who focuses on writing clean, elegant and efficient code."),c.a.createElement("div",{className:"sub-title"},c.a.createElement("small",null,"Skills"),c.a.createElement("span",null)),c.a.createElement("div",{className:"skills"},c.a.createElement("small",{className:"counted"},"Python ( Django )"),c.a.createElement("small",{className:"counted"},"JavaScript ( ReactJs )"),c.a.createElement("small",{className:"counted"},"Sass, Css, Html")),c.a.createElement("div",{className:"sub-title"},c.a.createElement("small",null,"contact"),c.a.createElement("span",null)),c.a.createElement("div",{className:"contact"},c.a.createElement("small",{className:"counted"}," For Business inquiries"),c.a.createElement("span",{className:"mail"},"seifgharrese.developer@gmail.com"),c.a.createElement("small",{className:"counted"},"Follow me on"),c.a.createElement("div",{className:"socials"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/seif-gharres-977795172/",className:"social-icon icon-only fc"},c.a.createElement("i",{className:"fab fa-linkedin"})),c.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100010376260550",target:"_blank",rel:"noopener noreferrer",className:"social-icon icon-only li"},c.a.createElement("i",{className:"fab fa-facebook-square"})),c.a.createElement("a",{href:"https://github.com/seifgh",target:"_blank",rel:"noopener noreferrer",className:"social-icon icon-only gi"},c.a.createElement("i",{className:"fab fa-github-square"})))))),c.a.createElement("div",{className:"dev-card"},c.a.createElement("div",{className:"top-bar"},c.a.createElement("div",{className:"image"},c.a.createElement(_,{src:f})),c.a.createElement("div",{className:"name"},c.a.createElement("h3",null,"Ramsis Hammadi"),c.a.createElement("small",null,"Data Analyst"))),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"sub-title"},c.a.createElement("small",null,"Who am i ?"),c.a.createElement("span",null)),c.a.createElement("p",{className:"paragraph"},"I'm a machine learning/deep learning enthusiast. I work extensively on Open-cv and Tensorflow."),c.a.createElement("div",{className:"sub-title"},c.a.createElement("small",null,"Skills"),c.a.createElement("span",null)),c.a.createElement("div",{className:"skills"},c.a.createElement("small",{className:"counted"},"Python"),c.a.createElement("small",{className:"counted"},"Machine Learning/Deep learning"),c.a.createElement("small",{className:"counted"},"Data visualization with R")),c.a.createElement("div",{className:"sub-title"},c.a.createElement("small",null,"contact"),c.a.createElement("span",null)),c.a.createElement("div",{className:"contact"},c.a.createElement("small",{className:"counted"}," For Business inquiries"),c.a.createElement("span",{className:"mail"},"ramsishammadi@ieee.org"),c.a.createElement("small",{className:"counted"},"Follow me on"),c.a.createElement("div",{className:"socials"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/hammadi-ramsis-799b231a3/",className:"social-icon icon-only fc"},c.a.createElement("i",{className:"fab fa-linkedin"})),c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/ramsis.benhammadi/",className:"social-icon icon-only li"},c.a.createElement("i",{className:"fab fa-facebook-square"})),c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Rams901",className:"social-icon icon-only gi"},c.a.createElement("i",{className:"fab fa-github-square"}))))))))};var z=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"details"},c.a.createElement("h1",{className:"title"}," Our resources"),c.a.createElement("p",{className:"paragraph"},"We've used the publicly-available data from the Coronavirus COVID-19 Global Cases by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University (JHU).",c.a.createElement("br",null),c.a.createElement("br",null),"Copyright \xa9 2020 Covid-19 Ai predictions TN. All Rights Reserved.")),c.a.createElement("div",{className:"image"},c.a.createElement(_,{src:d})))};var F=function(){return c.a.createElement("div",{className:"about"},c.a.createElement("h1",{className:"title"},"What is IEEE ?"),c.a.createElement("p",{className:"paragraph"},"IEEE (pronounced eye-triple-ee) is short for the Institute of Electrical and Electronics Engineers. Despite the name, the IEEE is a leading authority on areas ranging from aerospace systems, computers and telecommunications to biomedical engineering, electric power and consumer electronics among others. IEEE more than 400,000 members in more than 160 countries."),c.a.createElement("b",{className:"sub-title"},"Mission"),c.a.createElement("p",{className:"paragraph"},"IEEE's core purposed is to foster technological innovation and excellence for the benefit of humanity."),c.a.createElement("b",{className:"sub-title"},"Vision statement"),c.a.createElement("p",{className:"paragraph"},"IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions."),c.a.createElement("div",{className:"logos"},c.a.createElement(_,{src:E})))};var B=function(){var e=Object(n.useContext)(k),a=e.setCountries,t=e.fetchCountries,l=e.setOffline,r=e.is_offline,s=Object(n.useState)(!0),i=Object(p.a)(s,2),o=i[0],m=i[1];return Object(n.useEffect)((function(){t().then((function(e){a(e),m(!1)})).catch((function(e){e.err;var t=e.countries;a(t),m(!1)})),l(!navigator.onLine),window.addEventListener("offline",(function(){l(!0)})),window.addEventListener("online",(function(){l(!1)}))}),[]),o?c.a.createElement("main",null," ",c.a.createElement("div",{className:"loading"},"Loading")," "):c.a.createElement("main",null,c.a.createElement(C.b,{exact:!0,path:"/",component:L}),c.a.createElement(C.b,{exact:!0,path:"/predictions",component:M}),c.a.createElement(C.b,{exact:!0,path:"/predictions/country/:id",component:T}),c.a.createElement(C.b,{exact:!0,path:"/about",component:J}),c.a.createElement(C.b,{exact:!0,path:"/resources",component:z}),c.a.createElement(C.b,{exact:!0,path:"/ieee",component:F}),c.a.createElement("div",{className:"hash".concat(r?" hide":"")},c.a.createElement("h4",null,"#stayAtHome"),c.a.createElement("h4",null,"#staySafe")),c.a.createElement("div",{className:"notifier".concat(r?" show":"")},c.a.createElement("p",null,"Oops, looks like you're offline !")))};var q=function(){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),t=a[0],l=a[1];return c.a.createElement("aside",{className:""},c.a.createElement("div",{className:"top-bar"},c.a.createElement(s.b,{to:"/",className:"logo"},c.a.createElement("h1",null,"COVID-19"),c.a.createElement("div",null,c.a.createElement("h3",null,"AI PREDICTIONS"))),c.a.createElement("div",{onClick:function(){return l(!t)},className:"icon-menu".concat(t?" active":"")},c.a.createElement("i",{className:"fa fa-stream"}))),c.a.createElement("div",{className:"links".concat(t?" show":"")},c.a.createElement(s.c,{onClick:function(){return l(!t)},activeClassName:"link active",className:"link",exact:!0,to:"/"}," ",c.a.createElement("i",{className:"fas fa-home"})," Home"),c.a.createElement(s.c,{onClick:function(){return l(!t)},activeClassName:"link active",className:"link",to:"/predictions"}," ",c.a.createElement("i",{className:"fa fa-chart-line"})," Predictions"),c.a.createElement(s.c,{onClick:function(){return l(!t)},activeClassName:"link active",className:"link",to:"/ieee"}," ",c.a.createElement("i",{className:"fas fa-university"}),"What is IEEE ?"),c.a.createElement(s.c,{onClick:function(){return l(!t)},activeClassName:"link active",className:"link",to:"/resources"}," ",c.a.createElement("i",{className:"fa fa-file-alt"})," Resources"),c.a.createElement(s.c,{onClick:function(){return l(!t)},activeClassName:"link active",className:"link",to:"/about"}," ",c.a.createElement("i",{className:"fas fa-question-circle"})," About us")))},H=Object(o.a)();i.a.initialize("UA-161927570-1"),H.listen((function(e){i.a.set({page:e.pathname}),i.a.pageview(e.pathname)}));var W=function(){return c.a.createElement(w,null,c.a.createElement("div",{className:"App"},c.a.createElement(s.a,{history:H},c.a.createElement(q,null),c.a.createElement(B,null))))};t(140);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root"))},98:function(e,a,t){e.exports=t(183)}},[[98,1,2]]]);
//# sourceMappingURL=main.5d30ee0a.chunk.js.map