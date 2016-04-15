var gulp = require('gulp');
var ws = require('gulp-webserver');
var watch = require('gulp-watch');
var beutify = require('js-beautify');
var file = require('gulp-file');

gulp.task('data', require('js/jig/gulp/data.js'));

gulp.task('default', function() {
  gulp.src('.').pipe(ws());
});
