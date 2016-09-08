var gulp = require('gulp');
var config = require('../gulp.config')();
var merge = require('merge-stream');

gulp.task('vendor', function() {
    var tasks = [];
    for (var src in config.vendorAssets) {
        var dest = config.vendorAssets[src];
        tasks.push(
            gulp.src(src).pipe(gulp.dest(config.dest+'vendor/'+dest))
        );
    }

    return merge(tasks);
});

gulp.task('vendor-watch', function (callback) {
    for (var src in config.vendorAssets) {
        gulp.watch(src, ['vendor']);
    }

    callback();
});
