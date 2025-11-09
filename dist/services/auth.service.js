"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_repo_1 = __importDefault(require("../repos/users.repo"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const register = async (payload) => {
    const user = await users_repo_1.default.create({ ...payload });
    const token = jsonwebtoken_1.default.sign({ sub: user.id }, config_1.default.jwtSecret, { expiresIn: '1h' });
    return { user, token };
};
const login = async (payload) => {
    const user = await users_repo_1.default.findByEmail(payload.email);
    if (!user || user.password !== payload.password)
        throw Object.assign(new Error('Invalid credentials'), { statusCode: 401, isOperational: true });
    const token = jsonwebtoken_1.default.sign({ sub: user.id }, config_1.default.jwtSecret, { expiresIn: '1h' });
    return { token };
};
const refresh = async (payload) => ({ token: 'newtoken' });
exports.default = { register, login, refresh };
