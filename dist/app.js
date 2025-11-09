"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const pino_http_1 = __importDefault(require("pino-http"));
const logger_1 = __importDefault(require("./logger"));
const requestId_1 = __importDefault(require("./middleware/requestId"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const rateLimiter_1 = __importDefault(require("./middleware/rateLimiter"));
const routes_1 = __importDefault(require("./routes"));
const prom_client_1 = __importDefault(require("prom-client"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(requestId_1.default);
app.use((0, pino_http_1.default)({ logger: logger_1.default }));
app.use(rateLimiter_1.default);
const collectDefaultMetrics = prom_client_1.default.collectDefaultMetrics;
collectDefaultMetrics();
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', prom_client_1.default.register.contentType);
    res.end(await prom_client_1.default.register.metrics());
});
app.get('/', (req, res) => {
    res.json({
        name: 'Node API Starter (TypeScript)',
        status: 'ok',
        docs: '/api',
        health: '/api/health/live'
    });
});
app.use('/api', routes_1.default);
app.use(errorHandler_1.default);
exports.default = app;
