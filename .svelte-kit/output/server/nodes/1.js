

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B-5gG-6I.js","_app/immutable/chunks/scheduler.D6ZpgZnC.js","_app/immutable/chunks/index.Dm803EQQ.js","_app/immutable/chunks/entry.DN4HMRG1.js"];
export const stylesheets = [];
export const fonts = [];
