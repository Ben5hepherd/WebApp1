/// <binding ProjectOpened='less-watcher' />
var gulp = require("gulp");
var config = require("./gulp.config")();
var del = require("del");
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('default', ['help']);


gulp.task('compile-less', function () {
    console.log("Less --> CSS");

    return gulp
        .src(config.src.less)
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.sourcemaps.write(config.maps))
        .pipe(gulp.dest(config.dist.css));
});

gulp.task('copy-images', function () {
    console.log("copying image files");

    return gulp.src(config.src.images)
        .pipe(gulp.dest(config.dist.images));
});

gulp.task('copy-documents', function () {
    console.log("copying documents files");

    return gulp.src(config.src.documents)
        .pipe(gulp.dest(config.dist.documents));
});

gulp.task('copy-fonts', function () {
    console.log("copying font files");

    return gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.dist.fonts));
});

gulp.task('copy-emailtemplates', function () {
    console.log("copying email template files");

    return gulp.src(config.src.emailtemplates)
        .pipe(gulp.dest(config.dist.emailtemplates));
});

gulp.task('build-content', function (callback) {
    console.log("Building content");

    runSequence('clean-content', ['compile-less', 'minify-css', 'copy-cssMinifyExclusions', 'copy-images', 'copy-fonts', "copy-emailtemplates", "copy-documents"], callback);
});

gulp.task('minify-js', ['clean-js'], function () {
    console.log("Js Minify");
    return gulp.src(config.src.js)
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.uglify())
        .pipe($.sourcemaps.write(config.maps))
        .pipe(gulp.dest(config.dist.js));
});

gulp.task('minify-css', function () {
    console.log("Building css");

    return gulp
        .src(config.src.css)
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.minifyCss())
        .pipe($.sourcemaps.write(config.maps))
        .pipe(gulp.dest(config.dist.css));
});

gulp.task('copy-cssMinifyExclusions', function (callback) {
    console.log("copying cssMinifyExclusions");

    return gulp.src(config.src.cssMinifyExclusions)
        .pipe(gulp.dest(config.dist.css));
});

gulp.task('build-all', function (callback) {
    runSequence('clean-all', ['build-content', 'minify-js'], callback);
});

gulp.task('help', $.taskListing);

gulp.task('clean-all', function (done) {
    console.log("Cleaning old dist");

    del(config.dist.root, done);
});

gulp.task('clean-js', function (done) {
    console.log("Cleaning old js");

    del(config.dist.js, done);
});

gulp.task('clean-content', function (done) {
    console.log("Cleaning old js");

    del(config.dist.content, done);
});

gulp.task('less-watcher', function () {
    console.log("Watching less");

    gulp.watch([config.src.less], ['compile-less']);
});

gulp.task('build-dist', ['build-all']);
gulp.task('update-less', ['compile-less']);
gulp.task('update-content', ['build-content']);
gulp.task('update-js', ['minify-js']);
gulp.task('watch-less', ['less-watcher']);
