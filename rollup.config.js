import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
};

const external = ['react', 'react-dom', 'prop-types'];

export default [
    // browser-friendly UMD build
    {
        input: 'src/index.ts',
        output: {
            name: 'reactPurePlaceholder',
            file: pkg.browser,
            format: 'umd',
            globals,
        },
        external: external,
        treeshake: {
            moduleSideEffects: false,
        },
        plugins: [
            typescript(),
            replace({
                // Compile UMD package in production by default
                'process.env.NODE_ENV': 'production',
            }),
            resolve(),
            commonjs(),
            minify(),
            babel({
                exclude: 'node_modules/**', // only transpile our source code
                extensions: ['.tsx', '.ts', '.js', '.jsx', '.es6', '.es', '.mjs'],
            }),
        ],
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: 'src/index.ts',
        external: external,
        plugins: [typescript()],
        treeshake: {
            moduleSideEffects: false,
        },
        output: [
            { file: pkg.main, format: 'cjs', globals },
            { file: pkg.module, format: 'es', globals },
        ],
    },
];
