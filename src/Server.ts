import * as express from 'express'; 
import {IConfig} from "./IConfig";
 
 class server{

     private application: express.Express;

     constructor(private config: IConfig){
         this.application = express();
     }

     public bootstrap(){
         this.setupRoutes();
         return this;
     }
     private setupRoutes() {
         this.application.get("/health-check",(req, res)=>{
             res.send("I am OK")
         });
     }
     public run(){
         console.log('Inside setupRputes method');
         const runningServer = this.application.listen(this.config.port);
         runningServer.on("Success",()=>{
         console.log(`Application is running successfully`)}
         );

         runningServer.on("error", (err: any) =>{
             console.error(err);
         });

     }
 }

 export  default server;