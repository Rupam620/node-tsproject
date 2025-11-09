"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_repo_1 = __importDefault(require("../repos/users.repo"));
const list = async () => users_repo_1.default.list();
const get = async (id) => users_repo_1.default.get(id);
const create = async (payload) => users_repo_1.default.create(payload);
const update = async (id, payload) => users_repo_1.default.update(id, payload);
const remove = async (id) => users_repo_1.default.remove(id);
exports.default = { list, get, create, update, remove };
