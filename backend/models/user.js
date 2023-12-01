const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  watchedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
