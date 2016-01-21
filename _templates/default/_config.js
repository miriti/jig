module.exports = function() {
  var exec = require('child_process').execSync;
  exec("npm install gulp gulp-webserver");
};
