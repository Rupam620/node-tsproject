"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncWrapper_1 = require("../middleware/asyncWrapper");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const router = (0, express_1.Router)();
router.get('/', (0, asyncWrapper_1.asyncWrapper)(users_controller_1.default.list));
router.get('/:id', (0, asyncWrapper_1.asyncWrapper)(users_controller_1.default.get));
router.post('/', (0, asyncWrapper_1.asyncWrapper)(users_controller_1.default.create));
router.put('/:id', (0, asyncWrapper_1.asyncWrapper)(users_controller_1.default.update));
router.delete('/:id', (0, asyncWrapper_1.asyncWrapper)(users_controller_1.default.remove));
exports.default = router;
