const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const requireDir = require('require-dir')
const bs = require("browser-sync");;
const config = require('./gulp.config')();

requireDir('./tasks'); // load externally defined tasks

gulp.task('src-compile', gulp.series('clean', 'svg-icon', gulp.parallel('assets', 'sass'), 'styleguide'));
gulp.task('src-watch', gulp.parallel('assets-watch', 'svg-icon-watch',  'sass-watch', 'styleguide-watch'));

gulp.task('serve-dev', gulp.series('src-compile', gulp.parallel(startBrowserSync, 'src-watch')));

gulp.task('build', gulp.series('src-compile'));

gulp.task('publish', gulp.series('build'), function () {
  return gulp
    .src(config.dest + '**/*')
    .pipe(ghPages());
});

gulp.task('default', gulp.series('serve-dev'));



function startBrowserSync() {
  bsIns = bs.create();
  bsIns.init(config.browserSync);
}