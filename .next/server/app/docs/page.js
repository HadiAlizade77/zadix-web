(()=>{var e={};e.id=726,e.ids=[726],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6572:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>r.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>d,routeModule:()=>m,tree:()=>c}),a(8587),a(1506),a(5866);var i=a(3191),s=a(8716),o=a(7922),r=a.n(o),n=a(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);a.d(t,l);let c=["",{children:["docs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,8587)),"/home/hadi/zadix-web/app/docs/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,1506)),"/home/hadi/zadix-web/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/home/hadi/zadix-web/app/docs/page.tsx"],x="/docs/page",p={require:a,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/docs/page",pathname:"/docs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},931:(e,t,a)=>{Promise.resolve().then(a.bind(a,3104)),Promise.resolve().then(a.bind(a,16)),Promise.resolve().then(a.bind(a,8726)),Promise.resolve().then(a.bind(a,7988)),Promise.resolve().then(a.t.bind(a,9404,23))},8726:(e,t,a)=>{"use strict";a.d(t,{default:()=>y});var i=a(326),s=a(7577),o=a(5795),r=a(2216),n=a(6557);let l=(0,n.Z)("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);var c=a(8319),d=a(165),x=a(3634);let p=(0,n.Z)("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);var m=a(2933);let h=(0,n.Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),u=(0,n.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var g=a(2643),w=a(772);let y=()=>{let[e,t]=(0,s.useState)(null),a=[{icon:r.Z,title:"API Reference",description:"Complete REST API documentation with examples",items:["Authentication & API Keys","Workflow Management","Data Processing Endpoints","Status & Monitoring APIs"]},{icon:l,title:"Webhooks",description:"Real-time notifications and event handling",items:["Webhook Configuration","Event Types & Payloads","Security & Verification","Retry Mechanisms"]},{icon:c.Z,title:"System Integration",description:"Connect with your existing tools and databases",items:["CRM Integrations (Salesforce, HubSpot)","ERP Systems (SAP, NetSuite)","Database Connections","Custom API Integrations"]},{icon:d.Z,title:"Security & Compliance",description:"Security best practices and compliance guides",items:["Authentication Methods","Data Encryption","Audit Logging","GDPR Compliance"]},{icon:x.Z,title:"Workflow Configuration",description:"Design and configure automation workflows",items:["Workflow Builder","Trigger Configuration","Action Definitions","Error Handling"]}],n={title:"Quick Start Guide",steps:[{title:"1. Get Your API Key",description:"Contact our team to receive your production API credentials",code:`# Your API key will be provided after project delivery
API_KEY="zx_live_your_api_key_here"`},{title:"2. Make Your First Request",description:"Test the connection with a simple status check",code:`curl -X GET "https://api.zadix.ai/v1/status" \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json"`},{title:"3. Trigger a Workflow",description:"Start an automation workflow with your data",code:`curl -X POST "https://api.zadix.ai/v1/workflows/trigger" \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "workflow_id": "your_workflow_id",
    "data": {
      "email": "example@company.com",
      "document_url": "https://example.com/doc.pdf"
    }
  }'`},{title:"4. Check Results",description:"Monitor workflow execution and get results",code:`curl -X GET "https://api.zadix.ai/v1/workflows/{execution_id}" \\
  -H "Authorization: Bearer $API_KEY"`}]},y=(e,a)=>{navigator.clipboard.writeText(e),t(a),setTimeout(()=>t(null),2e3)};return(0,i.jsxs)("div",{className:"min-h-screen pt-20",children:[i.jsx("section",{className:"py-20 bg-gradient-to-br from-[#0B1220] via-[#0F1629] to-[#0B1220]",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,i.jsxs)(o.E.div,{className:"text-center",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[i.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-3xl flex items-center justify-center mx-auto mb-8",children:i.jsx(p,{className:"h-10 w-10 text-white"})}),(0,i.jsxs)("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:["Developer"," ",i.jsx("span",{className:"bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent",children:"Documentation"})]}),i.jsx("p",{className:"text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed",children:"Complete guides, API references, and integration examples for building with Zadix AI automation systems."})]})})}),i.jsx("section",{className:"py-20 bg-white",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,i.jsxs)(o.E.div,{className:"text-center mb-16",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-[#111827] mb-6",children:n.title}),i.jsx("p",{className:"text-xl text-[#6B7280] max-w-3xl mx-auto",children:"Get up and running with Zadix APIs in minutes"})]}),i.jsx("div",{className:"space-y-8",children:n.steps.map((t,a)=>i.jsx(o.E.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1*a},children:i.jsx(g.Zb,{className:"overflow-hidden",children:i.jsx(g.aY,{className:"p-0",children:(0,i.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[(0,i.jsxs)("div",{className:"p-8",children:[i.jsx("h3",{className:"text-2xl font-bold text-[#111827] mb-4",children:t.title}),i.jsx("p",{className:"text-[#6B7280] leading-relaxed",children:t.description})]}),(0,i.jsxs)("div",{className:"bg-[#1E293B] p-8 relative",children:[i.jsx("button",{onClick:()=>y(t.code,`step-${a}`),className:"absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",children:e===`step-${a}`?i.jsx(m.Z,{className:"h-4 w-4 text-green-400"}):i.jsx(h,{className:"h-4 w-4 text-gray-300"})}),i.jsx("pre",{className:"text-gray-300 text-sm overflow-x-auto",children:i.jsx("code",{children:t.code})})]})]})})})},t.title))})]})}),i.jsx("section",{className:"py-20 bg-[#F8FAFC]",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,i.jsxs)(o.E.div,{className:"text-center mb-16",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-[#111827] mb-6",children:"Documentation Sections"}),i.jsx("p",{className:"text-xl text-[#6B7280] max-w-3xl mx-auto",children:"Comprehensive guides for every aspect of integration"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:a.map((e,t)=>i.jsx(o.E.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1*t},children:(0,i.jsxs)(g.Zb,{className:"h-full hover:shadow-xl transition-all duration-300 group cursor-pointer",children:[(0,i.jsxs)(g.Ol,{children:[i.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",children:i.jsx(e.icon,{className:"h-8 w-8 text-white"})}),i.jsx(g.ll,{className:"text-xl mb-3 group-hover:text-[#00B3A4] transition-colors",children:e.title}),i.jsx("p",{className:"text-[#6B7280] leading-relaxed",children:e.description})]}),i.jsx(g.aY,{children:i.jsx("ul",{className:"space-y-3",children:e.items.map((e,t)=>(0,i.jsxs)("li",{className:"flex items-center text-[#6B7280]",children:[i.jsx(u,{className:"h-4 w-4 mr-2 text-[#00B3A4]"}),e]},t))})})]})},e.title))})]})}),i.jsx("section",{className:"py-20 bg-white",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,i.jsxs)(o.E.div,{className:"text-center mb-16",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-[#111827] mb-6",children:"Common Integration Patterns"}),i.jsx("p",{className:"text-xl text-[#6B7280] max-w-3xl mx-auto",children:"Real-world examples of how to integrate Zadix with your systems"})]}),(0,i.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[i.jsx(o.E.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},children:(0,i.jsxs)(g.Zb,{children:[(0,i.jsxs)(g.Ol,{children:[i.jsx(g.ll,{className:"text-xl",children:"Webhook Handler Example"}),i.jsx("p",{className:"text-[#6B7280]",children:"Process incoming webhook notifications"})]}),i.jsx(g.aY,{children:(0,i.jsxs)("div",{className:"bg-[#1E293B] rounded-lg p-6 relative",children:[i.jsx("button",{onClick:()=>y(`app.post('/webhook', (req, res) => {
  const signature = req.headers['x-zadix-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  if (!verifySignature(payload, signature)) {
    return res.status(401).send('Unauthorized');
  }
  
  // Process the event
  switch (payload.event_type) {
    case 'workflow.completed':
      handleWorkflowComplete(payload.data);
      break;
    case 'workflow.failed':
      handleWorkflowError(payload.data);
      break;
  }
  
  res.status(200).send('OK');
});`,"webhook"),className:"absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",children:"webhook"===e?i.jsx(m.Z,{className:"h-4 w-4 text-green-400"}):i.jsx(h,{className:"h-4 w-4 text-gray-300"})}),i.jsx("pre",{className:"text-gray-300 text-sm overflow-x-auto",children:i.jsx("code",{children:`app.post('/webhook', (req, res) => {
  const signature = req.headers['x-zadix-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  if (!verifySignature(payload, signature)) {
    return res.status(401).send('Unauthorized');
  }
  
  // Process the event
  switch (payload.event_type) {
    case 'workflow.completed':
      handleWorkflowComplete(payload.data);
      break;
    case 'workflow.failed':
      handleWorkflowError(payload.data);
      break;
  }
  
  res.status(200).send('OK');
});`})})]})})]})}),i.jsx(o.E.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},children:(0,i.jsxs)(g.Zb,{children:[(0,i.jsxs)(g.Ol,{children:[i.jsx(g.ll,{className:"text-xl",children:"Batch Processing"}),i.jsx("p",{className:"text-[#6B7280]",children:"Process multiple documents at once"})]}),i.jsx(g.aY,{children:(0,i.jsxs)("div",{className:"bg-[#1E293B] rounded-lg p-6 relative",children:[i.jsx("button",{onClick:()=>y(`const processBatch = async (documents) => {
  const batchId = await fetch('/api/batch', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      workflow_id: 'document-processor',
      documents: documents.map(doc => ({
        url: doc.url,
        metadata: doc.metadata
      }))
    })
  });
  
  // Poll for completion
  const result = await pollBatchStatus(batchId);
  return result;
};`,"batch"),className:"absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",children:"batch"===e?i.jsx(m.Z,{className:"h-4 w-4 text-green-400"}):i.jsx(h,{className:"h-4 w-4 text-gray-300"})}),i.jsx("pre",{className:"text-gray-300 text-sm overflow-x-auto",children:i.jsx("code",{children:`const processBatch = async (documents) => {
  const batchId = await fetch('/api/batch', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      workflow_id: 'document-processor',
      documents: documents.map(doc => ({
        url: doc.url,
        metadata: doc.metadata
      }))
    })
  });
  
  // Poll for completion
  const result = await pollBatchStatus(batchId);
  return result;
};`})})]})})]})})]})]})}),i.jsx("section",{className:"py-20 bg-gradient-to-r from-[#0B1220] via-[#0F1629] to-[#0B1220]",children:i.jsx("div",{className:"max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",children:(0,i.jsxs)(o.E.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[i.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-6",children:"Need Help with Integration?"}),i.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"Our engineering team provides hands-on support for all integrations and custom requirements."}),(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[i.jsx(w.z,{size:"xl",variant:"secondary",asChild:!0,children:i.jsx("a",{href:"mailto:support@zadix.ai?subject=Integration Support",children:"Contact Support"})}),i.jsx(w.z,{size:"xl",variant:"outline",className:"border-white text-white hover:bg-white hover:text-[#0B1220]",asChild:!0,children:i.jsx("a",{href:"mailto:engineering@zadix.ai?subject=Technical Discussion",children:"Talk to Engineering"})})]})]})})})]})}},2643:(e,t,a)=>{"use strict";a.d(t,{Ol:()=>l,Zb:()=>n,aY:()=>d,ll:()=>c});var i=a(326),s=a(7577),o=a.n(s),r=a(7863);let n=o().forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,className:(0,r.cn)("rounded-2xl border border-gray-200 bg-white shadow-sm",e),...t}));n.displayName="Card";let l=o().forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,className:(0,r.cn)("p-6 pb-4",e),...t}));l.displayName="CardHeader";let c=o().forwardRef(({className:e,...t},a)=>i.jsx("h3",{ref:a,className:(0,r.cn)("text-2xl font-bold leading-none tracking-tight text-[#111827]",e),...t}));c.displayName="CardTitle",o().forwardRef(({className:e,...t},a)=>i.jsx("p",{ref:a,className:(0,r.cn)("text-[#6B7280] leading-relaxed",e),...t})).displayName="CardDescription";let d=o().forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,className:(0,r.cn)("p-6 pt-0",e),...t}));d.displayName="CardContent",o().forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,className:(0,r.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},2933:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i=(0,a(6557).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},2216:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i=(0,a(6557).Z)("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]])},8319:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i=(0,a(6557).Z)("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},165:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i=(0,a(6557).Z)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]])},3634:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i=(0,a(6557).Z)("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]])},8587:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c,metadata:()=>l});var i=a(9510);let s=(0,a(8570).createProxy)(String.raw`/home/hadi/zadix-web/components/pages/Documentation.tsx#default`);var o=a(8585),r=a(8842),n=a(6965);let l={title:"Documentation - API & Integration Guides | Zadix",description:"Complete documentation for integrating with Zadix AI automation systems. API references, webhooks, and system integration guides.",openGraph:{title:"Documentation - API & Integration Guides | Zadix",description:"Complete documentation for integrating with Zadix AI automation systems. API references, webhooks, and system integration guides."}};function c(){return(0,i.jsxs)("div",{className:"min-h-screen",children:[i.jsx(o.Z,{locale:"en"}),i.jsx("main",{children:i.jsx(s,{})}),i.jsx(r.Z,{locale:"en"}),i.jsx(n.Z,{locale:"en"})]})}}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[948,246,358,718],()=>a(6572));module.exports=i})();