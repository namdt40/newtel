"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexRoute = (function () {
    function IndexRoute() {
    }
    IndexRoute.create = function (route) {
        route.get('/detail/:id', function (req, res, next) {
            console.log(req.params);
            var data = {
                val: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
            };
            res.send(data);
        });
    };
    return IndexRoute;
}());
exports.IndexRoute = IndexRoute;
