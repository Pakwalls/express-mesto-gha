const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const cardRoutes = require('./routes/cards');


const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '630d2400fe1689055205c552'
  };

  next();
});

app.use('/', userRoutes);
app.use('/', cardRoutes);

app.use((req, res) => {
  res.status(404).send({ message: `404 - Страница не найдена` });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});