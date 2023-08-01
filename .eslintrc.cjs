
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "no-undef": "off",
      "indent": ["error", 2],
      "no-console": "error",
      "no-dupe-args": "error",
      "no-duplicate-case": "error",
      "no-dupe-keys": "error",
      "no-empty-pattern": "error",
      "no-unreachable": "error",
      "no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "ignoreRestSiblings": true,
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ],
      "camelcase": [
        "error",
        {
          "properties": "never",
          "ignoreDestructuring": true
        }
      ],
      "eqeqeq": "error",
      "no-empty": "error",
      "no-empty-function": "error",
      "no-extra-semi": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-duplicate-imports": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "linebreak-style": "off",
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "default-case": "error",
      "use-isnan": "error",
      "no-else-return": "error",
      "@typescript-eslint/semi": ["error", "always"],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "default",
          "format": ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
          "leadingUnderscore": "allow",
          "trailingUnderscore": "forbid"
        },
        {
          "selector": "typeLike",
          "format": ["UPPER_CASE", "PascalCase"]
        },
        {
          "selector": "variable",
          "types": ["boolean"],
          "format": ["PascalCase"],
          "prefix": ["is", "should", "has", "can", "did", "will"]
        },
        {
          "selector": "variable",
          "modifiers": ["destructured"],
          "format": null
        },
        {
          "selector": "property",
          "format": ["PascalCase"],
          "filter": {
            "regex": "[-]",
            "match": true
          }
        },
        {
          "selector": "function",
          "format": ["camelCase", "PascalCase"]
        }
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/no-misused-promises": "off"
    }
  }