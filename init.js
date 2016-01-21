#!/usr/bin/env node

var fs = require('fs');

var exec = require('child_process').execSync;

exec("npm install");
exec("bower install");

var template = process.argv[2] || 'default';
var template_base = __dirname + '/_templates/' + template;

var variables = {
  'GAME_NAME': 'Default game',
  'JS_PATH': 'bower_components'
};

try {
  var bowerrc = JSON.parse(fs.readFileSync('.bowerrc'));
  variables['JS_PATH'] = bowerrc['directory'] || variables['JS_PATH'];
} catch (e) {
  //noop
}

var populate = function(str) {
  for(var v in variables) {
    str = str.replace('%' + v + '%', variables[v]);
  }
  
  return str;
}

var config = require(template_base + '/_config.js');

config();

var dive = function(path) {
  fs.readdir(template_base + '/' + path, function(error, list) {
    list.forEach(function(item) {
      if((path == '.') && (item == '_config.js')) {
        return;
      }
      
      var absolut_path = template_base + '/' + path + '/' + item;

      fs.stat(absolut_path, function(err, stat) {
        if (stat.isDirectory()) {
          var dirname = populate(path + '/' + item);
          
          if(!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname);
          }
          
          dive(path + '/' + item);
        } else {
          fs.readFile(absolut_path, function(err, content) {
            var final = populate(content.toString());
            var writePath = populate(path + '/' + item);

            fs.writeFile(writePath, final, function(err) {
              if (err) {
                console.error(writePath, 'failed!');
              } else {
                console.log(writePath, 'ok');
              }
            })
          });
        }
      });
    });
  });
};

dive(".");
