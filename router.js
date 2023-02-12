var { Router } = require ('express');
const router = Router();

var indexRouter = require('./routes/index.js');
var usersRouter = require ('./routes/users.js');
var gamesRouter = require ('./routes/games.js');

router.use("/", indexRouter);
router.use("/users", usersRouter);
router.use("/games", gamesRouter);

module.exports = router;
