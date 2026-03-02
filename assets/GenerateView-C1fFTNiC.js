import{_ as w,G as k,k as l,o,a as n,w as i,h,i as b,a3 as B,v as x,f as e,n as I,aF as E,g as A,Y as O,F as C,l as T,aC as S,t as d,aH as Q,p as X,aE as U,c as y,aB as j,aD as V,aI as Z,aj as ee,aJ as te,ap as L,a1 as ae,ax as se,aK as oe,ao as ne,aA as ie,m as D,az as G,aG as re}from"./index-BtKr_CGf.js";import{V as le,a as N}from"./VTabs-CmWenx_e.js";import{V as ce}from"./VChip-BMpjFdew.js";const de={class:"media-generate-nav-slider"},ue={__name:"LanguageGenerateNavSlider",props:{modelValue:{type:String,default:"run"}},emits:["update:modelValue","tabChange"],setup(a,{emit:r}){const t=a,s=r,u=k({get:()=>t.modelValue,set:g=>{s("update:modelValue",g)}});return(g,c)=>(o(),l("div",de,[n(B,{flat:"",class:"pa-0"},{default:i(()=>[n(le,{modelValue:u.value,"onUpdate:modelValue":c[0]||(c[0]=v=>u.value=v),color:"primary","align-tabs":"start","show-arrows":"","slider-color":"primary",height:"48"},{default:i(()=>[n(N,{value:"run",class:"text-none"},{default:i(()=>[n(b,{start:""},{default:i(()=>c[1]||(c[1]=[h("mdi-play-outline")])),_:1}),c[2]||(c[2]=h(" Run "))]),_:1}),n(N,{value:"docs",class:"text-none"},{default:i(()=>[n(b,{start:""},{default:i(()=>c[3]||(c[3]=[h("mdi-file-document-outline")])),_:1}),c[4]||(c[4]=h(" Docs "))]),_:1}),n(N,{value:"forums",class:"text-none"},{default:i(()=>[n(b,{start:""},{default:i(()=>c[5]||(c[5]=[h("mdi-forum-outline")])),_:1}),c[6]||(c[6]=h(" Forums "))]),_:1}),n(N,{value:"api",class:"text-none"},{default:i(()=>[n(b,{start:""},{default:i(()=>c[7]||(c[7]=[h("mdi-code-json")])),_:1}),c[8]||(c[8]=h(" API "))]),_:1})]),_:1},8,["modelValue"])]),_:1})]))}},pe=w(ue,[["__scopeId","data-v-a9670661"]]),me={class:"chat-sidebar"},he={class:"sidebar-header"},ge={class:"header-title"},be={class:"header-actions"},fe={class:"sidebar-section"},ve={class:"section-item workspace-item"},ye={class:"section-item search-item"},we={key:0,class:"sidebar-section"},xe=["onClick"],_e={class:"chat-item-content"},ke={class:"chat-title"},Ce={key:1,class:"sidebar-section"},Te=["onClick"],Ae={class:"chat-item-content"},Ie={class:"chat-title"},Ee={key:2,class:"no-results"},Pe={class:"no-results-content"},Se={__name:"ChatSidebar",setup(a){const r=x(""),t=x([{id:1,title:"Hello Chat Idea",active:!1,isNew:!1,date:new Date("2024-04-25")},{id:2,title:"New Chat",active:!1,isNew:!0,date:new Date("2024-04-28")},{id:3,title:"Hello World",active:!1,isNew:!1,date:new Date("2024-04-20")},{id:4,title:"New Chat",active:!1,isNew:!0,date:new Date("2024-04-29")},{id:5,title:"Hello",active:!1,isNew:!1,date:new Date("2024-04-15")},{id:6,title:"Creative Tagline Ideas for New",active:!1,date:new Date("2024-03-16")},{id:7,title:"Delicious Cat Treats",active:!1,date:new Date("2024-03-01")},{id:8,title:"Positioning Temptations",active:!1,date:new Date("2024-01-31")}]),s=k(()=>r.value?t.value.filter(m=>m.title.toLowerCase().includes(r.value.toLowerCase())):t.value),u=k(()=>{const m=new Date;return m.setDate(m.getDate()-30),m}),g=k(()=>s.value.filter(m=>m.date>=u.value)),c=k(()=>s.value.filter(m=>m.date<u.value)),v=m=>{t.value.forEach(p=>p.active=!1),m.active=!0};return(m,p)=>(o(),l("div",me,[e("div",he,[e("div",ge,[n(E,{size:"24",class:"ai-avatar"},{default:i(()=>[n(b,{size:"16",color:"white"},{default:i(()=>p[1]||(p[1]=[h("mdi-robot")])),_:1})]),_:1}),p[2]||(p[2]=e("span",null,"New Chat",-1))]),e("div",be,[n(A,{icon:"",variant:"text",density:"comfortable",class:"action-btn"},{default:i(()=>[n(b,{size:"20"},{default:i(()=>p[3]||(p[3]=[h("mdi-pencil-outline")])),_:1})]),_:1}),n(A,{icon:"",variant:"text",density:"comfortable",class:"action-btn"},{default:i(()=>[n(b,{size:"20"},{default:i(()=>p[4]||(p[4]=[h("mdi-menu")])),_:1})]),_:1})])]),e("div",fe,[e("div",ve,[n(b,{size:"20",class:"section-icon"},{default:i(()=>p[5]||(p[5]=[h("mdi-view-grid-outline")])),_:1}),p[6]||(p[6]=e("span",null,"Workspace",-1))]),e("div",ye,[n(O,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=f=>r.value=f),density:"compact",variant:"underlined","hide-details":"",placeholder:"Search","prepend-inner-icon":"mdi-magnify",class:"search-field"},null,8,["modelValue"])])]),g.value.length>0?(o(),l("div",we,[p[7]||(p[7]=e("div",{class:"section-label"},"Previous 30 days",-1)),(o(!0),l(C,null,T(g.value,(f,R)=>(o(),l("div",{key:f.id,class:S(["chat-item",{active:f.active}]),onClick:$=>v(f)},[e("div",_e,[e("div",ke,[e("span",null,d(f.title),1)])])],10,xe))),128))])):I("",!0),c.value.length>0?(o(),l("div",Ce,[p[8]||(p[8]=e("div",{class:"section-label"},"2024",-1)),(o(!0),l(C,null,T(c.value,(f,R)=>(o(),l("div",{key:f.id,class:S(["chat-item",{active:f.active}]),onClick:$=>v(f)},[e("div",Ae,[e("div",Ie,[e("span",null,d(f.title),1)])])],10,Te))),128))])):I("",!0),r.value&&s.value.length===0?(o(),l("div",Ee,[e("div",Pe,[n(b,{size:"24",class:"no-results-icon"},{default:i(()=>p[9]||(p[9]=[h("mdi-magnify-close")])),_:1}),p[10]||(p[10]=e("span",null,"No chats found",-1))])])):I("",!0)]))}},Re=w(Se,[["__scopeId","data-v-a9bb8f98"]]),Me={class:"model-header"},$e={class:"model-selector"},Ne={class:"model-select-text"},De={class:"model-search"},qe={class:"header-actions"},Fe={__name:"ModelHeader",props:{models:{type:Array,required:!0},selectedModel:{type:Object,required:!0}},emits:["select-model"],setup(a,{emit:r}){const t=r,s=x(!1),u=x(""),g=k(()=>Q.map(m=>({id:m.headline,name:m.headline,description:m.subline,updatedAt:m.updatedAt,url:m.url}))),c=k(()=>{if(!u.value)return g.value;const m=u.value.toLowerCase();return g.value.filter(p=>p.name.toLowerCase().includes(m)||p.description&&p.description.toLowerCase().includes(m))}),v=m=>{t("select-model",m),s.value=!1,u.value=""};return(m,p)=>(o(),l("div",Me,[e("div",$e,[n(te,{modelValue:s.value,"onUpdate:modelValue":p[2]||(p[2]=f=>s.value=f),"close-on-content-click":!1},{activator:i(({props:f})=>[n(A,ee({variant:"text",class:"model-select-btn"},f),{default:i(()=>[e("div",Ne,[e("span",null,d(a.selectedModel?a.selectedModel.name:"Select a model"),1),n(b,{size:"20"},{default:i(()=>p[3]||(p[3]=[h("mdi-chevron-down")])),_:1})]),n(b,{size:"20",class:"add-model-icon"},{default:i(()=>p[4]||(p[4]=[h("mdi-plus")])),_:1})]),_:2},1040)]),default:i(()=>[n(B,{class:"model-menu-card"},{default:i(()=>[e("div",De,[n(O,{modelValue:u.value,"onUpdate:modelValue":p[0]||(p[0]=f=>u.value=f),placeholder:"Search models",variant:"outlined",density:"compact","hide-details":"","prepend-inner-icon":"mdi-magnify",class:"search-input",clearable:"",onClick:p[1]||(p[1]=X(()=>{},["stop"]))},null,8,["modelValue"])]),n(U,{class:"model-list"},{default:i(()=>[(o(!0),l(C,null,T(c.value,(f,R)=>(o(),y(j,{key:R,value:f,onClick:$=>v(f),class:S({"selected-model":a.selectedModel&&a.selectedModel.id===f.id})},{default:i(()=>[n(V,null,{default:i(()=>[h(d(f.name),1)]),_:2},1024),f.description?(o(),y(Z,{key:0},{default:i(()=>[h(d(f.description),1)]),_:2},1024)):I("",!0)]),_:2},1032,["value","onClick","class"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),p[5]||(p[5]=e("div",{class:"model-default-text"},"Set as default",-1))]),e("div",qe,[n(A,{icon:"",variant:"text",class:"settings-btn"},{default:i(()=>[n(b,null,{default:i(()=>p[6]||(p[6]=[h("mdi-tune-vertical")])),_:1})]),_:1})])]))}},Oe=w(Fe,[["__scopeId","data-v-13b1fbb3"]]),Le={class:"card-content"},We={class:"card-title"},ze={class:"card-description"},Be={class:"card-footer"},Ue={class:"card-category"},je={__name:"PromptCard",props:{prompt:{type:Object,required:!0}},emits:["click"],setup(a){return(r,t)=>(o(),l("div",{class:"prompt-card",onClick:t[0]||(t[0]=s=>r.$emit("click"))},[e("div",Le,[e("div",We,d(a.prompt.title),1),e("div",ze,d(a.prompt.description),1)]),e("div",Be,[e("div",Ue,d(a.prompt.category),1),n(b,{size:"small",class:"arrow-icon"},{default:i(()=>t[1]||(t[1]=[h("mdi-arrow-up")])),_:1})])]))}},Ve=w(je,[["__scopeId","data-v-1039b0c0"]]),Ge={class:"suggested-section"},He={class:"suggested-label"},Ye={class:"suggested-prompts"},Ke={__name:"SuggestedPrompts",props:{prompts:{type:Array,required:!0}},emits:["use-prompt","refresh"],setup(a){return(r,t)=>(o(),l("div",Ge,[e("div",He,[n(b,{size:"16",class:"sparkle-icon"},{default:i(()=>t[1]||(t[1]=[h("mdi-sparkles")])),_:1}),t[3]||(t[3]=e("span",null,"Suggested",-1)),n(A,{icon:"",variant:"text",size:"small",class:"refresh-btn",onClick:t[0]||(t[0]=s=>r.$emit("refresh")),title:"Get new suggestions"},{default:i(()=>[n(b,{size:"16"},{default:i(()=>t[2]||(t[2]=[h("mdi-refresh")])),_:1})]),_:1})]),e("div",Ye,[(o(!0),l(C,null,T(a.prompts,(s,u)=>(o(),y(Ve,{key:u,prompt:s,onClick:g=>r.$emit("use-prompt",s)},null,8,["prompt","onClick"]))),128))])]))}},Je=w(Ke,[["__scopeId","data-v-482131dd"]]),Qe={class:"welcome-message"},Xe={class:"greeting"},Ze={__name:"WelcomeMessage",props:{suggestedPrompts:{type:Array,required:!0},userName:{type:String,default:"Max McLeod"}},emits:["use-prompt","refresh-prompts"],setup(a){return(r,t)=>(o(),l("div",Qe,[n(E,{size:"64",color:"grey-darken-3",class:"ai-avatar"},{default:i(()=>[n(b,{size:"36",color:"white"},{default:i(()=>t[2]||(t[2]=[h("mdi-robot")])),_:1})]),_:1}),e("h1",Xe,"Hello, "+d(a.userName),1),t[3]||(t[3]=e("p",{class:"subgreeting"},"How can I help you today?",-1)),n(Je,{prompts:a.suggestedPrompts,onUsePrompt:t[0]||(t[0]=s=>r.$emit("use-prompt",s)),onRefresh:t[1]||(t[1]=s=>r.$emit("refresh-prompts"))},null,8,["prompts"])]))}},et=w(Ze,[["__scopeId","data-v-3f2609cd"]]),tt={class:"message-container"},at={class:"message-header"},st={key:0,class:"sender-name"},ot={key:1,class:"sender-name"},nt={class:"message-time"},it={class:"message-content"},rt=["innerHTML"],lt={__name:"ChatMessage",props:{text:{type:String,required:!0},sender:{type:String,required:!0,validator:a=>["user","ai"].includes(a)},userName:{type:String,default:"You"},modelName:{type:String,default:"AI Assistant"},timestamp:{type:String,default:()=>new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}},setup(a){const r=a,t=k(()=>r.sender==="user"?r.userName:"AI");return(s,u)=>(o(),l("div",{class:S(["message",a.sender])},[e("div",tt,[e("div",at,[a.sender==="user"?(o(),l("span",st,d(t.value),1)):(o(),l("span",ot,d(a.modelName),1)),e("span",nt,d(a.timestamp),1)]),e("div",it,[e("p",{innerHTML:a.text},null,8,rt)])])],2))}},ct=w(lt,[["__scopeId","data-v-ed42a957"]]),dt={class:"chat-messages"},ut={__name:"ChatMessages",props:{messages:{type:Array,required:!0},userName:{type:String,default:"You"},selectedModel:{type:Object,required:!0}},setup(a){return(r,t)=>(o(),l("div",dt,[(o(!0),l(C,null,T(a.messages,(s,u)=>(o(),y(ct,{key:u,text:s.text,sender:s.sender,"user-name":a.userName,"model-name":s.modelName||a.selectedModel.name,timestamp:s.timestamp,class:"message-item"},null,8,["text","sender","user-name","model-name","timestamp"]))),128))]))}},pt=w(ut,[["__scopeId","data-v-60558bbe"]]),mt={class:"input-container"},ht={class:"message-input"},gt=["placeholder"],bt={class:"input-actions"},ft={class:"disclaimer"},vt={__name:"MessageInput",props:{value:{type:String,default:""},selectedModel:{type:Object,required:!0}},emits:["send","update:value"],setup(a,{emit:r}){const t=a,s=r,u=x(t.value);L(()=>t.value,v=>{u.value=v}),L(u,v=>{s("update:value",v)});const g=k(()=>`Send a message to ${t.selectedModel.name}`),c=()=>{u.value.trim()&&(s("send",u.value),u.value="")};return(v,m)=>(o(),l("div",mt,[e("div",ht,[n(A,{icon:"",variant:"text",class:"add-btn"},{default:i(()=>[n(b,null,{default:i(()=>m[1]||(m[1]=[h("mdi-plus")])),_:1})]),_:1}),ae(e("input",{type:"text","onUpdate:modelValue":m[0]||(m[0]=p=>u.value=p),placeholder:g.value,onKeyup:oe(c,["enter"]),class:"text-input"},null,40,gt),[[se,u.value]]),e("div",bt,[n(A,{icon:"",variant:"text",class:"mic-btn"},{default:i(()=>[n(b,null,{default:i(()=>m[2]||(m[2]=[h("mdi-microphone")])),_:1})]),_:1}),n(A,{icon:"",variant:"text",class:"headphone-btn"},{default:i(()=>[n(b,null,{default:i(()=>m[3]||(m[3]=[h("mdi-headphones")])),_:1})]),_:1})])]),e("div",ft,[m[5]||(m[5]=e("span",null,"LLMs can make mistakes. Verify important information.",-1)),n(A,{icon:"",variant:"text",size:"small",class:"help-btn"},{default:i(()=>[n(b,null,{default:i(()=>m[4]||(m[4]=[h("mdi-help-circle-outline")])),_:1})]),_:1})])]))}},yt=w(vt,[["__scopeId","data-v-4a59dc43"]]),M={generate_brand_taglines:{prompt:{title:"Generate brand taglines",description:"for a sustainable fashion company",category:"Branding"},response:`Here are some tagline ideas for a sustainable fashion brand:<br><br>
    1. "Wear the Change You Wish to See"<br>
    2. "Fashion Forward, Planet First"<br>
    3. "Consciously Crafted, Beautifully Worn"<br>
    4. "Style That Sustains"<br>
    5. "Ethical Threads, Lasting Impressions"<br><br>
    Would you like me to refine any of these or generate more options?`},create_brand_voice:{prompt:{title:"Create brand voice guidelines",description:"for a luxury hospitality client",category:"Branding"},response:`Here's a brand voice guideline framework for a luxury hospitality client:<br><br>
    <b>Brand Personality:</b><br>
    • Sophisticated yet approachable<br>
    • Attentive without being intrusive<br>
    • Knowledgeable but never condescending<br><br>
    
    <b>Tone Attributes:</b><br>
    • Warm and inviting<br>
    • Refined and elegant<br>
    • Authentic and genuine<br><br>
    
    <b>Language Guidelines:</b><br>
    • Use sensory language that evokes emotion<br>
    • Prefer active voice over passive constructions<br>
    • Balance exclusivity with inclusivity<br><br>
    
    <b>Content Principles:</b><br>
    • Tell stories that highlight unique experiences<br>
    • Focus on the details that demonstrate attention to craft<br>
    • Emphasize heritage and tradition while embracing innovation<br><br>
    
    <b>Example Phrases:</b><br>
    • "We've anticipated your every need"<br>
    • "Crafted experiences that become cherished memories"<br>
    • "Where exceptional is our standard"`},develop_brand_archetypes:{prompt:{title:"Develop brand archetypes",description:"for a fintech startup targeting millennials",category:"Branding"},response:`Here are brand archetypes for a fintech startup targeting millennials:<br><br>
    <b>Primary Archetype: The Explorer</b><br>
    • Represents freedom and innovation in financial management<br>
    • Appeals to millennials' desire to forge their own path<br>
    • Visual identity: Open landscapes, maps, compasses, horizon lines<br>
    • Voice: Adventurous, encouraging, optimistic<br><br>
    
    <b>Secondary Archetype: The Sage</b><br>
    • Represents financial wisdom and informed decision-making<br>
    • Balances the Explorer's risk-taking with thoughtful guidance<br>
    • Visual identity: Clean data visualizations, lightbulbs, books<br>
    • Voice: Clear, insightful, educational without being pedantic<br><br>
    
    <b>Messaging Framework:</b><br>
    • Tagline: "Navigate Your Financial Future"<br>
    • Value proposition: "Financial tools for those who chart their own course"<br>
    • Key themes: Discovery, independence, informed choices, financial freedom<br><br>
    
    <b>Brand Personality:</b><br>
    • Innovative but trustworthy<br>
    • Tech-savvy yet accessible<br>
    • Empowering and collaborative`},brainstorm_campaign_ideas:{prompt:{title:"Brainstorm campaign ideas",description:"for a product launch in the tech sector",category:"Marketing"},response:`Here are some campaign ideas for a tech product launch:<br><br>
    1. <b>The Future in Your Hands</b> - Interactive demos focusing on how the product transforms daily life<br>
    2. <b>Innovation Unleashed</b> - A series of teaser videos building anticipation before the launch<br>
    3. <b>Tech for Good</b> - Highlighting how the product addresses social or environmental challenges<br>
    4. <b>Expert Endorsements</b> - Partner with industry influencers for authentic testimonials<br>
    5. <b>User Story Showcase</b> - Real-world applications through the eyes of early adopters`},create_marketing_calendar:{prompt:{title:"Create a marketing calendar",description:"for Q3 with key dates and themes",category:"Marketing"},response:`Here's a Q3 marketing calendar framework with key dates and themes:<br><br>
    <b>JULY: "Innovation Spotlight"</b><br>
    • Week 1 (July 1-7): Independence Day promotions - "Freedom through Technology"<br>
    • Week 2 (July 8-14): Case study releases - Client success stories<br>
    • Week 3 (July 15-21): Webinar series - "Future of [Industry]"<br>
    • Week 4 (July 22-31): Product update announcements<br><br>
    
    <b>AUGUST: "Community & Collaboration"</b><br>
    • Week 1 (Aug 1-7): User-generated content campaign launch<br>
    • Week 2 (Aug 8-14): Partner spotlight series<br>
    • Week 3 (Aug 15-21): Back-to-school/business campaign<br>
    • Week 4 (Aug 22-31): Community challenge or hackathon<br><br>
    
    <b>SEPTEMBER: "Growth & Transformation"</b><br>
    • Week 1 (Sept 1-7): Labor Day campaign - "Work Smarter"<br>
    • Week 2 (Sept 8-14): Industry conference preparation<br>
    • Week 3 (Sept 15-21): Q4 preview/roadmap reveal<br>
    • Week 4 (Sept 22-30): End of quarter special offers<br><br>
    
    <b>CONTENT THEMES:</b><br>
    • Thought leadership articles: 1 per week<br>
    • Customer testimonials: 2 per month<br>
    • Product tutorials: Weekly<br>
    • Industry news commentary: As relevant`},develop_pr_strategy:{prompt:{title:"Develop a PR strategy",description:"for a controversial product feature",category:"Marketing"},response:`Here's a PR strategy for managing a controversial product feature:<br><br>
    <b>1. Pre-emptive Communication</b><br>
    • Develop a clear narrative explaining the feature's benefits and addressing potential concerns<br>
    • Brief key stakeholders before public announcement<br>
    • Prepare an FAQ document addressing likely questions and criticisms<br><br>
    
    <b>2. Controlled Announcement</b><br>
    • Choose timing strategically (avoid major news cycles if possible)<br>
    • Frame the announcement in terms of user benefits and problem-solving<br>
    • Include testimonials from beta users and industry experts<br><br>
    
    <b>3. Media Relations</b><br>
    • Offer exclusive briefings to select journalists who understand your industry<br>
    • Provide technical experts for interviews<br>
    • Create a media kit with visuals, data points, and user stories<br><br>
    
    <b>4. Response Management</b><br>
    • Establish a rapid response team for social media and press inquiries<br>
    • Monitor sentiment across channels using social listening tools<br>
    • Address legitimate concerns transparently while avoiding defensive posturing<br><br>
    
    <b>5. Follow-up Strategy</b><br>
    • Share user success stories after implementation<br>
    • Publish data on positive outcomes<br>
    • Consider a "lessons learned" piece if appropriate`},write_social_media:{prompt:{title:"Write social media copy",description:"for an Instagram carousel post",category:"Content"},response:`Here's a draft for an Instagram carousel post:<br><br>
    <b>Slide 1:</b> "Introducing our newest collection: HARMONY. Where style meets sustainability. #NewLaunch #SustainableFashion"<br><br>
    <b>Slide 2:</b> "Each piece is crafted from recycled materials, saving 50 gallons of water per garment. Swipe to see the process."<br><br>
    <b>Slide 3:</b> "Our artisans use traditional techniques combined with innovative eco-friendly dyes."<br><br>
    <b>Slide 4:</b> "Available now in stores and online. Link in bio to shop the collection."<br><br>
    <b>Caption:</b> "The HARMONY collection isn't just about looking good—it's about doing good. Each purchase plants a tree through our partnership with @EcoRestore. 🌱 #FashionWithPurpose #EthicalStyle"`},draft_press_release:{prompt:{title:"Draft a press release",description:"announcing a major company milestone",category:"Content"},response:`Here's a press release announcing a major company milestone:<br><br>
    <b>FOR IMMEDIATE RELEASE</b><br>
    <b>[COMPANY NAME] Celebrates 10 Years of Innovation with Expansion into European Markets</b><br><br>
    
    [CITY, STATE] – [DATE] – [COMPANY NAME], a leader in [INDUSTRY], today announced its expansion into European markets, coinciding with the company's 10-year anniversary. This strategic growth initiative follows a record-breaking year with $XX million in revenue and marks a significant milestone in the company's global vision.<br><br>
    
    Founded in [YEAR] by [FOUNDER NAMES], [COMPANY] has grown from a small team of [NUMBER] to over [CURRENT NUMBER] employees worldwide. The company's innovative approach to [COMPANY'S SPECIALTY] has disrupted traditional models and earned recognition including [NOTABLE AWARDS OR RECOGNITION].<br><br>
    
    "This expansion represents not just a decade of growth, but our commitment to bringing innovative solutions to clients worldwide," said [CEO NAME], CEO of [COMPANY NAME]. "Our entry into the European market responds to increasing demand and allows us to better serve our global client base."<br><br>
    
    The expansion includes:<br>
    • A new headquarters in [EUROPEAN CITY]<br>
    • Strategic partnerships with [PARTNER NAMES]<br>
    • Localized versions of the company's flagship [PRODUCT/SERVICE]<br><br>
    
    [CLIENT/PARTNER QUOTE expressing excitement about the expansion]<br><br>
    
    To celebrate this milestone, [COMPANY NAME] is also announcing [SPECIAL INITIATIVE, PRODUCT LAUNCH, OR CHARITABLE PROGRAM].<br><br>
    
    <b>About [COMPANY NAME]</b><br>
    [BOILERPLATE COMPANY DESCRIPTION]<br><br>
    
    <b>Media Contact:</b><br>
    [CONTACT NAME]<br>
    [PHONE]<br>
    [EMAIL]`},create_email_newsletter:{prompt:{title:"Create email newsletter content",description:"highlighting case studies and insights",category:"Content"},response:`Here's email newsletter content highlighting case studies and insights:<br><br>
    <b>Subject Line:</b> Inside Look: How Our Clients Achieved 3X Growth<br><br>
    
    <b>Header Section:</b><br>
    [COMPANY NAME] INSIGHTS | MONTHLY NEWSLETTER | JULY 2023<br><br>
    
    <b>Opening:</b><br>
    Hi [First Name],<br><br>
    
    This month, we're taking you behind the scenes of three remarkable success stories. Discover how these diverse clients overcame unique challenges and achieved exceptional results through strategic creative solutions.<br><br>
    
    <b>Featured Case Study:</b><br>
    <b>How [Client Name] Reimagined Their Digital Experience and Saw Engagement Soar</b><br><br>
    
    When [Client Name] came to us, they were struggling with high bounce rates and low conversion. Through our collaborative redesign process, we created an intuitive user journey that resulted in:<br>
    • 47% increase in time on site<br>
    • 3.5x improvement in conversion rate<br>
    • 68% reduction in cart abandonment<br><br>
    
    [Read the full case study →]<br><br>
    
    <b>Industry Insights:</b><br>
    <b>Three Emerging Trends Reshaping [Industry] in 2023</b><br><br>
    
    Our strategy team has identified key shifts that forward-thinking brands should be preparing for:<br>
    1. [Trend One] - How it's changing consumer expectations<br>
    2. [Trend Two] - Why early adopters are seeing significant advantages<br>
    3. [Trend Three] - What this means for your Q4 planning<br><br>
    
    [Read our analysis →]<br><br>
    
    <b>Team Spotlight:</b><br>
    Meet [Team Member Name], our new [Position]. With over [X] years of experience at [Previous Notable Companies], [First Name] brings expertise in [Specialty] that's already making an impact for clients like [Client Names].<br><br>
    
    <b>Upcoming Events:</b><br>
    • [Webinar Title] - [Date] - [Brief description]<br>
    • [Industry Conference] - [Date] - Visit us at Booth #[Number]<br><br>
    
    [Register now →]<br><br>
    
    Until next month,<br>
    [Sender Name]<br>
    [Position], [Company Name]`},create_client_pitch:{prompt:{title:"Create a client pitch",description:"for a website redesign project",category:"Business"},response:`Here's an outline for a website redesign pitch:<br><br>
    <b>1. Introduction</b><br>
    • Brief overview of the client's current website challenges<br>
    • Your agency's unique approach to solving these issues<br><br>
    <b>2. Analysis & Insights</b><br>
    • Key findings from UX audit and analytics review<br>
    • Competitor analysis highlights<br><br>
    <b>3. Strategic Recommendations</b><br>
    • Information architecture improvements<br>
    • Visual design direction with mood boards<br>
    • Content strategy adjustments<br><br>
    <b>4. Technical Approach</b><br>
    • Proposed CMS and technology stack<br>
    • Performance optimization strategy<br><br>
    <b>5. Timeline & Investment</b><br>
    • Project phases and deliverables<br>
    • Pricing options with clear value propositions<br><br>
    <b>6. Expected Results</b><br>
    • Projected improvements in key metrics<br>
    • Long-term business impact`},draft_project_proposal:{prompt:{title:"Draft a project proposal",description:"with detailed scope and deliverables",category:"Business"},response:`Here's a detailed project proposal with scope and deliverables:<br><br>
    <b>PROJECT OVERVIEW</b><br>
    [Client Name] has requested [Agency Name] to develop a comprehensive [project type] to address [business challenge]. This proposal outlines our recommended approach, deliverables, timeline, and investment.<br><br>
    
    <b>OBJECTIVES</b><br>
    • Increase [specific metric] by [target percentage]<br>
    • Improve [specific area] to enhance [specific outcome]<br>
    • Establish [new capability or feature] to enable [business benefit]<br><br>
    
    <b>SCOPE OF WORK</b><br>
    <b>Phase 1: Discovery & Strategy (Weeks 1-2)</b><br>
    <u>Deliverables:</u><br>
    • Stakeholder interview summary (up to 5 interviews)<br>
    • Competitive analysis report<br>
    • User persona development (3-5 personas)<br>
    • Strategic brief and project roadmap<br><br>
    
    <b>Phase 2: Concept Development (Weeks 3-4)</b><br>
    <u>Deliverables:</u><br>
    • Creative concept presentations (2 directions)<br>
    • Wireframes for key user journeys (up to 10 screens)<br>
    • Content strategy document<br>
    • Concept refinement based on feedback (up to 2 rounds)<br><br>
    
    <b>Phase 3: Production & Implementation (Weeks 5-8)</b><br>
    <u>Deliverables:</u><br>
    • Final design assets<br>
    • Development/production of all elements<br>
    • Quality assurance testing<br>
    • Implementation support<br><br>
    
    <b>Phase 4: Launch & Optimization (Weeks 9-10)</b><br>
    <u>Deliverables:</u><br>
    • Launch support<br>
    • Performance monitoring setup<br>
    • Post-launch report (30 days after launch)<br>
    • Recommendations for optimization<br><br>
    
    <b>INVESTMENT</b><br>
    Total Project Investment: $[Amount]<br><br>
    
    Payment Schedule:<br>
    • 40% upon project initiation<br>
    • 30% upon completion of Phase 2<br>
    • 30% upon project completion<br><br>
    
    <b>TEAM</b><br>
    • [Name], Project Lead<br>
    • [Name], Creative Director<br>
    • [Name], [Specific Role]<br>
    • [Name], [Specific Role]<br><br>
    
    <b>NEXT STEPS</b><br>
    1. Proposal review meeting<br>
    2. Contract finalization<br>
    3. Kickoff meeting scheduling<br>
    4. Project initiation`},write_creative_brief:{prompt:{title:"Write a creative brief",description:"for a video production project",category:"Business"},response:`Here's a creative brief for a video production project:<br><br>
    <b>PROJECT OVERVIEW</b><br>
    Creation of a 2-3 minute brand film for [Client Name] to showcase their [product/service] and communicate their unique value proposition to [target audience].<br><br>
    
    <b>BACKGROUND</b><br>
    [Client Name] is [brief company description]. They are launching [new initiative/product] and need compelling video content to support the launch across digital channels.<br><br>
    
    <b>OBJECTIVES</b><br>
    • Communicate the brand's core values of [value 1], [value 2], and [value 3]<br>
    • Showcase the [product/service] in authentic, compelling scenarios<br>
    • Drive audience to [specific action] on the website<br>
    • Generate social media engagement and sharing<br><br>
    
    <b>TARGET AUDIENCE</b><br>
    <u>Primary:</u> [demographic details, psychographic information]<br>
    <u>Secondary:</u> [demographic details, psychographic information]<br><br>
    
    <b>KEY MESSAGE</b><br>
    [Core message that should be conveyed through the video]<br><br>
    
    <b>TONE & STYLE</b><br>
    • Visual style: [description of desired aesthetic]<br>
    • Tone: [emotional qualities - e.g., inspirational, humorous, dramatic]<br>
    • Music direction: [style of music that would complement the visuals]<br>
    • Color palette: [reference to brand colors or desired mood]<br><br>
    
    <b>CONTENT REQUIREMENTS</b><br>
    • Must include [specific elements]<br>
    • Should feature [specific people, locations, or scenarios]<br>
    • Must incorporate [logo placement guidelines]<br>
    • Call-to-action: [specific CTA to include]<br><br>
    
    <b>DELIVERABLES</b><br>
    • 2-3 minute main brand film<br>
    • 3-5 cutdown versions (15, 30, 60 seconds) for social media<br>
    • Behind-the-scenes content for Instagram Stories<br>
    • Still images extracted from footage for promotional use<br><br>
    
    <b>TIMELINE</b><br>
    • Creative concept approval: [Date]<br>
    • Pre-production complete: [Date]<br>
    • Filming dates: [Dates]<br>
    • First cut delivery: [Date]<br>
    • Final delivery: [Date]<br><br>
    
    <b>BUDGET</b><br>
    $[Amount] (inclusive of all production costs, talent, and editing)<br><br>
    
    <b>APPROVAL PROCESS</b><br>
    [Details about who needs to approve at each stage and expected turnaround times]`}},H=`I'm here to help with your creative agency needs! I can assist with:<br><br>
• Brand strategy and messaging<br>
• Campaign concepts and planning<br>
• Content creation for various channels<br>
• Design briefs and creative direction<br>
• Client presentations and pitches<br><br>
What specific creative challenge can I help you with today?`,wt=()=>Object.values(M).map(a=>a.prompt),W=(a=4)=>[...wt()].sort(()=>.5-Math.random()).slice(0,a),xt=a=>{const r=Object.keys(M).find(t=>M[t].prompt.title===a.title);return r?M[r].response:H},_t=a=>{const r=a.toLowerCase();for(const[t,s]of Object.entries(M)){const u=s.prompt.title.toLowerCase(),g=s.prompt.description.toLowerCase();if(r.includes(u)||u.split(" ").some(c=>r.includes(c))||r.includes(g))return s.response}return H},kt={class:"chat-content"},Ct={class:"messages-container"},Tt={__name:"ChatContent",setup(a){const r=x("Max McLeod"),t=x([{id:"gpt-4-turbo",name:"GPT-4 Turbo",description:"OpenAI's most advanced model"},{id:"claude-3-opus",name:"Claude 3 Opus",description:"Anthropic's most capable model"},{id:"gpt-3.5-turbo",name:"GPT-3.5 Turbo",description:"Fast and efficient model from OpenAI"},{id:"llama-3",name:"Llama 3",description:"Open source model from Meta"}]),s=x(t.value[0]),u=x(W(4)),g=x([]),c=x(""),v=()=>new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),m=_=>{s.value=_},p=_=>{g.value.push({text:_.title,sender:"user",userName:r.value,timestamp:v()}),c.value="";const P=xt(_);setTimeout(()=>{g.value.push({text:P,sender:"ai",modelName:s.value.name,timestamp:v()})},1e3)},f=()=>{if(!c.value.trim())return;g.value.push({text:c.value,sender:"user",userName:r.value,timestamp:v()});const _=c.value;c.value="",setTimeout(()=>{const P=_t(_);g.value.push({text:P,sender:"ai",modelName:s.value.name,timestamp:v()})},1e3)},R=()=>{u.value=W(4)},$=()=>{setTimeout(()=>{const _=document.querySelector(".messages-container");_&&(_.scrollTop=_.scrollHeight)},100)};return ne(()=>{const _=document.querySelector(".messages-container");_&&new MutationObserver($).observe(_,{childList:!0,subtree:!0})}),(_,P)=>(o(),l("div",kt,[n(Oe,{models:t.value,"selected-model":s.value,onSelectModel:m},null,8,["models","selected-model"]),e("div",Ct,[g.value.length===0?(o(),y(et,{key:0,"suggested-prompts":u.value,"user-name":r.value,onUsePrompt:p,onRefreshPrompts:R},null,8,["suggested-prompts","user-name"])):(o(),y(pt,{key:1,messages:g.value,"user-name":r.value,"selected-model":s.value},null,8,["messages","user-name","selected-model"]))]),n(yt,{value:c.value,"selected-model":s.value,"onUpdate:value":P[0]||(P[0]=J=>c.value=J),onSend:f},null,8,["value","selected-model"])]))}},At=w(Tt,[["__scopeId","data-v-de348aaa"]]),It={class:"run-section"},Et={class:"run-container"},Pt={__name:"RunSection",setup(a){return(r,t)=>(o(),l("div",It,[e("div",Et,[n(Re,{class:"chat-sidebar"}),n(At,{class:"chat-content"})])]))}},z=w(Pt,[["__scopeId","data-v-a60853cc"]]),St={class:"docs-nav-panel"},Rt={class:"nav-content"},Mt={__name:"DocsNavPanel",props:{sections:{type:Array,required:!0},selected:{type:String,required:!0}},emits:["update:selected"],setup(a,{emit:r}){const t=r,s=u=>{t("update:selected",u)};return(u,g)=>(o(),l("div",St,[g[0]||(g[0]=e("div",{class:"panel-header"},[e("div",{class:"panel-title"},"documentation")],-1)),e("div",Rt,[n(U,{density:"compact","bg-color":"transparent",class:"docs-list"},{default:i(()=>[(o(!0),l(C,null,T(a.sections,c=>(o(),l("div",{key:c.id},[n(ie,{class:"section-title"},{default:i(()=>[h(d(c.title),1)]),_:2},1024),(o(!0),l(C,null,T(c.items,v=>(o(),y(j,{key:v.id,value:v.id,active:a.selected===v.id,onClick:m=>s(v.id),class:S(["nav-item",{active:a.selected===v.id}])},{default:i(()=>[n(V,{class:"item-title"},{default:i(()=>[h(d(v.title),1)]),_:2},1024)]),_:2},1032,["value","active","onClick","class"]))),128))]))),128))]),_:1})])]))}},Y=w(Mt,[["__scopeId","data-v-c10d674e"]]),$t={class:"docs-content"},Nt={class:"content-header"},Dt={class:"content-title"},qt={class:"content-body"},Ft={key:0,class:"paragraph"},Ot={key:1,class:"image-container"},Lt=["src","alt"],Wt={key:0,class:"image-caption"},zt={key:2,class:"code-block"},Bt={class:"code-language"},Ut={class:"code-content"},jt={key:3,class:"content-list"},Vt={__name:"DocsContent",props:{doc:{type:Object,required:!0}},setup(a){return(r,t)=>(o(),l("div",$t,[e("div",Nt,[e("h1",Dt,d(a.doc.title),1)]),e("div",qt,[(o(!0),l(C,null,T(a.doc.content,(s,u)=>(o(),l("div",{key:u,class:S(["content-item",s.type])},[s.type==="paragraph"?(o(),l("p",Ft,d(s.text),1)):s.type==="image"?(o(),l("div",Ot,[e("img",{src:s.src,alt:s.alt,class:"content-image"},null,8,Lt),s.caption?(o(),l("div",Wt,d(s.caption),1)):I("",!0)])):s.type==="code"?(o(),l("div",zt,[e("div",Bt,d(s.language),1),e("pre",Ut,[e("code",null,d(s.text),1)])])):s.type==="list"?(o(),l("ul",jt,[(o(!0),l(C,null,T(s.items,(g,c)=>(o(),l("li",{key:c,class:"list-item"},d(g),1))),128))])):I("",!0)],2))),128))])]))}},K=w(Vt,[["__scopeId","data-v-cce24c11"]]),q=[{id:"getting-started",title:"Getting Started",items:[{id:"introduction",title:"Introduction",content:[{type:"paragraph",text:"Welcome to the language model documentation. This guide will help you understand how to use our powerful language generation tools to create engaging text content for your projects."},{type:"paragraph",text:"Our system uses state-of-the-art large language models to generate high-quality text from prompts. By providing clear instructions, you can guide the AI to create exactly the content you need."},{type:"image",src:"/assets/mock/general/language-model-example.png",alt:"Example of language model output",caption:"Example of text generated by our language model"}]},{id:"key-concepts",title:"Key Concepts",content:[{type:"paragraph",text:"Before diving into using our language models, it's important to understand some key concepts:"},{type:"list",items:["Prompts: The text input you provide to guide the model's output","Temperature: Controls randomness in the output (higher = more creative, lower = more focused)","Top-p: Controls diversity by limiting token selection to a subset of most likely tokens","Max tokens: The maximum length of text the model will generate","Stop sequences: Special tokens that tell the model when to stop generating"]},{type:"paragraph",text:"Understanding these parameters will help you get the most out of our language models and generate text that meets your specific needs."}]},{id:"models-overview",title:"Models Overview",content:[{type:"paragraph",text:"We offer several language models with different capabilities and performance characteristics:"},{type:"table",headers:["Model","Description","Best For","Context Length"],rows:[["GPT-4 Turbo","Our most powerful model with advanced reasoning","Complex tasks, creative writing, code generation","128K tokens"],["GPT-3.5 Turbo","Fast and efficient general-purpose model","Chat applications, content generation, summarization","16K tokens"],["Claude 3 Opus","Specialized in detailed analysis and nuanced responses","Research assistance, detailed explanations, analysis","200K tokens"],["Llama 3 70B","Open-weights model with strong performance","On-premises deployment, privacy-sensitive applications","8K tokens"],["Mistral Medium","Balanced performance and efficiency","Everyday tasks, customer support, content moderation","32K tokens"]]},{type:"paragraph",text:"Each model has its strengths and ideal use cases. We recommend starting with GPT-3.5 Turbo for general purposes and exploring specialized models as your needs evolve."}]}]},{id:"prompt-engineering",title:"Prompt Engineering",items:[{id:"effective-prompting",title:"Effective Prompting",content:[{type:"paragraph",text:"Prompt engineering is the art and science of crafting inputs that guide language models to produce desired outputs. Well-designed prompts can dramatically improve the quality and relevance of generated text."},{type:"paragraph",text:"Here are some key principles for effective prompting:"},{type:"list",items:["Be specific and clear about what you want","Provide context and background information","Use examples to demonstrate the desired format or style","Break complex tasks into smaller steps","Specify the tone, style, and audience when relevant"]},{type:"code",language:"plaintext",text:`# Example of a well-structured prompt

You are a financial advisor helping a client understand investment options.

CONTEXT:
- Client is 35 years old
- Has $50,000 to invest
- Medium risk tolerance
- Saving for retirement in 30 years
- Currently has no other investments

TASK:
Explain 3 suitable investment options for this client. For each option:
1. Describe what it is in simple terms
2. Explain potential returns and risks
3. Suggest what percentage of the $50,000 might go to this option

FORMAT:
- Use bullet points for clarity
- Avoid financial jargon where possible
- End with a brief summary paragraph`}]},{id:"prompt-templates",title:"Prompt Templates",content:[{type:"paragraph",text:"Prompt templates provide a structured way to format your inputs consistently. They can help ensure that your prompts contain all necessary information and follow best practices."},{type:"paragraph",text:"Here are some useful templates for common tasks:"},{type:"code",language:"plaintext",text:`# Content Creation Template

TOPIC: [Specific topic]
FORMAT: [Article/Blog post/Social media/etc.]
AUDIENCE: [Target audience description]
TONE: [Professional/Casual/Humorous/etc.]
LENGTH: [Word count or approximate length]
KEY POINTS:
- [Point 1]
- [Point 2]
- [Point 3]
CALL TO ACTION: [What should readers do after reading?]`},{type:"code",language:"plaintext",text:`# Question Answering Template

QUESTION: [User's question]
CONTEXT: [Relevant background information]
REQUIREMENTS:
- Answer should be [brief/detailed/technical/simple]
- Include [specific elements to include]
- Format as [desired format]
- Cite sources if using specific facts`},{type:"paragraph",text:"These templates can be adapted to your specific needs and help maintain consistency across different prompts and users."}]},{id:"chain-of-thought",title:"Chain of Thought",content:[{type:"paragraph",text:"Chain of Thought (CoT) prompting is a technique that encourages language models to break down complex problems into step-by-step reasoning. This approach often leads to more accurate and logical responses, especially for tasks requiring reasoning or calculation."},{type:"paragraph",text:"To use CoT prompting, explicitly ask the model to think through a problem step by step before providing the final answer."},{type:"code",language:"plaintext",text:`# Example of Chain of Thought prompting

PROBLEM: A store is having a 25% off sale. If a shirt originally costs $60, and there is a 8% sales tax applied after the discount, what is the final price?

Think through this step by step:
1. Calculate the discount amount
2. Subtract the discount from the original price
3. Calculate the tax amount on the discounted price
4. Add the tax to get the final price`},{type:"paragraph",text:"This technique is particularly effective for mathematical problems, logical reasoning, and complex decision-making tasks where breaking down the process improves accuracy."}]}]},{id:"use-cases",title:"Use Cases",items:[{id:"content-creation",title:"Content Creation",content:[{type:"paragraph",text:"Language models excel at generating various types of content, from blog posts and articles to social media updates and marketing copy. They can help overcome writer's block, generate ideas, or produce complete drafts that you can refine."},{type:"paragraph",text:"Common content creation applications include:"},{type:"list",items:["Blog posts and articles on specific topics","Product descriptions for e-commerce","Social media content calendars","Email newsletters and marketing campaigns","Video scripts and podcast outlines","Creative writing and storytelling"]},{type:"paragraph",text:"For best results, provide clear guidelines about tone, style, audience, and key points you want to include. Review and edit AI-generated content to ensure accuracy and align with your brand voice."},{type:"code",language:"plaintext",text:`# Example content creation prompt

Write a 300-word blog post introduction about sustainable fashion.

AUDIENCE: Environmentally conscious consumers aged 25-40
TONE: Informative but conversational
KEY POINTS:
- Environmental impact of fast fashion
- Growth of sustainable alternatives
- How consumers can make better choices

The introduction should hook readers with a compelling statistic or question and outline what the article will cover.`}]},{id:"summarization",title:"Summarization",content:[{type:"paragraph",text:"Language models can condense long documents, articles, or conversations into concise summaries while preserving key information. This is useful for research, meeting notes, news digests, and content curation."},{type:"paragraph",text:"You can control the level of detail in summaries by specifying:"},{type:"list",items:["Length (word count or number of bullet points)","Focus areas or aspects to emphasize","Format (narrative, bullet points, executive summary)","Target audience (technical experts, executives, general public)"]},{type:"code",language:"plaintext",text:`# Example summarization prompt

Summarize the following research paper in 3-5 bullet points, highlighting the methodology, key findings, and practical implications. The summary should be understandable to someone with basic knowledge of the field.

[PAPER TEXT HERE]`},{type:"paragraph",text:"For longer texts, you may need to break them into chunks and summarize each section separately, then combine the results into a cohesive overall summary."}]},{id:"chatbots",title:"Chatbots & Assistants",content:[{type:"paragraph",text:"Language models power conversational agents that can engage users in natural dialogue, answer questions, provide assistance, and perform tasks. These range from simple FAQ bots to sophisticated virtual assistants with specialized knowledge."},{type:"paragraph",text:"Key considerations for chatbot development:"},{type:"list",items:["Personality and tone that aligns with your brand","Conversation memory to maintain context","Integration with external systems and databases","Fallback mechanisms for handling unclear requests","Continuous improvement based on user interactions"]},{type:"paragraph",text:"Effective chatbots typically combine language models with structured data, business logic, and sometimes other AI capabilities like entity recognition or sentiment analysis."},{type:"code",language:"plaintext",text:`# Example system prompt for a customer service chatbot

You are a helpful customer service assistant for TechGadgets, an electronics retailer.

CAPABILITIES:
- Answer questions about products, pricing, and availability
- Help with order status inquiries
- Process simple returns and exchanges
- Troubleshoot common product issues
- Escalate complex issues to human agents

GUIDELINES:
- Be friendly and professional
- Ask clarifying questions when needed
- Provide concise, accurate information
- Never make up information about products or policies
- If you can't help, offer to connect the customer with a human agent

COMPANY POLICIES:
- 30-day return policy on all products
- Free shipping on orders over $50
- Price match guarantee with major competitors
- Warranty support handled through manufacturers`}]}]},{id:"best-practices",title:"Best Practices",items:[{id:"output-quality",title:"Improving Output Quality",content:[{type:"paragraph",text:"While language models can produce impressive results, there are several strategies to consistently improve output quality:"},{type:"list",items:["Iterative refinement: Use the model to generate initial content, then ask it to improve specific aspects","Parameter tuning: Adjust temperature, top-p, and other settings based on your needs","Few-shot learning: Provide examples of desired outputs in your prompt","Structured outputs: Request specific formats like JSON or markdown for more consistent results","Post-processing: Implement validation checks and automated corrections for common issues"]},{type:"paragraph",text:"Remember that language models perform best when given clear instructions and sufficient context. The quality of your prompt directly influences the quality of the output."},{type:"code",language:"plaintext",text:`# Example of iterative refinement

INITIAL PROMPT:
Write a product description for a wireless bluetooth headphone.

REFINEMENT PROMPT:
Please improve the product description by:
1. Adding more technical specifications (battery life, connectivity range, etc.)
2. Highlighting 3 key differentiating features
3. Including a paragraph about comfort and fit
4. Adding a compelling call-to-action at the end`}]},{id:"responsible-ai",title:"Responsible AI Usage",content:[{type:"paragraph",text:"Using language models responsibly is essential to prevent harm and ensure ethical outcomes. Consider these guidelines:"},{type:"list",items:["Transparency: Be clear when content is AI-generated or AI-assisted","Accuracy: Verify factual claims and citations in AI-generated content","Bias mitigation: Review outputs for potential biases and stereotypes","Privacy: Avoid sharing sensitive personal information in prompts","Content moderation: Implement safeguards against harmful or inappropriate outputs","Human oversight: Maintain human review and accountability for important content"]},{type:"paragraph",text:"Our models include safety measures, but responsible use ultimately depends on how you implement and deploy them in your applications."}]},{id:"performance-optimization",title:"Performance Optimization",content:[{type:"paragraph",text:"Optimizing performance helps manage costs and improve user experience when working with language models:"},{type:"list",items:["Caching: Store responses for common queries to reduce API calls","Request batching: Combine multiple requests when possible","Context pruning: Remove unnecessary information from conversation history","Model selection: Use smaller, faster models for simpler tasks","Parallel processing: Generate multiple outputs simultaneously for independent tasks","Streaming: Use streaming responses for real-time user feedback"]},{type:"paragraph",text:"Performance optimization strategies should be tailored to your specific use case, balancing response quality, speed, and cost considerations."},{type:"code",language:"javascript",text:`// Example of implementing response caching
const responseCache = new Map();

async function getCachedOrGenerateResponse(prompt, options) {
  // Create a cache key from the prompt and relevant options
  const cacheKey = JSON.stringify({
    prompt,
    model: options.model,
    temperature: options.temperature,
    maxTokens: options.maxTokens
  });
  
  // Check if we have a cached response
  if (responseCache.has(cacheKey)) {
    console.log('Cache hit!');
    return responseCache.get(cacheKey);
  }
  
  // Generate new response
  console.log('Cache miss, generating new response...');
  const response = await languageModel.generateText(prompt, options);
  
  // Cache the response (with TTL for freshness)
  responseCache.set(cacheKey, response);
  setTimeout(() => responseCache.delete(cacheKey), 3600000); // 1 hour TTL
  
  return response;
}`}]}]}],Gt=a=>{for(const r of q)for(const t of r.items)if(t.id===a)return t;return q[0].items[0]},Ht={class:"docs-section"},Yt={class:"docs-container"},Kt={__name:"DocsSection",setup(a){const r=x(q),t=x("introduction"),s=k(()=>Gt(t.value));return(u,g)=>(o(),l("div",Ht,[e("div",Yt,[n(Y,{class:"nav-panel",sections:r.value,selected:t.value,"onUpdate:selected":g[0]||(g[0]=c=>t.value=c)},null,8,["sections","selected"]),n(K,{class:"content-area",doc:s.value},null,8,["doc"])])]))}},Jt=w(Kt,[["__scopeId","data-v-892f79b3"]]),Qt={class:"forums-header"},Xt={class:"forum-title-area"},Zt={class:"forum-title"},ea={class:"article-count"},ta={class:"forum-actions"},aa={class:"search-container"},sa={__name:"ForumHeader",props:{title:{type:String,required:!0},articleCount:{type:Number,required:!0}},setup(a){const r=x("");return(t,s)=>(o(),l("div",Qt,[e("div",Xt,[e("h1",Zt,[h(d(a.title)+" ",1),e("span",ea,"- "+d(a.articleCount)+" articles",1)])]),e("div",ta,[n(A,{color:"primary",class:"create-topic-btn","prepend-icon":"mdi-plus"},{default:i(()=>s[1]||(s[1]=[h(" create topic ")])),_:1}),e("div",aa,[n(O,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=u=>r.value=u),placeholder:"search forums",variant:"outlined",density:"compact","hide-details":"","bg-color":"rgba(30, 30, 30, 0.6)",class:"search-input","prepend-inner-icon":"mdi-magnify"},null,8,["modelValue"])])])]))}},oa=w(sa,[["__scopeId","data-v-0b40612f"]]),na={class:"topic-avatar"},ia={class:"text-h5 font-weight-bold"},ra={class:"topic-content"},la={class:"topic-author-info"},ca={class:"author-name"},da={class:"author-role"},ua={class:"topic-title"},pa={class:"topic-preview"},ma={class:"topic-metrics"},ha={class:"metric likes"},ga={class:"metric views"},ba={class:"metric comments"},fa={class:"metric time"},va={__name:"ForumTopicItem",props:{topic:{type:Object,required:!0}},emits:["click"],setup(a){return(r,t)=>(o(),l("div",{class:S(["forum-topic-item",{pinned:a.topic.pinned}]),onClick:t[0]||(t[0]=s=>r.$emit("click",a.topic.id))},[e("div",na,[a.topic.avatarUrl?(o(),y(E,{key:1,size:"48"},{default:i(()=>[n(D,{src:a.topic.avatarUrl,alt:"User avatar"},null,8,["src"])]),_:1})):(o(),y(E,{key:0,size:"48",color:a.topic.avatarColor},{default:i(()=>[e("span",ia,d(a.topic.author.charAt(0)),1)]),_:1},8,["color"]))]),e("div",ra,[e("div",la,[e("span",ca,d(a.topic.author),1),e("span",da,d(a.topic.authorRole),1)]),e("h3",ua,[a.topic.pinned?(o(),y(b,{key:0,size:"small",color:"primary",class:"pin-icon"},{default:i(()=>t[1]||(t[1]=[h("mdi-bookmark")])),_:1})):I("",!0),h(" "+d(a.topic.title),1)]),e("p",pa,d(a.topic.preview),1),e("div",ma,[e("div",ha,[n(b,{size:"small"},{default:i(()=>t[2]||(t[2]=[h("mdi-thumb-up-outline")])),_:1}),e("span",null,d(a.topic.likes),1)]),e("div",ga,[n(b,{size:"small"},{default:i(()=>t[3]||(t[3]=[h("mdi-eye-outline")])),_:1}),e("span",null,d(a.topic.views),1)]),e("div",ba,[n(b,{size:"small"},{default:i(()=>t[4]||(t[4]=[h("mdi-comment-outline")])),_:1}),e("span",null,d(a.topic.comments),1)]),e("div",fa,[a.topic.hasAdminResponse?(o(),y(b,{key:0,size:"small"},{default:i(()=>t[5]||(t[5]=[h("mdi-update")])),_:1})):I("",!0),a.topic.hasAdminResponse?(o(),y(E,{key:1,size:"18",color:"primary",class:"admin-badge"},{default:i(()=>t[6]||(t[6]=[e("span",{class:"text-caption font-weight-bold"},"A",-1)])),_:1})):I("",!0),e("span",null,d(a.topic.timeAgo),1)])])])],2))}},ya=w(va,[["__scopeId","data-v-f4dd8bca"]]),wa={class:"forum-post-view"},xa={class:"breadcrumb"},_a={class:"post-title"},ka={class:"post-container"},Ca={class:"post-main"},Ta={key:0,class:"post-label"},Aa={class:"post-title"},Ia={class:"post-meta"},Ea={class:"time"},Pa={class:"replies"},Sa={class:"views"},Ra={class:"post-content"},Ma={class:"post-author"},$a={class:"author-avatar"},Na={class:"text-h5 font-weight-bold"},Da={class:"author-info"},qa={class:"author-name"},Fa={class:"author-role"},Oa={class:"post-text"},La={class:"post-actions"},Wa={key:0,class:"replies-section"},za={class:"replies-header"},Ba={class:"reply-author"},Ua={class:"author-avatar"},ja={class:"text-h5 font-weight-bold"},Va={class:"author-info"},Ga={class:"author-name"},Ha={class:"author-role"},Ya={class:"reply-text"},Ka={class:"reply-actions"},Ja={class:"reply-meta"},Qa={class:"time"},Xa={__name:"ForumPostView",props:{post:{type:Object,required:!0},forumName:{type:String,default:"sdxl turbo"}},emits:["back"],setup(a){return(r,t)=>(o(),l("div",wa,[e("div",xa,[e("span",{class:"forum-name",onClick:t[0]||(t[0]=s=>r.$emit("back"))},d(a.forumName),1),n(b,{size:"small",class:"breadcrumb-separator"},{default:i(()=>t[1]||(t[1]=[h("mdi-chevron-right")])),_:1}),e("span",_a,d(a.post.title),1)]),e("div",ka,[e("div",Ca,[a.post.type?(o(),l("div",Ta,d(a.post.type),1)):I("",!0),e("h1",Aa,d(a.post.title),1),e("div",Ia,[e("span",Ea,d(a.post.timeAgo),1),t[2]||(t[2]=e("span",{class:"separator"},"•",-1)),e("span",Pa,d(a.post.replies.length)+" replies",1),t[3]||(t[3]=e("span",{class:"separator"},"•",-1)),e("span",Sa,d(a.post.views)+" views",1)]),e("div",Ra,[e("div",Ma,[e("div",$a,[a.post.avatarUrl?(o(),y(E,{key:1,size:"48"},{default:i(()=>[n(D,{src:a.post.avatarUrl,alt:"User avatar"},null,8,["src"])]),_:1})):(o(),y(E,{key:0,size:"48",color:a.post.avatarColor},{default:i(()=>[e("span",Na,d(a.post.author.charAt(0)),1)]),_:1},8,["color"]))]),e("div",Da,[e("div",qa,d(a.post.author),1),e("div",Fa,d(a.post.authorRole),1)])]),e("div",Oa,[(o(!0),l(C,null,T(a.post.content,(s,u)=>(o(),l("p",{key:u,class:"paragraph"},d(s),1))),128))]),e("div",La,[n(A,{variant:"text",density:"comfortable",class:"like-btn"},{default:i(()=>[n(b,{start:""},{default:i(()=>t[4]||(t[4]=[h("mdi-thumb-up-outline")])),_:1}),h(" "+d(a.post.likes),1)]),_:1})])])]),a.post.replies&&a.post.replies.length>0?(o(),l("div",Wa,[e("div",za,d(a.post.replies.length)+" replies ",1),(o(!0),l(C,null,T(a.post.replies,s=>(o(),l("div",{class:"reply",key:s.id},[e("div",Ba,[e("div",Ua,[s.avatarUrl?(o(),y(E,{key:1,size:"48"},{default:i(()=>[n(D,{src:s.avatarUrl,alt:"User avatar"},null,8,["src"])]),_:2},1024)):(o(),y(E,{key:0,size:"48",color:s.avatarColor},{default:i(()=>[e("span",ja,d(s.author.charAt(0)),1)]),_:2},1032,["color"]))]),e("div",Va,[e("div",Ga,d(s.author),1),e("div",Ha,d(s.authorRole),1)])]),e("div",Ya,[(o(!0),l(C,null,T(s.content,(u,g)=>(o(),l("p",{key:g,class:"paragraph"},d(u),1))),128))]),e("div",Ka,[n(A,{variant:"text",density:"comfortable",class:"like-btn"},{default:i(()=>[n(b,{start:""},{default:i(()=>t[5]||(t[5]=[h("mdi-thumb-up-outline")])),_:1}),h(" "+d(s.likes),1)]),_:2},1024)]),e("div",Ja,[s.isAuthor?(o(),y(ce,{key:0,color:"primary",size:"small",class:"author-badge"},{default:i(()=>t[6]||(t[6]=[h(" Author ")])),_:1})):I("",!0),e("span",Qa,d(s.timeAgo),1)])]))),128))])):I("",!0)])]))}},Za=w(Xa,[["__scopeId","data-v-d88e836b"]]),es=[{id:1,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",title:"READ ME: Updates to GPT-4 Turbo",preview:"We're excited to announce several important updates to our GPT-4 Turbo model. These improvements include enhanced reasoning capabilities, better code generation, and reduced hallucinations. We've also expanded the context window to...",content:["We're excited to announce several important updates to our GPT-4 Turbo model. These improvements include enhanced reasoning capabilities, better code generation, and reduced hallucinations. We've also expanded the context window to 128K tokens, allowing for much longer conversations and document processing.","The new model shows a 25% reduction in hallucinations on our internal benchmarks and a 15% improvement in complex reasoning tasks. Code generation has been significantly enhanced, with particular improvements in Python, JavaScript, and SQL generation.","These updates are now live for all users. Please share your feedback and experiences with the improved model in this thread."],likes:42,views:312,comments:18,timeAgo:"2 weeks ago",hasAdminResponse:!1,pinned:!0,replies:[{id:101,author:"Sarah.L",authorRole:"ML Researcher",avatarColor:"#9C27B0",content:["The improvements in reasoning are really noticeable! I've been testing it on some complex math problems, and it's handling multi-step reasoning much better than before. The reduced hallucinations are also a big plus for our research applications."],likes:15,timeAgo:"13 days ago"},{id:102,author:"Thomas.K",authorRole:"Software Developer",avatarColor:"#2196F3",content:["The code generation improvements are fantastic! I've been using it to help with some complex TypeScript refactoring, and the suggestions are much more accurate and idiomatic. The SQL generation in particular seems almost flawless now for the queries I've tested."],likes:12,timeAgo:"12 days ago"},{id:103,author:"Emily.R",authorRole:"Content Strategist",avatarColor:"#8BC34A",content:["I'm loving the expanded context window! Being able to process entire documents at once has been a game-changer for our content analysis workflows. We're seeing much more coherent summaries and analyses when working with long-form content."],likes:9,timeAgo:"10 days ago"},{id:104,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["Thanks for all the positive feedback! We're continuing to fine-tune the model based on your usage patterns and feedback. In the next update, we're focusing on improving multilingual capabilities and specialized domain knowledge in fields like medicine and law."],likes:21,timeAgo:"8 days ago",isAdmin:!0}]},{id:2,author:"Lisa.T",authorRole:"Product Manager",avatarColor:"#FF6B6B",title:"Issues with function calling in complex scenarios",preview:"I've been experiencing some inconsistencies with function calling when dealing with complex nested functions. The model sometimes struggles to properly format the JSON output when there are multiple levels of nesting or when...",content:["I've been experiencing some inconsistencies with function calling when dealing with complex nested functions. The model sometimes struggles to properly format the JSON output when there are multiple levels of nesting or when conditional logic is involved.","For example, when I have a function that requires an array of objects, each with their own nested properties, the model occasionally returns malformed JSON or misses some of the required fields. This seems to happen more frequently when the function schema has optional fields or when there are multiple possible paths based on conditional logic.","Has anyone else encountered similar issues? Any suggestions for improving the reliability of function calling in these complex scenarios?"],likes:18,views:156,comments:7,timeAgo:"1 week ago",hasAdminResponse:!0,pinned:!1,replies:[{id:201,author:"Emily.R",authorRole:"Content Strategist",avatarColor:"#8BC34A",content:["I've run into similar issues! What helped me was breaking down complex functions into smaller, more focused ones. Instead of one big function with lots of nested objects, I now chain several simpler functions together. This seems to work much more reliably."],likes:8,timeAgo:"6 days ago"},{id:202,author:"Walter.W",authorRole:"Senior Developer",avatarColor:"#FF9800",content:['Another approach that works well is to be very explicit in your function descriptions. I found that adding examples of expected outputs directly in the function description significantly improves accuracy. Also, setting `function_call: "none"` for messages where you don\'t want function calling helps prevent unexpected function calls.'],likes:12,timeAgo:"5 days ago"},{id:203,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["Thanks for reporting this issue, Lisa. We're aware of some challenges with complex nested function schemas and are working on improvements. In the upcoming release, we've made significant enhancements to the function calling capabilities, particularly for handling nested objects and arrays. In the meantime, the suggestions from Emily and Walter are excellent workarounds. Breaking complex functions into simpler ones and providing clear examples in your function descriptions can help a lot."],likes:15,timeAgo:"4 days ago",isAdmin:!0}]},{id:3,author:"David.L",authorRole:"Indie Developer",avatarColor:"#2196F3",title:"Token usage optimization strategies",preview:"I'm working on a chatbot application with a limited token budget, and I'm looking for strategies to optimize token usage without sacrificing quality. So far, I've tried truncating conversation history, but this affects the context...",content:["I'm working on a chatbot application with a limited token budget, and I'm looking for strategies to optimize token usage without sacrificing quality. So far, I've tried truncating conversation history, but this affects the context awareness of the model.","I've also experimented with summarizing previous turns, but I'm not sure if this is the most efficient approach. Are there any best practices or techniques that you've found effective for reducing token usage while maintaining conversation quality?","Additionally, I'd be interested in hearing about any tools or libraries that can help with token optimization in production environments."],likes:24,views:203,comments:9,timeAgo:"5 days ago",hasAdminResponse:!0,pinned:!1,replies:[{id:301,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["Great question, David! Here are some strategies we've found effective:","","1. **Conversation summarization**: Instead of keeping the full history, periodically summarize the conversation and include only the summary plus the most recent turns.","","2. **Selective history**: Only keep the most relevant previous messages based on semantic similarity to the current query.","","3. **Tiered models**: Use a smaller, more efficient model for simple queries and only escalate to larger models when needed.","","4. **Prompt compression**: There are techniques to compress prompts while preserving semantic meaning, reducing token count by 20-30% in some cases.","","We're also developing a token optimization library that will be released next month with built-in tools for these approaches."],likes:19,timeAgo:"4 days ago",isAdmin:!0},{id:302,author:"John.A",authorRole:"ML Engineer",avatarColor:"#673AB7",content:["I've had success with a hybrid approach. I keep a running summary of the conversation that gets updated with each turn, plus the last 2-3 message pairs for immediate context. This gives good results while keeping token usage predictable.","","Also, check out the LangChain memory modules - they have several implementations for different memory strategies that are pretty easy to integrate."],likes:11,timeAgo:"3 days ago"},{id:303,author:"Lisa.T",authorRole:"Product Manager",avatarColor:"#FF6B6B",content:["Another approach we've found useful is to use embeddings to create a vector database of conversation history. Then, for each new user message, we retrieve only the most relevant previous exchanges instead of sending the entire history. This has reduced our token usage by about 60% while maintaining context awareness."],likes:14,timeAgo:"2 days ago"}]},{id:4,author:"Michael.B",authorRole:"Content Creator",avatarColor:"#00BCD4",title:"Best practices for creative writing prompts",preview:"I've been using the language model for creative writing assistance, and I'm looking to improve my prompting techniques. What are some strategies you've found effective for getting high-quality creative content? I'm particularly interested in...",content:["I've been using the language model for creative writing assistance, and I'm looking to improve my prompting techniques. What are some strategies you've found effective for getting high-quality creative content? I'm particularly interested in techniques for:","1. Character development and consistent characterization","2. Generating engaging dialogue that feels natural","3. Creating vivid scene descriptions without being overly verbose","4. Maintaining a consistent tone and style throughout longer pieces","If you have any prompt templates or examples that have worked well for creative writing, I'd love to see them!"],likes:31,views:245,comments:12,timeAgo:"1 week ago",hasAdminResponse:!1,pinned:!1,replies:[{id:401,author:"David.L",authorRole:"Indie Developer",avatarColor:"#2196F3",content:["For character development, I've found it helpful to create detailed character sheets first. I ask the model to generate a comprehensive profile including background, motivations, fears, speech patterns, etc. Then I reference this profile in subsequent prompts.","",`For example: "Using the character profile of [Character Name], write a scene where they encounter [situation] and respond in a way that's consistent with their personality."`],likes:18,timeAgo:"6 days ago"},{id:402,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["Great question! We're actually working on a prompt library specifically for creative writing that will be released soon. In the meantime, here's what works well:","","1. For dialogue: Specify the emotional subtext and relationship between characters, not just what they're talking about.","","2. For scene descriptions: Ask for sensory details across multiple senses (not just visual), and specify the mood/atmosphere you want to convey.","",'3. For consistency: Use the "writing in the style of" technique with examples of your desired style, or even passages from earlier in your work.'],likes:22,timeAgo:"5 days ago"},{id:403,author:"Robert.J",authorRole:"Fiction Writer",avatarColor:"#E91E63",content:[`One technique that's worked wonders for me is "layered prompting" - start with a basic scene, then iteratively enhance specific aspects:`,"","1. First, get a basic scene outline","2. Then ask to enhance the dialogue, giving specific direction","3. Then ask to enrich the sensory details","4. Finally, ask to adjust the pacing/tension","","This step-by-step approach gives you much more control than trying to get everything perfect in one prompt."],likes:16,timeAgo:"4 days ago"}]},{id:5,author:"Emma.D",authorRole:"Data Scientist",avatarColor:"#8BC34A",title:"Fine-tuning experiences and best practices",preview:"Has anyone here experimented with fine-tuning the models for specific use cases? I'm considering fine-tuning for a specialized customer support application, and I'd love to hear about your experiences, particularly regarding...",content:["Has anyone here experimented with fine-tuning the models for specific use cases? I'm considering fine-tuning for a specialized customer support application, and I'd love to hear about your experiences, particularly regarding:","1. How much training data is actually needed for good results?","2. Strategies for preparing and cleaning training data","3. Evaluating the performance improvements compared to prompt engineering alone","4. Cost-benefit analysis of fine-tuning vs. other approaches","Any insights or lessons learned would be greatly appreciated!"],likes:27,views:198,comments:8,timeAgo:"3 days ago",hasAdminResponse:!0,pinned:!1,replies:[{id:501,author:"Alex.P",authorRole:"ML Operations Engineer",avatarColor:"#FF5722",content:["We fine-tuned a model for our technical support team, and here's what we learned:","","1. Data quantity: We started with about 500 examples and saw decent improvements, but scaling to 2,000 examples made a significant difference. Quality matters more than quantity though.","","2. Data preparation: Consistency is key. We standardized all our examples to follow the same format and carefully reviewed them for accuracy. We also made sure to include a diverse range of scenarios.","","3. Performance: The fine-tuned model reduced the need for human intervention by about 35% compared to our best prompt engineering efforts.","","4. ROI: It was definitely worth it for us. The initial investment in data preparation and training was recouped within about 2 months through increased efficiency."],likes:19,timeAgo:"2 days ago"},{id:502,author:"Sarah.L",authorRole:"ML Researcher",avatarColor:"#9C27B0",content:["One thing I'd add to Alex's excellent response is the importance of continuous evaluation and refinement. We set up a feedback loop where our support agents could flag responses that weren't quite right, which gave us data for the next round of fine-tuning.","","Also, consider a hybrid approach: we fine-tuned a base model for our domain knowledge, but still use prompt engineering on top of that for specific types of queries. This gives us the best of both worlds."],likes:14,timeAgo:"1 day ago"},{id:503,author:"Max.M",authorRole:"Creative Technologist, Development Team",avatarUrl:"/assets/mock/general/davidezin_Cinematic_portrait_photo_of_A_male_model_stands_with__1a662122-314e-4221-a90f-54818a0563fb (1).png",content:["Great question, Emma! In addition to the excellent advice already shared, I'd like to mention our new fine-tuning evaluation tools that can help you measure improvements more objectively.","","For customer support specifically, we've found that 1,000-3,000 examples is the sweet spot for most applications. Focus on covering edge cases and the most common scenarios thoroughly rather than trying to cover everything.","",`We're also developing a new "few-shot fine-tuning" capability that will allow for more efficient tuning with smaller datasets, which should be available in the next quarter.`],likes:21,timeAgo:"1 day ago",isAdmin:!0}]},{id:6,author:"Thomas.K",authorRole:"Software Developer",avatarColor:"#2196F3",title:"Implementing effective RAG systems",preview:"I'm working on implementing a Retrieval-Augmented Generation (RAG) system to ground our LLM responses in our company's documentation. I've set up a basic vector database with our docs, but I'm running into challenges with...",content:["I'm working on implementing a Retrieval-Augmented Generation (RAG) system to ground our LLM responses in our company's documentation. I've set up a basic vector database with our docs, but I'm running into challenges with:","1. Determining the optimal chunk size for documents","2. Handling retrieval for queries that should match multiple disconnected sections","3. Balancing between retrieval precision and recall","4. Effectively incorporating the retrieved context into prompts without hitting token limits","If anyone has successfully implemented RAG systems in production, I'd love to hear about your architecture and any lessons learned along the way."],likes:35,views:267,comments:14,timeAgo:"4 days ago",hasAdminResponse:!1,pinned:!1,replies:[{id:601,author:"Michael.B",authorRole:"Content Creator",avatarColor:"#00BCD4",content:["We implemented RAG for our knowledge base and found that chunk size really depends on your content. For technical documentation with distinct sections, we use smaller chunks (150-250 tokens). For narrative content, larger chunks (400-500 tokens) work better to preserve context.","","For multi-section queries, we retrieve more chunks than needed (top-k where k=5-7) and then use a re-ranking step based on relevance to the specific query. This helps catch related information that might be spread across the document."],likes:16,timeAgo:"3 days ago"},{id:602,author:"Emma.D",authorRole:"Data Scientist",avatarColor:"#8BC34A",content:[`For incorporating context efficiently, we've had success with a "tiered context" approach:`,"","1. We include the most relevant chunks verbatim","2. We include summaries of moderately relevant chunks","3. We include just the titles/references to less relevant chunks","","This way, the model has detailed information about the most important parts, while still being aware of other potentially relevant information without using too many tokens."],likes:21,timeAgo:"2 days ago"},{id:603,author:"Jared.R",authorRole:"AI Solutions Architect",avatarColor:"#795548",content:["One architecture that's worked well for us is a hybrid retrieval system:","","1. We use BM25 (keyword-based) for high precision","2. We use embedding similarity for high recall","3. We combine the results with a weighted approach","","This helps catch both semantic matches and exact terminology matches. We also maintain metadata with each chunk (source, date, author, etc.) and include that in the prompt to help the model evaluate the credibility and relevance of different sources.","",'For chunking, we use a hierarchical approach - we create both fine-grained chunks and larger "parent" chunks that contain multiple smaller ones. This gives us flexibility at query time.'],likes:24,timeAgo:"1 day ago"}]}],ts={class:"forums-section"},as={key:0,class:"forums-container"},ss={class:"forum-topics-list"},os={__name:"ForumsSection",setup(a){const r=x(es),t=x(null),s=k(()=>t.value?r.value.find(c=>c.id===t.value):null),u=c=>{t.value=c},g=()=>{t.value=null};return(c,v)=>(o(),l("div",ts,[n(G,{mode:"out-in"},{default:i(()=>[t.value?(o(),y(Za,{key:1,post:s.value,onBack:g},null,8,["post"])):(o(),l("div",as,[n(oa,{title:"sdxl turbo",articleCount:197}),e("div",ss,[(o(!0),l(C,null,T(r.value,m=>(o(),y(ya,{key:m.id,topic:m,onClick:u},null,8,["topic"]))),128))])]))]),_:1})]))}},ns=w(os,[["__scopeId","data-v-bc10aff4"]]),F=[{id:"getting-started",title:"Getting Started",items:[{id:"introduction",title:"Introduction",content:[{type:"paragraph",text:"The Language Model API provides programmatic access to our state-of-the-art large language models. This documentation will help you integrate our API into your applications, allowing you to generate text, answer questions, and create conversational experiences with simple API calls."},{type:"paragraph",text:"Our API is designed to be easy to use while providing powerful capabilities for text generation, summarization, translation, and more. Whether you're building a chatbot, content platform, or integrating AI-generated text into your application, our API provides the flexibility and performance you need."}]},{id:"authentication",title:"Authentication",content:[{type:"paragraph",text:"All API requests require authentication using an API key. You can obtain your API key from the dashboard after signing up for an account."},{type:"code",language:"javascript",text:`// Example of authenticating with the API
const axios = require('axios');

// Your API key from the dashboard
const API_KEY = 'your_api_key_here';

// Create an axios instance with default headers
const api = axios.create({
  baseURL: 'https://api.languagemodel.ai/v1',
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

// Now you can use this instance for all API calls
// Example:
async function testConnection() {
  try {
    const response = await api.get('/models');
    console.log('Connection successful!', response.data);
  } catch (error) {
    console.error('Authentication failed:', error.response?.data || error.message);
  }
}

testConnection();`},{type:"paragraph",text:"Keep your API key secure and never expose it in client-side code. If you believe your API key has been compromised, you can regenerate it from the dashboard."}]},{id:"rate-limits",title:"Rate Limits",content:[{type:"paragraph",text:"To ensure fair usage and system stability, we implement rate limits on API requests. The limits vary based on your subscription tier."},{type:"list",items:["Free tier: 100 requests per day, max 10 requests per minute","Basic tier: 1,000 requests per day, max 30 requests per minute","Pro tier: 10,000 requests per day, max 100 requests per minute","Enterprise tier: Custom limits based on your needs"]},{type:"paragraph",text:"If you exceed your rate limit, the API will return a 429 Too Many Requests response. We recommend implementing exponential backoff in your client to handle rate limiting gracefully."},{type:"code",language:"javascript",text:`// Example of handling rate limits with exponential backoff
async function makeRequestWithRetry(endpoint, data, maxRetries = 5) {
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      return await api.post(endpoint, data);
    } catch (error) {
      if (error.response?.status === 429) {
        // Rate limited, implement exponential backoff
        const delay = Math.pow(2, retries) * 1000 + Math.random() * 1000;
        console.log(\`Rate limited. Retrying in \${delay}ms...\`);
        await new Promise(resolve => setTimeout(resolve, delay));
        retries++;
      } else {
        // Different error, don't retry
        throw error;
      }
    }
  }
  
  throw new Error('Max retries exceeded');
}`}]}]},{id:"core-endpoints",title:"Core Endpoints",items:[{id:"text-generation",title:"Text Generation",content:[{type:"paragraph",text:"The text generation endpoint allows you to generate text based on a prompt. This is the most commonly used endpoint for creating AI-generated content."},{type:"code",language:"javascript",text:`// Example of generating text from a prompt
const generateText = async (prompt, options = {}) => {
  try {
    const response = await api.post('/generate/text', {
      prompt,
      model: options.model || 'gpt-4-turbo',
      max_tokens: options.maxTokens || 500,
      temperature: options.temperature || 0.7,
      top_p: options.topP || 1.0,
      frequency_penalty: options.frequencyPenalty || 0,
      presence_penalty: options.presencePenalty || 0,
      stop: options.stop || null
    });
    
    return response.data;
  } catch (error) {
    console.error('Text generation failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    const result = await generateText(
      'Write a short story about a robot learning to paint',
      {
        model: 'gpt-4-turbo',
        maxTokens: 1000,
        temperature: 0.8
      }
    );
    
    console.log('Generated text:', result.text);
    console.log('Generation ID:', result.generation_id);
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"The temperature parameter controls the randomness of the generated text. Higher values (e.g., 0.8) make the output more random, while lower values (e.g., 0.2) make it more focused and deterministic."}]},{id:"chat-completion",title:"Chat Completion",content:[{type:"paragraph",text:"The chat completion endpoint allows you to create conversational experiences by maintaining a history of messages between the user and the AI assistant."},{type:"code",language:"javascript",text:`// Example of creating a chat conversation
const chatCompletion = async (messages, options = {}) => {
  try {
    const response = await api.post('/chat/completions', {
      messages,
      model: options.model || 'gpt-4-turbo',
      max_tokens: options.maxTokens || 500,
      temperature: options.temperature || 0.7,
      top_p: options.topP || 1.0,
      frequency_penalty: options.frequencyPenalty || 0,
      presence_penalty: options.presencePenalty || 0
    });
    
    return response.data;
  } catch (error) {
    console.error('Chat completion failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    // Define the conversation history
    const messages = [
      { role: 'system', content: 'You are a helpful assistant that specializes in explaining complex topics simply.' },
      { role: 'user', content: 'Can you explain quantum computing to me?' }
    ];
    
    const result = await chatCompletion(messages, {
      model: 'gpt-4-turbo',
      maxTokens: 800
    });
    
    // Get the assistant's response
    const assistantResponse = result.choices[0].message;
    console.log('Assistant:', assistantResponse.content);
    
    // Continue the conversation
    messages.push(assistantResponse);
    messages.push({ role: 'user', content: 'What are some practical applications of quantum computing?' });
    
    const followUpResult = await chatCompletion(messages);
    console.log('Assistant:', followUpResult.choices[0].message.content);
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"The chat completion endpoint is ideal for building chatbots, virtual assistants, and other conversational applications. By maintaining the conversation history, the model can provide contextually relevant responses."}]},{id:"embeddings",title:"Embeddings",content:[{type:"paragraph",text:"The embeddings endpoint allows you to convert text into vector representations that capture semantic meaning. These embeddings can be used for semantic search, clustering, classification, and other natural language processing tasks."},{type:"code",language:"javascript",text:`// Example of generating embeddings for text
const getEmbeddings = async (texts, options = {}) => {
  try {
    const response = await api.post('/embeddings', {
      input: Array.isArray(texts) ? texts : [texts],
      model: options.model || 'text-embedding-ada-002'
    });
    
    return response.data;
  } catch (error) {
    console.error('Embedding generation failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    const texts = [
      'The quick brown fox jumps over the lazy dog',
      'Machine learning is a subset of artificial intelligence'
    ];
    
    const result = await getEmbeddings(texts);
    
    console.log('Number of embeddings:', result.data.length);
    console.log('Embedding dimensions:', result.data[0].embedding.length);
    
    // Example: Calculate cosine similarity between two embeddings
    const cosineSimilarity = (a, b) => {
      const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
      const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
      const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
      return dotProduct / (magnitudeA * magnitudeB);
    };
    
    const similarity = cosineSimilarity(
      result.data[0].embedding,
      result.data[1].embedding
    );
    
    console.log('Similarity between texts:', similarity);
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"Embeddings are particularly useful for building semantic search systems, recommendation engines, and other applications that require understanding the meaning and relationships between texts."}]}]},{id:"advanced-features",title:"Advanced Features",items:[{id:"function-calling",title:"Function Calling",content:[{type:"paragraph",text:"Function calling allows the model to generate structured data that can be used to call functions in your application. This is useful for building AI assistants that can take actions on behalf of users."},{type:"code",language:"javascript",text:`// Example of using function calling
const functionCalling = async (messages, functions, options = {}) => {
  try {
    const response = await api.post('/chat/completions', {
      messages,
      model: options.model || 'gpt-4-turbo',
      functions,
      function_call: options.functionCall || 'auto',
      temperature: options.temperature || 0.7
    });
    
    return response.data;
  } catch (error) {
    console.error('Function calling failed:', error.response?.data || error.message);
    throw error;
  }
};

// Define available functions
const functions = [
  {
    name: 'get_weather',
    description: 'Get the current weather in a given location',
    parameters: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'The city and state, e.g. San Francisco, CA'
        },
        unit: {
          type: 'string',
          enum: ['celsius', 'fahrenheit'],
          description: 'The temperature unit to use'
        }
      },
      required: ['location']
    }
  }
];

// Mock function to get weather data
const getWeather = async (location, unit = 'celsius') => {
  // In a real app, this would call a weather API
  console.log(\`Getting weather for \${location} in \${unit}\`);
  return {
    location,
    temperature: unit === 'celsius' ? 22 : 72,
    unit,
    condition: 'Sunny',
    humidity: 45
  };
};

// Usage example
async function main() {
  try {
    const messages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'What's the weather like in San Francisco?' }
    ];
    
    const result = await functionCalling(messages, functions);
    const message = result.choices[0].message;
    
    if (message.function_call) {
      const functionName = message.function_call.name;
      const functionArgs = JSON.parse(message.function_call.arguments);
      
      console.log(\`Function call: \${functionName}\`);
      console.log('Arguments:', functionArgs);
      
      if (functionName === 'get_weather') {
        const weatherData = await getWeather(
          functionArgs.location,
          functionArgs.unit || 'celsius'
        );
        
        // Add the function response to the conversation
        messages.push(message);
        messages.push({
          role: 'function',
          name: 'get_weather',
          content: JSON.stringify(weatherData)
        });
        
        // Get the final response
        const finalResult = await chatCompletion(messages);
        console.log('Assistant:', finalResult.choices[0].message.content);
      }
    } else {
      console.log('Assistant:', message.content);
    }
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"Function calling enables you to build AI assistants that can interact with external systems, retrieve information, and perform actions based on user requests. This creates a more powerful and useful experience for your users."}]},{id:"fine-tuning",title:"Fine-Tuning",content:[{type:"paragraph",text:"Fine-tuning allows you to customize our language models for your specific use case by training them on your own data. This can improve performance on domain-specific tasks and help the model better understand your organization's terminology and style."},{type:"code",language:"javascript",text:`// Example of creating a fine-tuning job
const createFineTuningJob = async (trainingFile, options = {}) => {
  try {
    const response = await api.post('/fine-tuning/jobs', {
      training_file: trainingFile,
      model: options.model || 'gpt-3.5-turbo',
      hyperparameters: {
        n_epochs: options.epochs || 3,
        batch_size: options.batchSize || 'auto',
        learning_rate_multiplier: options.learningRateMultiplier || 'auto'
      },
      suffix: options.suffix || null
    });
    
    return response.data;
  } catch (error) {
    console.error('Fine-tuning job creation failed:', error.response?.data || error.message);
    throw error;
  }
};

// Example of uploading a training file
const uploadTrainingFile = async (filePath) => {
  try {
    const fs = require('fs');
    const FormData = require('form-data');
    
    const formData = new FormData();
    formData.append('purpose', 'fine-tune');
    formData.append('file', fs.createReadStream(filePath));
    
    const response = await api.post('/files', formData, {
      headers: {
        ...api.defaults.headers,
        'Content-Type': \`multipart/form-data; boundary=\${formData._boundary}\`
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('File upload failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    // Upload training data
    const file = await uploadTrainingFile('./training_data.jsonl');
    console.log('File uploaded:', file.id);
    
    // Create fine-tuning job
    const job = await createFineTuningJob(file.id, {
      model: 'gpt-3.5-turbo',
      epochs: 4,
      suffix: 'customer-support'
    });
    
    console.log('Fine-tuning job created:', job.id);
    console.log('Status:', job.status);
    
    // In a real application, you would poll for job status
    // until it's complete
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"Fine-tuning is particularly useful for customer support, content generation with a specific style, domain-specific Q&A, and other applications where you want the model to learn from examples of your desired output format and content."}]},{id:"batch-processing",title:"Batch Processing",content:[{type:"paragraph",text:"For high-volume text processing, you can use our batch processing endpoint to generate responses for multiple prompts in a single request. This is more efficient than making separate requests for each prompt."},{type:"code",language:"javascript",text:`// Example of batch processing multiple prompts
const batchProcess = async (prompts, options = {}) => {
  try {
    const response = await api.post('/batch/completions', {
      prompts,
      model: options.model || 'gpt-4-turbo',
      max_tokens: options.maxTokens || 500,
      temperature: options.temperature || 0.7
    });
    
    return response.data;
  } catch (error) {
    console.error('Batch processing failed:', error.response?.data || error.message);
    throw error;
  }
};

// Usage example
async function main() {
  try {
    const prompts = [
      'Write a short poem about the ocean',
      'Explain how photosynthesis works in simple terms',
      'List 5 tips for effective time management',
      'Describe the process of making sourdough bread'
    ];
    
    const result = await batchProcess(prompts, {
      maxTokens: 300,
      temperature: 0.8
    });
    
    console.log('Batch results:', result.completions);
    console.log('Batch ID:', result.batch_id);
    
    // Process each completion
    result.completions.forEach((completion, index) => {
      console.log(\`Prompt \${index + 1}: \${prompts[index]}\`);
      console.log(\`Response: \${completion.text}\`);
      console.log('---');
    });
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();`},{type:"paragraph",text:"Batch processing is ideal for scenarios where you need to generate multiple responses in parallel, such as processing a dataset, generating content for multiple topics, or analyzing multiple text samples."}]}]},{id:"resources",title:"Resources",items:[{id:"sdks-libraries",title:"SDKs & Libraries",content:[{type:"paragraph",text:"We provide official SDKs for several programming languages to make integration easier. These SDKs handle authentication, error handling, and provide typed interfaces for all API endpoints."},{type:"list",items:["Node.js SDK: npm install language-model-api","Python SDK: pip install language-model-api","PHP SDK: composer require language-model/api-client","Ruby SDK: gem install language-model-api","Java SDK: Available on Maven Central"]},{type:"code",language:"javascript",text:`// Example using the official Node.js SDK
const LanguageModel = require('language-model-api');

// Initialize the client
const client = new LanguageModel.Client('your_api_key_here');

// Generate text
async function generateWithSdk() {
  try {
    const result = await client.generateText({
      prompt: 'Write a short story about a time traveler',
      model: 'gpt-4-turbo',
      maxTokens: 1000,
      temperature: 0.8
    });
    
    console.log('Generated text:', result.text);
    return result;
  } catch (error) {
    if (error instanceof LanguageModel.RateLimitError) {
      console.error('Rate limit exceeded, try again later');
    } else if (error instanceof LanguageModel.AuthenticationError) {
      console.error('Invalid API key');
    } else {
      console.error('Generation failed:', error.message);
    }
    throw error;
  }
}

generateWithSdk();`},{type:"paragraph",text:"Our SDKs are open source and available on GitHub. We welcome contributions from the community to improve and extend these libraries."}]},{id:"examples-tutorials",title:"Examples & Tutorials",content:[{type:"paragraph",text:"We provide a variety of examples and tutorials to help you get started with our API. These cover common use cases and integration patterns."},{type:"list",items:["Building a chatbot with memory","Creating a content generation system","Implementing a question-answering service","Setting up a semantic search system with embeddings","Integrating with content management systems"]},{type:"paragraph",text:"You can find these examples in our GitHub repository: github.com/language-model/api-examples"},{type:"code",language:"javascript",text:`// Example of a simple Express.js chatbot
const express = require('express');
const LanguageModel = require('language-model-api');
const app = express();

// Initialize the Language Model client
const client = new LanguageModel.Client(process.env.API_KEY);

// Store conversations (in a real app, use a database)
const conversations = new Map();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Serve the chat interface
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle chat messages
app.post('/chat', async (req, res) => {
  try {
    const { message, conversationId } = req.body;
    
    // Get or create conversation history
    let messages = [];
    if (conversationId && conversations.has(conversationId)) {
      messages = conversations.get(conversationId);
    } else {
      // Initialize with system message
      messages = [
        { role: 'system', content: 'You are a helpful, friendly assistant.' }
      ];
    }
    
    // Add user message
    messages.push({ role: 'user', content: message });
    
    // Get response from API
    const result = await client.createChatCompletion({
      messages,
      model: 'gpt-4-turbo',
      maxTokens: 500
    });
    
    // Add assistant response to history
    const assistantMessage = result.choices[0].message;
    messages.push(assistantMessage);
    
    // Store updated conversation (limit history to last 20 messages)
    const newConversationId = conversationId || Date.now().toString();
    conversations.set(newConversationId, messages.slice(-20));
    
    // Return response
    res.json({
      conversationId: newConversationId,
      message: assistantMessage.content
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Failed to process message', 
      message: error.message 
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Chatbot server running on port \${PORT}\`);
});`}]},{id:"support",title:"Support",content:[{type:"paragraph",text:"If you need help with our API, there are several support channels available:"},{type:"list",items:["Documentation: comprehensive guides and reference","Community Forum: connect with other developers","GitHub Issues: report bugs or request features","Email Support: contact our team directly","Discord Community: real-time chat with our team and community"]},{type:"paragraph",text:"For enterprise customers, we offer dedicated support with guaranteed response times and access to our engineering team."}]}]}],is=a=>{for(const r of F)for(const t of r.items)if(t.id===a)return t;return F[0].items[0]},rs={class:"api-section"},ls={class:"api-container"},cs={__name:"ApiSection",setup(a){const r=x(F),t=x("introduction"),s=k(()=>is(t.value));return(u,g)=>(o(),l("div",rs,[e("div",ls,[n(Y,{class:"nav-panel",sections:r.value,selected:t.value,"onUpdate:selected":g[0]||(g[0]=c=>t.value=c)},null,8,["sections","selected"]),n(K,{class:"content-area",doc:s.value},null,8,["doc"])])]))}},ds=w(cs,[["__scopeId","data-v-cfd373a8"]]),us={class:"generate-view-wrapper"},ps={class:"nav-slider-container"},ms={class:"content-container"},hs={__name:"GenerateView",setup(a){const r=x("run"),t=k(()=>{switch(r.value){case"run":return z;case"docs":return Jt;case"forums":return ns;case"api":return ds;default:return z}});return(s,u)=>(o(),l("div",us,[e("div",ps,[n(pe,{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=g=>r.value=g)},null,8,["modelValue"])]),e("div",ms,[n(G,{mode:"out-in",duration:100},{default:i(()=>[(o(),y(re(t.value),{key:r.value,class:"section-component"}))]),_:1})])]))}},vs=w(hs,[["__scopeId","data-v-67b9e297"]]);export{vs as default};
