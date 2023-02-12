let { Router } = require('express');
const router = Router();

let GameController = require('../controllers/GameController.js');

router.get("/", GameController.getAll);

module.exports = router;