import { Request, Response, Nextfunction } from 'express';

export default (validation: any) => (
    request: Request,
    response: Response,
    next: Nextfunction
)  => {
    console.log('inside validation handler'); 
    console.log('Body:', request.body);  
    const { body, params, query } = request;
        const errors: any = [];
        Object.keys(validation).forEach((key) => {
            const keyProps = validation[key];
            let requiredFlag = false;
            const errorchecker = (valError: any, keyError: any) => {
                if (Object.keys(valError).includes('errorMessage') || Object.keys(keyError).includes('in')) {
                    errors.push(`key : ${key}`, `location: ${valError.in}`, `errorMessage: ${valError.errorMessage}`);
                }
                else if (Object.values(valError).includes('custom')) {
                    errors.push(`Custom Error Message is : ${valError.custom(keyError)}`);
                } else {
                     errors.push('error occured');
                }
            };
        if (Object.keys(keyProps).includes('in')) {
            if (
                (keyProps.in.includes('body') && Object.keys(body).includes(key))
                || (keyProps.in.includes('params') && Object.keys(params).includes(key))
                || (keyProps.in.includes('query') && Object.keys(query).includes(key))
            ) {
                if (Object.keys(keyProps).includes('required')) {
                    if ( keyProps.required === true) {
                        requiredFlag = true;
                    } else if (keyProps.required === false || Object.keys(body).includes(key)) {
                        requiredFlag = true;
                    }
                }
                if ( requiredFlag === true) {
                    if (Object.keys(keyProps).includes('string')) {
                        if (keyProps.string && typeof body[key] === 'string') {//  
                        } else {
                            errorchecker(keyProps, key );
                        }
                    }
                    if (Object.keys(keyProps).includes('number')) {
                        if (keyProps.number === true && typeof body[key] === 'number') {//  
                        } else {
                            errorchecker(keyProps, key );
                        }
                    }
                    if (Object.keys(keyProps).includes('default')){
                        if ( (keyProps.default === '0' && body[key] === 'skip')
                        || ( keyProps.default === '10' && body[key] === 'limit')) {//
                        } else {
                            errorchecker(keyProps, key);
                        }
                    }
                }
            } else {
                errorchecker(keyProps, key);
                response.send(errors);
            }
        }
        });
        if (errors.length > 0) {
            response.send(errors);
           }
             else {
                   next();
             }
};
