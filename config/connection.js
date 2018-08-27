const mysql = require('mysql');
const env = process.env.NODE_ENV || 'local';
let connection;

if (env === 'local') {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'heroku_bf59787b80b0d4b'
    });
} else if (env === 'production') {
    connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
    console.error('Invalid environment value');
}

connection.connect(err => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;