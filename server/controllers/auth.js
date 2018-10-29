const mongoose = require('mongoose');
const User = require('../models/user-model');

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }, (existingUser, error) => {
    if (error) return next(error);

    if (existingUser) {
      return res.status(422).send({ Error: 'This email already exists.' });
    }

    new User({ email, password }).save((error, savedUser) => {
      if (error) return next(error);
      res.status(200).json(savedUser);
    });
  });
};
