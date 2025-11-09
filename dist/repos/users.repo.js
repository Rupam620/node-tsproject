"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = [];
const uuid_1 = require("uuid");
const list = async () => db;
const get = async (id) => db.find(d => d.id === id);
const create = async (payload) => { const item = { id: (0, uuid_1.v4)(), ...payload }; db.push(item); return item; };
const update = async (id, payload) => { const i = db.findIndex(d => d.id === id); db[i] = { ...db[i], ...payload }; return db[i]; };
const remove = async (id) => { const i = db.findIndex(d => d.id === id); if (i >= 0)
    db.splice(i, 1); };
const findByEmail = async (email) => db.find(d => d.email === email);
exports.default = { list, get, create, update, remove, findByEmail };
