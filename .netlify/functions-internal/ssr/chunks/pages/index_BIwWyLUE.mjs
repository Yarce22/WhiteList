import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_DhYGcLxd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$4 = createAstro("https://Yarce22.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/alejo/OneDrive/Documentos/Programacion/Whitelist/WhiteList/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro("https://Yarce22.github.io");
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Input;
  return renderTemplate`${maybeRenderHead()}<label class="inputBox" data-astro-cid-qyqq6lvs> <svg class="email-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qyqq6lvs><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-qyqq6lvs></path><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor" data-astro-cid-qyqq6lvs></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor" data-astro-cid-qyqq6lvs></path></svg> <input type="email" required data-astro-cid-qyqq6lvs> <span data-astro-cid-qyqq6lvs>email</span> </label> <label class="inputBox" data-astro-cid-qyqq6lvs> <svg class="key-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qyqq6lvs><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-qyqq6lvs></path><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0c0 -5.523 4.477 -10 10 -10zm2 5a3 3 0 0 0 -2.98 2.65l-.015 .174l-.005 .176l.005 .176c.019 .319 .087 .624 .197 .908l.09 .209l-3.5 3.5l-.082 .094a1 1 0 0 0 0 1.226l.083 .094l1.5 1.5l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-.792 -.793l.585 -.585l.793 .792l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-.792 -.793l.792 -.792a3 3 0 1 0 1.293 -5.708zm0 2a1 1 0 1 1 0 2a1 1 0 0 1 0 -2z" stroke-width="0" fill="currentColor" data-astro-cid-qyqq6lvs></path></svg> <input type="text" required data-astro-cid-qyqq6lvs> <span data-astro-cid-qyqq6lvs>código</span> </label> `;
}, "C:/Users/alejo/OneDrive/Documentos/Programacion/Whitelist/WhiteList/src/components/Input.astro", void 0);

const $$Astro$2 = createAstro("https://Yarce22.github.io");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  return renderTemplate`${maybeRenderHead()}<button class="btn-send" data-astro-cid-vnzlvqnm>enviar</button> `;
}, "C:/Users/alejo/OneDrive/Documentos/Programacion/Whitelist/WhiteList/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro("https://Yarce22.github.io");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  return renderTemplate`${maybeRenderHead()}<form class="main-card-container" data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5>REGISTRATE</h2> ${renderComponent($$result, "Input", $$Input, { "data-astro-cid-dohjnao5": true })} ${renderComponent($$result, "Button", $$Button, { "data-astro-cid-dohjnao5": true })} </form> `;
}, "C:/Users/alejo/OneDrive/Documentos/Programacion/Whitelist/WhiteList/src/components/Card.astro", void 0);

const $$Astro = createAstro("https://Yarce22.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WhiteList", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-container" data-astro-cid-j7pv25f6> <h1 class="main-title" data-astro-cid-j7pv25f6>UNETE A LA RED <span data-astro-cid-j7pv25f6> TECNOLOGICA </span> <br data-astro-cid-j7pv25f6> MÁS GRANDE</h1> ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/alejo/OneDrive/Documentos/Programacion/Whitelist/WhiteList/src/pages/index.astro", void 0);

const $$file = "C:/Users/alejo/OneDrive/Documentos/Programacion/Whitelist/WhiteList/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
