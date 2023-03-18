import app from './app';
import db from './database';
import logger from './core/logger';
import seedDb from './seed';

(async () => {
  try {
    await db.connectDB();

    // This should be removed before creating a production build
    // await seedDb();

    app.listen(3000, () => {
      logger.info('server running at port 3000');
    });
  } catch (err) {
    logger.error(err);
  }
})();
