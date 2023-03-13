let express = require('express');
let router = express.Router();

let UserController = require('../controllers/UserController.js');

let isAdmin = require('../middlewares/isAdmin.js');
let isUser = require('../middlewares/isUser.js');
let verifyToken = require('../middlewares/verifyToken.js');

/* GET users listing. */
router.get("/", verifyToken, isAdmin, UserController.getAll);
router.delete("/:id/delete", verifyToken, isAdmin, UserController.deleteUser);
router.put("/:id/update", verifyToken, isAdmin, UserController.updateUser);
router.get("/:id", verifyToken, UserController.getInfo);
router.post("/buy/:gameId", verifyToken, UserController.buyGame);
router.delete("/remove/:gameId", verifyToken, UserController.removeGame);

module.exports = router;
