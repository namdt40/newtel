"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var errorHandler = require("errorhandler");
var methodOverride = require("method-override");
var index_1 = require("./routes/index");
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
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
        var renderIndex = function (req, res) {
            res.sendFile(path.join(__dirname, 'index.html'));
        };
        this.app.get('/*', renderIndex);
    };
    ServerConfig.prototype.routes = function () {
        var route = express.Router();
        index_1.IndexRoute.create(route);
        this.app.use(route);
    };
    return ServerConfig;
}());
exports.ServerConfig = ServerConfig;
;
