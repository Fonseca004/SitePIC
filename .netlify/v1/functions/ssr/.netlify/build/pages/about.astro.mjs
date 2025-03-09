import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_BdWurNr1.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_CeTI2mdM.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_LKXAFkK0.mjs';
import { $ as $$Layout, a as $$Container } from '../chunks/Layout_C_xIZo5e.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_C1iOeUgh.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const publishedTeamMembers = await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a small passionate team.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About Us` })}` })} ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"> <h2 class="font-bold text-3xl text-gray-800">
Drying your clothes effectively.
</h2> <p class="text-lg leading-relaxed text-slate-500">
We are a team of six students from Instituto Superior Técnico (IST) in
        Lisbon, Portugal! Coming from diverse backgrounds, we bring a variety of
        personalities, experiences, and skills to our project.
</p> </div> <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12"> ${publishedTeamMembers.map((teamMemberEntry) => renderTemplate`<div class="group"> <a class="w-full aspect-square"${addAttribute(teamMemberEntry.data.link, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result3, "Picture", $$Picture, { "src": teamMemberEntry.data.avatar.src, "alt": teamMemberEntry.data.avatar.alt, "sizes": "(max-width: 800px) 100vw, 400px", "width": 400, "height": 400, "class": "w-full rounded-sm transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square" })} </a> <div class="mt-4 text-center"> <h2 class="text-lg text-gray-800">${teamMemberEntry.data.name}</h2> <h3 class="text-sm text-slate-500"> ${teamMemberEntry.data.title} </h3> </div> </div>`)} </div> ` })} ` })}`;
}, "/home/josef/SitePIC/src/pages/about.astro", void 0);

const $$file = "/home/josef/SitePIC/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
