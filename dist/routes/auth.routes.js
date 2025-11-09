"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncWrapper_1 = require("../middleware/asyncWrapper");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const router = (0, express_1.Router)();
router.post('/register', (0, asyncWrapper_1.asyncWrapper)(auth_controller_1.default.register));
router.post('/login', (0, asyncWrapper_1.asyncWrapper)(auth_controller_1.default.login));
router.post('/refresh', (0, asyncWrapper_1.asyncWrapper)(auth_controller_1.default.refresh));
exports.default = router;
