(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{29:function(e,a,s){},37:function(e,a,s){},38:function(e,a,s){},44:function(e,a,s){},45:function(e,a,s){},64:function(e,a,s){},65:function(e,a,s){},66:function(e,a,s){},67:function(e,a,s){},68:function(e,a,s){},69:function(e,a,s){},70:function(e,a,s){},71:function(e,a,s){},72:function(e,a,s){"use strict";s.r(a);var c=s(0),t=s(1),i=s.n(t),n=s(30),l=s.n(n),r=(s(37),s(4)),j=s(2),d=s.p+"static/media/logo.63d7515c.png",o=s.p+"static/media/1.e76b2a8f.jpeg",m=s.p+"static/media/2.70318cd6.jpeg",u=s.p+"static/media/3.c92f463c.jpeg",b=s.p+"static/media/4.89273c30.jpeg",h=s.p+"static/media/s1.c6b07bda.jpeg",O=s.p+"static/media/s2.df2db229.jpeg",x=s.p+"static/media/s3.ae7df846.jpeg",p=s.p+"static/media/fb.7f1edf03.svg",g=s.p+"static/media/ig.a31b2bcd.svg",N=s.p+"static/media/in.8861cb0e.svg",f=s.p+"static/media/tele.9384e9b0.svg",v=s.p+"static/media/panjang.ae5536de.jpeg",k=s.p+"static/media/polo.8118c98e.jpeg",y=s.p+"static/media/hoodie.9fd45d01.jpeg",C=s.p+"static/media/oversize.65b4596e.jpeg",w=s.p+"static/media/foot-profile.a1c1ab2c.jpeg",R=(s(38),function(){var e=Object(j.f)();return Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("div",{className:"top",children:[Object(c.jsx)("img",{className:"logo",src:d,alt:"DIVERGENT"}),Object(c.jsx)("p",{className:"logo-tit",onClick:function(){return e.push("/")},children:"DIVERGENT.CO"})]})})}),P=(s(44),function(e){var a=e.img;return Object(c.jsx)("div",{className:"icon-wrapper",children:Object(c.jsx)("img",{className:"icon-medsos",src:a,alt:"icon"})})}),I=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("div",{className:"linefooter",children:Object(c.jsxs)("div",{className:"social-wrapper",children:[Object(c.jsx)(P,{img:p}),Object(c.jsx)(P,{img:g}),Object(c.jsx)(P,{img:N}),Object(c.jsx)(P,{img:f})]})}),Object(c.jsxs)("div",{className:"foot",children:[Object(c.jsxs)("div",{className:"ft-gr",children:[Object(c.jsx)("p",{className:"ft-title",children:"DIVERGENT.CO"}),Object(c.jsx)("a",{href:"/about",className:"ft-it",children:Object(c.jsx)("img",{src:w,alt:"footer image",className:"foot-p"})})]}),Object(c.jsxs)("div",{className:"ft-gr",children:[Object(c.jsx)("p",{className:"ft-title",children:"Support"}),Object(c.jsx)("a",{href:"#",className:"ft-it",children:"Cara Berbelanja"}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"#",className:"ft-it",children:"Hubungi Kami"}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"#",className:"ft-it",children:"Promo dan Vooucher"}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"#",className:"ft-it",children:"Pengiriman"}),Object(c.jsx)("br",{})]})]})]})},q=(s(45),function(){return Object(c.jsx)("div",{className:"nav",children:Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsxs)(r.b,{to:"/kategori",activeClassName:"nav-item--active",className:"nav-item",children:[Object(c.jsx)("i",{className:"fas fa-tags nav-fa",children:" "})," ",Object(c.jsx)("span",{className:"nav-name",children:"Kategori"})]}),Object(c.jsxs)(r.b,{exact:!0,to:"/",activeClassName:"nav-item--active",className:"nav-item",children:[Object(c.jsx)("i",{className:"fas fa-store-alt nav-fa",children:" "})," ",Object(c.jsx)("span",{className:"nav-name",children:"Home"})]}),Object(c.jsxs)(r.b,{to:"/about",activeClassName:"nav-item--active",className:"nav-item",children:[Object(c.jsx)("i",{className:"fas fa-user-tie nav-fa",children:" "})," ",Object(c.jsx)("span",{className:"nav-name",children:"About"})]})]})})}),D=s(7),E=s(5),T=s.n(E),S=function(){var e=Object(j.f)(),a=Object(t.useState)(!0),s=Object(D.a)(a,2),i=s[0],n=s[1];return Object(t.useEffect)((function(){T.a.get("http://localhost:3001/auth/login").then((function(e){!0===e.data.loggedIn?n(!0):n(!1)}))}),[]),Object(c.jsx)("nav",{className:"navbar",children:i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(r.b,{exact:!0,to:"/admin/",activeClassName:"nav-item--active",className:"nav-item",children:"POST"}),Object(c.jsx)(r.b,{to:"/admin/",className:"nav-item",onClick:function(){window.confirm("Yakin ingin logout?")&&T.a.get("http://localhost:3001/auth/logout").then((function(){e.push("/admin/login"),window.location.reload(!1)}))},children:"Log Out"})]}):Object(c.jsx)(c.Fragment,{children:"Selamat Datang, silahkan login untuk melanjutkan"})})},A=s(12),L=s(14),U=(s(28),s(29),[h,O,x]),K={duration:2e3,transitionDuration:1e3,infinite:!0,indicators:!0,arrows:!1},F=function(){return Object(c.jsxs)(L.Slide,Object(A.a)(Object(A.a)({},K),{},{children:[Object(c.jsx)("div",{className:"each-slide",children:Object(c.jsx)("img",{src:U[0],className:"thumb-s"})}),Object(c.jsx)("div",{className:"each-slide",children:Object(c.jsx)("img",{src:U[1],className:"thumb-s"})}),Object(c.jsx)("div",{className:"each-slide",children:Object(c.jsx)("img",{src:U[2],className:"thumb-s"})})]}))},G=[o,m,u,b],H={duration:2e6,transitionDuration:100,infinite:!0,indicators:!0,arrows:!1},V=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(L.Slide,Object(A.a)(Object(A.a)({},H),{},{children:[Object(c.jsx)("div",{className:"each-slide",children:Object(c.jsx)("img",{src:G[0],className:"thumb-s"})}),Object(c.jsx)("div",{className:"each-slide",children:Object(c.jsx)("img",{src:G[1],className:"thumb-s"})}),Object(c.jsx)("div",{className:"each-slide",children:Object(c.jsx)("img",{src:G[2],className:"thumb-s"})})]}))})},M=(s(64),function(e){var a=e.children;return console.log("render Main"),Object(c.jsxs)("div",{className:"main-view",children:[Object(c.jsx)(R,{}),Object(c.jsx)("div",{className:"main-wrap",children:Object(c.jsx)("div",{className:"slide",children:Object(c.jsx)(F,{className:"img-sl"})})}),Object(c.jsx)(q,{}),a,Object(c.jsx)(I,{})]})}),J=function(e){var a=e.children;return console.log("render Main Admin"),Object(c.jsxs)("div",{children:[Object(c.jsx)(S,{}),a]})},B=(s(65),function(){var e=Object(j.f)();return Object(c.jsx)("div",{className:"home",children:Object(c.jsxs)("div",{className:"wrap",children:[Object(c.jsxs)("div",{className:"product",onClick:function(){e.push("/produk/detail")},children:[Object(c.jsx)("img",{src:o,className:"thumb"}),Object(c.jsx)("span",{className:"name",children:"Nama Product"}),Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:"Rp 25.000,-"}),Object(c.jsx)("div",{className:"see",children:"LIHAT PRODUK"})]}),Object(c.jsxs)("div",{className:"product",onClick:function(){e.push("/produk/detail")},children:[Object(c.jsx)("img",{src:m,className:"thumb"}),Object(c.jsx)("span",{className:"name",children:"Nama Product"}),Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:"Rp 25.000,-"}),Object(c.jsx)("div",{className:"see",children:"LIHAT PRODUK"})]}),Object(c.jsxs)("div",{className:"product",onClick:function(){e.push("/produk/detail")},children:[Object(c.jsx)("img",{src:u,className:"thumb"}),Object(c.jsx)("span",{className:"name",children:"Nama Product"}),Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:"Rp 25.000,-"}),Object(c.jsx)("div",{className:"see",children:"LIHAT PRODUK"})]}),Object(c.jsxs)("div",{className:"product",onClick:function(){e.push("/produk/detail")},children:[Object(c.jsx)("img",{src:b,className:"thumb"}),Object(c.jsx)("span",{className:"name",children:"Nama Product"}),Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:"Rp 25.000,-"}),Object(c.jsx)("div",{className:"see",children:"LIHAT PRODUK"})]})]})})}),_=(s(66),function(){return Object(c.jsx)("div",{className:"profile",children:Object(c.jsxs)("div",{className:"wrap-profile",children:[Object(c.jsx)("div",{className:"title-profile",children:"DIVERGENT.CO"}),Object(c.jsx)("div",{className:"text-profile",children:"DIVERGENT.CO Menyediakan Daily Wear Premium buat kalian dengan harga yang sangat terjangkau, 100% Foto produk kami sesuai dengan barang yang kami kirim. Team kami siap melayani kalian dengan sebaik mungkin. Note : Transaksi sebelum jam 22.00 dikirim di hari yang sama Selamat Berbelanja, Thankyou :)"}),Object(c.jsx)("div",{className:"title-profile",children:"Customer Service kami :"}),Object(c.jsx)("div",{className:"cs-profile",children:"081xxxxxxxxx (Christian)"}),Object(c.jsx)("div",{className:"title-profile",children:"FAQ :"}),Object(c.jsxs)("div",{className:"faq-card",children:[Object(c.jsx)("div",{className:"faq-question",children:"Ready Kak?"}),Object(c.jsx)("div",{className:"faq-answer",children:"DIVERGENT selalu ready stock, kak. Jadi bisa langsung order"})]}),Object(c.jsxs)("div",{className:"faq-card",children:[Object(c.jsx)("div",{className:"faq-question",children:"COD bisa Kak?"}),Object(c.jsx)("div",{className:"faq-answer",children:"Untuk sementara hanya melayani COD area Solo - Sukoharjo"})]}),Object(c.jsxs)("div",{className:"faq-card",children:[Object(c.jsx)("div",{className:"faq-question",children:"Cara berbelanja gimana kak?"}),Object(c.jsx)("div",{className:"faq-answer",children:"DIVERGENT selalu ready stock, kak. Jadi bisa langsung order"})]}),Object(c.jsxs)("div",{className:"faq-card",children:[Object(c.jsx)("div",{className:"faq-question",children:"Kirim-kirim gimana kak?"}),Object(c.jsx)("div",{className:"faq-answer",children:"DIVERGENT selalu ready stock, kak. Jadi bisa langsung order"})]})]})})}),W=(s(67),function(){var e=Object(j.f)();return Object(c.jsx)("div",{className:"category",children:Object(c.jsxs)("div",{className:"wrap-category",children:[Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(v,")")},className:"list-category",onClick:function(){return e.push("/produk/kategori")},children:Object(c.jsx)("div",{className:"name-category",children:"LENGAN PANJANG"})}),Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(m,")")},className:"list-category",onClick:function(){return e.push("/produk/kategori")},children:Object(c.jsx)("div",{className:"name-category",children:"LENGAN PENDEK"})}),Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(k,")")},className:"list-category",onClick:function(){return e.push("/produk/kategori")},children:Object(c.jsx)("div",{className:"name-category",children:"POLO"})}),Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(y,")")},className:"list-category",onClick:function(){return e.push("/produk/kategori")},children:Object(c.jsx)("div",{className:"name-category",children:"HOODIE"})}),Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(C,")")},className:"list-category",onClick:function(){return e.push("/produk/kategori")},children:Object(c.jsx)("div",{className:"name-category",children:"OVERSIZE"})})]})})}),z=(s(68),function(){var e=Object(t.useState)(""),a=Object(D.a)(e,2),s=a[0],i=a[1],n=Object(t.useState)(""),l=Object(D.a)(n,2),r=l[0],d=l[1],o=Object(t.useState)(""),m=Object(D.a)(o,2),u=m[0],b=m[1];T.a.defaults.withCredentials=!0;var h=Object(j.f)();return Object(t.useEffect)((function(){T.a.get("http://localhost:3001/auth/login").then((function(e){!0===e.data.loggedIn&&h.push("/admin/")}))}),[]),Object(c.jsx)("div",{className:"login",children:Object(c.jsxs)("div",{className:"log-wrap",children:[Object(c.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:"LOGIN"}),Object(c.jsx)("label",{children:"Username"}),Object(c.jsx)("input",{type:"text",className:"inp-lgn",onChange:function(e){i(e.target.value)}}),Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",className:"inp-lgn",onChange:function(e){d(e.target.value)}}),Object(c.jsx)("button",{className:"btn-lgn",onClick:function(){T.a.post("http://localhost:3001/auth/login",{username:s,password:r}).then((function(e){e.data.message?(b(e.data.message),console.log(e.data.message)):(console.log(e.data.message),b(e.data[0].username),console.log(e),h.push("/admin/"),window.location.reload(!1))}))},children:"Login"}),Object(c.jsx)("h4",{children:u})]})})}),Q=(s(69),function(){var e=Object(t.useState)(!1),a=Object(D.a)(e,2),s=a[0],i=a[1];T.a.defaults.withCredentials=!0;var n,l=Object(j.f)(),r=Object(t.useState)([]),d=Object(D.a)(r,2),o=d[0],m=d[1],u=Object(t.useState)([]),b=Object(D.a)(u,2),h=b[0],O=b[1];return Object(t.useEffect)((function(){T.a.get("http://localhost:3001/auth/login").then((function(e){!1===e.data.loggedIn&&l.push("/admin/login")}))}),[]),Object(c.jsx)("div",{className:"post",children:Object(c.jsx)("div",{className:"wrap-post",children:Object(c.jsxs)("div",{className:"card-post",children:[Object(c.jsx)("label",{children:"Nama Produk"}),Object(c.jsx)("input",{type:"text",placeholder:"Masukan nama produk...",className:"inp-post"}),Object(c.jsx)("label",{children:"Unggah Foto"}),Object(c.jsx)("input",{type:"file",id:"file",multiple:!0,onChange:function(e){if(e.target.files){var a=Array.from(e.target.files).map((function(e){return URL.createObjectURL(e)}));m((function(e){return e.concat(a)})),O((function(a){return a.concat(e.target.files)})),Array.from(e.target.files).map((function(e){return URL.revokeObjectURL(e)}))}}}),Object(c.jsxs)("label",{htmlFor:"file",className:"file-post",children:[Object(c.jsx)("i",{class:"fas fa-camera"})," ",Object(c.jsx)("b",{children:" Add Photos"})]}),Object(c.jsx)("div",{className:"render-result",children:(n=o,n.map((function(e){return Object(c.jsx)("img",{src:e,alt:"",className:"result"},e)})))}),Object(c.jsx)("label",{children:"Keterangan"}),Object(c.jsx)("textarea",{placeholder:"Deskripsi",className:"d-post"}),Object(c.jsxs)("button",{className:"btn-post",onClick:function(){i(!0);var e=new FormData,a=h.length;console.log(a);for(var s=0;s<a;s++)e.append("file"+s,h[s]),e.append("upload_preset","nuimbgfa"),T.a.post("https://api.cloudinary.com/v1_1/egipegi/image/upload",e).then((function(e){var a=e.data.public_id;T.a.post("http://localhost:3001/product",{image:a}).then((function(){i(!1)}))}))},disabled:s,children:[s&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("i",{class:"fas fa-spinner fa-pulse"})," Submit ..."]}),!s&&"Submit"]})]})})})}),Y=(s(70),function(){return Object(c.jsx)("div",{className:"produk",children:Object(c.jsxs)("div",{className:"wrap-produk",children:[Object(c.jsx)("div",{className:"info",children:Object(c.jsx)(V,{className:"img-sl"})}),Object(c.jsxs)("div",{className:"info",children:[Object(c.jsx)("div",{className:"title",children:"Nama Produk"}),Object(c.jsx)("div",{className:"price",children:"Rp 25.000,-"}),Object(c.jsx)("button",{className:"btn-cart",children:"Tambah ke keranjang"}),Object(c.jsxs)("div",{className:"detail",children:[Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius. Dictum at tempor commodo ullamcorper. Non pulvinar neque laoreet suspendisse interdum. Ipsum suspendisse ultrices gravida dictum fusce ut. Orci dapibus ultrices in iaculis nunc sed augue lacus. At auctor urna nunc id. Nisi est sit amet facilisis magna. Nunc aliquet bibendum enim facilisis gravida neque convallis. Tellus elementum sagittis vitae et. Risus ultricies tristique nulla aliquet enim tortor at. Orci nulla pellentesque dignissim enim sit amet venenatis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Massa enim nec dui nunc mattis enim ut tellus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac."}),Object(c.jsx)("p",{children:"Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Sed enim ut sem viverra aliquet eget sit amet tellus. Commodo nulla facilisi nullam vehicula ipsum a arcu. Ac tortor dignissim convallis aenean et. Semper auctor neque vitae tempus. Sit amet venenatis urna cursus eget nunc. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Tortor dignissim convallis aenean et. Enim sit amet venenatis urna cursus. Sapien eget mi proin sed libero enim. Turpis massa sed elementum tempus. Tristique risus nec feugiat in fermentum. Dis parturient montes nascetur ridiculus mus mauris. Enim praesent elementum facilisis leo."})]})]})]})})}),Z=(s(71),function(){var e=Object(j.f)();return Object(c.jsxs)("div",{className:"by",children:[Object(c.jsxs)("div",{className:"wrap-search",children:[Object(c.jsx)("input",{type:"text",className:"search",placeholder:"Cari..."}),Object(c.jsx)("button",{className:"btn-search",children:"cari"})]}),Object(c.jsxs)("div",{className:"wrap-by",children:[Object(c.jsxs)("div",{className:"product-by",onClick:function(){e.push("/produk/detail")},children:[Object(c.jsx)("img",{src:o,className:"thumb-by"}),Object(c.jsx)("span",{className:"name",children:"Nama Product"}),Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:"Rp 25.000,-"}),Object(c.jsx)("div",{className:"see",children:"LIHAT PRODUK"})]}),Object(c.jsxs)("div",{className:"product-by",onClick:function(){e.push("/produk/detail")},children:[Object(c.jsx)("img",{src:m,className:"thumb-by"}),Object(c.jsx)("span",{className:"name",children:"Nama Product"}),Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:"Rp 25.000,-"}),Object(c.jsx)("div",{className:"see",children:"LIHAT PRODUK"})]}),Object(c.jsxs)("div",{className:"product-by",onClick:function(){e.push("/produk/detail")},children:[Object(c.jsx)("img",{src:u,className:"thumb-by"}),Object(c.jsx)("span",{className:"name",children:"Nama Product"}),Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:"Rp 25.000,-"}),Object(c.jsx)("div",{className:"see",children:"LIHAT PRODUK"})]}),Object(c.jsxs)("div",{className:"product-by",onClick:function(){e.push("/produk/detail")},children:[Object(c.jsx)("img",{src:b,className:"thumb-by"}),Object(c.jsx)("span",{className:"name",children:"Nama Product"}),Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:"Rp 25.000,-"}),Object(c.jsx)("div",{className:"see",children:"LIHAT PRODUK"})]})]})]})}),X=function(e){var a=e.children;return console.log("render Product"),Object(c.jsxs)("div",{children:[Object(c.jsx)(R,{}),Object(c.jsx)(q,{}),a,Object(c.jsx)(I,{})]})},$=function(){return Object(c.jsx)(r.a,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/login",component:z}),Object(c.jsx)(j.a,{path:"/admin/:path?",exact:!0,children:Object(c.jsx)(J,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/admin",exact:!0,component:Q}),Object(c.jsx)(j.a,{component:function(){return Object(c.jsx)("div",{children:"404 Main Admin"})},exact:!0,path:"/admin/*"})]})})}),Object(c.jsx)(j.a,{path:"/produk/:path?",exact:!0,children:Object(c.jsx)(X,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/produk/detail",component:Y}),Object(c.jsx)(j.a,{path:"/produk/kategori",component:Z}),Object(c.jsx)(j.a,{component:function(){return Object(c.jsx)("div",{children:"404 Main"})},exact:!0,path:"/*"})]})})}),Object(c.jsx)(j.a,{children:Object(c.jsx)(M,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,component:B}),Object(c.jsx)(j.a,{path:"/about",component:_}),Object(c.jsx)(j.a,{path:"/kategori",component:W}),Object(c.jsx)(j.a,{component:function(){return Object(c.jsx)("div",{children:"404 Main"})},exact:!0,path:"/*"})]})})})]})})};var ee=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)($,{})})},ae=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,73)).then((function(a){var s=a.getCLS,c=a.getFID,t=a.getFCP,i=a.getLCP,n=a.getTTFB;s(e),c(e),t(e),i(e),n(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(ee,{})}),document.getElementById("root")),ae()}},[[72,1,2]]]);
//# sourceMappingURL=main.b64b3f2f.chunk.js.map