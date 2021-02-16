import { Router } from 'express';
import Controller from './Controller';
import validationHandler from '../../middleware/valiadationHandler';
import validations from './validations';

const traineeRoutes = Router();

traineeRoutes.get('/get', validationHandler(validations.get), Controller.getMethod );

traineeRoutes.post('/post', validationHandler(validations.create), Controller.postMethod );

traineeRoutes.put('/put', validationHandler(validations.update), Controller.putMethod );

traineeRoutes.delete('/delete', validationHandler(validations.delete), Controller.deleteMethod );

export default traineeRoutes;