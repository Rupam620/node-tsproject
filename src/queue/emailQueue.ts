import { Queue, Worker } from 'bullmq';
import IORedis from 'ioredis';
import config from '../config';
const connection = new IORedis(config.redisUrl);
const emailQueue = new Queue('emailQueue', { connection });
const worker = new Worker('emailQueue', async job => {
  if(job.name === 'post-published'){
    console.log('Sending email for post', job.data.postId);
  }
}, { connection });
export default emailQueue;
