"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comments_repo_1 = __importDefault(require("../repos/comments.repo"));
const create = async (payload) => comments_repo_1.default.create(payload);
const listByPost = async (postId) => comments_repo_1.default.findByPost(postId);
exports.default = { create, listByPost };
