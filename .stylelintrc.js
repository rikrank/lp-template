module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order", "stylelint-prettier/recommended"],
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        "except": ["blockless-after-blockless", "first-nested"],
        "ignore": ["after-comment"],
        "ignoreAtRules": ["else"]
      }
    ],
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": null,
    "keyframes-name-pattern": null, // keyframesでkebab-case以外も許容
    "selector-class-pattern": null, // classでkebab-case以外も許容
    "selector-id-pattern": null, // idでkebab-case以外も許容
    "scss/at-function-pattern": null, // SCSS関数の命名を小文字以外も許容する
    "scss/at-mixin-pattern": null, // mixinでkebab-case以外も許容
    "scss/dollar-variable-pattern": null, // $変数でkebab-case以外も許容
    "scss/no-duplicate-dollar-variables": true, // $変数の重複を禁止
    "scss/percent-placeholder-pattern": null, // %placeholderでkebab-case以外も許容
    "scss/at-extend-no-missing-placeholder": null, // @extendで%placeholder以外も許容
    "scss/no-global-function-names": null, // グローバル関数名の使用を禁止
    "no-empty-source": null, // ソースコードのないファイルを許容する
    "scss/double-slash-comment-whitespace-inside": null, // commentsの後//の空白を要求または禁止する
    "selector-pseudo-element-colon-notation": "double", // 擬似要素の後につくコロンを「ダブルクォーテーション」だけに制限する
    "string-quotes": "double", // ダブルクォーテーションに絞る
    "prettier/prettier": true
  },
  ignoreFiles: ["**/*.html", "**/*.css", "**/*.js"]
}
