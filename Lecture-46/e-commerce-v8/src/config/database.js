// Here we will put all the configs of database
// These configs are dummy - Only for understanding
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
export default {
  development: {
    dbUrl: 'mongodb://localhost:27017/e-commerce-db',
    port: 27017,
    username: 'user',
    password: 'password',
  },
  test: {
    dbUrl: 'mongodb://localhost:27017/e-commerce-db',
    port: 27017,
    username: 'user',
    password: 'password',
  },
  production: {
    dbUrl: process.env.DB_URL,
    port: 27017,
    username: 'user',
    password: 'password',
  },
};
