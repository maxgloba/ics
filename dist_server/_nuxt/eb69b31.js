(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5,6],{249:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("532d159e",content,!0,{sourceMap:!1})},250:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("ab744c9a",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scrolled:!1}},methods:{play:function(){var t=this;0===this.$refs.audio.currentTime?(this.$refs.audio.play(),this.$refs.audio.volume=.5,this.$refs.audioBtn.classList.add("active")):(this.$refs.audio.pause(),this.$refs.audio.currentTime=0),this.$refs.audio.onpause=function(){t.$refs.audioBtn.classList.remove("active")}}},mounted:function(){var t=this;document.addEventListener("click",(function(e){t.scrolled||(t.scrolled=!0,t.play())}))}},o=(n(252),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("button",{ref:"audioBtn",staticClass:"audio",on:{click:function(e){return e.preventDefault(),t.play.apply(null,arguments)}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("audio",{ref:"audio",attrs:{controls:""}},[n("source",{attrs:{src:"/audio/neon_skies_by_2050_Artlist.mp3",type:"audio/mpeg"}}),t._v(" "),n("source",{attrs:{src:"/audio/neon_skies_by_2050_Artlist.ogg",type:"audio/ogg"}})]),t._v(" "),n("nav",{staticClass:"header-menu"},[n("a",{attrs:{href:"https://nft-storks.creator-spring.com/"}},[n("svg",{attrs:{width:"27",height:"30",viewBox:"0 0 27 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26.471 13.3765C26.2162 15.8931 25.0791 18.4186 22.957 20.7803C21.7209 22.1558 20.3407 23.1324 18.8772 23.7447C18.4272 24.8195 17.7549 25.8649 16.8377 26.8641C14.1675 29.7734 10.7296 30.315 7.74418 29.8552C4.81949 29.4049 2.13815 27.9846 0.473679 26.6374L3.01606 23.4222C4.20759 24.3866 6.23865 25.4585 8.35659 25.7847C10.2425 26.0751 12.0256 25.7652 13.4703 24.4469C10.5129 24.0655 7.78071 22.5445 5.78188 20.7051C4.27323 19.3167 3.04084 17.6283 2.37068 15.8537C1.70296 14.0855 1.52824 12.0185 2.53152 10.1697C3.32516 8.70722 4.50432 7.76377 5.91472 7.36648C7.25744 6.98825 8.62458 7.15502 9.80758 7.51734C12.1406 8.23187 14.3687 9.89097 15.6999 11.4301C16.5964 12.4668 17.7967 14.0263 18.622 15.9149C18.9716 16.7149 19.2635 17.5974 19.431 18.5392C19.6037 18.3759 19.7754 18.1999 19.9456 18.0106C21.572 16.2006 22.2689 14.4732 22.4224 12.9569C22.5766 11.4346 22.199 9.96929 21.4206 8.65862C19.8213 5.96558 16.6429 4.11746 13.633 4.11746V0C18.12 0 22.5993 2.64858 24.9092 6.53807C26.0854 8.51867 26.7252 10.8661 26.471 13.3765ZM15.5109 20.3887C15.5388 19.4577 15.3089 18.5162 14.8997 17.5797C14.3121 16.235 13.4106 15.0359 12.6371 14.1415C11.7191 13.0801 10.1134 11.913 8.6284 11.4582C7.90242 11.2358 7.36455 11.2322 7.00634 11.3331C6.7158 11.4149 6.39809 11.6001 6.09902 12.1513C5.85469 12.6015 5.77288 13.326 6.17247 14.3842C6.56963 15.4359 7.37897 16.6088 8.52037 17.6592C10.5164 19.496 13.1111 20.6096 15.5109 20.3887Z",fill:"#53E09F"}})])]),t._v(" "),n("a",{attrs:{href:"https://medium.com/@nftstorks"}},[n("svg",{attrs:{width:"38",height:"30",viewBox:"0 0 38 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.58676 6.11993C4.63371 5.65605 4.45681 5.19757 4.11043 4.88536L0.582099 0.63492V0H11.5376L20.0056 18.5714L27.4504 0H37.8942V0.63492L34.8775 3.52734C34.6174 3.72558 34.4884 4.05141 34.5423 4.3739V25.6261C34.4884 25.9486 34.6174 26.2744 34.8775 26.4727L37.8237 29.3651V30H23.0047V29.3651L26.0567 26.4021C26.3566 26.1023 26.3566 26.0141 26.3566 25.5556V8.37743L17.8709 29.9295H16.7242L6.84489 8.37743V22.8219C6.76252 23.4292 6.96421 24.0406 7.39178 24.4797L11.3612 29.2945V29.9295H0.105774V29.2945L4.07515 24.4797C4.49961 24.0398 4.68954 23.4244 4.58676 22.8219V6.11993Z",fill:"#7B61FF"}})])]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/nftstorks"}},[n("svg",{attrs:{width:"37",height:"30",viewBox:"0 0 37 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M36.9615 3.46154C35.5769 4.15385 34.1923 4.38462 32.5769 4.61538C34.1923 3.69231 35.3461 2.30769 35.8077 0.461538C34.4231 1.38461 32.8077 1.84615 30.9615 2.30769C29.5769 0.923077 27.5 0 25.4231 0C20.5769 0 16.8846 4.61538 18.0385 9.23077C11.8077 9 6.26922 6 2.34614 1.38462C0.269221 4.84615 1.42307 9.23077 4.65384 11.5385C3.49999 11.5385 2.34614 11.0769 1.1923 10.6154C1.1923 14.0769 3.73076 17.3077 7.1923 18.2308C6.03845 18.4615 4.88461 18.6923 3.73076 18.4615C4.65384 21.4615 7.42307 23.7692 10.8846 23.7692C8.11537 25.8462 3.96153 27 0.0384521 26.5385C3.49999 28.6154 7.42307 30 11.5769 30C25.6538 30 33.5 18.2308 33.0384 7.38461C34.6538 6.46154 36.0385 5.07692 36.9615 3.46154Z",fill:"#4488EE"}})])]),t._v(" "),n("a",{attrs:{href:"https://discord.gg/fqFUdVG894"}},[n("svg",{attrs:{width:"40",height:"30",viewBox:"0 0 40 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M33.5791 2.51249C31.0466 1.33875 28.3388 0.485722 25.5079 0C25.1602 0.622678 24.754 1.46019 24.474 2.12643C21.4646 1.67811 18.483 1.67811 15.529 2.12643C15.249 1.46019 14.8336 0.622678 14.4828 0C11.6488 0.485722 8.93788 1.34188 6.40544 2.51871C1.2975 10.165 -0.0871831 17.6215 0.605158 24.972C3.99302 27.4782 7.27626 29.0007 10.5041 29.9969C11.3011 28.9104 12.0119 27.7553 12.6242 26.538C11.458 26.099 10.341 25.5573 9.28561 24.9284C9.5656 24.7229 9.83948 24.5081 10.1041 24.287C16.5413 27.2696 23.5355 27.2696 29.8958 24.287C30.1635 24.5081 30.4374 24.7229 30.7143 24.9284C29.6558 25.5604 28.5358 26.1021 27.3696 26.5411C27.9819 27.7553 28.6896 28.9135 29.4896 30C32.7206 29.0037 36.0069 27.4813 39.3947 24.972C40.2071 16.4508 38.007 9.06291 33.5791 2.51249ZM13.5012 20.4515C11.5688 20.4515 9.98406 18.6644 9.98406 16.4882C9.98406 14.312 11.5349 12.5218 13.5012 12.5218C15.4674 12.5218 17.0521 14.3088 17.0183 16.4882C17.0213 18.6644 15.4674 20.4515 13.5012 20.4515ZM26.4987 20.4515C24.5664 20.4515 22.9816 18.6644 22.9816 16.4882C22.9816 14.312 24.5325 12.5218 26.4987 12.5218C28.465 12.5218 30.0497 14.3088 30.0158 16.4882C30.0158 18.6644 28.465 20.4515 26.4987 20.4515Z",fill:"#EC3963"}})])])])])])}),[],!1,null,"bf62943a",null);e.default=component.exports;installComponents(component,{Header:n(251).default})},252:function(t,e,n){"use strict";n(249)},253:function(t,e,n){var r=n(104)(!1);r.push([t.i,".header[data-v-bf62943a]{padding:20px 0}@media(min-width:768px){.header[data-v-bf62943a]{padding:30px 0}}.header .container[data-v-bf62943a]{align-items:center;position:relative}.header-menu[data-v-bf62943a],.header .container[data-v-bf62943a]{display:flex;justify-content:space-between}.header-menu a[data-v-bf62943a]{width:55px;height:83px;border:3px solid #2b2b2b;border-radius:60px;display:flex;align-items:center;justify-content:center;transition:border-color .5s ease}@media(min-width:768px){.header-menu a[data-v-bf62943a]{width:73px;height:108px}}.header-menu a[data-v-bf62943a]:not(:first-child){margin-left:10px}@media(min-width:768px){.header-menu a[data-v-bf62943a]:not(:first-child){margin-left:30px}}.header-menu a[data-v-bf62943a]:hover{border-color:#feef00}.header audio[data-v-bf62943a]{position:absolute;left:-1000px;opacity:0}.audio[data-v-bf62943a]{display:flex;background:none;padding:0;border:none;justify-content:space-between;align-items:center}.audio span[data-v-bf62943a]{background:#48e;display:block;width:4px;height:20px;transition:.5s ease;pointer-events:none}.audio span[data-v-bf62943a]:not(:first-child){margin-left:6px}.audio.active span[data-v-bf62943a],.audio:hover span[data-v-bf62943a]{background:#feef00}.audio.active span[data-v-bf62943a]:first-child,.audio:hover span[data-v-bf62943a]:first-child{height:33px}.audio.active span[data-v-bf62943a]:nth-child(2),.audio:hover span[data-v-bf62943a]:nth-child(2){height:45px}.audio.active span[data-v-bf62943a]:nth-child(3),.audio:hover span[data-v-bf62943a]:nth-child(3){height:23px}",""]),t.exports=r},254:function(t,e,n){var map={"./img-1.png":255,"./img-10.png":256,"./img-11.png":257,"./img-2.png":258,"./img-3.png":259,"./img-4.png":260,"./img-5.png":261,"./img-6.png":262,"./img-7.png":263,"./img-8.png":264,"./img-9.png":265};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=254},255:function(t,e,n){t.exports=n.p+"img/img-1.79dda7f.png"},256:function(t,e,n){t.exports=n.p+"img/img-10.560175a.png"},257:function(t,e,n){t.exports=n.p+"img/img-11.a5dd2a0.png"},258:function(t,e,n){t.exports=n.p+"img/img-2.6ad368e.png"},259:function(t,e,n){t.exports=n.p+"img/img-3.de142fd.png"},260:function(t,e,n){t.exports=n.p+"img/img-4.ae4e7ab.png"},261:function(t,e,n){t.exports=n.p+"img/img-5.a65381d.png"},262:function(t,e,n){t.exports=n.p+"img/img-6.78f4a9e.png"},263:function(t,e,n){t.exports=n.p+"img/img-7.f65ef5b.png"},264:function(t,e,n){t.exports=n.p+"img/img-8.86a8cee.png"},265:function(t,e,n){t.exports=n.p+"img/img-9.2bc53fa.png"},266:function(t,e,n){"use strict";n(250)},267:function(t,e,n){var r=n(104)(!1);r.push([t.i,".slider .tns-ovh{overflow:visible}.slider .tns-item{transition:transform .5s ease;position:relative;z-index:1;transform:scale(.95)}@media(min-width:768px){.slider .tns-item{transform:scale(.8)}}.slider .tns-slide-active{box-shadow:0 -10px 70px rgba(0,0,0,.4);z-index:2;transform:scale(1)}@media(min-width:768px){.slider .tns-slide-active{transform:scale(.9)}.slider .tns-slide-active+.tns-slide-active{transform:scale(1);box-shadow:0 -10px 70px rgba(0,0,0,.4);z-index:2}.slider .tns-slide-active+.tns-slide-active+.tns-slide-active{transform:scale(.9);box-shadow:none;z-index:1}}",""]),t.exports=r},268:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("5c7a5a87",content,!0,{sourceMap:!1})},269:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("2e6105c6",content,!0,{sourceMap:!1})},270:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("19e72018",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tinySliderOptions:{mouseDrag:!0,items:1,loop:!0,autoplay:!1,controls:!1,nav:!1,autoplayButtonOutput:!1,responsive:{768:{items:3,center:!0}}}}}},o=(n(266),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"slider"},[r("div",{staticClass:"container"},[r("vue-tiny-slider",t._b({},"vue-tiny-slider",t.tinySliderOptions,!1),t._l(11,(function(i){return r("img",{attrs:{src:n(254)("./img-"+i+".png")}})})),0)],1)])}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);var r={},o=(n(277),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("svg",{attrs:{width:"48",height:"45",viewBox:"0 0 48 45",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M44.1949 36.7923C46.5526 33.0825 47.9181 28.6802 47.9181 23.9591C47.9181 10.7268 37.1913 0 23.9591 0C10.7268 0 0 10.7268 0 23.9591C0 33.0365 5.04817 40.9349 12.4903 45C15.3662 39.4745 21.1449 35.701 27.8049 35.701H32.7234C32.1226 34.1774 30.6374 33.0994 28.9003 33.0994H22.259C16.1416 33.0994 11.2358 28.1 11.2358 22.0415C11.2358 18.9653 12.5086 16.1639 14.5645 14.1594L4.52924 9.95743L22.3275 9.95746C24.7772 9.95746 26.8096 11.7445 27.1923 14.0857L47.5764 19.9041L47.5782 19.9147H22.1906C21.0099 19.9147 19.9996 20.8023 19.9996 22.0416C19.9996 23.3192 21.0406 24.3807 22.2591 24.3807H28.9003C28.9622 24.3807 29.024 24.3811 29.0857 24.382C36.528 24.4766 42.7178 29.767 44.1949 36.7923Z",fill:"white"}}),t._v(" "),n("path",{attrs:{d:"M22.8044 16.1653C21.6497 16.1653 21.0724 15.0107 20.7837 13.856L25.9797 15.0107C24.825 15.588 23.6704 16.1653 22.8044 16.1653Z",fill:"white"}})]),t._v(" "),t._m(0),t._v(" "),n("svg",{staticClass:"footer-logo",attrs:{width:"137",height:"59",viewBox:"0 0 137 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("ellipse",{attrs:{cx:"42.7206",cy:"33.2529",rx:"3.84651",ry:"4.32733",fill:"#FEEF00"}}),t._v(" "),n("ellipse",{attrs:{cx:"27.7716",cy:"33.2529",rx:"3.84651",ry:"4.32733",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M35.1762 56.8127C47.265 56.8127 57.4336 48.6304 60.3949 37.5273C60.6804 37.5622 60.9712 37.5801 61.2662 37.5801C65.1797 37.5801 68.3523 34.4229 68.3523 30.5282C68.3523 26.6335 65.1797 23.4762 61.2662 23.4762C60.9114 23.4762 60.5626 23.5022 60.2218 23.5523C57.0539 12.7648 47.0397 4.88477 35.1762 4.88477C23.3126 4.88477 13.2985 12.7648 10.1305 23.5523C9.78967 23.5022 9.44097 23.4762 9.08617 23.4762C5.17259 23.4762 2 26.6335 2 30.5282C2 34.4229 5.17259 37.5801 9.08617 37.5801C9.38114 37.5801 9.6719 37.5622 9.9574 37.5273C12.9187 48.6304 23.0873 56.8127 35.1762 56.8127Z",stroke:"#4488EE","stroke-width":"3"}}),t._v(" "),n("path",{attrs:{d:"M35.657 17.386C39.9057 17.386 43.35 13.9418 43.35 9.69302C43.35 5.44428 39.9057 2 35.657 2",stroke:"#FEEF00","stroke-width":"3","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M42.3883 44.3115C40.2564 45.5363 37.7961 46.2348 35.1761 46.2348C32.5562 46.2348 30.0959 45.5363 27.9639 44.3115",stroke:"#FEEF00","stroke-width":"3","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M83.9731 30.1437V14.3521H87.2464V18.2487H93.4507C94.0212 18.2487 94.5418 18.3854 95.0124 18.6589C95.4831 18.9323 95.8539 19.2946 96.1249 19.7458C96.4102 20.197 96.5528 20.6892 96.5528 21.2225V27.17C96.5528 27.7032 96.4102 28.1954 96.1249 28.6466C95.8539 29.0978 95.4831 29.4601 95.0124 29.7336C94.5418 30.007 94.0212 30.1437 93.4507 30.1437H83.9731ZM87.2464 27.0059H93.2795V21.3865H87.2464V27.0059Z",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M101.281 30.1437C100.724 30.1437 100.211 30.007 99.7403 29.7336C99.2697 29.4601 98.8917 29.0978 98.6065 28.6466C98.3212 28.1954 98.1786 27.7032 98.1786 27.17V21.2225C98.1786 20.6892 98.3212 20.197 98.6065 19.7458C98.8917 19.2946 99.2697 18.9323 99.7403 18.6589C100.211 18.3854 100.724 18.2487 101.281 18.2487H107.656C108.227 18.2487 108.747 18.3854 109.218 18.6589C109.689 18.9323 110.059 19.2946 110.33 19.7458C110.616 20.197 110.758 20.6892 110.758 21.2225V27.17C110.758 27.7032 110.616 28.1954 110.33 28.6466C110.059 29.0978 109.689 29.4601 109.218 29.7336C108.747 30.007 108.227 30.1437 107.656 30.1437H101.281ZM101.452 27.0059H107.485V21.3865H101.452V27.0059Z",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M112.449 30.1437V21.2225C112.449 20.6892 112.591 20.197 112.877 19.7458C113.162 19.2946 113.54 18.9323 114.011 18.6589C114.481 18.3854 115.002 18.2487 115.572 18.2487H122.418V21.3865H115.722V30.1437H112.449Z",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M124.171 30.1437V18.2487H133.648C134.219 18.2487 134.739 18.3854 135.21 18.6589C135.681 18.9323 136.051 19.2946 136.322 19.7458C136.608 20.197 136.75 20.6892 136.75 21.2225V30.1437H133.477V21.3865H127.444V30.1437H124.171Z",fill:"#4488EE"}}),t._v(" "),n("path",{attrs:{d:"M83.9731 44.6707V32.7757H87.2649V44.6707H83.9731Z",fill:"#FEEF00"}}),t._v(" "),n("path",{attrs:{d:"M89.7941 44.6707V32.7757H99.3254C99.8991 32.7757 100.423 32.9124 100.896 33.1859C101.369 33.4593 101.742 33.8216 102.015 34.2728C102.302 34.724 102.445 35.2162 102.445 35.7494V44.6707H99.1533V35.9135H93.086V44.6707H89.7941Z",fill:"#FEEF00"}}),t._v(" "),n("path",{attrs:{d:"M112.175 44.6709C111.599 44.6709 111.073 44.5347 110.598 44.2624C110.123 43.9902 109.741 43.6294 109.453 43.1802C109.179 42.7309 109.042 42.2408 109.042 41.7099V32.8271H112.348V41.5465H118.442V32.8271H121.748V41.7099C121.748 42.2408 121.604 42.7309 121.316 43.1802C121.042 43.6294 120.667 43.9902 120.192 44.2624C119.717 44.5347 119.191 44.6709 118.615 44.6709H112.175Z",fill:"#FEEF00"}}),t._v(" "),n("path",{attrs:{d:"M127.178 44.6709C126.602 44.6709 126.076 44.5347 125.601 44.2624C125.125 43.9902 124.743 43.6294 124.455 43.1802C124.182 42.7309 124.045 42.2408 124.045 41.7099V37.1766H133.444V35.9514H124.045V32.8271H133.617C134.193 32.8271 134.719 32.9632 135.194 33.2355C135.67 33.5078 136.044 33.8685 136.318 34.3178C136.606 34.767 136.75 35.2571 136.75 35.788V44.6709H127.178ZM127.351 41.5465H133.444V39.9129H127.351V41.5465Z",fill:"#FEEF00"}})])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[t._v("© 2022 CryptoLibertyStorks "),n("br"),n("span",[t._v("All Rights Reserved.")])])}],!1,null,"85aa48bc",null);e.default=component.exports;installComponents(component,{Footer:n(272).default})},273:function(t,e,n){"use strict";n(268)},274:function(t,e,n){var r=n(104)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap);"]),r.push([t.i,'@media(min-width:768px){.content[data-v-2ded9a9e]{padding:30px}}.content .btn[data-v-2ded9a9e]{font-family:"Orbitron",sans-serif;font-weight:900;font-size:20px;text-align:center;color:#0b0b0b;text-transform:uppercase;border-radius:80px;border:none;padding:18px 20px;margin:10px 0;width:100%;transition:background .5s ease}@media(min-width:768px){.content .btn[data-v-2ded9a9e]{width:calc(50% - 15px);font-size:30px;padding:0 45px;line-height:100px;height:100px}}.content .btn-yellow[data-v-2ded9a9e]{background:#feef00}.content .btn-violet[data-v-2ded9a9e]{background:#ab8bfd}@media(max-width:767px){.content .btn-violet[data-v-2ded9a9e]{order:2}}.content .btn[data-v-2ded9a9e]:hover{background:#48e}.content .container[data-v-2ded9a9e]{display:flex;justify-content:space-between;flex-wrap:wrap}.content-desc[data-v-2ded9a9e]{font-weight:200;font-size:16px;line-height:22px;color:#fff;border:3px solid #2b2b2b;border-radius:30px;padding:20px;width:100%;margin:10px 0}@media(min-width:768px){.content-desc[data-v-2ded9a9e]{font-size:21px;line-height:25px;width:calc(100% - 390px)}}.content .content-desc[data-v-2ded9a9e]{flex-grow:1}',""]),t.exports=r},275:function(t,e,n){"use strict";n(269)},276:function(t,e,n){var r=n(104)(!1);r.push([t.i,".header[data-v-521469bc]{padding:20px 0}@media(min-width:768px){.header[data-v-521469bc]{padding:30px 0}}.header .container[data-v-521469bc]{align-items:center;position:relative}.header-menu[data-v-521469bc],.header .container[data-v-521469bc]{display:flex;justify-content:space-between}.header-menu a[data-v-521469bc]{width:55px;height:83px;border:3px solid #2b2b2b;border-radius:60px;display:flex;align-items:center;justify-content:center;transition:border-color .5s ease}@media(min-width:768px){.header-menu a[data-v-521469bc]{width:73px;height:108px}}.header-menu a[data-v-521469bc]:not(:first-child){margin-left:10px}@media(min-width:768px){.header-menu a[data-v-521469bc]:not(:first-child){margin-left:30px}}.header-menu a[data-v-521469bc]:hover{border-color:#feef00}",""]),t.exports=r},277:function(t,e,n){"use strict";n(270)},278:function(t,e,n){var r=n(104)(!1);r.push([t.i,".footer[data-v-85aa48bc]{padding:20px 0}@media(min-width:768px){.footer[data-v-85aa48bc]{padding:30px 0}}.footer .container[data-v-85aa48bc]{display:flex;justify-content:space-between;align-items:center}.footer small[data-v-85aa48bc]{font-weight:300;font-size:18px;line-height:22px;color:#fff}@media(max-width:767px){.footer small[data-v-85aa48bc]{width:150px;font-size:16px;line-height:19px}}.footer small span[data-v-85aa48bc]{color:#feef00}@media(max-width:767px){.footer small span[data-v-85aa48bc]{display:block}}.footer-logo[data-v-85aa48bc]{display:block;height:auto;width:137px}@media(max-width:767px){.footer-logo[data-v-85aa48bc]{order:2;width:120px}}",""]),t.exports=r},279:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("28f1127f",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{winWidth:0}},mounted:function(){this.winWidth=window.innerWidth}},o=(n(273),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"container"},[t.winWidth<768?n("Slider"):t._e(),t._v(" "),n("button",{staticClass:"btn btn-yellow"},[t._v("CryptoLibertyStorks")]),t._v(" "),n("button",{staticClass:"btn btn-violet"},[t._v("view opensea\n      "),n("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 33 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7.50012 2L31.5001 2M31.5001 2L31.5001 26M31.5001 2L1.50012 32",stroke:"white","stroke-width":"3","stroke-linecap":"round"}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-desc"},[n("span",[t._v("STORKS VS ORCS")]),t._v(" "),n("br"),n("br"),t._v("Evil spirits bringing pain and terror attack a prosperous country where free and happy storks live. Storks of different professions and views stood up to defend their homes to give a worthy resistance to evil. "),n("br"),n("br"),n("b",[t._v("Eternal memory and glory to the Heroes!")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-desc"},[n("span",[t._v("ABOUT PROJECT")]),t._v(" "),n("br"),n("br"),t._v("We have one GREAT goal to be gained - to save Ukrainians as a people who are destined to be a GREAT nation within our support made up in a simple way. "),n("br"),n("br"),t._v("NFT Storks represented in a super crucial way of storks delivering happiness through children's warmth right in mother’s hands. Same as we produce our NFT through volunteering, from 50% to the whole price would be given for charity. Everything you pay will be strictly donated for material and military needs to save Ukraine. Like our mothers save their children you can save somebody’s life. "),n("br"),n("br"),t._v("We are Ukrainians! "),n("br"),n("br"),t._v("Each person from our little creative family dreams of peace and freedom. Let’s make our lives free! We truly appreciate every single donation you make to get our aim to the highest point. Together we will gain good and defeat the bad. "),n("br"),n("br"),n("b",[t._v("Help the storks defeat the orcs!")])])}],!1,null,"2ded9a9e",null);e.default=component.exports;installComponents(component,{Slider:n(271).default})},281:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{winWidth:0}},mounted:function(){this.winWidth=window.innerWidth}},o=(n(275),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"header-menu"},[n("a",{attrs:{href:"https://nft-storks.creator-spring.com/"}},[n("svg",{attrs:{width:"27",height:"30",viewBox:"0 0 27 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26.471 13.3765C26.2162 15.8931 25.0791 18.4186 22.957 20.7803C21.7209 22.1558 20.3407 23.1324 18.8772 23.7447C18.4272 24.8195 17.7549 25.8649 16.8377 26.8641C14.1675 29.7734 10.7296 30.315 7.74418 29.8552C4.81949 29.4049 2.13815 27.9846 0.473679 26.6374L3.01606 23.4222C4.20759 24.3866 6.23865 25.4585 8.35659 25.7847C10.2425 26.0751 12.0256 25.7652 13.4703 24.4469C10.5129 24.0655 7.78071 22.5445 5.78188 20.7051C4.27323 19.3167 3.04084 17.6283 2.37068 15.8537C1.70296 14.0855 1.52824 12.0185 2.53152 10.1697C3.32516 8.70722 4.50432 7.76377 5.91472 7.36648C7.25744 6.98825 8.62458 7.15502 9.80758 7.51734C12.1406 8.23187 14.3687 9.89097 15.6999 11.4301C16.5964 12.4668 17.7967 14.0263 18.622 15.9149C18.9716 16.7149 19.2635 17.5974 19.431 18.5392C19.6037 18.3759 19.7754 18.1999 19.9456 18.0106C21.572 16.2006 22.2689 14.4732 22.4224 12.9569C22.5766 11.4346 22.199 9.96929 21.4206 8.65862C19.8213 5.96558 16.6429 4.11746 13.633 4.11746V0C18.12 0 22.5993 2.64858 24.9092 6.53807C26.0854 8.51867 26.7252 10.8661 26.471 13.3765ZM15.5109 20.3887C15.5388 19.4577 15.3089 18.5162 14.8997 17.5797C14.3121 16.235 13.4106 15.0359 12.6371 14.1415C11.7191 13.0801 10.1134 11.913 8.6284 11.4582C7.90242 11.2358 7.36455 11.2322 7.00634 11.3331C6.7158 11.4149 6.39809 11.6001 6.09902 12.1513C5.85469 12.6015 5.77288 13.326 6.17247 14.3842C6.56963 15.4359 7.37897 16.6088 8.52037 17.6592C10.5164 19.496 13.1111 20.6096 15.5109 20.3887Z",fill:"#53E09F"}})])]),t._v(" "),n("a",{attrs:{href:"https://medium.com/@nftstorks"}},[n("svg",{attrs:{width:"38",height:"30",viewBox:"0 0 38 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.58676 6.11993C4.63371 5.65605 4.45681 5.19757 4.11043 4.88536L0.582099 0.63492V0H11.5376L20.0056 18.5714L27.4504 0H37.8942V0.63492L34.8775 3.52734C34.6174 3.72558 34.4884 4.05141 34.5423 4.3739V25.6261C34.4884 25.9486 34.6174 26.2744 34.8775 26.4727L37.8237 29.3651V30H23.0047V29.3651L26.0567 26.4021C26.3566 26.1023 26.3566 26.0141 26.3566 25.5556V8.37743L17.8709 29.9295H16.7242L6.84489 8.37743V22.8219C6.76252 23.4292 6.96421 24.0406 7.39178 24.4797L11.3612 29.2945V29.9295H0.105774V29.2945L4.07515 24.4797C4.49961 24.0398 4.68954 23.4244 4.58676 22.8219V6.11993Z",fill:"#7B61FF"}})])]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/nftstorks"}},[n("svg",{attrs:{width:"37",height:"30",viewBox:"0 0 37 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M36.9615 3.46154C35.5769 4.15385 34.1923 4.38462 32.5769 4.61538C34.1923 3.69231 35.3461 2.30769 35.8077 0.461538C34.4231 1.38461 32.8077 1.84615 30.9615 2.30769C29.5769 0.923077 27.5 0 25.4231 0C20.5769 0 16.8846 4.61538 18.0385 9.23077C11.8077 9 6.26922 6 2.34614 1.38462C0.269221 4.84615 1.42307 9.23077 4.65384 11.5385C3.49999 11.5385 2.34614 11.0769 1.1923 10.6154C1.1923 14.0769 3.73076 17.3077 7.1923 18.2308C6.03845 18.4615 4.88461 18.6923 3.73076 18.4615C4.65384 21.4615 7.42307 23.7692 10.8846 23.7692C8.11537 25.8462 3.96153 27 0.0384521 26.5385C3.49999 28.6154 7.42307 30 11.5769 30C25.6538 30 33.5 18.2308 33.0384 7.38461C34.6538 6.46154 36.0385 5.07692 36.9615 3.46154Z",fill:"#4488EE"}})])]),t._v(" "),n("a",{attrs:{href:"https://discord.gg/fqFUdVG894"}},[n("svg",{attrs:{width:"40",height:"30",viewBox:"0 0 40 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M33.5791 2.51249C31.0466 1.33875 28.3388 0.485722 25.5079 0C25.1602 0.622678 24.754 1.46019 24.474 2.12643C21.4646 1.67811 18.483 1.67811 15.529 2.12643C15.249 1.46019 14.8336 0.622678 14.4828 0C11.6488 0.485722 8.93788 1.34188 6.40544 2.51871C1.2975 10.165 -0.0871831 17.6215 0.605158 24.972C3.99302 27.4782 7.27626 29.0007 10.5041 29.9969C11.3011 28.9104 12.0119 27.7553 12.6242 26.538C11.458 26.099 10.341 25.5573 9.28561 24.9284C9.5656 24.7229 9.83948 24.5081 10.1041 24.287C16.5413 27.2696 23.5355 27.2696 29.8958 24.287C30.1635 24.5081 30.4374 24.7229 30.7143 24.9284C29.6558 25.5604 28.5358 26.1021 27.3696 26.5411C27.9819 27.7553 28.6896 28.9135 29.4896 30C32.7206 29.0037 36.0069 27.4813 39.3947 24.972C40.2071 16.4508 38.007 9.06291 33.5791 2.51249ZM13.5012 20.4515C11.5688 20.4515 9.98406 18.6644 9.98406 16.4882C9.98406 14.312 11.5349 12.5218 13.5012 12.5218C15.4674 12.5218 17.0521 14.3088 17.0183 16.4882C17.0213 18.6644 15.4674 20.4515 13.5012 20.4515ZM26.4987 20.4515C24.5664 20.4515 22.9816 18.6644 22.9816 16.4882C22.9816 14.312 24.5325 12.5218 26.4987 12.5218C28.465 12.5218 30.0497 14.3088 30.0158 16.4882C30.0158 18.6644 28.465 20.4515 26.4987 20.4515Z",fill:"#EC3963"}})])])])])])}),[],!1,null,"521469bc",null);e.default=component.exports;installComponents(component,{Header:n(251).default})},282:function(t,e,n){"use strict";n(279)},283:function(t,e,n){var r=n(104)(!1);r.push([t.i,"main{background:#0b0b0b;min-height:100vh;overflow:hidden}.container,main{position:relative}.container{width:100%;padding-left:10px;padding-right:10px;margin-left:auto;margin-right:auto;z-index:2}@media(min-width:768px){.container{max-width:768px}}@media(min-width:992px){.container{max-width:992px}}@media(min-width:1200px){.container{max-width:1200px}}",""]),t.exports=r},284:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{winWidth:0}},mounted:function(){this.winWidth=window.innerWidth}},o=(n(282),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Header"),t._v(" "),t.winWidth>768?n("Slider"):t._e(),t._v(" "),n("Content"),t._v(" "),n("New"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(251).default,Slider:n(271).default,Content:n(280).default,New:n(281).default,Footer:n(272).default})}}]);