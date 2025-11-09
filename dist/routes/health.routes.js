"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/live', (req, res) => res.json({ ok: true }));
router.get('/ready', (req, res) => res.json({ ready: true }));
exports.default = router;
