const express = require("express");

const professoresController = require("../Controller/professoresController");

const router = express.Router();

router.get("/", professoresController.listarProfessores);

module.exports = router;