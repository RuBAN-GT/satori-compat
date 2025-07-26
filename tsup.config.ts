import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  ignoreWatch: ['node_modules', 'dist'],
  format: ['cjs', 'esm'],
  platform: 'node',
  target: 'node22',
  skipNodeModulesBundle: false,
  noExternal: ['satori', 'yoga-layout'],
  dts: true,
  sourcemap: true,
  bundle: true,
  minify: true,
  clean: true,
})
