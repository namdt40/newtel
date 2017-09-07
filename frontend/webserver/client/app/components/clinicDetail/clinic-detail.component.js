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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var Observable_1 = require("rxjs/Observable");
var ClinicDetailComponent = (function () {
    function ClinicDetailComponent(serviceService, route, http) {
        this.serviceService = serviceService;
        this.route = route;
        this.http = http;
        this.apiUrl = 'http://localhost:3001/service';
    }
    ClinicDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.serviceService.getService(id)
                .then(function (service) {
                _this.service = service;
                if (!!_this.service) {
                    console.log('call service');
                    _this.getDetailService();
                }
            });
        });
    };
    ClinicDetailComponent.prototype.getData = function (id) {
        return this.http.get(this.apiUrl + '/' + id + '/findall')
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorObservable);
    };
    ClinicDetailComponent.prototype.addData = function (name, description) {
        return this.http.post(this.apiUrl + '/clinic/save', { name: name, description: description })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorObservable);
    };
    ClinicDetailComponent.prototype.getDetailService = function () {
        var _this = this;
        this.getData(this.service.id).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    ClinicDetailComponent.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    ClinicDetailComponent.prototype.addClinic = function () {
    };
    ClinicDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    ClinicDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-clinic-detail',
            templateUrl: './app/components/clinicDetail/clinic-detail.component.html',
            styleUrls: ['./app/components/clinicDetail/clinic-detail.component.css']
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            router_1.ActivatedRoute, http_1.Http])
    ], ClinicDetailComponent);
    return ClinicDetailComponent;
}());
exports.ClinicDetailComponent = ClinicDetailComponent;
