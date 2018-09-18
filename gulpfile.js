var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var requireDir = require('require-dir')
var bs = require("browser-sync");;
var config = require('./gulp.config')();
var tasks = requireDir('./tasks');
// require('./tasks/src');

gulp.task('src-compile', gulp.series('clean', 'svg-icon', gulp.parallel('assets', 'sass'), 'styleguide'));
gulp.task('src-watch', gulp.parallel('assets-watch', 'svg-icon-watch',  'sass-watch', 'styleguide-watch'));

gulp.task('serve-dev', gulp.parallel('src-compile', 'src-watch', function () {
  bsIns = bs.create();
  bsIns.init(config.browserSync);
  bsIns.reload();
}));

gulp.task('build', gulp.series('src-compile'));

gulp.task('publish', gulp.series('build'), function () {
  return gulp
    .src(config.dest + '**/*')
    .pipe(ghPages());
});

gulp.task('default', gulp.series('serve-dev'));

