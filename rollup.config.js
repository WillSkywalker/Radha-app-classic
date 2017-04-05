import nodeResolve from 'rollup-plugin-node-resolve';
import alias from 'rollup-plugin-alias';

export default {
    entry: 'src/main.aot.js',
    format: 'iife',
    plugins: [
        alias({ rxjs: __dirname + '/node_modules/rxjs-es' }),
        nodeResolve({ jsnext: true, main: true })
    ]
};