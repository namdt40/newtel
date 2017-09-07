import { ServerConfig } from './serverConfig';
import http = require('http');
import fs = require('fs');

// import express = require('express');
// import path = require('path');
// var port: string = process.env.PORT || '3001';
// var app = express();
//
// app.use('/app', express.static(path.resolve(__dirname, 'app')));
// app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
//
// // for system.js to work. Can be removed if bundling.
// app.use(express.static(path.resolve(__dirname, '.')));
// app.use(express.static(path.resolve(__dirname, '../node_modules')));
//
// var renderIndex = (req: express.Request, res: express.Response) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'));
// }
//
// app.get('/*', renderIndex);

// var server = app.listen(port, function() {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('This express app is listening on port:' + port);
// });

var optionhttps = {
    key: fs.readFileSync('C:\\Users\\namdt\\key.pem'),
    cert: fs.readFileSync('C:\\Users\\namdt\\cert.pem')
};
var httpPort = normalizePort(process.env.PORT || 3001);
var app = ServerConfig.bootstrap().app;
app.set("port", httpPort);
var httpServer = http.createServer(app);

//listen on provided ports
httpServer.listen(httpPort);

//add error handler
httpServer.on("error", onError);

//start listening on port
httpServer.on("listening", onListening);

/**
* Normalize a port into a number, string, or false.
*/
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    var bind = typeof httpPort === "string"
        ? "Pipe " + httpPort
        : "Port " + httpPort;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = httpServer.address();
    var bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    console.log("Listening on " + bind);
}