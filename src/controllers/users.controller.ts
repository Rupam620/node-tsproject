import { Request, Response } from 'express';
import UsersService from '../services/users.service';
const list = async (req: Request, res: Response) => {
  const items = await UsersService.list();
  res.json({ success: true, data: items });
};
const get = async (req: Request, res: Response) => {
  const item = await UsersService.get(req.params.id);
  if(!item) return res.status(404).json({ success: false, error: { message: 'Not found' } });
  res.json({ success: true, data: item });
};
const create = async (req: Request, res: Response) => {
  const created = await UsersService.create(req.body);
  res.status(201).json({ success: true, data: created });
};
const update = async (req: Request, res: Response) => {
  const updated = await UsersService.update(req.params.id, req.body);
  res.json({ success: true, data: updated });
};
const remove = async (req: Request, res: Response) => {
  await UsersService.remove(req.params.id);
  res.status(204).end();
};
export default { list, get, create, update, remove };
