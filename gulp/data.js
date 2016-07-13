var gulp = require('gulp');
var file = require('gulp-file');
var watch = require('gulp-watch');
var beutify = require('js-beautify');

var comment_info = "/**\n" + [
  "Don't change this file",
  "This file will be overwriten by the `data` gulp task.",
  "",
  "Run `gulp data` in the root of your project to start the process",
  "of watching your files in the `data` directory",
].map(function(line) {
  return " * " + line;
}).join("\n") + "\n**/\n\n";

module.exports = function() {
  watch('data/**/*').on('data', function(data) {
    var list = {};

    gulp.src('data/**/*').on('data', function(data) {
      if (!data.stat.isDirectory()) {
        var relPath = data.path.replace(data.base, "");
        var fileID = relPath.split('/').join('_').split('.').slice(0, -1).join("");
        list[fileID] = 'data/' + relPath;
      }
    }).on('end', function() {
      file('data.js', beutify(comment_info + 'define(function(){ return ' + JSON.stringify(list) + '; });')).pipe(gulp.dest('js'));
      console.log('[\x1b[2m%s\x1b[0m] data.js updated', new Date().toLocaleTimeString());
    });
  });
};
