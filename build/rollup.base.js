import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
export default {
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: '../src' }
      ]
    }),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({ extensions: ['.js', '.ts'], browser: true, preferBuiltins: true }),
    commonjs(),
  ],
};
