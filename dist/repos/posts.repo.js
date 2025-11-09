"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const db = [];
const list = async () => db;
const get = async (id) => db.find(x => x.id === id);
const create = async (payload) => { const item = { id: (0, uuid_1.v4)(), ...payload, published: false }; db.push(item); return item; };
const update = async (id, payload) => { const i = db.findIndex(x => x.id === id); db[i] = { ...db[i], ...payload }; return db[i]; };
const remove = async (id) => { const i = db.findIndex(x => x.id === id); if (i >= 0)
    db.splice(i, 1); };
const publish = async (id) => { const p = db.find(x => x.id === id); if (p)
    p.published = true; return p; };
exports.default = { list, get, create, update, remove, publish };
