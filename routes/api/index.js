const router = require('express').Router();
const userFill = require('./user');
const thoughtsFill = require('./thoughts');

router.use('/thoughts', thoughtsFill);
router.use('/users', userFill)


module.exports = router;