import { Request , Response } from  'express';

class Controller{

    public getMethod(req: Request, res: Response){
        console.log('get method from trainee Controller');
        res.send('get method for trainee Controller');
    }
    
    public postMethod(req: Request, res: Response){
        console.log('post method from trainee Controller');
        res.send('post method for trainee Controller');
    }

    public putMethod(req: Request, res: Response){
        console.log('put method from trainee Controller');
        res.send('put method for trainee Controller');
    }
    
    public deleteMethod(req: Request, res: Response){
        console.log('delete method from trainee Controller');
        res.send('delete method for trainee Controller');
    }

}

export default  new Controller();