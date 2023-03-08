"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5303],{2296:function(e,t,a){a.d(t,{Z:function(){return y}});var i=a(7294),s=a(8650),n=a.n(s),r=a(1082),c=a(1025),l=a(1908),o=a(5900),d=a.n(o),p=function(e){var t,a=e.title,s=e.theme,n=e.tabs,r=void 0===n?[]:n;return i.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=r.length,t["PageHeader-module--dark-mode--58278"]="dark"===s,t))},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,s=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||s,c=n.baseUrl,l=n.subDirectory,o=c+"/edit/"+n.branch+l+"/src/pages"+t;return c?i.createElement("div",{className:"cds--row EditLink-module--row--04499"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--203ae",href:o},"Edit this page on GitHub"))):null},u=a(849),g=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,s=e.slug,c=s.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),l=a===c,o=new RegExp(c+"/?(#.*)?$"),p=s.replace(o,a);return i.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--68107"]=l,t),"PageTabs-module--list-item--d36e2")},i.createElement(r.Link,{className:"PageTabs-module--link--2b3ff",to:""+p},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":t},i.createElement("ul",{className:"PageTabs-module--list--c4bab"},l))))))},t}(i.Component),h=b,f=a(5391),w=a(5387),A=a(4389),k=function(e){var t=e.date,a=new Date(t);return t?i.createElement(A.X2,{className:"last-modified-date-module--row--5c9a1"},i.createElement(A.sg,null,i.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,s=e.location,o=e.Title,d=t.frontmatter,g=void 0===d?{}:d,b=t.relativePagePath,A=t.titleType,y=g.tabs,N=g.title,v=g.theme,E=g.description,x=g.keywords,T=g.date,C=(0,w.Z)().interiorTheme,z=(0,r.useStaticQuery)("2456312558").site.pathPrefix,B=z?s.pathname.replace(z,""):s.pathname,P=y?B.split("/").filter(Boolean).slice(-1)[0]||n()(y[0],{lower:!0}):"",W=v||C;return i.createElement(l.Z,{tabs:y,homepage:!1,theme:W,pageTitle:N,pageDescription:E,pageKeywords:x,titleType:A},i.createElement(p,{title:o?i.createElement(o,null):N,label:"label",tabs:y,theme:W}),y&&i.createElement(h,{title:N,slug:B,tabs:y,currentTab:P}),i.createElement(f.Z,{padded:!0},a,i.createElement(m,{relativePagePath:b}),i.createElement(k,{date:T})),i.createElement(u.Z,{pageContext:t,location:s,slug:B,tabs:y,currentTab:P}),i.createElement(c.Z,null))}},9080:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return m}});var i,s=a(3366),n=(a(7294),a(4983)),r=a(2296),c=["components"],l={},o=(i="Caption",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),d={_frontmatter:l},p=r.Z;function m(e){var t=e.components,a=(0,s.Z)(e,c);return(0,n.kt)(p,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Virtual Assistant is displayed as a blue icon and is located in the lower right of the application."),(0,n.kt)("p",null,"When the user clicks the icon, the Virtual Assistant is launched. The minimize icon in the upper right collapses the Virtual Assistant screen when the screen is not in use."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"904px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABYklEQVQoz31R0U7jMBD0h1HIqW0OIR2/ymfcl9xT25DE67W962TQutAzKBBpMtlxdnZsu9+PT/jz/Ixj3+P+/gFd96vy3d0Ou9336LoOx+MRh8MB+/0efd9XdqfzBefLgPMwf8ZlwjTNmKapYmxQtXHE2GAYBpxOJ7iUEnLOKEVRSqmsqlVjDojMtS4NVATWFwJXtj7RAmaGs5c1L8tSF2NKoBCRs2AYJ0whgvKCqAuSvrMU5JTAgWqPmm7/pPzfULVg9lS/r7WCcsGcCnwDqzkrAmeMpFjXFeu6AOsKEYGLkSE5I2WFDwlq8UVrfCIPImqYQJ7AwePVK/69Arrg9tjWHXNEFmnEBVlRt+69hye68g3XAT5EXGYBR6nJ5P1cHcdU032Itt2YBDbIDG7JGnyYBkv+aZiH+yq0oCbdVzPjimaQ3YHzWwlu5+Wxub6R3MwlWcKNhp8at4wMkT1e/jLeAFw1Kfi4LfT3AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/600c4c41c270a9faa7bdfe36a4a64ce7/0eda2/user-guide-caseworker-home.webp 288w","/spm-chatbot/static/600c4c41c270a9faa7bdfe36a4a64ce7/460e2/user-guide-caseworker-home.webp 576w","/spm-chatbot/static/600c4c41c270a9faa7bdfe36a4a64ce7/b3731/user-guide-caseworker-home.webp 904w"],sizes:"(max-width: 904px) 100vw, 904px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/600c4c41c270a9faa7bdfe36a4a64ce7/7fc1e/user-guide-caseworker-home.png 288w","/spm-chatbot/static/600c4c41c270a9faa7bdfe36a4a64ce7/a5df1/user-guide-caseworker-home.png 576w","/spm-chatbot/static/600c4c41c270a9faa7bdfe36a4a64ce7/bbf1d/user-guide-caseworker-home.png 904w"],sizes:"(max-width: 904px) 100vw, 904px",type:"image/png"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/600c4c41c270a9faa7bdfe36a4a64ce7/bbf1d/user-guide-caseworker-home.png",alt:"user-guide-caseworker-home",title:"user-guide-caseworker-home",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,n.kt)(o,{fullWidth:!0,mdxType:"Caption"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Figure 1: The Virtual Assistant on the application."))),(0,n.kt)("p",null,"When the Virtual Assistant is open, the user can engage with it in two ways. The following list outlines the ways that the user can engage with the Virtual Assistant:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The user can type a free text question, case reference and number or identification type and number into the text field."),(0,n.kt)("li",{parentName:"ul"},"The user can click one of the options in the Get started section, ",(0,n.kt)("inlineCode",{parentName:"li"},"Outstanding verifications by case"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Outstanding verifications by client")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Caseworker procedures"),".")),(0,n.kt)("p",null,"Each option prompts the user to enter more information about what they want to find."),(0,n.kt)("p",null,"The Virtual Assistant can recognize different variations of how users enter information. If the user is searching by using free text, the user must attempt another variation if the Virtual Assistant does not recognize the user’s input."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"904px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABmElEQVQoz52SvYoVQRCF5yl8AyMjAwMx3bvOcrmzItzY0NREEMV83QfwWQzFxMhoI1/AzJnp6d/qn/2ke/ZXXAUHDoc5FKdOVVd3/Ow5+/2e3W7g8PApfX/U+OBgw2ZzN/q+Z7fbsd1uG4ZhaNxN08w8L0zKrlguWBmMtVhrMcbcCa11g1KKcRzpQgiICDklUooNEiNVt8bgnbvSK3KKxCh473HOIRIoJZNzInhHV8UYI6WUZhyCYF1tEvk5K5T1aCn4VPAx42MhxIzUhta0Wi8FZQuzideGNdWsdEtWi6tmJLOEjJaMDivqv5OEccKkIy8+Fh6/zzx8Uxg+yGpYk0msRYGUUktXdaP1xa70NbTBGs1sMj8mODo55/6rc+69hCfvLJ11nhgTl18dPWba6G3hNxa/wqyNrGdchOG08Oht4cFrOD6xdM6v+6qLrlzTulAT+mbw55ddUy+L5tM3w+czz9fvmS9nC93t7rdx8yx+N7tkZYRRF2wAtWi6f93YX/V6f7Y+FqQCWtv/N7waWzumxSOx4EPgFwMxHPFbAMJTAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/92be3957f5d591d40e7820ae90952d33/0eda2/user-guide-web-chat.webp 288w","/spm-chatbot/static/92be3957f5d591d40e7820ae90952d33/460e2/user-guide-web-chat.webp 576w","/spm-chatbot/static/92be3957f5d591d40e7820ae90952d33/b3731/user-guide-web-chat.webp 904w"],sizes:"(max-width: 904px) 100vw, 904px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/92be3957f5d591d40e7820ae90952d33/7fc1e/user-guide-web-chat.png 288w","/spm-chatbot/static/92be3957f5d591d40e7820ae90952d33/a5df1/user-guide-web-chat.png 576w","/spm-chatbot/static/92be3957f5d591d40e7820ae90952d33/bbf1d/user-guide-web-chat.png 904w"],sizes:"(max-width: 904px) 100vw, 904px",type:"image/png"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/92be3957f5d591d40e7820ae90952d33/bbf1d/user-guide-web-chat.png",alt:"user-guide-web-chat",title:"user-guide-web-chat",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,n.kt)(o,{fullWidth:!0,mdxType:"Caption"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Figure 2: The Virtual Assistant get started section."))),(0,n.kt)("p",null,"During the chat session, there is a blue question mark icon in the lower left. Clicking the blue question mark icon provides the user with the original set of options that are provided by the Virtual Assistant at the start of the chat."),(0,n.kt)("p",null,"The following list outlines the set of options that are displayed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Outstanding verifications by case."),(0,n.kt)("li",{parentName:"ul"},"Outstanding verifications by client."),(0,n.kt)("li",{parentName:"ul"},"Caseworker procedures.")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"904px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABlklEQVQoz51T226bQBDluyzLOEQgS32pIvUHmzw4fbDld/9Lkkou4c5eB1jwqWZpHbVpqyYrHc3AmTnMnl2CxWKBjzefkGw+IAzXuIpihOs1lsslwjD0WK1WrxBFEZIkQRLHiOMYm80G19cRgsPhAGMIeVGibVtIpdE0tc+rqoJSCtYSrLWvoLVG3QooQ2il8LXB8XgELyEEhJAwxqBuWhB1qOoG0zThXystCI3s0LvBP/sJpzO8mNIGxlgobaF9NDC2h6EBfddhGAY452b8yFtFkIr8h8/nM4LPt3cgskjTFHmeoygKZNkzyrJEVZXeiqIoPcc52zBzc+SddV3n+x4eHhF8ub/3ylJKT7I3HHnrDC52bkA/TNA0wbkRZC3GcUTf95cermPfg+1260dnQ9lkJoheDoGbGES93/5PniPjdDrh6enRv2NLgt1udzkUFv0TePq/cUJqCDkPw7ch2O/3vwgy8RZ8S1NkWQZrDcia9wnOdTyhRlnWqOsarTT4+vyb4P9OxUIsyD9BXmlUgiDMCGUdvgMEAB61V4dO4QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/f9a742b8c783e5620c1a8656eb3b4fe0/0eda2/user-guide-case-flow.webp 288w","/spm-chatbot/static/f9a742b8c783e5620c1a8656eb3b4fe0/460e2/user-guide-case-flow.webp 576w","/spm-chatbot/static/f9a742b8c783e5620c1a8656eb3b4fe0/b3731/user-guide-case-flow.webp 904w"],sizes:"(max-width: 904px) 100vw, 904px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/f9a742b8c783e5620c1a8656eb3b4fe0/7fc1e/user-guide-case-flow.png 288w","/spm-chatbot/static/f9a742b8c783e5620c1a8656eb3b4fe0/a5df1/user-guide-case-flow.png 576w","/spm-chatbot/static/f9a742b8c783e5620c1a8656eb3b4fe0/bbf1d/user-guide-case-flow.png 904w"],sizes:"(max-width: 904px) 100vw, 904px",type:"image/png"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/f9a742b8c783e5620c1a8656eb3b4fe0/bbf1d/user-guide-case-flow.png",alt:"user-guide-case-flow",title:"user-guide-case-flow",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,n.kt)(o,{fullWidth:!0,mdxType:"Caption"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Figure 3: The Virtual Assistant blue question mark icon displayed."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-user-guide-getting-started-mdx-1acd4e5ae409fefb450f.js.map