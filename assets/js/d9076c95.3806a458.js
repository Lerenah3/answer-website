"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[7046],{81564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(43010),o=t(90887);const i={date:new Date("2024-08-16T00:00:00.000Z"),title:"Apache Answer Frontend Configuration Guide",authors:["ChenJiaji","ZhuXuanlyu","Anne"],category:"Tutorials",featured:!0,image:"2024-08-16-cover@4x.png",description:"Answer Frontend Configuration Step-by-Step Guide"},a=void 0,r={permalink:"/blog/apache-answer-frontend-configuration-guide",editUrl:"https://github.com/apache/answer-website/edit/main/blog/apache-answer-frontend-configuration-guide/index.md",source:"@site/blog/apache-answer-frontend-configuration-guide/index.md",title:"Apache Answer Frontend Configuration Guide",description:"Answer Frontend Configuration Step-by-Step Guide",date:"2024-08-16T00:00:00.000Z",formattedDate:"August 16, 2024",tags:[],readingTime:2.48,hasTruncateMarker:!1,authors:[{name:"Chen Jiaji",title:"Developer",url:"https://github.com/CHENJUaaa",imageURL:"https://avatars.githubusercontent.com/u/137683102?v=4",key:"ChenJiaji"},{name:"Zhu Xuanlyu",title:"Developer",url:"https://github.com/IamMelody233",imageURL:"https://avatars.githubusercontent.com/u/103870995?v=4",key:"ZhuXuanlyu"},{name:"Anne Zhu",title:"Product Marketing Manager",url:"https://github.com/PrimmaAnna",imageURL:"https://avatars.githubusercontent.com/u/131739771?v=4",key:"Anne"}],frontMatter:{date:"2024-08-16T00:00:00.000Z",title:"Apache Answer Frontend Configuration Guide",authors:["ChenJiaji","ZhuXuanlyu","Anne"],category:"Tutorials",featured:!0,image:"2024-08-16-cover@4x.png",description:"Answer Frontend Configuration Step-by-Step Guide"},unlisted:!1,prevItem:{title:"Apache Answer Backend Configuration Guide",permalink:"/blog/apache-answer-backend-configuration-guide"},nextItem:{title:"Say Hi to Answer 1.3.6: Faster and Easier",permalink:"/blog/answer-1.3.6-release"}},c={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"1. Download Node.js and pnpm",id:"1-download-nodejs-and-pnpm",level:3},{value:"2. Clone the Repository",id:"2-clone-the-repository",level:3},{value:"2.1 Fork Answer Porject",id:"21-fork-answer-porject",level:4},{value:"2.2 Install Git/Git Bash",id:"22-install-gitgit-bash",level:4},{value:"2.3 Create and Configuratie SSH",id:"23-create-and-configuratie-ssh",level:4},{value:"2.4 Clone Answer Project",id:"24-clone-answer-project",level:4},{value:"3. Install Dependencies and Build Local Packages",id:"3-install-dependencies-and-build-local-packages",level:3},{value:"4. Run the Frontend",id:"4-run-the-frontend",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Our official website provides ",(0,s.jsx)(n.a,{href:"https://answer.apache.org/docs/development",children:"Developer Guides"})," to help developers quickly set up both the frontend and backend of Apache Answer. In today's blog post, we will break down the steps for configuring the frontend and backend in detail."]}),"\n",(0,s.jsxs)(n.p,{children:["In the Answer community, we welcome and respect various ",(0,s.jsx)(n.a,{href:"https://answer.apache.org/community/contributing/",children:"Contributing Methods"}),". Whether you're a developer or not, you can follow the steps outlined in the article to complete the Answer frontend setup."]}),"\n",(0,s.jsx)(n.h3,{id:"1-download-nodejs-and-pnpm",children:"1. Download Node.js and pnpm"}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en",children:"here"})," to download Node.js, and select ",(0,s.jsx)(n.code,{children:"Node.js runtime"})," during installation. It is recommended to install it in the default location.\n",(0,s.jsx)(n.img,{alt:"node install",src:t(89581).Z+"",width:"921",height:"720"})]}),"\n",(0,s.jsxs)(n.p,{children:["After Node.js is installed, locate the ",(0,s.jsx)(n.code,{children:"Node.js command prompt"}),".\n",(0,s.jsx)(n.img,{alt:"node command",src:t(86474).Z+"",width:"637",height:"284"})]}),"\n",(0,s.jsxs)(n.p,{children:["Open the Node.js command prompt and enter ",(0,s.jsx)(n.code,{children:"npm install -g pnpm"}),". If you see the following screen, it means pnpm has been successfully installed.\n",(0,s.jsx)(n.img,{alt:"pnpm install",src:t(69120).Z+"",width:"1280",height:"372"}),"\n",(0,s.jsx)(n.em,{children:"Note: pnpm can be installed using various methods suitable for different operating systems. For more details, please refer to its official website."})]}),"\n",(0,s.jsx)(n.h3,{id:"2-clone-the-repository",children:"2. Clone the Repository"}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.a,{href:"https://github.com/apache/answer",children:"here"})," to visit the Apache Answer GitHub repository."]}),"\n",(0,s.jsx)(n.h4,{id:"21-fork-answer-porject",children:"2.1 Fork Answer Porject"}),"\n",(0,s.jsxs)(n.p,{children:["Log in to your GitHub account and click 'Fork' to fork the entire Answer project.\n",(0,s.jsx)(n.img,{alt:"fork answer",src:t(80812).Z+"",width:"1280",height:"713"})]}),"\n",(0,s.jsx)(n.h4,{id:"22-install-gitgit-bash",children:"2.2 Install Git/Git Bash"}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"here"})," and choose to download Git according to your operating system."]}),"\n",(0,s.jsx)(n.h4,{id:"23-create-and-configuratie-ssh",children:"2.3 Create and Configuratie SSH"}),"\n",(0,s.jsxs)(n.p,{children:["You can browse GitHub's documentation on ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh",children:"connecting to GitHub with SSH"}),". You may skip the section in the documentation about generating a new SSH key for hardware security keys."]}),"\n",(0,s.jsxs)(n.p,{children:["The following image shows the SSH key after configuration is complete.\n",(0,s.jsx)(n.img,{alt:"ssh configuration",src:t(74357).Z+"",width:"1280",height:"352"})]}),"\n",(0,s.jsx)(n.h4,{id:"24-clone-answer-project",children:"2.4 Clone Answer Project"}),"\n",(0,s.jsxs)(n.p,{children:["In the Answer GitHub page, find the 'Code' section. Click to expand and copy the SSH address of the Answer repository\n",(0,s.jsx)(n.img,{alt:"copy ssh",src:t(3479).Z+"",width:"1065",height:"720"})]}),"\n",(0,s.jsxs)(n.p,{children:["Next, open ",(0,s.jsx)(n.code,{children:"Git Bash"})," and enter the following command to clone the project."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone <Answer SSH address>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As shown in the image below, after completing this step, the project will be successfully cloned to your local folder.\n",(0,s.jsx)(n.img,{alt:"clone answer",src:t(62985).Z+"",width:"774",height:"284"})]}),"\n",(0,s.jsx)(n.h3,{id:"3-install-dependencies-and-build-local-packages",children:"3. Install Dependencies and Build Local Packages"}),"\n",(0,s.jsxs)(n.p,{children:["We will refer to the Answer project folder as the root directory. Open the ",(0,s.jsx)(n.code,{children:"command line terminal"})," and run the following commands, then navigate to the ",(0,s.jsx)(n.code,{children:"ui"})," subdirectory from that directory."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd ./ui\npnpm install\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note: For Windows users, you might encounter the following error:"}),"\n",(0,s.jsx)(n.img,{alt:"windows-error",src:t(15146).Z+"",width:"1280",height:"245"}),"\nThis issue is caused by system permissions. You can first enter the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command sets the PowerShell execution policy for the current user to ",(0,s.jsx)(n.code,{children:"RemoteSigned"}),", which means local scripts can run, while remote scripts must be signed."]}),"\n",(0,s.jsxs)(n.p,{children:["Then you can run it successfully. Once completed, it indicates that the installation is finished.\n",(0,s.jsx)(n.img,{alt:"install complete",src:t(43998).Z+"",width:"1280",height:"262"})]}),"\n",(0,s.jsx)(n.h3,{id:"4-run-the-frontend",children:"4. Run the Frontend"}),"\n",(0,s.jsxs)(n.p,{children:["After configuration is complete, navigate to the ",(0,s.jsx)(n.code,{children:"ui"})," folder and enter ",(0,s.jsx)(n.code,{children:"pnpm start"})," to run Answer.\n",(0,s.jsx)(n.img,{alt:"pnpm start",src:t(23964).Z+"",width:"1280",height:"572"})]}),"\n",(0,s.jsxs)(n.p,{children:["Congratulations! You have completed the frontend configuration for Answer. If you have any questions, feel free to join our ",(0,s.jsx)(n.a,{href:"https://meta.answer.dev/",children:"community"})," and engage with our team."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},62985:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/clone-answer-b84011546c149ae70795a0288f14bb3a.png"},3479:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/copy-ssh-dca3851f8b808e04cc852369a526622c.png"},80812:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/fork-answer-8136ca68f76bea32ca2c4d4ae99b4de2.png"},43998:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/install-complete-8fc2bc1fb625db53cf1f85f2d646f557.png"},86474:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/node-command-995a590c3a872bfe54dd673b59a474c8.png"},89581:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/node-install-4d282d94bd07b1288593740206962174.png"},69120:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/pnpm-install-a9367ed47f4ff2e360e2b610097af2bf.png"},23964:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/pnpm-start-4655a9e74676b26d13c5d0fb76090e85.png"},74357:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ssh-configuration-1f6870dad6aaba69b74b932551a63fd7.png"},15146:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/windows-error-e9f8dbb8076dca27f68f32331e1a94f0.png"},90887:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(85170);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);