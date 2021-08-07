var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* GET ordenes listing. */
router.get('/', function(req, res, next) {
  models.ordenes.findAll({
        attributes: { exclude: ["updatedAt"] }
    })
    .then(ordenes => {
        res.json(ordenes)
    })
    .catch(error => res.status(400).send(error))
});


/* GET ordenes listing. */
router.get('/cliente/:clienteId', function(req, res, next) {
  models.ordenes.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: {
          clienteId: req.params.clienteId
        }
    })
    .then(ordenes => {
        res.json(ordenes)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
