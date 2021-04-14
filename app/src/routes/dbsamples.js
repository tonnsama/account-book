var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', async function(req, res, next) {
    const expensecategories = await models.ExpenseCategory.findAll();
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send(expensecategories);
});

module.exports = router;
