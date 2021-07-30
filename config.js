const config = {
  appConfig: {
    host: process.env.APP_HOST || '0.0.0.0',
    port: process.env.PORT || 3001
  },
  dbConfig: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbUsername: process.env.DB_USERNAME,
    dbPass: process.env.DB_PASS
  }
}

module.exports = config