const orm = require('../config/orm');


const burgersModel = {
    selectAll: callback => {
        orm.selectAll('heroku_bf59787b80b0d4b.burgers', res => {
            callback(res);
        });
    },
    insertOne: (cols, vals, callback) => {
        orm.insertOne('heroku_bf59787b80b0d4b.burgers', cols, vals, res => {
            callback(res);
        });
    },
    updateOne: (objColVals, condition, callback) => {
        orm.updateOne('heroku_bf59787b80b0d4b.burgers', objColVals, condition, res => {
            callback(res);
        });
    }
};

module.exports = burgersModel;