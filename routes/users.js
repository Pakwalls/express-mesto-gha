const User = require('../models/user');
const { router } = require('express').Router();

//GET
router.get('/users', (req, res) => {
  User.find({})
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
})


router.post('/', (req, res) => {
  const { name, about } = req.body;

  User.create({ name, about })
    // возвращаем записанные в базу данные пользователю
    .then(user => res.send({ data: user }))
    // если данные не записались, вернём ошибку
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});

module.exports = router;