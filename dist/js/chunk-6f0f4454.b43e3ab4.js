(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f0f4454"],{"06d0":function(e,t,a){"use strict";a("a4d3"),a("e01a");var i=a("7a23"),r={class:"relative"},o={class:"absolute inset-0"},s={class:"py-8 md:py-0"},n=Object(i["k"])("h3",{class:"support-text"},"Sanford Outdoor",-1),c={class:"text-4xl text-white sm:text-5xl capitalize lg:text-6xl"},u={key:0,class:"mt-6 text-xl text-indigo-100 max-w-3xl"};function l(e,t,a,l,d,m){var b=Object(i["B"])("Container");return Object(i["v"])(),Object(i["g"])("div",r,[Object(i["k"])("div",o,[Object(i["k"])("img",{class:"w-full h-full object-cover",src:m.imageSrc,alt:""},null,8,["src"])]),Object(i["k"])(b,null,{default:Object(i["I"])((function(){return[Object(i["k"])("div",s,[n,Object(i["k"])("h1",c,Object(i["D"])(a.title),1),a.description?(Object(i["v"])(),Object(i["g"])("p",u,Object(i["D"])(a.description),1)):Object(i["h"])("",!0)])]})),_:1})])}var d=a("802e"),m={components:{Container:d["a"]},name:"Header",props:{title:String,description:String},computed:{imageSrc:function(){switch(this.$route.path){case"/about":return"/sanford-outdoor-website/banner/about-banner.png";case"/blog":return"/sanford-outdoor-website/banner/blog-banner.png";case"/boards":return"/sanford-outdoor-website/banner/boards-banner.png";case"/contact":return"/sanford-outdoor-website/banner/contact-banner.png";case"/history":return"/sanford-outdoor-website/banner/history-banner.png";case"/news":return"/sanford-outdoor-website/banner/news-banner.png";case"/team":return"/sanford-outdoor-website/banner/team-banner.png";default:return"/sanford-outdoor-website/banner/about-banner.png"}}}};m.render=l;t["a"]=m},"3c77":function(e,t,a){"use strict";a.r(t);var i=a("7a23"),r=Object(i["k"])("h1",null,"News Headline",-1),o=Object(i["k"])("div",{class:"text-white my-6"},[Object(i["j"])(" Bill Board "),Object(i["k"])("span",{class:"ml-4 text-grey"},"Mar 3, 2022 · 6 min read")],-1),s=Object(i["k"])("article",null,[Object(i["k"])("p",null,[Object(i["j"])(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum quas, excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias recusandae totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis id reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet! Commodi facilis tempora laudantium molestias voluptates labore in! "),Object(i["k"])("br"),Object(i["k"])("br"),Object(i["j"])(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum quas, excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias recusandae totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis id reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet! Commodi facilis tempora laudantium molestias voluptates labore in! ")])],-1),n={class:"flex items-center justify-between text-grey mt-12"},c=Object(i["j"])(" PREVIOUS "),u=Object(i["j"])(" NEXT ");function l(e,t,a,l,d,m){var b=Object(i["B"])("ArrowNarrowLeftIcon"),p=Object(i["B"])("router-link"),f=Object(i["B"])("ArrowNarrowRightIcon"),j=Object(i["B"])("Container");return Object(i["v"])(),Object(i["g"])(j,null,{default:Object(i["I"])((function(){return[r,o,s,Object(i["k"])("div",n,[Object(i["k"])(p,{to:"#",class:"uppercase tracking-wider text-sm flex items-center hover:text-accent"},{default:Object(i["I"])((function(){return[Object(i["k"])(b,{class:"w-4 h-4 mr-2"}),c]})),_:1}),Object(i["k"])(p,{to:"#",class:"uppercase tracking-wider text-sm flex items-center hover:text-accent"},{default:Object(i["I"])((function(){return[u,Object(i["k"])(f,{class:"w-4 h-4 ml-2"})]})),_:1})])]})),_:1})}a("7db0");var d=a("802e"),m=a("06d0"),b=a("ae08"),p=a("b0ea"),f=a("9510"),j={components:{Header:m["a"],BlogContent:b["a"],Container:d["a"],ArrowNarrowRightIcon:f["b"],ArrowNarrowLeftIcon:f["a"]},data:function(){var e=this;return{posts:p["c"],item:p["c"].find((function(t){return t.id===e.$route.params.news_id}))}},watch:{$route:function(){var e=this;this.item=p["c"].find((function(t){return t.id===e.$route.params.news_id}))}}};j.render=l;t["default"]=j},"7db0":function(e,t,a){"use strict";var i=a("23e7"),r=a("b727").find,o=a("44d2"),s="find",n=!0;s in[]&&Array(1)[s]((function(){n=!1})),i({target:"Array",proto:!0,forced:n},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},"802e":function(e,t,a){"use strict";var i=a("7a23"),r={class:"max-w-full lg:max-w-7xl lg:mx-auto"},o={class:"relative md:p-6 w-full"};function s(e,t,a,s,n,c){return Object(i["v"])(),Object(i["g"])("section",{class:[n.additionalClasses,"py-8 md:py-24 px-4 sm:px-6 lg:px-8"]},[Object(i["k"])("div",r,[Object(i["k"])("div",o,[Object(i["A"])(e.$slots,"default")])])],2)}var n={name:"Container",data:function(){return{additionalClasses:this.full&&"min-h-screen"}},props:{full:{type:Boolean,default:!1}}};n.render=s;t["a"]=n},ae08:function(e,t,a){"use strict";a("b0c0");var i=a("7a23"),r=Object(i["k"])("div",{class:"h-80 w-full bg-accent-lightest rounded-md mb-5"},null,-1),o={class:"mb-3"},s={class:"flex items-center mb-6"},n={class:"w-8 h-8 rounded-full overflow-hidden mr-2"},c={class:"font-medium text-sm"},u={class:"text-sm"},l=Object(i["k"])("span",{class:"mx-1"},"·",-1),d=Object(i["k"])("p",null,[Object(i["j"])(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum quas, excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias recusandae totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis id reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet! Commodi facilis tempora laudantium molestias voluptates labore in! "),Object(i["k"])("br"),Object(i["k"])("br"),Object(i["j"])(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum quas, excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias recusandae totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis id reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet! Commodi facilis tempora laudantium molestias voluptates labore in! ")],-1),m={class:"flex items-center justify-between text-grey mt-12"},b=Object(i["j"])(" PREVIOUS "),p=Object(i["j"])(" NEXT ");function f(e,t,a,f,j,O){var v=Object(i["B"])("ArrowNarrowLeftIcon"),g=Object(i["B"])("router-link"),h=Object(i["B"])("ArrowNarrowRightIcon"),q=Object(i["B"])("Container");return Object(i["v"])(),Object(i["g"])(q,null,{default:Object(i["I"])((function(){return[r,Object(i["k"])("h2",o,Object(i["D"])(a.post.title),1),Object(i["k"])("div",s,[Object(i["k"])("div",n,[Object(i["k"])("img",{src:a.post.author.imageUrl,alt:""},null,8,["src"])]),Object(i["k"])("div",null,[Object(i["k"])("p",c,Object(i["D"])(a.post.author.name),1),Object(i["k"])("p",u,[Object(i["j"])(Object(i["D"])(a.post.date),1),l,Object(i["j"])(Object(i["D"])(a.post.readingTime),1)])])]),d,Object(i["k"])("div",m,[Object(i["k"])(g,{to:"#",class:"uppercase tracking-wider text-sm flex items-center hover:text-accent"},{default:Object(i["I"])((function(){return[Object(i["k"])(v,{class:"w-4 h-4 mr-2"}),b]})),_:1}),Object(i["k"])(g,{to:"#",class:"uppercase tracking-wider text-sm flex items-center hover:text-accent"},{default:Object(i["I"])((function(){return[p,Object(i["k"])(h,{class:"w-4 h-4 ml-2"})]})),_:1})])]})),_:1})}var j=a("802e"),O=a("9510"),v={title:"Blog Title Headline",href:"/blog/details",category:{name:"Article",href:"/blog/details",color:"bg-indigo-100 text-indigo-800"},description:"Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",date:"Mar 16, 2020",datetime:"2020-03-16",author:{name:"Paul York",href:"/blog/details",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},readingTime:"6 min"},g={components:{Container:j["a"],ArrowNarrowRightIcon:O["b"],ArrowNarrowLeftIcon:O["a"]},props:{post:{type:Object,default:v}}};g.render=f;t["a"]=g}}]);
//# sourceMappingURL=chunk-6f0f4454.b43e3ab4.js.map