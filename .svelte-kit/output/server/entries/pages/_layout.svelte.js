import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="" data-svelte-h="svelte-1llatja"><nav class="bg-gray-800"><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-16 items-center justify-between"><div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"><div class="flex flex-shrink-0 items-center"><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company"></div> <h1 class="text-3xl font-bold tracking-tight text-gray-50 ml-3">Contacts App</h1></div></div></div></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col min-h-screen">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="flex flex-1 flex-col p-4 w-full max-w-5xl mx-auto box-border">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
