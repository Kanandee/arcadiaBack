let { Router } = require('express');
const router = Router();

let GameController = require('../controllers/GameController.js');
let verifyToken = require('../middlewares/verifyToken.js');

router.get("/", verifyToken, GameController.getAll);
router.get("/:id", verifyToken, GameController.getById);
router.get("/name/:name", verifyToken, GameController.getByName);
router.get("/platform/:platform", verifyToken, GameController.getByPlatform);

module.exports = router;