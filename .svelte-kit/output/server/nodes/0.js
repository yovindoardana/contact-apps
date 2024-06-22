

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BVkqBqom.js","_app/immutable/chunks/scheduler.D6ZpgZnC.js","_app/immutable/chunks/index.Dm803EQQ.js","_app/immutable/chunks/entry.DN4HMRG1.js"];
export const stylesheets = ["_app/immutable/assets/0.BltqWTQb.css"];
export const fonts = [];
