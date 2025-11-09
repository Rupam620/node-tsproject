"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_service_1 = __importDefault(require("../services/posts.service"));
const list = async (req, res) => {
    const items = await posts_service_1.default.list();
    res.json({ success: true, data: items });
};
const get = async (req, res) => {
    const item = await posts_service_1.default.get(req.params.id);
    if (!item)
        return res.status(404).json({ success: false, error: { message: 'Not found' } });
    res.json({ success: true, data: item });
};
const create = async (req, res) => {
    const created = await posts_service_1.default.create(req.body);
    res.status(201).json({ success: true, data: created });
};
const update = async (req, res) => {
    const updated = await posts_service_1.default.update(req.params.id, req.body);
    res.json({ success: true, data: updated });
};
const remove = async (req, res) => {
    await posts_service_1.default.remove(req.params.id);
    res.status(204).end();
};
const publish = async (req, res) => {
    await posts_service_1.default.publish(req.params.id);
    res.json({ success: true });
};
exports.default = { list, get, create, update, remove, publish };
