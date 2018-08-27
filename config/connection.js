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

handleDisconnect = () => {
    connection.connect(err => {
        if (err) {
            console.error(`error connecting: ${err.stack}`);
            setTimeout(handleDisconnect, 2000);
            // return;
        }
        console.log(`connected as id ${connection.threadId}`);
    });

    connection.on('error', err => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();

module.exports = connection;