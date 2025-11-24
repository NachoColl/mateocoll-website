module.exports = function(eleventyConfig) {
  // Pass through assets - copy src/assets to _site/assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Watch for changes
  eleventyConfig.addWatchTarget("src/assets/");

  return {
    dir: {
      input: "src/templates",
      output: "_site",
      includes: "_includes",
      data: "../data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
