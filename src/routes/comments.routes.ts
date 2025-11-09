import { Router } from 'express';
import { asyncWrapper } from '../middleware/asyncWrapper';
import CommentsController from '../controllers/comments.controller';
const router = Router();
router.post('/', asyncWrapper(CommentsController.create));
router.get('/post/:postId', asyncWrapper(CommentsController.listByPost));
export default router;
