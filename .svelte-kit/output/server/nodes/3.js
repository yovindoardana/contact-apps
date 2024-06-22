import * as server from '../entries/pages/add/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/add/+page.server.js";
export const imports = ["_app/immutable/nodes/3.sdV-jpPG.js","_app/immutable/chunks/scheduler.D6ZpgZnC.js","_app/immutable/chunks/index.Dm803EQQ.js","_app/immutable/chunks/forms.CY0PUmjS.js","_app/immutable/chunks/entry.DN4HMRG1.js"];
export const stylesheets = [];
export const fonts = [];
