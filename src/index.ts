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
  
	  let redirectURL = await env.SHORT_URLS.get(pathname);
  
	  if (!redirectURL) {
		redirectURL = "https://pavanpitiwaduge.me/not-found";
	  }
  
	  return Response.redirect(redirectURL, 301);
	},
  };