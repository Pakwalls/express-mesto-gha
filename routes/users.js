const router = require('express').Router();
const {
  getUser,
  getUsers,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

// GET users
router.get('/users', getUsers);

// GET user
router.get('/users/:userId', getUser);

// PATCH user
router.patch('/users/me', updateUser);

// PATCH avatar
router.patch('/users/me/avatar', updateAvatar);

module.exports = router;
