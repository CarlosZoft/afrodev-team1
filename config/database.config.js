require('./environment');

const config = {
  username: process.env.MYSQL_USERNAME || 'root',
  password: process.env.MYSQL_PASSWORD || '@ricduda01',
  database: process.env.MYSQL_DATABASE || 'ong',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  dialect: process.env.MYSQL_DIALECT || 'mysql',
  define: {
    timestamps: true,
  },
};

module.exports = config;
