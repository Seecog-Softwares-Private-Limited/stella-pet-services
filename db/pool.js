const mysql = require('mysql2/promise');
const config = require('../config/env');

let pool = null;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: config.db.host,
      port: config.db.port,
      database: config.db.database,
      user: config.db.user,
      password: config.db.password,
      waitForConnections: config.db.waitForConnections,
      connectionLimit: config.db.connectionLimit,
      enableKeepAlive: config.db.enableKeepAlive,
      queueLimit: config.db.queueLimit
    });
    
    console.log('✅ Database pool created');
  }
  return pool;
}

async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
    console.log('✅ Database pool closed');
  }
}

module.exports = {
  getPool,
  closePool
};

