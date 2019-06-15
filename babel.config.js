module.exports = api => {
    const presets = [['@babel/env', { modules: false }], '@babel/preset-react'];
    const plugins = [
        '@babel/plugin-proposal-object-rest-spread',
        [
            '@babel/plugin-transform-block-scoping',
            {
                throwIfClosureRequired: true,
            },
        ],
    ];

    if (api.env('test')) {
        plugins.push(['@babel/plugin-transform-modules-commonjs']);
    }

    return {
        presets,
        plugins,
    };
};
