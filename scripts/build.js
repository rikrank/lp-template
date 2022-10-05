// 開発モードか否か
const isDev = process.env.NODE_ENV === 'development';

const { build } = require('esbuild')
const glob = require("glob");
const entryPoints = glob.sync('./src/**/*.ts')

build({
  entryPoints,
  outbase: './src', // outbaseを指定することで指定したディレクトリの構造が出力先ディレクトリに反映されるようになる,
  outdir: './dist', // 出力先ディレクトリ
  platform: 'node', // 'node' 'browser' 'neutral' のいずれかを指定,
  external: [], // バンドルに含めたくないライブラリがある場合は、パッケージ名を文字列で列挙する,
  watch: false, // trueにすれば、ファイルを監視して自動で再ビルドしてくれるようになる
  tsconfig: './tsconfig.json',
  watch: isDev,
  minify: !isDev,
  sourcemap: isDev,
})
