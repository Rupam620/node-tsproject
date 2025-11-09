import { v4 as uuidv4 } from 'uuid';
const db: any[] = [];
const list = async () => db;
const get = async (id: string) => db.find(x=>x.id===id);
const create = async (payload: any) => { const item = { id: uuidv4(), ...payload, published: false }; db.push(item); return item; };
const update = async (id: string, payload: any) => { const i=db.findIndex(x=>x.id===id); db[i]={...db[i],...payload}; return db[i]; };
const remove = async (id: string) => { const i=db.findIndex(x=>x.id===id); if(i>=0) db.splice(i,1); };
const publish = async (id: string) => { const p = db.find(x=>x.id===id); if(p) p.published = true; return p; };
export default { list, get, create, update, remove, publish };
