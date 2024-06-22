import * as server from '../entries/pages/update/_contactId_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/update/_contactId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/update/[contactId]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.iu7N1vEV.js","_app/immutable/chunks/scheduler.D6ZpgZnC.js","_app/immutable/chunks/index.Dm803EQQ.js","_app/immutable/chunks/forms.CY0PUmjS.js","_app/immutable/chunks/entry.DN4HMRG1.js"];
export const stylesheets = [];
export const fonts = [];
