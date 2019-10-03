var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var reactify = require("reactify");
var babel = require("babelify");

gulp.task("browserify", function() {
  var b = browserify({
    entries: ["src/main.js"], //entry file
    debug: true
  });
  b.transform(babel, {
    presets: ["@babel/react", "@babel/env"],
    plugins: ["@babel/plugin-proposal-class-properties"]
  }).transform(reactify); // use the reactify transform
  return b
    .bundle()
    .on("error", function(error) {
      console.error("Gulp error in " + error.plugin + error.toString());
      this.emit("end");
    })
    .pipe(source("main.js"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("watch", function() {
  gulp.watch("src/*.js", gulp.series("browserify"));
  gulp.watch("src/*.jsx", gulp.series("browserify"));
});

gulp.task("default", gulp.parallel("watch", "browserify"));
