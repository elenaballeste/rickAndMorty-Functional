(this["webpackJsonphaivision-test-functional"]=this["webpackJsonphaivision-test-functional"]||[]).push([[0],{13:function(e,t,n){e.exports={navItem:"NavItem_navItem__1-jIp",active:"NavItem_active__3o1Uk"}},16:function(e,t,n){e.exports={Home:"Home_Home__2-aLp",HomeLogo:"Home_HomeLogo__2ngia","HomeLogo-spin":"Home_HomeLogo-spin__2pd_J"}},17:function(e,t,n){e.exports={SpinnerMain:"Spinner_SpinnerMain__31MKs",Spinner:"Spinner_Spinner__qHOy4","Spinner-spin":"Spinner_Spinner-spin__2gjKq"}},28:function(e,t,n){e.exports={logo:"Logo_logo__3poI2"}},30:function(e,t,n){e.exports={navItems:"NavItems_navItems__3POYo"}},31:function(e,t,n){e.exports={toolbar:"Toolbar_toolbar__2GC01"}},32:function(e,t,n){e.exports={content:"Layout_content__2GBtj"}},36:function(e,t,n){e.exports={card:"Character_card__2dmFL"}},37:function(e,t,n){e.exports={pager:"Pager_pager__30WKA"}},38:function(e,t,n){e.exports={list:"Characters_list__2uSLO"}},45:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(27),s=n.n(c),i=n(9),o=(n(45),n(2)),l=n.p+"static/media/rick-morty-logo.df73b7db.png",d=n(28),u=n.n(d),j=n(0);var g=function(){return Object(j.jsx)("a",{href:"/",className:u.a.logo,children:Object(j.jsx)("img",{src:l,alt:"RickAndMortyLogo"})})},h=n(13),p=n.n(h);var x=function(e){return Object(j.jsx)("li",{className:p.a.navItem,children:Object(j.jsx)(i.b,{to:e.link,exact:!0,activeClassName:p.a.active,children:e.children})})},m=n(30),b=n.n(m);var v=function(e){return Object(j.jsxs)("ul",{className:b.a.navItems,children:[Object(j.jsx)(x,{link:"/",children:" Home "}),Object(j.jsx)(x,{link:"/characters",children:" Characters "})]})},f=n(31),O=n.n(f);var _=function(e){return Object(j.jsxs)("header",{className:O.a.toolbar,children:[Object(j.jsx)(g,{}),Object(j.jsx)("nav",{children:Object(j.jsx)(v,{})})]})},P=n(32),S=n.n(P);var k=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(_,{}),Object(j.jsx)("main",{className:S.a.content,children:e.children})]})},N=n.p+"static/media/logo.6ce24c58.svg",C=n(16),H=n.n(C);var I=function(){return Object(j.jsxs)("div",{className:H.a.Home,children:[Object(j.jsx)("img",{src:N,className:H.a.HomeLogo,alt:"logo"}),Object(j.jsx)("p",{children:"Elena Ballest\xe9 Izuzquiza"})]})},U=n(33),L=n(34),y=n(40),M=n(39),F=n(35),B=n.n(F),q=n(36),w=n.n(q);var z=function(e){return Object(j.jsxs)("li",{className:w.a.card,onClick:e.clickedItem,children:[Object(j.jsx)("img",{src:e.img,alt:e.name}),Object(j.jsxs)("p",{children:[" ",e.name," "]})]})},A=n(37),J=n.n(A);var K=function(e){return Object(j.jsxs)("div",{className:J.a.pager,children:[Object(j.jsx)("button",{onClick:e.clickedPrev,disabled:e.disabledPrev,children:"Prev"}),Object(j.jsxs)("p",{children:["Page ",e.currentPage," of ",e.totalPages]}),Object(j.jsx)("button",{onClick:e.clickedNext,disabled:e.disabledNext,children:"Next"})]})},T=n(17),W=n.n(T);var D=function(){return Object(j.jsx)("div",{className:W.a.SpinnerMain,children:Object(j.jsx)("img",{src:N,className:W.a.Spinner,alt:"logo"})})},E=n(38),G=n.n(E),R=function(e){Object(y.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(U.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[],currentUrl:"https://rickandmortyapi.com/api/character",nextUrl:null,prevUrl:null,isFirstPage:!1,currentPage:null,totalPages:null,loading:!1},e.getCharacters=function(t){e.setState({loading:!0}),B.a.get(t).then((function(n){e.setState({characters:n.data.results,nextUrl:n.data.info.next,prevUrl:n.data.info.prev,currentPage:t.includes("page=")?t.split("page=").pop():"1",totalPages:n.data.info.pages}),e.setState({loading:!1})})).catch((function(t){console.log("We could not retireve the data:",t),e.setState({loading:!1})}))},e.selectedCharacterHandler=function(t){var n=e.state.characters.filter((function(e){return e.id===t}))[0];console.log(n)},e.nextPageHandler=function(){e.setState({currentUrl:e.state.nextUrl}),e.getCharacters(e.state.nextUrl)},e.prevPageHandler=function(){e.setState({currentUrl:e.state.prevUrl}),e.getCharacters(e.state.prevUrl)},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){localStorage.page&&"1"!==localStorage.page?this.getCharacters(this.state.currentUrl+"?page="+localStorage.page):this.getCharacters(this.state.currentUrl)}},{key:"componentWillUnmount",value:function(){localStorage.setItem("page",this.state.currentPage)}},{key:"render",value:function(){var e=this,t=this.state.characters.map((function(t){return Object(j.jsx)(z,{name:t.name,img:t.image,clickedItem:function(){return e.selectedCharacterHandler(t.id)}},t.id)}));return this.state.loading&&(t=Object(j.jsx)(D,{})),Object(j.jsxs)("div",{children:[Object(j.jsx)(K,{clickedNext:this.nextPageHandler,clickedPrev:this.prevPageHandler,disabledNext:!this.state.nextUrl,disabledPrev:!this.state.prevUrl,currentPage:this.state.currentPage,totalPages:this.state.totalPages}),Object(j.jsx)("ul",{className:G.a.list,children:t})]})}}]),n}(a.Component);n(70);var Y=function(){return Object(j.jsxs)(k,{children:[Object(j.jsxs)(o.a,{path:"/characters",children:[" ",Object(j.jsx)(R,{})]}),Object(j.jsxs)(o.a,{path:"/",exact:!0,children:[" ",Object(j.jsx)(I,{})]})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(Y,{})})}),document.getElementById("root")),Q()}},[[71,1,2]]]);
//# sourceMappingURL=main.4c79e83e.chunk.js.map