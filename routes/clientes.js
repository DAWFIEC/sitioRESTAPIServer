var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* GET clientes listing. */
router.get('/', function(req, res, next) {
  models.clientes.findAll({
        attributes: { exclude: ["updatedAt"] }
    })
    .then(clientes => {
        res.send(clientes)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
