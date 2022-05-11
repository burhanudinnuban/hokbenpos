module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/jsx-uses-vars": 2,
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "React",
      },
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true,
      },
    ],
    "no-undef": 2,
    "react/prop-types": 0,
    "react/jsx-no-duplicate-props": 2,
    "space-before-blocks": 2,
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    "rest-spread-spacing": 2,
    "semi-spacing": 2,
    "no-unneeded-ternary": 2,
    "eqeqeq": 2,
    "dot-location": 2,
    "no-extra-bind": 2,
    "keyword-spacing": 2,
    "key-spacing": 2,
    "react/jsx-indent": [2, 2],
    "func-call-spacing": 2,
    "array-bracket-spacing": 2,
    "block-spacing": 2,
    "brace-style": 2,
    "arrow-body-style": 2,
    "arrow-parens": 2,
    "arrow-spacing": 2,
    "react/self-closing-comp": 2,
    "jsx-quotes": ["error", "prefer-single"],
    "object-curly-spacing": 2,
    "no-console": 1,
  },
};
