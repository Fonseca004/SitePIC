import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_CNtLH03r.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_vl7M46n6.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_BMB3ekgJ.mjs';
import { $ as $$LayoutPt } from '../chunks/LayoutPt_BpJzezM9.mjs';
import { $ as $$Container } from '../chunks/StickyHeader_CgZerXBi.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_D_r5KbCh.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const publishedTeamMembers = await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "LayoutPt", $$LayoutPt, { "title": "About" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`Somos uma pequena equipa dedicada.` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Equipa SmartRack` })}` })} ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"> <h2 class="font-bold text-3xl text-gray-800">
Secar a sua roupa de forma eficaz.
</h2> <p class="text-lg leading-relaxed text-slate-500">
Somos um grupo de seis estudantes do Instituto Superior Técnico (IST)
        situados em Lisboa. Provenientes de diversas áreas, trazemos uma
        variedade de personalidades, experiências e competências para o nosso
        projeto.
</p> </div> <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12"> ${publishedTeamMembers.map((teamMemberEntry) => renderTemplate`<div class="group"> <a class="w-full aspect-square"${addAttribute(teamMemberEntry.data.link, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result3, "Picture", $$Picture, { "src": teamMemberEntry.data.avatar.src, "alt": teamMemberEntry.data.avatar.alt, "sizes": "(max-width: 800px) 100vw, 400px", "width": 400, "height": 400, "class": "w-full rounded-sm transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square" })} </a> <div class="mt-4 text-center"> <h2 class="text-lg text-gray-800">${teamMemberEntry.data.name}</h2> <h3 class="text-sm text-slate-500"> ${teamMemberEntry.data.title} </h3> </div> </div>`)} </div> ` })} ` })}`;
}, "/home/fonseca/SitePIC/src/pages/about.astro", void 0);

const $$file = "/home/fonseca/SitePIC/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
