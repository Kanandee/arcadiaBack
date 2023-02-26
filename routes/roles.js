let express = require('express');
let router = express.Router();

let RoleController = require('../controllers/RoleController.js');

let isAdmin = require('../middlewares/isAdmin.js');
let isUser = require('../middlewares/isUser.js');
let verifyToken = require('../middlewares/verifyToken.js');

/* GET roles listing. */
router.get("/", verifyToken, isAdmin, RoleController.getAll);
router.post("/create", verifyToken, isAdmin, RoleController.createRole);

module.exports = router;
