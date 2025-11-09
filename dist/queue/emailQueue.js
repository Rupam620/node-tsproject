"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = __importDefault(require("../config"));
const connection = new ioredis_1.default(config_1.default.redisUrl);
const emailQueue = new bullmq_1.Queue('emailQueue', { connection });
const worker = new bullmq_1.Worker('emailQueue', async (job) => {
    if (job.name === 'post-published') {
        console.log('Sending email for post', job.data.postId);
    }
}, { connection });
exports.default = emailQueue;
