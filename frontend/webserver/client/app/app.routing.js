"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var heroes_component_1 = require("./components/heroes/heroes.component");
var service_detail_component_1 = require("./components/serviceDetail/service-detail.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: service_detail_component_1.ServiceDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
