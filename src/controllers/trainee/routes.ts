import { Router } from 'express';
import Controller from './Controller';

const traineeRoutes = Router();

traineeRoutes.get('/get',Controller.getMethod );

traineeRoutes.post('/post',Controller.postMethod );

traineeRoutes.put('/put',Controller.putMethod );

traineeRoutes.delete('/delete',Controller.deleteMethod );

export default traineeRoutes;