import { NextFunction, Request, Response, Router } from 'express';

export class IndexRoute {
    constructor() {}

    public static create(route: Router) {

        // route.get('/service',(req: Request, res: Response, next: NextFunction)=> {
        //     console.log('kkkkkkkkkkkkkkkkkkkkkk');
        //     console.log(req.params);
        //     let data = {
        //         val: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
        //     };
        //     res.send(data);
        // })
    }
}