(this.webpackJsonpstep20_code=this.webpackJsonpstep20_code||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n.n(a),c=n(0),s=n(25),i=n(8),o=n(10),l=n.n(o),u=n(21),j=n(14),p=n(69),d=n(3),h=function(e){var t=e.initialValue,n=void 0===t?"//shift+alt+f to format":t,a=e.language,r=e.onChange;return Object(d.jsx)(p.a,{onChange:function(e){e&&r(e)},value:n,height:"100%",width:"100%",theme:"vs-dark",language:a,options:{wordWrap:"on",tabSize:2,minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0,fontFamily:"JetBrains Mono"}})},b=function(e){var t=e.codeJS,n=e.codeCSS,a=e.codeHTML,r="\n<html>\n  <head>\n    <style>\n    .animated {\n      transform: rotate(45deg);\n    }\n    body {\n      color: rgba(0, 0, 0, 0.87)\n      ;\n    }\n    ".concat(n,'\n    </style>\n  </head>\n  <body>\n    <div id="root">').concat(a,"</div>\n    <script>\n      window.addEventListener('message', (event) => {\n          try {\n            eval(event.data);\n          } catch (err) {\n            document.getElementById('root').innerHTML = err\n          }\n      }, false);\n    <\/script>\n  </body>\n</html>\n"),s=Object(c.useRef)();return Object(c.useEffect)((function(){s.current.srcdoc=r,setTimeout((function(){s.current.contentWindow.postMessage(t,"*")}),25)}),[t,a,n,r]),Object(d.jsx)("iframe",{style:{width:"100%",flexGrow:1,backgroundColor:"rgba(255, 255, 255, 0.8)",minHeight:500},title:"q",ref:s,sandbox:"allow-scripts",srcDoc:r})},m=n(45),f=n(46),x=n.n(f),O=n(63),v=n.n(O).a.createInstance({name:"filecache"}),g=function(e){return{name:"fetch-plugin",setup:function(t){t.onLoad({filter:/(^index\.js$)/},(function(){return{loader:"jsx",contents:e}})),t.onLoad({filter:/.css$/},function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r,c,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getItem(t.path);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n);case 5:return e.next=7,x.a.get(t.path);case 7:return a=e.sent,r=a.data,c=a.request,s=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),i="\n                                const style = document.createElement('style');\n                                style.innerText = '".concat(s,"';\n                                document.head.appendChild(style);\n                                "),o={loader:"jsx",contents:i,resolveDir:new URL("./",c.responseURL).pathname},e.next=15,v.setItem(t.path,o);case 15:return e.abrupt("return",o);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.*/},function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getItem(t.path);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n);case 5:return e.next=7,x.a.get(t.path);case 7:return a=e.sent,r=a.data,c=a.request,s={loader:"jsx",contents:r,resolveDir:new URL("./",c.responseURL).pathname},e.next=13,v.setItem(t.path,s);case 13:return e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},w=!1,y=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=4;break}return e.next=3,m.initialize({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.12.8/esbuild.wasm"});case 3:w=!0;case 4:return e.next=6,m.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(t.path)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},g(t)],define:{"process.env.NODE_ENV":'"production"',global:"window"}});case 6:return n=e.sent,e.abrupt("return",n.outputFiles[0].text);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(155),S=n(153),L=Object(S.a)((function(e){return{root:{height:300},cell:{borderColor:e.palette.primary.main,border:"3px solid",flex:"1 1 100%"},preview:{flexGrow:1,display:"flex",flexDirection:"column"}}})),C=function(){var e={js:"//JavaScript",css:"/*CSS*/\nh1 {\n  text-align: center;\n  color:#3f51b5;\n}",html:"<! -- HTML --\x3e"};"/vanillajs"===Object(i.f)().pathname?e.html="<! -- HTML --\x3e\n<h1>Hello \ud83e\udd1a</h1>":e.js="//JavaScript\nimport React from 'react'\nimport ReactDOM from 'react-dom'\n\nconst App = () => {\n  return <h1>Hello \ud83e\udd1a</h1>\n}\n\nReactDOM.render(<App />, document.querySelector('#root'))";var t=L(),n=Object(c.useState)(e.html),a=Object(j.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(e.css),p=Object(j.a)(o,2),m=p[0],f=p[1],x=Object(c.useState)(e.js),O=Object(j.a)(x,2),v=O[0],g=O[1],w=Object(c.useState)(e),S=Object(j.a)(w,2),C=S[0],R=S[1],N=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(v);case 2:t=e.sent,R({js:t,css:m,html:r});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=setTimeout(Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(v);case 2:t=e.sent,R({js:t,css:m,html:r});case 4:case"end":return e.stop()}}),e)}))),750);return function(){clearTimeout(e)}}),[v,m,r]),Object(d.jsxs)("div",{className:"Page-Wrapper",children:[Object(d.jsxs)(k.a,{className:t.root,container:!0,direction:"row",justify:"center",children:[Object(d.jsx)(k.a,{className:t.cell,item:!0,xs:3,children:Object(d.jsx)(h,{initialValue:e.html,onChange:function(e){s(e)},language:"html"})}),Object(d.jsx)(k.a,{className:t.cell,item:!0,xs:3,children:Object(d.jsx)(h,{initialValue:e.css,onChange:function(e){f(e)},language:"css"})}),Object(d.jsx)(k.a,{className:t.cell,item:!0,xs:6,children:Object(d.jsx)(h,{initialValue:e.js,onChange:function(e){g(e)},language:"javascript"})})]}),Object(d.jsx)(k.a,{className:t.preview,container:!0,direction:"column",children:Object(d.jsx)(k.a,{className:t.preview,item:!0,xs:12,children:Object(d.jsx)(b,{codeJS:C.js,codeCSS:C.css,codeHTML:C.html})})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:N,children:"Submit"})})]})},R=n(158),N=n(164),D=n(165),H=n(129),M=n(156),T=n(157),E=n(40),J=n.n(E),U=Object(S.a)({root:{width:700,margin:"50px auto"}}),z=function(){var e=U();return Object(d.jsx)(H.a,{className:e.root,children:Object(d.jsxs)(N.a,{children:[Object(d.jsx)(D.a,{children:Object(d.jsxs)(s.b,{to:"/vanillajs",children:[Object(d.jsx)(M.a,{children:Object(d.jsx)(J.a,{fontSize:"small"})}),Object(d.jsx)(T.a,{variant:"inherit",children:"Blank template"})]})}),Object(d.jsx)(D.a,{children:Object(d.jsxs)(s.b,{to:"/react",children:[Object(d.jsx)(M.a,{children:Object(d.jsx)(J.a,{fontSize:"small"})}),Object(d.jsx)(T.a,{variant:"inherit",children:"React template"})," "]})}),Object(d.jsxs)(D.a,{children:[Object(d.jsx)(M.a,{children:Object(d.jsx)(J.a,{fontSize:"small"})}),Object(d.jsx)(T.a,{variant:"inherit",noWrap:!0,children:"Demo"})]})]})})},B=function(){return Object(d.jsx)(R.a,{children:Object(d.jsx)(z,{})})},I=n(159),q=n(160),V=n(162),G=n(161),W=n(68),$=n.n(W),_=Object(S.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},wrapper:{backgroundColor:e.palette.background.default,minHeight:"100vh",display:"flex",flexDirection:"column"}}})),A=function(){var e=_();return Object(d.jsxs)("div",{className:e.wrapper,children:[Object(d.jsx)(I.a,{position:"static",children:Object(d.jsxs)(q.a,{children:[Object(d.jsx)(G.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(d.jsx)($.a,{})}),Object(d.jsx)(T.a,{variant:"h6",className:e.title,children:"CodeHere"}),Object(d.jsx)(V.a,{color:"inherit",children:"Login"})]})}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/vanillajs",component:C}),Object(d.jsx)(i.a,{path:"/react",component:C}),Object(d.jsx)(i.a,{path:"/codehere",component:B}),Object(d.jsx)(i.a,{path:"/",component:B})]})]})},F=n(163),P=n(70),K=Object(P.a)({palette:{type:"dark"}}),Q=function(){return Object(d.jsx)(s.a,{children:Object(d.jsx)(F.a,{theme:K,children:Object(d.jsx)(A,{})})})};n(125);r.a.render(Object(d.jsx)(Q,{}),document.querySelector("#root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.3679a298.chunk.js.map