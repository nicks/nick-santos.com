const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function(cfg) {
  cfg.addPlugin(svgContents);
  cfg.addPassthroughCopy("css");
  cfg.addPassthroughCopy("img");
}
