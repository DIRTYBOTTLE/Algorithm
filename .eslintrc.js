module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: 'standard',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        indent: 0,
        quotes: 0,
        semi: ["error", "always"],
        "no-eval": 0,
        "space-before-function-paren": 0
    }
};
