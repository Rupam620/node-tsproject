"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const db = [];
const create = async (payload) => { const item = { id: (0, uuid_1.v4)(), ...payload }; db.push(item); return item; };
const findByPost = async (postId) => db.filter(x => x.postId === postId);
exports.default = { create, findByPost };
