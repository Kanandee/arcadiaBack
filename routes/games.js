var { Router } = require('express');
const router = Router();

var GameController = require('../controllers/GameController.js');

router.get("/", GameController.getAll);

module.exports = router;