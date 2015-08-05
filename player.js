var fs = require('fs');
var os = require('os');

var stream = fs.createWriteStream('/dev/input/ckb1/cmd', {
    flags: 'w',
    encoding: 'ascii'
});

function writeCommandToKeyboard(command) {
    stream.write(command + os.EOL);
};

stream.on('error', function (error) {
    console.log(error);
});

module.exports = {
    writeCommandToKeyboard: writeCommandToKeyboard
};