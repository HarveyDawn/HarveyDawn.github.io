if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const n=e=>d(e,a),o={module:{uri:a},exports:s,require:n};i[a]=Promise.all(r.map((e=>o[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f7ce1e71e9c9b7c702af0762eb5a06a3"},{url:"about/index.html",revision:"b5b40d193f3f9d3c89fb1c7547beec52"},{url:"archives/2022/02/index.html",revision:"aec8d095230f2ef4b161ca8b2e27644c"},{url:"archives/2022/03/index.html",revision:"a067542d1ada8441c294a95a9d90ae14"},{url:"archives/2022/index.html",revision:"d4d8e623a5ac084cf3af11541e3583a4"},{url:"archives/index.html",revision:"a2ac0689ffe32bc9ce325ca0e55dc0a9"},{url:"categories/Hexo/index.html",revision:"a34c59dd40ede6d20bf4de03c820dd2b"},{url:"categories/index.html",revision:"95a518b112d3fa7da841f0af3d9aa639"},{url:"categories/markdown/index.html",revision:"7e1bb9933d6dcfe3d7f7d717c0f2577a"},{url:"css/index.css",revision:"93a3602d3e96a7706b8002c3792b311e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/cyberpunk_bg_1.jpg",revision:"84416a001cd486b160b57805e230f836"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/IMG_logo.jpg",revision:"008b2bf015ba2216973d7979f01e0db9"},{url:"index.html",revision:"1e93ee7aea3e555aabc0cd2df0d49d94"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"5747fdb4acb2feb070884d3f80b5d5d8"},{url:"message-board/index.html",revision:"36162025dd85e60c312e2aecf106f590"},{url:"post/hello-world.html",revision:"ff55a468a5004cb91e85d6959f047883"},{url:"post/hexo-blog-github.html",revision:"da524cfe5e49a16f928d0d84b2530d97"},{url:"post/markdown-exercises.html",revision:"8b3401173caa5d6787cb250df30ba6cd"},{url:"tags/Blog/index.html",revision:"a8ed788b69d9052be76fcd19276f4f23"},{url:"tags/Hexo/index.html",revision:"f63c15ebeac8d70a2c738d0f4a9459be"},{url:"tags/index.html",revision:"3bbf89dd94cab23fef9afb64a78d3e47"},{url:"tags/markdown/index.html",revision:"2f4cdb4e467dbd86401654fbbc309302"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
