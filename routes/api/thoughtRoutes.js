const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsbyId,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../controllers/thoughtsController');

router.route('/').get(getAllThoughts);

router.route('/:id').get(getThoughtsbyId).put(updateThoughts).delete(deleteThoughts);

router.route('/:id').post(createThoughts);

router.route('/:thoughId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router