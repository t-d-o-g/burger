const connection = require('../config/connection');

printQuestionMarks = num => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

objToSql = ob => {
    var arr = [];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`; 
            }
            arr.push(`${key}=${value}`);
        }
    }

    return arr.toString();
}


const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = ``;

    },
    insertOne: (table, cols, vals, cb) => {
        let queryString = ``;

    },
    updateOne: (table, objColVals, condition, cb) => {
        let queryString = ``;

    }
}

module.exports = orm;