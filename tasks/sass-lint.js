var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
var config = require('../gulp.config')();

gulp.task('sass-lint', function () {
    return gulp
        .src([config.src+'/**/*.scss', '!'+config.src+'/styleguide.scss'])
        .pipe(sassLint({
            configFile: '../.sass-lint.yml'
        }))
        .pipe(sassLint.format());
});

gulp.task('sass-lint-watch', function () {
    return gulp.watch(config.src + '**/*.scss', ['sass-lint']);
});

