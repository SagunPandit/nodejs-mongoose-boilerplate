import mongoose from 'mongoose';
import logger from './utils/logger';

mongoose
  .connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: false,
    dbName: process.env.DB_NAME
  })
  .catch(() => {
    logger.info(`Check your database config. Database connection error.`);
    process.exit();
  });

export default mongoose;
