import UsersRepo from '../repos/users.repo';
const list = async () => UsersRepo.list();
const get = async (id: string) => UsersRepo.get(id);
const create = async (payload: any) => UsersRepo.create(payload);
const update = async (id: string, payload: any) => UsersRepo.update(id, payload);
const remove = async (id: string) => UsersRepo.remove(id);
export default { list, get, create, update, remove };
