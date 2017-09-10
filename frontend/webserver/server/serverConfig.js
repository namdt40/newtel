"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var errorHandler = require("errorhandler");
var methodOverride = require("method-override");
var http = require("http");
/**
 * Class Server
 */
var ServerConfig = (function () {
    function ServerConfig() {
        this.app = express();
        this.config();
        this.routes();
        this.Api();
    }
    ServerConfig.bootstrap = function () {
        return new ServerConfig();
    };
    ServerConfig.prototype.Api = function () {
    };
    ServerConfig.prototype.config = function () {
        var _this = this;
        this.app.use('/app', express.static(path.join(__dirname, 'app')));
        this.app.use('/libs', express.static(path.join(__dirname, 'libs')));
        // for system.js to work. Can be removed if bundling.
        this.app.use(express.static(path.join(__dirname, '.')));
        this.app.use(express.static(path.join(__dirname, '../node_modules')));
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser('MY_CODE'));
        this.app.use(methodOverride());
        //catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            //res.sendFile(path.join(__dirname, 'index.html'));
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
        var renderIndex = function (req, res) {
            res.sendFile(path.join(__dirname, 'index.html'));
        };
        this.app.get('/service/:id/:func', function (req, res) {
            console.log(req.params['id']);
            _this.callService(req.params['id'], req.params['func']).then(function (data) {
                // let result = {
                //     val: data.
                // };
                res.send(data);
            }).catch(function (err) {
                console.error(err);
            });
            /* let data = {
                 val: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
             };
              res.send(data);*/
        });
        this.app.post('/service/clinic', function (req, res) {
        });
        this.app.get('/*', renderIndex);
    };
    ServerConfig.prototype.routes = function () {
        // let route: express.Router = express.Router();
        // IndexRoute.create(route);
        // this.app.use(route);
    };
    ServerConfig.prototype.addClinic = function () {
        return new Promise(function (resolve, reject) {
            var url = 'http://localhost:8080/clinic/save';
            console.log(url);
            //http.request( { url: url},)
            var option = {};
            http.request(url, function (resp) {
                resp.on('data', function (chunk) {
                    //console.log(chunk.toString());
                    return resolve(JSON.parse(chunk.toString()));
                });
                resp.on('error', function (error) {
                    console.error(error);
                    return reject(error);
                });
                resp.on('end', function () {
                    console.log('end call service');
                });
            }).on("error", function (err) {
                console.error("Error: " + err.message);
                return reject(err);
            });
        });
    };
    ServerConfig.prototype.callService = function (id, func) {
        var idInstance = '';
        if (id == 1) {
            idInstance = 'authority';
        }
        else if (id == 2) {
            idInstance = 'clinic';
        }
        else if (id == 3) {
            idInstance = 'emr';
        }
        else if (id == 4) {
            idInstance = 'homecare';
        }
        else {
            idInstance = 'hospital';
        }
        if (func == null)
            func = "";
        if (id > 1) {
            return new Promise(function (resolve, reject) {
                var url = 'http://localhost:8080/' + idInstance + '/' + func;
                console.log(url);
                http.get('http://localhost:8080/' + idInstance + '/' + func, function (resp) {
                    resp.on('data', function (chunk) {
                        //console.log(chunk.toString());
                        return resolve(JSON.parse(chunk.toString()));
                    });
                    resp.on('error', function (error) {
                        console.error(error);
                        return reject(error);
                    });
                    resp.on('end', function () {
                        console.log('end call service');
                    });
                }).on("error", function (err) {
                    console.error("Error: " + err.message);
                    return reject(err);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                var option = {
                    host: "http://localhost",
                    port: 8080,
                    method: "POST",
                    path: idInstance + '/oauth/token?grant_type=password&username=bill&password=abc123',
                    auth: 'my-trusted-client:secret'
                };
                http.get(option, function (resp) {
                    resp.on('data', function (chunk) {
                        //console.log(chunk.toString());
                        return resolve(JSON.parse(chunk.toString()));
                    });
                    resp.on('error', function (error) {
                        console.error(error);
                        return reject(error);
                    });
                    resp.on('end', function () {
                        console.log('end call service');
                    });
                }).on("error", function (err) {
                    console.error("Error: " + err.message);
                    return reject(err);
                });
            });
        }
    };
    return ServerConfig;
}());
exports.ServerConfig = ServerConfig;
;
