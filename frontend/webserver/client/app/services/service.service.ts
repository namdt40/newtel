import {Injectable} from '@angular/core';
import {SERVICES} from "../mock/mock-services";


@Injectable()
export class ServiceService {
    getServices() {
        return Promise.resolve(SERVICES);
    }

    getServiceTest(id: number) {
        console.log(id);
        console.log(SERVICES);
        let ok= SERVICES.filter(service=> service.id == id)[0];
        console.log(ok);
        return ok;
    }
    getService(id: number) {
        return Promise.resolve(SERVICES).then(
            services => services.filter(service => service.id == id)[0]
        );
    }
}