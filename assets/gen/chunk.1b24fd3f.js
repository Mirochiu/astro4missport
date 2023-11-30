import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, e as renderSlot, f as renderHead } from './chunk.b0db1f2f.js';
import 'clsx';
import { $ as $$Copyright, a as $$Navigator, b as $$Header } from './chunk.6873f79a.js';
/* empty css                *//* empty css                */
const $$Astro$2 = createAstro("https://astro4missport.mirochiu.page");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!-- Footer -->${maybeRenderHead()}<section id="footer" class="wrapper"> <div class="inner"> <div class="split"> <div class="content"> <header> <h2> <img src="https://storage.googleapis.com/mis-sport/logo/mis-logo.png" alt="logo" width="38" height="auto" class="rounded-circle"> 關於我們
</h2> </header> <p> <span class="image left"> <img src="https://storage.googleapis.com/mis-sport/home/mis-sport-shop.jpg" alt=""> </span>
MIS
                    Sport於2016創立，成員皆是單車的愛好者，主因是對運動及單車的熱誠，進而成立公司，想把好的單車產品推廣給台灣喜愛單車活動的朋友．
<br>
如同我們的口號"you are not
                    alone"一樣，我們的責任是建立一個友善的騎車環境與社群，透過騎乘單車，連結我們與社群之間的情誼．
</p> </div> <ul class="contact-icons"> <li> <a href="https://www.facebook.com/MISsports" class="icon brands alt fa-facebook-f"><span class="label">FB@MISsports</span></a> </li> <li> <a href="https://line.me/R/ti/p/@457xrpaj" class="icon brands alt fa-line"><span class="label">LINE@Mis Sport</span></a> </li> <li> <a href="mailto:official@mis-sport.com" class="icon solid alt fa-envelope"><span class="label">official@mis-sport.com</span></a> </li> <li> <a href="tel:+886-2-28853525" class="icon solid alt fa-phone"><span class="label">(02) 2885 3525</span></a> </li> </ul> </div> </div> </section>`;
}, "/mnt/hdd2/node.repo/test-astro/better-binary/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://astro4missport.mirochiu.page");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, darkText } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<html> <head><title>", '</title><meta charset="utf-8"><link rel="icon" type="images/x-icon" href="https://storage.googleapis.com/mis-sport/logo/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"><link rel="stylesheet" href="/assets/css/main.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"><\/script><script defer src="/assets/js/jquery.min.js"><\/script><script defer src="/assets/js/jquery.scrollex.min.js"><\/script><script defer src="/assets/js/jquery.scrolly.min.js"><\/script><script defer src="/assets/js/jquery.selectorr.min.js"><\/script><script defer src="/assets/js/browser.min.js"><\/script><script defer src="/assets/js/breakpoints.min.js"><\/script><script defer src="/assets/js/util.js"><\/script><script defer src="/assets/js/main.js"><\/script>', '</head> <body class="is-preload"> <!-- Page wrapper --> <div id="page-wrapper"> ', " ", " ", " </div> ", " ", " </body></html>"])), title, renderHead(), renderComponent($$result, "Header", $$Header, { "darkText": darkText }), renderComponent($$result, "Navigator", $$Navigator, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Copyright", $$Copyright, {}));
}, "/mnt/hdd2/node.repo/test-astro/better-binary/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro4missport.mirochiu.page");
const $$Ale = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ale;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ALE CYCLING | MIS Sport \u7C73\u8A69\u570B\u969B", "darkText": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<section id="aleBanner1"> <video autoplay muted loop playsinline poster="" class="video-background" style="position:absolute; top:0; left:0; width:100%; height: 100%; object-fit: cover; filter: brightness(70%);"> <source src="https://storage.googleapis.com/mis-sport/video/video-ale01.m4v" type="video/mp4"> </video> <div class="inner"> <h1>ALE SUMMER<br><br></h1> <h6> <br>\u5728\u6BCF\u4E00\u5929\uFF0C\u6BCF\u4E00\u6B21\u9A0E\u4E58\uFF0C\u4EAB\u53D7\u7576\u4E0B\u4E26\u76E1\u60C5\u4EAB\u53D7\u751F\u6D3B\u3002\n</h6> </div> </section> <section id="aleSummer" class="wrapper style2 product-list"> <div class="inner"> <div class="d-block d-lg-none"> <div class="col-12"> <select class="select-tabs" style="border-color: #000000;box-shadow: 0 0 0 1px #000000;" onchange="onTabSelected(event);"></select> </div> </div> <ul class="tabs"></ul> </div> </section>  <section id="aleBanner2"> <video autoplay muted loop playsinline poster="" class="video-background" style="position:absolute; top:0; left:0; width:100%; height: 100%; object-fit: cover; filter: brightness(70%);"> <source src="https://storage.googleapis.com/mis-sport/video/video-ale02.mp4" type="video/mp4"> </video> <div class="inner"> <h1>ALE WINTER<br><br></h1> <h6> <br>\u7121\u61FC\u5BD2\u51B7\u7684\u6EAB\u5EA6\u3001\u98A8\u4EE5\u53CA\u96E8\u3002\n<br>\u7121\u8AD6\u5728\u4F55\u7A2E\u689D\u4EF6\u4E0B\u9A0E\u4E58\uFF0CAl\xE9\n                \u59CB\u7D42\u6703\u8B93\u60A8\u611F\u5230\u4FDD\u8B77\u3001\u4E7E\u723D\u3001\u900F\u6C23\uFF0C\u8B93\u60A8\u7684\u904B\u52D5\u8868\u73FE\u80FD\u5920\u767C\u63EE\u5230\u6975\u81F4\u3002\n</h6> </div> </section> <section id="aleWinter" class="wrapper style2 product-list"> <div class="inner"> <div class="d-block d-lg-none"> <div class="col-12"> <select class="select-tabs" style="border-color: #000000;box-shadow: 0 0 0 1px #000000;" onchange="onTabSelected(event);"></select> </div> </div> <ul class="tabs"></ul> </div> </section>  <script defer src="/assets/js/ale-banner-1.js"><\/script> <script defer src="/assets/js/ale-banner-2.js"><\/script> <script defer src="/assets/js/jquery.selectorr.min.js"><\/script>  '])), maybeRenderHead()) })}`;
}, "/mnt/hdd2/node.repo/test-astro/better-binary/src/pages/ale.astro", void 0);

const $$file = "/mnt/hdd2/node.repo/test-astro/better-binary/src/pages/ale.astro";
const $$url = "/ale";

const ale = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Ale,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, ale as a };
