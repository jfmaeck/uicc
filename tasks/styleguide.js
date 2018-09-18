var gulp = require('gulp');
var config = require('../gulp.config')();
var styledown = require('gulp-styledown');
var htmlhint = require('gulp-htmlhint');
var inject = require('gulp-inject');

function fileContents (filePath, file) {
    return file.contents.toString();
}

gulp.task('styleguide', function () {
    return gulp
        .src(config.src+'/**/*.md')
        .pipe(styledown({
            config: './styleguide-config.md',
            filename: 'index.html'
        }))
        .pipe(htmlhint('./.htmlhintrc'))
        .pipe(htmlhint.reporter('htmlhint-stylish'))
        .pipe(inject(gulp.src([config.dest+'assets/icons.svg.html']), {
            starttag: '<!-- inject:svgicons -->',
            transform: fileContents
        }))
        .pipe(gulp.dest(config.dest))
    ;
});

gulp.task('styleguide-watch', function () {
    return gulp.watch([
        config.src + '**/*.md',
        './styleguide-config.md',
        config.dest + 'assets/icons.svg.html'
    ], gulp.series('styleguide'));
});
