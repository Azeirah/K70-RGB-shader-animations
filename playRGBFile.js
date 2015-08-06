#!/usr/bin/env node
var player = require('./source/player');
var fs     = require('fs');

var rgbFile;

if (process.argv.length < 3) {
    console.log('You need to pass a .rgb file as an argument to this program.');
    console.log('node playRGBFile.js [filename.rgb]');
    process.exit();
} else {
    rgbFile = process.argv[2];
}

var commands = JSON.parse(fs.readFileSync(rgbFile));

var index = 0;
setInterval(function () {
    index %= commands.length;
    player.writeCommandToKeyboard(commands[index]);
    index += 1;
}, 1000/24);
