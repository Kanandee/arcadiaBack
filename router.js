let { Router } = require ('express');
const router = Router();

let indexRouter = require('./routes/index.js');
let usersRouter = require ('./routes/users.js');
let gamesRouter = require ('./routes/games.js');
let authRouter = require ('./routes/auth.js');
let rolesRouter = require ('./routes/roles.js')

router.use("/", indexRouter);
router.use("/users", usersRouter);
router.use("/games", gamesRouter);
router.use("/auth", authRouter);
router.use("/roles", rolesRouter)

module.exports = router;
