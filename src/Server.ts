import * as express from 'express'; 
import {IConfig} from "./IConfig";
const bodyParser = require("body-parser");
 
 class server{

     private application: express.Express;

     constructor(private config: IConfig){
         this.application = express();
     }

     public bootstrap(){
         this.setupRoutes();
         this.initBodyParser();
         return this;
     }
     private setupRoutes() {
         this.application.get("/health-check",(req, res)=>{
             res.send("I am OK")
         });
     }

     public initBodyParser(){
         this.application.use(bodyParser.json());
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