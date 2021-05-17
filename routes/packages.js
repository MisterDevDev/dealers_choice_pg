const express = require('express');
const router = express.Router();
const packagesList = require('./views/packagesList');
const packageDetail = require('./views/packageDetail')
const { client, seedDB } = require('../db/db');
const sqlQuery = require('../db/sqlQuery')


router.get('/', async (req, res, next) => {
    try{
        const data = await client.query(sqlQuery.baseQuery)
        res.send(packagesList(data.rows))
    } catch (err) {
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const data = await client.query('SELECT * FROM packages as p WHERE p.id = $1', [req.params.id])
        res.send(packageDetail(data.rows[0]));
    }catch (err) {
        console.log(err);
    }
});

module.exports = router;