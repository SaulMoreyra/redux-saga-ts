module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "off",
      { functions: false, classes: true, variables: true }
    ],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      { allowExpressions: true, allowTypedFunctionExpressions: true }
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true }
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    // Common abbreviations are known and readable
    "@typescript-eslint/no-floating-promises": "warn",
    "max-depth": ["warn", 4],
    "id-length": ["warn", { exceptions: ["i", "j"], min: 2 }],
    "no-lonely-if": ["error"],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "react/state-in-constructor": ["off"],
    "jsx-a11y/href-no-hash": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    curly: "error",
    "import/extensions": "off",
    "no-param-reassign": ["error", { props: false }],
    "linebreak-style": "off",
    "@typescript-eslint/no-var-requires": 0,
    semi: "off",
    "@typescript-eslint/semi": "warn",
    "object-curly-newline": [
      "error",
      {
        ImportDeclaration: {
          minProperties: 7,
          consistent: false,
          multiline: true
        }
      }
    ],
    "no-console": "warn",
    "comma-dangle": "warn",
    "no-multiple-empty-lines": "warn",
    "max-len": "warn",
    "jsx-a11y/label-has-associated-control": "off"
  }
};
