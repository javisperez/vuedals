const webpack = require('webpack');
const package = require('./package.json');
const banner  =
    " Vuedals plugin v" + package.version + "\n" +
    "\n" +
    " Multiple event based modal windows, with a single component\n" +
    "\n" +
    " This is a plugin to open any number of modal windows without having to attach them to the DOM\n" +
    " @author "+ package.author.name +" <"+ package.author.email +">\n" +
    " "+ package.homepage +"\n" +
    " Released under the MIT License.";

module.exports = {
    entry: './src/main.js',

    output: {
        path: './dist/',
        filename: 'vuedals.js',
        library: 'Vuedals',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    resolve: {
        extensions: ['', '.js', '.vue']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    plugins: [
        new webpack.BannerPlugin(banner)
    ]
};