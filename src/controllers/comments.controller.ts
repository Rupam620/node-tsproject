import { Request, Response } from 'express';
import CommentsService from '../services/comments.service';
const create = async (req: Request, res: Response) => {
  const created = await CommentsService.create(req.body);
  res.status(201).json({ success: true, data: created });
};
const listByPost = async (req: Request, res: Response) => {
  const items = await CommentsService.listByPost(req.params.postId);
  res.json({ success: true, data: items });
};
export default { create, listByPost };
