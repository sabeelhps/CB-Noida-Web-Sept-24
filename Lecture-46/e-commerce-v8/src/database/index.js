import mongoose from 'mongoose';
import logger from '../core/logger';
import { database, node_env } from '../config';

const disconnectDB = async () => {
  await mongoose.disconnect();
};

const connectDB = async () => {
  try {
    logger.info(`Starting the application in ${node_env} mode.`);
    const dbUrl = database[node_env].dbUrl;
    dbUrl.includes("localhost") ? logger.info('Connecting to local database!') : logger.info('Connecting to production database!'); 
    mongoose.set('strictQuery', false);
    await mongoose.connect(dbUrl);
    logger.info('DB connection open!');
  } catch (err) {
    logger.error(err);
    disconnectDB();
    logger.error('DB Connection Closed');
  }
};

export default {
  connectDB,
  disconnectDB,
};
