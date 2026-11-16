import { load as loadYaml } from "js-yaml";

export default function (eleventyConfig) {
  // Content lives in src/_data/*.yml
  eleventyConfig.addDataExtension("yml", (contents) => loadYaml(contents));

  // Files copied to the site as they are
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy({ "src/nojekyll": ".nojekyll" });

  // Bold the site owner's name inside an author list
  eleventyConfig.addFilter("highlightAuthor", (authors, me) =>
    String(authors).replace(me, `<strong>${me}</strong>`)
  );

  return {
    dir: { input: "src", output: "_site", data: "_data" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
