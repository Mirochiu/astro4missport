import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './chunk.b0db1f2f.js';
import 'clsx';
import { $ as $$Layout } from './chunk.1b24fd3f.js';
/* empty css                */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro4missport.mirochiu.page");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MIS Sport \u7C73\u8A69\u570B\u969B" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<section id="banner"> <video autoplay muted loop playsinline poster="" class="video-background" style="position:absolute; top:0; left:0; width:100%; height: 100%; object-fit: cover; filter: brightness(100%);"> <source src="https://storage.googleapis.com/mis-sport/video/video-bl01.mp4" type="video/mp4"> </video> <div class="inner"> <h1>2023 \u590F\u65E5\u65B0\u54C1\u4E0A\u5E02<br><br></h1> <div class="content"> <p> <br>\nBICYCLE-LINE \u73FE\u6B63\u63A8\u51FA\u7E7D\u7D1B\u7684\u590F\u65E5\u7CFB\u5217\u3002\n					\u8207\u760B\u72C2\u70C8\u65E5\u4E0B\u4F9D\u7136\u71B1\u8877\u5192\u96AA\u7684\u60A8\uFF0C\u4E00\u8D77\u6311\u6230\u708E\u71B1\u7684\u590F\u5B63\u3002\n</p> <ul class="actions special"> <li> <a href="bicycle-line" class="button large next">\u77AD\u89E3\u66F4\u591A</a> </li> </ul> </div> </div> </section> <script defer src="/assets/js/home-banner.js"><\/script> '])), maybeRenderHead()) })}`;
}, "/mnt/hdd2/node.repo/test-astro/better-binary/src/pages/index.astro", void 0);

const $$file = "/mnt/hdd2/node.repo/test-astro/better-binary/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
