import { Request, Response } from 'express';
import PostsService from '../services/posts.service';
const list = async (req: Request, res: Response) => {
  const items = await PostsService.list();
  res.json({ success: true, data: items });
};
const get = async (req: Request, res: Response) => {
  const item = await PostsService.get(req.params.id);
  if(!item) return res.status(404).json({ success: false, error: { message: 'Not found' } });
  res.json({ success: true, data: item });
};
const create = async (req: Request, res: Response) => {
  const created = await PostsService.create(req.body);
  res.status(201).json({ success: true, data: created });
};
const update = async (req: Request, res: Response) => {
  const updated = await PostsService.update(req.params.id, req.body);
  res.json({ success: true, data: updated });
};
const remove = async (req: Request, res: Response) => {
  await PostsService.remove(req.params.id);
  res.status(204).end();
};
const publish = async (req: Request, res: Response) => {
  await PostsService.publish(req.params.id);
  res.json({ success: true });
};
export default { list, get, create, update, remove, publish };
