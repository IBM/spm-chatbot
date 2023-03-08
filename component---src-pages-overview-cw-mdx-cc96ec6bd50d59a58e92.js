"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[2491],{2296:function(e,t,a){a.d(t,{Z:function(){return A}});var s=a(7294),i=a(8650),n=a.n(i),r=a(1082),o=a(1025),c=a(1908),l=a(5900),d=a.n(l),m=function(e){var t,a=e.title,i=e.theme,n=e.tabs,r=void 0===n?[]:n;return s.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=r.length,t["PageHeader-module--dark-mode--58278"]="dark"===i,t))},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12"},s.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,i=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,o=n.baseUrl,c=n.subDirectory,l=o+"/edit/"+n.branch+c+"/src/pages"+t;return o?s.createElement("div",{className:"cds--row EditLink-module--row--04499"},s.createElement("div",{className:"cds--col"},s.createElement("a",{className:"EditLink-module--link--203ae",href:l},"Edit this page on GitHub"))):null},u=a(849),g=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),c=a===o,l=new RegExp(o+"/?(#.*)?$"),m=i.replace(l,a);return s.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--68107"]=c,t),"PageTabs-module--list-item--d36e2")},s.createElement(r.Link,{className:"PageTabs-module--link--2b3ff",to:""+m},e))}));return s.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},s.createElement("nav",{"aria-label":t},s.createElement("ul",{className:"PageTabs-module--list--c4bab"},c))))))},t}(s.Component),h=b,v=a(5391),f=a(5387),w=a(4389),k=function(e){var t=e.date,a=new Date(t);return t?s.createElement(w.X2,{className:"last-modified-date-module--row--5c9a1"},s.createElement(w.sg,null,s.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},A=function(e){var t=e.pageContext,a=e.children,i=e.location,l=e.Title,d=t.frontmatter,g=void 0===d?{}:d,b=t.relativePagePath,w=t.titleType,A=g.tabs,y=g.title,E=g.theme,N=g.description,P=g.keywords,x=g.date,T=(0,f.Z)().interiorTheme,Z=(0,r.useStaticQuery)("2456312558").site.pathPrefix,Q=Z?i.pathname.replace(Z,""):i.pathname,S=A?Q.split("/").filter(Boolean).slice(-1)[0]||n()(A[0],{lower:!0}):"",U=E||T;return s.createElement(c.Z,{tabs:A,homepage:!1,theme:U,pageTitle:y,pageDescription:N,pageKeywords:P,titleType:w},s.createElement(m,{title:l?s.createElement(l,null):y,label:"label",tabs:A,theme:U}),A&&s.createElement(h,{title:y,slug:Q,tabs:A,currentTab:S}),s.createElement(v.Z,{padded:!0},a,s.createElement(p,{relativePagePath:b}),s.createElement(k,{date:x})),s.createElement(u.Z,{pageContext:t,location:i,slug:Q,tabs:A,currentTab:S}),s.createElement(o.Z,null))}},5126:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var s=a(3366),i=(a(7294),a(4983)),n=a(2296),r=["components"],o={},c={_frontmatter:o},l=n.Z;function d(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.kt)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"Case-specific or Person-specific data"),(0,i.kt)("p",null,"As a caseworker, you can get case-specific or person-specific information by using the chatbot. Use the chatbot to quickly answer citizen questions and access information on a case without navigating through multiple pages for the information."),(0,i.kt)("p",null,"You can access data without navigating to the case or person of interest. If extra details are needed, you can navigate to the page of interest by using a link in the chatbot."),(0,i.kt)("h2",null,"Services support"),(0,i.kt)("p",null,"Agencies, by using Lab Services, are empowered to retrieve SPM case-specific data by using secure chatbot integration, by using existing or new APIs, or by building on sample dialog skills that were created for outstanding verifications."),(0,i.kt)("h2",null,"Process guides"),(0,i.kt)("p",null,"You can access process guides by using the chatbot. The chatbot can guide you through a process while the chatbot is working on it. This removes the need to access documentation that is external to the application."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAABYlAAAWJQFJUiTwAAACF0lEQVQoz43SzWsUMRQA8PkDvPUo7dZ1Wlqwhfbv8CqoKCLSSw/Wg3rw5NmT+IUHwYsn/wu9qbXd7mx7UETwe9fdTmaSvOS9vOTJjBaKUOiPkBDI++CRbGFhcWl5eXVlZXFxodOZ6XZPzc52ZmammzX9T57nc3Nz8/PzeZ53Op281e12s3fve283t7Z3+ts7e73+bq/Y6/X3tnd2t3qDohjstgatoiiao70WRbHT72chECEisUP22OwOGUMkFubIh0hKIkmERZgQvLOZc06pCqyJzcvAHLx3Wtfj8e9KlRwCN+nJe/9jVH8b1uMq/Nynr0P4NdYZOPo+4dJEOcDMVVUNR6OyNkQhhKZsCHTlCecbvHQ7zV5PJ67KxnOfOU+llQqasJSazjgEoDixofSxwqQw2ZAQ8dLjePqGnLmVVu+kqTVZf4ZN26VSk8m+rusUOUZG78FT7VA7AmIgdhQQ/eVHPLWWptbSyfWUXZBrTzFDRABrjLbgHAkGQQoOQKnSGpNSQkqB2QLefJHO3ZfzD9LFh3L2ntx96TNrrW8557QBbQAAQgje+xhjSmJRiMUAvRr4zY+w9Yl6n+nNB3o9sJkxRrfMIe4AOGdsswi9quHL0I1UGJahNKwNZOYIh9PpJh1YxwoESAwKJ3HOHRn8n2YsEKo22KJwFGuPHdyUt04Zqkyw7TSshUxrXR9PpdTfbwdgrbVa6z+e/dEdePgU9QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/a78871d45995f7e2001039714637f015/0eda2/virtual-assistant-overview.webp 288w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/460e2/virtual-assistant-overview.webp 576w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/e0ca3/virtual-assistant-overview.webp 1152w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/d02be/virtual-assistant-overview.webp 1728w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/c1f4c/virtual-assistant-overview.webp 2304w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/a690e/virtual-assistant-overview.webp 2442w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/a78871d45995f7e2001039714637f015/7fc1e/virtual-assistant-overview.png 288w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/a5df1/virtual-assistant-overview.png 576w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/3cbba/virtual-assistant-overview.png 1152w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/0b124/virtual-assistant-overview.png 1728w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/4ea69/virtual-assistant-overview.png 2304w","/spm-chatbot/static/a78871d45995f7e2001039714637f015/71706/virtual-assistant-overview.png 2442w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/a78871d45995f7e2001039714637f015/3cbba/virtual-assistant-overview.png",alt:"virtual-assistant-overview",title:"virtual-assistant-overview",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-cw-mdx-cc96ec6bd50d59a58e92.js.map