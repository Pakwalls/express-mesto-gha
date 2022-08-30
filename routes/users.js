const router = require('express').Router();
const {
  getUser, getUsers, postUser, updateUser, updateAvatar,
} = require('../controllers/users');

// GET users
router.get('/users', getUsers);

// GET user
router.get('/users/:userId', getUser);

// POST user
router.post('/users', postUser);

// PATCH user
router.patch('/users/me', updateUser);

// PATCH avatar
router.patch('/users/me/avatar', updateAvatar);

module.exports = router;
