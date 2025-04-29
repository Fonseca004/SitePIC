import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_CNtLH03r.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/fonseca/SitePIC/","cacheDir":"file:///home/fonseca/SitePIC/node_modules/.astro/","outDir":"file:///home/fonseca/SitePIC/dist/","srcDir":"file:///home/fonseca/SitePIC/src/","publicDir":"file:///home/fonseca/SitePIC/public/","buildClientDir":"file:///home/fonseca/SitePIC/dist/","buildServerDir":"file:///home/fonseca/SitePIC/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DzZA8k2B.css"},{"type":"inline","content":"img{content-visibility:auto}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DzZA8k2B.css"},{"type":"inline","content":"img{content-visibility:auto}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DzZA8k2B.css"},{"type":"inline","content":"img{content-visibility:auto}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DzZA8k2B.css"},{"type":"inline","content":"img{content-visibility:auto}\n"}],"routeData":{"route":"/en/about","isIndex":false,"type":"page","pattern":"^\\/en\\/about\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/about.astro","pathname":"/en/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DzZA8k2B.css"},{"type":"inline","content":"img{content-visibility:auto}\n"}],"routeData":{"route":"/en/blog","isIndex":false,"type":"page","pattern":"^\\/en\\/blog\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/blog.astro","pathname":"/en/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DzZA8k2B.css"},{"type":"inline","content":"img{content-visibility:auto}\n"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DzZA8k2B.css"},{"type":"inline","content":"img{content-visibility:auto}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://smartrack.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/fonseca/SitePIC/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/fonseca/SitePIC/src/pages/en/about.astro",{"propagation":"in-tree","containsHead":true}],["/home/fonseca/SitePIC/src/pages/en/blog.astro",{"propagation":"in-tree","containsHead":true}],["/home/fonseca/SitePIC/src/pages/en/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/fonseca/SitePIC/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["/home/fonseca/SitePIC/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/home/fonseca/SitePIC/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["/home/fonseca/SitePIC/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/fonseca/SitePIC/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/en/about@_@astro":"pages/en/about.astro.mjs","\u0000@astro-page:src/pages/en/blog/[slug]@_@astro":"pages/en/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/en/blog@_@astro":"pages/en/blog.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/home/fonseca/SitePIC/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_cGffdACT.mjs","/home/fonseca/SitePIC/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_B5AMt4kF.mjs","/home/fonseca/SitePIC/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","\u0000@astrojs-manifest":"manifest_CvrsNGWA.mjs","/home/fonseca/SitePIC/.astro/content-assets.mjs":"chunks/content-assets_BJuL-By_.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/pic3.CKxte_dy.jpg","/_astro/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","/_astro/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","/_astro/bricolage-grotesque-vietnamese-wght-normal.BUzh504Q.woff2","/_astro/inter-cyrillic-wght-normal.CMZtQduZ.woff2","/_astro/inter-latin-ext-wght-normal.CFHvXkgd.woff2","/_astro/inter-greek-wght-normal.CaVNZxsx.woff2","/_astro/bricolage-grotesque-latin-ext-wght-normal.Bng-wUCG.woff2","/_astro/inter-latin-wght-normal.C2S99t-D.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/bricolage-grotesque-latin-wght-normal.SiLHXWCe.woff2","/_astro/monge2.aNtepXFu.jpg","/_astro/1703008748319.C8_I_-Pq.jpg","/_astro/1714046836558.DH-Jb9C9.jpg","/_astro/1726413499615.CqmdQqA7.jpg","/_astro/1732103205102.OV9WVF4E.jpg","/_astro/palma.DkWrn7I0.jpg","/_astro/pic1.m6w_Kj1F.jpg","/_astro/week3.C608GOK2.jpeg","/_astro/week4.XIVDPmwf.jpeg","/_astro/week5.DIhpCECC.jpg","/_astro/hero.DlKDY3ml.png","/_astro/market.Cy90zvPu.jpg","/_astro/about.DzZA8k2B.css","/dns-svgrepo-com.svg","/favicon.svg","/robots.txt"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"4xdL+BWsiojy8p5Itx7Sm4VTLV8Xv/WQVteZhJt3c4A=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/fonseca/SitePIC/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
