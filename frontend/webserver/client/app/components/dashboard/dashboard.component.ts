/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Service} from "../../models/service";
import {ServiceService} from "../../services/service.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    services: Service[] = [];

    constructor(
        private router: Router,
        private serviceService: ServiceService) {
    }

    ngOnInit() {
        this.serviceService.getServices()
            .then(services => this.services = services);
    }

    gotoDetail(service: Service) {
        let link = ['/detail', service.id];
        this.router.navigate(link);
    }
}