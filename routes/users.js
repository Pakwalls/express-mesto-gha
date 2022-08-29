const router = require('express').Router();
const { getUser, getUsers, postUser } = require('../controllers/users');

//GET users
router.get('/users', getUsers);

//GET user
router.get('/users/:userId', getUser);

//POST user
router.post('/users', postUser);

module.exports = router;