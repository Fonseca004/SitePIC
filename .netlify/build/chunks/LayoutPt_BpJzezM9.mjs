import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderHead, r as renderSlot } from './astro/server_CNtLH03r.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Astronav, b as $$MenuIcon, c as $$MenuItems, d as $$SEO, e as $$Footer } from './StickyHeader_CgZerXBi.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro$1 = createAstro("https://smartrack.netlify.app/");
const $$NavbarPt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavbarPt;
  const menuitems = [
    {
      title: "Equipa",
      path: "/about"
    },
    {
      title: "Blog",
      badge: true,
      path: "/blog"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="flex flex-col lg:flex-row justify-between items-center my-5"> ${renderComponent($$result2, "Astronav", $$Astronav, {}, { "default": ($$result3) => renderTemplate` <div class="flex w-full lg:w-auto items-center justify-between"> <a href="/" class="text-lg"> <span class="font-bold text-slate-800">Smart</span><span class="text-slate-500">Rack</span> </a> <div class="block lg:hidden"> ${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "w-4 h-4 text-gray-800" })} </div> </div> ${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0" }, { "default": ($$result4) => renderTemplate` <ul class="flex flex-col lg:flex-row lg:gap-3">  <li class="flex items-center"> <a href="/en" class="flex items-center text-gray-600 hover:text-gray-900"> <img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="English" class="w-6 h-6 mr-2"> </a> <span class="mx-2">/</span> <a href="/" class="flex items-center text-gray-600 hover:text-gray-900"> <img src="https://flagicons.lipis.dev/flags/4x3/pt.svg" alt="Portuguese" class="w-6 h-6 ml-2"> </a> </li> ${menuitems.map((item, index) => renderTemplate`<li${addAttribute(index, "key")}> <a${addAttribute(item.path, "href")} class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"> <span>${item.title}</span> ${item.badge && renderTemplate`<span class="ml-1 px-2 py-0.5 text-[10px] animate-pulse font-semibold uppercase text-white bg-indigo-600 rounded-full">
Novidades
</span>`} </a> </li>`)} </ul> ` })} ` })} </header> ` })}`;
}, "/home/fonseca/SitePIC/src/components/navbarPt/navbarPt.astro", void 0);

const $$Astro = createAstro("https://smartrack.netlify.app/");
const $$LayoutPt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutPt;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  new URL(
    "/opengraph.jpg",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/dns-svgrepo-com.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->${renderComponent($$result, "SEO", $$SEO, { "title": "SmartRack", "description": "Welcome to our product page!", "canonical": canonicalURL })}${renderHead()}</head> <body> ${renderComponent($$result, "NavbarPt", $$NavbarPt, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/home/fonseca/SitePIC/src/layouts/LayoutPt.astro", void 0);

export { $$LayoutPt as $ };
