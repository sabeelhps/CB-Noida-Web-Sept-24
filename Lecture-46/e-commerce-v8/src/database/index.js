import mongoose from 'mongoose';
import logger from '../core/logger';

const disconnectDB = async () => {
  await mongoose.disconnect();
};

const connectDB = async () => {
  try {
    const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/e-commerce-db';
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
