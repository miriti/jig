var gulp = require('gulp');
var ws = require('gulp-webserver');
var watch = require('gulp-watch');
var beutify = require('js-beautify');
var file = require('gulp-file');

gulp.task('data', function() {
  watch('data/**/*').on('data', function(data) {
    var list = {};

    gulp.src('data/**/*').on('data', function(data) {
      if (!data.stat.isDirectory()) {
        var relPath = data.path.replace(data.base, "");
        var fileID = relPath.split('/').join('_').split('.').slice(0, -1).join("");
        list[fileID] = '/data/' + relPath;
      }
    }).on('end', function() {
      file('data.js', beutify('define(function(){ return ' + JSON.stringify(list) + '; });')).pipe(gulp.dest('js'));
      console.log('data.js updated');
    });
  });
});

gulp.task('default', function() {
  gulp.src('.').pipe(ws());
});
