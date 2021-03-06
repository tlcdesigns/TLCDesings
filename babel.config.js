module.exports = function (api) {
    api.cache.forever();

    return {
        presets: [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        plugins: [
            "syntax-async-functions",
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            "@babel/plugin-proposal-export-namespace-from",
            "@babel/plugin-proposal-function-sent",
            "@babel/plugin-proposal-json-strings",
            "@babel/plugin-proposal-numeric-separator",
            "@babel/plugin-proposal-throw-expressions",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
            [
                "@babel/plugin-proposal-class-properties",
                {
                    "loose": true
                }
            ]
        ]
    }
}
