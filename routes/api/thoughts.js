const router = require('express').Router();
const Thought = require('../../models');

router.get('/', async(req, res) => {
    try {
        const findAllThoughts = await Thought.find()
        res.json(findAllThoughts)
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const findOneThought = await Thought.findOne({
            _id: req.params.id
        })
    } catch (error) {
        res.json(error)
    }
})

router.post('/', async(req, res) => {
    try {
        const newThought = await Thought.create(req.body)
        res.json(newThought)
    } catch (error) {
        res.json(error)
    }
})

router.put('/thought/:id', async(req, res) => {
    try {
        const updateThought = await Thought.updateOne({
            _id: req.params.id
        })
    } catch (error) {

    }
})

router.delete('/thought/:id', async(req, res) => {
    try {
        const deleteThought = await Thought.delete({
            _id: req.params.id
        })
        res.json(deleteThought)
    } catch (error) {
        res.json(error)
    }
})

router.post('/api/thoughts/:thoughtId/reactions', async(req, res) => {
    try {
        const
    } catch (error) {

    }
})