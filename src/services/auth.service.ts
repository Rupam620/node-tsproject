import UsersRepo from '../repos/users.repo';
import jwt from 'jsonwebtoken';
import config from '../config';
const register = async (payload: any) => {
  const user = await UsersRepo.create({ ...payload });
  const token = jwt.sign({ sub: user.id }, config.jwtSecret, { expiresIn: '1h' });
  return { user, token };
};
const login = async (payload: any) => {
  const user = await UsersRepo.findByEmail(payload.email);
  if(!user || user.password !== payload.password) throw Object.assign(new Error('Invalid credentials'), { statusCode: 401, isOperational: true });
  const token = jwt.sign({ sub: user.id }, config.jwtSecret, { expiresIn: '1h' });
  return { token };
};
const refresh = async (payload: any) => ({ token: 'newtoken' });
export default { register, login, refresh };
