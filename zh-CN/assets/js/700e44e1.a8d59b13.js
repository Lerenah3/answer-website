"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[570],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(h,s(s({ref:t},u),{},{components:n})):i.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(4250),a=(n(9496),n(9613));const o={title:"The Packaging Process for Answer Plugins",authors:["LinkinStar"],category:"Tech",featured:!0,image:"2023-07-22-cover@4x.png",description:"Let's discuss the design and implementation of the plugin system for Answer, and know why we design this way."},s=void 0,r={permalink:"/zh-CN/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way",source:"@site/blog/2023-07-22-why-the-answer-plugin-system-was-designed-this-way/index.md",title:"The Packaging Process for Answer Plugins",description:"Let's discuss the design and implementation of the plugin system for Answer, and know why we design this way.",date:"2023-07-22T00:00:00.000Z",formattedDate:"2023\u5e747\u670822\u65e5",tags:[],readingTime:3.375,hasTruncateMarker:!1,authors:[{name:"LinkinStar",title:"Developer",url:"https://github.com/LinkinStars/",imageURL:"https://avatars.githubusercontent.com/u/19712692?v=4",key:"LinkinStar"}],frontMatter:{title:"The Packaging Process for Answer Plugins",authors:["LinkinStar"],category:"Tech",featured:!0,image:"2023-07-22-cover@4x.png",description:"Let's discuss the design and implementation of the plugin system for Answer, and know why we design this way."},prevItem:{title:"How to Manage Content System Efficiently with Answer",permalink:"/zh-CN/blog/2023/08/09/how-to-manage-content-system-efficiently-with-answer"},nextItem:{title:"How to Utilize Reputation and Privilege in Online Community",permalink:"/zh-CN/blog/2023/07/19/how-to-utilize-reputation-and-privilege-in-online-community"}},l={authorsImageUrls:[void 0]},p=[{value:"Background",id:"background",level:2},{value:"Goal &amp; Features",id:"goal--features",level:2},{value:"Connectors",id:"connectors",level:3},{value:"Storage",id:"storage",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Details",id:"details",level:3},{value:"Reason",id:"reason",level:3},{value:"Static Compilation",id:"static-compilation",level:4},{value:"Fixed Functionality",id:"fixed-functionality",level:4},{value:"Extension",id:"extension",level:4},{value:"Reference",id:"reference",level:2},{value:"More",id:"more",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Why is Answer's plugin system designed in such a way that it seems a bit difficult to use?"),(0,a.kt)("li",{parentName:"ol"},"How can I implement plugin functionality using Golang?"),(0,a.kt)("li",{parentName:"ol"},"What exactly does Answer's plugin system do when it is compiled and packaged?"))),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"You can build a Q&A community using Answer easily. However, the basic features of Answer may not sufficiently support to every use case.\nTherefore, we need to design a plugin system to extend its features.\nAs you may know, Answer is built using ",(0,a.kt)("inlineCode",{parentName:"p"},"React.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Golang"),". Both these languages require compilation. So designing a plugin system is a bit difficult."),(0,a.kt)("h2",{id:"goal--features"},"Goal & Features"),(0,a.kt)("p",null,"The goal of Answer's plugin system is to provide a ",(0,a.kt)("strong",{parentName:"p"},"flexible")," and ",(0,a.kt)("strong",{parentName:"p"},"extendable")," architecture that can accommodate a wide range of use cases. Some of the key features of the plugin system include:"),(0,a.kt)("h3",{id:"connectors"},"Connectors"),(0,a.kt)("p",null,"By default, Answer supports login via email and password. Within the plugin system, developers can easily integrate other authentication, such as GitHub."),(0,a.kt)("img",{src:n(8297).Z,alt:"install-choose-language",width:"400"}),(0,a.kt)("h3",{id:"storage"},"Storage"),(0,a.kt)("p",null,"Out of the box, Answer stores files in the local file system. However, there could be scenarios where users might prefer to save their uploaded files to a cloud storage service like ",(0,a.kt)("inlineCode",{parentName:"p"},"S3"),". This can be achieved by the plugin system."),(0,a.kt)("img",{src:n(4713).Z,alt:"install-choose-language",width:"400"}),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"Now, let's explore how the plugin system is implemented, followed by the reasons behind our design decisions."),(0,a.kt)("h3",{id:"details"},"Details"),(0,a.kt)("p",null,"The general process is as follows:"),(0,a.kt)("img",{src:n(3745).Z,alt:"install-choose-language",width:"400"}),(0,a.kt)("p",null,"Here are the steps involved in implementing a plugin:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate a ",(0,a.kt)("inlineCode",{parentName:"li"},"main.go")," file."),(0,a.kt)("li",{parentName:"ol"},"Import the specific plugin list."),(0,a.kt)("li",{parentName:"ol"},"Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"go mod tidy")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"go mod vendor")," to manage dependencies."),(0,a.kt)("li",{parentName:"ol"},"Copy the UI directory."),(0,a.kt)("li",{parentName:"ol"},"Overwrite the ",(0,a.kt)("inlineCode",{parentName:"li"},"index.ts")," file."),(0,a.kt)("li",{parentName:"ol"},"Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm install")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm build")," to manage the package and build the project."),(0,a.kt)("li",{parentName:"ol"},"Merge the ",(0,a.kt)("inlineCode",{parentName:"li"},"i18n")," file from the plugin with the original ",(0,a.kt)("inlineCode",{parentName:"li"},"i18n")," file."),(0,a.kt)("li",{parentName:"ol"},"Build a new binary."),(0,a.kt)("li",{parentName:"ol"},"Clean up the byproducts generated during the build process.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"answer-plugin-build-all.png",src:n(6488).Z,width:"1862",height:"846"})),(0,a.kt)("h3",{id:"reason"},"Reason"),(0,a.kt)("p",null,"Here are the reasons behind our design choices:"),(0,a.kt)("h4",{id:"static-compilation"},"Static Compilation"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is the main reason why the plugin system is designed this way.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Golang")," both these languages require compilation. They are not dynamically executable like some other scripting languages.\nSo the plugin system should be a static compilation, which means that the application and plugins are compiled together, resulting in a single binary that can be easily distributed and deployed."),(0,a.kt)("h4",{id:"fixed-functionality"},"Fixed Functionality"),(0,a.kt)("p",null,"The plugin system allows users to add features that are fixed for their specific use cases without changing the core system.\nFurthermore, these functionalities persistently remain operational once they are employed.\nTherefore, it is sufficient to deliberate on the necessities of their incorporation at the initial stage, and subsequently, package them accordingly.\nIn the future, we can build a Docker image that contains all official plugins, thereby enabling users to access the entire range of features. The enablement or disablement of these functionalities can be managed through the plugin control interface."),(0,a.kt)("h4",{id:"extension"},"Extension"),(0,a.kt)("p",null,"The most important capability of a plugin system is its extensibility.\nA program can't provide all the functions that every user wants.\nHowever, with a plugin system, users can develop their plugins to help them achieve the functions that they want."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"The Caddy is a great open-source software that inspired the design of the Answer plugin system.\nCaddy is a web server that allows developers to extend its functionality using plugins.\nUsing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/caddyserver/xcaddy/"},"xcaddy")," can easy to make custom builds of the Caddy Web Server. "),(0,a.kt)("h2",{id:"more"},"More"),(0,a.kt)("p",null,"In this blog post, we discussed the design and implementation of the plugin system for Answer, a popular open-source Q&A platform.\nWe discussed the motivation behind the design, and the features and principles of the plugin system, and provided a step-by-step guide on implementation.\nIf you are interested in developing plugins for Answer, please feel free to leave us a comment.\nWe will also write an article on how to implement an Answer plugin from scratch, so stay focused!"))}c.isMDXComponent=!0},3745:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/answer-plugin-build-brief-870a86d5966ae754f1a166604524137e.png"},8297:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/answer-plugin-connector-bc65790664a0b5e0d065ed7448d5429c.png"},4713:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/answer-plugin-storage-5665a6432f5cacaaef81d7bcc8128555.png"},6488:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/answer-plugin-build-all-419696fc6220d13e784931f52c29a9fd.png"}}]);