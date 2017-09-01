"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_services_1 = require("../mock/mock-services");
var ServiceService = (function () {
    function ServiceService() {
    }
    ServiceService.prototype.getServices = function () {
        return Promise.resolve(mock_services_1.SERVICES);
    };
    ServiceService.prototype.getServiceTest = function (id) {
        console.log(id);
        console.log(mock_services_1.SERVICES);
        var ok = mock_services_1.SERVICES.filter(function (service) { return service.id == id; })[0];
        console.log(ok);
        return ok;
    };
    ServiceService.prototype.getService = function (id) {
        return Promise.resolve(mock_services_1.SERVICES).then(function (services) { return services.filter(function (service) { return service.id == id; })[0]; });
    };
    ServiceService = __decorate([
        core_1.Injectable()
    ], ServiceService);
    return ServiceService;
}());
exports.ServiceService = ServiceService;
