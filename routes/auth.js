let { Router } = require('express');
const router = Router();

let AuthController = require('../controllers/AuthController.js');

/* POST register login. */
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

module.exports = router;
