(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],{26:function(n,e,t){n.exports=t.p+"static/media/MarvelLogo.06125b3c.svg"},29:function(n,e,t){n.exports=t(41)},41:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(22),c=t.n(o),i=t(1),l=t(2),s=t(5),u="12be6ffee17d776cbe1e1b2e85c1ac4f",d="9",m="a6981a0e3adfc642a9c2080f0d985421",f=Object(a.createContext)(),p=function(n){var e=n.children,t=Object(a.useState)("Buscar"),o=Object(s.a)(t,2),c=o[0],i=o[1],l=Object(a.useState)(0),p=Object(s.a)(l,2),b=p[0],h=p[1],g=Object(a.useState)(!1),v=Object(s.a)(g,2),x=v[0],E=v[1],w=Object(a.useState)([1010699,1009144,1016823]),j=Object(s.a)(w,2),y=j[0],O=j[1],k=u,A=d,C=m;return r.a.createElement(f.Provider,{value:{buscar:c,getBuscar:i,getOffSet:h,stars:x,getStars:E,starList:y,getList:O,offSet:b,apikey:k,ts:A,hash:C}},e)};function b(){var n=Object(i.a)(["\nbackground:transparent;\n    color:#A8A8A8;\n    font-size:1.5rem;\n    appearance: none;\n    border:none;\n    box-shadow:none;\n    outline-color: transparent;\n        padding: 5px 20px;\n        width:88%;\n        border-bottom:2px solid transparent;\n        transition:0.2s 0.2s;\n&:focus{\n    border:none;\n    border-bottom:2px solid #A8A8A8;\n    box-shadow: none;\n    outline-color: transparent;\n    transition:0.2s 0.2s;\n}\nbutton.Buscador{\n    transition:0.5s 0.3s all;\n}\n@media(max-width:767px){\n    width: 72%;\n}\n\n"]);return b=function(){return n},n}function h(){var n=Object(i.a)(["\nwidth:85%;\nfloat:left;\n\nbutton.Buscador{\n    background:transparent;\n    color:#A8A8A8;\n    font-size:1.5rem;\n    appearance: none;\n    border:none;\n    box-shadow:none;\n    padding: 5px 20px;\n    outline-color: transparent !important;\n}\n\n"]);return h=function(){return n},n}var g=l.b.div(h()),v=l.b.input(b()),x=function(n){var e=Object(a.useContext)(f),t=e.buscar,o=e.getBuscar,c=Object(a.useRef)();return r.a.createElement(g,null,r.a.createElement("button",{className:"Buscador",type:"button"},r.a.createElement("i",{className:"fa fa-search"})),r.a.createElement(v,{ref:c,onFocus:function(n){document.querySelector("button.Buscador").style.visibility="hidden"},onBlur:function(n){0===c.current.value.length&&(document.querySelector("button.Buscador").style.visibility="visible",o("Buscar"))},onChange:function(n){c.current.value.length>=0?(n.preventDefault(),o(c.current.value)):0!==t.length&&0!==c.current.value||o("Buscar")},type:"text",placeholder:t}))},E=t(10),w=t(26),j=t.n(w);function y(){var n=Object(i.a)(["\n    display:block;\n    float:left;\n    width:10%;\n    img{\n        width:100%;\n        height:auto;\n    }\n    @media(max-width:767px){\n        display: block;\n    float: left;\n    width: 100%;\n    img{\n        width:40%;\n        display: block;\n        margin:auto;\n    }\n    }\n\n"]);return y=function(){return n},n}function O(){var n=Object(i.a)(["\nwidth:auto;\nheight:auto;\n"]);return O=function(){return n},n}var k=Object(l.b)(E.b)(O()),A=l.b.div(y()),C=function(n){return r.a.createElement(A,null,r.a.createElement(k,{to:"/marvel-app"},r.a.createElement("img",{alt:"",src:j.a}))," ")},N=function(n){n.id;var e=Object(a.useContext)(f).getStars,t=Object(a.useState)(!1),o=Object(s.a)(t,2),c=o[0],i=o[1],l=c?"fa fa-star":"fa fa-star-o";return r.a.createElement("div",{onClick:function(n){!1===c?(i(!0),e(!0)):(i(!1),e(!1))}},r.a.createElement("i",{className:l}))};function S(){var n=Object(i.a)(["\nwidth:8%;\nfloat:left;\nfont-size:1.5rem;\ncolor:#A8A8A8;\n@media(max-width:767px){\n    width:15%;\n    padding-top: 5px;\n}\n"]);return S=function(){return n},n}var z=l.b.div(S()),B=function(){return r.a.createElement(z,null,r.a.createElement(N,{id:"principal"}))};function F(){var n=Object(i.a)(["\nmax-width:1200px;\ndisplay:flex;\nwidth:100%;\nalign-items: center;\n@media(max-width:767px){\ndisplay:block;\n\n}\n"]);return F=function(){return n},n}function L(){var n=Object(i.a)(["\nwidth: 100%;\n    top: 0;\n    position: fixed;\n    left: 0;\n    background: #fff;\n    min-height: 50px;\n    padding: 7px 16px;\n    display: flex;\n    align-items: center;\n    box-shadow:0 0 5px rgba(0,0,0,0.3);\n    justify-content:center;\n\n"]);return L=function(){return n},n}var I=l.b.header(L()),U=l.b.nav(F()),D=function(n){return r.a.createElement(I,null,r.a.createElement(U,null,r.a.createElement(C,null)," ",r.a.createElement(x,null),r.a.createElement(B,null)))};function T(){var n=Object(i.a)(["\npadding: 8rem 0rem;\nmax-width: 1000px;\nmargin: auto;\ndisplay: flex;\n"]);return T=function(){return n},n}var P=l.b.section(T()),R=function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(P,null,n.children))},q=t(3),J=t(19),M=t.n(J),W=t(27),G=function(n){var e=Object(a.useState)(null),t=Object(s.a)(e,2),r=t[0],o=t[1],c=Object(a.useState)(null),i=Object(s.a)(c,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){var e=new AbortController,t=e.signal;return function(){var e=Object(W.a)(M.a.mark((function e(){var a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n,{signal:t});case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,o(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),u(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()(),function(){e.abort()}}),[n]),{response:r,error:l}};function H(){var n=Object(i.a)(["\ndisplay:flex;\njustify-content:center;\nmargin-bottom: 15px;\ntext-decoration: none;\ncolor:#515151 !important;\n\n.content-images {\n    width: 25%;\n    float: left;\n    border-radius: 10px;\n    height: 105px;\n    overflow: hidden;\n\n}\n.content-images img {\n    width: 100%;\n    height: auto;\n}\n.content-text{\n    width: 65%;\n    float: left;\n    padding: 0 15px;\n}\n\n"]);return H=function(){return n},n}var K=Object(l.b)(E.b)(H()),Q=function(n){var e=n.Comic,t=Object(a.useContext)(f),o=t.apikey,c=t.ts,i=t.hash,l=t.offSet,s=e.resourceURI;console.log(s);var u="".concat(s,"?apikey=").concat(o,"&ts=").concat(c,"&hash=").concat(i,"&limit=20&offset=").concat(l),d=G(u).response;if(null!==d){var m=d.data.results[0],p=m.id,b=m.images,h=m.title,g="https:"+b[0].path.substring(5,b[0].path.lenght);return console.log(g),void 0!==b[0]&&void 0!==h&&void 0!==p?r.a.createElement(K,{to:"/marvel-app/internal/".concat(p)},r.a.createElement("div",{className:"content-images"},r.a.createElement("img",{alt:"",src:"".concat(g,".jpg")})),r.a.createElement("div",{className:"content-text"},r.a.createElement("h4",null,h))):r.a.createElement("div",{className:"Cargando"},"Cargando..")}return null};function V(){var n=Object(i.a)(["\n    background:white;\n    width: 30%;\n    border-radius: 5px;\n    min-width: 300px;\n    height: 448px;\n    overflow-y:hidden;\n    .titleContainer {\n        display: flex;\n        justify-content: space-between;\n        align-items: top;\n       \n    }\n    .comicList {\n        overflow-y: scroll;\n        height: 350px;\n    }\n    .close {\n        font-size: 2rem;\n        font-weight: 100;\n        padding: 10px 15px;\n        line-height: 0;\n        cursor:pointer;\n    }\n    h3.title {\n        padding: 10px 15px 0 15px;\n        font-size: 1.5rem;\n    }\n"]);return V=function(){return n},n}function X(){var n=Object(i.a)(["\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    background: rgba(0,0,0,0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 999;\n"]);return X=function(){return n},n}var Y=l.b.div(X()),Z=l.b.div(V()),$=function(n){var e=n.title,t=n.getActive;return r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h3",{className:"title"},e),r.a.createElement("div",{className:"close",onClick:function(n){t(!1)}},r.a.createElement("i",{className:"fa fa-times"})))},_=function(n){var e=n.comics,t=n.id,a=n.name;return r.a.createElement("div",{className:"comicList"},e.items.map((function(n,e){return r.a.createElement(Q,{key:e,idPj:t,name:a,Comic:n})})))},nn=function(n){var e=n.comics,t=n.id,a=n.name,o=n.getActive;return r.a.createElement(Y,{id:"".concat(t)},r.a.createElement(Z,null,r.a.createElement($,{title:a,getActive:o}),r.a.createElement(_,{id:t,name:a,comics:e})))},en=t(28),tn=function(n){var e=n.id,t=Object(a.useContext)(f),o=t.stars,c=t.starList,i=t.getList,l=Object(a.useState)(!1),u=Object(s.a)(l,2),d=u[0],m=u[1];Object(a.useEffect)((function(){o?void 0!==c.find((function(n){return n===e}))&&m(!0):m(!1)}),[o,e,c]);var p=d?"fa fa-star":"fa fa-star-o";return r.a.createElement("div",{onClick:function(n){if(!1===d)m(!0),i([].concat(Object(en.a)(c),[e]));else{m(!1);var t=c.indexOf(e),a=c;delete a[t],console.log(a)}}},r.a.createElement("i",{className:p}))};function an(){var n=Object(i.a)(["\n    display:block;\n    width:23%;\n    float:left;\n    background:url(",");\n    border: 1px solid rgba(0,0,0,.125);\n    border-radius: 0.2rem;\n    overflow: hidden;\n    min-width: 230px;\n    height: 380px;\n    background-position: center;\n    margin: 1%;\n    background-size: cover;\n    \n    .starCard {\n        position: relative;\n        float: right;\n        margin: 20px;\n        color: white;\n        font-size: 25px;\n        z-index:2;\n    }\n    .cardName {\n        padding-top: 16rem;\n        margin-left: 0;\n        color: white;\n        font-size: 20px;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        border: none;\n        background: transparent;\n        width: 100%;\n        z-index: 2;\n        text-align: left !important;\n        cursor: pointer;\n        text-shadow: 1px 0px 7px black;\n\n    }\n    \n        \n    \n    @media(max-width:767px){\n\n        display: block;\n        width: 94%;\n       \n        height: 380px;\n       \n        margin: 3%;\n        \n    }\n\n"]);return an=function(){return n},n}var rn=l.b.article(an(),(function(n){return n.bg})),on=function(n){var e=n.id;return r.a.createElement("div",{className:"starCard"},r.a.createElement(tn,{id:e}))},cn=function(n){var e=n.name,t=n.getActive,a=n.active,o=n.comics,c=n.id;return!0===a?r.a.createElement(nn,{id:c,name:e,comics:o,getActive:t}):null},ln=function(n){var e=n.hero,t=e.id,o=e.name,c=e.thumbnail,i=c.path,l=c.extension,u=e.comics,d=Object(a.useState)(!1),m=Object(s.a)(d,2),f=m[0],p=m[1],b=i.substring(5,i.lenght),h=document.location.protocol+b;return r.a.createElement(r.a.Fragment,null,r.a.createElement(rn,{bg:"".concat(h,".").concat(l)},r.a.createElement(on,{id:t}),r.a.createElement("button",{className:"cardName",onClick:function(n){p(!0)}},o)),r.a.createElement(cn,{name:o,id:t,active:f,getActive:p,comics:u}))};function sn(){var n=Object(i.a)(["\ndisplay: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    height: 84px;\n    font-size:20px;\n    color:#A8A8A8;\n    button i.fa {\n        font-size: 25px;\n    }\n    input.control {\n        appearance: none;\n        border: none;\n        background: transparent;\n        width: 30px;\n        font-size: 23px;\n        text-align: center;\n        font-weight: 700;\n        transition:0.5s 0.3s;\n        outline: none !important;\n        border-bottom:2px solid transparent;\n        color:#A8A8A8;\n    }\n    input.control:hover,input.control:focus{\n        border-bottom:2px solid #A8A8A8;\n    }\n    button {\n        appearance: none;\n        box-shadow: none;\n        border: none;\n        background: transparent;\n        padding: 10px;\n        outline: none;\n        color:#A8A8A8;\n    }\n"]);return sn=function(){return n},n}var un=l.b.div(sn()),dn=function(n){var e=n.limit,t=n.total,o=Object(a.useContext)(f).getOffSet,c=Object(a.useState)(1),i=Object(s.a)(c,2),l=i[0],u=i[1],d=Math.floor(t/e),m=Object(a.useRef)(1);return r.a.createElement(un,null,r.a.createElement("button",{type:"button",onClick:function(){l>=1&&(u(l-1),o(l/8))}}," ",r.a.createElement("i",{className:"fa fa-chevron-left"})," "),r.a.createElement("div",{className:"counterText"},r.a.createElement("input",{type:"text",className:"control",ref:m,onChange:function(n){m.current.value>0&&m.current.value<=d&&o(8*m.current.value)},placeholder:l}),r.a.createElement("span",null," de "),r.a.createElement("span",null," ",d," ")),r.a.createElement("button",{type:"button",onClick:function(){8*l<=d&&(u(l+1),o(8*l))}}," ",r.a.createElement("i",{className:"fa fa-chevron-right"})," "))};function mn(){var n=Object(i.a)(["\ndisplay:block;\n"]);return mn=function(){return n},n}var fn=l.b.div(mn()),pn=function(n){var e=Object(a.useContext)(f),t=e.apikey,o=e.ts,c=e.hash,i=e.offSet,l=e.buscar,s="Buscar"!==l&&""!==l?"https://gateway.marvel.com/v1/public/characters?apikey=".concat(t,"&ts=").concat(o,"&hash=").concat(c,"&limit=8&offset=").concat(i,"&nameStartsWith=").concat(l):"https://gateway.marvel.com/v1/public/characters?apikey=".concat(t,"&ts=").concat(o,"&hash=").concat(c,"&limit=8&offset=").concat(i),u=G(s).response;if(null!==u){var d=u.data,m=d.limit,p=d.results,b=d.total;return r.a.createElement(fn,null,p.map((function(n){var e=n.id;return r.a.createElement(ln,{key:e,id:e,hero:n})})),r.a.createElement(dn,{limit:m,total:b}))}return r.a.createElement(fn,null,r.a.createElement("h1",null,"No hay Datos"))};function bn(){var n=Object(i.a)(["\nflex-direction: row;\n    width: 100%;\n    display:flex;\n.col-2 h2 {\n    font-size: 25px;\n    font-weight: 700;\n    color: #3E3E3E;\n    margin-top: 0;\n    margin-bottom: 50px;\n}\n\n.details-comics p {\n    font-weight: 700;\n    font-size: 18px;\n    margin: 0;\n    color: #3E3E3E;\n    \n}\n.details-comics{\n    margin-bottom:67px;\n}\n.col-2{\n    padding: 0 15px;\n    width:50%;\n}\n\n.col-2 img {\n    width: 100%;\n    height: auto;\n}\np.data-expert {\n    font-weight: 400;\n    font-size: 18px;\n}\n@media(max-width:767px){\n    display:block ;\n    \n    .col-2{\n        width: 100%;\n    \n    }\n    .data-expert{\n        text-align:center;\n    }\n}\n"]);return bn=function(){return n},n}var hn=l.b.article(bn()),gn=function(n){var e=Object(a.useContext)(f),t=e.apikey,o=e.ts,c=e.hash,i=window.location.pathname,l=i.substring(i.lastIndexOf("/")+1),s="https://gateway.marvel.com/v1/public/comics/".concat(l,"?apikey=").concat(t,"&ts=").concat(o,"&hash=").concat(c,"&offset=0"),u=G(s);if(null===u.response)return null;var d,m=u.response.data.results[0],p=m.title,b=m.dates,h=m.images,g=m.description,v=m.creators,x=null===g?"No hay descripci\xf3n":g,E=h[0].path.substring(5,h[0].path.lenght),w=document.location.protocol+E;return console.log(w),r.a.createElement(hn,null,r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{alt:"title",src:"".concat(w,".jpg")})),r.a.createElement("div",{className:"col-2"},r.a.createElement("h2",null,p),r.a.createElement("div",{className:"details-comics"},r.a.createElement("p",null,"Published: ",(d=b[0].date,new Date(d).toDateString())),v.items.map((function(n,e){return r.a.createElement("p",{key:e},(t=n.role).charAt(0).toUpperCase()+t.slice(1).toLowerCase(),": ",n.name);var t}))),r.a.createElement("p",{className:"data-expert"},x)))};function vn(){var n=Object(i.a)(["\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n  body {\n    color: ",';\n    padding:0;\n    margin:0;\n    width:100%;\n    font-size:16px;  \n    @font-face {font-family: "SF UI Text"; src: url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.eot"); src: url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.woff") format("woff"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.svg#SF UI Text") format("svg"); }\n    font-family: "SF UI Text";\n    background: #F7F8FA;\n    box-sizing: border-box;\n  }\n  #root{\n    box-sizing: border-box;\n  }\n']);return vn=function(){return n},n}var xn=Object(l.a)(vn(),(function(n){return n.whiteColor?"white":"black"}));var En=function(){return r.a.createElement(E.a,null,r.a.createElement(R,null,r.a.createElement(xn,null),r.a.createElement(q.c,null,r.a.createElement(q.a,{exact:!0,path:"/marvel-app/"},r.a.createElement(pn,null)),r.a.createElement(q.a,{path:"/marvel-app/internal/:id"},r.a.createElement(gn,null)))))};c.a.render(r.a.createElement(p,null,r.a.createElement(En,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e0bc49c1.chunk.js.map