var gulp = require('gulp');
var ws = require('gulp-webserver');

gulp.task('default', function() {
  gulp.src('.').pipe(ws());
});
