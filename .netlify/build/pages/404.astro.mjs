import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CNtLH03r.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../chunks/StickyHeader_CgZerXBi.mjs';
import { $ as $$LayoutEn } from '../chunks/LayoutEn_CNbvt1fR.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutEn", $$LayoutEn, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-16rem)] flex items-center justify-center"> <div class="mt-16 text-center"> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">404</h1> <p class="text-lg mt-4 text-slate-600">Page not found.</p> </div> </div> ` })} ` })}`;
}, "/home/fonseca/SitePIC/src/pages/404.astro", void 0);

const $$file = "/home/fonseca/SitePIC/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
