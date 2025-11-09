"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_repo_1 = __importDefault(require("../repos/posts.repo"));
const emailQueue_1 = __importDefault(require("../queue/emailQueue"));
const list = async () => posts_repo_1.default.list();
const get = async (id) => posts_repo_1.default.get(id);
const create = async (payload) => posts_repo_1.default.create(payload);
const update = async (id, payload) => posts_repo_1.default.update(id, payload);
const remove = async (id) => posts_repo_1.default.remove(id);
const publish = async (id) => {
    const post = await posts_repo_1.default.publish(id);
    await emailQueue_1.default.add('post-published', { postId: id });
    return post;
};
exports.default = { list, get, create, update, remove, publish };
