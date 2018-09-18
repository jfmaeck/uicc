var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var clean = require("postcss-clean")
var config = require('../gulp.config')();

var processors = [
  autoprefixer({browsers: ['last 3 versions', '> 3%']}),
  clean
];

gulp.task('sass', function () {
    return gulp
        .src(config.src+'/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest));
});

gulp.task('sass-watch', function () {
    return gulp.watch(config.src + '**/*.scss', gulp.series('sass'));
});
