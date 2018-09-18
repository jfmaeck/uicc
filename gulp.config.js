module.exports = function () {
    var src = 'src/';
    var dest = 'dist/';

    var browserSync = {
        port: 8000,
        server: {
            baseDir: './' + dest,
        },
        files: [
            dest + "**/*.html",
            dest + "**/*.svg",
            dest + "**/*.png",
            dest + "**/*.gif",
            dest + "**/*.jpg",
            dest + "**/*.js",
            dest + "**/*.css",
        ],
        browser: [] //do not open automatically
    };

    var config = {
        src: src,
        dest: dest,
        browserSync: browserSync,
    };

    return config;
};
