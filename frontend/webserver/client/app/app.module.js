"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_module_1 = require("./material.module");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var heroes_component_1 = require("./components/heroes/heroes.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var hero_detail_component_1 = require("./components/heroDetail/hero-detail.component");
var service_detail_component_1 = require("./components/serviceDetail/service-detail.component");
var clinic_detail_component_1 = require("./components/clinicDetail/clinic-detail.component");
var hero_service_1 = require("./services/hero.service");
var service_service_1 = require("./services/service.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                material_module_1.MaterialModule,
                animations_1.BrowserAnimationsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                heroes_component_1.HeroesComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                service_detail_component_1.ServiceDetailComponent,
                clinic_detail_component_1.ClinicDetailComponent
            ],
            providers: [
                hero_service_1.HeroService,
                service_service_1.ServiceService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
