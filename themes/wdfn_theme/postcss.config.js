const autoprefixerBrowsers = [
    '> 1%',
    'Last 2 versions',
    'IE 11'
];

module.exports = ctx => ({
    map: Object.assign({}, ctx.options.map, {inline: false}),
    parser: ctx.options.parser,
    plugins: {
        autoprefixer: autoprefixerBrowsers,
        'postcss-csso': {
            forceMediaMerge: false
        },
        'postcss-flexbugs-fixes': {}
    }
});
