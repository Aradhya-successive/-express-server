import { Request , Response, NextFunction } from "express";

export default ((err: any, req: Request, res: Response, next: NextFunction) =>{
    console.log(err);
    // tslint:disable-next-line: no-unused-expression
    res.json[
        {
            error: err.error,
            status: err.code,
            message: err.message || 'Error',
            timeStamp: new Date()
        }
    ];
});