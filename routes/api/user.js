const router = require('express').Router();
const User = require('../../models')
router.get('/', async(req, res) => {
    try {
        const findAll = await User.find()
        res.json(findAll)
    } catch (error) {
        res.json(error)
    }
});

router.get('/:id', async(req, res) => {
    try {
        const findOne = await User.findOne({
            _id: req.params.id
        }).populate('friends').populate('thoughts')
        res.json(findOne)
    } catch (error) {
        res.json(error)
    }
});

router.post('/', async(req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;