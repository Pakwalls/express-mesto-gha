module.exports.validationFunction = (err, res) => {
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    return res.status(400).send({ "message": "Введены некорректные данные" });
  }
  else if (err.name === 'NotFound') {
    return res.status(404).send({ "message": "Карточка или пользователь не найден" });
  }
  else {
    return res.status(500).send({ message: err.message })
  }
};