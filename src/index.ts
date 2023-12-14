// src/index.ts
export interface Env {
	SHORT_URLS: KVNamespace;
  }
  
  export default {
	async fetch(
	  request: Request,
	  env: Env,
	  _ctx: ExecutionContext
	): Promise<Response> {
	  const url = new URL(request.url);
  
	  const { pathname } = url;
  
	  const redirectURL = await env.SHORT_URLS.get(pathname);
  
	  if (!redirectURL) {
		return new Response(
		  `There is no defined URL for the path: '${pathname}', sorry :(`
		);
	  }
  
	  return Response.redirect(redirectURL, 301);
	},
  };