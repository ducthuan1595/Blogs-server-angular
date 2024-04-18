import { createClient, RedisClientType } from "redis";
import dotenv from 'dotenv';

dotenv.config();

const redisClient: RedisClientType = createClient({
  password: '5gxUGDUyJQGOpiMih7LtlAROHDvPisfu',
  socket: {
      host: 'redis-13519.c244.us-east-1-2.ec2.cloud.redislabs.com',
      port: 13519
  }
});
const initRedis = async():Promise<void> => {
  redisClient.on("error", (error) => console.error("Error redis" + error));
  await redisClient.connect();
}


export {
  redisClient,
  initRedis
};