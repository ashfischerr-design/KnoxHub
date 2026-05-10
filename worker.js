export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Try to serve the real file, fall back to index.html
    try {
      return await env.ASSETS.fetch(request);
    } catch {
      const indexUrl = new URL('/index.html', url.origin);
      return env.ASSETS.fetch(indexUrl);
    }
  }
}
