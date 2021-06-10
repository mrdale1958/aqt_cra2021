// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var app = require('electron')
app.commandLine.appendSwitch('disable-pinch');