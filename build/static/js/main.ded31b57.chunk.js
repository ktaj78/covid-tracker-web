(this["webpackJsonpmy-covid-app"]=this["webpackJsonpmy-covid-app"]||[]).push([[0],{141:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);a(93);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(22),s=a(17),u=a(39),i=a(40),m=a(54),d=a(52),p=a(10),h=a.n(p),f=a(19),E=a(13),y=a(23),b=a(18),g=a(14),v=a(28),S=a.n(v),x=a(15),j={numberFormatter:function(e,t){return r.a.createElement(x.a,{value:e,displayType:"text",thousandSeparator:!0,decimalScale:2})},percentFormatter:function(e,t){return r.a.createElement(x.a,{value:e,displayType:"text",thousandSeparator:!0,decimalScale:2,suffix:"%"})}},O=function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),u=Object(E.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)([]),p=Object(E.a)(d,2),v=p[0],x=p[1],O=Object(n.useState)([]),T=Object(E.a)(O,2),k=T[0],C=T[1],w=function(e,t){var a=null;return e.healthScore>1.2?a="text-danger":e.healthScore>.8?a="text-warning":e.healthScore<.8&&(a="text-success"),a},F=[{dataField:"fips",text:"FIPS",hidden:!0},{dataField:"state",text:"State",formatter:function(e,t){return r.a.createElement(o.b,{to:"/state/".concat(t.fips)},e)},sort:!0},{dataField:"healthScore",text:"Covid Score",type:"number",formatter:j.numberFormatter,sort:!0},{dataField:"caseIncrease",text:"% Increase in Cases",type:"number",formatter:j.percentFormatter,sort:!0},{dataField:"deathIncrease",text:"% Increase in Deaths",type:"number",formatter:j.percentFormatter,sort:!0},{dataField:"peakCasesDate",text:"Cases Peaked On",type:"date",sort:!0}],D=[{dataField:"county",text:"County",formatter:function(e,t){return r.a.createElement(o.b,{to:"/county/".concat(t.fips)},e)},sort:!0}];return D=D.concat(F),Object(n.useEffect)((function(){(function(){var e=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/counties",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:{healthScore:{$gt:1}},sort:{healthScore:-1,totalCases:-1},limit:30})});case 2:return t=e.sent,e.t0=m,e.next=6,t.json();case 6:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=10,fetch("/api/counties",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:{healthScore:{$lt:1}},sort:{healthScore:1,totalCases:1},limit:30})});case 10:return t=e.sent,e.t2=x,e.next=14,t.json();case 14:return e.t3=e.sent,(0,e.t2)(e.t3),e.next=18,fetch("/api/states",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:{healthScore:{$gt:1}},sort:{healthScore:-1},limit:30})});case 18:return a=e.sent,e.t4=l,e.next=22,a.json();case 22:return e.t5=e.sent,(0,e.t4)(e.t5),e.next=26,fetch("/api/states",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:{healthScore:{$lt:1}},sort:{healthScore:1,totalCases:1},limit:30})});case 26:return a=e.sent,e.t6=C,e.next=30,a.json();case 30:e.t7=e.sent,(0,e.t6)(e.t7);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e.auth]),r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement("h4",null,"States Trending Up (",c.length,")"),r.a.createElement(S.a,{keyField:"fips",data:c,columns:F,striped:!0,condensed:!0,height:"120px",scrollTop:"Bottom",rowClasses:w})),r.a.createElement(g.a,null,r.a.createElement("h4",null,"States Trending Down (",k.length,")"),r.a.createElement(S.a,{keyField:"fips",data:k,columns:F,striped:!0,condensed:!0,height:"120px",scrollTop:"Bottom",rowClasses:w}))),r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement("h4",null,"Counties Trending Up"),r.a.createElement(S.a,{keyField:"fips",data:i,columns:D,striped:!0,condensed:!0,height:"120px",scrollTop:"Bottom",rowClasses:w})),r.a.createElement(g.a,null,r.a.createElement("h4",null,"Counties Trending Down"),r.a.createElement(S.a,{keyField:"fips",data:v,columns:D,striped:!0,condensed:!0,height:"120px",scrollTop:"Bottom",rowClasses:w}))))},T=a(89),k=a(38),C=a(88),w=a(84),F=function(e){var t=e.auth,a=t.isAuthenticated,c=t.login,l=t.logout,s=t.getProfile,u=Object(n.useState)(null),i=Object(E.a)(u,2),m=i[0],d=i[1],p=Object(n.useState)(""),h=Object(E.a)(p,2),f=h[0],y=h[1];Object(n.useEffect)((function(){b()}));var b=function(){a()&&s((function(e,t){d(e),y(t)}))};return r.a.createElement(k.a,{bg:"light",expand:"lg"},r.a.createElement(k.a.Brand,null,"My Corona Tracker"),r.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement(o.c,{exact:!0,to:"/",className:"d-inline p-2 bg-light text-dark",activeStyle:{fontWeight:"bold"}},"Trends"),a()&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,{to:"/states",className:"d-inline p-2 bg-light text-dark",activeStyle:{fontWeight:"bold"}},"My States"),r.a.createElement(o.c,{to:"/counties",className:"d-inline p-2 bg-light text-dark",activeStyle:{fontWeight:"bold"}},"My Counties"))),m?r.a.createElement(k.a.Text,null,"Signed in as: ",m.name):r.a.createElement(k.a.Text,null,"Error logging in ",f),r.a.createElement(C.a,{inline:!0},r.a.createElement(w.a,{onClick:a()?l:c},a()?"Log Out":"Log In"))))},D=(a(141),a(51)),I=function(e){e.name;var t=e.label,a=e.onChange,n=e.onSearch,c=e.defaultOption,l=e.selected,o=e.defaultSelected,s=(e.error,e.options);return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{id:"select-typeahead",labelKey:t,filterBy:["county","state"],onChange:a,onSearch:n,options:s,placeholder:c,defaultSelected:o,selected:l,renderMenuItemChildren:function(e){return r.a.createElement("div",null,e.county,", ",e.state,r.a.createElement("div",null,r.a.createElement("small",null," Total Cases: ",r.a.createElement(x.a,{value:e.totalCases,displayType:"text",thousandSeparator:!0}))))},multiple:!0}))},P=a(50),A=function(e){var t=e.county;return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(o.b,{to:"/county/".concat(t.fips)},r.a.createElement("h4",{style:{float:"left"}},t.county,", ",t.state)),r.a.createElement(P.a,{striped:!0,bordered:!0,size:"sm",style:{width:"100%"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Covid Score"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.healthScore,displayType:"text",thousandSeparator:!0,decimalScale:2}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Cases"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.totalCases,displayType:"text",thousandSeparator:!0}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Increase in Cases"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.caseIncrease,displayType:"text",thousandSeparator:!0,decimalScale:2,suffix:"%"})," ")),r.a.createElement("tr",null,r.a.createElement("td",null,"Peak Cases"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.peakCases,displayType:"text",thousandSeparator:!0})," ","(",t.peakCasesDate,")")),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Deaths"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.totalDeaths,displayType:"text",thousandSeparator:!0}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Increase in Deaths"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.deathIncrease,displayType:"text",thousandSeparator:!0,decimalScale:2,suffix:"%"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Peak Deaths"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.peakDeaths,displayType:"text",thousandSeparator:!0})," ","(",t.peakDeathsDate,")")))))},N=function(e){var t=e.counties,a=Object(n.useState)([]),c=Object(E.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(h.a.mark((function e(){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map((function(e){return e.fips})),e.next=3,fetch("/api/counties/fipssearch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fips:a})});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,o(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{fluid:"md"},r.a.createElement(b.a,{xs:1,md:3,lg:3},l.map((function(e,t){return r.a.createElement(g.a,{sm:!0,key:t},r.a.createElement(A,{county:e}))})))))},B=function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),s=Object(E.a)(o,2),u=s[0],i=s[1];Object(n.useEffect)((function(){(function(){var t=Object(f.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/user/counties",{method:"GET",headers:{Authorization:"Bearer ".concat(e.auth.getAccessToken()),"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,i(n.counties||[]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.auth]);var m=function(){var t=Object(f.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/user/counties",{method:"POST",headers:{Authorization:"Bearer ".concat(e.auth.getAccessToken()),"Content-Type":"application/json"},body:JSON.stringify({counties:a})});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,i(r.value.counties||[]);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(f.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/counties/search",{method:"POST",headers:{Authorization:"Bearer ".concat(e.auth.getAccessToken()),"Content-Type":"application/json"},body:JSON.stringify({nameQuery:a})});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,l(r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(I,{name:"county",label:"county",options:c,selected:u,defaultOption:"Search Counties",onChange:m,onSearch:d}))),r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(N,{counties:u})))))},J=a(87),_=null,z=null,M=function(){function e(t){var a=this;Object(u.a)(this,e),this.login=function(){localStorage.setItem("redirect_on_login",JSON.stringify(a.history.location)),a.auth0.authorize()},this.handleAuthentication=function(){a.auth0.parseHash((function(e,t){if(t&&t.accessToken&&t.idToken){a.setSession(t);var n="undefined"===localStorage.getItem("redirect_on_login")?"/":JSON.parse(localStorage.getItem("redirect_on_login"));a.history.push(n),localStorage.setItem("logged_in","true")}else e&&(a.history.push("/"),alert("Error: ".concat(e.error,".  Check the console for further details.")),console.log(e));localStorage.removeItem("redirect_on_login")}))},this.setSession=function(e){z=1e3*e.expiresIn+(new Date).getTime(),_=e.accessToken,e.idToken,a.scheduleTokenRenewal()},this.logout=function(){a.auth0.logout({ClientID:"GmfBt221o9ltqQAj3fr1d5CCXES77bgR",returnTo:"http://localhost:3000"}),localStorage.removeItem("logged_in")},this.getAccessToken=function(){if(!_)throw new Error("No access token found.");return _},this.getProfile=function(e){if(a.userProfile)return e(a.userProfile);a.auth0.client.userInfo(a.getAccessToken(),(function(t,n){n&&(a.userProfile=n),e(n,t)}))},this.history=t,this.userProfile=null,this.auth0=new J.a.WebAuth({domain:"ktajprojects-dev.auth0.com",clientID:"GmfBt221o9ltqQAj3fr1d5CCXES77bgR",redirectUri:"http://localhost:3000/callback",audience:"http://localhost:8000",responseType:"token id_token",scope:"openid profile email"})}return Object(i.a)(e,[{key:"isAuthenticated",value:function(){return(new Date).getTime()<z}},{key:"renewToken",value:function(e){var t=this;"undefined"!==localStorage.getItem("logged_in")&&this.auth0.checkSession({},(function(a,n){a?console.log("Error: ".concat(a.error," - ").concat(a.error_description,".")):t.setSession(n),e&&e(a,n)}))}},{key:"scheduleTokenRenewal",value:function(){var e=this,t=z-Date.now();t>0&&setTimeout((function(){return e.renewToken()}),t)}}]),e}(),L=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){if(!/access_token|id_token|error/.test(e.props.location.hash))throw new Error("Invalid callback URL.");e.props.auth.handleAuthentication()},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Loading")}}]),a}(n.Component),R=function(e){e.name;var t=e.label,a=e.onChange,n=e.onSearch,c=e.defaultOption,l=e.selected,o=(e.error,e.isLoading),s=e.options;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{id:"select-typeahead",labelKey:t,onChange:a,onSearch:n,options:s,placeholder:c,selected:l,isLoading:o,renderMenuItemChildren:function(e){return r.a.createElement("div",null,e.state,r.a.createElement("div",null,r.a.createElement("small",null," Total Cases: ",r.a.createElement(x.a,{value:e.totalCases,displayType:"text",thousandSeparator:!0}))))},multiple:!0}))},q=function(e){var t=e.state;return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(o.b,{to:"/state/".concat(t.fips)},r.a.createElement("h4",{style:{float:"left"}},t.state)),r.a.createElement(P.a,{striped:!0,bordered:!0,size:"sm",style:{width:"100%"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Covid Score"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.healthScore,displayType:"text",thousandSeparator:!0,decimalScale:2}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Cases"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.totalCases,displayType:"text",thousandSeparator:!0}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Increase in Cases"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.caseIncrease,displayType:"text",thousandSeparator:!0,decimalScale:2,suffix:"%"})," ")),r.a.createElement("tr",null,r.a.createElement("td",null,"Peak Cases"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.peakCases,displayType:"text",thousandSeparator:!0})," ","(",t.peakCasesDate,")")),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Deaths"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.totalDeaths,displayType:"text",thousandSeparator:!0}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Increase in Deaths"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.deathIncrease,displayType:"text",thousandSeparator:!0,decimalScale:2,suffix:"%"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Peak Deaths"),r.a.createElement("td",null,r.a.createElement(x.a,{value:t.peakDeaths,displayType:"text",thousandSeparator:!0})," ","(",t.peakDeathsDate,")")))))},W=function(e){var t=e.states,a=Object(n.useState)([]),c=Object(E.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(h.a.mark((function e(){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map((function(e){return e.fips})),e.next=3,fetch("/api/states/fipssearch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fips:a})});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,o(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{fluid:"md"},r.a.createElement(b.a,{xs:1,md:3,lg:3},l.map((function(e,t){return r.a.createElement(g.a,{sm:!0,key:t},r.a.createElement(q,{state:e}))})))))},U=function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),s=Object(E.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(!1),d=Object(E.a)(m,2),p=d[0],v=d[1];Object(n.useEffect)((function(){v(!0),function(){var t=Object(f.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/user/states",{method:"GET",headers:{Authorization:"Bearer ".concat(e.auth.getAccessToken()),"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,i(n.states||[]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),v(!1)}),[e.auth]);var S=function(){var t=Object(f.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.next=3,fetch("/api/user/states",{method:"POST",headers:{Authorization:"Bearer ".concat(e.auth.getAccessToken()),"Content-Type":"application/json"},body:JSON.stringify({states:a})});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,i(r.value.states||[]),v(!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(f.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/states/search",{method:"POST",headers:{Authorization:"Bearer ".concat(e.auth.getAccessToken()),"Content-Type":"application/json"},body:JSON.stringify({nameQuery:a})});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,l(r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(R,{name:"State Search",label:"state",options:c,defaultOption:"Search States",selected:u,onChange:S,onSearch:x,isLoading:p}))),r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(W,{states:u})))))},$=a(90),G=new r.a.createContext,Q=function(e){var t=e.component,a=e.scopes,n=Object($.a)(e,["component","scopes"]);return r.a.createElement(G.Consumer,null,(function(e){return r.a.createElement(s.a,Object.assign({},n,{render:function(n){return e.isAuthenticated()?a.length>0&&!e.userHasScopes(a)?r.a.createElement("h1",null,"Unauthorized - You need the following scope(s) to view this page: ",a.join(","),"."):r.a.createElement(t,Object.assign({auth:e},n)):e.login()}}))}))};Q.defaultProps={scopes:[]};var H=Q,K=function(e){var t=e.match,a=Object(n.useState)({}),c=Object(E.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)([]),u=Object(E.a)(s,2),i=u[0],m=u[1],d=t.params.fips;console.log(d);var p=[{dataField:"date",text:"Date",sort:!0},{dataField:"cases",text:"Cases",formatter:j.numberFormatter,sort:!0},{dataField:"cases7dayma",text:"7 Day average",formatter:j.numberFormatter,sort:!0},{dataField:"cases30dayma",text:"30 Day average",formatter:j.numberFormatter,sort:!0},{dataField:"deaths",text:"Deaths",formatter:j.numberFormatter,sort:!0},{dataField:"deaths7dayma",text:"7 Day average",formatter:j.numberFormatter,sort:!0},{dataField:"deaths30dayma",text:"30 Day average",formatter:j.numberFormatter,sort:!0}];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/counties/fipssearch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fips:[d]})});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o(a[0]),m(a[0].metrics);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]),r.a.createElement(y.a,{fluid:!0},r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(A,{county:l}))),r.a.createElement(b.a,{height:!0},r.a.createElement(g.a,null,r.a.createElement("h4",null,"Daily Metrics"),r.a.createElement(S.a,{keyField:"date",data:i,columns:p,defaultSorted:[{dataField:"date",order:"desc"}],striped:!0,condensed:!0,height:"120px",scrollTop:"Bottom"}))))},X=function(e){var t=e.match,a=Object(n.useState)({}),c=Object(E.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)([]),u=Object(E.a)(s,2),i=u[0],m=u[1],d=t.params.fips,p=[{dataField:"date",text:"Date",type:"date",sort:!0},{dataField:"cases",text:"Cases",type:"number",formatter:j.numberFormatter,sort:!0},{dataField:"cases7dayma",text:"7 Day average",type:"number",formatter:j.numberFormatter,sort:!0},{dataField:"cases30dayma",text:"30 Day average",type:"number",formatter:j.numberFormatter,sort:!0},{dataField:"deaths",text:"Deaths",type:"number",formatter:j.numberFormatter,sort:!0},{dataField:"deaths7dayma",text:"7 Day average",type:"number",formatter:j.numberFormatter,sort:!0},{dataField:"deaths30dayma",text:"30 Day average",type:"number",formatter:j.numberFormatter,sort:!0}];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/states/fipssearch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fips:[d]})});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o(a[0]),m(a[0].metrics);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]),r.a.createElement(y.a,{fluid:!0},r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(q,{state:l}))),r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement("h4",null,"Daily Metrics"),r.a.createElement(S.a,{keyField:"date",data:i,columns:p,defaultSorted:[{dataField:"date",order:"desc"}],striped:!0,condensed:!0,height:"120px",scrollTop:"Bottom"}))))},Y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={auth:new M(n.props.history),tokenRenewalComplete:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.auth.renewToken((function(){return e.setState({tokenRenewalComplete:!0})}))}},{key:"render",value:function(){var e=this.state.auth;return this.state.tokenRenewalComplete?r.a.createElement(G.Provider,{value:e},r.a.createElement(F,{auth:e}),r.a.createElement("div",{id:"page-body"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",render:function(t){return r.a.createElement(O,Object.assign({auth:e},t))},exact:!0}),r.a.createElement(s.a,{path:"/callback",render:function(t){return r.a.createElement(L,Object.assign({auth:e},t))}}),r.a.createElement(H,{path:"/counties",component:B,exact:!0}),r.a.createElement(H,{path:"/states",component:U,exact:!0}),r.a.createElement(H,{path:"/county/:fips",component:K,exact:!0}),r.a.createElement(H,{path:"/state/:fips",component:X,exact:!0})))):"Loading..."}}]),a}(n.Component);a(155),a(156),a(157),a(158),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(s.a,{component:Y}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(159)}},[[92,1,2]]]);
//# sourceMappingURL=main.ded31b57.chunk.js.map