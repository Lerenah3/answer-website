"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[927],{230:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var t=i(43010),a=i(90887);const s={date:new Date("2024-08-22T00:00:00.000Z"),title:"Guide to Adding Plugins to Apache Answer",authors:["ZhuXuanlyu","ChenJiaji","Anne"],category:"Tutorials",featured:!0,image:"2024-08-22-cover@4x.png",description:"Learn how to easily add Apache Answer plugins and extend its functionality"},l=void 0,d={permalink:"/blog/guide-to-add-answer-plugins",editUrl:"https://github.com/apache/answer-website/edit/main/blog/guide-to-add-answer-plugins/index.md",source:"@site/blog/guide-to-add-answer-plugins/index.md",title:"Guide to Adding Plugins to Apache Answer",description:"Learn how to easily add Apache Answer plugins and extend its functionality",date:"2024-08-22T00:00:00.000Z",formattedDate:"August 22, 2024",tags:[],readingTime:1.87,hasTruncateMarker:!1,authors:[{name:"Zhu Xuanlyu",title:"Developer",url:"https://github.com/IamMelody233",imageURL:"https://avatars.githubusercontent.com/u/103870995?v=4",key:"ZhuXuanlyu"},{name:"Chen Jiaji",title:"Developer",url:"https://github.com/CHENJUaaa",imageURL:"https://avatars.githubusercontent.com/u/137683102?v=4",key:"ChenJiaji"},{name:"Anne Zhu",title:"Product Marketing Manager",url:"https://github.com/PrimmaAnna",imageURL:"https://avatars.githubusercontent.com/u/131739771?v=4",key:"Anne"}],frontMatter:{date:"2024-08-22T00:00:00.000Z",title:"Guide to Adding Plugins to Apache Answer",authors:["ZhuXuanlyu","ChenJiaji","Anne"],category:"Tutorials",featured:!0,image:"2024-08-22-cover@4x.png",description:"Learn how to easily add Apache Answer plugins and extend its functionality"},unlisted:!1,prevItem:{title:"Recap of August | Apache Answer",permalink:"/blog/answer-recap-august"},nextItem:{title:"Apache Answer Backend Configuration Guide",permalink:"/blog/apache-answer-backend-configuration-guide"}},o={authorsImageUrls:[void 0,void 0,void 0]},r=[{value:"Download Plugins",id:"download-plugins",level:2},{value:"Install Standard UI Plugin",id:"install-standard-ui-plugin",level:2},{value:"Install Backend Plugin",id:"install-backend-plugin",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Plugins are like a set of building blocks that you can freely combine to create the functionality you want. Adding plugins is an excellent way to extend Apache Answer's features. This article will provide a detailed guide on the installation steps, helping you easily add plugins and master the process of installing and using them."}),"\n",(0,t.jsx)(n.h2,{id:"download-plugins",children:"Download Plugins"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.a,{href:"https://github.com/apache/answer-plugins/tree/main",children:"here"})," to download the desired plugin from the official Apache Answer plugin repository."]}),"\n",(0,t.jsxs)(n.li,{children:["Place the Plugin: Move the downloaded plugin files into the ",(0,t.jsx)(n.code,{children:"./ui/src/plugins"})," directory of your project."]}),"\n",(0,t.jsxs)(n.li,{children:["Plugin Type Reference: ",(0,t.jsx)(n.a,{href:"https://answer.apache.org/docs/development/plugins",children:"https://answer.apache.org/docs/development/plugins"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:'Important: The folder should be named "plugins," not "plugin."'}),"\n",(0,t.jsx)(n.img,{alt:"files",src:i(33587).Z+"",width:"1280",height:"471"})]}),"\n",(0,t.jsx)(n.h2,{id:"install-standard-ui-plugin",children:"Install Standard UI Plugin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the terminal, run ",(0,t.jsx)(n.code,{children:"cd ./ui"})," to navigate to the ui directory."]}),"\n",(0,t.jsxs)(n.li,{children:["Install dependencies: Run ",(0,t.jsx)(n.code,{children:"pnpm pre-install"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Start the project: Run ",(0,t.jsx)(n.code,{children:"pnpm start"})," to launch the development server."]}),"\n",(0,t.jsx)(n.li,{children:"Backend Plugin Setup: In a new terminal window, continue with the backend plugin installation steps."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-backend-plugin",children:"Install Backend Plugin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Compile Frontend Code:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Linux/MacOS: Run ",(0,t.jsx)(n.code,{children:"make ui"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Windows: Run ",(0,t.jsx)(n.code,{children:"pnpm install"})," and ",(0,t.jsx)(n.code,{children:"pnpm build"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Import Plugin: In the ",(0,t.jsx)(n.code,{children:"cmd/answer/main.go"})," file, import the plugin (replace my-plugin with your plugin name):"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'import (\n    answercmd "github.com/apache/answer/cmd"\n    // Import the plugins\n    _ "github.com/apache/answer-plugins/my-plugin"\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The image below shows examples with the editor-chart, editor-formula, and embed-basic plugins.\n",(0,t.jsx)(n.img,{alt:"main-go",src:i(50978).Z+"",width:"897",height:"720"})]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Update go.mod: Navigate back to the project root directory by running ",(0,t.jsx)(n.code,{children:"cd .."}),". Use ",(0,t.jsx)(n.code,{children:"go mod edit"})," to add the plugin to the go.mod file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"go mod edit -replace=github.com/apache/answer-plugins/my-plugin=./ui/src/plugins/my-plugin\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note: Windows users need to use double quotes, as shown below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'go mod edit -replace="github.com/apache/answer-plugins/my-plugin"="./ui/src/plugins/my-plugin"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Example with the editor-chart, editor-formula, and embed-basic plugins.\n",(0,t.jsx)(n.img,{alt:"go-edit",src:i(27109).Z+"",width:"1280",height:"528"})]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Download Dependencies: Run ",(0,t.jsx)(n.code,{children:"go mod tidy"})," to download and update dependencies."]}),"\n",(0,t.jsxs)(n.li,{children:["Start the Project: Run ",(0,t.jsx)(n.code,{children:"go run cmd/answer/main.go run -C ./answer-data"}),".\n",(0,t.jsx)(n.img,{alt:"go-tidy",src:i(59465).Z+"",width:"1280",height:"528"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Open the backend interface URL in your browser. Under the ",(0,t.jsx)(n.strong,{children:"Admin - Installed Plugins"})," section, you'll see the added plugins. Click the ",(0,t.jsx)(n.code,{children:"\u22ee"})," in the Action column to activate or remove the plugin."]}),"\n",(0,t.jsxs)(n.p,{children:["Congratulations, you've successfully added a plugin! Click ",(0,t.jsx)(n.a,{href:"https://answer.apache.org/plugins/",children:"here"})," to explore more community-built plugins. Additionally, we offer a detailed tutorial on ",(0,t.jsx)(n.a,{href:"https://answer.apache.org/blog/how-to-package-and-deploy-answer-plugins/",children:"How to Package and Deploy Answer Plugins"})," and a ",(0,t.jsx)(n.a,{href:"https://answer.apache.org/docs/development/plugins/",children:"Plugin Development Guide"})," to make your Apache Answer even more powerful."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},33587:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/files-6363b977dd50bde04b29adaa00ef8899.png"},27109:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/go-edit-8dcc02f5590a6ad2ce2aa28340d4ae97.png"},59465:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/go-tidy-8dcc02f5590a6ad2ce2aa28340d4ae97.png"},50978:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/main-go-6ee710c6607c09c96ab85a65d9173f81.png"},90887:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var t=i(85170);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);