import { Request , Response } from  'express';
class Controller {
    public getMethod(req: Request, res: Response) {
        console.log('get method from trainee Controller' );
         return res.send('get method for trainee Controller');
    }
    public postMethod(req: Request, res: Response) {
        console.log('post method from trainee Controller', req.body);
        return res.send('post method for trainee Controller');
    }
    public putMethod(req: Request, res: Response) {
        console.log('put method from trainee Controller');
        return res.send('put method for trainee Controller');
    }
    public deleteMethod(req: Request, res: Response) {
        console.log('delete method from trainee Controller');
        return res.send('delete method for trainee Controller');
    }

}
export default  new Controller();