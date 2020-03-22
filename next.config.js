const withSass = require('next-typed-css/sass');

module.exports = withSass({
    tsCssModules: true,
    cssLoaderOptions: {
        namedExport: true,
    },
});
