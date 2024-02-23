import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_DhYGcLxd.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    isIndex: rawRouteData.isIndex
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap\";:root{--text-color: #fff;--text-color-hover: #ffeaa9;--background-card: #2b3d2d;--background-input-card: #363636}*{box-sizing:border-box;margin:0;padding:0}html{font-family:Lato,sans-serif;font-size:62.5%;color:var(--text-color)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.inputBox[data-astro-cid-qyqq6lvs]{position:relative;width:280px}.inputBox[data-astro-cid-qyqq6lvs] svg[data-astro-cid-qyqq6lvs]{position:absolute;top:8px;left:12px}.inputBox[data-astro-cid-qyqq6lvs] input[data-astro-cid-qyqq6lvs]{width:100%;padding:10px 10px 10px 45px;border:1px solid var(--text-color);background-color:transparent;border-radius:20px;outline:none;color:var(--text-color);font-size:1.5em}.inputBox[data-astro-cid-qyqq6lvs] span[data-astro-cid-qyqq6lvs]{position:absolute;left:0;padding:10px 10px 10px 45px;pointer-events:none;font-size:1.5em;color:var(--text-color);text-transform:uppercase;transition:.5s}.inputBox[data-astro-cid-qyqq6lvs] input[data-astro-cid-qyqq6lvs]:valid~span[data-astro-cid-qyqq6lvs],.inputBox[data-astro-cid-qyqq6lvs] input[data-astro-cid-qyqq6lvs]:focus~span[data-astro-cid-qyqq6lvs]{color:var(--text-color-hover);transform:translate(20px,-4px);font-size:1em;padding:0 10px;background-color:var(--background-card);border-left:1px solid var(--text-color-hover);border-right:1px solid var(--text-color-hover);letter-spacing:.2em}.inputBox[data-astro-cid-qyqq6lvs] input[data-astro-cid-qyqq6lvs]:valid,.inputBox[data-astro-cid-qyqq6lvs] input[data-astro-cid-qyqq6lvs]:focus{border:1px solid var(--text-color-hover)}.btn-send[data-astro-cid-vnzlvqnm]{width:150px;padding:10px;border:1px solid var(--text-color-hover);background-color:var(--text-color-hover);text-transform:uppercase;font-weight:600;font-size:18px;color:var(--background-card);border-radius:20px;transition:.3s}.btn-send[data-astro-cid-vnzlvqnm]:hover{cursor:pointer;background-color:var(--background-card);color:var(--text-color-hover)}.main-card-container[data-astro-cid-dohjnao5]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;width:367px;height:322px;background-color:var(--background-card);border-radius:25px}.main-card-container[data-astro-cid-dohjnao5] h2[data-astro-cid-dohjnao5]{margin-bottom:20px;font-weight:500;font-size:2.4rem}.main-container[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background-image:url(/_astro/background.BrgXcEFQ.jpg);background-size:cover;background-repeat:no-repeat}.main-container[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6]{text-align:center;margin:0 40px 52px;font-weight:500;font-size:2.4rem}.main-container[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6] span[data-astro-cid-j7pv25f6]{color:var(--text-color-hover)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://Yarce22.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/alejo/OneDrive/Documentos/Programacion/Whitelist/WhiteList/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_EUkGOww8.mjs","/src/pages/index.astro":"chunks/pages/index_BIwWyLUE.mjs","\u0000@astrojs-manifest":"manifest_B8WwnZUI.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CbnVaQ7d.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_D43jIn6-.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/background.BrgXcEFQ.jpg","/favicon.svg"],"buildFormat":"directory"});

export { manifest };
