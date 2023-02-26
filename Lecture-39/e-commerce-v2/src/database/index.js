import mongoose from 'mongoose';
import logger from '../core/logger';

const disconnectDB = async () => {
  await mongoose.disconnect();
};

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://localhost:27017/e-commerce-db');
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
