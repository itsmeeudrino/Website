require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@recodive/eslint-config/vue.cjs",
    "plugin:prettier/recommended",
    "@unocss",
  ],
};
