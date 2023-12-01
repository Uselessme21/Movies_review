const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  rating: Number,
  comment: String,
  timestamp: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
