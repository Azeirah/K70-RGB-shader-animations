# Displaying shadertoy shaders on your corsair K70!

### LINUX ONLY, requires the ckb daemon to be running!

There are multiple parts to this project.

1. .rgb animation files. These are saved shader animations, they can be played on your keyboard
2. Preview.html, this can be used to preview what animations will look like on your keyboard. Just drag and drop a .rgb file on the page
3. playRGBFile.js, a node.js script to play a .rgb animation file on your keyboard. The animation will loop when it's done, so they can be used as animated backgrounds for your k70
`node playRGBFile.js <filename.rgb>`
4. The bookmarklet, this is what's used to communicate a shader from the browser to the recorder, create a new bookmarklet with the code from `bookmarklet.min.js` and run it on any page with a canvas, then just hover over the canvas you want to record, and it'll connect to the recorded
5. recorder.js, run this to record a new animation. This needs to be running first to connect with the bookmarklet. `node recorder.js <animation file name>`

Steps to get this running:

# 1. installation

1. Make sure you have node and npm installed
2. Make sure you are on Linux
3. Make sure you have [ckb](https://github.com/ccMSC/ckb) installed
4. Run `npm install` in this directory
5. Add `bookmarklet.min.js` as a bookmarklet on your browser. For firefox, you'll need to edit an option, see below

Firefox configuration. There's a small issue with firefox and websockets on bookmarklets. This can easily be resolved by going to about:config, and toggling `network.websocket.allowInsecureFromHTTPS` to true.

# 2. creating animations

Visit shadertoy, and pick out a few of your favorite shaders. Then run `node recorder.js <animation file name>`. Click on the bookmarklet, and hover over the shader canvas. You can stop recording by pressing ctrl-c.

# 3. Viewing and previewing animations

An animation can be viewed on your keyboard using `node playRGBFile.js <filename.rgb>`. You can preview the animation with `preview.html`