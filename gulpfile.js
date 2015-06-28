var gulp        = require("gulp"),
    gutil       = require("gulp-util"),
    watch       = require("gulp-watch"),
    browserify  = require("browserify"),
    babelify    = require("babelify"),
    source      = require('vinyl-source-stream')
    buffer      = require("vinyl-buffer");

var build = function() {
    console.log("building....");
    return browserify({
        entries: "./scripts/app/Client.js",
        debug: true})
    .transform(babelify.configure({
        optional: ["es7.asyncFunctions", "es7.classProperties"],
        ignore: /Socketio|React|Lodash/}))
    .require("./scripts/app/Client.js", {expose: "Client"})
    .bundle()
    .pipe(source("Client.js"))
    .pipe(buffer())
    .pipe(gulp.dest("./static/bin"))
}

gulp.task("build", function() {
    return build();
});

gulp.task("watch", function() {
    build();
    return gulp.watch("scripts/**/*.js", ["build"]);
});
