import { Router } from 'express';
import Controller from './Controller';
import validationHandler from '../../middleware/valiadationHandler';
import auth from '../../libs/routes/authMiddleWare';
import validations from './validations';
import { permissions } from '../../../Extra/constants';

const traineeRoutes = Router();

traineeRoutes.get('/get', auth(permissions, 'read'), validationHandler(validations.get), Controller.getMethod );

traineeRoutes.post( '/post', auth(permissions.Users, 'write'), validationHandler(validations.create), Controller.postMethod );

traineeRoutes.put('/put', auth(permissions, 'read'), validationHandler(validations.update), Controller.putMethod );

traineeRoutes.delete('/delete', auth(permissions, 'read'), validationHandler(validations.delete), Controller.deleteMethod );

export default traineeRoutes;