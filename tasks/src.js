var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('src-compile', function (callback) {
    runSequence('clean', 'svg-icon', ['assets', 'sass'], ['styleguide'], callback);
});

gulp.task('src-watch', ['assets-watch', 'svg-icon-watch',  'sass-watch', 'styleguide-watch']);
