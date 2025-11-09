"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
const logger_1 = __importDefault(require("../logger"));
function errorHandler(err, req, res, next) {
    const isOperational = err.isOperational ?? false;
    const status = err.statusCode || 500;
    const safeMessage = isOperational ? err.message : 'Internal Server Error';
    logger_1.default.error({ err, reqId: req.requestId }, 'Unhandled error');
    res.status(status).json({ success: false, error: { message: safeMessage, code: err.code || 'INTERNAL_ERROR' } });
}
