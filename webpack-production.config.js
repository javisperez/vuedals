const {VueLoaderPlugin} = require("vue-loader");
var DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

var path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
let mainInit = path.resolve(__dirname, './src/main.js');


module.exports = {
    mode: 'production',
    entry: {
        vuedals: mainInit
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'Vuedals',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                keep_classnames: true
            }
        })]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader']
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader']
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /(node_modules)/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json', '.styl'],
    },
    performance: {
        hints: false
    },
    plugins: [
        new VueLoaderPlugin(),
        new DuplicatePackageCheckerPlugin(),

    ]
}