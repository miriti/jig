#!/usr/bin/env node
var fs = require('fs');
var beautify = require('js-beautify').js_beautify;

var data = {};

var ignore = [".DS_Store"];

var scan = function(path) {
  fs.readdirSync(path).forEach(function(item) {
    var stat = fs.statSync(path + '/' + item);

    if (stat.isDirectory()) {
      scan(path + '/' + item);
    } else {
      if (ignore.indexOf(item) == -1) {
        data[item.split('.').slice(0, -1).join('.')] = path + '/' + item;
      }
    }
  });
}

scan('./data');

var code = "define([], function() {" +
"  return " + JSON.stringify(data, null, "  ") +
"});";

console.log(beautify(code));
