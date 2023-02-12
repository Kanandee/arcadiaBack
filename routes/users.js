let express = require('express');
let router = express.Router();

let UserController = require('../controllers/UserController.js');

let isAdmin = require('../middlewares/isAdmin.js');
let isUser = require('../middlewares/isUser.js');
let verifyToken = require('../middlewares/verifyToken.js');

/* GET users listing. */
router.get("/", UserController.getAll);
router.get("/:id/delete",  UserController.deleteUser);
router.get("/:id",  UserController.getInfo);
router.get("/:id/buy/:game",  UserController.buyGame);
router.get("/:id/remove/:game",  UserController.removeGame);

module.exports = router;
