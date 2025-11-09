"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("../services/auth.service"));
const register = async (req, res) => {
    const user = await auth_service_1.default.register(req.body);
    res.status(201).json({ success: true, data: user });
};
const login = async (req, res) => {
    const tokens = await auth_service_1.default.login(req.body);
    res.json({ success: true, data: tokens });
};
const refresh = async (req, res) => {
    const tokens = await auth_service_1.default.refresh(req.body);
    res.json({ success: true, data: tokens });
};
exports.default = { register, login, refresh };
