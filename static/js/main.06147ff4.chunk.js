(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var s=r(2),c=r.n(s),n=r(16),a=r.n(n),o=(r(22),r(3)),i=r(4),l=r(6),j=r(5),d=(r(23),r(0));var h=function(e){return Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"form-group",style:{display:"flex"},children:[Object(d.jsx)("label",{htmlFor:"search"}),Object(d.jsx)("input",{value:e.search,onChange:function(t){return e.handleSearchChange(t)},name:"search",type:"text",className:"form-control",id:"search","aria-describedby":"searchHelp",placeholder:"Search Employee"})]})})};var u=function(e){var t=e.users;return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{class:"table table-bordered",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Profile"}),Object(d.jsx)("th",{scope:"col",children:"First"}),Object(d.jsx)("th",{scope:"col",children:"Last"}),Object(d.jsx)("th",{scope:"col",children:"Email"})]})}),Object(d.jsxs)("tbody",{children:[void 0!==t[0]&&void 0!==t[0].name?(console.log(t),t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:Object(d.jsx)("img",{alt:e.name.first,src:e.picture.medium})}),Object(d.jsx)("td",{children:e.name.first}),Object(d.jsx)("td",{children:e.name.last}),Object(d.jsx)("td",{children:e.email})]})}))):Object(d.jsx)(d.Fragment,{}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:Object(d.jsx)("img",{alt:t.firstName,src:t.picture})}),Object(d.jsx)("td",{children:t.firstName}),Object(d.jsx)("td",{children:t.lastName}),Object(d.jsx)("td",{children:t.email})]})]})]})})},b=r(17),O=r.n(b),f=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")},x=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(o.a)(this,r);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={users:[{}],order:"descend",filteredUsers:[{}],sortedUsers:[{}]},e.handleSearchChange=function(t){console.log(t.target.value);var r=t.target.value;console.log(r);var s=e.state.users.filter((function(e){var t=Object.values(e.name).join("").toLowerCase();return console.log(t,e),-1!==t.indexOf(r.toLowerCase())}));console.log(s),e.setState({filteredUsers:s})},e.sortDescending=function(e){},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){console.log(t),e.setState({users:t.data.results,filteredUsers:t.data.results,sortedUsers:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{handleSearchChange:this.handleSearchChange}),Object(d.jsx)("div",{children:Object(d.jsx)(u,{users:this.state.filteredUsers})})]})}}]),r}(s.Component);r(43);var m=function(){return Object(d.jsx)("div",{className:"jumbotron",children:Object(d.jsx)("h1",{className:"display-4",children:"Employee Directory"})})},p=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).state={users:[],filteredUsers:[],sortedUsers:[]},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsx)(x,{})]})}}]),r}(c.a.Component),v=(c.a.Component,p),g=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,45)).then((function(t){var r=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),s(e),c(e),n(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.06147ff4.chunk.js.map