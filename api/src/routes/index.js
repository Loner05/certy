const { Router } = require("express");
const userRouter = require('./userRouter')
const testRouter = require('./testRouter/testRouter.js')
const filesRouter = require('./filesRouter/filesRouter.js')
const router = Router();
const {User, conn } = require('../../src/db.js');

router.use('/user', userRouter)
router.use('/test', testRouter)
  router.use('/files', filesRouter)


module.exports = router;