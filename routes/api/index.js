const router = require('express').Router();
const user = require('./user');
const thoughts = require('./thoughts');

router.use('/thoughts', thoughts);
router.use('/users', user)


module.exports = router;