let { Router } = require ('express');
const router = Router();

let indexRouter = require('./routes/index.js');
let usersRouter = require ('./routes/users.js');
let gamesRouter = require ('./routes/games.js');

router.use("/", indexRouter);
router.use("/users", usersRouter);
router.use("/games", gamesRouter);

module.exports = router;
