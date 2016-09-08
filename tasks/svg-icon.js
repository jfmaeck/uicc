var gulp = require('gulp');
var config = require('../gulp.config')();
var svgSprite = require('gulp-svg-sprite');

gulp.task('svg-icon', function () {
    return gulp
        .src(config.src+'assets/icons/**/*.svg')
        .pipe(svgSprite({
            "svg": {
                "xmlDeclaration": false,
                "doctypeDeclaration": false,
                "namespaceIDs": true
            },
            "mode": {
                "symbol": {
                    "dest": "./assets",
                    "sprite": "icons.svg.html",
                    "inline": true
                }
            }
        }))
        .pipe(gulp.dest(config.dest))
    ;
});

gulp.task('svg-icon-watch', function () {
    return gulp.watch(config.src + 'assets/icons/**/*.svg', ['svg-icon']);
});
