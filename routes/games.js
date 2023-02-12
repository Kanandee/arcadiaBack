let { Router } = require('express');
const router = Router();

let GameController = require('../controllers/GameController.js');

router.get("/", GameController.getAll);
router.get("/:id", GameController.getById);
router.get("/name/:name", GameController.getByName);
router.get("/platform/:platform", GameController.getByPlatform);

module.exports = router;