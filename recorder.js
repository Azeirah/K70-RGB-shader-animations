var fs     = require('fs');
var ws     = require('ws');
var keys   = require('./keys');
var player = require('./player');
require('./polyfills.js');

var options = {
  saveToFile: false,
  filterQuality: 5
};
var channel = new ws.Server({port: 8000});

if (process.argv.length < 3) {
    console.log("Enter a filename for your animation save file if you want to save your animation");
    console.log("node renderImage.js [filename]");
} else {
    var animationOutputFile = process.argv[2] + '.rgb';
    options.saveToFile      = true;
}

if (options.saveToFile) {
    // all keyboard frames get saved for export into a file
    var frames = [];
}

function hex(num) {
    var hexnum = num.toString(16);
    if (num < 16)
        hexnum = "0" + hexnum
    return hexnum;
}

function imageToCommand(imageBuffer) {
    var totalCommand = "rgb ";
    keys.forEach(function (key) {
        var pos     = (Math.floor(key.x) + (Math.floor(key.y) * 26)) * 4;
        var r       = imageBuffer[pos    ];
        var g       = imageBuffer[pos + 1];
        var b       = imageBuffer[pos + 2];
        var a       = imageBuffer[pos + 3];
        var hexval  = hex(r) + hex(g) + hex(b);
        var command = key.ckbname + ":" + hexval;

        totalCommand += command + " ";
    });
    return totalCommand;
}

function saveCommandToAnimationFile(command) {
    if (options.saveToFile) {
        frames.push(command);
        fs.writeFile(animationOutputFile, JSON.stringify(frames, null, 4), 'ascii', function (err) {
            if (err) console.log(err);
        });
    }
}

// filtering using, I think what's called, a moving average filter.
// Basically, it just takes `filterQuality` amount of previous frames
// and averages them all out
// a low filterquality means more noise
// a higher filterquality means less noise, but is far less fit for fast moving animations
var bufferHistory = new Array(options.filterQuality).fill(0);
var count         = 0;
channel.on('connection', function (client) {
    console.log("connection!");
    client.on('message', function (data) {
        var buffer = JSON.parse(data);

        // the count is a shitty hack to prevent filtering for the first `filterQuality` frames
        bufferHistory.shift() === 0? count++ : null;
        bufferHistory.push(buffer);

        var data = buffer;
        if (count === options.filterQuality) {
            data = buffer.map(function (color, i) {
                var average = color;
                for (var j = 0; j < options.filterQuality; j++) {
                    average += bufferHistory[j][i];
                }
                return Math.floor(average / (options.filterQuality + 1));
            });
        }

        var command = imageToCommand(data);

        saveCommandToAnimationFile(command);
        player.writeCommandToKeyboard(command);
    });
});