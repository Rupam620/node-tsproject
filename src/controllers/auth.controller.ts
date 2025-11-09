import { Request, Response } from 'express';
import AuthService from '../services/auth.service';
const register = async (req: Request, res: Response) => {
  const user = await AuthService.register(req.body);
  res.status(201).json({ success: true, data: user });
};
const login = async (req: Request, res: Response) => {
  const tokens = await AuthService.login(req.body);
  res.json({ success: true, data: tokens });
};
const refresh = async (req: Request, res: Response) => {
  const tokens = await AuthService.refresh(req.body);
  res.json({ success: true, data: tokens });
};
export default { register, login, refresh };
