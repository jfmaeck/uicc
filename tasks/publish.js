var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var config = require('../gulp.config')();

gulp.task('publish', ['build'], function () {
    return gulp
        .src(config.dest + '**/*')
        .pipe(ghPages());
});
