const CracoAlias = require("craco-alias");

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                // as you know, CRA doesn't allow to modify tsconfig's compilerOptions
                // so you should create a separate JSON file and extend tsconfig.json from it
                // and then just specify its path here:
                tsConfigPath: "tsconfig.paths.json",
            },
        },
    ],
    
};
