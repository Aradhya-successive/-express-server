import * as express from 'express';
import { IConfig } from './Config/IConfig';
import * as bodyParser from 'body-parser';
import notFoundRoute from './Config/notFoundRoute';
import errorHandlers from './libs/routes/errorHandler';
import router from './router';

 class Server {

     private application;

     constructor(private config: IConfig) {
         this.application = express();
     }

     public bootstrap() {
        this.initBodyParser();
         this.setupRoutes();
         return this;
     }
     private setupRoutes() {
         this.application.get('/health-check', (req, res) => {
             res.send('I am OK');
         });
        this.application.use('/api', router);
        this.application.use(notFoundRoute);
        this.application.use(errorHandlers);
     }

     public initBodyParser() {
         this.application.use(bodyParser.json());
     }
     public run() {
         console.log('Inside setupRputes method');
         const runningServer = this.application.listen(this.config.port);
         runningServer.on('Success', () => {
         console.log(`Application is running successfully`); }
         );

         runningServer.on('error', (err: any) => {
             console.error(err);
         });

     }
 }

 export  default Server;