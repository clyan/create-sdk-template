import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    outDir: './lib',
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    sourcemap: !!options.watch,
    minify: !options.watch,
    splitting: true,
    cjsInterop: true,
    esbuildPlugins: [
      // 如果使用 import 语句引入了cjs模块，同时cjs模块导出的是module.exports.default, 那么可以通过如下方式纠正导出解决
      // https://github.com/evanw/esbuild/issues/532#issuecomment-1028893869
    ],
  }
})