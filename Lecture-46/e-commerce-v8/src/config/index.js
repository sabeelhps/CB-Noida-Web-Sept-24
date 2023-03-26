if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
import database from './database';

export const secret = process.env.SECRET || 'we need a better secret';

export const node_env = process.env.NODE_ENV || 'development';

export { database };
