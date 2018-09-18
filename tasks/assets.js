var gulp = require('gulp');
var config = require('../gulp.config')();
var srcPatterns = [
    config.src + '**/*.{png,gif,jpg,jpeg,svg,eot,ttf,woff,woff2,html,json}',
    '!' + config.src + 'assets/icons/**/*.svg' //we generate an icon sprite and thus do not need the raw files
];
gulp.task('assets', function() {
    return gulp
        .src(srcPatterns)
        .pipe(gulp.dest(config.dest));
});

gulp.task('assets-watch', function () {
    return gulp.watch(srcPatterns, gulp.series('assets'));
});
