const express = require('express');

const { PORT = 3000 } = process.env;
const mongoose = require('mongoose');
const router = require('./routes/users');
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
    useFindAndModify: false
});


app.use('/users', router);










app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});