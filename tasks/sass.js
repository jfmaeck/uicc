var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var config = require('../gulp.config')();

gulp.task('sass', function () {
    return gulp
        .src(config.src+'/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 3 versions', '> 5%'], {cascade: true}))
        .pipe(cleanCSS({compatibility: 'ie10'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest));
});

gulp.task('sass-watch', function () {
    return gulp.watch(config.src + '**/*.scss', ['sass']);
});

