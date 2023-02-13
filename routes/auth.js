let { Router } = require('express');
const router = Router();

let AuthController = require('../controllers/AuthController.js');

/* POST register login. */
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/token", AuthController.generateToken);

module.exports = router;
