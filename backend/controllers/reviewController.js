const Review = require('../models/review');
const Movie = require('../models/movie');


const addReview = async (req, res) => {
  try {
    const { movieId } = req.params;
    const { rating, comment } = req.body;
    const user = req.user;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found.' });
    }

    const review = await Review.create({
      user: user._id,
      movie: movie._id,
      rating,
      comment,
    });

    user.reviews.push(review._id);
    movie.reviews.push(review._id);

    await user.save();
    await movie.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getReviewsByMovieId = async (req, res) => {
  try {
    const { movieId } = req.params;
    const reviews = await Review.find({ movie: movieId }).populate('user');

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;
    const user = req.user; 

    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ message: 'Review not found.' });
    }

    if (review.user.toString() !== user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to update this review.' });
    }

    review.rating = rating;
    review.comment = comment;

    await review.save();
    res.status(200).send({message:"review updated",review});
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const user = req.user; 
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ message: 'Review not found.' });
    }

    if (review.user.toString() !== user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to delete this review.' });
    }

    await review.remove();

   
    const indexInUser = user.reviews.indexOf(review._id);
    const indexInMovie = review.movie.reviews.indexOf(review._id);

    user.reviews.splice(indexInUser, 1);
    review.movie.reviews.splice(indexInMovie, 1);

    await user.save();
    await review.movie.save();

    res.status(202).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addReview, getReviewsByMovieId, updateReview, deleteReview };
