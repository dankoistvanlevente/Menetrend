const mysql = require('mysql');
const config = require('../config/configDB.json')

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.dbname,
    user: config.user,
    password: config.passwd
});

//async - wait - promise - átdolgozni a másik szerint
module.exports.vonatLista = function (vId) {
    myQuery = `SELECT vNev, allId, ora, perc, jelleg FROM esemeny INNER JOIN vonat on vonat.vId=esemeny.vId WHERE vId=${vId}`;
    connection.query(myQuery, (err, result, fields) => {
        if (err) throw err;
        return JSON.parse(JSON.stringify(result));
    })
}

module.exports.vonatKodok = function (callback) {
    myQuery = 'SELECT vID, vNev FROM vonat';
    connection.query(myQuery, (err, result, fields) => {
        if (err) {
            callback(err, null);
        } else
            callback(null, JSON.parse(JSON.stringify(result)));
    })
}