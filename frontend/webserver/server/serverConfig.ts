import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import errorHandler = require('errorhandler');
import methodOverride = require('method-override');
import * as http from 'http';


/**
 * Class Server
 */

export class ServerConfig {
    public app: express.Application;

    public static bootstrap() : ServerConfig {
        return new ServerConfig();
    }

    constructor() {
        this.app =  express();

        this.config();

        this.routes();

        this.Api();
    }

    public Api() {

    }

    public config() {
        this.app.use('/app', express.static(path.join(__dirname, 'app')));
        this.app.use('/libs', express.static(path.join(__dirname, 'libs')));

        // for system.js to work. Can be removed if bundling.
        this.app.use(express.static(path.join(__dirname, '.')));
        this.app.use(express.static(path.join(__dirname, '../node_modules')));

        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser('MY_CODE'));
        this.app.use(methodOverride());

        //catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            //res.sendFile(path.join(__dirname, 'index.html'));
            err.status = 404;
            next(err);
        });

        this.app.use(errorHandler());

        let renderIndex = (req: express.Request, res: express.Response) => {
            res.sendFile(path.join(__dirname, 'index.html'));
        }


        this.app.get('/service/:id/:func',(req: express.Request, res:  express.Response)=> {
                console.log(req.params['id']);
                this.callService(req.params['id'], req.params['func']).then((data)=> {
                    // let result = {
                    //     val: data.
                    // };
                    res.send(data);
                }).catch((err)=>{
                    console.error(err);
                })
               /* let data = {
                    val: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
                };
                 res.send(data);*/
             });

        this.app.post('/service/clinic', (req: express.Request, res: express.Response) => {

        });

        this.app.get('/*', renderIndex);
    }


    public routes() {
       // let route: express.Router = express.Router();
       // IndexRoute.create(route);
       // this.app.use(route);
    }

    public addClinic() {
        return new Promise((resolve , reject) => {
            let url ='http://localhost:8080/clinic/save';
            console.log(url);
            //http.request( { url: url},)
            let option = {

            };
            http.request(url, (resp) => {

                resp.on('data',(chunk) => {
                    //console.log(chunk.toString());
                    return resolve(JSON.parse(chunk.toString()));
                });

                resp.on('error', (error) => {
                    console.error(error);
                    return reject(error);
                });

                resp.on('end', () => {
                    console.log('end call service');
                });

            }).on("error", (err) => {
                console.error("Error: " + err.message);
                return reject(err)
            });
        });
    }

    public callService(id: number, func: string) {
        let idInstance ='';
        if(id==1) {
            idInstance ='authority';
        } else if(id==2) {
            idInstance='clinic';
        } else if(id==3) {
            idInstance = 'emr';
        } else if(id == 4) {
            idInstance ='homecare';
        } else {
            idInstance='hospital';
        }
        if(func==null) func="";

        if(id>1) {
            return new Promise((resolve , reject) => {
                let url ='http://localhost:8080/'+idInstance+'/'+func;
                console.log(url);
                http.get('http://localhost:8080/'+idInstance+'/'+func, (resp) => {

                    resp.on('data',(chunk) => {
                        //console.log(chunk.toString());
                        return resolve(JSON.parse(chunk.toString()));
                    });

                    resp.on('error', (error) => {
                        console.error(error);
                        return reject(error);
                    });

                    resp.on('end', () => {
                        console.log('end call service');
                    });

                }).on("error", (err) => {
                    console.error("Error: " + err.message);
                    return reject(err)
                });
            });
        } else {
            return new Promise((resolve , reject) => {
                let option={
                    host: "http://localhost",
                    port: 8080,
                    method: "POST",
                    path: idInstance+'/oauth/token?grant_type=password&username=bill&password=abc123',//I don't know for some reason i have to use full url as a path
                    auth: 'my-trusted-client:secret'
                };
                http.get(option, (resp) => {

                    resp.on('data',(chunk) => {
                        //console.log(chunk.toString());
                        return resolve(JSON.parse(chunk.toString()));
                    });

                    resp.on('error', (error) => {
                        console.error(error);
                        return reject(error);
                    });

                    resp.on('end', () => {
                        console.log('end call service');
                    });

                }).on("error", (err) => {
                    console.error("Error: " + err.message);
                    return reject(err)
                });
            });
        }


    }
};