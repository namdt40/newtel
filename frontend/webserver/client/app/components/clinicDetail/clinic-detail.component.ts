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
    selector: 'my-clinic-detail',
    templateUrl: './app/components/clinicDetail/clinic-detail.component.html',
    styleUrls: ['./app/components/clinicDetail/clinic-detail.component.css']
})

export class ClinicDetailComponent  implements OnInit  {
    service: Service;
    data: any;
    name: string;
    description: string;
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

        return this.http.get(this.apiUrl+'/'+id+'/findall')
            .map((res: Response)=> res.json())
            .catch(this.handleErrorObservable);
    }

    addData(name: string, description: string) {
        return this.http.post(this.apiUrl+'/clinic/save', {name: name, description: description})
            .map((res: Response) => res.json())
            .catch(this.handleErrorObservable);
    }

    getDetailService() {
        this.getData(this.service.id).subscribe(data=> {
            console.log(data);
            this.data = data;
        });
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    addClinic() {

    }

    goBack() {
        window.history.back();
    }
}