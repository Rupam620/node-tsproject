"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comments_service_1 = __importDefault(require("../services/comments.service"));
const create = async (req, res) => {
    const created = await comments_service_1.default.create(req.body);
    res.status(201).json({ success: true, data: created });
};
const listByPost = async (req, res) => {
    const items = await comments_service_1.default.listByPost(req.params.postId);
    res.json({ success: true, data: items });
};
exports.default = { create, listByPost };
