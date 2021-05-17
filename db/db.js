const pg = require('pg');
const sqlQuery = require('./sqlQuery');

const myDB = 'postgres://localhost/popular_npm_db'
const client = new pg.Client(myDB);

const seedDB = async() => {
    await client.query(sqlQuery.seed);
    console.log(myDB + ' successfully seeded')
}


const dbInit = async () => {
    try {
        await client.connect();
        console.log('Client successfully connected to ' + myDB);
    } catch (err) {
        console.log(err)
    }
}

dbInit()

module.exports = {client, seedDB};