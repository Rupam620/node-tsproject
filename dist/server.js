"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("./logger"));
const server = http_1.default.createServer(app_1.default);
server.listen(config_1.default.port, () => {
    logger_1.default.info({ port: config_1.default.port }, 'Server listening');
});
const graceful = () => {
    logger_1.default.info('Shutting down gracefully');
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 10000);
};
process.on('SIGINT', graceful);
process.on('SIGTERM', graceful);
