module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ["prettier", "prettier/react", "prettier/standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {},
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
}