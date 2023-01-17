const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../controllers/thoughtsController');

router.route('/').get(getThoughts);

router.route('/:id').get(getSingleThought).put(updateThoughts).delete(deleteThoughts);

router.route('/:id').post(createThoughts);

router.route('/:thoughId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router