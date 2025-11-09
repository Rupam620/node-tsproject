import { Router } from 'express';
import { asyncWrapper } from '../middleware/asyncWrapper';
import AuthController from '../controllers/auth.controller';
const router = Router();
router.post('/register', asyncWrapper(AuthController.register));
router.post('/login', asyncWrapper(AuthController.login));
router.post('/refresh', asyncWrapper(AuthController.refresh));
export default router;
