const Card = require('../models/card');
const { validationFunction } = require('../utils/errorHandler');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then(cards => res.status(200).send(cards))
    .catch((err) => validationFunction(err, res));
};

module.exports.postCard = (req, res) => {
  const { name, link } = req.body;
  const userId = req.user._id;

  Card.create({ name, link, owner: userId })
    .then(card => res.status(200).send(card))
    .catch((err) => validationFunction(err, res));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .then(card => {
      if (card) {
        res.status(200).send(card)
      } else {
        return Promise.reject({ name: "NotFound" })
      }
    })
    .catch((err) => validationFunction(err, res));
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then(card => {
      if (card) {
        res.status(200).send(card)
      } else {
        return Promise.reject({ name: "NotFound" })
      }
    })
    .catch((err) => validationFunction(err, res));
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then(card => {
      if (card) {
        res.status(200).send(card)
      } else {
        return Promise.reject({ name: "NotFound" })
      }
    })
    .catch((err) => validationFunction(err, res));
};