require('dotenv').config();

module.exports =
{
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME+'_dev',
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  }
  // test: {
  //   username: process.env.DB_NAME,
  //   password: process.env.DB_PASSWORD,
  //   database: `${process.env.DB_NAME}_test`,
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT,
  //   port: process.env.DB_PORT
  // },
  // production: {
  //   username: process.env.DB_NAME,
  //   password: process.env.DB_PASSWORD,
  //   database: `${process.env.DB_NAME}_prod`,
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT
  // },
}
