const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .populate('creator')
    .then(users => res.status(200).send({ data: users }))
    .catch(err => res.status(500).send({ message: err.message }));
};

module.exports.getUser = (req, res) => {
  User.findById(req.params._id)
    .then(user => res.status(200).send({ data: user }))
    .catch(err => res.status(500).send({ message: err.message }));
};


module.exports.postUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({name, about, avatar})
    .then(user => res.status(200).send({ data: user }))
    .catch(err => res.status(500).send({ message: err.message }));
}
