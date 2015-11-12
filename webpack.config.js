module.exports = {
    entry: "./src/monopoly.js",
    output: {
        path: __dirname,
        filename: "monopoly.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};