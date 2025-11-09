import { v4 as uuidv4 } from 'uuid';
const db: any[] = [];
const create = async (payload: any) => { const item = { id: uuidv4(), ...payload }; db.push(item); return item; };
const findByPost = async (postId: string) => db.filter(x=>x.postId===postId);
export default { create, findByPost };
