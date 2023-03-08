"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[986],{2296:function(e,a,t){t.d(a,{Z:function(){return k}});var s=t(7294),i=t(8650),n=t.n(i),c=t(1082),l=t(1025),r=t(1908),o=t(5900),m=t.n(o),p=function(e){var a,t=e.title,i=e.theme,n=e.tabs,c=void 0===n?[]:n;return s.createElement("div",{className:m()("PageHeader-module--page-header--36a7c",(a={},a["PageHeader-module--with-tabs--bdb43"]=c.length,a["PageHeader-module--dark-mode--58278"]="dark"===i,a))},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12"},s.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))},d=function(e){var a=e.relativePagePath,t=e.repository,i=(0,c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||i,l=n.baseUrl,r=n.subDirectory,o=l+"/edit/"+n.branch+r+"/src/pages"+a;return l?s.createElement("div",{className:"cds--row EditLink-module--row--04499"},s.createElement("div",{className:"cds--col"},s.createElement("a",{className:"EditLink-module--link--203ae",href:o},"Edit this page on GitHub"))):null},u=t(849),f=t(1721),g=function(e){function a(){return e.apply(this,arguments)||this}return(0,f.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,i=e.slug,l=i.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var a,t=n()(e,{lower:!0,strict:!0}),r=t===l,o=new RegExp(l+"/?(#.*)?$"),p=i.replace(o,t);return s.createElement("li",{key:e,className:m()((a={},a["PageTabs-module--selected-item--68107"]=r,a),"PageTabs-module--list-item--d36e2")},s.createElement(c.Link,{className:"PageTabs-module--link--2b3ff",to:""+p},e))}));return s.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},s.createElement("nav",{"aria-label":a},s.createElement("ul",{className:"PageTabs-module--list--c4bab"},r))))))},a}(s.Component),b=g,h=t(5391),v=t(5387),w=t(4389),y=function(e){var a=e.date,t=new Date(a);return a?s.createElement(w.X2,{className:"last-modified-date-module--row--5c9a1"},s.createElement(w.sg,null,s.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},k=function(e){var a=e.pageContext,t=e.children,i=e.location,o=e.Title,m=a.frontmatter,f=void 0===m?{}:m,g=a.relativePagePath,w=a.titleType,k=f.tabs,A=f.title,E=f.theme,N=f.description,P=f.keywords,T=f.date,x=(0,v.Z)().interiorTheme,C=(0,c.useStaticQuery)("2456312558").site.pathPrefix,D=C?i.pathname.replace(C,""):i.pathname,B=k?D.split("/").filter(Boolean).slice(-1)[0]||n()(k[0],{lower:!0}):"",Z=E||x;return s.createElement(r.Z,{tabs:k,homepage:!1,theme:Z,pageTitle:A,pageDescription:N,pageKeywords:P,titleType:w},s.createElement(p,{title:o?s.createElement(o,null):A,label:"label",tabs:k,theme:Z}),k&&s.createElement(b,{title:A,slug:D,tabs:k,currentTab:B}),s.createElement(h.Z,{padded:!0},t,s.createElement(d,{relativePagePath:g}),s.createElement(y,{date:T})),s.createElement(u.Z,{pageContext:a,location:i,slug:D,tabs:k,currentTab:B}),s.createElement(l.Z,null))}},976:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return m}});var s=t(3366),i=(t(7294),t(4983)),n=t(2296),c=["components"],l={},r={_frontmatter:l},o=n.Z;function m(e){var a=e.components,t=(0,s.Z)(e,c);return(0,i.kt)(o,Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"Google Maps"),(0,i.kt)("p",null,"The Watson Assistant web chat widget has a feature to display an embedded iframe as a hyperlink, which then expands once clicked upon to display any given map.  The default map chosen for the asset is Google Maps.  "),(0,i.kt)("p",null,"In order to use the same dialog node as is, you must obtain your own Google API Key and update the node “Map Office By Zip Code”."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Obtain a Google Maps API Key as specified in this link:  ",(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/maps/documentation/javascript/get-api-key"},"API Key")),(0,i.kt)("li",{parentName:"ol"},"From Watson Assistant, find the dialog node ",(0,i.kt)("inlineCode",{parentName:"li"},"Map Office by Zip Code")),(0,i.kt)("li",{parentName:"ol"},"Update the context variable ",(0,i.kt)("inlineCode",{parentName:"li"},"mapApiKey")," with the API key you obtained from the first step."),(0,i.kt)("li",{parentName:"ol"},"Optionally, update the ",(0,i.kt)("inlineCode",{parentName:"li"},"mapQuery")," context variable as required.  The default map query is ",(0,i.kt)("inlineCode",{parentName:"li"},"Department+Social+Services"),".")),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5ElEQVQoz5WN0UsTcQDH718RK4qWSBC21gq3mGVSWWOD2orppNB8KHwNo7deewkKY9gZag/KteHUOxu2jjbcSFgxL23XXbdd51nd7fb73f1+Oy/2JuRDffm8fOH74UtsbOS5cja/tphhaWp1fX61vFQQlgsC/VFM50psnmJzC0maSjGpJ1PU+LO5d+xK5v3bLEsXCwwRivWMjp25PtTR7vX2PGD7HlcCj8q+8c+eh/yBWzPhSFsodtB1oc0dPBy45Hb7Orv8HV2BzkMnj/r7u4ljnhPec8fD4dN9Vzw3BkKDw7Ho3eDVeG/wzvnIkC8edQ3Gj3Rfbj/b7/JePNV7zT9yP3pv7Obw6EDk9ggxMfmCnJ5IviGX0q+zNFnIzOQyZJZJMOmnH5jnayvTiwvkPJWYmp1MvHo5l0rygiQrqgZRsVQinD2BEP3WAYDYcRwAsG4g2951HKdeb+iabtuOjaFY5UtbilgVK7JMGEYDQAgghNBEFkIIYYyhaVlWq2CEoGlCCAFo0TDqnFjlKgIv8l8liYCtIdqL2TLR32DcBAAU+W2J3yp/2RSkyj7yvpgWaiK8Y4DlTfWTwPM/5Jpc+2fZtHabTUHVZ9dr3HehKtcURfmPZ4ywphvct+q2qmp1befnrz+iTdf61Z7Z6gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/0eda2/virtual-assistant-ce-maps.webp 288w","/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/460e2/virtual-assistant-ce-maps.webp 576w","/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/e0ca3/virtual-assistant-ce-maps.webp 1152w","/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/d02be/virtual-assistant-ce-maps.webp 1728w","/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/5c009/virtual-assistant-ce-maps.webp 1913w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/7fc1e/virtual-assistant-ce-maps.png 288w","/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/a5df1/virtual-assistant-ce-maps.png 576w","/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/3cbba/virtual-assistant-ce-maps.png 1152w","/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/0b124/virtual-assistant-ce-maps.png 1728w","/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/34599/virtual-assistant-ce-maps.png 1913w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/84f2a8c45225cb83aced6c3a2ff0a3f1/3cbba/virtual-assistant-ce-maps.png",alt:"virtual-assistant-overview",title:"virtual-assistant-overview",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ce-integrate-maps-mdx-eef4ea950c541173c19e.js.map