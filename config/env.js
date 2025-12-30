require('dotenv').config();

const requiredVars = [
  'DB_HOST_STAGE',
  'DB_PORT_STAGE',
  'DB_NAME_STAGE',
  'DB_USER_STAGE',
  'DB_PASSWORD_STAGE'
];

// Validate required environment variables
const missing = requiredVars.filter(v => {
  const value = process.env[v];
  // Allow empty string for password, but not undefined/null
  if (v === 'DB_PASSWORD_STAGE') {
    return value === undefined || value === null;
  }
  return !value || value.trim() === '';
});

if (missing.length > 0) {
  console.error('❌ Missing required environment variables:', missing.join(', '));
  console.error('\nPlease create a .env file in the project root with:');
  console.error('DB_HOST_STAGE=localhost');
  console.error('DB_PORT_STAGE=3306');
  console.error('DB_NAME_STAGE=stella_pet_services');
  console.error('DB_USER_STAGE=root');
  console.error('DB_PASSWORD_STAGE=1234');
  console.error('\nOr copy .env.example to .env and update values\n');
  process.exit(1);
}

module.exports = {
  db: {
    host: process.env.DB_HOST_STAGE,
    port: parseInt(process.env.DB_PORT_STAGE, 10),
    database: process.env.DB_NAME_STAGE,
    user: process.env.DB_USER_STAGE,
    password: process.env.DB_PASSWORD_STAGE || '',
    waitForConnections: true,
    connectionLimit: 10,
    enableKeepAlive: true,
    queueLimit: 0
  },
  session: {
    secret: process.env.SESSION_SECRET || 'stella-pet-services-secret-key-change-in-production'
  },
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development'
};

