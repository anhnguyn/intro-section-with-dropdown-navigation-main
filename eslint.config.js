const html = require("@html-eslint/eslint-plugin");

// eslint.config.js
module.exports = [
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
      rules: {
          semi: "error",
          "prefer-const": "error",
          ...html.configs["flat/recommended"].rules, // Must be defined. If not, all recommended rules will be lost
          "@html-eslint/indent": "error",
      }
  }
];