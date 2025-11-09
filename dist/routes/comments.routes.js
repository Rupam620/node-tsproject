"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncWrapper_1 = require("../middleware/asyncWrapper");
const comments_controller_1 = __importDefault(require("../controllers/comments.controller"));
const router = (0, express_1.Router)();
router.post('/', (0, asyncWrapper_1.asyncWrapper)(comments_controller_1.default.create));
router.get('/post/:postId', (0, asyncWrapper_1.asyncWrapper)(comments_controller_1.default.listByPost));
exports.default = router;
