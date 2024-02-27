const SitemapGenerator = require("sitemap-generator");

// create generator
const generator = SitemapGenerator("https://himanshujangid.com", {
  stripQuerystring: false,
});

// register event listeners
generator.on("done", () => {
  // sitemaps created
});

// start the crawler
generator.start();
