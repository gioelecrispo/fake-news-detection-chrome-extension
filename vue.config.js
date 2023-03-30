const path = require('path');
const fs = require('fs');

function enableShadowCss(config) {
    const configs = [
        config.module.rule('vue').use('vue-loader'),
    ];
    // based on common rules returned by `vue inspect`
    const ruleSets = ['css', 'postcss', 'scss', 'sass', 'less', 'stylus'];
    const ruleNames = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    ruleSets.forEach((ruleSet) => {
        if (config.module.rules.store.has(ruleSet)) {
            ruleNames.forEach((rName) => {
                if (config.module.rule(ruleSet).oneOfs.store.has(rName)) {
                    if (config.module.rule(ruleSet).oneOf(rName).uses.store.has('vue-style-loader')) {
                        configs.push(config.module.rule(ruleSet).oneOf(rName).use('vue-style-loader'));
                    }
                }
            });
        }
    });
    if (!process.env.BUILD_MODE) {
        process.env.BUILD_MODE = config.store.get('mode');
    }
    configs.forEach((c) => c.tap((options) => {
        options.shadowMode = true;
        return options;
    }));
}

// Generate pages object
const pages = {}

function getEntryFile(entryPath) {
    let files = fs.readdirSync(entryPath)
    return files
}

const chromeName = getEntryFile(path.resolve(`src/entry`))

function getFileExtension(filename) {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined
}

chromeName.forEach((name) => {
    const fileExtension = getFileExtension(name)
    const fileName = name.replace('.' + fileExtension, '')
    pages[fileName] = {
        entry: `src/entry/${name}`,
        template: 'public/index.html',
        filename: `${fileName}.html`
    }
})

const isDevMode = process.env.NODE_ENV === 'development'

module.exports = {
    pages,
    filenameHashing: false,
    chainWebpack: (config) => {
        //enableShadowCss(config);
        config.plugin('copy').use(require('copy-webpack-plugin'), [
            {
                patterns: [
                    {
                        from: path.resolve(`src/manifest.json`),
                        to: `${path.resolve('dist')}/manifest.json`
                    },
                    {
                        from: path.resolve(`public/`),
                        to: `${path.resolve('dist')}/`
                    },
                    {
                        from: path.resolve(`src/assets/`),
                        to: `${path.resolve('dist')}/`
                    },
                    {
                        from: 'node_modules/onnxruntime-web/dist/*.wasm',
                        to: '[name][ext]'
                    },
                ]
            }
        ]);
    },
    configureWebpack: {
        output: {
            filename: `[name].js`,
            chunkFilename: `[name].js`
        },
        devtool: isDevMode ? 'inline-source-map' : false,
        experiments: {
            topLevelAwait: true
        }
    },
    css: {
        extract: false // Make sure the css is the same
    }
}
