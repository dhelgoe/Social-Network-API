const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../../controllers/userController')

router.route('/').get(getUser).post(createUsers);

router.route('/:id').get(getSingleUser).put(updateUsers).delete(deleteUsers);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;

