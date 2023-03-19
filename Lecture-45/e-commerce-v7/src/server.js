import app from './app';
import db from './database';
import logger from './core/logger';

(async () => {
  try {
    await db.connectDB();

    app.listen(3000, () => {
      logger.info('server running at port 3000');
    });
  } catch (err) {
    logger.error(err);
  }
})();
