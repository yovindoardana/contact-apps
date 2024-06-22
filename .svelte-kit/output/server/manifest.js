export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BfW19REx.js","app":"_app/immutable/entry/app.Ce8scF_A.js","imports":["_app/immutable/entry/start.BfW19REx.js","_app/immutable/chunks/entry.DN4HMRG1.js","_app/immutable/chunks/scheduler.D6ZpgZnC.js","_app/immutable/entry/app.Ce8scF_A.js","_app/immutable/chunks/scheduler.D6ZpgZnC.js","_app/immutable/chunks/index.Dm803EQQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/add",
				pattern: /^\/add\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/update/[contactId]",
				pattern: /^\/update\/([^/]+?)\/?$/,
				params: [{"name":"contactId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
