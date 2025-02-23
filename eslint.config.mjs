import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginJest from "eslint-plugin-jest";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // All Files
  {
    files: ["**/*.{js,mjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      },
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { "args": "none" }],
      "no-undef": "warn",
      "quotes": ["error", "double"],
      "object-curly-spacing": ["error", "always"],
      "space-before-function-paren": ["error", "always"],
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "max-len": ["warn", { "code": 125, "ignorePattern": ".*<svg.*|.*</svg.*" }],
      "jsx-quotes": ["error", "prefer-double"],
      "no-const-assign": "error",
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
      "no-mixed-operators": "error",
      "sort-imports": ["error", { "ignoreDeclarationSort": true }],
      "no-useless-return": "error",
    },
  },

  // JavaScript
  js.configs.recommended,

  // React
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { react: pluginReact },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/jsx-key": "error",
      "react/jsx-no-bind": ["warn", { "allowArrowFunctions": false }],
      "react/react-in-jsx-scope": "off",
    },
  },

  // TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": ["warn"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-destructuring": ["warn"],
    },
  },


  //JestConfig
  {
    files: ["**/__tests__/**/*.ts", "**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts"],
    plugins: { jest: pluginJest },
    rules: {
      ...pluginJest.configs.recommended.rules,
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },

];
