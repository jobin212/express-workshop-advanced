// Where you will connect your other routers
var express = require('express');
var chalk = require('chalk');
var router = express.Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/tweets', require('./tweets'));

router.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
});
