var fs = require('fs');
var browserify = require('browserify');
var babelify   = require('babelify');
var uglify     = require('uglify-js');
var package    = require('./package.json');
var vueify     = require('vueify');
var bannerify  = require('browserify-banner');
var banner     =
    "/**\n" +
    " * Vuedals plugin v" + package.version + "\n" +
    " *\n" +
    " * Multiple event based modal windows, with a single component\n" +
    " *\n" +
    " * This is a plugin to open any number of modal windows without having to attach them to the DOM" +
    " * @author Javis Pérez <javisperez@gmail.com>\n" +
    " * https://github.com/javisperez/vuedals\n" +
    " * Released under the MIT License.\n" +
    " */\n";

var output = fs.createWriteStream('dist/vuedals.js');

var b = browserify('./src/main.js')
    .plugin(bannerify, {
        banner: banner
    })
    .transform(vueify)
    .transform(babelify.configure({
        presets: ["es2015"]
    }))
    .bundle()
    .pipe(output);

output.on('finish', function (bundle) {
    console.log(blue('dist/vuedals.js') + ' generated OK');

    fs.writeFile('dist/vuedals.min.js', uglify.minify('dist/vuedals.js').code, function () {
        console.log(blue('dist/vuedals.min.js') + ' generated OK');
    });
});

function blue(str) {
    return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}
