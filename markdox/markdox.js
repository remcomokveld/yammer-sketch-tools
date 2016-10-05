var markdox = require('markdox');
var async = require('async');
var path = require('path');
var docFolder = 'YammerSketchTools.sketchplugin/Contents/Sketch/';

// Fixtures
var fixtures = [
  docFolder + '/Layers/Unlock.js',
];

var options = {
  output: 'README.md', 
  template: 'markdox/template.md.ejs',
};

markdox.process(fixtures, options, function(){
  console.log('You are all set');
});