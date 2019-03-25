#!/usr/bin/env node
var spawn = require('child_process').spawn;
var child = spawn(process.cwd()+'/node_modules/gulp/bin/gulp.js', [
  '--cwd', '.',
  '--gulpfile', __dirname+'/../gulpfile.js'
].concat(process.argv.slice(2)), {stdio: 'inherit'});
