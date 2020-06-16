const withSass = require('next-typed-css/sass');
const withImages = require('next-images');

module.exports = withImages(
    withSass({
        tsCssModules: true,
        cssLoaderOptions: {
            namedExport: true,
        },
    })
);
