module.exports = {
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@next/next/recommended"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
