module.exports = function(eleventyConfig) {
  // Pass through assets - copy src/assets to _site/assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Watch for changes
  eleventyConfig.addWatchTarget("src/assets/");

  // Use pathPrefix only when deploying to GitHub Pages subdirectory
  // When custom domain is configured, this will be empty
  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "";

  return {
    dir: {
      input: "src/templates",
      output: "_site",
      includes: "_includes",
      data: "../data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: pathPrefix
  };
};
