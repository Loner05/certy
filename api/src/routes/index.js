const { Router } = require("express");
const userRouter = require('./userRouter')
const testRouter = require('./testRouter/testRouter')
const router = Router();
const {User, conn } = require('../../src/db.js');

router.use('/user', userRouter)
router.use('/test', testRouter)
  


module.exports = router;