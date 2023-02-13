let express = require('express');
let router = express.Router();

let UserController = require('../controllers/UserController.js');

let isAdmin = require('../middlewares/isAdmin.js');
let isUser = require('../middlewares/isUser.js');
let verifyToken = require('../middlewares/verifyToken.js');

/* GET users listing. */
router.get("/", verifyToken, isAdmin, UserController.getAll);
router.get("/:id/delete", verifyToken, isAdmin, UserController.deleteUser);
router.get("/:id", verifyToken, UserController.getInfo);
router.post("/:id/buy/:game", verifyToken, UserController.buyGame);
router.get("/:id/remove/:game", verifyToken, UserController.removeGame);

module.exports = router;
