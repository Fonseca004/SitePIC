import { a as createComponent, m as maybeRenderHead, e as renderComponent, d as renderTemplate } from '../chunks/astro/server_CNtLH03r.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../chunks/StickyHeader_CgZerXBi.mjs';
import { $ as $$Link, a as $$Icon, i as imagem1, b as $$Logos } from '../chunks/logos_Dr6kWLAA.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_BMB3ekgJ.mjs';
import { $ as $$LayoutPt } from '../chunks/LayoutPt_BpJzezM9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$CtaPt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"> <h2 class="text-white text-4xl md:text-6xl tracking-tight">Smart Rack.</h2> <p class="text-slate-400 mt-4 text-lg md:text-xl">
Leia o nosso blog para conhecer o projeto e a equipa!
</p> <div class="flex mt-5 gap-4"> ${renderComponent($$result, "Link", $$Link, { "href": "/blog", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "Link", $$Link, { "href": "/about", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Equipa` })} ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "https://github.com/Fonseca004/SitePIC", "class": "flex gap-1 items-center justify-center", "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-black w-4 h-4", "name": "bx:bxl-github" })}
GitHub
` })} </div> </div>`;
}, "/home/fonseca/SitePIC/src/components/ctaPt.astro", void 0);

const $$FeaturesPt = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Efic\xE1cia",
      description: "You can expect your clothes to dry faster in bad weather, without compromising effectiveness in ideal conditions.",
      icon: "bx:bxs-briefcase"
    },
    {
      title: "Descanso",
      description: "Simply hang your clothes and relax\u2014even if it starts to rain.",
      icon: "bx:bxs-window-alt"
    },
    {
      title: "Poupan\xE7a",
      description: "The initial investment is low, while your energy cost savings will be high.",
      icon: "bx:bxs-data"
    },
    {
      title: "Design",
      description: "With its minimal design, our product seamlessly blends into your building's aesthetic.",
      icon: "bx:bxs-bot"
    },
    {
      title: "Comunidade",
      description: "SmartRack helps build a more sustainable and considerate community\u2014one that values both convenience and environmental responsibility.",
      icon: "bx:bxs-user"
    },
    {
      title: "Ambiente",
      description: "By consuming less energy, you are not only saving money but also helping the Earth.",
      icon: "bx:bxs-user"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0"> <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
Porquê SmartRack
</h2> <p class="text-lg mt-4 text-slate-600">
Seis razões que fazem do nosso produto um ótimo investimento.
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"> ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start"> <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="font-semibold text-lg">${item.title}</h3>${" "} <p class="text-slate-500 mt-2 leading-relaxed">${item.description}</p> </div> </div>`)} </div>`;
}, "/home/fonseca/SitePIC/src/components/featuresPt.astro", void 0);

const $$HeroPt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24"> <div class="py-6 md:order-1 hidden md:block"> ${renderComponent($$result, "Picture", $$Picture, { "src": imagem1, "alt": "Smart Rack", "widths": [100, 200, 300], "sizes": "(max-width: 800px) 50vw, 310px", "loading": "eager", "format": "avif", "style": { width: "300px", height: "auto" } })} </div> <div> <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
SmartRack
</h1> <p class="text-lg mt-4 text-slate-600 max-w-xl">
SmartRack é um estendal inovador concebido para maximizar a eficiência ao
      pendurar a roupa no exterior. O nosso objetivo é reduzir o consumo de
      energia, proporcionando-lhe tranquilidade ao saber que a sua roupa estará
      protegida da chuva.
</p><p class="text-lg mt-4 text-slate-600 font-semibold max-w-xl">
Ajude-nos a melhorar o nosso projeto! Partilhe a sua opinião através
        deste breve formulário e faça parte da inovação.
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3"> ${renderComponent($$result, "Link", $$Link, { "href": "https://docs.google.com/forms/d/e/1FAIpQLSfTUQXNzsvIKweVtNd8QL_6-aumfHLFUqW4osTjwRngtvyzrg/viewform?usp=sharing", "target": "_blank", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-white w-5 h-5", "name": "bx:bxs-cloud-download" })}
Feedback!
` })} </div>  </div> </main>`;
}, "/home/fonseca/SitePIC/src/components/heroPt.astro", void 0);

const $$WhatPt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0"> <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
Funcionamento
</h2> <p class="text-lg mt-4 text-slate-600">
O SmartRack possui um sistema automático de dobragem que é ativado quando um
    sensor de chuva deteta precipitação acima de um determinado limiar (a ser
    definido através de experimentação). As laterais são protegidas por lâminas
    horizontais, que podem abrir ou fechar para proteger as roupas ou permitir a
    circulação de ar, dependendo das condições meteorológicas.
</p> <p class="text-lg mt-4 text-slate-600">
Para evitar que o sistema se ligue e desligue repetidamente devido a
    interferências, implementámos um controlo de histerese, garantindo maior
    estabilidade e fiabilidade.
</p>  </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"> ${ void 0} </div>`;
}, "/home/fonseca/SitePIC/src/components/whatPt.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPt", $$LayoutPt, { "title": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HeroPt", $$HeroPt, {})} ${renderComponent($$result3, "WhatPt", $$WhatPt, {})} ${renderComponent($$result3, "FeaturesPt", $$FeaturesPt, {})} ${renderComponent($$result3, "Logos", $$Logos, {})} ${renderComponent($$result3, "CtaPt", $$CtaPt, {})} ` })} ` })}`;
}, "/home/fonseca/SitePIC/src/pages/index.astro", void 0);

const $$file = "/home/fonseca/SitePIC/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
