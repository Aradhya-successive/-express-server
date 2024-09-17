import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { configurations } from '../../Config/configurations';

export default (module, permissionType) => (request: Request, response: Response, next: NextFunction ) => {
    console.log(module);
    console.log('inside auth validation middleware');
    const token = request.headers.authorization;
    console.log(token);
    const decodeUser = jwt.verify(token, configurations.key);
    console.log(decodeUser);
};


