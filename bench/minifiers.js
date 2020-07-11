const htmlMinifier = require("html-minifier");
const minifyHtml = require("@minify-html/js-esbuild");
const minimize = require("minimize");

module.exports = {
  'minify-html-nodejs': (_, buffer) => minifyHtml.minifyInPlace(Buffer.from(buffer), {minifyJs: false}),
  'html-minifier': content => htmlMinifier.minify(content, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    // minify-html can do context-aware whitespace removal, which is safe when configured correctly to match how whitespace is used in the document.
    // html-minifier cannot, so whitespace must be collapsed conservatively.
    // Alternatively, minify-html can also be made to remove whitespace regardless of context.
    conservativeCollapse: true,
    customEventAttributes: [],
    decodeEntities: true,
    ignoreCustomComments: [],
    ignoreCustomFragments: [/<\?[\s\S]*?\?>/],
    processConditionalComments: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
    useShortDoctype: true,
  }),
  'minimize': content => new minimize().parse(content),
};
