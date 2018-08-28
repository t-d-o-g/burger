const mysql = require('mysql');
const env = process.env.NODE_ENV || 'local';
let pool;

if (env === 'local') {
    pool = mysql.createPool({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'heroku_bf59787b80b0d4b'
    });
} else if (env === 'production') {
    pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
} else {
    console.error('Invalid environment value');
}

module.exports = pool;