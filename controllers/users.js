const User = require('../models/user');
const { validationFunction } = require('../utils/errorHandler');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(users => res.status(200).send({ data: users }))
    .catch((err) => validationFunction(err, res));
};

module.exports.getUser = (req, res) => {
  console.log(req.params)
  User.findById(req.params.userId)
    .then(user => {
      if (user) {
        res.status(200).send(user)
      } else {
        return Promise.reject({ name: "NotFound" })
      }
    })
    .catch((err) => validationFunction(err, res))
};

module.exports.postUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.status(200).send(user))
    .catch((err) => validationFunction(err, res));
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  const userId = req.user._id;

  User.findByIdAndUpdate(userId, { name, about })
    .then(user => res.status(200).send(user))
    .catch((err) => validationFunction(err, res));
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  const userId = req.user._id;

  User.findByIdAndUpdate(userId, { avatar }, { new: true })
    .then(user =>
      res.status(200).send(user)
    )
    .catch((err) => validationFunction(err, res));
};
