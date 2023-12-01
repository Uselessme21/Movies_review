const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: [String],
  releaseYear: Number,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
