var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../gulp.config')();

gulp.task('src-compile', function (callback) {
    runSequence('clean', 'svg-icon', ['assets', 'sass-lint', 'sass'], ['styleguide'], callback);
});

gulp.task('src-watch', ['assets-watch', 'svg-icon-watch',  'sass-lint-watch', 'sass-watch', 'styleguide-watch']);
