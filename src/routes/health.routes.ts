import { Router } from 'express';
const router = Router();
router.get('/live', (req, res) => res.json({ ok: true }));
router.get('/ready', (req, res) => res.json({ ready: true }));
export default router;
