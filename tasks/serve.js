var gulp = require('gulp');
var config = require('../gulp.config')();
var bs = require("browser-sync");

function startBrowsersync(config) {
    bsIns = bs.create();
    bsIns.init(config);
    bsIns.reload();
}

/* Start live server dev mode */
gulp.task('serve-dev', ['src-compile', 'src-watch'], function () {
    startBrowsersync(config.browserSync);
});
