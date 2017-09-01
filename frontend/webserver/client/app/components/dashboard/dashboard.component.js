"use strict";
/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var service_service_1 = require("../../services/service.service");
var DashboardComponent = (function () {
    function DashboardComponent(router, serviceService) {
        this.router = router;
        this.serviceService = serviceService;
        this.services = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceService.getServices()
            .then(function (services) { return _this.services = services; });
    };
    DashboardComponent.prototype.gotoDetail = function (service) {
        var link = ['/detail', service.id];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: './app/components/dashboard/dashboard.component.html',
            styleUrls: ['./app/components/dashboard/dashboard.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            service_service_1.ServiceService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
