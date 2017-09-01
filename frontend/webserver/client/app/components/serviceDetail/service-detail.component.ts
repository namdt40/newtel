/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import {Service} from "../../models/service";
import { ActivatedRoute, Params } from '@angular/router';
import {ServiceService} from "../../services/service.service";
import { Http, Response } from  '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";


@Component({
    selector: 'my-service-detail',
    templateUrl: './app/components/serviceDetail/service-detail.component.html',
    styleUrls: ['./app/components/serviceDetail/service-detail.component.css']
})

export class ServiceDetailComponent  implements OnInit  {
    service: Service;
    private apiUrl: string='http://localhost:3001/service';
    constructor(
        private serviceService: ServiceService,
        private route: ActivatedRoute, private  http: Http) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {

            let id = params['id'];
            this.serviceService.getService(id)
                .then(service => {this.service = service;
                if(!!this.service) {
                    console.log('call service');
                    this.getDetailService();
                }
                });
        });

    }

    getData(id: number) {
        return this.http.get(this.apiUrl+'/'+id)
            .map((res: Response)=> res.json())
            .catch(this.handleErrorObservable);
    }

    getDetailService() {
        this.getData(this.service.id).subscribe(data=> {
            console.log(data);
            this.service.data = data.val;
        });
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    goBack() {
        window.history.back();
    }
}