import * as dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
import app from './app';
import db from './database';
import logger from './core/logger';

(async () => {
  try {
    await db.connectDB();
    const port = process.env.PORT || 3000;
    app.listen(port , () => {
      logger.info(`server running at port ${port}`);
    });
  } catch (err) {
    logger.error(err);
  }
})();
