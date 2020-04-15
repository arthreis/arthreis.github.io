(window["webpackJsonparthreis.github.io"]=window["webpackJsonparthreis.github.io"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"homepage":"http://arthreis.github.io/arthreis.github.io","name":"arthreis.github.io","version":"1.0.0","private":true,"dependencies":{"gh-pages":"^2.2.0","react":"^16.9.0","react-dom":"^16.9.0","react-router":"^5.0.1","react-router-dom":"^5.0.1","react-scripts":"3.1.1","styled-components":"^4.3.2"},"scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},29:function(e,n,t){e.exports=t(41)},41:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(21),o=t.n(i),c=t(12),l=t(7),u=t(10),s={getExperiences:function(){return[{id:"1",locale:"Stefanini",function:"Java Developer",period:"JUL/2012 - JAN/2014",image:"stefanini.png"},{id:"2",locale:"Acol Consultoria & Sistemas",function:"Java Developer",period:"JAN/2014 - APR/2014",image:"acol.png"},{id:"3",locale:"webamericas",function:"Javascript Developer",period:"JUL/2014 - FEB/2015",image:"webamericas.png"},{id:"4",locale:"Metatron",function:"Fullstack Developer",period:"FEB/2015 - APR/2018",image:"metatron.png"},{id:"5",locale:"Radix Engenharia e Software",function:"Fullstack Developer",period:"MAY/2018 - CURRENT",image:"radix.png"}]},getSkills:function(){return[{id:"1",name:"Java",value:"4"},{id:"2",name:"AngularJS",value:"4"},{id:"3",name:"React",value:"4"},{id:"4",name:"React Native",value:"4"},{id:"5",name:"NodeJS",value:"3"},{id:"6",name:"NestJS",value:"3"},{id:"7",name:"SQL",value:"4"},{id:"8",name:"NoSQL",value:"3"}]},getPersonInformations:function(){return{personInfo:{firstname:"Arthur",lastname:"Reis",middlename:"Rocha"},contact:{email:"arr90rj@gmail.com",phone:"(21) 97129-9133",linkedin:"linkedin.com/in/arthur-reis",location:"Rio de Janeiro / Brazil"}}},getEducation:function(){return{locale:"Centro Universit\xe1rio Carioca",status:"in progress"}}},d=t(14),f=t.n(d),m=t(22),p=t(1),g=t(2);function b(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  font-weight: 500;\n  grid-area: h;\n"]);return b=function(){return e},e}var v=g.c.div(b()),h=function(e){var n=e.contact;return a.a.createElement("div",{style:E},a.a.createElement("div",null,n.email),a.a.createElement("div",null,n.phone),a.a.createElement("a",{href:"https://www."+n.linkedin},n.linkedin),a.a.createElement("div",null,n.location))},E={justifyContent:"center",fontWeight:"500",fontSize:"15px"},x=function(e){var n=e.info;return a.a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.a.createElement("div",null,a.a.createElement("img",{src:"http://1.gravatar.com/avatar/d013f72b5df113ab423e5135bbc2b802",alt:"profile",height:"70px",width:"70px",style:{borderRadius:50,border:"5px solid",marginRight:"20px"}})),a.a.createElement("div",{style:j},n.firstname," ",n.middlename," ",n.lastname))},j={fontWeight:"700",fontSize:"50px"};function y(){var e=Object(r.useState)({}),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(r.useState)({}),c=Object(u.a)(o,2),l=c[0],d=c[1];return Object(r.useEffect)(function(){Object(m.a)(f.a.mark(function e(){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getPersonInformations();case 2:n=e.sent,i(n.personInfo),d(n.contact);case 5:case"end":return e.stop()}},e)}))()},[]),a.a.createElement(v,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"2.5%",marginRight:"2.5%"}},a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(x,{info:t})),a.a.createElement(h,{contact:l})))}var O=t(17);function k(){var e=Object(p.a)(["\n  background: #000;\n  color: #112233;\n  grid-area: f;\n"]);return k=function(){return e},e}var w=g.c.div(k()),S=function(){return a.a.createElement(w,null,a.a.createElement("div",null,"React"),a.a.createElement("div",null,O.name," - v",O.version))};function R(){var e=Object(p.a)(["\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: background-color 0.15s ease;\n\n  border: 0;\n  color: #FFF;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: default;\n  margin-bottom: 10px;\n  padding-left: 10px;\n  height: 70px;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n      transform: scale(1.2);\n  }\n"]);return R=function(){return e},e}var J=g.c.div(R());function F(e){var n=e.experience;return a.a.createElement(J,null,a.a.createElement("div",null,a.a.createElement("div",null,n.locale),a.a.createElement("div",null,n.function),a.a.createElement("div",null,n.period)))}function z(){var e=Object(p.a)(["\n  border-radius: 3px;\n  transition: background-color 0.15s ease;\n  background-color: rgba(255, 255, 255, 0.2);\n  border: 0;\n  color: #FFF;\n  font-size: 16px;\n  padding: 0 10px;\n  font-weight: 700;\n  cursor: default;\n  height: 70px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n      background: yellow;\n      opacity: 0.6;\n      color: #000;\n  }\n"]);return z=function(){return e},e}var I=g.c.div(z());function A(e){var n=e.skill;return a.a.createElement(I,null,a.a.createElement("div",null,a.a.createElement("div",null,n.name," "),a.a.createElement(P,{times:n.value})))}function N(){var e=Object(p.a)(["\n    background: linear-gradient(315deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 100%);\n  "]);return N=function(){return e},e}function C(){var e=Object(p.a)(["\n    background: linear-gradient(315deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 25%, rgba(224,0,255,1) 100%);\n  "]);return C=function(){return e},e}function D(){var e=Object(p.a)(["\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n  ","\n"]);return D=function(){return e},e}var L=g.c.div(D(),function(e){return B[e.color||"default"]}),B={default:Object(g.b)(C()),empty:Object(g.b)(N())},P=function(e){for(var n=e.times,t=e.max,r=void 0===t?5:t,i=[],o=0;o<r;++o)i.push(a.a.createElement(L,{key:o,color:o<n?"default":"empty"}));return a.a.createElement("div",null,i)};function U(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-area: c;\n  overflow: auto;\n"]);return U=function(){return e},e}function M(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  border-radius: 3px;\n  transition: background-color 0.15s ease;\n  border: 0;\n  font-size: 12px;\n  font-weight: 700;\n\n  ","\n"]);return M=function(){return e},e}function Q(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  border-radius: 3px;\n  transition: background-color 0.15s ease;\n  border: 0;\n  font-size: 12px;\n  font-weight: 700;\n\n  ","\n"]);return Q=function(){return e},e}function W(){var e=Object(p.a)(['\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  transition: background-color 0.15s ease;\n  border: 0;\n  color: #FFF;\n  font-size: 12px;\n  font-weight: 700;\n\n  grid-template-rows: 15vh 80vh 5vh;\n  grid-template-areas: "h h"\n                       "c c"\n                       "f f";\n']);return W=function(){return e},e}function T(){var e=Object(p.a)(["\n    height: 44px;\n    font-size: 18px;\n  "]);return T=function(){return e},e}function Y(){var e=Object(p.a)(["\n    height: 36px;\n    font-size: 14px;\n  "]);return Y=function(){return e},e}function _(){var e=Object(p.a)(["\n    height: 28px;\n    font-size: 12px;\n  "]);return _=function(){return e},e}function q(){var e=Object(p.a)(["\n    background: #715;\n    color: #666;\n    &:hover {\n      background: #999;\n    }\n  "]);return q=function(){return e},e}function G(){var e=Object(p.a)(["\n    background: #353940;\n    &:hover {\n      background: #5f73bc;\n    }\n  "]);return G=function(){return e},e}function H(){var e=Object(p.a)(["\n    background: #b9bbbe;\n    color: #666;\n    &:hover {\n      background: #999;\n    }\n  "]);return H=function(){return e},e}function K(){var e=Object(p.a)(["\n    background: #e04848;\n    &:hover {\n      background: #a43d3d;\n    }\n  "]);return K=function(){return e},e}function V(){var e=Object(p.a)(["\n    background: none;\n  "]);return V=function(){return e},e}var X={default:Object(g.b)(V()),danger:Object(g.b)(K()),gray:Object(g.b)(H()),color1:Object(g.b)(G()),color2:Object(g.b)(q())},Z=(Object(g.b)(_()),Object(g.b)(Y()),Object(g.b)(T()),g.c.div(W())),$=g.c.div(Q(),function(e){return X[e.color||"default"]}),ee=g.c.div(M(),function(e){return X[e.color||"default"]}),ne=g.c.div(U());function te(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(r.useState)([]),c=Object(u.a)(o,2),l=c[0],d=c[1];return Object(r.useEffect)(function(){i(s.getExperiences()),d(s.getSkills())},[]),a.a.createElement(Z,null,a.a.createElement(y,null),a.a.createElement(ne,null,a.a.createElement("div",null,a.a.createElement("div",{style:{marginLeft:"5%"}},a.a.createElement("h1",null,"Skills")),a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},a.a.createElement($,{color:"default",style:{width:"90%"}},l.map(function(e){return a.a.createElement(A,{key:e.id,skill:e})})))),a.a.createElement("div",null,a.a.createElement("div",{style:{marginLeft:"5%"}},a.a.createElement("h1",null,"Experiences")),a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},a.a.createElement(ee,{color:"default",style:{width:"90%"}},t.map(function(e){return a.a.createElement(F,{key:e.id,experience:e})}))))),a.a.createElement(S,null))}var re=function(){return a.a.createElement(c.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",exact:!0,component:te})))};function ae(){var e=Object(p.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');\n  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    color: #363636;\n  }\n\n  html {\n    overflow-x: hidden;\n    overflow-y: hidden;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    font: 14px 'Roboto', sans-serif;\n    -webkit-font-smoothing: antialiase !important;\n\n    background: rgb(224,0,255);\n    background: linear-gradient(315deg, rgba(224,0,255,1) 0%, rgba(253,29,29,1) 25%, rgba(252,176,69,1) 100%);\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  input, button {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return ae=function(){return e},e}var ie=Object(g.a)(ae());var oe=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(re,null),a.a.createElement(ie,null))};o.a.render(a.a.createElement(c.a,null,a.a.createElement(oe,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9f2a2d7e.chunk.js.map