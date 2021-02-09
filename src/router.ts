import traineeRoutes  from  './controllers/trainee/routes';
import { Router } from 'express';

const router = Router();

router.use('/trainee',traineeRoutes)
  

export default router;