var gulp = require('gulp');

var data = require('./js/jig/gulp/data.js');
var webserver = require('./js/jig/gulp/webserver.js');

gulp.task('data', data);
gulp.task('default', ['data'], webserver);
